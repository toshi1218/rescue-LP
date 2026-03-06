import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { FileCheck, Globe, Users, Car } from 'lucide-react';
import SummaryBlock from '../components/SummaryBlock';

export default function DriverRecordJa() {
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'LTOドライバーズレコード取得代行' }]}
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'LTOドライバーズレコード取得代行',
        description: 'フィリピンのLTOドライバーズレコードをDFAアポスティーユ付きで代行取得。外免切替・フィリピン人採用に対応。複数名まとめ依頼も可能。フィリピン渡航不要。',
        url: 'https://ph-document.com/ja/driver-record',
        provider: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/ja/',
        },
        areaServed: { '@type': 'Country', name: 'JP' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'JPY',
          price: '100000',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '100000',
            priceCurrency: 'JPY',
            description: 'LTO書類取得・DFAアポスティーユ・国際郵送込み（税抜）',
          },
        },
      }}
    >
      <HeroBanner
        title="LTOドライバーズレコード、日本語だけで取り寄せます"
        badges={['日本語だけでOK', 'アポスティーユ込み対応', 'コミコミ料金']}
        ctaText="無料相談はこちら"
        ctaHref="#contact"
      />

      <SummaryBlock
        conclusion="LTOドライバーズレコードを、日本語だけで取り寄せできます。外免切替の書類準備を一括代行します。"
        points={[
          '現地スタッフがフィリピン陸運局（LTO）に直接申請・取得',
          '提出先の都道府県に合わせた正規書類で手配',
          'DFAアポスティーユが必要な場合も一括対応',
          '複数名分のまとめ依頼にも対応',
        ]}
        ctaText="無料で相談する（24時間以内に返信）"
      />

      <FeatureList
        heading="こんな方へ"
        items={[
          {
            icon: <Car className="w-4 h-4" />,
            title: '外免切替のためにLTO書類が必要',
            description: '日本の都道府県運転免許センターへの外免切替申請に必要なLTOドライバーズレコードを代行取得します。',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: 'フィリピン人従業員の書類を手配したい',
            description: '企業様からのご依頼も対応しています。複数名分の一括手配も可能です。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: '都道府県によって必要書類が違うと聞いた',
            description: '提出先の都道府県によって必要書類が異なります。提出先を確認した上で適切な書類を手配します。',
          },
        ]}
      />

      <CtaBox
        title="まず「何が必要か」を確認しましょう"
        description="外免切替の必要書類は提出先の都道府県によって異なります。無料相談で整理してから進めます。"
        buttonText="無料で相談する"
        href="#contact"
        variant="primary"
      />

      <FeatureList
        heading="料金に含まれるもの"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'LTOドライバーズレコード取得',
            description: 'フィリピン陸運局（LTO）へのドライバーズレコード申請・取得を代行します。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'DFAアポスティーユ認証（必要な場合）',
            description: '提出先の要件に応じてDFAアポスティーユ認証を手配します。',
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
        description="LTO取得・DFAアポスティーユ・国際郵送をまとめたコミコミ料金でご案内します。"
        buttonText="料金を確認する"
        href="#contact"
        variant="secondary"
      />

      <StepList
        heading="ご依頼の流れ"
        steps={[
          { title: 'フォームで相談', description: '提出先の都道府県・対象者の人数・提出期限をお知らせください。' },
          { title: '必要書類・料金の確認', description: '必要書類をリストアップし、コミコミ料金をご提示します。' },
          { title: 'フィリピン現地で手配', description: 'LTO取得・DFAアポスティーユを現地スタッフが進めます。' },
          { title: '日本へ郵送', description: '書類が揃い次第、追跡付きでお届けします。目安は約1ヶ月〜。' },
        ]}
      />

      <FaqSection
        items={[
          { q: '外免切替に必要な書類は何ですか？', a: '一般的にLTOドライバーズレコード（DFAアポスティーユ付き）・公式レシートが必要です。都道府県によって追加書類が必要な場合もあります。無料相談で確認します。' },
          { q: '料金はいくらですか？', a: 'LTO取得・DFAアポスティーユ（必要な場合）・国際郵送をまとめたコミコミ料金です。無料相談後に正確な金額をご提示します。' },
          { q: '複数名分まとめて依頼できますか？', a: 'はい、可能です。人数と状況をお知らせいただければ、まとめて手配します。' },
          { q: '急ぎの場合は対応できますか？', a: '可能です。提出期限をお知らせいただければ、優先対応の可否を確認してご案内します。' },
        ]}
        ctaTitle="まずは状況をお聞かせください"
        ctaButton="無料相談フォームへ"
      />
    </PageLayout>
  );
}
