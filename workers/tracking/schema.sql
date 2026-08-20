-- D1 schema for the customer tracking portal.
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

CREATE INDEX IF NOT EXISTS idx_status_history_code ON status_history(code);
CREATE INDEX IF NOT EXISTS idx_uploads_code ON uploads(code);
CREATE INDEX IF NOT EXISTS idx_uploads_uploaded_at ON uploads(uploaded_at);
