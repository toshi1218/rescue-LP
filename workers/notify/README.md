# ph-document-notify (Cloudflare Worker)

Receives contact-form submissions from ph-document.com and posts an instant alert to Slack, so inquiries aren't missed inside a noisy personal inbox.

## Local dev

```bash
cd workers/notify
npm install
npx wrangler kv:namespace create RATE_LIMIT      # copy the id into wrangler.toml
npx wrangler secret put SLACK_WEBHOOK_URL         # paste your Slack Incoming Webhook URL
npx wrangler dev
```

Frontend dev: add to `.env.local` at repo root:

```
VITE_NOTIFY_API_URL=http://localhost:8787/api/notify
```

## Deploy

```bash
npx wrangler deploy
```

Then attach custom domain `notify.ph-document.com` via the Cloudflare dashboard (Workers → Triggers → Custom Domains).

## Endpoints

- `POST /api/notify` — Body: `{ lang: 'ja'|'en'|'ko', fields: Record<string,string> }`.
  - Rate limit: 10 requests / 10 min / IP
  - CORS: only `https://ph-document.com`
  - Honeypot: submissions with a non-empty `botcheck` field are silently accepted but not forwarded to Slack

## Notes

- Fire-and-forget from the frontend (`lib/notifyApi.ts`) — Slack downtime never breaks the contact form.
- Secrets never committed; use `wrangler secret put`.
- Rollback with `npx wrangler rollback`.
