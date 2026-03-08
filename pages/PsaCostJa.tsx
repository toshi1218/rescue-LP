import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { FileCheck, Globe, AlertTriangle } from 'lucide-react';
import SummaryBlock from '../components/SummaryBlock';

export default function PsaCostJa() {
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'PSA出生証明書の費用と代行' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'PSA出生証明書取得代行（費用・料金）',
          description: 'PSA出生証明書の代行費用を料金で公開。PSA取得・DFAアポスティーユ・国際郵送をまとめた総額。後から追加請求なし。無料見積もり受付中。',
          url: 'https://ph-document.com/ja/psa-shussei-cost',
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
              description: 'PSA取得・DFAアポスティーユ込み（税抜）。DHL国際郵送費は実費別途',
            },
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'PSA出生証明書の取得代行料金はいくらですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'PSA取得・DFAアポスティーユをまとめた料金です。（DHL国際郵送費は実費別途となります）無料相談後に正確な金額をご提示します。',
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
              name: '日本の提出先ではアポスティーユが原則必須です',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '日本の入管・役所・大使館への提出では、原則として紙の原本＋DFAアポスティーユが必要です。まずはご相談ください。',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="「安く取れる」と思ったら、後から高くなった——そうなる前にご相談ください"
        badges={['追加費用なし', '日本語だけでOK']}
        ctaText="無料相談はこちら"
        ctaHref="#contact"
      />

      <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto text-center px-4">
        PSA証明書の公式手数料は1通365ペソです。ただし海外で使用するにはDFAアポスティーユ認証と国際郵送が必要になります。以下が費用内訳です。
      </p>

      <SummaryBlock
        conclusion="PSA出生証明書の費用は、料金で最初から明示します。後から追加請求はありません。"
        points={[
          'PSA取得・DFAアポスティーユ・国際郵送をまとめた料金',
          '他社の「1通○○円〜」はアポスティーユ・郵送が別途加算されることが多い',
          '提出先に合った形式で最初から手配。「取ったけど使えなかった」を防ぐ',
          '見積もり後の追加請求なし。総額で比較してください',
        ]}
        ctaText="無料で相談する（24時間以内に返信）"
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
            description: '当社はPSA取得・DFAアポスティーユをまとめた料金でご案内します。（DHL国際郵送費は実費別途となります）見積もり後の追加請求はありません。',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: '取り直しのリスクを避けたい',
            description: '提出先に合った形式で最初から手配します。「取ったけど使えなかった」という無駄を防ぎます。',
          },
        ]}
      />

      <CtaBox
        title="「PSA取得費用」だけで比較しないでください"
        description="PSA書類の取得費用だけを安く見せているサービスがあります。アポスティーユ・国際郵送まで含めた総額で比較することが重要です。まず無料相談でご確認ください。"
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
            title: 'PSA出生証明書取得',
            description: 'フィリピン統計局（PSA）への申請・取得を代行します。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'DFAアポスティーユ認証（※日本の手続きではほぼ必須です）',
            description: '提出先の要件に応じてDFAアポスティーユ認証も手配します。',
          },
        ]}
      />

      <CtaBox
        title="「取ったけど使えなかった」が一番の無駄です"
        description="提出先に合った形式・認証なしで取得してしまうと、再取得が必要になります。最初に用途を確認してから手配することで、無駄な費用をゼロにします。"
        buttonText="今すぐ相談する"
        href="#contact"
        variant="secondary"
        trustNote="日本語のみでOK・匿名相談可・返信24時間以内"
      />

      <StepList
        heading="ご依頼の流れ"
        steps={[
          { title: '用途と提出先を共有', description: '国際結婚・配偶者ビザ・帰化申請など、PSA書類の用途と提出先をお知らせください。必要な書類の種類と形式を確認します。' },
          { title: '料金をご提示', description: 'PSA取得・DFAアポスティーユ・国際郵送を含めた総額をご案内します。見積もり後の追加請求はありません。' },
          { title: 'PSA取得・DFAアポスティーユを代行', description: '現地スタッフがPSA申請・DFAアポスティーユを進めます。提出先に合った形式で取得します。' },
          { title: '日本へ郵送・完了', description: '追跡付きでお届けします。全体の目安は約1ヶ月〜。' },
        ]}
      />

      <FaqSection
        items={[
          { q: '料金はいくらですか？', a: 'PSA取得・DFAアポスティーユをまとめた料金です。（DHL国際郵送費は実費別途となります）無料相談後に正確な金額をご提示します。' },
          { q: '他社より高くなりませんか？', a: '他社の「1通○○円〜」は書類取得費用のみの場合があります。当社はアポスティーユ・郵送まで含めた料金なので、最終的な総額で比較してください。' },
          { q: 'アポスティーユは必須ですか？', a: '日本の役所・入管への提出では、紙の原本にDFAアポスティーユがほぼ必須です。無料相談でご状況を確認してからご案内します。' },
          { q: '提出期限に合わせて確実に手配できますか？', a: 'はい。提出予定日をお知らせいただければ、逆算してスケジュールをご案内します。書類が確実に揃うよう、進捗を随時ご報告しながら進めます。' },
        ]}
        ctaTitle="まずは状況をお聞かせください"
        ctaButton="無料相談フォームへ"
      />
    </PageLayout>
  );
}
