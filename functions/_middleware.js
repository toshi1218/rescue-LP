/**
 * Cloudflare Pages Functions middleware
 * Pass-through only — language detection is handled client-side
 * to avoid server-side redirects that risk deindexing.
 */
export async function onRequest(context) {
  return context.next();
}
