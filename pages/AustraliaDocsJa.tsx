import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import SectionDivider from '../components/SectionDivider';
import IconCardGrid from '../components/IconCardGrid';
import ComparisonTable from '../components/ComparisonTable';
import { FileCheck, Globe, Users, Shield, FileText, Plane, CheckCircle, Clock, Stamp, ShieldCheck } from 'lucide-react';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR_MONTH_JA } from '../lib/seoDate';

export default function AustraliaDocsJa() {
  useMeta(
    `オーストラリアビザのフィリピン書類取得代行 [${SEO_YEAR_MONTH_JA}] — Home Affairs対応・DHL郵送`,
    'オーストラリアパートナービザ・永住権向けのPSA書類・NBI Clearanceを代行取得。Home Affairsの現行要件を確認し、必要な場合だけ認証を手配します。',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'オーストラリアビザ フィリピン書類代行' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'オーストラリアビザ向けフィリピン書類取得代行（Home Affairs対応）',
        description: 'オーストラリアパートナービザ・永住権向けのPSA書類・NBI Clearanceを代行取得。現行要件を確認し、必要な場合だけ認証を手配。',
        url: 'https://ph-document.com/ja/australia/',
        provider: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/ja/',
        },
        areaServed: { '@type': 'Country', name: 'JP' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'JPY',
          price: '58000',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '58000',
            priceCurrency: 'JPY',
            description: 'PSA取得・DFAアポスティーユ・DHLオーストラリア送料込み総額目安（税抜、書類1通あたり）',
          },
        },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'オーストラリアビザ申請にはDFAアポスティーユが必要ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '一律必須ではありません。ハーグ条約加盟は、必要な場合の認証方法を定めるもので、Home Affairsの全書類にアポスティーユを義務付けるものではありません。',
              },
            },
            {
              '@type': 'Question',
              name: 'オーストラリアのパートナービザ（820/801）に必要な書類は？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '必要書類はビザサブクラスと事情によって異なります。PSA民事書類や警察証明書を求められる場合がありますが、認証は現行要件で必要な場合だけ手配します。',
              },
            },
            {
              '@type': 'Question',
              name: '料金はいくらですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '必要書類・DFAアポスティーユ・オーストラリアへの国際郵送をまとめた料金でご案内します。無料相談後に正確な金額をご提示します。',
              },
            },
            {
              '@type': 'Question',
              name: 'オーストラリアへの郵送にどのくらいかかりますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '目安は全体で約4〜6週間です。書類準備後、DHLエクスプレスでオーストラリアへ3〜5営業日でお届けします。',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="オーストラリアビザ 書類取得代行"
        badges={['Home Affairs現行要件', '必要な場合のみ認証', '費用は事前にご案内']}
        ctaText="無料相談はこちら"
        ctaHref="#contact"
        lastUpdated="2026年8月30日"
      />

      <SummaryBlock
        conclusion="Home Affairsの現行チェックリストを確認し、必要なPSA書類・NBI Clearanceと、必要な場合のみ認証を一括手配します。"
        points={[
          'ハーグ条約加盟国でも、Home Affairsの全書類にアポスティーユが必要とは限りません',
          'CENOMAR・PSA出生証明書・NBI Clearance・婚姻証明書に対応',
          'PSA e-Apostilleは電子納品、紙原本が必要な場合のみDHLで発送',
          'ビザサブクラスごとのHome Affairs要件を事前確認してから進めます',
        ]}
        ctaText="無料で相談する"
      />

      <FeatureList
        heading="こんな方へ"
        items={[
          {
            icon: <Shield className="w-4 h-4" />,
            title: 'オーストラリアのパートナービザ・永住権を申請中',
            description: 'ビザサブクラスによって書類と認証要件が異なります。現行チェックリストを確認して必要なものだけ手配します。',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: 'オーストラリア在住でフィリピンに頼める人がいない',
            description: '現地スタッフがフィリピン国内の手続きを全て代行します。申請者情報をお知らせいただくだけでOKです。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'Home Affairsに何が必要かわからない',
            description: 'ビザサブクラスによって必要書類が異なります。無料相談で必要なものをリストアップしてからご提案します。',
          },
        ]}
      />

      <CtaBox
        title="まず何が必要かを一緒に確認しましょう"
        description="パートナービザ・永住権・市民権など、申請種別ごとに必要書類が異なります。無料相談で整理してから進めます。"
        buttonText="無料で相談する"
        href="#contact"
        variant="primary"
        trustNote="着手金50%・書類取得・DHL配送準備完了後に残金50%お支払い・着手前キャンセル無料"
      />

      <SectionDivider variant="beige">
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
              title: '必要な場合のDFA認証',
              description: 'Home Affairsまたは提出先が求める場合のみ手配します。PSA e-Apostilleは2026年3月16日以降、電子発行です。',
            },
            {
              icon: <Globe className="w-4 h-4" />,
              title: 'オーストラリアへの国際郵送（DHL）',
              description: '追跡番号付きでオーストラリアのご住所へ直送します。転送不要です。',
            },
          ]}
        />

        <IconCardGrid
          heading="対応書類・ビザ種別"
          columns={3}
          cards={[
            { icon: FileText, title: 'PSA出生証明書', description: 'パートナービザ・永住権申請の基本書類。DFAアポスティーユ付きで手配', accent: 'gold' },
            { icon: ShieldCheck, title: 'CENOMAR', description: '独身証明書。Home Affairsへの配偶者関係証明に必要', accent: 'blue' },
            { icon: CheckCircle, title: 'NBI Clearance', description: '無犯罪証明書。永住権・市民権申請で要求されることが多い', accent: 'green' },
            { icon: Stamp, title: 'DFAアポスティーユ', description: '提出先の現行要件で必要な場合のみ手配', accent: 'teal' },
            { icon: Plane, title: 'パートナービザ（820/801）', description: 'オンショアパートナービザ。CENOMAR・PSA出生証明書が必要', accent: 'purple' },
            { icon: Globe, title: '永住権（PR）', description: 'NBI Clearance・PSA書類一式をDFAアポスティーユ付きで対応', accent: 'gold' },
          ]}
        />
      </SectionDivider>

      <SectionDivider variant="blue">
        <StepList
          heading="ご依頼の流れ"
          variant="visual"
          steps={[
            { title: 'フォームで相談', description: 'ビザサブクラス（パートナービザ・永住権など）と提出目標日をお知らせください。' },
            { title: '必要書類・料金の確認', description: 'Home Affairs要件をもとに必要書類をリストアップし、料金をご提示します。' },
            { title: 'フィリピン現地で手配', description: 'PSAはオンライン申請＋DFA e-Apostille（電子認証）、NBI等は現地スタッフが物理取得・アポスティーユを進めます。' },
            { title: 'オーストラリアへ郵送', description: '書類が揃い次第、DHLで追跡付きお届け。目安は全体で約4〜6週間。' },
          ]}
        />
      </SectionDivider>

      <ComparisonTable
        heading="フィリピン書類の手配"
        rows={[
          { item: 'PSA書類の申請', self: false, agency: true },
          { item: 'DFAアポスティーユ', self: false, agency: true },
          { item: 'Home Affairs要件確認', self: '要英語調査', agency: true },
          { item: 'オーストラリアへ直送', self: '自己手配', agency: true },
          { item: '日本語サポート', self: '英語が必要', agency: true },
        ]}
      />

      <FaqSection
        items={[
          { q: 'オーストラリアビザ申請にはDFAアポスティーユが必要ですか？', a: '一律必須ではありません。ハーグ条約加盟は、必要な場合の認証方法を定めるもので、Home Affairsの全書類にアポスティーユを義務付けるものではありません。' },
          { q: 'オーストラリアのパートナービザ（820/801）に必要な書類は？', a: '必要書類はビザサブクラスと事情によって異なります。PSA民事書類や警察証明書を求められる場合がありますが、認証は現行要件で必要な場合だけ手配します。' },
          { q: '料金はいくらですか？', a: '必要書類・DFAアポスティーユ・オーストラリアへの国際郵送をまとめた料金でご案内します。無料相談後に正確な金額をご提示します。' },
          { q: 'オーストラリアへの郵送にどのくらいかかりますか？', a: '目安は全体で約4〜6週間です。書類準備後、DHLエクスプレスでオーストラリアへ3〜5営業日でお届けします。' },
        ]}
        ctaTitle="まずは状況をお聞かせください"
        ctaButton="無料相談フォームへ"
      />
    </PageLayout>
  );
}
