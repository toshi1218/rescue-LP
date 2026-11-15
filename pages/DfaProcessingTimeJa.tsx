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
import { SEO_YEAR } from '../lib/seoDate';

const faqs = [
  { q: 'DFAアポスティーユにはどのくらいかかりますか？', a: '対象となる物理書類はRegularで5営業日後、Expeditedで2営業日後、e-Apostilleは1営業日後がDFAの公表スケジュールです。書類取得・予約待ち・配送は含まず、総日数は案件ごとに確認します。' },
  { q: '提出期限に合わせて特急処理で申請できますか？', a: '書類の種類・申請経路と現在の受付状況を確認し、Expeditedを利用できるかご案内します。PSA電子証明書はe-Apostilleの経路です。予約日の繰り上げや提出期限までの完了を保証するものではありません。' },
  { q: '料金はいくらですか？', a: 'PSA民事書類1通は、e-Certificateのみ30,000円、紙原本＋DHL（認証なし）40,000円、e-Apostille付き電子版40,000円、フルセット50,000円です（すべて税込）。必要な範囲を確認してお見積もりします。' },
  { q: '期限に間に合うかどうか不安です', a: '提出予定日をお知らせいただければ、間に合うかどうかを確認してご案内します。まずはご相談ください。' },
];

export default function DfaProcessingTimeJa() {
  useMeta(
    `DFAアポスティーユの処理期間【${SEO_YEAR}年】通常5・特急2営業日後／電子1営業日後`,
    'DFAの公表処理期間は、物理書類の対象経路でRegularが5営業日後、Expeditedが2営業日後。e-Apostilleは1営業日後です。PSA取得・予約・配送を含む総日数は案件ごとに確認します。',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'DFAアポスティーユの処理期間' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'DFAアポスティーユ処理期間・提出期限に合わせた代行取得',
          description: 'PSA電子証明書のe-Apostilleと、対象となる非PSA物理書類の認証経路を確認。書類取得・予約・配送も考慮し、提出期限から逆算して申請時期をご案内します。',
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
            price: '40000',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: '40000',
              priceCurrency: 'JPY',
              description: 'PSA e-Certificate取得とDFA e-Apostilleを含む税込総額（電子納品）',
            },
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map(({ q, a }) => ({
            '@type': 'Question',
            name: q,
            acceptedAnswer: { '@type': 'Answer', text: a },
          })),
        },
      ]}
    >
      <HeroBanner
        title="DFAアポスティーユの処理期間"
        subtitle="物理書類とe-Apostilleでは申請経路が異なります。DFA内部の処理日数と、書類取得・配送まで含めた総日数を確認して手配します。"
        badges={['書類別に認証経路を確認', '提出期限から逆算', '費用は事前にご案内']}
        ctaText="無料相談はこちら"
        ctaHref="#contact"
        lastUpdated="2026年11月6日"
      />

      <SummaryBlock
        conclusion="DFA公表の処理日数は認証工程の目安です。日本で提出できるまでの総日数は、書類の種類・取得状況・必要な配送によって変わります。"
        points={[
          '物理書類の対象経路：Regularは5営業日後、Expeditedは2営業日後に交付',
          'e-Apostille：1営業日後に交付。PSA電子証明書はこの電子認証経路で申請',
          '書類発行・予約待ち・補正・配送は別途必要。期限内の完了を保証する日数ではありません',
          '提出予定日と書類の状況を伺い、申請経路と全体の見込みをご案内',
        ]}
        ctaText="無料で相談する"
      />
      <p className="text-xs text-gray-500 mb-8">
        出典：<a href="https://www.apostille.gov.ph/schedule-of-fees-tab/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">DFA公式料金・処理期間表</a>／<a href="https://www.apostille.gov.ph/faqs/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">DFA公式FAQ</a>。対象書類・受付状況を確認のうえでご案内します。
      </p>

      <SectionDivider variant="beige">
        <IconCardGrid
          heading="こんな方に選ばれています"
          columns={3}
          cards={[
            { icon: Clock, title: '処理期間を確認したい', description: 'PSAの電子版は約1週間、紙原本の国際発送が必要な場合は約3〜4週間が目安です。NBI等は案件により異なります。', accent: 'gold' },
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
              title: '提出先に応じたDFA認証の手配',
              description: '認証が必要かを提出先の条件で確認します。PSA電子証明書はe-Apostille、対象となる非PSA書類は物理書類の経路で手配し、取得・予約・配送を含む見込みをご案内します。',
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
            { item: '書類に合う認証経路・処理区分の確認', self: '要調査', agency: true },
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
          { title: '電子納品・必要に応じて紙原本を配送', description: 'e-Apostilleは電子納品です。紙原本が必要な場合は追跡付き配送を手配します。' },
        ]}
      />

      <FaqSection
        items={faqs}
        ctaTitle="まずは状況をお聞かせください"
        ctaButton="無料相談フォームへ"
      />
    </PageLayout>
  );
}
