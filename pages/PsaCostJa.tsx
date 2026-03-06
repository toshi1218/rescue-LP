import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { FileCheck, Globe, AlertTriangle } from 'lucide-react';

export default function PsaCostJa() {
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'PSA出生証明書の費用と代行' }]}
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'PSA出生証明書取得代行（費用）',
        url: 'https://ph-document.com/ja/psa-shussei-cost',
        provider: { '@type': 'Organization', name: 'IGRS Inc.' },
      }}
    >
      <HeroBanner
        title="「安く取れる」と思ったら、後から高くなった——そうなる前にご相談ください"
        badges={['コミコミ料金', '追加費用なし', '日本語だけでOK']}
        ctaText="無料相談はこちら"
        ctaHref="#contact"
      />

      <FeatureList
        heading="こんな方へ"
        items={[
          {
            icon: <AlertTriangle className="w-4 h-4" />,
            title: '他社の「1通○○円〜」が気になっている',
            description: 'PSA書類1通の費用だけを安く見せているケースがあります。実際にはアポスティーユ・国際郵送・追加書類が別途加算され、最終的に高くなることがあります。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: '総額でいくらかかるか知りたい',
            description: '当社はPSA取得・DFAアポスティーユ・国際郵送をまとめたコミコミ料金でご案内します。見積もり後の追加請求はありません。',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: '取り直しのリスクを避けたい',
            description: '提出先に合った形式で最初から手配します。「取ったけど使えなかった」という無駄を防ぎます。',
          },
        ]}
      />

      <CtaBox
        title="まず総額を確認しましょう"
        description="PSA取得だけでなく、アポスティーユ・郵送まで含めたコミコミ料金を無料相談後にご提示します。"
        buttonText="無料で相談する"
        href="#contact"
        variant="primary"
      />

      <FeatureList
        heading="料金に含まれるもの"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'PSA出生証明書取得',
            description: 'フィリピン統計局（PSA）への申請・取得を代行します。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'DFAアポスティーユ（必要な場合）',
            description: '提出先の要件に応じてDFAアポスティーユ認証も手配します。',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: '国際郵送（日本へ）',
            description: '追跡番号付きの国際郵便で日本のご住所へお届けします。',
          },
        ]}
      />

      <CtaBox
        title="後から「こんなはずじゃなかった」を防ぐために"
        description="最初に総額を確認することが、一番のコスト削減です。まずはご相談ください。"
        buttonText="今すぐ相談する"
        href="#contact"
        variant="secondary"
      />

      <StepList
        heading="ご依頼の流れ"
        steps={[
          { title: 'フォームで相談', description: '用途と提出先をお知らせください。' },
          { title: 'コミコミ料金をご提示', description: 'PSA・アポスティーユ・郵送を含めた総額をご案内します。' },
          { title: 'フィリピン現地で手配', description: '現地スタッフがPSA取得・DFAアポスティーユを進めます。' },
          { title: '日本へ郵送', description: '追跡付きでお届けします。目安は約1ヶ月〜。' },
        ]}
      />

      <FaqSection
        items={[
          { q: '料金はいくらですか？', a: 'PSA取得・DFAアポスティーユ（必要な場合）・国際郵送をまとめたコミコミ料金です。無料相談後に正確な金額をご提示します。' },
          { q: '他社より高くなりませんか？', a: '他社の「1通○○円〜」は書類取得費用のみの場合があります。当社はアポスティーユ・郵送まで含めたコミコミ料金なので、最終的な総額で比較してください。' },
          { q: 'アポスティーユが必要かどうかわかりません', a: '提出先によって異なります。無料相談で確認してからご案内します。不要な認証に費用をかけないようにします。' },
          { q: '急ぎの場合は対応できますか？', a: '可能です。提出期限をお知らせいただければ、優先対応の可否を確認してご案内します。' },
        ]}
        ctaTitle="まずは状況をお聞かせください"
        ctaButton="無料相談フォームへ"
      />
    </PageLayout>
  );
}
