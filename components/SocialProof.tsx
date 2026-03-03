import React from 'react';
import { useLanguage } from '../lib/i18n';

const statsValues = {
  ja: ['12件', '4.8 / 5.0', '最短24時間'],
  en: ['12', '4.8 / 5.0', 'Within 24 hrs'],
};

const reviewsData = {
  ja: [
    {
      author: 'T.Y.様（東京都・30代女性）',
      title: 'CENOMAR取得 - 国際結婚手続き',
      rating: 5,
      body: 'フィリピン人の婚約者との結婚手続きでCENOMAR取得をお願いしました。必要書類の整理が明確で、手続き全体を迷わず進められました。日本語だけで完結できて本当に助かりました。',
      date: '2025年12月',
    },
    {
      author: 'K.S.様（大阪府・40代男性）',
      title: 'NBI・DFAアポスティーユ - 配偶者ビザ申請',
      rating: 5,
      body: '配偶者ビザ申請のためNBIとDFAアポスティーユをお願いしました。不明点が多かったのですが、最初のヒアリングが丁寧で迷わず準備できました。進捗連絡も早く安心でした。',
      date: '2026年1月',
    },
    {
      author: 'M.H.様（神奈川県・20代女性）',
      title: 'LTO関連書類 - 外免切替',
      rating: 4,
      body: '外免切替のためLTO関連書類の取得を依頼。書類ごとの用途を明確に案内してくれて、最終的に必要十分な書類だけに絞れました。想定より時間がかかりましたが、対応は丁寧でした。',
      date: '2025年11月',
    },
  ],
  en: [
    {
      author: 'J.M. (California, female, 30s)',
      title: 'CENOMAR & PSA - K-1 Fiancé Visa',
      rating: 5,
      body: 'I needed CENOMAR and PSA Birth Certificate for my fiancé\'s K-1 visa petition. Everything was clearly explained and the documents arrived at my US address via DHL well before the USCIS deadline. Highly recommend.',
      date: 'Dec 2025',
    },
    {
      author: 'R.T. (Texas, male, 40s)',
      title: 'NBI & DFA Apostille - CR-1 Spouse Visa',
      rating: 5,
      body: 'Needed NBI Clearance with DFA Apostille for NVC submission. The team confirmed the exact format required and shipped everything directly to my home. The whole process was smooth and stress-free.',
      date: 'Jan 2026',
    },
    {
      author: 'S.K. (Florida, female, 30s)',
      title: 'PSA Marriage Certificate - US Embassy Interview',
      rating: 5,
      body: 'Had a tight deadline before the US Embassy interview. The team obtained a fresh PSA Marriage Certificate and Apostille within the required timeframe and shipped it via DHL. Excellent communication throughout.',
      date: 'Feb 2026',
    },
  ],
};

const SocialProof: React.FC = () => {
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
          <span className="text-primary font-bold text-xs font-display tracking-widest uppercase mb-2 block">Proof</span>
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
                <p className="text-primary text-base" aria-label={`Rating: ${item.rating} out of 5`} role="img">
                  {'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}
                </p>
                <span className="text-[10px] text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">{item.date}</span>
              </div>
              <h3 className="text-sm font-bold text-secondary mb-1">{item.title}</h3>
              <p className="text-[11px] text-gray-400 mb-3 flex items-center gap-1">
                <span className="inline-block w-4 h-4 rounded-full bg-secondary/10 text-secondary text-[8px] flex items-center justify-center font-bold">✓</span>
                {item.author}
              </p>
              <p className="text-xs text-gray-600 leading-relaxed italic">"{item.body}"</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
