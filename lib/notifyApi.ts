export type NotifyLang = 'ja' | 'en' | 'ko';

const DEFAULT_API_URL = 'https://notify.ph-document.com/api/notify';

function resolveApiUrl(): string {
  const envUrl = (import.meta as unknown as { env?: Record<string, string> }).env?.VITE_NOTIFY_API_URL;
  return envUrl || DEFAULT_API_URL;
}

function formDataToFields(formData: FormData): Record<string, string> {
  const fields: Record<string, string> = {};
  for (const [key, value] of formData.entries()) {
    if (key !== 'access_key' && typeof value === 'string') fields[key] = value;
  }
  return fields;
}

/** Call only after Web3Forms confirms success. Alert failures never fail an inquiry. */
export function notifySlack(lang: NotifyLang, formData: FormData): void {
  try {
    void fetch(resolveApiUrl(), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lang, fields: formDataToFields(formData) }),
    }).catch(() => {});
  } catch { /* Even a synchronous network error must not hide a successful submission. */ }
}
