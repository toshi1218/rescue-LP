// Tracking codes exclude visually ambiguous characters (0/o, 1/l/i) so
// customers can read them off a phone screen or printed slip without errors.
const CODE_ALPHABET = 'abcdefghjkmnpqrstuvwxyz23456789';

export function generateTrackingCode(length = 8): string {
  const bytes = new Uint8Array(length);
  crypto.getRandomValues(bytes);
  let out = '';
  for (const b of bytes) {
    out += CODE_ALPHABET[b % CODE_ALPHABET.length];
  }
  return out;
}

export function generatePin(): string {
  const bytes = new Uint8Array(6);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (b) => (b % 10).toString()).join('');
}

// Constant-time-ish comparison to avoid trivial timing side-channels on the
// PIN/admin-password checks. Not bank-grade, but cheap insurance.
export function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}
