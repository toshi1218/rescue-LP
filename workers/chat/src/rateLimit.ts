const WINDOW_SECONDS = 600;
const MAX_REQUESTS = 20;

export async function checkRateLimit(
  kv: KVNamespace,
  ip: string,
): Promise<{ allowed: boolean; remaining: number }> {
  const bucketKey = `rl:${ip}`;
  const raw = await kv.get(bucketKey);
  const now = Math.floor(Date.now() / 1000);
  const windowStart = now - WINDOW_SECONDS;

  let timestamps: number[] = [];
  if (raw) {
    try {
      timestamps = (JSON.parse(raw) as number[]).filter((t) => t >= windowStart);
    } catch {
      timestamps = [];
    }
  }

  if (timestamps.length >= MAX_REQUESTS) {
    return { allowed: false, remaining: 0 };
  }

  timestamps.push(now);
  await kv.put(bucketKey, JSON.stringify(timestamps), { expirationTtl: WINDOW_SECONDS });

  return { allowed: true, remaining: MAX_REQUESTS - timestamps.length };
}
