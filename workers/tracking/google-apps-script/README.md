# Gmail / Google Sheets bridge

This bound Apps Script sends Gmail history to D1 and mirrors D1 into the existing `Pipeline`, `messages`, and `ChannelLog` tabs. After the one-time authorization, it runs every 15 minutes without data entry.

## One-time setup

1. Open `IGRS 売上台帳` and choose Extensions -> Apps Script.
2. Paste `Code.gs` into the project.
3. In Project settings -> Script properties, set:
   - `CRM_BASE_URL` = `https://tracking.ph-document.com`
   - `CRM_INGEST_SECRET` = the Worker/GitHub secret of the same name
   - `SHEET_ID` = `1BzcvWQdkV0j0CGdS1CMIItZStEw20dtcp4c7uOEwvCk`
4. Run `installIgrsAutomation` once and approve Gmail, Sheets, and external-request permissions.

Do not paste secret values into issues, commits, chat, or worksheet cells.
