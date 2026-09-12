# IGRS multichannel CRM

Email, WhatsApp Business, and Official LINE are normalized into the existing Cloudflare D1 database. D1 is the source of truth; Google Sheets is a read/write dashboard mirror.

## Flow

- Gmail: the bound Apps Script ingests new mail and sent mail every 15 minutes.
- WhatsApp: Meta webhook ingests customer messages in real time.
- LINE: Messaging API webhook ingests message and postback events in real time.
- Sheets: the Apps Script mirrors D1 into `Pipeline`, `messages`, and `ChannelLog` every 15 minutes.
- Outbound WhatsApp/LINE: use `POST /api/crm/send` so the sent content is also recorded in D1.

Duplicate provider deliveries are ignored by `(channel, provider_message_id)`. A late, older event is retained in history but cannot overwrite the latest ball holder or case state.

## Endpoints

- `GET /api/crm/health`
- `POST /api/crm/ingest`
- `GET /api/crm/snapshot?after_message_id=0&limit=1000`
- `POST /api/crm/send`
- `GET|POST /api/webhooks/whatsapp`
- `POST /api/webhooks/line`

## GitHub / Worker secrets

Never put these values in source code, Sheets, issues, or chat.

- `CRM_INGEST_SECRET`
- `WHATSAPP_VERIFY_TOKEN`
- `WHATSAPP_APP_SECRET`
- `WHATSAPP_ACCESS_TOKEN`
- `WHATSAPP_PHONE_NUMBER_ID`
- `LINE_CHANNEL_SECRET`
- `LINE_CHANNEL_ACCESS_TOKEN`

`WHATSAPP_GRAPH_VERSION` is a non-secret Worker variable in `wrangler.toml`.

## Provider setup

WhatsApp webhook URL:

`https://tracking.ph-document.com/api/webhooks/whatsapp`

LINE webhook URL:

`https://tracking.ph-document.com/api/webhooks/line`

After the GitHub secrets are configured, run the `Deploy tracking Worker` workflow with `deploy`. Then register the URLs above in Meta and LINE, enable message events, and run each provider's webhook verification/test.

The WhatsApp Business phone number must be onboarded to the official WhatsApp Business Platform. If Meta offers Business App coexistence for the account, use that path to keep the mobile Business app active. Do not use an unofficial session-scraping bridge.

## Ball rules

- inbound message -> `IGRS`
- outbound message -> `CUSTOMER`
- explicit payment confirmation sent through `/api/crm/send` with `payment_confirmed: true` -> `NONE`, stage `PAID`, progress `100`
- terminal stages are not reopened by an older or duplicated event

Webhook lifecycle events such as LINE follow/unfollow and WhatsApp delivery statuses do not create an IGRS ball.
