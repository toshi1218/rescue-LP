// EN canonical URL (/en/*) ↔ JA canonical URL (/ja/*) mapping

export const enToJa: Record<string, string> = {
  '/en/': '/ja/',
  '/en/cenomar': '/ja/cenomar',
  '/en/cenomar-apostille': '/ja/cenomar-apostille',
  '/en/cenomar-validity': '/ja/cenomar-koyukigen',
  '/en/psa-birth-certificate': '/ja/psa-shussei-shomeisho',
  '/en/nbi-clearance': '/ja/nbi-clearance',
  '/en/nbi-hit': '/ja/nbi-hit',
  '/en/apostille': '/ja/apostille',
  '/en/apostille-processing-time': '/ja/apostille-shori-kikan',
  '/en/international-marriage-guide': '/ja/kokusai-kekkon-guide',
  '/en/spouse-visa-documents': '/ja/haigusha-visa',
  '/en/psa-marriage-certificate': '/ja/psa-kekkon-shomeisho',
  '/en/drivers-license-conversion': '/ja/gaimen-kirikae-guide',
  '/en/naturalization-guide': '/ja/kika-shinsei-guide',
  '/en/guides': '/ja/guides',
  '/en/psa-birth-certificate-cost': '/ja/psa-shussei-cost',
  '/en/apostille-fee': '/ja/apostille-ryokin',
  '/en/nbi-validity': '/ja/nbi-koyukigen',
  '/en/driver-record': '/ja/driver-record',
  '/en/pricing': '/ja/ryokin',
  '/en/us-visa-documents': '/ja/us-visa-documents',
  '/en/k1-visa-documents': '/ja/us-visa-documents',
  '/en/cr1-visa-documents': '/ja/us-visa-documents',
  '/en/canada': '/ja/canada',
  '/en/australia': '/ja/australia',
  '/en/uk': '/ja/uk',
  '/en/company': '/ja/company',
  '/en/contact': '/ja/contact',
  '/en/privacy': '/ja/privacy',
};

// Build reverse map: JA path → EN path
const jaToEnMap: Record<string, string> = {};
for (const [enPath, jaPath] of Object.entries(enToJa)) {
  // Avoid overwriting if multiple EN paths map to the same JA path
  // (prefer the first / most canonical one)
  if (!jaToEnMap[jaPath]) {
    jaToEnMap[jaPath] = enPath;
  }
  // Also register without trailing slash for flexible lookup
  if (jaPath.endsWith('/')) {
    const stripped = jaPath.slice(0, -1);
    if (!jaToEnMap[stripped]) {
      jaToEnMap[stripped] = enPath;
    }
  }
}

/**
 * Given the current pathname, returns the URL for the other language.
 * EN page (/en/*) → JA equivalent (/ja/*); JA page → EN equivalent.
 * Falls back to the respective home page if no mapping is found.
 */
export function getLangSwitchUrl(pathname: string): string {
  if (pathname.startsWith('/ja')) {
    const result = jaToEnMap[pathname] ?? jaToEnMap[pathname.replace(/\/$/, '')];
    return result ?? '/en/';
  } else {
    // Normalize: strip trailing slash except for /en/
    const key = pathname.replace(/\/$/, '') || '/en/';
    // Handle /en/ root
    const lookupKey = pathname === '/en/' ? '/en/' : key;
    return enToJa[lookupKey] ?? '/ja/';
  }
}
