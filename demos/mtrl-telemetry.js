/* Optional, consent-based telemetry. Gameplay must never await these methods. */
(function (host) {
  "use strict";
  const queue = [];
  let active = null, busy = false, timer = null, dropped = 0;
  const status = (message) => {
    try { const node = host.document.getElementById("telemetry-status"); if (node) node.textContent = message; } catch (_) {}
  };
  function uuid() {
    if (host.crypto && host.crypto.randomUUID) return host.crypto.randomUUID();
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
      const r = Math.floor(Math.random() * 16); return (c === "x" ? r : (r & 3) | 8).toString(16);
    });
  }
  function configuration() {
    const c = host.GAME_TELEMETRY_CONFIG || host.MTRL_TELEMETRY_CONFIG || {};
    if (!/^https:\/\/[a-z0-9-]+\.supabase\.co\/?$/i.test(c.url || "") || !/^sb_publishable_[A-Za-z0-9_-]+$/.test(c.publishableKey || "")) return null;
    const table = c.table || "mtrl_events";
    if (!["mtrl_events", "sr_castle_events"].includes(table)) return null;
    return { url: c.url.replace(/\/$/, ""), key: c.publishableKey, table,
      version: table === "sr_castle_events" ? "sr-castle-1" : "mtrl-1" };
  }
  function browserId() {
    try {
      const key = "mtrl-visitor-v1", stored = host.localStorage.getItem(key);
      if (/^[a-f0-9-]{36}$/i.test(stored || "")) return stored;
      const id = uuid(); host.localStorage.setItem(key, id); return id;
    } catch (_) { return uuid(); }
  }
  function schedule() {
    if (timer || !queue.length) return;
    timer = host.setTimeout(() => { timer = null; void flush(); }, 1500);
  }
  async function flush() {
    if (busy || !queue.length) return;
    busy = true;
    const item = queue[0];
    let timeout;
    try {
      const controller = new host.AbortController();
      // The race also bounds waiting if a browser/network fails to honor abort.
      const expired = new Promise((_, reject) => {
        timeout = host.setTimeout(() => { controller.abort(); reject(new Error("timeout")); }, 4000);
      });
      const response = await Promise.race([host.fetch(item.config.url + "/rest/v1/" + item.config.table, {
        method: "POST",
        headers: { apikey: item.config.key, "Content-Type": "application/json", Prefer: "return=minimal" },
        body: item.body, signal: controller.signal, credentials: "omit", referrerPolicy: "no-referrer"
      }), expired]);
      // One row per event_id makes retries idempotent; no SELECT permission is needed.
      let duplicate = false;
      if (response.status === 409) {
        const error = await Promise.race([response.json(), expired]);
        duplicate = error.code === "23505";
      }
      if (!response.ok && !duplicate) throw new Error("upload failed");
      queue.shift();
      status(queue.length ? "正在保存试玩记录；不影响游戏。" : dropped
        ? `上传已结束，但有 ${dropped} 条记录未保存；游戏照常运行。`
        : "试玩记录已保存。仅记录你同意上传的内容。");
    } catch (_) {
      item.attempts += 1;
      if (item.attempts >= 3) {
        dropped += 1;
        queue.shift();
        status("部分记录未能保存；游戏照常运行。未保存的记录不会在关闭页面后重传。");
      } else {
        status("上传暂不可用，稍后自动重试；游戏照常运行。");
      }
    } finally {
      host.clearTimeout(timeout); busy = false; schedule();
    }
  }
  function send(kind, round, payload) {
    if (!active) return;
    if (queue.length >= 256) { dropped += 1; status("待保存记录过多，已跳过本次上传；游戏照常运行。"); return; }
    const record = { event_id: uuid(), session_id: active.session, visitor_id: active.visitor,
      nickname: active.nickname, kind, round, payload };
    queue.push({ config: active.config, body: JSON.stringify(record), attempts: 0 });
    status("正在保存试玩记录；不影响游戏。");
    void flush();
  }
  // Catch even synchronous failures; callers also guard access to this optional script.
  function safe(fn) { return (...args) => { try { fn(...args); } catch (_) { active = null; status("记录功能不可用；游戏照常运行。"); } }; }
  host.GameTelemetry = host.MtrlTelemetry = Object.freeze({
    begin: safe(({ consent, nickname, settings }) => {
      active = null;
      if (!consent) { status("仅试玩：本局不上传记录。"); return; }
      const config = configuration();
      if (!config) { status("记录服务尚未配置；本局仅试玩，不上传记录。"); return; }
      active = { config, visitor: browserId(), session: uuid(), nickname: String(nickname || "").trim().slice(0, 40) };
      send("visit", 0, { game_version: config.version });
      send("start", 0, settings);
    }),
    round: safe((round, data) => send("round", round, data)),
    complete: safe((data) => send("complete", data.log.length, data))
  });
})(window);
