/**
 * SEO Date Constants — 月1回このファイルだけ更新すればサイト全体に反映されます。
 *
 * 更新手順:
 *   1. SEO_YEAR / SEO_MONTH を書き換える
 *   2. npm run build (prerender 含む)
 *   3. デプロイ
 */

// ── 基本値（ここだけ変更） ──────────────────────────────────
export const SEO_YEAR = '2026';
export const SEO_MONTH = '8'; // 1–12

// ── 派生値（自動計算） ──────────────────────────────────────

/** "YYYY-MM-01" — sitemap.xml / JSON-LD 用 */
export const SEO_DATE_ISO = `${SEO_YEAR}-${SEO_MONTH.padStart(2, '0')}-01`;

/** "YYYY年M月" */
export const SEO_YEAR_MONTH_JA = `${SEO_YEAR}年${SEO_MONTH}月`;

/** "Month YYYY" */
const MONTH_NAMES_EN = [
  '', 'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];
export const SEO_MONTH_EN = MONTH_NAMES_EN[Number(SEO_MONTH)];
export const SEO_YEAR_MONTH_EN = `${SEO_MONTH_EN} ${SEO_YEAR}`;

/** 最終更新日（日本語） */
export const SEO_LAST_UPDATED_JA = `${SEO_YEAR}年${SEO_MONTH}月1日`;

/** Last updated (English) */
export const SEO_LAST_UPDATED_EN = `${SEO_MONTH_EN} 1, ${SEO_YEAR}`;

// ── Title tag 用パーツ ───────────────────────────────────────

/** 重要ページの title / H1 用 */
export const SEO_TITLE_BADGE_JA = `【${SEO_YEAR_MONTH_JA}最新】`;

/** "[March 2026]" — 重要ページの英語 title 用 */
export const SEO_TITLE_BADGE_EN = `[${SEO_YEAR_MONTH_EN}]`;

/** "【2026年最新版】" — 通常ページの title / H1 用 */
export const SEO_TITLE_BADGE_YEAR_JA = `【${SEO_YEAR}年最新版】`;

/** "[2026]" — 通常ページの英語 title 用 */
export const SEO_TITLE_BADGE_YEAR_EN = `[${SEO_YEAR}]`;

/** "【2026年版】" — 短縮版 */
export const SEO_TITLE_BADGE_YEAR_SHORT_JA = `【${SEO_YEAR}年版】`;
