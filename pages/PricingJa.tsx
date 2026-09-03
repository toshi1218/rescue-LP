import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import Pricing from '../components/Pricing';
import StepList from '../components/StepList';
import CtaBox from '../components/CtaBox';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR_MONTH_JA, SEO_TITLE_BADGE_JA } from '../lib/seoDate';
import { Info } from 'lucide-react';

export default function PricingJa() {
  useMeta(
    `料金一覧${SEO_TITLE_BADGE_JA}料金・追加請求なし｜フィリピン書類取得代行`,
    'CENOMAR・PSA・NBI・DFAアポスティーユの代行料金一覧。PSA取得・アポスティーユ・国際郵送をまとめた料金。後から追加請求なし。無料見積もり受付中。',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: '料金案内' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'フィリピン書類取得代行',
        description: 'PSA・NBI・LTO等のフィリピン書類取得代行サービス。クレジットカードまたは銀行振込にて、着手金50%・書類写し確認後残金50%の2段階決済。',
        url: 'https://ph-document.com/ja/ryokin/',
        provider: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/ja/',
        },
        areaServed: { '@type': 'Country', name: 'JP' },
      }]}
    >
      <HeroBanner
        title="料金"
        subtitle="PSA電子版のみ／紙原本＋DHLは各¥30,000、e-Apostille付き電子版¥40,000、フルセット¥50,000。2通セットも明確な総額でご案内します。"
        badges={['オンライン申請代行から対応', '無料お見積もり', '追加費用の後出しなし']}
        ctaText="無料でお見積もり"
        ctaHref="#contact"
        ctaService="料金のお見積もり"
        lastUpdated="2026年9月3日"
      />

      <CtaBox
        title="まずは無料でお見積もり"
        description="書類の種類・部数・認証の有無・発送先をお知らせください。見通しのある料金をご案内します。"
        buttonText="無料でお見積もりを依頼する"
        href="#contact"
        variant="primary"
        trustNote="追加費用が出る場合は事前にご相談します"
      />

      {/* 行政・領事手続きサポート */}
      <div className="rounded-2xl border border-primary/25 bg-primary/5 p-5 md:p-6 mb-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div className="flex-1">
            <p className="text-xs font-bold tracking-wider text-primary mb-2">オプションサービス</p>
            <h2 className="text-lg font-bold text-secondary mb-2">行政・領事手続きの確認・問い合わせサポート</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              大使館・領事館・PSA・DFAなどへの英語での問い合わせ、必要書類や手続き順序の確認、提出先に確認すべきポイントの整理をサポートします。書類取得だけでなく、手続きに伴う確認作業そのものを減らしたい方向けです。
            </p>
            <ul className="space-y-1.5 text-sm text-gray-600">
              <li>・関係機関への英語問い合わせ・回答内容の整理</li>
              <li>・必要書類、手続き順序、確認事項の整理</li>
              <li>・提出先ごとの運用確認に必要な質問事項の作成・フォロー</li>
            </ul>
          </div>
          <div className="md:w-64 rounded-xl border border-primary/20 bg-white p-5 shadow-sm">
            <p className="text-xs text-gray-500 mb-1">書類取得サービスへの追加</p>
            <p className="text-2xl font-extrabold text-primary">¥33,000</p>
            <p className="text-xs text-gray-500 mt-1">税込 / 1案件</p>
            <a href="#contact" className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-secondary px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-secondary-light">
              対応可否を相談する
            </a>
          </div>
        </div>
        <p className="mt-4 text-xs text-gray-500 leading-relaxed">
          ※本人出頭・本人署名・本人確認など、ご本人にしかできない行為は代行できません。公的機関の判断・回答内容・処理期間を保証するサービスではありません。複雑案件や調査量が多い案件は別途お見積もりします。
        </p>
      </div>

      {/* 難案件の取得可否調査 */}
      <div className="rounded-2xl border border-amber-300 bg-amber-50/70 p-5 md:p-6 mb-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div className="flex-1">
            <p className="text-xs font-bold tracking-wider text-amber-700 mb-2">特殊案件</p>
            <h2 className="text-lg font-bold text-secondary mb-2">難しい案件の取得可否調査</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              通常の申請方法では対応可否を判断できない案件について、PSA・DFA・大使館などへの確認を行い、取得可能性と合法的な手続きルートを調査します。
            </p>
            <ul className="space-y-1.5 text-sm text-gray-600">
              <li>・取得を妨げている条件と必要資料の確認</li>
              <li>・代理申請の要件、代替記録、別ルートの調査</li>
              <li>・主要段階の進捗報告と最終書面報告</li>
            </ul>
          </div>
          <div className="md:w-64 rounded-xl border border-amber-300 bg-white p-5 shadow-sm">
            <p className="text-xs text-gray-500 mb-1">取得可否調査・前払い</p>
            <p className="text-2xl font-extrabold text-amber-700">¥55,000〜</p>
            <p className="text-xs text-gray-500 mt-1">税込 / 目安2〜3週間</p>
            <a href="#contact" className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-secondary px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-secondary-light">
              有料調査について相談する
            </a>
          </div>
        </div>
        <p className="mt-4 text-xs text-gray-500 leading-relaxed">
          ※調査は書類の取得を保証するものではありません。書類取得費、公的機関の手数料、弁護士等の専門家費用、その他の第三者費用は含まれません。追加費用が必要な場合は、着手前に内容と金額をご案内し、承認をいただいてから進めます。
        </p>
      </div>

      {/* 電子・紙で料金が変わる理由 */}
      <div className="rounded-xl border border-blue-100 bg-blue-50/60 p-5 mb-2">
        <p className="text-sm font-bold text-gray-800 mb-3">電子版で完結できるか、紙原本まで必要かで料金が変わります</p>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          フィリピン書類は、提出先によってe-Certificate・e-Apostille（電子）で足りる場合と、PSA紙原本の取得・国際発送まで必要な場合があります。
        </p>
        <p className="text-sm text-gray-700 leading-relaxed mb-3">
          <strong>PSA民事書類（出生・婚姻・CENOMAR等）のDFA認証はe-Apostille（電子）が原則</strong>です。一方、NBI・LTO・PRC等の非PSA書類では物理アポスティーユが必要になるケースがあります。
        </p>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          IGRSでは、提出先の要件に合わせて、電子で完結する方法と、紙原本の取得・発送を含む方法を分けてご案内します。不要な取得や発送を前提にせず、必要な範囲でお見積もりします。
        </p>
        <div className="rounded-lg border border-blue-200 bg-white p-4">
          <p className="text-xs font-bold text-blue-700 mb-1">まず提出先に確認してください</p>
          <p className="text-xs text-gray-600 leading-relaxed mb-2">
            「e-Certificate・e-Apostilleで受理されますか？PSAの紙原本も必要ですか？」と確認すると、必要なプランを絞り込めます。
          </p>
          <p className="text-xs text-gray-500 leading-relaxed">
            ご自身での確認が難しい場合は、上記の<strong>行政・領事手続きサポート</strong>として確認事項の整理や問い合わせも承ります。
          </p>
        </div>
      </div>

      {/* 料金カード */}
      <Pricing />

      {/* 2段階決済 */}
      <StepList
        heading="2段階決済の流れ"
        steps={[
          {
            title: '無料お見積もり',
            description: '必要書類とご希望内容を確認し、無料でお見積もりをお出しします。',
          },
          {
            title: '着手金50%のお支払い',
            description: 'クレジットカード（Stripe）または銀行振込でお支払いいただきます。入金確認後に手続きを開始します。',
          },
          {
            title: '書類写しのご確認',
            description: '書類取得が完了した段階で、写し（写真またはPDF）をご確認いただきます。',
          },
          {
            title: '残金50%のお支払い・発送',
            description: '書類写しご確認後、残額50%をクレジットカードまたは銀行振込でお支払いいただきます。入金確認後に原本を発送します。',
          },
        ]}
      />

      <div className="grid gap-4 md:grid-cols-2 mb-6">
        <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
          <p className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">お支払い方法</p>
          <p className="text-sm text-gray-600">クレジットカード（Visa・Mastercard・Amex・Apple Pay・Google Pay）または銀行振込</p>
          <p className="text-xs text-gray-400 mt-1">いずれも着手金50%・書類写し確認後に残金50%の2回払い</p>
        </div>
        <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
          <p className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">キャンセル・返金</p>
          <ul className="space-y-1">
            <li className="text-sm text-gray-600">・着手前：全額返金</li>
            <li className="text-sm text-gray-600">・着手後・書類未取得：実費を除いて返金</li>
            <li className="text-sm text-gray-600">・書類取得後・写し送付前：実費＋作業費を除いて返金</li>
            <li className="text-sm text-gray-600">・DHL発送後：返金不可</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}
