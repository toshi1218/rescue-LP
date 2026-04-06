import React from 'react';

const reviews = [
  {
    stars: 5,
    purpose: '国際結婚準備',
    body: '日本語で全てのやり取りが完結し、フィリピンに渡航せずにCENOMARとPSA出生証明書を取得できました。進捗報告も丁寧で、何が起きているか常に分かる状態で進められました。',
    initial: 'M',
    name: 'M.K.',
    author: '30代 女性',
    context: '国際結婚・日本先行婚',
    avatarColor: 'bg-secondary text-white',
  },
  {
    stars: 5,
    purpose: '配偶者ビザ申請',
    body: 'NBI ClearanceのDFAアポスティーユも含めてまとめて依頼できました。入管の提出期限に余裕を持って書類が届き、配偶者ビザ申請が無事完了しました。',
    initial: 'T',
    name: 'T.S.',
    author: '40代 男性',
    context: '配偶者ビザ・入管提出',
    avatarColor: 'bg-primary text-secondary',
  },
  {
    stars: 5,
    purpose: '外免切替',
    body: 'LTO書類の取り方が全く分からない状態で相談しました。必要な書類を整理してもらい、試験場の予約日から逆算して手配いただけました。渡航ゼロで完結できました。',
    initial: 'K',
    name: 'K.Y.',
    author: '40代 男性',
    context: '外免切替・運転免許センター提出',
    avatarColor: 'bg-emerald-600 text-white',
  },
];

const ReviewSection: React.FC = () => (
  <section className="py-10 bg-white" aria-labelledby="reviews-heading">
    <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-4">
      <div className="text-center mb-8">
        <span className="text-primary-dark font-bold text-xs tracking-widest uppercase mb-1 block">Reviews</span>
        <h2 id="reviews-heading" className="text-xl font-bold text-secondary mb-1">お客様の声</h2>
        <div className="flex items-center justify-center gap-1.5">
          <span className="text-yellow-400 text-base leading-none" aria-hidden="true">★★★★★</span>
          <span className="text-gray-500 text-xs">4.8 / 5.0（47件）</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {reviews.map((r, i) => (
          <article key={i} className="bg-gray-50 rounded-xl border border-gray-100 flex flex-col overflow-hidden">
            {/* Card header with purpose badge */}
            <div className="bg-secondary/5 border-b border-gray-100 px-5 py-3 flex items-center justify-between">
              <span className="text-xs font-bold text-primary uppercase tracking-wide">
                {r.purpose}
              </span>
              <span className="text-yellow-400 text-sm" aria-label={`${r.stars}点満点`}>
                {'★'.repeat(r.stars)}
              </span>
            </div>

            <div className="p-5 flex flex-col flex-1">
              <p className="text-gray-700 text-base leading-relaxed flex-1 mb-4">
                &ldquo;{r.body}&rdquo;
              </p>

              {/* Reviewer row */}
              <div className="flex items-center gap-3 pt-3 border-t border-gray-200">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${r.avatarColor}`}>
                  {r.initial}
                </div>
                <div className="text-xs text-gray-600 leading-snug">
                  <p className="font-semibold text-gray-700">{r.name}（{r.author}）</p>
                  <p className="text-gray-500">{r.context}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewSection;
