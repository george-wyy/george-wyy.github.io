-- Run once in YOUR Supabase project's SQL Editor as the project owner.
-- This script creates only the game's table. Do not use the upstream DPR project.
create table if not exists public.sr_castle_events (
  event_id uuid primary key,
  session_id uuid not null,
  visitor_id uuid not null,
  nickname text not null default '' check (char_length(nickname) <= 40),
  kind text not null check (kind in ('visit', 'start', 'round', 'complete')),
  round integer not null check (round between 0 and 196),
  payload jsonb not null check (jsonb_typeof(payload) = 'object' and octet_length(payload::text) <= 65536),
  created_at timestamptz not null default now(),
  check ((kind in ('visit', 'start') and round = 0) or
         (kind in ('round', 'complete') and round between 1 and 196))
);
alter table public.sr_castle_events enable row level security;
revoke all on public.sr_castle_events from public, anon, authenticated;
grant usage on schema public to anon, authenticated;
-- Exclude created_at: visitors cannot set the database receipt timestamp.
grant insert (event_id, session_id, visitor_id, nickname, kind, round, payload)
  on public.sr_castle_events to anon, authenticated;
grant all on public.sr_castle_events to service_role;
drop policy if exists sr_castle_events_submit on public.sr_castle_events;
create policy sr_castle_events_submit on public.sr_castle_events
  for insert to anon, authenticated with check (true);
-- Intentionally NO public SELECT/UPDATE/DELETE policies or grants.
comment on table public.sr_castle_events is
  'Opt-in game events; public insert only, owner reads via Dashboard. Client-submitted, not verified experimental data.';
