# IGRS Unified CRM

## Goal

Zero recurring manual data entry. Email, WhatsApp, and Official LINE events are stored in the existing Cloudflare D1 database. Google Sheets is a dashboard/cache, not the source of truth.

## Source of truth

Existing D1 database: `ph-document-tracking`

New CRM tables:
- `crm_contacts`
- `crm_identities`
- `crm_conversations`
- `crm_messages`
- `crm_cases`
- `crm_case_conversations`
- `crm_sync_state`

The existing customer tracking portal tables remain unchanged.

## Endpoints

- `POST /api/crm/ingest` - trusted server-to-server ingestion for Gmail bridge and other internal jobs
- `GET /api/crm/snapshot` - trusted snapshot for Sheets/dashboard synchronization
- `POST /api/crm/send` - outbound WhatsApp / LINE send endpoint; successful sends are recorded in D1
- `GET /api/webhooks/whatsapp` - Meta webhook verification
- `POST /api/webhooks/whatsapp` - inbound WhatsApp messages
- `POST /api/webhooks/line` - inbound Official LINE events

## Required one-time secrets

Do not paste these values into chat. Store them as Cloudflare Worker secrets / GitHub Actions secrets.

Core:
- `CRM_INGEST_SECRET`

WhatsApp:
- `WHATSAPP_VERIFY_TOKEN`
- `WHATSAPP_APP_SECRET`
- `WHATSAPP_ACCESS_TOKEN`
- `WHATSAPP_PHONE_NUMBER_ID`
- `WHATSAPP_GRAPH_VERSION` (configure to the Graph API version used by the Meta app)

Official LINE:
- `LINE_CHANNEL_SECRET`
- `LINE_CHANNEL_ACCESS_TOKEN`

Existing:
- `ADMIN_PASSWORD`

## Webhook URLs

- WhatsApp: `https://tracking.ph-document.com/api/webhooks/whatsapp`
- LINE: `https://tracking.ph-document.com/api/webhooks/line`

## Important limitation

A webhook can only record events the provider sends to it. If an outbound message is sent from a separate app/manager UI and that provider does not echo the outbound content to the webhook, the CRM cannot reliably know that message was sent.

Therefore the final zero-input operating model is:
1. Inbound messages arrive through provider webhooks and are stored automatically.
2. Outbound WhatsApp / LINE messages are sent through `/api/crm/send` (later exposed through the internal CRM UI), so they are also stored automatically.
3. Gmail is synchronized server-to-server and updates D1 automatically.
4. Google Sheets is refreshed from `/api/crm/snapshot` and is used only for visual management.

## Identity matching

The system safely auto-matches identities when an exact email address or phone number is shared. It does not auto-merge unrelated contacts based only on similar names, because a false merge is worse than a temporary duplicate.
