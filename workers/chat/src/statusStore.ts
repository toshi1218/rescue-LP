// Order status tracking — backed by a Supabase table, accessed with the
// service role key so the Worker is the only thing that can read/write it.
// The `order_status` table has RLS enabled with no public policies; nothing
// is reachable except through this Worker.

export type OrderStatus = {
  id: string;
  lang: 'en' | 'ja';
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

export type OrderStatusInput = Partial<
  Pick<
    OrderStatus,
    | 'lang'
    | 'doc'
    | 'name'
    | 'ref'
    | 'stage'
    | 'sub_idx'
    | 'eta_note'
    | 'track'
    | 'order_date'
    | 'lead_min'
    | 'lead_max'
    | 'stage_dates'
  >
>;

const ID_ALPHABET = 'abcdefghjkmnpqrstuvwxyz23456789'; // no 0/1/i/l/o ambiguity
const ID_LENGTH = 10;

export function generateId(): string {
  const bytes = crypto.getRandomValues(new Uint8Array(ID_LENGTH));
  let out = '';
  for (const b of bytes) out += ID_ALPHABET[b % ID_ALPHABET.length];
  return out;
}

export function isValidId(id: string): boolean {
  return new RegExp(`^[a-z0-9]{6,16}$`).test(id);
}

function headers(serviceKey: string) {
  return {
    apikey: serviceKey,
    Authorization: `Bearer ${serviceKey}`,
    'Content-Type': 'application/json',
  };
}

export async function getStatus(
  supabaseUrl: string,
  serviceKey: string,
  id: string,
): Promise<OrderStatus | null> {
  const res = await fetch(
    `${supabaseUrl}/rest/v1/order_status?id=eq.${encodeURIComponent(id)}&select=*`,
    { headers: headers(serviceKey) },
  );
  if (!res.ok) return null;
  const rows = (await res.json()) as OrderStatus[];
  return rows[0] ?? null;
}

export async function createStatus(
  supabaseUrl: string,
  serviceKey: string,
  input: OrderStatusInput,
): Promise<OrderStatus | null> {
  const id = generateId();
  const payload = {
    id,
    lang: input.lang === 'en' ? 'en' : 'ja',
    doc: input.doc?.slice(0, 200) ?? '',
    name: input.name?.slice(0, 100) || null,
    ref: input.ref?.slice(0, 50) || null,
    stage: clampStage(input.stage),
    sub_idx: input.sub_idx ?? null,
    eta_note: input.eta_note?.slice(0, 200) || null,
    track: input.track?.slice(0, 100) || null,
    order_date: input.order_date || null,
    lead_min: input.lead_min ?? 4,
    lead_max: input.lead_max ?? 6,
    stage_dates: Array.isArray(input.stage_dates) ? input.stage_dates.slice(0, 6) : ['', '', '', '', '', ''],
  };
  const res = await fetch(`${supabaseUrl}/rest/v1/order_status`, {
    method: 'POST',
    headers: { ...headers(serviceKey), Prefer: 'return=representation' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) return null;
  const rows = (await res.json()) as OrderStatus[];
  return rows[0] ?? null;
}

export async function updateStatus(
  supabaseUrl: string,
  serviceKey: string,
  id: string,
  input: OrderStatusInput,
): Promise<OrderStatus | null> {
  const payload: Record<string, unknown> = { updated_at: new Date().toISOString() };
  if (input.lang !== undefined) payload.lang = input.lang === 'en' ? 'en' : 'ja';
  if (input.doc !== undefined) payload.doc = input.doc.slice(0, 200);
  if (input.name !== undefined) payload.name = input.name?.slice(0, 100) || null;
  if (input.ref !== undefined) payload.ref = input.ref?.slice(0, 50) || null;
  if (input.stage !== undefined) payload.stage = clampStage(input.stage);
  if (input.sub_idx !== undefined) payload.sub_idx = input.sub_idx;
  if (input.eta_note !== undefined) payload.eta_note = input.eta_note?.slice(0, 200) || null;
  if (input.track !== undefined) payload.track = input.track?.slice(0, 100) || null;
  if (input.order_date !== undefined) payload.order_date = input.order_date || null;
  if (input.lead_min !== undefined) payload.lead_min = input.lead_min;
  if (input.lead_max !== undefined) payload.lead_max = input.lead_max;
  if (input.stage_dates !== undefined) payload.stage_dates = input.stage_dates.slice(0, 6);

  const res = await fetch(
    `${supabaseUrl}/rest/v1/order_status?id=eq.${encodeURIComponent(id)}`,
    {
      method: 'PATCH',
      headers: { ...headers(serviceKey), Prefer: 'return=representation' },
      body: JSON.stringify(payload),
    },
  );
  if (!res.ok) return null;
  const rows = (await res.json()) as OrderStatus[];
  return rows[0] ?? null;
}

function clampStage(stage: number | undefined): number {
  const n = Number(stage);
  if (!Number.isFinite(n)) return 1;
  return Math.min(6, Math.max(1, Math.round(n)));
}
