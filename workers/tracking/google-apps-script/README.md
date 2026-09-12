# CRM / Google Sheets bridge

This Apps Script mirrors D1 CRM data from LINE, WhatsApp, and optionally Gmail into the existing `Pipeline`, `messages`, and `ChannelLog` tabs. After one-time authorization, it runs every 15 minutes.

Gmail import is disabled by default. This prevents unrelated mailbox messages from being added to the CRM.

## One-time setup

1. Open the Apps Script project connected to `IGRS 売上台帳`.
2. Paste `Code.gs` into the project.
3. In Project settings -> Script properties, set:
   - `CRM_BASE_URL` = `https://tracking.ph-document.com`
   - `CRM_INGEST_SECRET` = the Worker/GitHub secret of the same name
   - `SHEET_ID` = `1BzcvWQdkV0j0CGdS1CMIItZStEw20dtcp4c7uOEwvCk`
4. Run `installIgrsAutomation` once and approve Sheets and external-request permissions.

## Optional Gmail import

Only when Gmail should also feed the CRM, add:

- `ENABLE_GMAIL_INGEST` = `true`
- `GMAIL_LOOKBACK_DAYS` = the desired first-run history window

Leave `ENABLE_GMAIL_INGEST` unset for LINE/WhatsApp-only operation.

Do not paste secret values into issues, commits, chat, or worksheet cells.
