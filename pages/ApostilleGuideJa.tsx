import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { FileCheck, Globe, AlertTriangle, Clock } from 'lucide-react';

export default function ApostilleGuideJa() {
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'DFAアポスティーユ取得代行' }]}
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'DFAアポスティーユ取得代行',
        url: 'https://ph-document.com/ja/apostille',
        provider: { '@type': 'Organization', name: 'IGRS Inc.' },
      }}
    >
      <HeroBanner
        title="DFAアポスティーユ、日本語だけで手配します"
        badges={['日本語だけでOK', '紙の原本で対応', 'コミコミ料金']}
        ctaText="無料相談はこちら"
        ctaHref="#contact"
      />

      <FeatureList
        heading="こんな方へ"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'PSA書類にアポスティーユが必要と言われた',
            description: '日本の市区町村役場・入国管理局・フィリピン大使館への提出に、DFAアポスティーユ付きの書類が必要なケースがあります。',
          },
          {
            icon: <AlertTriangle className="w-4 h-4" />,
            title: '電子アポスティーユ（e-Apostille）では受け付けてもらえなかった',
            description: '日本の提出先では紙のアポスティーユ原本が求められるケースが多いです。当社は紙の原本で対応します。',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'PSA書類の取得からまとめて頼みたい',
            description: 'PSA書類の取得からDFAアポスティーユ・国際郵送まで一括で手配できます。',
          },
        ]}
      />

      <CtaBox
        title="まず「アポスティーユが必要かどうか」を確認しましょう"
        description="提出先によって要件が異なります。不要な認証に費用をかけないよう、まず確認してからご案内します。"
        buttonText="無料で相談する"
        href="#contact"
        variant="primary"
      />

      <FeatureList
        heading="料金に含まれるもの"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'DFAアポスティーユ認証',
            description: 'フィリピン外務省（DFA）によるアポスティーユ認証を手配します。紙の原本で対応。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'PSA書類取得（必要な場合）',
            description: 'PSA書類の取得からまとめて依頼いただけます。CENOMAR・出生証明書・婚姻証明書に対応。',
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
        description="DFAアポスティーユ・PSA取得（必要な場合）・国際郵送をまとめたコミコミ料金でご案内します。"
        buttonText="料金を確認する"
        href="#contact"
        variant="secondary"
      />

      <StepList
        heading="ご依頼の流れ"
        steps={[
          { title: 'フォームで相談', description: '用途と提出先をお知らせください。アポスティーユが必要かどうかも確認します。' },
          { title: '必要書類・料金の確認', description: 'コミコミ料金をご提示します。' },
          { title: 'フィリピン現地で手配', description: 'PSA取得・DFAアポスティーユを現地スタッフが進めます。' },
          { title: '日本へ郵送', description: '書類が揃い次第、追跡付きでお届けします。目安は約1ヶ月〜。' },
        ]}
      />

      <FaqSection
        items={[
          { q: '料金はいくらですか？', a: 'DFAアポスティーユ・PSA取得（必要な場合）・国際郵送をまとめたコミコミ料金です。無料相談後に正確な金額をご提示します。' },
          { q: '電子アポスティーユ（e-Apostille）と紙のアポスティーユの違いは？', a: '電子アポスティーユはオンラインで発行されるデジタル認証です。日本の提出先では紙のアポスティーユ原本が求められるケースが多いため、当社は紙の原本で対応します。' },
          { q: 'いつ届きますか？', a: '目安は約1ヶ月〜です。PSA発行に2〜3週間、DFAアポスティーユに1〜2週間、郵送に3〜5営業日かかります。' },
          { q: '急ぎの場合は対応できますか？', a: '可能です。提出期限をお知らせいただければ、優先対応の可否を確認してご案内します。' },
        ]}
        ctaTitle="まずは状況をお聞かせください"
        ctaButton="無料相談フォームへ"
      />
    </PageLayout>
  );
}
