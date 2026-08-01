export type NotifyLang = 'ja' | 'en' | 'ko';

const DEFAULT_API_URL = 'https://notify.ph-document.com/api/notify';

function resolveApiUrl(): string {
  const envUrl = (import.meta as unknown as { env?: Record<string, string> }).env?.VITE_NOTIFY_API_URL;
  return envUrl || DEFAULT_API_URL;
}

function formDataToFields(formData: FormData): Record<string, string> {
  const fields: Record<string, string> = {};
  for (const [key, value] of formData.entries()) {
    if (typeof value === 'string') fields[key] = value;
  }
  return fields;
}

/** Fire-and-forget Slack alert for a contact form submission. Never throws. */
export function notifySlack(lang: NotifyLang, formData: FormData): void {
  fetch(resolveApiUrl(), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ lang, fields: formDataToFields(formData) }),
  }).catch(() => {});
}
