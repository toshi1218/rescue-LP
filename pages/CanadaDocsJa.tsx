import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import { FileCheck, Globe, Users, Shield } from 'lucide-react';

export default function CanadaDocsJa() {
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'カナダ移民ビザ フィリピン書類代行' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'カナダ移民ビザ向けフィリピン書類取得代行（IRCC対応）',
        description: 'カナダ永住権・配偶者スポンサーシップに必要なCENOMAR・PSA出生証明書・NBI ClearanceをDFAアポスティーユ付きで代行取得。IRCC提出対応。',
        url: 'https://ph-document.com/ja/canada/',
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
              name: 'カナダ移民申請にはDFAアポスティーユが必要ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'はい。カナダはハーグ条約加盟国です。IRCCへの申請には、PSA出生証明書・CENOMAR・NBI ClearanceにDFAアポスティーユ認証が必要です。',
              },
            },
            {
              '@type': 'Question',
              name: 'カナダ永住権・配偶者スポンサーシップに必要な書類は？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'IRCC申請の場合、NBI Clearance（DFAアポスティーユ付き）とPSA出生証明書が基本です。配偶者スポンサーシップではCENOMAR・婚姻証明書も必要な場合があります。無料相談でご確認します。',
              },
            },
            {
              '@type': 'Question',
              name: '料金はいくらですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '必要書類・DFAアポスティーユ・カナダへの国際郵送をまとめた料金でご案内します。無料相談後に正確な金額をご提示します。',
              },
            },
            {
              '@type': 'Question',
              name: 'カナダへの郵送にどのくらいかかりますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '目安は全体で約4〜6週間です。書類準備後、DHLエクスプレスでカナダへ3〜5営業日でお届けします。',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="カナダ移民ビザ 書類取得代行"
        badges={['IRCC対応', 'アポスティーユ込み', '追加費用なし']}
        ctaText="無料相談はこちら"
        ctaHref="#contact"
      />

      <SummaryBlock
        conclusion="カナダ永住権・配偶者スポンサーシップに必要なフィリピン書類を、日本語だけで一括取り寄せできます。"
        points={[
          'カナダはハーグ条約加盟国 — フィリピン書類にはDFAアポスティーユが必要',
          'CENOMAR・PSA出生証明書・NBI Clearance・婚姻証明書に対応',
          'DFAアポスティーユ付きの原本をDHLでカナダへ直送',
          '申請種別ごとのIRCC要件を事前確認してから進めます',
        ]}
        ctaText="無料で相談する（24時間以内に返信）"
      />

      <FeatureList
        heading="こんな方へ"
        items={[
          {
            icon: <Shield className="w-4 h-4" />,
            title: 'カナダ永住権・配偶者スポンサーシップを申請中',
            description: 'IRCCへの提出にはDFAアポスティーユ付きのフィリピン書類が必要です。必要書類を一括で手配します。',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: 'カナダ在住でフィリピンに頼める人がいない',
            description: '現地スタッフがフィリピン国内の手続きを全て代行します。申請者情報をお知らせいただくだけでOKです。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'IRCCに何が必要かわからない',
            description: '申請種別によって必要書類が異なります。無料相談で必要なものをリストアップしてからご提案します。',
          },
        ]}
      />

      <CtaBox
        title="まず何が必要かを一緒に確認しましょう"
        description="永住権・配偶者スポンサーシップ・市民権など、申請種別ごとに必要書類が異なります。無料相談で整理してから進めます。"
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
            title: 'PSA書類取得（出生証明書・婚姻証明書・CENOMAR・NBI Clearanceなど）',
            description: '必要なPSA書類をまとめて取得します。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'DFAアポスティーユ認証（※日本の手続きではほぼ必須です）',
            description: 'IRCC要件に沿ったDFAアポスティーユ認証を手配します。原本での提出が必要です。',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'カナダへの国際郵送（DHL）',
            description: '追跡番号付きでカナダのご住所へ直送します。転送不要です。',
          },
        ]}
      />

      <CtaBox
        title="追加費用の後出しはありません"
        description="必要書類・DFAアポスティーユ・カナダへの国際郵送をまとめた料金でご案内します。"
        buttonText="料金を確認する"
        href="#contact"
        variant="secondary"
        trustNote="日本語のみでOK・匿名相談可・返信24時間以内"
      />

      <StepList
        heading="ご依頼の流れ"
        steps={[
          { title: 'フォームで相談', description: '申請種別（永住権・配偶者スポンサーシップなど）と提出目標日をお知らせください。' },
          { title: '必要書類・料金の確認', description: 'IRCC要件をもとに必要書類をリストアップし、料金をご提示します。' },
          { title: 'フィリピン現地で手配', description: 'PSA取得・DFAアポスティーユを現地スタッフが進めます。' },
          { title: 'カナダへ郵送', description: '書類が揃い次第、DHLで追跡付きお届け。目安は全体で約4〜6週間。' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'カナダ移民申請にはDFAアポスティーユが必要ですか？', a: 'はい。カナダはハーグ条約加盟国です。IRCCへの申請には、PSA出生証明書・CENOMAR・NBI ClearanceにDFAアポスティーユ認証が必要です。' },
          { q: 'カナダ永住権・配偶者スポンサーシップに必要な書類は？', a: 'IRCC申請の場合、NBI Clearance（DFAアポスティーユ付き）とPSA出生証明書が基本です。配偶者スポンサーシップではCENOMAR・婚姻証明書も必要な場合があります。無料相談でご確認します。' },
          { q: '料金はいくらですか？', a: '必要書類・DFAアポスティーユ・カナダへの国際郵送をまとめた料金でご案内します。無料相談後に正確な金額をご提示します。' },
          { q: 'カナダへの郵送にどのくらいかかりますか？', a: '目安は全体で約4〜6週間です。書類準備後、DHLエクスプレスでカナダへ3〜5営業日でお届けします。' },
        ]}
        ctaTitle="まずは状況をお聞かせください"
        ctaButton="無料相談フォームへ"
      />
    </PageLayout>
  );
}
