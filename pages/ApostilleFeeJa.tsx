import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { FileCheck, Globe, AlertTriangle } from 'lucide-react';
import SummaryBlock from '../components/SummaryBlock';

export default function ApostilleFeeJa() {
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'DFAアポスティーユの料金と代行費用' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'DFAアポスティーユ取得代行（料金・費用）',
          description: 'DFAアポスティーユの代行費用を料金で公開。PSA・CENOMAR・NBI別の費用目安も確認可能。後から追加請求なし。無料見積もり受付中。',
          url: 'https://ph-document.com/ja/apostille-ryokin',
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
              name: 'DFAアポスティーユの料金はいくらですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'DFAアポスティーユ・PSA取得（必要な場合）・国際郵送をまとめた料金です。無料相談後に正確な金額をご提示します。',
              },
            },
            {
              '@type': 'Question',
              name: '他社より高くなりませんか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '他社の「1通○○円〜」は書類取得費用のみの場合があります。当社はアポスティーユ・郵送まで含めた料金なので、最終的な総額で比較してください。',
              },
            },
            {
              '@type': 'Question',
              name: 'アポスティーユが必要かどうかわかりません',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '提出先によって異なります。無料相談で確認してからご案内します。',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="DFAアポスティーユの費用、総額でご案内します"
        badges={['追加費用なし', '日本語だけでOK']}
        ctaText="無料相談はこちら"
        ctaHref="#contact"
      />

      <SummaryBlock
        conclusion="DFAアポスティーユの費用は、料金で最初から明示します。後から追加請求はありません。"
        points={[
          'DFAアポスティーユ・PSA取得・国際郵送をまとめた料金',
          '他社の「1通○○円〜」は書類取得費用のみの場合が多い',
          '日本の手続きでは紙の原本にDFAアポスティーユがほぼ必須',
          '見積もり後の追加請求なし。総額で比較してください',
        ]}
        ctaText="無料で相談する（24時間以内に返信）"
      />

      <FeatureList
        heading="こんな方へ"
        items={[
          {
            icon: <AlertTriangle className="w-4 h-4" />,
            title: '他社の料金が安く見えるが、本当に安いのか不安',
            description: 'PSA書類1通の費用だけを安く見せているケースがあります。実際にはアポスティーユ・国際郵送・追加書類が別途加算されることがあります。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: '総額でいくらかかるか知りたい',
            description: '当社はDFAアポスティーユ・PSA取得・国際郵送をまとめた料金でご案内します。見積もり後の追加請求はありません。',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'アポスティーユが本当に必要かどうかわからない',
            description: '提出先によって要件が異なります。不要な認証に費用をかけないよう、まず確認してからご案内します。',
          },
        ]}
      />

      <CtaBox
        title="必要書類と料金をまとめてご案内します"
        description="日本での手続きでは、紙の原本にDFAアポスティーユがほぼ必須です。まず用途をお知らせいただければ、必要な書類と総額をご案内します。"
        buttonText="無料で相談する"
        href="#contact"
        variant="primary"
        trustNote="着手金50%・書類写し確認後に残金50%お支払い・着手前キャンセル無料"
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
            description: 'PSA書類の取得からまとめて依頼いただけます。',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: '国際郵送（日本へ）',
            description: '追跡番号付きの国際郵便で日本のご住所へお届けします。',
          },
        ]}
      />

      <CtaBox
        title="DFAアポスティーユは「取ってから気づく」では遅い"
        description="書類の種類・提出先・枚数によって費用が変わります。最初に確認することで、不要な認証に費用をかけずに済みます。"
        buttonText="今すぐ相談する"
        href="#contact"
        variant="secondary"
        trustNote="日本語のみでOK・匿名相談可・返信24時間以内"
      />

      <StepList
        heading="ご依頼の流れ"
        steps={[
          { title: '書類の種類と提出先を共有', description: 'CENOMAR・PSA・NBI等の種類と、提出先（市役所・大使館・入管など）をお知らせください。アポスティーユが必要かどうかも確認します。' },
          { title: '必要な認証と総額をご提示', description: 'DFAアポスティーユ・PSA取得（必要な場合）・国際郵送を含めた料金をご案内します。' },
          { title: 'DFAアポスティーユを代行', description: '現地スタッフがDFA申請を進めます。Regular（4営業日）またはExpress（翌営業日）を状況に応じて選択します。' },
          { title: '日本へ郵送・完了', description: '追跡付きでお届けします。全体の目安は約1ヶ月〜。' },
        ]}
      />

      <FaqSection
        items={[
          { q: '料金はいくらですか？', a: 'DFAアポスティーユ・PSA取得（必要な場合）・国際郵送をまとめた料金です。無料相談後に正確な金額をご提示します。' },
          { q: '他社より高くなりませんか？', a: '他社の「1通○○円〜」は書類取得費用のみの場合があります。当社はアポスティーユ・郵送まで含めた料金なので、最終的な総額で比較してください。' },
          { q: 'アポスティーユが必要かどうかわかりません', a: '提出先によって異なります。無料相談で確認してからご案内します。' },
          { q: '提出期限に合わせて確実に手配できますか？', a: 'はい。提出予定日をお知らせいただければ、逆算してスケジュールをご案内します。書類が確実に揃うよう、進捗を随時ご報告しながら進めます。' },
        ]}
        ctaTitle="まずは状況をお聞かせください"
        ctaButton="無料相談フォームへ"
      />
    </PageLayout>
  );
}
