# ph-document-chat (Cloudflare Worker)

AI front desk backend for ph-document.com. Streams responses from Claude Haiku 4.5 via Server-Sent Events.

## Local dev

```bash
cd workers/chat
npm install
npx wrangler kv:namespace create RATE_LIMIT            # copy the id into wrangler.toml
npx wrangler secret put ANTHROPIC_API_KEY              # paste your key
npx wrangler secret put SUPABASE_SERVICE_KEY           # Supabase service_role key (order status)
npx wrangler secret put ADMIN_PASSPHRASE               # shared passphrase for the status tool
npx wrangler dev
```

Before using the status endpoints, create the `order_status` table in Supabase — see
`docs/status-tracking-schema.sql` for the SQL to run once in the Supabase SQL editor.

Frontend dev: add to `.env.local` at repo root:

```
VITE_CHAT_API_URL=http://localhost:8787/api/chat
```

## Deploy

```bash
npx wrangler deploy
```

Then attach custom domain `chat.ph-document.com` via the Cloudflare dashboard (Workers → Triggers → Custom Domains).

## Endpoints

- `POST /api/chat` — SSE stream. Body: `{ messages: [{role,content}], lang: 'ja'|'en' }`.
  - Rate limit: 20 requests / 10 min / IP
  - CORS: only `https://ph-document.com`
  - Detects lead-capture intent and appends `[LEAD_CAPTURE]` in stream (frontend strips + shows handoff CTA)
- `GET /api/status/:id` — public, no auth. Returns the order_status row for the customer-facing tracking page (`ph-document.com/status/:id`). 404 if unknown.
- `POST /api/status` — creates a new order_status row and returns it (with its generated `id`). Requires header `X-Admin-Passphrase` matching the `ADMIN_PASSPHRASE` secret.
- `PUT /api/status/:id` — updates an existing row (partial body). Same passphrase requirement.
  - Admin routes are rate-limited (20 / 10 min / IP) to slow down passphrase guessing.

## Notes

- Worker is isolated from the main site's SEO surface (different origin, no crawler exposure).
- Secrets never committed; use `wrangler secret put`.
- Rollback with `npx wrangler rollback`.
