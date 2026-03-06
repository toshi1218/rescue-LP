import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { Baby, AlertTriangle, Clock, FileCheck, Globe, Users } from 'lucide-react';

export default function PsaBirthCertJa() {
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'PSA出生証明書取得代行' }]}
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'PSA出生証明書取得代行',
        url: 'https://ph-document.com/ja/psa-shussei-shomeisho',
        provider: { '@type': 'Organization', name: 'IGRS Inc.' },
      }}
    >
      <HeroBanner
        title="PSA出生証明書、日本語だけで取り寄せます"
        badges={['日本語だけでOK', 'アポスティーユ込み対応', 'コミコミ料金']}
        ctaText="無料相談はこちら"
        ctaHref="#contact"
      />

      {/* 訴求ブロック */}
      <section className="mb-12 rounded-2xl bg-amber-50 border border-amber-200 p-6">
        <div className="flex items-start gap-3 mb-4">
          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <h2 className="text-base font-bold text-amber-900">PSAオンライン申請で「届いた書類が使えない」ケースがあります</h2>
        </div>
        <ul className="space-y-2 text-sm text-amber-800 leading-relaxed">
          <li className="flex items-start gap-2"><span className="text-amber-500 font-bold flex-shrink-0">✕</span>PSAオンライン（PSAHelpline）で取得できるのは<strong>電子認証版のみ</strong>。DFAアポスティーユは別途必要</li>
          <li className="flex items-start gap-2"><span className="text-amber-500 font-bold flex-shrink-0">✕</span>日本の提出先では<strong>紙の原本＋DFAアポスティーユ</strong>が求められるケースがほとんど</li>
          <li className="flex items-start gap-2"><span className="text-amber-500 font-bold flex-shrink-0">✕</span>「PSAに記録がない」場合は<strong>LCR（地方民事登録局）への申請</strong>が必要になることも</li>
        </ul>
        <p className="mt-4 text-sm font-semibold text-amber-900">→ 書類の取得からDFAアポスティーユまで、一括で代行します。</p>
      </section>

      <FeatureList
        heading="こんな方に選ばれています"
        items={[
          {
            icon: <Users className="w-4 h-4" />,
            title: '国際結婚・配偶者ビザの手続き中の方',
            description: '日本の市区町村役場やフィリピン大使館への提出に、DFAアポスティーユ付きPSA出生証明書が必要です。書類取得とアポスティーユを一括で手配します。',
          },
          {
            icon: <Baby className="w-4 h-4" />,
            title: '帰化申請を進めている方',
            description: '法務局への帰化申請では、フィリピン人配偶者のPSA出生証明書が求められます。提出先の要件を確認した上で手配します。',
          },
          {
            icon: <Clock className="w-4 h-4" />,
            title: '提出期限が迫っている方',
            description: 'ビザ申請・婚姻届の期限が近い場合でも、まず現状をお知らせください。優先対応の可否を確認してご案内します。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: '「PSAに記録がない」と言われた方',
            description: 'PSAに記録がない場合、LCR（地方民事登録局）への申請が必要です。対応経験がありますので、まずご相談ください。',
          },
        ]}
      />

      <CtaBox
        title="「PSAに記録がない」場合も相談できます"
        description="LCR申請・遅延登録など、複雑なケースにも対応しています。まず状況をお知らせください。"
        buttonText="無料で相談する"
        href="#contact"
        variant="primary"
      />

      <FeatureList
        heading="料金に含まれるもの（コミコミ）"
        items={[
          {
            icon: <Baby className="w-4 h-4" />,
            title: 'PSA出生証明書取得',
            description: 'フィリピン統計局（PSA）への申請・取得を代行。現地スタッフが直接手続きします。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'DFAアポスティーユ認証（必要な場合）',
            description: 'フィリピン外務省（DFA）によるアポスティーユ認証を手配。紙の原本で対応します。',
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
        description="PSA取得・DFAアポスティーユ・国際郵送をまとめたコミコミ料金でご案内します。見積もり後の追加請求はありません。"
        buttonText="料金を確認する"
        href="#contact"
        variant="secondary"
      />

      <StepList
        heading="ご依頼の流れ"
        steps={[
          { title: 'フォームで相談（無料）', description: '用途（国際結婚・ビザ申請など）と提出先をお知らせください。24時間以内に返信します。' },
          { title: '必要書類・料金の確認', description: 'アポスティーユが必要かどうかを含め、コミコミ料金をご提示します。' },
          { title: 'フィリピン現地で手配', description: 'PSA取得・DFAアポスティーユを現地スタッフが進めます。' },
          { title: '日本へ郵送・完了', description: '書類が揃い次第、追跡付きでお届けします。目安は約1ヶ月〜。' },
        ]}
      />

      <FaqSection
        items={[
          { q: '料金はいくらですか？', a: 'PSA取得・DFAアポスティーユ（必要な場合）・国際郵送をまとめたコミコミ料金です。無料相談後に正確な金額をご提示します。' },
          { q: 'PSAに記録がない場合はどうなりますか？', a: 'LCR（地方民事登録局）への申請が必要になります。対応経験がありますので、まずご相談ください。追加費用が発生する場合は事前にご説明します。' },
          { q: '出生証明書とアポスティーユ、両方必要ですか？', a: '日本の提出先では通常、PSA出生証明書＋DFAアポスティーユの両方が必要です。提出先を確認した上でご案内します。' },
          { q: 'いつ届きますか？', a: '目安は約1ヶ月〜です。PSA発行に2〜3週間、DFAアポスティーユに1〜2週間、郵送に3〜5営業日かかります。' },
        ]}
        ctaTitle="まずは状況をお聞かせください"
        ctaButton="無料相談フォームへ"
      />
    </PageLayout>
  );
}
