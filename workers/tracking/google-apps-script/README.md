# CRM / Google Sheets bridge

This Apps Script mirrors D1 CRM data from LINE, WhatsApp, and optionally Gmail into the existing `Pipeline`, `messages`, and `ChannelLog` tabs. After one-time authorization, it runs once per day, during the 07:00–08:00 window in Asia/Manila.

Gmail import is disabled by default. This prevents unrelated mailbox messages from being added to the CRM.

## One-time setup

1. Open the Apps Script project connected to `IGRS 売上台帳`.
2. Paste `Code.gs` into the project.
3. In Project settings -> Script properties, set:
   - `CRM_BASE_URL` = `https://tracking.ph-document.com`
   - `CRM_INGEST_SECRET` = the Worker/GitHub secret of the same name
   - `SHEET_ID` = `1BzcvWQdkV0j0CGdS1CMIItZStEw20dtcp4c7uOEwvCk`
4. Run `installIgrsAutomation` once and approve Sheets and external-request permissions.

## Apply the daily schedule to an existing project

Updating this file in GitHub does not change an existing Apps Script trigger.

1. Replace the existing project's `Code.gs` with this version and save.
2. Run `installIgrsAutomation` once. It validates configuration, replaces this user's
   `runIgrsAutomation` triggers with one daily trigger, and runs one sync immediately.
   Other handlers' triggers are preserved. Run it as the account that owns the existing trigger;
   triggers installed by another account must be removed by that account.
3. In Apps Script -> Triggers, confirm there is one `runIgrsAutomation` trigger
   with a day timer set to 07:00–08:00 in Asia/Manila. Check Executions for a successful run.

The steady-state schedule changes from 96 runs per day (the original 15-minute schedule) to one. One-time installer runs,
manual runs, and other readers are additional usage, so total D1 reads are not guaranteed
to fall to one ninety-sixth. The initial installer sync also reads D1.

`Pipeline`, `messages`, and `ChannelLog` can take about a day to reflect changes,
subject to Apps Script scheduling and successful execution. When Gmail import is enabled,
it also runs daily. For an earlier refresh, run `runIgrsAutomation` manually.

The Worker's `/api/webhooks/line` and `/api/webhooks/whatsapp` handlers record incoming
messages independently of this timer. Changing the timer does not change those handlers.
Confirm the actual provider webhook URL and delivery status before concluding which
route a live account uses. Repository code alone does not verify the live trigger or
provider settings. This change requires no Worker deployment or web-app redeployment.

## Optional Gmail import

Only when Gmail should also feed the CRM, add:

- `ENABLE_GMAIL_INGEST` = `true`
- `GMAIL_LOOKBACK_DAYS` = the desired first-run history window

Leave `ENABLE_GMAIL_INGEST` unset for LINE/WhatsApp-only operation.

Do not paste secret values into issues, commits, chat, or worksheet cells.
