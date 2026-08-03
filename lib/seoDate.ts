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

/**
 * 1–12。**title には使われていない**（月表記は廃止済み）。
 * 現在の用途は SEO_DATE_ISO（sitemap lastmod / JSON-LD dateModified）と
 * SEO_LAST_UPDATED_*（本文の「最終更新」表示）のみ。
 */
export const SEO_MONTH = '4'; // 1–12

// ── 派生値（自動計算） ──────────────────────────────────────

/** "2026-03-01" — sitemap.xml / JSON-LD 用 */
export const SEO_DATE_ISO = `${SEO_YEAR}-${SEO_MONTH.padStart(2, '0')}-01`;

/** "2026年3月" */
export const SEO_YEAR_MONTH_JA = `${SEO_YEAR}年${SEO_MONTH}月`;

/** "March 2026" */
const MONTH_NAMES_EN = [
  '', 'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];
export const SEO_MONTH_EN = MONTH_NAMES_EN[Number(SEO_MONTH)];
export const SEO_YEAR_MONTH_EN = `${SEO_MONTH_EN} ${SEO_YEAR}`;

/** "2026年3月1日" — 最終更新日（日本語） */
export const SEO_LAST_UPDATED_JA = `${SEO_YEAR}年${SEO_MONTH}月1日`;

/** "March 1, 2026" — Last updated (English) */
export const SEO_LAST_UPDATED_EN = `${SEO_MONTH_EN} 1, ${SEO_YEAR}`;

// ── Title tag 用パーツ ───────────────────────────────────────

/**
 * "【2026年最新版】" — 重要ページの title / H1 用
 *
 * 以前は「【2026年4月最新】」と月まで出していたが、SEO_MONTH の更新が
 * 止まると検索結果に古い月がそのまま出続けるため（実際に 2026-04-03 以降
 * 更新が止まり、8月時点で全ページが「4月」を表示していた）、月表記を廃止
 * して年表記に統一した。年表記なら更新漏れで古く見えることがない。
 */
export const SEO_TITLE_BADGE_JA = `【${SEO_YEAR}年最新版】`;

/** "[2026]" — 重要ページの英語 title 用（同上の理由で月表記を廃止） */
export const SEO_TITLE_BADGE_EN = `[${SEO_YEAR}]`;

/** "【2026年最新版】" — 通常ページの title / H1 用 */
export const SEO_TITLE_BADGE_YEAR_JA = `【${SEO_YEAR}年最新版】`;

/** "[2026]" — 通常ページの英語 title 用 */
export const SEO_TITLE_BADGE_YEAR_EN = `[${SEO_YEAR}]`;

/** "【2026年版】" — 短縮版 */
export const SEO_TITLE_BADGE_YEAR_SHORT_JA = `【${SEO_YEAR}年版】`;
