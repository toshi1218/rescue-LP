import React from 'react';

const stats = [
  { label: '公開レビュー', value: '12件' },
  { label: '平均評価', value: '4.8 / 5.0' },
  { label: '相談から着手まで', value: '最短24時間' },
];

const reviews = [
  {
    title: '国際結婚の手続き相談',
    rating: '★★★★★',
    body: '必要書類の順番を整理してくれて、やり直しなく進められました。進捗連絡も早く安心でした。',
  },
  {
    title: 'NBI + アポスティーユ依頼',
    rating: '★★★★★',
    body: '不明点が多かったのですが、最初のヒアリングが丁寧で迷わず準備できました。',
  },
  {
    title: 'LTO関連書類の取得',
    rating: '★★★★☆',
    body: '書類ごとの用途を明確に案内してくれて、最終的に必要十分な書類だけに絞れました。',
  },
];

const SocialProof: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50" aria-labelledby="social-proof-title">
      <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <span className="text-primary font-bold text-xs font-display tracking-widest uppercase mb-1 block">Proof</span>
          <h2 id="social-proof-title" className="text-xl font-bold text-secondary">実績とレビュー</h2>
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
              <p className="text-primary text-sm">{item.rating}</p>
              <h3 className="text-sm font-bold text-secondary mt-1 mb-2">{item.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
