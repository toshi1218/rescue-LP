import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import Pricing from '../components/Pricing';
import StepList from '../components/StepList';
import CtaBox from '../components/CtaBox';
import { useMeta } from '../lib/useMeta';
import { SEO_TITLE_BADGE_JA, SEO_LAST_UPDATED_JA } from '../lib/seoDate';

export default function PricingJa() {
  useMeta(
    `料金一覧${SEO_TITLE_BADGE_JA}料金・追加請求なし｜フィリピン書類取得代行`,
    'PSA電子書類＋e-Apostilleは1通39,800円、2通69,800円。入力・決済サポート22,000円から。紙原本付き、NBI、LTO、帰化申請にも対応。',
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
        subtitle="入力・決済サポート22,000円から、電子書類2通パック69,800円、紙原本付き79,800円まで。必要な範囲だけ選べます。"
        badges={['税込価格を表示', '無料お見積もり', '追加費用は着手前に確認']}
        ctaText="無料でお見積もり"
        ctaHref="#contact"
        ctaService="料金のお見積もり"
        lastUpdated={SEO_LAST_UPDATED_JA}
      />

      <CtaBox
        title="まずは無料でお見積もり"
        description="書類の種類・部数・認証の有無・発送先をお知らせください。見通しのある料金をご案内します。"
        buttonText="無料でお見積もりを依頼する"
        href="#contact"
        variant="primary"
        trustNote="追加費用が出る場合は事前にご相談します"
      />

      {/* 電子化後の料金設計 */}
      <div className="rounded-xl border border-blue-100 bg-blue-50/60 p-5 mb-2">
        <p className="text-sm font-bold text-gray-800 mb-3">電子版・紙原本・個別サポートで料金を分けています</p>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          PSA民事登録書類は、現在e-Certificateとe-Apostilleをオンラインで取得できます。そのため、紙の国際配送を前提としていた旧料金ではなく、必要なサービス範囲に応じた価格に見直しました。
        </p>
        <p className="text-sm text-gray-700 leading-relaxed mb-3">
          <strong>電子版のみなら1通39,800円、よく使う2通は69,800円。</strong>PSA SECPA紙原本と同梱配送が必要な場合は79,800円、提出先の確認項目整理や個別管理を含む安心サポートは94,800円からです。
        </p>
        <div className="rounded-lg border border-blue-200 bg-white p-4">
          <p className="text-xs font-bold text-blue-700 mb-1">お申し込み前に提出先へご確認ください</p>
          <p className="text-xs text-gray-600 leading-relaxed mb-2">
            「e-ApostilleのPDFで受理されるか」「PSA SECPA紙原本も必要か」の2点を確認すると、過不足のないプランを選べます。
          </p>
          <p className="text-xs text-gray-500 leading-relaxed">
            入力・決済サポート22,000円には、書類発行、e-Certificate／e-Apostilleの納品、政府手数料は含まれません。
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
