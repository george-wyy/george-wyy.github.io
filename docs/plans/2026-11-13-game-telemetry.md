# Optional game telemetry implementation plan

**Goal:** Store opted-in anonymous game results in Supabase without making gameplay depend on telemetry.

**Architecture:** GitHub Pages serves the unchanged game logic plus an optional plain JavaScript telemetry adapter. Public clients may insert bounded events only; Supabase Dashboard is the initial owner-only read/export interface. Empty configuration is a supported offline mode. No AWS or Worker service is needed.

**Tech Stack:** HTML, browser JavaScript, Supabase REST/Postgres RLS, Node assertions and a dependency-free test runner.

### Task 1: Optional adapter and configuration
Create `demos/mtrl-telemetry.js` and `demos/mtrl-telemetry-config.js`. Catch configuration, storage, crypto, network and status callback failures. Never await telemetry from game logic. Use anonymous browser UUID plus independent session/event UUIDs; memory fallback if browser storage is unavailable. Bound the memory queue and retry requests with timeout. Never store a private key, IP, full referrer, or user-agent. Retrying an event must not create duplicate rows.

### Task 2: Game integration
Modify `demos/mtrl-task.html`: optional nickname and unchecked upload consent. Start gameplay before invoking the adapter through a guarded wrapper. Send visit/start after opted-in start, round records after game state advances, and completion after result rendering. Keep status separate from the app DOM. Missing scripts and a throwing adapter must not affect a complete game or replay.

### Task 3: Database and setup
Create `docs/mtrl-telemetry.sql` and `docs/mtrl-telemetry.md`. Enable RLS, grant INSERT only to public clients, revoke reads/updates/deletes, validate bounded event fields, retain private reads through Supabase Dashboard. Give setup and verification queries plus a repeatable retention deletion procedure. Do not reuse the upstream Paper Reader project or fabricate credentials. Keep setup docs excluded from Pages through existing docs exclusion.

### Task 4: Verify
Create `scripts/tests/mtrl-telemetry.test.mjs`. Test offline, declined consent, denied storage, rejected and hung requests, retry deduplication, nickname safety, and full game completion/replay when telemetry throws or is missing. Run `node scripts/tests/mtrl-telemetry.test.mjs`, syntax checks, Jekyll offline-metadata build, and browser smoke checks. Live SQL permissions and real collection require a user-owned Supabase project and remain explicitly unverified until configured.
