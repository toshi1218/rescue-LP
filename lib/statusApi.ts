export type StatusLang = 'en' | 'ja';

export type OrderStatus = {
  id: string;
  lang: StatusLang;
  doc: string;
  name: string | null;
  ref: string | null;
  stage: number;
  sub_idx: number | null;
  eta_note: string | null;
  track: string | null;
  order_date: string | null;
  lead_min: number;
  lead_max: number;
  stage_dates: string[];
  updated_at: string;
};

const DEFAULT_API_BASE = 'https://chat.ph-document.com/api/status';

function resolveApiBase(): string {
  const envUrl = (import.meta as unknown as { env?: Record<string, string> }).env?.VITE_STATUS_API_URL;
  return envUrl || DEFAULT_API_BASE;
}

export async function fetchOrderStatus(id: string): Promise<OrderStatus | null> {
  const res = await fetch(`${resolveApiBase()}/${encodeURIComponent(id)}`, {
    headers: { Accept: 'application/json' },
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`status_api_error_${res.status}`);
  return (await res.json()) as OrderStatus;
}
