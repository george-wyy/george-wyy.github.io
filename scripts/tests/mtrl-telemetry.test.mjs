import assert from 'node:assert/strict';
import vm from 'node:vm';
import { readFileSync } from 'node:fs';
import { randomUUID } from 'node:crypto';
const cases = [];
const test = (name, run) => cases.push({ name, run });

const adapter = readFileSync(new URL('../../demos/mtrl-telemetry.js', import.meta.url), 'utf8');
const html = readFileSync(new URL('../../demos/mtrl-task.html', import.meta.url), 'utf8');
const gameScript = [...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]).join('\n');
const tick = async () => { for (let i = 0; i < 12; i++) await Promise.resolve(); };

function harness(overrides = {}) {
  let next = 0;
  const timers = new Map(), calls = [], storage = new Map();
  const status = { textContent: '' };
  const window = {
    document: { getElementById: () => status },
    MTRL_TELEMETRY_CONFIG: { url: 'https://example.supabase.co', publishableKey: 'sb_publishable_test' },
    crypto: { randomUUID }, AbortController,
    localStorage: { getItem: k => storage.get(k), setItem: (k, v) => storage.set(k, v) },
    setTimeout: (fn, ms) => { const id = ++next; timers.set(id, { fn, ms }); return id; },
    clearTimeout: id => timers.delete(id),
    fetch: async (...args) => { calls.push(args); return { ok: true, status: 201 }; },
    ...overrides
  };
  vm.runInNewContext(adapter, { window });
  return { window, calls, timers, status, storage,
    begin: (extra = {}) => window.MtrlTelemetry.begin({ consent: true, nickname: '', settings: { cfg: '实验 1' }, ...extra }),
    runTimer(ms) {
      const found = [...timers.entries()].find(([, t]) => t.ms === ms);
      assert.ok(found, `timer ${ms} exists`); timers.delete(found[0]); found[1].fn();
    },
    async drain() { for (let i = 0; i < 260 && timers.size; i++) { await tick(); if ([...timers.values()].some(t => t.ms === 1500)) this.runTimer(1500); else break; } await tick(); }
  };
}

test('no configuration and no consent cause no requests or storage writes', async () => {
  for (const extra of [{ MTRL_TELEMETRY_CONFIG: {} }, {}]) {
    const h = harness(extra); h.begin(extra.MTRL_TELEMETRY_CONFIG ? {} : { consent: false });
    h.window.MtrlTelemetry.round(1, {}); await tick();
    assert.equal(h.calls.length, 0); assert.equal(h.storage.size, 0);
  }
});

test('secret keys and non-Supabase/insecure endpoints are refused', () => {
  for (const config of [
    { url: 'https://example.supabase.co', publishableKey: 'sb_secret_do_not_use' },
    { url: 'http://example.supabase.co', publishableKey: 'sb_publishable_test' },
    { url: 'https://example.com', publishableKey: 'sb_publishable_test' }
  ]) { const h = harness({ MTRL_TELEMETRY_CONFIG: config }); h.begin(); assert.equal(h.calls.length, 0); }
});

test('blocked storage still allows anonymous uploads; nickname never becomes HTML', async () => {
  const h = harness({ localStorage: { getItem() { throw Error('blocked'); } } });
  h.begin({ nickname: '<img src=x onerror=alert(1)>' }); await tick(); await h.drain();
  const records = h.calls.map(c => JSON.parse(c[1].body));
  assert.deepEqual(records.map(r => r.kind), ['visit', 'start']);
  assert.match(records[0].visitor_id, /^[0-9a-f-]{36}$/);
  assert.equal(records[0].nickname, '<img src=x onerror=alert(1)>');
  assert.ok(!h.status.textContent.includes('<img'));
  assert.equal(h.calls[0][1].credentials, 'omit');
  assert.equal(h.calls[0][1].referrerPolicy, 'no-referrer');
});

test('visitor persists across sessions while session UUID changes; complete includes rounds', async () => {
  const h = harness(); h.begin(); await tick(); await h.drain();
  h.window.MtrlTelemetry.round(1, { room: 7 });
  h.window.MtrlTelemetry.complete({ log: [{ room: 7 }] });
  await tick(); await h.drain(); h.begin(); await tick(); await h.drain();
  const records = h.calls.map(c => JSON.parse(c[1].body));
  assert.equal(records[0].visitor_id, records.at(-1).visitor_id);
  assert.notEqual(records[0].session_id, records.at(-1).session_id);
  assert.equal(records.find(r => r.kind === 'complete').payload.log[0].room, 7);
});

test('network failures retry same event id and stop after three attempts', async () => {
  const bodies = [];
  const h = harness({ fetch: async (_, opts) => { bodies.push(opts.body); throw Error('offline'); } });
  h.begin(); await tick(); h.runTimer(1500); await tick(); h.runTimer(1500); await tick();
  assert.equal(bodies.length, 3); assert.equal(new Set(bodies).size, 1);
  assert.match(h.status.textContent, /未能保存/);
});

test('hung requests are timed out without an unhandled rejection', async () => {
  const h = harness({ fetch: () => new Promise(() => {}) });
  assert.doesNotThrow(() => h.begin()); await tick(); h.runTimer(4000); await tick();
  assert.match(h.status.textContent, /自动重试/);
  assert.ok([...h.timers.values()].some(t => t.ms === 1500));
});

test('database-denied writes are bounded; duplicate UUID is treated as already saved', async () => {
  for (const response of [
    { ok: false, status: 403 },
    { ok: false, status: 409, json: async () => ({ code: '23505' }) }
  ]) {
    const h = harness({ fetch: async () => response }); h.begin(); await tick(); await h.drain();
    assert.equal(h.timers.size, 0);
    assert.match(h.status.textContent, response.status === 403 ? /未保存/ : /已保存/);
  }
});

test('a later success cannot conceal dropped events', async () => {
  let calls = 0;
  const h = harness({ fetch: async () => ++calls <= 3 ? { ok: false, status: 403 } : { ok: true, status: 201 } });
  h.begin(); await tick(); await h.drain(); assert.match(h.status.textContent, /1 条记录未保存/);
});

test('a throwing status DOM or UUID service never propagates to caller', () => {
  const h = harness({ document: { getElementById() { throw Error('broken UI'); } }, crypto: { randomUUID() { throw Error('broken crypto'); } } });
  assert.doesNotThrow(() => { h.begin(); h.window.MtrlTelemetry.round(1, {}); });
});

function playGame(telemetry) {
  const fields = { '#cfg': { value: '实验 3 / 4' }, '#len': { value: '5' }, '#nickname': { value: '' }, '#upload-consent': { checked: true } };
  const app = {
    innerHTML: '',
    querySelector(selector) {
      return fields[selector] ||= { addEventListener(_, fn) { this.click = fn; } };
    },
    querySelectorAll(selector) { return selector === '.door' ? [0, 1, 2].map(i => ({
      dataset: { i }, classList: { add() {} }, addEventListener() {}
    })) : []; }
  };
  const context = vm.createContext({ window: { MtrlTelemetry: telemetry },
    document: { getElementById: () => app, addEventListener() {} },
    performance: { now: () => 1 }, setTimeout: fn => fn() });
  vm.runInContext(gameScript, context);
  fields['#go'].click();
  // Complete the game through the new tap controls; repeated collection is ignored.
  vm.runInContext('S.room = 1; pricePage();', context);
  for (let i = 0; i < 21; i++) {
    fields['#enter-castle'].click();
    vm.runInContext('choose(0); choose(1);', context);
    const collect = fields['#collect-loot'].click;
    collect(); collect();
    assert.equal(vm.runInContext('S.log.length', context), i + 1);
  }
  vm.runInContext("S.notes = '没有'; result();", context);
  assert.match(app.innerHTML, /结束/);
  assert.equal(vm.runInContext('S.log.length', context), 21);
  fields['#again'].click(); assert.match(app.innerHTML, /开始/);
  return context;
}

test('entire game and replay work with missing telemetry script', () => { playGame(undefined); });
test('entire game and replay work when every telemetry hook throws', () => {
  const fail = () => { throw Error('telemetry broken'); };
  playGame({ begin: fail, round: fail, complete: fail });
});

test('entire game completes while real adapter requests hang or fail', async () => {
  for (const fetch of [() => new Promise(() => {}), async () => { throw Error('offline'); },
    async () => ({ ok: false, status: 403 })]) {
    const h = harness({ fetch });
    playGame(h.window.MtrlTelemetry);
    await tick();
  }
});

let failed = 0;
for (const { name, run } of cases) {
  try { await run(); console.log('PASS', name); }
  catch (error) { failed++; console.error('FAIL', name, error); }
}
console.log(`${cases.length - failed}/${cases.length} passed`);
process.exitCode = failed ? 1 : 0;
