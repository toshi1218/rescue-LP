// EN canonical URL ↔ JA canonical URL mapping

export const enToJa: Record<string, string> = {
  '/': '/ja/',
  '/cenomar': '/ja/cenomar',
  '/cenomar-apostille': '/ja/cenomar-apostille',
  '/cenomar-validity': '/ja/cenomar-koyukigen',
  '/psa-birth-certificate': '/ja/psa-shussei-shomeisho',
  '/nbi-clearance': '/ja/nbi-clearance',
  '/nbi-hit': '/ja/nbi-hit',
  '/apostille': '/ja/apostille',
  '/apostille-processing-time': '/ja/apostille-shori-kikan',
  '/psa-marriage-certificate': '/ja/psa-kekkon-shomeisho',
  '/guides': '/ja/guides',
  '/psa-birth-certificate-cost': '/ja/psa-shussei-cost',
  '/apostille-fee': '/ja/apostille-ryokin',
  '/nbi-validity': '/ja/nbi-koyukigen',
  '/k1-visa-documents': '/ja/',
  '/cr1-visa-documents': '/ja/',
  '/us-visa-documents': '/ja/us-visa-documents',
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
