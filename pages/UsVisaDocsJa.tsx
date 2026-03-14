import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { FileCheck, Globe, Users, Heart } from 'lucide-react';
import SummaryBlock from '../components/SummaryBlock';

export default function UsVisaDocsJa() {
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: '米国ビザ フィリピン書類代行' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: '米国ビザ（K-1・CR-1・IR-1）フィリピン書類取得代行',
        description: 'K-1・CR-1・IR-1ビザに必要なCENOMAR・PSA出生証明書・婚姻証明書・NBI ClearanceをDFAアポスティーユ付きで一括代行。USCIS・NVC提出に対応。',
        url: 'https://ph-document.com/ja/us-visa-documents',
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
              name: '米国ビザに必要な書類は何ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'ビザの種類によって異なります。K-1はCENOMAR・出生証明書・NBI Clearance、CR-1は婚姻証明書・出生証明書などが必要です。無料相談で確認します。',
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
        title="米国ビザ 書類取得代行"
        badges={['日本語だけでOK', 'アポスティーユ込み', '料金']}
        ctaText="無料相談はこちら"
        ctaHref="#contact"
      />

      <SummaryBlock
        conclusion="米国ビザ（K-1・CR-1・IR-1）に必要なフィリピン書類を、日本語だけで一括取り寄せできます。"
        points={[
          'CENOMAR・PSA出生証明書・婚姻証明書・NBI Clearanceをまとめて代行',
          'USCIS・NVC提出に必要なDFAアポスティーユ付きで対応',
          '英語の書類も当社が確認・手配。日本語だけで完結',
          '必要書類が不明な場合も、無料相談で整理します',
        ]}
        ctaText="無料で相談する（24時間以内に返信）"
      />

      <FeatureList
        heading="こんな方へ"
        items={[
          {
            icon: <Heart className="w-4 h-4" />,
            title: 'K-1・CR-1・IR-1ビザの申請中',
            description: 'USCIS・NVCへの提出に必要なPSA書類（出生証明書・婚姻証明書・CENOMAR・NBI Clearance）をまとめて手配します。',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: 'アメリカ人配偶者が申請を進めている',
            description: '日本語だけで全て対応します。英語の書類も当社が確認・手配します。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: '何が必要かわからない',
            description: 'ビザの種類・申請状況によって必要書類が異なります。まず相談いただければ、必要なものをリストアップしてご案内します。',
          },
        ]}
      />

      <CtaBox
        title="まず「何が必要か」を確認しましょう"
        description="米国ビザの必要書類はビザの種類・申請状況によって異なります。無料相談で整理してから進めます。"
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
            title: 'PSA書類取得（出生証明書・婚姻証明書・CENOMAR・NBI Clearanceなど）',
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
          { title: 'フォームで相談', description: 'ビザの種類・申請状況・提出期限をお知らせください。' },
          { title: '必要書類・料金の確認', description: '必要書類をリストアップし、料金をご提示します。' },
          { title: 'フィリピン現地で手配', description: 'PSA取得・DFAアポスティーユを現地スタッフが進めます。' },
          { title: '日本へ郵送', description: '書類が揃い次第、追跡付きでお届けします。目安はおおむね1ヶ月半。' },
        ]}
      />

      <FaqSection
        items={[
          { q: '米国ビザに必要な書類は何ですか？', a: 'ビザの種類によって異なります。K-1はCENOMAR・出生証明書・NBI Clearance、CR-1は婚姻証明書・出生証明書などが必要です。無料相談で確認します。' },
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
