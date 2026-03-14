import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';

export default function CompanyJa() {
  return (
    <PageLayout breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: '会社概要' }]}>
      <HeroBanner
        title="会社概要"
        subtitle="運営会社、対応体制、返信目安、進捗報告の考え方など、ご依頼前に確認したい情報をまとめています。"
        badges={['日本法人', 'フィリピン現地スタッフ', '日本語対応']}
        ctaText="ご依頼前に確認する"
        ctaHref="/ja/contact"
      />

      <div className="max-w-2xl">

        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-soft">
          {[
            { label: '会社名', value: 'IGRS Inc.' },
            { label: '本店所在地', value: '和歌山県和歌山市' },
            { label: '営業所', value: 'フィリピン共和国 セブ市' },
            { label: '事業内容', value: 'フィリピン公的書類取得代行（PSA・NBI・LTO・DFAアポスティーユ）' },
            { label: '対応言語', value: '日本語・英語' },
            { label: 'お問い合わせ', value: null },
          ].map(({ label, value }, i, arr) => (
            <div
              key={label}
              className={`flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-0 px-6 py-4 ${
                i < arr.length - 1 ? 'border-b border-gray-50' : ''
              }`}
            >
              <span className="sm:w-36 flex-shrink-0 text-xs font-bold text-gray-400 uppercase tracking-wider pt-0.5">
                {label}
              </span>
              <span className="text-sm text-gray-700 leading-relaxed">
                {value ?? (
                  <a href="/ja/contact" className="text-primary hover:underline font-medium">
                    お問い合わせフォームへ →
                  </a>
                )}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-secondary/[0.03] border border-secondary/10 p-6">
          <h2 className="text-sm font-bold text-secondary mb-3">サービスについて</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            IGRS Inc. は、日本在住のお客様を対象に、フィリピン公的書類の取得代行サービスを提供しています。
            日本法人が窓口となり、フィリピン・セブ市の現地スタッフが PSA・NBI・LTO・DFA アポスティーユの手続きを代行します。
            国際結婚・配偶者ビザ・外免切替・帰化申請など、用途に合わせた書類を日本語だけでご依頼いただけます。
          </p>
        </div>

      </div>
    </PageLayout>
  );
}
