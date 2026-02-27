// EN canonical URL ↔ JA canonical URL mapping

export const enToJa: Record<string, string> = {
  '/': '/ja/',
  '/cenomar': '/ja/cenomar',
  '/psa-birth-certificate': '/ja/psa-shussei-shomeisho',
  '/nbi-clearance': '/ja/nbi-clearance',
  '/apostille': '/ja/apostille',
  '/international-marriage-guide': '/ja/kokusai-kekkon-guide',
  '/spouse-visa-documents': '/ja/haigusha-visa',
  '/psa-marriage-certificate': '/ja/psa-kekkon-shomeisho',
  '/drivers-license-conversion': '/ja/gaimen-kirikae-guide',
  '/naturalization-guide': '/ja/kika-shinsei-guide',
  '/pricing': '/ja/ryokin',
  '/company': '/ja/company',
  '/contact': '/ja/contact',
  '/privacy': '/ja/privacy',
};

// Build reverse map: JA path → EN path
const jaToEnMap: Record<string, string> = {};
for (const [enPath, jaPath] of Object.entries(enToJa)) {
  jaToEnMap[jaPath] = enPath;
  // Also register without trailing slash for flexible lookup
  if (jaPath.endsWith('/')) {
    jaToEnMap[jaPath.slice(0, -1)] = enPath;
  }
}

/**
 * Given the current pathname, returns the URL for the other language.
 * EN page → JA equivalent; JA page → EN equivalent.
 * Falls back to the respective home page if no mapping is found.
 */
export function getLangSwitchUrl(pathname: string): string {
  if (pathname.startsWith('/ja')) {
    const result = jaToEnMap[pathname] ?? jaToEnMap[pathname.replace(/\/$/, '')];
    return result ?? '/';
  } else {
    const key = pathname.replace(/\/$/, '') || '/';
    return enToJa[key] ?? '/ja/';
  }
}
