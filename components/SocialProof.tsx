import React from 'react';
import { useLanguage } from '../lib/i18n';

const statsValues = {
  ja: ['12件', '4.8 / 5.0', '24時間以内に返信'],
  en: ['12', '4.8 / 5.0', 'Within 24 hrs'],
};

const reviewsData = {
  ja: [
    {
      author: 'T.Y.様（東京都・30代女性）',
      title: 'CENOMAR取得 - 国際結婚手続き',
      rating: 5,
      body: '最初は「本当に日本語だけで大丈夫なの？」と半信半疑でした。でも、申請が受理されたタイミングで連絡が来て、発送前にも書類の写しを確認できて、ずっと安心して待てました。日本語だけで完結できたのが一番助かりました。',
      date: '2025年12月',
    },
    {
      author: 'K.S.様（大阪府・40代男性）',
      title: 'NBI・DFAアポスティーユ - 配偶者ビザ申請',
      rating: 5,
      body: '「着手後に何も連絡がなかったらどうしよう」と不安でしたが、進捗を段階ごとに報告してもらえて、待っている間も安心でした。書類の不備もなく、入管への申請がスムーズに進みました。',
      date: '2026年1月',
    },
    {
      author: 'M.H.様（神奈川県・20代女性）',
      title: 'LTO関連書類 - 外免切替',
      rating: 4,
      body: 'LTO書類の取り方が全く分からず、フィリピンに行かないと無理だと思っていました。でも日本語だけのやり取りで、渡航ゼロで書類が届きました。想定より時間はかかりましたが、途中の連絡が丁寧で不安になりませんでした。',
      date: '2025年11月',
    },
  ],
  en: [
    {
      author: 'J.M. (California, USA, female, 30s)',
      title: 'CENOMAR & PSA - K-1 Fiancé Visa',
      rating: 5,
      body: 'I was honestly worried this might be a scam — paying money to a company overseas with no way to verify anything. But they sent updates at every step, I confirmed the document copies before final payment, and everything arrived via DHL before my USCIS deadline. Completely trustworthy.',
      date: 'Dec 2025',
    },
    {
      author: 'M.C. (Ontario, Canada, female, 30s)',
      title: 'NBI & DFA Apostille - Canada PR Application',
      rating: 5,
      body: "I had no idea if IRCC required Apostille or not, and I was terrified of getting it wrong. They confirmed the exact format required, handled everything, and shipped to my Canadian address. The progress updates meant I was never left guessing. Saved me so much stress.",
      date: 'Jan 2026',
    },
    {
      author: 'A.R. (Sydney, Australia, male, 40s)',
      title: 'CENOMAR & PSA - Australia Partner Visa',
      rating: 5,
      body: "Home Affairs has a strict checklist and I was scared one wrong document would delay the whole application. They verified the requirements before starting, sent updates throughout, and I confirmed the copies before paying the balance. Professional and completely transparent.",
      date: 'Feb 2026',
    },
  ],
};

const SocialProof: React.FC = React.memo(() => {
  const { lang, t } = useLanguage();
  const statValues = statsValues[lang];
  const reviews = reviewsData[lang];

  const statLabels = [t('social.stat1.label'), t('social.stat2.label'), t('social.stat3.label')];

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden" aria-labelledby="social-proof-title">
      {/* 背景装飾 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 w-72 h-72 bg-primary/5 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <span className="text-primary-dark font-bold text-xs font-display tracking-widest uppercase mb-2 block">Proof</span>
          <h2 id="social-proof-title" className="text-xl font-bold text-secondary">{t('social.title')}</h2>
          <p className="text-xs text-gray-500 mt-2">{t('social.note')}</p>
          <div className="h-1 w-12 bg-primary mx-auto rounded-full mt-3"></div>
        </div>

        {/* 統計数値 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {statLabels.map((label, i) => (
            <div key={label} className="bg-white border border-gray-100 rounded-2xl p-5 text-center shadow-card relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-primary"></div>
              <p className="text-2xl font-bold text-secondary mt-1">{statValues[i]}</p>
              <p className="text-xs text-gray-500 mt-1">{label}</p>
            </div>
          ))}
        </div>

        {/* レビューカード */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reviews.map((item) => (
            <article key={item.title} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-card border-l-4 border-l-primary hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <p className="text-yellow-500 text-base" aria-label={`Rating: ${item.rating} out of 5 stars`} role="img">
                  {'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}
                </p>
                <time className="text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">{item.date}</time>
              </div>
              <h3 className="text-sm font-bold text-secondary mb-1">{item.title}</h3>
              <p className="text-xs text-gray-400 mb-3 flex items-center gap-1">
                <span className="inline-block w-4 h-4 rounded-full bg-secondary/10 text-secondary text-[8px] flex items-center justify-center font-bold">✓</span>
                {item.author}
              </p>
              <blockquote className="text-xs text-gray-600 leading-relaxed italic">"{item.body}"</blockquote>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
});

SocialProof.displayName = 'SocialProof';
export default SocialProof;
