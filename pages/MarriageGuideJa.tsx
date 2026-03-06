import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { Heart, AlertTriangle, Clock, FileCheck, Globe, Users } from 'lucide-react';
import SummaryBlock from '../components/SummaryBlock';

export default function MarriageGuideJa() {
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: '国際結婚 書類代行' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'フィリピン人との国際結婚 必要書類取得代行',
        description: 'フィリピン人との国際結婚に必要なCENOMAR・PSA出生証明書・DFAアポスティーユを一括代行。日本先行婚・フィリピン先行婚どちらにも対応。日本語だけで完結。',
        url: 'https://ph-document.com/ja/kokusai-kekkon-guide',
        provider: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/ja/',
        },
        areaServed: { '@type': 'Country', name: 'JP' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'JPY',
          price: '85000',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '85000',
            priceCurrency: 'JPY',
            description: '国際結婚パック（CENOMAR・PSA・DFAアポスティーユ・国際郵送込み、税抜）',
          },
        },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: '日本先行婚とフィリピン先行婚、どちらがいいですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'どちらが適切かはご状況によります。それぞれのメリット・デメリットを含めてご案内しますので、まずご相談ください。',
              },
            },
            {
              '@type': 'Question',
              name: 'CENOMARとPSA出生証明書、両方必要ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '日本の市区町村役場への提出では、通常CENOMARとPSA出生証明書の両方が必要です。提出先によって異なる場合があるため、確認してからご案内します。',
              },
            },
            {
              '@type': 'Question',
              name: '書類の有効期限はありますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'PSA書類・CENOMARは発行から6ヶ月〜1年が有効期限の目安です。提出タイミングに合わせた取得時期をご案内します。',
              },
            },
            {
              '@type': 'Question',
              name: '配偶者ビザ申請の書類も一緒に頼めますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'はい。婚姻書類と配偶者ビザ申請書類を一括で手配できます。二度手間を防ぐためにも、まとめてご相談ください。',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="フィリピン人との国際結婚、必要書類を一括で手配します"
        badges={['日本語だけでOK', '書類一式まとめて代行', 'アポスティーユ込み']}
        ctaText="無料相談はこちら"
        ctaHref="#contact"
      />

      <SummaryBlock
        conclusion="フィリピン人との国際結婚に必要な書類を、日本語だけで一括取り寄せできます。"
        points={[
          'CENOMAR・PSA出生証明書・DFAアポスティーユをまとめて代行',
          '日本先行婚・フィリピン先行婚、どちらの方式にも対応',
          '婚姻届から配偶者ビザ申請まで、必要書類を一式ご案内',
          '書類の有効期限に合わせた取得タイミングもアドバイス',
        ]}
        ctaText="無料で相談する（24時間以内に返信）"
      />

      {/* 訴求ブロック */}
      <section className="mb-12 rounded-2xl bg-amber-50 border border-amber-200 p-6">
        <div className="flex items-start gap-3 mb-4">
          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <h2 className="text-base font-bold text-amber-900">国際結婚の書類準備、こんな落とし穴があります</h2>
        </div>
        <ul className="space-y-2 text-sm text-amber-800 leading-relaxed">
          <li className="flex items-start gap-2"><span className="text-amber-500 font-bold flex-shrink-0">✕</span>CENOMAR・PSA書類は<strong>DFAアポスティーユが必要</strong>。フィリピン現地での手続きが必須</li>
          <li className="flex items-start gap-2"><span className="text-amber-500 font-bold flex-shrink-0">✕</span>「日本先行婚」か「フィリピン先行婚」かで<strong>必要書類が変わる</strong>。間違えると再取得に</li>
          <li className="flex items-start gap-2"><span className="text-amber-500 font-bold flex-shrink-0">✕</span>書類の有効期限は<strong>発行から6ヶ月〜1年</strong>。取得タイミングを間違えると使えなくなる</li>
        </ul>
        <p className="mt-4 text-sm font-semibold text-amber-900">→ 婚姻の方式（日本先行・フィリピン先行）に合わせて、必要書類を一式整理してご案内します。</p>
      </section>

      <FeatureList
        heading="こんな方に選ばれています"
        items={[
          {
            icon: <Heart className="w-4 h-4" />,
            title: '日本で先に婚姻届を出す方（日本先行婚）',
            description: '日本の市区町村役場への提出には、フィリピン人配偶者のCENOMAR（独身証明書）とPSA出生証明書、DFAアポスティーユが必要です。書類一式を代行します。',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: 'フィリピンで先に婚姻する方（フィリピン先行婚）',
            description: 'フィリピンでの婚姻には、日本人側の婚姻要件具備証明書（LCCM）が必要です。その後の日本での届け出に必要な書類もまとめてご案内します。',
          },
          {
            icon: <Clock className="w-4 h-4" />,
            title: '何から始めればいいかわからない方',
            description: '婚姻の方式・提出先・必要書類の順番——複雑に見えますが、用途をお伝えいただければ必要なものを整理してご案内します。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: '配偶者ビザ申請まで見据えている方',
            description: '婚姻後の配偶者ビザ（在留資格「日本人の配偶者等」）申請に必要な書類も一括で手配できます。二度手間を防ぎます。',
          },
        ]}
      />

      <CtaBox
        title="「何が必要か」から一緒に整理します"
        description="日本先行婚・フィリピン先行婚、どちらの方式でも対応します。まず用途をお知らせください。"
        buttonText="無料で相談する"
        href="#contact"
        variant="primary"
      />

      <FeatureList
        heading="料金に含まれるもの（コミコミ）"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'CENOMAR・PSA書類取得',
            description: 'フィリピン統計局（PSA）へのCENOMAR・出生証明書・婚姻証明書の申請・取得を代行します。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'DFAアポスティーユ認証',
            description: 'フィリピン外務省（DFA）によるアポスティーユ認証を手配。紙の原本で対応します。',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: '国際郵送（日本へ）',
            description: '追跡番号付きの国際郵便で日本のご住所へお届けします。',
          },
        ]}
      />

      <CtaBox
        title="書類一式まとめて依頼できます"
        description="CENOMAR・PSA出生証明書・DFAアポスティーユをまとめたコミコミ料金でご案内します。追加請求はありません。"
        buttonText="料金を確認する"
        href="#contact"
        variant="secondary"
      />

      <StepList
        heading="ご依頼の流れ"
        steps={[
          { title: 'フォームで相談（無料）', description: '婚姻の方式（日本先行・フィリピン先行）と提出先をお知らせください。必要書類を整理してご案内します。' },
          { title: '必要書類・料金の確認', description: '書類一式のコミコミ料金をご提示します。納得いただいてからお支払い。' },
          { title: 'フィリピン現地で手配', description: 'PSA取得・DFAアポスティーユを現地スタッフが進めます。進捗は随時ご報告します。' },
          { title: '日本へ郵送・完了', description: '書類が揃い次第、追跡付きでお届けします。受け取り後に不明点があればフォローします。' },
        ]}
      />

      <FaqSection
        items={[
          { q: '日本先行婚とフィリピン先行婚、どちらがいいですか？', a: 'どちらが適切かはご状況によります。それぞれのメリット・デメリットを含めてご案内しますので、まずご相談ください。' },
          { q: 'CENOMARとPSA出生証明書、両方必要ですか？', a: '日本の市区町村役場への提出では、通常CENOMARとPSA出生証明書の両方が必要です。提出先によって異なる場合があるため、確認してからご案内します。' },
          { q: '書類の有効期限はありますか？', a: 'PSA書類・CENOMARは発行から6ヶ月〜1年が有効期限の目安です。提出タイミングに合わせた取得時期をご案内します。' },
          { q: '配偶者ビザ申請の書類も一緒に頼めますか？', a: 'はい。婚姻書類と配偶者ビザ申請書類を一括で手配できます。二度手間を防ぐためにも、まとめてご相談ください。' },
        ]}
        ctaTitle="まずは状況をお聞かせください"
        ctaButton="無料相談フォームへ"
      />
    </PageLayout>
  );
}
