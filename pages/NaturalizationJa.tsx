import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { FileCheck, Globe, Users, Heart } from 'lucide-react';
import SummaryBlock from '../components/SummaryBlock';

export default function NaturalizationJa() {
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: '帰化申請 フィリピン書類代行' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: '帰化申請 フィリピン書類取得代行',
        description: '帰化申請に必要なPSA出生証明書・NBI Clearance・DFAアポスティーユを一括代行。法務局の要件に合わせた形式で手配。司法書士・行政書士からの依頼も対応。',
        url: 'https://ph-document.com/ja/kika-shinsei-guide',
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
            description: 'PSA取得・DFAアポスティーユ・国際郵送込み（税抜、書類1通あたり）',
          },
        },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: '帰化申請に必要な書類は何ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '一般的にPSA出生証明書・婚姻証明書（DFAアポスティーユ付き）が必要です。状況によって追加書類が必要な場合もあります。無料相談で確認します。',
              },
            },
            {
              '@type': 'Question',
              name: '料金はいくらですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '必要書類・DFAアポスティーユをまとめた料金です。（DHL国際郵送費は実費別途となります）無料相談後に正確な金額をご提示します。',
              },
            },
            {
              '@type': 'Question',
              name: 'いつ届きますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'おおむね1ヶ月半が目安です。PSA書類の取得に2〜3週間、DFAアポスティーユ取得に約2週間、郵送に約1週間かかります。',
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
          ],
        },
      ]}
    >
      <HeroBanner
        title="帰化申請のフィリピン書類、まとめて手配します"
        badges={['日本語だけでOK', 'アポスティーユ込み', '料金']}
        ctaText="無料相談はこちら"
        ctaHref="#contact"
      />

      <SummaryBlock
        conclusion="帰化申請に必要なフィリピン書類を、日本語だけで一括取り寄せできます。"
        points={[
          'PSA出生証明書・婚姻証明書・CENOMARをまとめて代行',
          'DFAアポスティーユ付きで法務局の要件に対応',
          '司法書士・行政書士の先生からのご依頼も対応',
          '必要書類が不明な場合も、無料相談で整理します',
        ]}
        ctaText="無料で相談する（24時間以内に返信）"
      />

      <FeatureList
        heading="こんな方へ"
        items={[
          {
            icon: <Heart className="w-4 h-4" />,
            title: '日本への帰化申請を進めている',
            description: '法務局への帰化申請に必要なPSA書類（出生証明書・婚姻証明書・CENOMAR）をまとめて手配します。',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: '司法書士・行政書士の先生からの依頼',
            description: '専門家の先生からのご依頼も対応しています。必要書類の確認から手配まで一括でサポートします。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: '何が必要かわからない',
            description: '帰化申請の必要書類は状況によって異なります。まず相談いただければ、必要なものをリストアップしてご案内します。',
          },
        ]}
      />

      <CtaBox
        title="まず「何が必要か」を確認しましょう"
        description="帰化申請の必要書類は状況によって異なります。無料相談で整理してから進めます。"
        buttonText="無料で相談する"
        href="#contact"
        variant="primary"
        trustNote="着手金50%・書類取得・DHL配送準備完了後に残金50%お支払い・着手前キャンセル無料"
      />

      <FeatureList
        heading="料金に含まれるもの"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'PSA書類取得（出生証明書・婚姻証明書・CENOMARなど）',
            description: '必要なPSA書類をまとめて取得します。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'DFAアポスティーユ認証（※日本の手続きではほぼ必須です）',
            description: '提出先の要件に応じてDFAアポスティーユ認証を手配します。',
          },
        ]}
      />

      <CtaBox
        title="追加費用の後出しはありません"
        description="必要書類・DFAアポスティーユをまとめた料金でご案内します。（DHL国際郵送費は実費別途となります）"
        buttonText="料金を確認する"
        href="#contact"
        variant="secondary"
        trustNote="日本語のみでOK・匿名相談可・返信24時間以内"
      />

      <StepList
        heading="ご依頼の流れ"
        steps={[
          { title: 'フォームで相談', description: '帰化申請の状況・必要書類・提出期限をお知らせください。' },
          { title: '必要書類・料金の確認', description: '必要書類をリストアップし、料金をご提示します。' },
          { title: 'フィリピン現地で手配', description: 'PSA取得・DFAアポスティーユを現地スタッフが進めます。' },
          { title: '日本へ郵送', description: '書類が揃い次第、追跡付きでお届けします。目安はおおむね1ヶ月半。' },
        ]}
      />

      <FaqSection
        items={[
          { q: '帰化申請に必要な書類は何ですか？', a: '一般的にPSA出生証明書・婚姻証明書（DFAアポスティーユ付き）が必要です。状況によって追加書類が必要な場合もあります。無料相談で確認します。' },
          { q: '料金はいくらですか？', a: '必要書類・DFAアポスティーユをまとめた料金です。（DHL国際郵送費は実費別途となります）無料相談後に正確な金額をご提示します。' },
          { q: 'いつ届きますか？', a: 'おおむね1ヶ月半が目安です。PSA書類の取得に2〜3週間、DFAアポスティーユ取得に約2週間、郵送に約1週間かかります。' },
          { q: '急ぎの場合は対応できますか？', a: '可能です。提出期限をお知らせいただければ、優先対応の可否を確認してご案内します。' },
        ]}
        ctaTitle="まずは状況をお聞かせください"
        ctaButton="無料相談フォームへ"
      />
    </PageLayout>
  );
}
