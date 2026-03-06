import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { Car, AlertTriangle, Clock, FileCheck, Globe, Users } from 'lucide-react';
import SummaryBlock from '../components/SummaryBlock';

export default function LicenseConversionJa() {
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: '外免切替 LTO書類代行' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: '外免切替 LTO書類取得代行',
        description: 'フィリピン免許から日本免許への外免切替に必要なLTO書類をDFAアポスティーユ付きで代行取得。試験場の予約日から逆算して手配。複数名まとめ依頼も対応。',
        url: 'https://ph-document.com/ja/gaimen-kirikae-guide',
        provider: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/ja/',
        },
        areaServed: { '@type': 'Country', name: 'JP' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'JPY',
          price: '100000',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '100000',
            priceCurrency: 'JPY',
            description: 'LTO書類取得・DFAアポスティーユ・国際郵送込み（税抜）',
          },
        },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: '外免切替に必要なLTO書類は何ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'ドライバーズレコード（運転記録証明書）が主な書類です。試験場によって必要な書類が異なる場合があるため、提出先をお知らせください。',
              },
            },
            {
              '@type': 'Question',
              name: '試験場の予約日が決まっています。間に合いますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '予約日をお知らせいただければ、逆算してスケジュールをご案内します。まずご相談ください。',
              },
            },
            {
              '@type': 'Question',
              name: '複数名分まとめて依頼できますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'はい。会社が従業員の外免切替をサポートする場合など、複数名分の書類取得にも対応します。',
              },
            },
            {
              '@type': 'Question',
              name: '書類が試験場で受け付けられなかった場合はどうなりますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '書類の形式を事前に確認しますが、万が一問題があった場合は再取得対応します。詳細は相談時にご確認ください。',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="外免切替のLTO書類、日本語だけで取り寄せます"
        badges={['日本語だけでOK', 'LTO正規書類', 'コミコミ料金']}
        ctaText="無料相談はこちら"
        ctaHref="#contact"
      />

      <SummaryBlock
        conclusion="外免切替（フィリピン免許→日本免許）に必要なLTO書類を、日本語だけで取り寄せできます。"
        points={[
          '現地スタッフがフィリピン陸運局（LTO）に直接申請・取得',
          '試験場の要件に合わせた正規書類で手配',
          '試験場の予約日に合わせた逆算スケジュールでご案内',
          '複数名分のまとめ依頼にも対応',
        ]}
        ctaText="無料で相談する（24時間以内に返信）"
      />

      {/* 訴求ブロック */}
      <section className="mb-12 rounded-2xl bg-amber-50 border border-amber-200 p-6">
        <div className="flex items-start gap-3 mb-4">
          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <h2 className="text-base font-bold text-amber-900">外免切替のLTO書類、こんな落とし穴があります</h2>
        </div>
        <ul className="space-y-2 text-sm text-amber-800 leading-relaxed">
          <li className="flex items-start gap-2"><span className="text-amber-500 font-bold flex-shrink-0">✕</span>LTO書類は<strong>フィリピン陸運局（LTO）への直接申請が必要</strong>。日本からオンラインでは取得不可</li>
          <li className="flex items-start gap-2"><span className="text-amber-500 font-bold flex-shrink-0">✕</span>運転免許試験場が求める書類の形式は<strong>試験場によって異なる</strong>ケースがある</li>
          <li className="flex items-start gap-2"><span className="text-amber-500 font-bold flex-shrink-0">✕</span>書類の不備で<strong>試験場での手続きが止まる</strong>と、再取得に数週間〜数ヶ月かかる</li>
        </ul>
        <p className="mt-4 text-sm font-semibold text-amber-900">→ 提出先の試験場に合わせた形式で、LTO書類を代行取得します。</p>
      </section>

      <FeatureList
        heading="こんな方に選ばれています"
        items={[
          {
            icon: <Car className="w-4 h-4" />,
            title: '日本でフィリピン免許を日本免許に切り替えたい方',
            description: '運転免許試験場への外免切替申請に必要なLTO書類（ドライバーズレコード等）を代行取得します。提出先の試験場に合わせた形式で手配します。',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: '会社が従業員の外免切替をサポートしている方',
            description: '複数名分の書類取得にも対応します。会社担当者様からまとめてご依頼いただけます。',
          },
          {
            icon: <Clock className="w-4 h-4" />,
            title: '試験場の予約日が決まっている方',
            description: '試験場の予約日に間に合わせるため、取得スケジュールを逆算してご案内します。まず予約日をお知らせください。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: '何が必要かわからない方',
            description: '試験場によって必要書類が異なる場合があります。提出先をお知らせいただければ、必要なものを整理してご案内します。',
          },
        ]}
      />

      <CtaBox
        title="試験場の予約日に間に合わせます"
        description="予約日が決まっている場合は、まず日程をお知らせください。逆算してスケジュールをご案内します。"
        buttonText="無料で相談する"
        href="#contact"
        variant="primary"
      />

      <FeatureList
        heading="料金に含まれるもの（コミコミ）"
        items={[
          {
            icon: <Car className="w-4 h-4" />,
            title: 'LTO書類取得（ドライバーズレコード等）',
            description: 'フィリピン陸運局（LTO）への申請・取得を代行。外免切替に必要な書類を正規の形式で取得します。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: '書類確認・形式チェック',
            description: '取得した書類が試験場の要件を満たしているか確認します。不備があれば再取得します。',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: '国際郵送（日本へ）',
            description: '追跡番号付きの国際郵便で日本のご住所へお届けします。',
          },
        ]}
      />

      <CtaBox
        title="追加費用の後出しはありません"
        description="LTO書類取得・国際郵送をまとめたコミコミ料金でご案内します。見積もり後の追加請求はありません。"
        buttonText="料金を確認する"
        href="#contact"
        variant="secondary"
      />

      <StepList
        heading="ご依頼の流れ"
        steps={[
          { title: 'フォームで相談（無料）', description: '提出先の試験場と試験場の予約日（決まっている場合）をお知らせください。' },
          { title: '必要書類・料金の確認', description: 'コミコミ料金をご提示します。納得いただいてからお支払い。' },
          { title: 'フィリピン現地で手配', description: 'LTO書類を現地スタッフが取得します。書類の形式を確認してから発送します。' },
          { title: '日本へ郵送・完了', description: '書類が揃い次第、追跡付きでお届けします。試験場の予約日に間に合うよう進めます。' },
        ]}
      />

      <FaqSection
        items={[
          { q: '外免切替に必要なLTO書類は何ですか？', a: 'ドライバーズレコード（運転記録証明書）が主な書類です。試験場によって必要な書類が異なる場合があるため、提出先をお知らせください。' },
          { q: '試験場の予約日が決まっています。間に合いますか？', a: '予約日をお知らせいただければ、逆算してスケジュールをご案内します。まずご相談ください。' },
          { q: '複数名分まとめて依頼できますか？', a: 'はい。会社が従業員の外免切替をサポートする場合など、複数名分の書類取得にも対応します。' },
          { q: '書類が試験場で受け付けられなかった場合はどうなりますか？', a: '書類の形式を事前に確認しますが、万が一問題があった場合は再取得対応します。詳細は相談時にご確認ください。' },
        ]}
        ctaTitle="まずは状況をお聞かせください"
        ctaButton="無料相談フォームへ"
      />
    </PageLayout>
  );
}
