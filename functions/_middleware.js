/**
 * Cloudflare Pages Functions middleware
 * Geo-redirects Japan visitors from / to /jp/
 */
export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);

  // Only redirect the root path to avoid infinite redirect loops.
  // Visitors already on /jp/ or any other path are passed through as-is.
  if (url.pathname === '/' || url.pathname === '') {
    const country = request.cf?.country;
    if (country === 'JP') {
      return Response.redirect(
        new URL('/jp/', request.url).toString(),
        302
      );
    }
  }

  return next();
}
