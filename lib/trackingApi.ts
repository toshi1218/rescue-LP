export type TrackingLang = 'ja' | 'en' | 'ko';

export type StatusKey =
  | 'received'
  | 'applying'
  | 'approved'
  | 'apostille'
  | 'preparing_shipment'
  | 'in_transit'
  | 'delivered';

export const STATUS_ORDER: StatusKey[] = [
  'received',
  'applying',
  'approved',
  'apostille',
  'preparing_shipment',
  'in_transit',
  'delivered',
];

export const STATUS_LABELS: Record<TrackingLang, Record<StatusKey, string>> = {
  ja: {
    received: '申込受付',
    applying: '申請中（PSA / NBI 等）',
    approved: '受理済み',
    apostille: 'アポスティーユ処理中',
    preparing_shipment: '発送準備中',
    in_transit: 'フィリピンから配送中',
    delivered: 'お届け完了',
  },
  en: {
    received: 'Order received',
    applying: 'Application submitted (PSA / NBI, etc.)',
    approved: 'Approved / released',
    apostille: 'DFA Apostille in progress',
    preparing_shipment: 'Preparing for shipment',
    in_transit: 'In transit from the Philippines',
    delivered: 'Delivered',
  },
  ko: {
    received: '접수 완료',
    applying: '신청 중 (PSA / NBI 등)',
    approved: '승인 완료',
    apostille: 'DFA 아포스티유 처리 중',
    preparing_shipment: '발송 준비 중',
    in_transit: '필리핀에서 배송 중',
    delivered: '배송 완료',
  },
};

export type TrackingHistoryEntry = { status: string; note: string | null; created_at: number };
export type TrackingUpload = { filename: string; uploaded_at: number };

export type TrackingData = {
  customer_name: string | null;
  current_status: string;
  status_note: string | null;
  status_updated_at: number;
  created_at: number;
  history: TrackingHistoryEntry[];
  uploads: TrackingUpload[];
};

const DEFAULT_API_URL = 'https://tracking.ph-document.com';

function resolveApiUrl(): string {
  const envUrl = (import.meta as unknown as { env?: Record<string, string> }).env?.VITE_TRACKING_API_URL;
  return envUrl || DEFAULT_API_URL;
}

export type TrackingError = 'not_found' | 'access_expired' | 'rate_limited' | 'network_error';

export async function verifyTracking(
  code: string,
  pin: string,
): Promise<{ ok: true; data: TrackingData } | { ok: false; error: TrackingError }> {
  try {
    const res = await fetch(`${resolveApiUrl()}/api/verify`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code, pin }),
    });
    if (res.status === 429) return { ok: false, error: 'rate_limited' };
    if (res.status === 410) return { ok: false, error: 'access_expired' };
    if (!res.ok) return { ok: false, error: 'not_found' };
    const data = (await res.json()) as TrackingData;
    return { ok: true, data };
  } catch {
    return { ok: false, error: 'network_error' };
  }
}

export type UploadError = 'not_found' | 'access_expired' | 'rate_limited' | 'unsupported_file_type' | 'file_too_large' | 'too_many_uploads' | 'network_error';

export async function uploadTrackingFile(
  code: string,
  pin: string,
  file: File,
): Promise<{ ok: true } | { ok: false; error: UploadError }> {
  const form = new FormData();
  form.append('code', code);
  form.append('pin', pin);
  form.append('file', file);

  try {
    const res = await fetch(`${resolveApiUrl()}/api/upload`, { method: 'POST', body: form });
    if (res.ok) return { ok: true };
    if (res.status === 429) return { ok: false, error: 'rate_limited' };
    if (res.status === 410) return { ok: false, error: 'access_expired' };
    const body = (await res.json().catch(() => ({}))) as { error?: string };
    if (body.error === 'unsupported_file_type' || body.error === 'file_too_large' || body.error === 'too_many_uploads') {
      return { ok: false, error: body.error };
    }
    return { ok: false, error: 'not_found' };
  } catch {
    return { ok: false, error: 'network_error' };
  }
}
