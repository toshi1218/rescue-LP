import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { Heart, AlertTriangle, Clock, FileCheck, Globe, Users } from 'lucide-react';
import SummaryBlock from '../components/SummaryBlock';

export default function SpouseVisaJa() {
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: '配偶者ビザ 書類代行' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: '配偶者ビザ申請 フィリピン書類取得代行',
        description: '配偶者ビザ（在留資格「日本人の配偶者等」）申請に必要なPSA婚姻証明書・出生証明書・CENOMAR・DFAアポスティーユを一括代行。入管要件に合わせた形式で手配。',
        url: 'https://ph-document.com/ja/haigusha-visa',
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
              name: '配偶者ビザ申請に必要な書類は何ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'PSA婚姻証明書・PSA出生証明書・DFAアポスティーユが基本です。申請の状況によって異なるため、まずご相談ください。',
              },
            },
            {
              '@type': 'Question',
              name: '入管は電子アポスティーユ（e-Apostille）を受け付けますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '入国管理局では紙のアポスティーユ原本が求められるケースがほとんどです。提出先を確認した上でご案内します。',
              },
            },
            {
              '@type': 'Question',
              name: '書類の有効期限はありますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'PSA書類・CENOMARは発行から6ヶ月〜1年が有効期限の目安です。申請タイミングに合わせた取得時期をご案内します。',
              },
            },
            {
              '@type': 'Question',
              name: '更新・変更申請でも書類が必要ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '更新・変更申請でも書類の再取得が必要なケースがあります。現在お持ちの書類の有効期限を確認した上でご案内します。',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="配偶者ビザのフィリピン書類、一括で手配します"
        badges={['日本語だけでOK', '入管要件に合わせて手配', 'アポスティーユ込み']}
        ctaText="無料相談はこちら"
        ctaHref="#contact"
      />

      <SummaryBlock
        conclusion="配偶者ビザ（在留資格「日本人の配偶者等」）に必要なフィリピン書類を、日本語だけで取り寄せできます。"
        points={[
          '入管が求める「紙の原本＋DFAアポスティーユ」形式で手配',
          'PSA婚姻証明書・PSA出生証明書・CENOMARをまとめて代行',
          '有効期限に合わせた取得タイミングもアドバイス',
          '新規申請・更新・変更、どの申請にも対応',
        ]}
        ctaText="無料で相談する（24時間以内に返信）"
      />

      {/* 訴求ブロック */}
      <section className="mb-12 rounded-2xl bg-amber-50 border border-amber-200 p-6">
        <div className="flex items-start gap-3 mb-4">
          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <h2 className="text-base font-bold text-amber-900">配偶者ビザの書類準備、こんな落とし穴があります</h2>
        </div>
        <ul className="space-y-2 text-sm text-amber-800 leading-relaxed">
          <li className="flex items-start gap-2"><span className="text-amber-500 font-bold flex-shrink-0">✕</span>入国管理局は<strong>電子アポスティーユ（e-Apostille）を受け付けないケースが多い</strong>。紙の原本が必要</li>
          <li className="flex items-start gap-2"><span className="text-amber-500 font-bold flex-shrink-0">✕</span>書類の<strong>有効期限（発行から6ヶ月〜1年）</strong>を過ぎると再取得が必要</li>
          <li className="flex items-start gap-2"><span className="text-amber-500 font-bold flex-shrink-0">✕</span>PSA書類・CENOMAR・NBI——<strong>どれが必要かは申請の状況によって異なる</strong></li>
        </ul>
        <p className="mt-4 text-sm font-semibold text-amber-900">→ 入管の要件に合わせた形式で、必要書類を一括手配します。</p>
      </section>

      <FeatureList
        heading="こんな方に選ばれています"
        items={[
          {
            icon: <Heart className="w-4 h-4" />,
            title: '在留資格「日本人の配偶者等」を申請する方',
            description: 'PSA婚姻証明書・PSA出生証明書・DFAアポスティーユが必要です。入管の要件に合わせた形式で手配します。',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: '配偶者ビザの更新・変更を予定している方',
            description: '更新・変更申請でも書類の再取得が必要なケースがあります。有効期限を確認した上で、必要なものだけを手配します。',
          },
          {
            icon: <Clock className="w-4 h-4" />,
            title: '申請期限が迫っている方',
            description: 'ビザの期限が近い場合でも、まず現状をお知らせください。優先対応の可否を確認してご案内します。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: '何が必要かわからない方',
            description: '初めての申請・更新・変更、それぞれで必要書類が異なります。状況をお伝えいただければ、必要なものを整理してご案内します。',
          },
        ]}
      />

      <CtaBox
        title="入管要件に合わせた書類を手配します"
        description="「電子か紙か」「何が必要か」——入管の要件を確認した上で、正しい形式で手配します。まずご相談ください。"
        buttonText="無料で相談する"
        href="#contact"
        variant="primary"
        trustNote="着手金50%・書類写し確認後に残金50%お支払い・着手前キャンセル無料"
      />

      <FeatureList
        heading="料金に含まれるもの"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'PSA書類・CENOMAR取得',
            description: 'フィリピン統計局（PSA）への申請・取得を代行。婚姻証明書・出生証明書・CENOMARに対応します。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'DFAアポスティーユ認証',
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
        description="書類取得・DFAアポスティーユ・国際郵送をまとめた料金でご案内します。見積もり後の追加請求はありません。"
        buttonText="料金を確認する"
        href="#contact"
        variant="secondary"
        trustNote="日本語のみでOK・匿名相談可・返信24時間以内"
      />

      <StepList
        heading="ご依頼の流れ"
        steps={[
          { title: 'フォームで相談（無料）', description: '申請の種類（新規・更新・変更）と必要書類をお知らせください。入管の要件を確認してご案内します。' },
          { title: '必要書類・料金の確認', description: '料金をご提示します。ご依頼時に着手金50%、書類写し確認後に残金50%をお支払いいただきます。' },
          { title: 'フィリピン現地で手配', description: 'PSA取得・DFAアポスティーユを現地スタッフが進めます。進捗は随時ご報告します。' },
          { title: '日本へ郵送・完了', description: '書類が揃い次第、追跡付きでお届けします。目安は約1ヶ月〜。' },
        ]}
      />

      <FaqSection
        items={[
          { q: '配偶者ビザ申請に必要な書類は何ですか？', a: 'PSA婚姻証明書・PSA出生証明書・DFAアポスティーユが基本です。申請の状況によって異なるため、まずご相談ください。' },
          { q: '入管は電子アポスティーユ（e-Apostille）を受け付けますか？', a: '入国管理局では紙のアポスティーユ原本が求められるケースがほとんどです。提出先を確認した上でご案内します。' },
          { q: '書類の有効期限はありますか？', a: 'PSA書類・CENOMARは発行から6ヶ月〜1年が有効期限の目安です。申請タイミングに合わせた取得時期をご案内します。' },
          { q: '更新・変更申請でも書類が必要ですか？', a: '更新・変更申請でも書類の再取得が必要なケースがあります。現在お持ちの書類の有効期限を確認した上でご案内します。' },
        ]}
        ctaTitle="まずは状況をお聞かせください"
        ctaButton="無料相談フォームへ"
      />
    </PageLayout>
  );
}
