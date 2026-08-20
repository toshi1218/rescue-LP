# Gmail bridge status

The D1 ingestion endpoint is implemented, but the Google Apps Script bridge that reads Gmail and posts message events to D1 is intentionally not deployed from this repository yet.

Reason: Apps Script execution belongs to the Google account and requires a one-time OAuth authorization and a script property containing `CRM_INGEST_SECRET`. Repository code alone cannot authorize Gmail access on behalf of the account.

Until that one-time bridge authorization is completed:
- Gmail -> Google Sheet continues through the existing connected automation.
- WhatsApp / LINE can write directly to D1 after their webhook secrets are configured.
- D1 is not yet a complete copy of Gmail history.

Target final state: Gmail -> D1 -> Sheets, with no recurring manual data entry.
