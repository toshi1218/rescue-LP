const WINDOW_SECONDS = 600;
const MAX_REQUESTS = 10;

export async function checkRateLimit(
  kv: KVNamespace | undefined,
  ip: string,
): Promise<{ allowed: boolean; remaining: number }> {
  if (!kv) {
    console.warn('[rateLimit] KV binding missing; failing open');
    return { allowed: true, remaining: MAX_REQUESTS };
  }

  const bucketKey = `rl:${ip}`;
  const now = Math.floor(Date.now() / 1000);
  const windowStart = now - WINDOW_SECONDS;

  let timestamps: number[] = [];
  try {
    const raw = await kv.get(bucketKey);
    if (raw) {
      try {
        timestamps = (JSON.parse(raw) as number[]).filter((t) => t >= windowStart);
      } catch {
        timestamps = [];
      }
    }
  } catch (err) {
    console.warn('[rateLimit] KV read failed; failing open', err);
    return { allowed: true, remaining: MAX_REQUESTS };
  }

  if (timestamps.length >= MAX_REQUESTS) {
    return { allowed: false, remaining: 0 };
  }

  timestamps.push(now);
  try {
    await kv.put(bucketKey, JSON.stringify(timestamps), { expirationTtl: WINDOW_SECONDS });
  } catch (err) {
    console.warn('[rateLimit] KV write failed; allowing request', err);
  }

  return { allowed: true, remaining: MAX_REQUESTS - timestamps.length };
}
