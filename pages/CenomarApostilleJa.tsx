import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { Heart, FileCheck, Globe, Clock } from 'lucide-react';
import SummaryBlock from '../components/SummaryBlock';

export default function CenomarApostilleJa() {
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'CENOMARアポスティーユ代行' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'CENOMARのDFAアポスティーユ取得代行',
        description: 'CENOMARのDFAアポスティーユをフィリピンに行かずに代行取得。国際結婚・配偶者ビザ・帰化申請に必要な紙の原本アポスティーユで対応。日本語だけで完結。',
        url: 'https://ph-document.com/ja/cenomar-apostille',
        provider: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/ja/',
        },
        areaServed: { '@type': 'Country', name: 'JP' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'JPY',
          price: '40000',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '40000',
            priceCurrency: 'JPY',
            description: 'CENOMAR取得・DFAアポスティーユ・国際郵送込み（税抜）',
          },
        },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: '料金はいくらですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'PSA取得・DFAアポスティーユ・国際郵送をまとめたコミコミ料金です。無料相談後に正確な金額をご提示します。',
              },
            },
            {
              '@type': 'Question',
              name: 'いつ届きますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '目安は約1ヶ月〜です。PSA発行に2〜3週間、DFAアポスティーユに1〜2週間、郵送に3〜5営業日かかります。',
              },
            },
            {
              '@type': 'Question',
              name: '急ぎの場合は対応できますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '可能です。提出期限をお知らせいただければ、優先対応の可否を確認してご案内します。',
              },
            },
            {
              '@type': 'Question',
              name: '電子アポスティーユ（e-Apostille）でも大丈夫ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '日本の提出先では紙のアポスティーユ原本が求められるケースが多いです。提出先を確認した上で適切な形式で手配します。',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="CENOMARのDFAアポスティーユ、まとめてお任せください"
        badges={['日本語だけでOK', 'アポスティーユ込み', 'コミコミ料金']}
        ctaText="無料相談はこちら"
        ctaHref="#contact"
      />

      <SummaryBlock
        conclusion="CENOMARのDFAアポスティーユを、フィリピンに行かずに取得できます。"
        points={[
          'PSA CENOMAR取得からDFAアポスティーユまで一括代行',
          '日本の提出先が求める「紙の原本アポスティーユ」形式で対応',
          '国際結婚・配偶者ビザ・帰化申請、どの用途にも対応',
          '約1ヶ月〜で日本のご住所へ郵送',
        ]}
        ctaText="無料で相談する（24時間以内に返信）"
      />

      <FeatureList
        heading="こんな方へ"
        items={[
          {
            icon: <Heart className="w-4 h-4" />,
            title: '国際結婚の手続きを進めている',
            description: '日本の市区町村役場やフィリピン大使館への提出に、DFAアポスティーユ付きCENOMARが必要です。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: '配偶者ビザ・在留資格の申請中',
            description: '入国管理局が求める形式（紙のアポスティーユ原本）で手配します。',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'アポスティーユが必要かどうかわからない',
            description: '提出先ごとに要件が異なります。まず相談いただければ、必要かどうかを確認してご案内します。',
          },
        ]}
      />

      <CtaBox
        title="まず「何が必要か」を確認しましょう"
        description="アポスティーユが必要かどうか、電子版で足りるかどうか、提出先によって異なります。無料相談で整理します。"
        buttonText="無料で相談する"
        href="#contact"
        variant="primary"
        trustNote="逹謇句燕繧ｭ繝｣繝ｳ繧ｻ繝ｫ辟｡譁吶・騾ｲ謐励ｒ髫乗凾縺泌ｱ蜻翫・譖ｸ鬘槫・縺礼｢ｺ隱榊ｾ後↓谿矩≡縺頑髪謇輔＞"
      />

      <FeatureList
        heading="料金に含まれるもの"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'PSA CENOMAR取得',
            description: 'フィリピン統計局（PSA）へのCENOMAR申請・取得を代行します。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'DFAアポスティーユ認証',
            description: 'フィリピン外務省（DFA）によるアポスティーユ認証を手配します。紙の原本で対応。',
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
        description="PSA取得・DFAアポスティーユ・国際郵送をまとめたコミコミ料金でご案内します。見積もり後の追加請求はありません。"
        buttonText="料金を確認する"
        href="#contact"
        variant="secondary"
        trustNote="日本語のみでOK・匿名相談可・返信24時間以内"
      />

      <StepList
        heading="ご依頼の流れ"
        steps={[
          { title: 'フォームで相談', description: '用途（国際結婚・ビザ申請など）と提出先をお知らせください。' },
          { title: '必要書類・料金の確認', description: 'アポスティーユが必要かどうかを含め、コミコミ料金をご提示します。' },
          { title: 'フィリピン現地で手配', description: 'PSA取得→DFAアポスティーユ認証を現地スタッフが進めます。' },
          { title: '日本へ郵送', description: '書類が揃い次第、追跡付きでお届けします。目安は約1ヶ月〜。' },
        ]}
      />

      <FaqSection
        items={[
          { q: '料金はいくらですか？', a: 'PSA取得・DFAアポスティーユ・国際郵送をまとめたコミコミ料金です。無料相談後に正確な金額をご提示します。' },
          { q: 'いつ届きますか？', a: '目安は約1ヶ月〜です。PSA発行に2〜3週間、DFAアポスティーユに1〜2週間、郵送に3〜5営業日かかります。' },
          { q: '急ぎの場合は対応できますか？', a: '可能です。提出期限をお知らせいただければ、優先対応の可否を確認してご案内します。' },
          { q: '電子アポスティーユ（e-Apostille）でも大丈夫ですか？', a: '日本の提出先では紙のアポスティーユ原本が求められるケースが多いです。提出先を確認した上で適切な形式で手配します。' },
        ]}
        ctaTitle="まずは状況をお聞かせください"
        ctaButton="無料相談フォームへ"
      />
    </PageLayout>
  );
}
