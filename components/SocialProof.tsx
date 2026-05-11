import React, { useState } from 'react';
import { CheckCircle, ChevronDown } from 'lucide-react';
import { useLanguage } from '../lib/i18n';

// 47件 平均4.8点の内訳（5点満点）
// 40×5 + 6×4 + 1×3 = 200+24+3 = 227 / 47 = 4.83 → 4.8
const ratingBreakdown = [
  { stars: 5, count: 40, pct: 85 },
  { stars: 4, count: 6,  pct: 13 },
  { stars: 3, count: 1,  pct: 2  },
  { stars: 2, count: 0,  pct: 0  },
  { stars: 1, count: 0,  pct: 0  },
];

const statsData = {
  ja: [
    { value: '47件', label: '公開レビュー件数',  sub: 'アンケート同意ベース' },
    { value: '4.8',  label: '平均評価（5点満点）', sub: '★★★★★ 86%・★★★★ 13%・★★★ 1%' },
    { value: '50ヶ国以上', label: 'DHL発送先国',   sub: '日本国内・海外どちらも対応' },
    { value: '24時間以内', label: '平均返信スピード', sub: '平日営業日ベース' },
  ],
  en: [
    { value: '47',  label: 'Published Reviews',  sub: 'Survey-based, shared with consent' },
    { value: '4.8', label: 'Average Rating',      sub: '5★ 86% · 4★ 13% · 3★ 1%' },
    { value: '50+', label: 'Countries Served',    sub: 'DHL worldwide delivery' },
    { value: '24h', label: 'Avg. Reply Time',     sub: 'On business days' },
  ],
};

const reviewsData = {
  ja: [
    {
      initial: 'T', avatarColor: 'bg-secondary text-white',
      author: 'T.Y.様', meta: '東京都・30代女性',
      service: 'CENOMAR・国際結婚準備',
      rating: 5,
      body: '申請が受理されたタイミングで連絡が来て、発送前にも書類の写しを確認できました。「何も連絡が来なかったらどうしよう」という不安が最後まで一切ありませんでした。',
      date: '2025年12月',
    },
    {
      initial: 'K', avatarColor: 'bg-primary text-secondary',
      author: 'K.S.様', meta: '大阪府・40代男性',
      service: 'NBI Clearance・配偶者ビザ申請',
      rating: 5,
      body: '進捗を段階ごとに報告してもらえて、待っている間も安心でした。入管への申請書類も不備なく揃い、配偶者ビザ取得まで一度も止まりませんでした。',
      date: '2026年1月',
    },
    {
      initial: 'M', avatarColor: 'bg-emerald-600 text-white',
      author: 'M.H.様', meta: '神奈川県・20代女性',
      service: 'LTO書類・外免切替',
      rating: 4,
      body: 'フィリピンに行かないと無理だと思っていたLTO書類が、日本語だけのやり取りで届きました。途中の連絡が丁寧で、不安になる場面はゼロでした。',
      date: '2025年11月',
    },
  ],
  en: [
    {
      initial: 'J', avatarColor: 'bg-secondary text-white',
      author: 'J.M.', meta: 'California, USA · Female, 30s',
      service: 'CENOMAR & PSA — K-1 Fiancé Visa',
      rating: 5,
      body: 'I was honestly worried this might be a scam. But they sent updates at every step, I confirmed copies before final payment, and everything arrived via DHL before my USCIS deadline. Completely trustworthy.',
      date: 'Dec 2025',
    },
    {
      initial: 'M', avatarColor: 'bg-primary text-secondary',
      author: 'M.C.', meta: 'Ontario, Canada · Female, 30s',
      service: 'NBI & DFA Apostille — Canada PR',
      rating: 5,
      body: 'They confirmed the exact IRCC format required, handled everything, and shipped to Canada. Progress updates meant I was never left guessing. Saved me weeks of stress.',
      date: 'Jan 2026',
    },
    {
      initial: 'A', avatarColor: 'bg-emerald-600 text-white',
      author: 'A.R.', meta: 'Sydney, Australia · Male, 40s',
      service: 'CENOMAR & PSA — Australia Partner Visa',
      rating: 5,
      body: 'They verified requirements before starting, sent updates throughout, and I confirmed copies before the balance payment. Professional and completely transparent from start to finish.',
      date: 'Feb 2026',
    },
  ],
};

const StarRow: React.FC<{ stars: number; pct: number; count: number; isJa: boolean }> = ({ stars, pct, count, isJa }) => (
  <div className="flex items-center gap-2">
    <span className="text-xs text-gray-500 w-5 text-right flex-shrink-0">{stars}</span>
    <span className="text-yellow-400 text-xs flex-shrink-0">★</span>
    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
      <div
        className="h-full bg-yellow-400 rounded-full transition-all"
        style={{ width: `${pct}%` }}
      />
    </div>
    <span className="text-xs text-gray-400 w-10 text-right flex-shrink-0">
      {isJa ? `${count}件` : `${count}`}
    </span>
  </div>
);

const SocialProof: React.FC = React.memo(() => {
  const { lang, t } = useLanguage();
  const isJa = lang === 'ja';
  const stats = statsData[lang];
  const reviews = reviewsData[lang];
  const [reviewsExpanded, setReviewsExpanded] = useState(false);
  const visibleReviews = reviewsExpanded ? reviews : reviews.slice(0, 2);

  return (
    <section className="py-10 bg-white relative overflow-hidden" aria-labelledby="social-proof-title">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 w-72 h-72 bg-primary/5 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-4 relative z-10">

        {/* ── セクションヘッダー ── */}
        <div className="text-center mb-5">
          <span className="text-primary-dark font-bold text-xs font-display tracking-widest uppercase mb-2 block">Proof</span>
          <h2 id="social-proof-title" className="text-xl font-bold text-secondary">{t('social.title')}</h2>
          <p className="text-xs text-gray-500 mt-2">{t('social.note')}</p>
          <div className="h-1 w-12 bg-primary mx-auto rounded-full mt-3" />
        </div>

        {/* ── 評価概要ブロック（コンパクト横並び） ── */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-card p-4 mb-4">
          <div className="flex items-center justify-between gap-4">
            {/* 左: 評価 */}
            <div className="flex items-center gap-3">
              <p className="text-4xl font-extrabold text-secondary leading-none">4.8</p>
              <div>
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => <span key={i} className="text-lg text-yellow-400">★</span>)}
                </div>
                <p className="text-xs text-gray-400 mt-0.5">
                  {isJa ? '47件の評価に基づく' : 'Based on 47 reviews'}
                </p>
              </div>
            </div>
            {/* 右: 満足度 */}
            <div className="text-right flex-shrink-0">
              <p className="text-3xl font-extrabold text-primary leading-none">98%</p>
              <p className="text-xs font-bold text-gray-600 mt-0.5">
                {isJa ? '★4以上の評価' : '4★ or higher'}
              </p>
              <span className="inline-flex items-center gap-1 text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full font-semibold mt-1">
                <CheckCircle className="w-2.5 h-2.5" />
                {isJa ? 'アンケートのみ集計' : 'Survey only'}
              </span>
            </div>
          </div>
        </div>

        {/* ── 4つの実績数値 ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          {stats.map((s, i) => {
            const gradients = [
              'from-secondary/5 to-secondary/10',
              'from-primary/5 to-amber-50',
              'from-emerald-50 to-emerald-100/50',
              'from-violet-50 to-violet-100/50',
            ];
            const textColors = ['text-secondary', 'text-primary-dark', 'text-emerald-700', 'text-violet-700'];
            const barColors = ['bg-secondary', 'bg-primary', 'bg-emerald-500', 'bg-violet-500'];
            return (
              <div key={s.label} className={`bg-gradient-to-br ${gradients[i]} rounded-2xl p-4 text-center relative overflow-hidden border border-white/80 shadow-card`}>
                <div className={`absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl ${barColors[i]}`} />
                <p className={`text-2xl font-extrabold ${textColors[i]} leading-tight mt-1`}>{s.value}</p>
                <p className="text-xs font-bold text-gray-700 mt-1">{s.label}</p>
                <p className="text-[10px] text-gray-500 mt-0.5 leading-snug">{s.sub}</p>
              </div>
            );
          })}
        </div>

        {/* ── レビューカード ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {visibleReviews.map((item) => (
            <article key={item.service} className="bg-white border border-gray-100 rounded-2xl shadow-card flex flex-col overflow-hidden">
              {/* カードヘッダー */}
              <div className="bg-secondary/5 border-b border-gray-100 px-5 py-3 flex items-center justify-between">
                <span className="text-xs font-bold text-primary uppercase tracking-wide truncate max-w-[70%]">
                  {item.service}
                </span>
                <time className="text-[10px] text-gray-400 bg-white border border-gray-100 px-2 py-0.5 rounded-full flex-shrink-0">{item.date}</time>
              </div>

              <div className="p-5 flex flex-col flex-1">
                {/* 星評価 */}
                <div className="flex items-center gap-1 mb-3">
                  {[1,2,3,4,5].map(i => (
                    <span key={i} className={`text-lg ${i <= item.rating ? 'text-yellow-400' : 'text-gray-200'}`}>★</span>
                  ))}
                  <span className="text-xs text-gray-500 ml-1">{item.rating}.0</span>
                </div>

                {/* 本文 */}
                <blockquote className="text-sm text-gray-600 leading-relaxed italic flex-1 mb-4">
                  &ldquo;{item.body}&rdquo;
                </blockquote>

                {/* レビュアー */}
                <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${item.avatarColor}`}>
                    {item.initial}
                  </div>
                  <div className="text-xs text-gray-600 leading-snug min-w-0">
                    <p className="font-semibold text-gray-700 truncate">{item.author}</p>
                    <p className="text-gray-400 truncate">{item.meta}</p>
                  </div>
                  <span className="ml-auto flex-shrink-0 inline-flex items-center gap-1 text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full font-medium">
                    <CheckCircle className="w-3 h-3" />
                    {isJa ? '確認済み' : 'Verified'}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {!reviewsExpanded && (
          <div className="text-center mt-4">
            <button
              onClick={() => setReviewsExpanded(true)}
              className="inline-flex items-center gap-2 text-sm font-bold text-secondary border border-secondary/30 bg-white px-6 py-3 rounded-xl hover:bg-secondary hover:text-white transition-all shadow-sm"
            >
              <ChevronDown className="w-4 h-4" />
              {isJa ? `他の口コミを見る（残り${reviews.length - 2}件）` : `See more reviews (${reviews.length - 2} more)`}
            </button>
          </div>
        )}

      </div>
    </section>
  );
});

SocialProof.displayName = 'SocialProof';
export default SocialProof;
