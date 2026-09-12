// Basic email format check for contact forms.
// Catches obviously invalid addresses (missing @, missing domain, missing TLD,
// stray whitespace) and provides a consistent message across browsers.
// Not RFC-exhaustive on purpose — the goal is to filter out typos and junk
// input that produce unreachable "dead leads", not to reject rare-but-valid addresses.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email: string): boolean {
  return EMAIL_RE.test(email.trim());
}
