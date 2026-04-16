# ph-document-chat (Cloudflare Worker)

AI front desk backend for ph-document.com. Streams responses from Claude Haiku 4.5 via Server-Sent Events.

## Local dev

```bash
cd workers/chat
npm install
npx wrangler kv:namespace create RATE_LIMIT            # copy the id into wrangler.toml
npx wrangler secret put ANTHROPIC_API_KEY              # paste your key
npx wrangler dev
```

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

## Notes

- Worker is isolated from the main site's SEO surface (different origin, no crawler exposure).
- Secrets never committed; use `wrangler secret put`.
- Rollback with `npx wrangler rollback`.
