import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { Clock, Calendar, FileCheck, Globe, CheckCircle, AlertTriangle } from 'lucide-react';
import SummaryBlock from '../components/SummaryBlock';
import SectionDivider from '../components/SectionDivider';
import IconCardGrid from '../components/IconCardGrid';
import ComparisonTable from '../components/ComparisonTable';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR_MONTH_JA } from '../lib/seoDate';

export default function DfaProcessingTimeJa() {
  useMeta(
    `DFAアポスティーユの処理期間【${SEO_YEAR_MONTH_JA}】Regular 4営業日・Express 翌営業日`,
    'DFAアポスティーユの処理期間はRegular（4営業日）またはExpress（翌営業日）。申請から受け取りまでの流れ・費用の違い・提出期限から逆算したスケジュールの立て方を解説。',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'DFAアポスティーユの処理期間' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'DFAアポスティーユ処理期間・提出期限に合わせた代行取得',
          description: 'DFAアポスティーユはRegular（通常5日程度）またはExpress（3日程度）で申請可能。提出予定日から逆算して最適なスケジュールで手配。ビザ申請の期限に合わせてスケジュールをご案内します。',
          url: 'https://ph-document.com/ja/apostille-shori-kikan/',
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
              description: 'DFAアポスティーユ認証込み（税抜）。DHL国際郵送費は実費別途',
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
                text: 'DFA e-ApostilleはRegular（通常5日程度）またはExpress（3日程度）で申請できます。PSAのオンライン申請とDFA e-Apostilleは数週間が目安です。NBI等の物理書類は取得・物理アポスティーユ・国際郵送を含め、おおむね1ヶ月半が目安です。',
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
        title="DFAアポスティーユの処理期間"
        badges={['Regular/Expedited対応', '提出期限に合わせて手配', '費用は事前にご案内']}
        ctaText="無料相談はこちら"
        ctaHref="#contact"
        lastUpdated="2026年8月13日"
      />

      <SummaryBlock
        conclusion="DFAアポスティーユの処理期間は通常4〜5営業日。提出予定日を考慮してスケジュールをご案内します。"
        points={[
          'DFAアポスティーユはRegular（通常5日程度）またはExpress（3日程度）で申請可能',
          'PSAはオンライン申請＋DFA e-Apostilleで数週間。NBI等の物理書類は郵送含め全体でおおむね1ヶ月半が目安',
          '提出予定日から逆算して、最適な申請開始時期をご案内',
          '期限に間に合うかどうかも、無料相談で確認できます',
        ]}
        ctaText="無料で相談する"
      />

      <SectionDivider variant="beige">
        <IconCardGrid
          heading="こんな方に選ばれています"
          columns={3}
          cards={[
            { icon: Clock, title: '処理期間を確認したい', description: 'DFAアポスティーユはRegular（通常5日程度）またはExpress（3日程度）で申請できます。全体の目安はおおむね1ヶ月半です。', accent: 'gold' },
            { icon: Calendar, title: '提出期限が決まっている', description: '提出予定日から逆算して、最適なタイミングで申請を開始します。間に合うかどうかも事前にご確認します。', accent: 'blue' },
            { icon: FileCheck, title: 'PSA書類からまとめて頼みたい', description: 'PSA書類のオンライン申請からDFA e-Apostille（電子認証）申請まで一括で代行できます。', accent: 'green' },
          ]}
        />
      </SectionDivider>

      <CtaBox
        title="提出予定日を教えてください"
        description="逆算して最適な申請開始時期をご案内します。間に合うかどうかも事前にご確認します。"
        buttonText="無料で相談する"
        href="#contact"
        variant="primary"
        trustNote="着手金50%・書類取得・DHL配送準備完了後に残金50%お支払い・着手前キャンセル無料"
      />

      <SectionDivider variant="blue">
        <FeatureList
          heading="料金に含まれるもの"
          items={[
            {
              icon: <FileCheck className="w-4 h-4" />,
              title: '提出先が求める場合のDFA認証',
              description: 'PSA民事書類はe-Apostille電子手続き、NBI・LTO等は対象に応じた物理手続きを手配します。所要日数は書類種別とDFAの現行処理状況で変わります。',
            },
            {
              icon: <FileCheck className="w-4 h-4" />,
              title: 'PSA書類取得（必要な場合）',
              description: 'PSA書類の取得からまとめて依頼いただけます。',
            },
          ]}
        />

        <ComparisonTable
          heading="自分で手配 vs IGRS代行"
          rows={[
            { item: 'DFA Regular / Express の選択', self: '要調査', agency: true },
            { item: '提出期限に合わせたスケジュール管理', self: '要自己管理', agency: true },
            { item: 'PSA書類からまとめて手配', self: false, agency: true },
            { item: '日本語サポート', self: false, agency: true },
            { item: '進捗報告', self: false, agency: true },
          ]}
        />
      </SectionDivider>

      <StepList
        heading="ご依頼の流れ"
        variant="visual"
        steps={[
          { title: '提出予定日を共有', description: '婚姻届・ビザ申請などの提出予定日をお知らせください。' },
          { title: '申請開始時期を確認', description: '逆算して最適な申請開始時期と料金の目安をご案内します。' },
          { title: 'フィリピン現地で手配', description: 'PSAはオンライン申請＋DFA e-Apostille（電子認証）、NBI等は現地スタッフが物理取得・アポスティーユを進めます。' },
          { title: '日本へ郵送', description: '書類が揃い次第、追跡付きでお届けします。' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'DFAアポスティーユにはどのくらいかかりますか？', a: 'DFA e-ApostilleはRegular（通常5日程度）またはExpress（3日程度）で申請できます。PSAのオンライン申請とDFA e-Apostilleは数週間が目安です。NBI等の物理書類は取得・物理アポスティーユ・国際郵送を含め、おおむね1ヶ月半が目安です。' },
          { q: '提出期限に合わせてExpressで申請できますか？', a: 'はい。提出予定日をお知らせいただければ、RegularとExpressどちらが適切かを含めてご案内します。できる限り間に合うよう進めますが、現地機関の処理状況によって前後する場合があります。' },
          { q: '料金はいくらですか？', a: 'DFAアポスティーユ・PSA取得（必要な場合）をまとめた料金です。（DHL国際郵送費は実費別途となります）無料相談後に正確な金額をご提示します。' },
          { q: '期限に間に合うかどうか不安です', a: '提出予定日をお知らせいただければ、間に合うかどうかを確認してご案内します。まずはご相談ください。' },
        ]}
        ctaTitle="まずは状況をお聞かせください"
        ctaButton="無料相談フォームへ"
      />
    </PageLayout>
  );
}
