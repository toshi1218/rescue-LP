import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { Heart, FileCheck, Globe, Users } from 'lucide-react';

export default function NbiGuideJa() {
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'NBI Clearance取得代行' }]}
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'NBI Clearance取得代行',
        url: 'https://ph-document.com/ja/nbi-clearance',
        provider: { '@type': 'Organization', name: 'IGRS Inc.' },
      }}
    >
      <HeroBanner
        title="NBI Clearance、日本語だけで取り寄せます"
        badges={['日本語だけでOK', 'アポスティーユ込み対応', 'コミコミ料金']}
        ctaText="無料相談はこちら"
        ctaHref="#contact"
      />

      <FeatureList
        heading="こんな方へ"
        items={[
          {
            icon: <Heart className="w-4 h-4" />,
            title: '配偶者ビザ・在留資格の申請中',
            description: '入国管理局への在留資格申請に、NBI Clearanceが必要です。DFAアポスティーユが必要かどうかも含めて確認します。',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: 'フィリピン人従業員の書類を手配したい',
            description: '企業様からのご依頼も対応しています。複数名分の一括手配も可能です。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: '本人がフィリピンに行けない',
            description: 'NBI Clearanceは本人申請が原則ですが、代理人申請の手配についてもご相談ください。状況に応じてご案内します。',
          },
        ]}
      />

      <CtaBox
        title="まず「何が必要か」を確認しましょう"
        description="提出先によって必要な形式が異なります。無料相談で整理してから進めます。"
        buttonText="無料で相談する"
        href="#contact"
        variant="primary"
      />

      <FeatureList
        heading="料金に含まれるもの"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'NBI Clearance取得手配',
            description: 'フィリピン国家捜査局（NBI）への申請・取得を代行します。',
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
        title="追加費用の後出しはありません"
        description="NBI取得・DFAアポスティーユ・国際郵送をまとめたコミコミ料金でご案内します。"
        buttonText="料金を確認する"
        href="#contact"
        variant="secondary"
      />

      <StepList
        heading="ご依頼の流れ"
        steps={[
          { title: 'フォームで相談', description: '用途（配偶者ビザ・帰化申請など）と提出先をお知らせください。' },
          { title: '必要書類・料金の確認', description: 'アポスティーユが必要かどうかを含め、コミコミ料金をご提示します。' },
          { title: 'フィリピン現地で手配', description: 'NBI取得・DFAアポスティーユを現地スタッフが進めます。' },
          { title: '日本へ郵送', description: '書類が揃い次第、追跡付きでお届けします。目安は約1ヶ月〜。' },
        ]}
      />

      <FaqSection
        items={[
          { q: '料金はいくらですか？', a: 'NBI取得・DFAアポスティーユ（必要な場合）・国際郵送をまとめたコミコミ料金です。無料相談後に正確な金額をご提示します。' },
          { q: 'いつ届きますか？', a: '目安は約1ヶ月〜です。NBI発行に2〜3週間、DFAアポスティーユに1〜2週間、郵送に3〜5営業日かかります。' },
          { q: 'HITが出た場合はどうなりますか？', a: 'HITが出た場合は別途対応が必要です。まずは状況をお知らせください。HIT対応についてもご相談を承っています。' },
          { q: '急ぎの場合は対応できますか？', a: '可能です。提出期限をお知らせいただければ、優先対応の可否を確認してご案内します。' },
        ]}
        ctaTitle="まずは状況をお聞かせください"
        ctaButton="無料相談フォームへ"
      />
    </PageLayout>
  );
}
