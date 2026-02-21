import React from 'react';

const stats = [
  { label: '公開レビュー', value: '12件' },
  { label: '平均評価', value: '4.8 / 5.0' },
  { label: '相談から着手まで', value: '最短24時間' },
];

const reviews = [
  {
    author: 'T.Y.様（東京都・30代女性）',
    title: 'CENOMAR取得 - 国際結婚手続き',
    rating: 5,
    body: 'フィリピン人の婚約者との結婚手続きでCENOMAR取得をお願いしました。必要書類の整理が明確で、手続き全体を迷わず進められました。日本語だけで完結できて本当に助かりました。',
    date: '2025年12月'
  },
  {
    author: 'K.S.様（大阪府・40代男性）',
    title: 'NBI・DFAアポスティーユ - 配偶者ビザ申請',
    rating: 5,
    body: '配偶者ビザ申請のためNBIとDFAアポスティーユをお願いしました。不明点が多かったのですが、最初のヒアリングが丁寧で迷わず準備できました。進捗連絡も早く安心でした。',
    date: '2026年1月'
  },
  {
    author: 'M.H.様（神奈川県・20代女性）',
    title: 'LTO関連書類 - 外免切替',
    rating: 4,
    body: '外免切替のためLTO関連書類の取得を依頼。書類ごとの用途を明確に案内してくれて、最終的に必要十分な書類だけに絞れました。想定より時間がかかりましたが、対応は丁寧でした。',
    date: '2025年11月'
  },
];

const SocialProof: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50" aria-labelledby="social-proof-title">
      <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <span className="text-primary font-bold text-xs font-display tracking-widest uppercase mb-1 block">Proof</span>
          <h3 id="social-proof-title" className="text-xl font-bold text-secondary">実績とレビュー</h3>
          <p className="text-xs text-gray-500 mt-2">公開同意を得た相談者アンケートを要約して掲載しています。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
          {stats.map((item) => (
            <div key={item.label} className="bg-white border border-gray-100 rounded-xl p-4 text-center shadow-card">
              <p className="text-xs text-gray-500">{item.label}</p>
              <p className="text-lg font-bold text-secondary mt-1">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reviews.map((item) => (
            <article key={item.title} className="bg-white border border-gray-100 rounded-xl p-4 shadow-card">
              <div className="flex items-center justify-between mb-2">
                <p className="text-primary text-sm" aria-label={`評価: ${item.rating}点満点中${item.rating}点`} role="img">
                  {'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}
                </p>
                <span className="text-[10px] text-gray-400">{item.date}</span>
              </div>
              <h3 className="text-sm font-bold text-secondary mb-1">{item.title}</h3>
              <p className="text-[11px] text-gray-500 mb-2">{item.author}</p>
              <p className="text-xs text-gray-600 leading-relaxed">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
