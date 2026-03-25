import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import Pricing from '../components/Pricing';
import StepList from '../components/StepList';
import CtaBox from '../components/CtaBox';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR_MONTH_JA } from '../lib/seoDate';

export default function PricingJa() {
  useMeta(
    `料金一覧【${SEO_YEAR_MONTH_JA}】料金・追加請求なし｜フィリピン書類取得代行`,
    'CENOMAR・PSA・NBI・DFAアポスティーユの代行料金一覧。PSA取得・アポスティーユ・国際郵送をまとめた料金。後から追加請求なし。無料見積もり受付中。',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: '料金案内' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'フィリピン書類取得代行',
        description: 'PSA・NBI・LTO等のフィリピン書類取得代行サービス。着手金50%・書類写し確認後残金50%の2段階決済。',
        url: 'https://ph-document.com/ja/ryokin',
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
        subtitle="国際結婚準備、配偶者ビザ準備、外免切替など、用途ごとの費用感をご確認いただけます。"
        badges={['用途別にご案内', '無料お見積もり', '追加費用の後出しなし']}
        ctaText="無料でお見積もり"
        ctaHref="#contact"
        ctaService="料金のお見積もり"
        lastUpdated="2026年3月1日"
      />

      <CtaBox
        title="まずは無料でお見積もり"
        description="書類の種類・部数・認証の有無・発送先をお知らせください。見通しのある料金をご案内します。"
        buttonText="無料でお見積もりを依頼する"
        href="#contact"
        variant="primary"
        trustNote="追加費用が出る場合は事前にご相談します"
      />

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
            title: '着手金50%のご入金',
            description: '着手金として総額の50%をご入金いただきます。着金確認後に手続きを開始します。',
          },
          {
            title: '書類写しのご確認',
            description: '書類取得が完了した段階で、写し（写真またはPDF）をご確認いただきます。',
          },
          {
            title: '残金50%のご入金・発送',
            description: '残額50%をご入金いただきます。残金確認後に原本を発送します。',
          },
        ]}
      />

      <div className="grid gap-4 md:grid-cols-2 mb-6">
        <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
          <p className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">お支払い方法</p>
          <p className="text-sm text-gray-600">銀行振込</p>
        </div>
        <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
          <p className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">キャンセル・返金</p>
          <ul className="space-y-1">
            <li className="text-sm text-gray-600">・着手前：無料キャンセル可</li>
            <li className="text-sm text-gray-600">・着手後：実費＋進行済み作業分を差し引いた対応</li>
            <li className="text-sm text-gray-600">・書類写し確認後に残金ご入金→発送</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}
