const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 20;

export async function checkRateLimit(
  db: D1Database,
  key: string,
  maxRequests: number = MAX_REQUESTS,
): Promise<{ allowed: boolean; remaining: number }> {
  const now = Date.now();
  const resetBefore = now - WINDOW_MS;
  try {
    // One SQLite upsert is atomic, unlike a KV read-modify-write sequence.
    const row = await db.prepare(
      `INSERT INTO rate_limits (key, window_started_at, request_count)
       VALUES (?, ?, 1)
       ON CONFLICT(key) DO UPDATE SET
         window_started_at = CASE WHEN rate_limits.window_started_at <= ? THEN excluded.window_started_at ELSE rate_limits.window_started_at END,
         request_count = CASE WHEN rate_limits.window_started_at <= ? THEN 1 ELSE rate_limits.request_count + 1 END
       RETURNING request_count`,
    )
      .bind(key, now, resetBefore, resetBefore)
      .first<{ request_count: number }>();

    const count = row?.request_count ?? maxRequests + 1;
    return { allowed: count <= maxRequests, remaining: Math.max(0, maxRequests - count) };
  } catch (err) {
    // Do not expose document access when the security control is unavailable.
    console.error('[rateLimit] D1 operation failed; failing closed', err);
    return { allowed: false, remaining: 0 };
  }
}
