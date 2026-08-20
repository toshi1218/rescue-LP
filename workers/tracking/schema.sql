-- D1 schema for the customer tracking portal and unified IGRS CRM.
-- Apply with: wrangler d1 execute ph-document-tracking --file=./schema.sql

CREATE TABLE IF NOT EXISTS trackings (
  code TEXT PRIMARY KEY,
  pin TEXT NOT NULL,
  customer_name TEXT,
  created_at INTEGER NOT NULL,
  current_status TEXT NOT NULL DEFAULT 'received',
  status_note TEXT,
  status_updated_at INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS status_history (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  code TEXT NOT NULL REFERENCES trackings(code),
  status TEXT NOT NULL,
  note TEXT,
  created_at INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS uploads (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  code TEXT NOT NULL REFERENCES trackings(code),
  filename TEXT NOT NULL,
  r2_key TEXT NOT NULL,
  content_type TEXT,
  size INTEGER,
  uploaded_at INTEGER NOT NULL
);

-- D1 serializes this UPSERT, so concurrent PIN guesses cannot bypass limits.
CREATE TABLE IF NOT EXISTS rate_limits (
  key TEXT PRIMARY KEY,
  window_started_at INTEGER NOT NULL,
  request_count INTEGER NOT NULL
);

-- Unified CRM ---------------------------------------------------------------
-- One person can have multiple channel identities (email / WhatsApp / LINE).
CREATE TABLE IF NOT EXISTS crm_contacts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  display_name TEXT,
  primary_email TEXT,
  primary_phone TEXT,
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS crm_identities (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  contact_id INTEGER NOT NULL REFERENCES crm_contacts(id) ON DELETE CASCADE,
  channel TEXT NOT NULL CHECK(channel IN ('email','whatsapp','line')),
  external_id TEXT NOT NULL,
  display_name TEXT,
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL,
  UNIQUE(channel, external_id)
);

CREATE TABLE IF NOT EXISTS crm_conversations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  contact_id INTEGER NOT NULL REFERENCES crm_contacts(id) ON DELETE CASCADE,
  channel TEXT NOT NULL CHECK(channel IN ('email','whatsapp','line')),
  external_thread_id TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'OPEN',
  ball_holder TEXT NOT NULL DEFAULT 'IGRS' CHECK(ball_holder IN ('IGRS','CUSTOMER','EXTERNAL','NONE')),
  last_direction TEXT CHECK(last_direction IN ('inbound','outbound')),
  last_message_at INTEGER,
  last_message_preview TEXT,
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL,
  UNIQUE(channel, external_thread_id)
);

CREATE TABLE IF NOT EXISTS crm_messages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  conversation_id INTEGER NOT NULL REFERENCES crm_conversations(id) ON DELETE CASCADE,
  provider_message_id TEXT NOT NULL,
  direction TEXT NOT NULL CHECK(direction IN ('inbound','outbound')),
  sender_external_id TEXT,
  message_type TEXT NOT NULL DEFAULT 'text',
  body TEXT,
  occurred_at INTEGER NOT NULL,
  raw_json TEXT,
  created_at INTEGER NOT NULL,
  UNIQUE(provider_message_id)
);

CREATE TABLE IF NOT EXISTS crm_cases (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  contact_id INTEGER NOT NULL REFERENCES crm_contacts(id) ON DELETE CASCADE,
  case_key TEXT NOT NULL UNIQUE,
  service TEXT,
  stage TEXT NOT NULL DEFAULT 'NEW',
  progress INTEGER NOT NULL DEFAULT 5 CHECK(progress BETWEEN 0 AND 100),
  ball_holder TEXT NOT NULL DEFAULT 'IGRS' CHECK(ball_holder IN ('IGRS','CUSTOMER','EXTERNAL','NONE')),
  quote_amount REAL,
  currency TEXT,
  paid_amount REAL,
  next_action TEXT,
  follow_up_at INTEGER,
  last_channel TEXT CHECK(last_channel IN ('email','whatsapp','line')),
  last_contact_at INTEGER,
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS crm_case_conversations (
  case_id INTEGER NOT NULL REFERENCES crm_cases(id) ON DELETE CASCADE,
  conversation_id INTEGER NOT NULL REFERENCES crm_conversations(id) ON DELETE CASCADE,
  PRIMARY KEY(case_id, conversation_id)
);

CREATE TABLE IF NOT EXISTS crm_sync_state (
  source TEXT PRIMARY KEY,
  cursor TEXT,
  last_synced_at INTEGER NOT NULL,
  note TEXT
);

CREATE INDEX IF NOT EXISTS idx_status_history_code ON status_history(code);
CREATE INDEX IF NOT EXISTS idx_uploads_code ON uploads(code);
CREATE INDEX IF NOT EXISTS idx_uploads_uploaded_at ON uploads(uploaded_at);
CREATE INDEX IF NOT EXISTS idx_crm_identities_contact ON crm_identities(contact_id);
CREATE INDEX IF NOT EXISTS idx_crm_conversations_contact ON crm_conversations(contact_id);
CREATE INDEX IF NOT EXISTS idx_crm_conversations_updated ON crm_conversations(updated_at);
CREATE INDEX IF NOT EXISTS idx_crm_messages_conversation ON crm_messages(conversation_id, occurred_at);
CREATE INDEX IF NOT EXISTS idx_crm_cases_contact ON crm_cases(contact_id);
CREATE INDEX IF NOT EXISTS idx_crm_cases_stage ON crm_cases(stage, updated_at);
