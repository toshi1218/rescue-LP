import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { FileCheck, Globe, Users, Heart } from 'lucide-react';

export default function UsVisaDocsJa() {
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: '米国ビザ フィリピン書類代行' }]}
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: '米国ビザ フィリピン書類取得代行',
        url: 'https://ph-document.com/ja/us-visa-documents',
        provider: { '@type': 'Organization', name: 'IGRS Inc.' },
      }}
    >
      <HeroBanner
        title="米国ビザ申請のフィリピン書類、まとめて手配します"
        badges={['日本語だけでOK', 'アポスティーユ込み', 'コミコミ料金']}
        ctaText="無料相談はこちら"
        ctaHref="#contact"
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
            title: 'DFAアポスティーユ認証',
            description: '提出先の要件に応じてDFAアポスティーユ認証を手配します。',
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
        description="必要書類・DFAアポスティーユ・国際郵送をまとめたコミコミ料金でご案内します。"
        buttonText="料金を確認する"
        href="#contact"
        variant="secondary"
      />

      <StepList
        heading="ご依頼の流れ"
        steps={[
          { title: 'フォームで相談', description: 'ビザの種類・申請状況・提出期限をお知らせください。' },
          { title: '必要書類・料金の確認', description: '必要書類をリストアップし、コミコミ料金をご提示します。' },
          { title: 'フィリピン現地で手配', description: 'PSA取得・DFAアポスティーユを現地スタッフが進めます。' },
          { title: '日本へ郵送', description: '書類が揃い次第、追跡付きでお届けします。目安は約1ヶ月〜。' },
        ]}
      />

      <FaqSection
        items={[
          { q: '米国ビザに必要な書類は何ですか？', a: 'ビザの種類によって異なります。K-1はCENOMAR・出生証明書・NBI Clearance、CR-1は婚姻証明書・出生証明書などが必要です。無料相談で確認します。' },
          { q: '料金はいくらですか？', a: '必要書類・DFAアポスティーユ・国際郵送をまとめたコミコミ料金です。無料相談後に正確な金額をご提示します。' },
          { q: 'いつ届きますか？', a: '目安は約1ヶ月〜です。PSA発行に2〜3週間、DFAアポスティーユに1〜2週間、郵送に3〜5営業日かかります。' },
          { q: '急ぎの場合は対応できますか？', a: '可能です。提出期限をお知らせいただければ、優先対応の可否を確認してご案内します。' },
        ]}
        ctaTitle="まずは状況をお聞かせください"
        ctaButton="無料相談フォームへ"
      />
    </PageLayout>
  );
}
