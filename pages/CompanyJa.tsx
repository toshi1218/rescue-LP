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
    'https://share.google/oOoXo3nIRvnAAhbg0',
    'https://note.com/igrs_philippines',
    'https://x.com/GswCnxL7Sg15778',
    'https://www.facebook.com/share/1KTmc7CeXi/',
    'https://page.line.me/827jdwvl',
  ],
};

export default function CompanyJa() {
  useMeta(
    '会社概要｜IGRS Inc.（フィリピン書類取得代行センター）',
    'フィリピン書類取得代行センターを運営するIGRS Inc.の会社概要。代表・設立年・所在地（和歌山県和歌山市 / フィリピン共和国セブ市）・事業内容を掲載。PSA・CENOMAR・NBI・DFAアポスティーユ取得を日本語でサポート。',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: '会社概要' }]}
      jsonLd={orgJsonLd}
    >
      <HeroBanner
        title="会社概要"
        subtitle="運営会社、対応体制、返信目安、進捗報告の考え方など、ご依頼前に確認したい情報をまとめています。"
        badges={['日本法人', 'フィリピン現地スタッフ', '日本語対応']}
        ctaText="ご依頼前に確認する"
        ctaHref="/ja/contact"
        lastUpdated="2026年3月1日"
      />

      <div className="max-w-2xl">

        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-soft">
          {[
            { label: '会社名', value: 'IGRS Inc.' },
            { label: '本店所在地', value: '和歌山県和歌山市新高町2番13号' },
            { label: '法人番号', value: null, type: 'registry' },
            { label: '営業所', value: 'フィリピン共和国 セブ市' },
            { label: '事業内容', value: 'フィリピン公的書類取得代行（PSA・NBI・LTO・DFAアポスティーユ）' },
            { label: '対応言語', value: '日本語・英語' },
            { label: 'お問い合わせ', value: null },
          ].map(({ label, value, type }, i, arr) => (
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
                {type === 'registry' ? (
                  <a href="https://info.gbiz.go.jp/hojin/ichiran?hojinBango=2170001016118" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                    2170001016118（政府法人情報）
                  </a>
                ) : value ?? (
                  <a href="mailto:igrs20200601@gmail.com" className="text-primary hover:underline font-medium">
                    igrs20200601@gmail.com
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

        <div className="mt-6 rounded-2xl bg-secondary/[0.03] border border-secondary/10 p-6">
          <h2 className="text-sm font-bold text-secondary mb-4">営業時間・お支払い・返金</h2>
          <div className="grid gap-4 md:grid-cols-2 text-sm text-gray-600">
            <div>
              <p className="font-semibold text-secondary mb-1">営業時間</p>
              <p>月曜日〜金曜日 9:00〜17:00（フィリピン時間）</p>
            </div>
            <div>
              <p className="font-semibold text-secondary mb-1">連絡手段</p>
              <p>Eメール・LINEで承っています。電話による受付は行っていません。</p>
            </div>
            <div>
              <p className="font-semibold text-secondary mb-1">お支払い方法</p>
              <p>クレジットカード（Visa・Mastercard・Amex・Apple Pay・Google Pay）または銀行振込にて承っています。いずれも着手時50%・発送前50%の2回払いです。</p>
            </div>
            <div>
              <p className="font-semibold text-secondary mb-1">キャンセル・返金</p>
              <p>着手前：全額返金。着手後・書類未取得：実費（PSA手数料等）を除いて返金。書類取得後・写し送付前：実費＋作業費を除いて返金。DHL発送後：返金不可。</p>
            </div>
          </div>
        </div>

      </div>
    </PageLayout>
  );
}
