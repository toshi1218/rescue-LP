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

export default function AustraliaDocsJa() {
  useMeta(
    'オーストラリアビザのフィリピン書類取得代行 [2026年3月] — Home Affairs対応・DHL郵送',
    'オーストラリアパートナービザ・永住権申請に必要なCENOMAR・PSA出生証明書・NBI ClearanceをDFAアポスティーユ付きで代行取得。日本語だけでOK。無料相談受付中。',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'オーストラリアビザ フィリピン書類代行' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'オーストラリアビザ向けフィリピン書類取得代行（Home Affairs対応）',
        description: 'オーストラリアパートナービザ・永住権申請に必要なCENOMAR・PSA出生証明書・NBI ClearanceをDFAアポスティーユ付きで代行取得。Department of Home Affairs提出対応。',
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
          price: '40000',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '40000',
            priceCurrency: 'JPY',
            description: 'PSA取得・DFAアポスティーユ・国際郵送込み（税抜、書類1通あたり）',
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
                text: 'はい。オーストラリアはハーグ条約加盟国です。Department of Home Affairsへの提出には、PSA出生証明書・CENOMAR・NBI ClearanceにDFAアポスティーユ認証が必要です。',
              },
            },
            {
              '@type': 'Question',
              name: 'オーストラリアのパートナービザ（820/801）に必要な書類は？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'CENOMAR・PSA出生証明書（DFAアポスティーユ付き）が基本です。NBI Clearanceが必要な場合もあります。ビザサブクラスによって異なるため、無料相談でご確認します。',
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
        badges={['Home Affairs対応', 'アポスティーユ込み', '追加費用なし']}
        ctaText="無料相談はこちら"
        ctaHref="#contact"
      />

      <SummaryBlock
        conclusion="Partner Visa・永住権申請に必要なPSA・NBIクリアランスをHome Affairs対応のDFAアポスティーユ付きで一括取り寄せ。ビザ申請のボトルネックを解消します。"
        points={[
          'オーストラリアはハーグ条約加盟国 — フィリピン書類にはDFAアポスティーユが必要',
          'CENOMAR・PSA出生証明書・NBI Clearance・婚姻証明書に対応',
          'DFAアポスティーユ付きの原本をDHLでオーストラリアへ直送',
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
            description: 'Department of Home Affairsへの提出にはDFAアポスティーユ付きのフィリピン書類が必要です。必要書類を一括で手配します。',
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
              title: 'DFAアポスティーユ認証（※日本の手続きではほぼ必須です）',
              description: 'Home Affairs要件に沿ったDFAアポスティーユ認証を手配します。原本での提出が必要です。',
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
            { icon: Stamp, title: 'DFAアポスティーユ', description: 'ハーグ条約加盟国への提出に必要な外務省認証', accent: 'teal' },
            { icon: Plane, title: 'パートナービザ（820/801）', description: 'オンショアパートナービザ。CENOMAR・PSA出生証明書が必要', accent: 'purple' },
            { icon: Globe, title: '永住権（PR）', description: 'NBI Clearance・PSA書類一式をDFAアポスティーユ付きで対応', accent: 'gold' },
          ]}
        />
      </SectionDivider>

      <CtaBox
        title="追加費用の後出しはありません"
        description="必要書類・DFAアポスティーユ・オーストラリアへの国際郵送をまとめた料金でご案内します。"
        buttonText="料金を確認する"
        href="#contact"
        variant="secondary"
        trustNote="日本語のみでOK・匿名相談可・返信24時間以内"
      />

      <SectionDivider variant="blue">
        <StepList
          heading="ご依頼の流れ"
          variant="visual"
          steps={[
            { title: 'フォームで相談', description: 'ビザサブクラス（パートナービザ・永住権など）と提出目標日をお知らせください。' },
            { title: '必要書類・料金の確認', description: 'Home Affairs要件をもとに必要書類をリストアップし、料金をご提示します。' },
            { title: 'フィリピン現地で手配', description: 'PSA取得・DFAアポスティーユを現地スタッフが進めます。' },
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
          { q: 'オーストラリアビザ申請にはDFAアポスティーユが必要ですか？', a: 'はい。オーストラリアはハーグ条約加盟国です。Department of Home Affairsへの提出には、PSA出生証明書・CENOMAR・NBI ClearanceにDFAアポスティーユ認証が必要です。' },
          { q: 'オーストラリアのパートナービザ（820/801）に必要な書類は？', a: 'CENOMAR・PSA出生証明書（DFAアポスティーユ付き）が基本です。NBI Clearanceが必要な場合もあります。ビザサブクラスによって異なるため、無料相談でご確認します。' },
          { q: '料金はいくらですか？', a: '必要書類・DFAアポスティーユ・オーストラリアへの国際郵送をまとめた料金でご案内します。無料相談後に正確な金額をご提示します。' },
          { q: 'オーストラリアへの郵送にどのくらいかかりますか？', a: '目安は全体で約4〜6週間です。書類準備後、DHLエクスプレスでオーストラリアへ3〜5営業日でお届けします。' },
        ]}
        ctaTitle="まずは状況をお聞かせください"
        ctaButton="無料相談フォームへ"
      />
    </PageLayout>
  );
}
