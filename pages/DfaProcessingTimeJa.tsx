import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { Clock, Calendar, FileCheck, Globe } from 'lucide-react';
import SummaryBlock from '../components/SummaryBlock';

export default function DfaProcessingTimeJa() {
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'DFAアポスティーユの処理期間' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'DFAアポスティーユ処理期間・提出期限に合わせた代行取得',
          description: 'DFAアポスティーユはRegular（4営業日）またはExpress（翌営業日）で申請可能。提出予定日から逆算して最適なスケジュールで手配。ビザ申請の期限に間に合わせます。',
          url: 'https://ph-document.com/ja/apostille-shori-kikan',
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
              description: 'DFAアポスティーユ認証・国際郵送込み（税抜）',
            },
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'DFAアポスティーユにはどのくらいかかりますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'DFAアポスティーユはRegular（4営業日）またはExpress（翌営業日）で申請できます。PSA取得・郵送を含めた全体の目安は約1ヶ月〜です。',
              },
            },
            {
              '@type': 'Question',
              name: '提出期限に合わせてExpressで申請できますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '可能です。提出期限をお知らせいただければ、Expressが必要かどうかを含めてご案内します。',
              },
            },
            {
              '@type': 'Question',
              name: '期限に間に合うかどうか不安です',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '提出予定日をお知らせいただければ、間に合うかどうかを確認してご案内します。まずはご相談ください。',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="DFAアポスティーユの処理期間、提出期限に合わせて手配します"
        badges={['日本語だけでOK', '提出期限に合わせて手配', 'コミコミ料金']}
        ctaText="無料相談はこちら"
        ctaHref="#contact"
      />

      <SummaryBlock
        conclusion="DFAアポスティーユの処理期間は通常4〜5営業日。提出期限に合わせて手配します。"
        points={[
          'DFAアポスティーユはRegular（4営業日）またはExpress（翌営業日）で申請可能',
          'PSA取得・アポスティーユ・郵送を含めた全体の目安は約1ヶ月〜',
          '提出予定日から逆算して、最適な申請開始時期をご案内',
          '期限に間に合うかどうかも、無料相談で確認できます',
        ]}
        ctaText="無料で相談する（24時間以内に返信）"
      />

      <FeatureList
        heading="こんな方へ"
        items={[
          {
            icon: <Clock className="w-4 h-4" />,
            title: 'DFAアポスティーユにどのくらいかかるか知りたい',
            description: 'DFAアポスティーユはRegular（4営業日）またはExpress（翌営業日）で申請できます。PSA取得・郵送を含めた全体の目安は約1ヶ月〜です。',
          },
          {
            icon: <Calendar className="w-4 h-4" />,
            title: '提出期限が決まっている',
            description: '提出予定日から逆算して、最適なタイミングで申請を開始します。期限に間に合うかどうかも確認します。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'PSA書類の取得からまとめて頼みたい',
            description: 'PSA書類の取得からDFAアポスティーユ・国際郵送まで一括で手配できます。',
          },
        ]}
      />

      <CtaBox
        title="提出予定日を教えてください"
        description="逆算して最適な申請開始時期をご案内します。期限に間に合うかどうかも確認します。"
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
            title: 'DFAアポスティーユ認証',
            description: 'フィリピン外務省（DFA）によるアポスティーユ認証を手配します。Regular/Expressを状況に応じて選択。',
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
        title="期限に間に合わせるために、早めのご相談を"
        description="手続き全体に約1ヶ月〜かかります。余裕を持って動き始めることが、一番のリスク回避です。"
        buttonText="今すぐ相談する"
        href="#contact"
        variant="secondary"
        trustNote="日本語のみでOK・匿名相談可・返信24時間以内"
      />

      <StepList
        heading="ご依頼の流れ"
        steps={[
          { title: '提出予定日を共有', description: '婚姻届・ビザ申請などの提出予定日をお知らせください。' },
          { title: '申請開始時期を確認', description: '逆算して最適な申請開始時期と料金をご提示します。' },
          { title: 'フィリピン現地で手配', description: 'PSA取得・DFAアポスティーユを現地スタッフが進めます。' },
          { title: '日本へ郵送', description: '書類が揃い次第、追跡付きでお届けします。' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'DFAアポスティーユにはどのくらいかかりますか？', a: 'DFAアポスティーユはRegular（4営業日）またはExpress（翌営業日）で申請できます。PSA取得・郵送を含めた全体の目安は約1ヶ月〜です。' },
          { q: '提出期限に合わせてExpressで申請できますか？', a: 'はい。提出予定日をお知らせいただければ、RegularとExpressどちらが適切かを含めてご案内します。確実に間に合うスケジュールで進めます。' },
          { q: '料金はいくらですか？', a: 'DFAアポスティーユ・PSA取得（必要な場合）・国際郵送をまとめたコミコミ料金です。無料相談後に正確な金額をご提示します。' },
          { q: '期限に間に合うかどうか不安です', a: '提出予定日をお知らせいただければ、間に合うかどうかを確認してご案内します。まずはご相談ください。' },
        ]}
        ctaTitle="まずは状況をお聞かせください"
        ctaButton="無料相談フォームへ"
      />
    </PageLayout>
  );
}
