// Fixed status stages, in chronological order. Keys are stored in D1;
// labels are for the admin tool (Japanese-only, since staff operate in JA)
// and are duplicated per-language on the frontend (lib/trackingApi.ts).
export const STATUS_STAGES = [
  { key: 'received', label: '申込受付' },
  { key: 'applying', label: '申請中（PSA/NBI等）' },
  { key: 'approved', label: '受理済み' },
  { key: 'apostille', label: 'アポスティーユ処理中' },
  { key: 'preparing_shipment', label: '発送準備中' },
  { key: 'in_transit', label: 'フィリピンから配送中' },
  { key: 'delivered', label: 'お届け完了' },
] as const;

export type StatusKey = (typeof STATUS_STAGES)[number]['key'];

const VALID_KEYS = new Set<string>(STATUS_STAGES.map((s) => s.key));

export function isValidStatusKey(value: string): value is StatusKey {
  return VALID_KEYS.has(value);
}
