/**
 * Cloudflare Pages Functions middleware
 * Redirects visitors to /ja/ when:
 *   1. Their Cloudflare-detected country is JP, OR
 *   2. Their browser's Accept-Language header prefers Japanese
 * Only applies to the root path (/) to avoid redirect loops.
 */
export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);

  // Only redirect the root path to avoid infinite redirect loops.
  // Visitors already on /ja/ or any other path are passed through as-is.
  if (url.pathname === '/' || url.pathname === '') {
    const country = request.cf?.country;
    const acceptLanguage = request.headers.get('Accept-Language') ?? '';

    // Prefer Japanese if geo-IP is Japan OR browser language is Japanese
    const prefersJapanese =
      country === 'JP' || /\bja\b/i.test(acceptLanguage);

    if (prefersJapanese) {
      return Response.redirect(
        new URL('/ja/', request.url).toString(),
        302
      );
    }
  }

  return next();
}
