# Search-to-inquiry measurement

## Definitions

- GSC clicks are organic Google Search clicks, not people or GA4 sessions.
- `form_submit_success` is a successful Web3Forms response, not a CTA click, a chat-open event, an accepted quote, or a payment.
- `inquiry_id` joins a successful form event to its notification email. It is random and contains no customer information.
- `traffic_source` and `traffic_medium` describe the observed session entry. Keep the customer's `referral_source` answer separately; do not overwrite one with the other.
- `landing_page` is the session entry URL without query strings/fragments. `conversion_page` is the page where the form was submitted.
- The session expires after 30 minutes of inactivity. Storage-blocked browsers retain an in-memory fallback until reload. Missing referrers remain direct/unknown; do not relabel them Google.
- Google click IDs are classified as paid (`cpc`); AI referrals are classified as `ai`, not organic.

## Read the funnel

1. Choose one date window and note each source's timezone. GSC daily exports use Pacific Time; the sales ledger uses Asia/Manila. Boundary-day counts can differ.
2. Deduplicate notification emails by `inquiry_id`. For old submissions, use customer + original submission, not the number of email replies. Exclude tests and spam. LINE/WhatsApp direct inquiries need their own verified source evidence and cannot be inferred from a CTA click.
3. Count organic inquiries only with observed `traffic_medium=organic`. Report self-declared Google inquiries in a separate bucket when the automatic source is missing/direct. A self-declared Google visit is not proof of organic rather than an ad.
4. Join each inquiry to its existing CRM case/payment records. A quote or invoice is not an order/payment. Count paid conversions only with a confirmed payment; maintain the same inquiry cohort and state the as-of date. Keep currencies separate and distinguish collected amounts, service fees, expenses, and refunds.
5. In GA4, review `form_submit_success` by `traffic_source`, `traffic_medium`, `landing_page`, and `page_path`. If needed, register these event parameters as event-scoped custom dimensions and mark this event as a key event in the property's Admin settings. Registration is an external configuration step, not performed by this code. Do not register `inquiry_id` as a high-cardinality reporting dimension; use it only for an authorized detailed export/join.

The website records successful form submissions and carries attribution into notification emails. It does not automatically know that an offline payment was received. Keep order/payment confirmation in the CRM; never fire a paid conversion from a button click.

## Verification

`node --test tests/search-attribution.test.cjs`

Verify all five Web3Forms handlers send `inquiry_id`, entry attribution, and the conversion page. Mock Web3Forms and notification endpoints during browser checks so tests never contact customers or staff. Confirm no names, emails, messages, or identity-document data enter analytics events.

## Metadata review

`lib/searchPageMeta.ts` is the shared definition for the two Japanese service pages and the English birth-certificate cost page. The static renderer and React use the same values. The Japanese NBI description distinguishes mandatory applicant fingerprinting from the local work handled after Form No. 5 arrives. The English comparison treats direct ordering and the managed package as alternatives, rather than adding both prices together.

For the current title/description experiment, compare the same URLs after recrawling, using equal-length windows. Changes to source/landing-page measurement only improve future observations; they do not reconstruct missing historical attribution.
