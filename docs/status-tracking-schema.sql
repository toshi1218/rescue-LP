-- Order status tracking table for the customer-facing "/status/:id" page.
-- Run once in the Supabase SQL editor (Project → SQL Editor → New query).
--
-- No PII columns by design (matches the existing rule: no address / phone /
-- email / date of birth in anything customer-facing). `name` is meant to be
-- a first name only, same as the existing WhatsApp card tool.
--
-- RLS is enabled with zero policies: nothing is reachable via the anon key.
-- The Cloudflare Worker talks to this table exclusively with the
-- service_role key (SUPABASE_SERVICE_KEY secret), which bypasses RLS.

create table if not exists order_status (
  id text primary key,
  lang text not null default 'ja' check (lang in ('en', 'ja')),
  doc text not null default '',
  name text,
  ref text,
  stage int not null default 1 check (stage between 1 and 6),
  sub_idx int,
  eta_note text,
  track text,
  order_date date,
  lead_min int not null default 4,
  lead_max int not null default 6,
  stage_dates jsonb not null default '["", "", "", "", "", ""]'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table order_status enable row level security;
-- Intentionally no policies: only the service_role key (used server-side by
-- the Worker) can read or write this table.
