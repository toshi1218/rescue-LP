import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { Heart, FileCheck, Globe, Users } from 'lucide-react';

export default function MarriageGuideJa() {
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'フィリピン人との国際結婚 書類代行' }]}
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'フィリピン人との国際結婚 書類取得代行',
        url: 'https://ph-document.com/ja/kokusai-kekkon-guide',
        provider: { '@type': 'Organization', name: 'IGRS Inc.' },
      }}
    >
      <HeroBanner
        title="フィリピン人との国際結婚、必要書類をまとめて手配します"
        badges={['日本語だけでOK', 'アポスティーユ込み', 'コミコミ料金']}
        ctaText="無料相談はこちら"
        ctaHref="#contact"
      />

      <FeatureList
        heading="こんな方へ"
        items={[
          {
            icon: <Heart className="w-4 h-4" />,
            title: '日本先行で婚姻届を提出したい',
            description: '日本の市区町村役場への婚姻届に必要なCENOMAR・PSA出生証明書（DFAアポスティーユ付き）をまとめて手配します。',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: 'フィリピン大使館でLCCMを取得したい',
            description: '婚姻要件具備証明書（LCCM）の申請に必要な書類の確認・手配をサポートします。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: '何が必要かわからない',
            description: '婚姻届の提出先・状況によって必要書類が異なります。まず相談いただければ、必要なものをリストアップしてご案内します。',
          },
        ]}
      />

      <CtaBox
        title="まず「何が必要か」を確認しましょう"
        description="国際結婚の必要書類は提出先・状況によって異なります。無料相談で整理してから進めます。"
        buttonText="無料で相談する"
        href="#contact"
        variant="primary"
      />

      <FeatureList
        heading="料金に含まれるもの"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'PSA書類取得（CENOMAR・出生証明書など）',
            description: '必要なPSA書類をまとめて取得します。複数書類の一括手配も可能です。',
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
          { title: 'フォームで相談', description: '婚姻届の提出先（市区町村役場・大使館など）と状況をお知らせください。' },
          { title: '必要書類・料金の確認', description: '必要書類をリストアップし、コミコミ料金をご提示します。' },
          { title: 'フィリピン現地で手配', description: 'PSA取得・DFAアポスティーユを現地スタッフが進めます。' },
          { title: '日本へ郵送', description: '書類が揃い次第、追跡付きでお届けします。目安は約1ヶ月〜。' },
        ]}
      />

      <FaqSection
        items={[
          { q: '国際結婚に必要な書類は何ですか？', a: '一般的にCENOMAR・PSA出生証明書（DFAアポスティーユ付き）が必要です。提出先によって追加書類が必要な場合もあります。無料相談で確認します。' },
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
