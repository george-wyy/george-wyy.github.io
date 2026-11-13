import assert from 'node:assert/strict';
import vm from 'node:vm';
import { readFileSync } from 'node:fs';
import { randomUUID } from 'node:crypto';
const html = readFileSync(new URL('../../demos/sr-castle.html', import.meta.url), 'utf8');
const source = [...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]).join('\n');
const adapter = readFileSync(new URL('../../demos/mtrl-telemetry.js', import.meta.url), 'utf8');
const cases = [];
const test = (name, fn) => cases.push({ name, fn });
class Element {
  constructor(tag, text = '') { this.tagName = tag; this.nodeType = tag === '#text' ? 3 : 1; this.children = []; this.attrs = {}; this.style = {}; this.events = {}; this.rawText = text; this.className = ''; this.dataset = {}; }
  get classList() { return { add: x => { if (!this.className.split(' ').includes(x)) this.className += ' ' + x; }, toggle: (x, on) => { this.className = this.className.split(' ').filter(y => y !== x).concat(on ? [x] : []).join(' '); } }; }
  setAttribute(k, v) { this.attrs[k] = String(v); if (k.startsWith('data-')) this.dataset[k.slice(5)] = String(v); if (k === 'value') this.value = String(v); }
  append(...nodes) { for (const node of nodes) { const n = typeof node === 'string' ? new Element('#text', node) : node; n.parent = this; this.children.push(n); } }
  replaceChildren(...nodes) { this.children = []; this.rawText = ''; this.append(...nodes); }
  get lastChild() { return this.children.at(-1); }
  set innerHTML(x) { this.children = []; this.rawText = String(x); }
  get textContent() { return this.rawText + this.children.map(x => x.textContent).join(''); }
  set textContent(x) { this.children = []; this.rawText = String(x); }
  get value() { return this._value ?? this.children.find(x => x.tagName === 'option')?.value ?? ''; }
  set value(x) { this._value = x; }
  addEventListener(k, fn) { (this.events[k] ||= new Set()).add(fn); }
  removeEventListener(k, fn) { this.events[k]?.delete(fn); }
  click() { for (const fn of this.events.click || []) fn({ target: this }); }
  matches(selector) {
    if (selector === '#tabs button') return this.tagName === 'button' && this.parent?.attrs.id === 'tabs';
    if (selector.startsWith('#')) return this.attrs.id === selector.slice(1);
    if (selector.startsWith('.')) return selector.slice(1).split('.').every(x => this.className.split(' ').includes(x));
    return this.tagName === selector;
  }
  querySelectorAll(s) { return this.children.flatMap(x => [...(x.matches(s) ? [x] : []), ...x.querySelectorAll(s)]); }
  querySelector(s) { return this.querySelectorAll(s)[0] || null; }
}
const tick = async () => { for (let i = 0; i < 12; i++) await Promise.resolve(); };
function setup({ mode = 'success', config = true, useAdapter = false, telemetry } = {}) {
  const root = new Element('body'), app = new Element('div'), tabs = new Element('div'), status = new Element('p');
  app.setAttribute('id', 'app'); tabs.setAttribute('id', 'tabs'); status.setAttribute('id', 'telemetry-status');
  for (const t of ['play', 'models', 'exp1']) { const b = new Element('button'); b.setAttribute('data-t', t); tabs.append(b); }
  root.append(tabs, app, status);
  const document = { querySelector: s => root.querySelector(s), querySelectorAll: s => root.querySelectorAll(s),
    getElementById: id => root.querySelector('#' + id), createElement: tag => new Element(tag),
    createElementNS: (_, tag) => new Element(tag), createTextNode: t => new Element('#text', t),
    events: {}, addEventListener: Element.prototype.addEventListener, removeEventListener: Element.prototype.removeEventListener };
  const calls = [], storage = new Map(), timers = new Map(); let id = 0;
  const host = { document, GameTelemetry: telemetry,
    GAME_TELEMETRY_CONFIG: config ? { url: 'https://example.supabase.co', publishableKey: 'sb_publishable_test', table: 'sr_castle_events' } : {},
    crypto: { randomUUID }, AbortController,
    localStorage: { getItem: k => storage.get(k), setItem: (k, v) => storage.set(k, v) },
    setTimeout: (fn, ms) => { timers.set(++id, { fn, ms }); return id; }, clearTimeout: id => timers.delete(id),
    fetch: (url, opts) => { calls.push({ url, data: JSON.parse(opts.body) }); return mode === 'hang' ? new Promise(() => {}) : mode === 'fail' ? Promise.reject(Error('offline')) : Promise.resolve({ ok: true, status: 201 }); }
  };
  if (useAdapter) vm.runInNewContext(adapter, { window: host });
  const context = vm.createContext({ window: host, document, location: { hash: '', pathname: '/demos/sr-castle.html' },
    history: { replaceState() {} }, performance: { now: () => 10 }, setTimeout: fn => fn() });
  vm.runInContext(source, context);
  return { context, app, host, document, calls, storage,
    start(keys, consent = true) { vm.runInContext(`startGame(${JSON.stringify(keys)}, {consent:${consent}, nickname:'test-castle', mode:'test'});`, context); },
    finish() {
      let steps = 0;
      while (vm.runInContext('game.running', context)) {
        assert.ok(++steps < 1000);
        const state = vm.runInContext('({at:game.path?.at, initial:game.path?.moves.length === 0, start:game.path?.start, expected:blk().trials[blk().i].s})', context);
        if (state.initial) assert.equal(state.start, state.expected, 'new trial starts at its own designated state');
        if (state.at == null) this.app.querySelector('button').click();
        else if (state.at === 1) this.app.querySelector('.gatepic').click();
        else if (state.at < 4) this.app.querySelector('.door.pick').click();
        else this.app.querySelector('.sq').click();
      }
      return JSON.parse(vm.runInContext('JSON.stringify(game)', context));
    },
    async drain() { for (let i = 0; i < 800; i++) { await tick(); const found = [...timers.entries()].find(([, t]) => t.ms === 1500); if (!found) break; timers.delete(found[0]); found[1].fn(); } await tick(); }
  };
}

test('each condition completes alone without telemetry', () => {
  for (const key of ['reward', 'transition', 'policy', 'control']) {
    const h = setup(); h.start([key]); const game = h.finish();
    assert.equal(game.completed, 49); assert.equal(game.blocks[0].log.length, 49);
    assert.equal(game.blocks[0].log.filter(x => x.ph === 3).length, 1);
    assert.match(h.app.textContent, /一共拿到/);
  }
});
test('all four castles reset paths correctly and complete when hooks throw', () => {
  const fail = () => { throw Error('unavailable'); };
  const h = setup({ telemetry: { begin: fail, round: fail, complete: fail } });
  h.start(['reward', 'transition', 'policy', 'control']); const game = h.finish();
  assert.equal(game.completed, 196); assert.equal(game.blocks.reduce((s, b) => s + b.earned, 0), game.total);
  for (const b of game.blocks) assert.equal(b.log.length, 49);
});
test('real adapter cannot block all four castles when requests hang or fail', async () => {
  for (const mode of ['hang', 'fail']) {
    const h = setup({ useAdapter: true, mode }); h.start(['reward', 'transition', 'policy', 'control']);
    assert.equal(h.finish().completed, 196); await tick(); assert.ok(h.calls.length >= 1);
  }
});
test('successful uploads use independent table and include every trial and final summary', async () => {
  const h = setup({ useAdapter: true }); h.start(['reward', 'transition', 'policy', 'control']); h.finish(); await h.drain();
  assert.equal(h.calls.length, 199);
  assert.ok(h.calls.every(x => x.url.endsWith('/rest/v1/sr_castle_events')));
  assert.equal(h.calls[0].data.payload.game_version, 'sr-castle-1');
  const complete = h.calls.at(-1).data;
  assert.equal(complete.kind, 'complete'); assert.equal(complete.round, 196);
  assert.equal(complete.payload.log.length, 196); assert.equal(complete.payload.blocks.length, 4);
  assert.ok(Buffer.byteLength(JSON.stringify(complete.payload)) < 65536);
  assert.equal(h.calls.filter(x => x.data.kind === 'round').length, 196);
});
test('declined consent or missing config makes no upload and stores no visitor ID', () => {
  for (const config of [true, false]) {
    const h = setup({ useAdapter: true, config }); h.start(['reward'], !config); h.finish();
    assert.equal(h.calls.length, 0); assert.equal(h.storage.size, 0);
  }
});
test('switching to model tabs removes hidden collection shortcuts and preserves the game', () => {
  const h = setup(); h.start(['reward']);
  for (let i = 0; i < 3 && !h.app.querySelector('.sq'); i++) {
    (h.app.querySelector('.gatepic') || h.app.querySelector('.door.pick')).click();
  }
  assert.equal(h.document.events.keydown.size, 1);
  vm.runInContext("show('models')", h.context); assert.equal(h.document.events.keydown.size, 0);
  assert.match(h.app.textContent, /混合模型/);
  vm.runInContext("show('exp1')", h.context); assert.match(h.app.textContent, /实验 1/);
  vm.runInContext("show('play')", h.context); assert.equal(h.document.events.keydown.size, 1);
  assert.equal(h.finish().completed, 49);
});
test('repeated taps cannot duplicate a route choice or collection', () => {
  const h = setup(); h.start(['reward']);
  vm.runInContext('game.blocks[0].trials[0] = {ph:1,s:1}; game.path = null; renderTrial();', h.context);
  const gate = h.app.querySelector('.gatepic'); gate.click(); gate.click();
  assert.equal(vm.runInContext('game.path.moves.length', h.context), 1);
  const door = h.app.querySelector('.door.pick'); door.click(); door.click();
  assert.equal(vm.runInContext('game.path.moves.length', h.context), 2);
  const square = h.app.querySelector('.sq'); square.click(); square.click();
  assert.equal(vm.runInContext('game.completed', h.context), 1);
  assert.equal(h.finish().completed, 49);
});
let failed = 0;
for (const { name, fn } of cases) { try { await fn(); console.log('PASS', name); } catch (e) { failed++; console.error('FAIL', name, e); } }
console.log(`${cases.length - failed}/${cases.length} passed`); process.exitCode = failed ? 1 : 0;
