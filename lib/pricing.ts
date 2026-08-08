/**
 * Japanese consumer pricing — single source of truth.
 *
 * Keep every homepage, pricing card and structured-data offer linked to these
 * values so the same package is never shown at conflicting prices.
 */
export const JA_PRICING = {
  inputSupport: 22_000,
  digitalSingle: 39_800,
  digitalPair: 69_800,
  paperPair: 79_800,
  assistedPair: 94_800,
  additionalDigitalDocument: 29_800,
  consolidatedPaperDelivery: 11_000,
  apostilleOnly: 39_000,
  nbiApostille: 39_000,
  lto: 116_000,
  naturalization: 132_500,
} as const;

export const formatJpy = (amount: number) =>
  new Intl.NumberFormat('ja-JP', {
    style: 'currency',
    currency: 'JPY',
    maximumFractionDigits: 0,
  }).format(amount);
