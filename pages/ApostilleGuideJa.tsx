import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { BadgeCheck, AlertTriangle, Clock, FileCheck, Globe, Users } from 'lucide-react';
import SummaryBlock from '../components/SummaryBlock';

export default function ApostilleGuideJa() {
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'DFAアポスティーユ取得代行' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'DFAアポスティーユ取得代行',
        description: 'フィリピン外務省（DFA）のアポスティーユ認証を日本語だけで代行取得。PSA・CENOMAR・NBI等の書類取得と同時依頼OK。紙の原本で日本へ郵送。約2週間〜。',
        url: 'https://ph-document.com/ja/apostille',
        provider: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/ja/',
        },
        areaServed: { '@type': 'Country', name: 'JP' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'JPY',
          price: '30000',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '30000',
            priceCurrency: 'JPY',
            description: 'DFAアポスティーユ・国際郵送込み（税抜）',
          },
        },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'アポスティーユだけ依頼できますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'はい。すでにPSA書類をお持ちの場合、DFAアポスティーユのみの代行が可能です。書類をフィリピンに送付していただく形で対応します。',
              },
            },
            {
              '@type': 'Question',
              name: '電子アポスティーユ（e-Apostille）と紙のアポスティーユ、どちらが必要ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '日本の入管・役所・大使館では紙のアポスティーユ原本が求められるケースがほとんどです。提出先を確認した上でご案内します。',
              },
            },
            {
              '@type': 'Question',
              name: '処理期間はどのくらいですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'DFAアポスティーユは通常1〜2週間です。書類取得から一括で依頼した場合、全体で約1ヶ月〜が目安です。',
              },
            },
            {
              '@type': 'Question',
              name: '急ぎの場合は対応できますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '可能です。提出期限をお知らせいただければ、優先処理の可否を確認してご案内します。',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="DFAアポスティーユ、フィリピンに行かずに取得できます"
        badges={['日本語だけでOK', '書類取得から一括代行', 'コミコミ料金']}
        ctaText="無料相談はこちら"
        ctaHref="#contact"
      />

      <SummaryBlock
        conclusion="DFAアポスティーユは、フィリピンに行かずに取得できます。書類取得からアポスティーユまで一括で代行します。"
        points={[
          '日本語でご相談 → 現地スタッフがDFA申請・認証を代行',
          '紙の原本アポスティーユで対応（入管・役所・大使館に提出可能）',
          'PSA・CENOMAR・NBI等の書類取得と同時依頼OK',
          '認証済み書類を日本のご住所へ郵送。約2週間〜',
        ]}
        ctaText="無料で相談する（24時間以内に返信）"
      />

      {/* 訴求ブロック */}
      <section className="mb-12 rounded-2xl bg-amber-50 border border-amber-200 p-6">
        <div className="flex items-start gap-3 mb-4">
          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <h2 className="text-base font-bold text-amber-900">アポスティーユは「フィリピン現地でしか取れない」認証です</h2>
        </div>
        <ul className="space-y-2 text-sm text-amber-800 leading-relaxed">
          <li className="flex items-start gap-2"><span className="text-amber-500 font-bold flex-shrink-0">✕</span>DFAアポスティーユは<strong>フィリピン外務省（DFA）への直接申請が必要</strong>。日本の大使館では取得不可</li>
          <li className="flex items-start gap-2"><span className="text-amber-500 font-bold flex-shrink-0">✕</span>通常処理は<strong>1〜2週間</strong>。書類の不備があると再申請でさらに遅延</li>
          <li className="flex items-start gap-2"><span className="text-amber-500 font-bold flex-shrink-0">✕</span>電子アポスティーユ（e-Apostille）は<strong>日本の提出先では受け付けないケースが多い</strong></li>
        </ul>
        <p className="mt-4 text-sm font-semibold text-amber-900">→ 書類の取得からDFAアポスティーユまで、一括で代行します。</p>
      </section>

      <FeatureList
        heading="こんな方に選ばれています"
        items={[
          {
            icon: <Users className="w-4 h-4" />,
            title: '国際結婚・配偶者ビザの手続き中の方',
            description: 'CENOMAR・PSA書類にDFAアポスティーユを付けて提出する必要があります。書類取得とアポスティーユを一括で手配します。',
          },
          {
            icon: <BadgeCheck className="w-4 h-4" />,
            title: '手元の書類にアポスティーユだけ追加したい方',
            description: 'すでにPSA書類を持っている場合でも、DFAアポスティーユのみの代行が可能です。書類をフィリピンに送付していただく形で対応します。',
          },
          {
            icon: <Clock className="w-4 h-4" />,
            title: '提出期限が迫っている方',
            description: 'ビザ申請・婚姻届の期限が近い場合でも、まず現状をお知らせください。優先処理の可否を確認してご案内します。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: '電子か紙か、どちらが必要かわからない方',
            description: '提出先によって要件が異なります。入管・役所・大使館、それぞれの要件を確認した上で適切な形式で手配します。',
          },
        ]}
      />

      <CtaBox
        title="書類取得からアポスティーユまで一括対応"
        description="PSA・CENOMAR・NBI等の書類取得とDFAアポスティーユをまとめて依頼できます。バラバラに頼むより確実で、費用も明確です。"
        buttonText="無料で相談する"
        href="#contact"
        variant="primary"
        trustNote="着手前キャンセル無料・進捗を随時ご報告・書類写し確認後に残金お支払い"
      />

      <FeatureList
        heading="料金に含まれるもの（コミコミ）"
        items={[
          {
            icon: <BadgeCheck className="w-4 h-4" />,
            title: 'DFAアポスティーユ認証',
            description: 'フィリピン外務省（DFA）への申請・受け取りを代行。紙の原本アポスティーユで対応します。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: '書類取得との一括対応（オプション）',
            description: 'PSA・CENOMAR・NBI等の書類取得と同時に依頼可能。書類が揃ってからアポスティーユを申請するため、スムーズです。',
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
        description="DFAアポスティーユ・国際郵送をまとめたコミコミ料金でご案内します。見積もり後の追加請求はありません。"
        buttonText="料金を確認する"
        href="#contact"
        variant="secondary"
        trustNote="日本語のみでOK・匿名相談可・返信24時間以内"
      />

      <StepList
        heading="ご依頼の流れ"
        steps={[
          { title: 'フォームで相談（無料）', description: '対象書類と提出先をお知らせください。電子か紙か、要件を確認してご案内します。' },
          { title: '必要書類・料金の確認', description: 'コミコミ料金をご提示します。書類取得との一括依頼も可能です。' },
          { title: 'DFA申請・認証', description: '現地スタッフがDFAに申請し、アポスティーユ認証を取得します。通常1〜2週間。' },
          { title: '日本へ郵送・完了', description: '認証済み書類を追跡付きでお届けします。' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'アポスティーユだけ依頼できますか？', a: 'はい。すでにPSA書類をお持ちの場合、DFAアポスティーユのみの代行が可能です。書類をフィリピンに送付していただく形で対応します。' },
          { q: '電子アポスティーユ（e-Apostille）と紙のアポスティーユ、どちらが必要ですか？', a: '日本の入管・役所・大使館では紙のアポスティーユ原本が求められるケースがほとんどです。提出先を確認した上でご案内します。' },
          { q: '処理期間はどのくらいですか？', a: 'DFAアポスティーユは通常1〜2週間です。書類取得から一括で依頼した場合、全体で約1ヶ月〜が目安です。' },
          { q: '急ぎの場合は対応できますか？', a: '可能です。提出期限をお知らせいただければ、優先処理の可否を確認してご案内します。' },
        ]}
        ctaTitle="まずは状況をお聞かせください"
        ctaButton="無料相談フォームへ"
      />
    </PageLayout>
  );
}
