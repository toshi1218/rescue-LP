import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import { useMeta } from '../lib/useMeta';

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'IGRS Inc.',
  alternateName: '株式会社IGRS',
  url: 'https://ph-document.com/',
  email: 'igrs20200601@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'JP',
    addressRegion: '和歌山県',
    addressLocality: '和歌山市',
  },
  sameAs: [
    'https://ph-document.com/ja/company/',
    'https://ph-document.com/en/company/',
    'https://ph-document.com/ko/company/',
  ],
};

export default function CompanyJa() {
  useMeta(
    '運営会社情報｜IGRS Inc.（フィリピン書類取得代行センター）',
    'フィリピン書類取得代行センターを運営するIGRS Inc.の会社情報。日本法人として和歌山市を本店所在地とし、セブ市の現地業務拠点と連携してフィリピン公的書類の取得をサポートします。',
  );

  const details = [
    { label: 'サービス名', value: 'フィリピン書類取得代行センター', type: 'text' },
    { label: '運営会社', value: 'IGRS Inc.（株式会社IGRS）', type: 'text' },
    { label: '法人番号', type: 'registry' },
    { label: '本店所在地', value: '和歌山県和歌山市', type: 'text' },
    { label: '現地業務拠点', value: 'フィリピン共和国 セブ市', type: 'text' },
    { label: '担当窓口', value: '五十嵐', type: 'text' },
    { label: '事業内容', value: 'フィリピン公的書類取得代行（PSA・NBI・LTO・DFAアポスティーユ）', type: 'text' },
    { label: '対応言語', value: '日本語・英語', type: 'text' },
    { label: 'お問い合わせ', type: 'email' },
  ] as const;

  return (
    <PageLayout breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: '運営会社情報' }]} jsonLd={orgJsonLd}>
      <HeroBanner
        title="運営会社情報"
        subtitle="本サービスを運営する会社、対応体制、連絡先をご案内します。"
        badges={['日本法人', 'フィリピン現地対応', '日本語対応']}
        ctaText="お問い合わせはこちら"
        ctaHref="/ja/contact"
        lastUpdated="2026年8月14日"
      />

      <div className="max-w-2xl">
        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-soft">
          {details.map((item, i) => (
            <div key={item.label} className={`flex flex-col gap-1 px-6 py-4 sm:flex-row sm:gap-0 ${i < details.length - 1 ? 'border-b border-gray-50' : ''}`}>
              <span className="w-full shrink-0 pt-0.5 text-xs font-bold uppercase tracking-wider text-gray-400 sm:w-40">{item.label}</span>
              <span className="text-sm leading-relaxed text-gray-700">
                {item.type === 'registry' ? (
                  <a href="https://info.gbiz.go.jp/hojin/ichiran?hojinBango=2170001016118" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">2170001016118（政府法人情報）</a>
                ) : item.type === 'email' ? (
                  <a href="mailto:igrs20200601@gmail.com" className="font-medium text-primary hover:underline">igrs20200601@gmail.com</a>
                ) : item.value}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-secondary/10 bg-secondary/[0.03] p-6">
          <h2 className="mb-3 text-sm font-bold text-secondary">サービスについて</h2>
          <p className="text-sm leading-relaxed text-gray-600">
            IGRS Inc. は、日本法人としてご依頼を受け付け、セブ市の現地業務拠点と連携して PSA・NBI・LTO・DFA アポスティーユ等の手続きを進めます。
            国際結婚・配偶者ビザ・外免切替・帰化申請など、提出先に合わせた書類の整理から取得・発送まで対応します。
          </p>
        </div>

        <div className="mt-6 rounded-2xl border border-secondary/10 bg-secondary/[0.03] p-6">
          <h2 className="mb-4 text-sm font-bold text-secondary">営業時間・お支払い・返金</h2>
          <div className="grid gap-4 text-sm text-gray-600 md:grid-cols-2">
            <div><p className="mb-1 font-semibold text-secondary">営業時間</p><p>月曜日〜金曜日 9:00〜17:00（フィリピン時間）</p></div>
            <div><p className="mb-1 font-semibold text-secondary">連絡手段</p><p>Eメール・LINEで承っています。電話による受付は行っていません。</p></div>
            <div><p className="mb-1 font-semibold text-secondary">お支払い方法</p><p>クレジットカードまたは銀行振込。着手時50%・発送前50%の2回払いです。</p></div>
            <div><p className="mb-1 font-semibold text-secondary">キャンセル・返金</p><p>着手前は全額返金。着手後は実費・作業の進行状況に応じて返金額を計算します。</p></div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
