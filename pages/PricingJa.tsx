import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import Pricing from '../components/Pricing';
import StepList from '../components/StepList';
import CtaBox from '../components/CtaBox';
import GuaranteeBlock from '../components/GuaranteeBlock';
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
        subtitle="PSAオンライン申請代行（¥16,500〜）からフルサービスパック（¥94,000〜）まで、目的・予算に合わせてお選びいただけます。"
        badges={['オンライン申請代行から対応', '無料お見積もり', '追加費用の後出しなし']}
        ctaText="無料でお見積もり"
        ctaHref="#contact"
        ctaService="料金のお見積もり"
        lastUpdated="2026年5月1日"
      />

      <CtaBox
        title="まずは無料でお見積もり"
        description="書類の種類・部数・認証の有無・発送先をお知らせください。見通しのある料金をご案内します。"
        buttonText="無料でお見積もりを依頼する"
        href="#contact"
        variant="primary"
        trustNote="追加費用が出る場合は事前にご相談します"
      />

      {/* なぜ他社より安くないのか */}
      <div className="rounded-xl border border-blue-100 bg-blue-50/60 p-5 mb-2">
        <p className="text-sm font-bold text-gray-800 mb-3">なぜ他社より安くないのか</p>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          フィリピン書類の代行サービスの中には、e-Apostille（電子認証）・e-Certificate（電子書類）で対応している業者もあり、費用を抑えられます。
        </p>
        <p className="text-sm text-gray-700 leading-relaxed mb-3">
          ただし、<strong>日本の市区町村役場・法務局・出入国在留管理庁では、紙の原本・物理アポスティーユを必須とするケースが大半です。</strong>
        </p>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          IGRSが取り扱うのは<strong>物理アポスティーユ（紙原本）のみ</strong>。現地DFAへの予約・申請・受け取りをスタッフが代行するため、予約枠に限りがあり、価格を下げることができません。その分、<strong>日本の提出先で弾かれるリスクはほぼありません。</strong>
        </p>
        <div className="rounded-lg border border-blue-200 bg-white p-4">
          <p className="text-xs font-bold text-blue-700 mb-1">まず提出先に確認してください</p>
          <p className="text-xs text-gray-600 leading-relaxed mb-2">
            「e-Apostilleで受理しますか？紙の原本が必要ですか？」と確認してから業者を選ぶことをおすすめします。
          </p>
          <p className="text-xs text-gray-500 leading-relaxed">
            電子対応が確認できた場合は、<strong>PSAオンライン申請代行（¥16,500〜）</strong>でコストを抑えられます。紙原本が必要な場合はフルサービスをご利用ください。
          </p>
        </div>
      </div>

      {/* 料金カード */}
      <Pricing />

      {/* 安心・再取得サポート */}
      <GuaranteeBlock
        badge="安心サポート"
        title="万一受理されなくても、作業費無料で取り直します"
        lead="提出先で受理されず、書類を取り直すことになった場合でも、当社の代行作業費は追加でいただきません。政府への実費と、物理書類の再発送にかかる送料など実費のみのご負担で、正しい形の書類を取り直します。"
        items={[
          {
            label: '作業費は無料',
            detail: '再取得にかかる当社の代行作業費はいただきません。ご負担いただくのは政府実費・再発送の送料などの実費のみです。',
          },
          {
            label: '電子・紙の切替にも対応',
            detail: '「電子で提出したら紙原本を求められた」といった形式の行き違いにも、紙原本の取得へ切り替えて対応します（物理書類の実費・送料は別途）。',
          },
          {
            label: '対応回数の目安',
            detail: '本サポートによる無償の取り直しは、1案件につき1回を目安とします。',
          },
        ]}
        note="※ 本サポートは、提出先（法務局・出入国在留管理庁・市区町村役場・在外公館等）が必ず書類を受理することを保証するものではありません。提出先が求める形式（電子／紙）は、申請前に提出先へご確認いただくようお願いします。お客様のご都合による内容変更や、ご提供情報の誤りに起因する取り直しは対象外です。"
      />

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
