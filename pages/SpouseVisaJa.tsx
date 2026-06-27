import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { Heart, AlertTriangle, Clock, FileCheck, Globe, Users } from 'lucide-react';
import SummaryBlock from '../components/SummaryBlock';
import SectionDivider from '../components/SectionDivider';
import { useMeta } from '../lib/useMeta';

export default function SpouseVisaJa() {
  useMeta(
    `配偶者ビザ フィリピン書類 取得代行【2026年版】PSA・CENOMAR・NBI・アポスティーユ一括`,
    '配偶者ビザに必要なPSA書類・CENOMAR・NBI・アポスティーユを一括代行取得。¥50,000〜（税込）。納期4〜6週間。渡航不要・日本語対応。無料相談。',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: '配偶者ビザ 書類代行' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: '配偶者ビザ申請 フィリピン書類取得代行',
        description: '配偶者ビザ（在留資格「日本人の配偶者等」）申請に必要なPSA婚姻証明書・出生証明書・CENOMAR・DFAアポスティーユを一括代行。入管要件に合わせた形式で手配。',
        url: 'https://ph-document.com/ja/haigusha-visa/',
        provider: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/ja/',
        },
        areaServed: { '@type': 'Country', name: 'JP' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'JPY',
          price: '50000',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '50000',
            priceCurrency: 'JPY',
            description: 'PSA取得・DFAアポスティーユ込み（税抜）。DHL国際郵送費は実費別途',
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
              name: 'フィリピン人の方が日本在住でも書類取得を依頼できますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'はい。フィリピン人の方がフィリピンにいなくても、現地スタッフが代理で手続きします。委任状等の書類が必要な場合は事前にご案内します。',
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
        title="配偶者ビザ"
        subtitle="PSA婚姻証明書、PSA出生証明書など、日本での申請準備に使うフィリピン書類を、必要に応じて整理してご案内します。"
        badges={['日本語だけでOK', '入管要件に合わせて手配', 'アポスティーユ込み']}
        ctaText="必要書類を確認する"
        ctaHref="#contact"
        lastUpdated="2026年3月1日"
      />

      <SummaryBlock
        conclusion="配偶者ビザ（在留資格「日本人の配偶者等」）に必要なフィリピン書類を、日本語だけで取り寄せできます。"
        points={[
          '入管が求める「紙の原本＋DFAアポスティーユ」形式で手配',
          'PSA婚姻証明書・PSA出生証明書・CENOMARをまとめて代行',
          '有効期限に合わせた取得タイミングもアドバイス',
          '新規申請・更新・変更、どの申請にも対応',
        ]}
        ctaText="無料で相談する"
      />

      <div className="max-w-2xl mx-auto px-4">
        <SectionDivider variant="beige">
          <h2 className="text-xl font-bold text-gray-900 mb-3">料金・期間の目安</h2>
          <dl className="grid grid-cols-2 gap-3 text-sm">
            <div className="bg-white rounded-lg border border-gray-100 p-3">
              <dt className="text-gray-500 text-xs mb-1">代行料金（税抜）</dt>
              <dd className="font-medium text-gray-800">50,000円〜（DFAアポスティーユ込み）</dd>
              <dd className="text-gray-400 text-xs mt-1">※必要書類の種類によって変わります</dd>
            </div>
            <div className="bg-white rounded-lg border border-gray-100 p-3">
              <dt className="text-gray-500 text-xs mb-1">所要期間の目安</dt>
              <dd className="font-medium text-gray-800">約1か月〜1か月半</dd>
            </div>
            <div className="bg-white rounded-lg border border-gray-100 p-3">
              <dt className="text-gray-500 text-xs mb-1">主な対応書類</dt>
              <dd className="font-medium text-gray-800">PSA婚姻証明書・出生証明書・CENOMAR</dd>
            </div>
            <div className="bg-white rounded-lg border border-gray-100 p-3">
              <dt className="text-gray-500 text-xs mb-1">DHL国際配送</dt>
              <dd className="font-medium text-gray-800">実費別途</dd>
            </div>
          </dl>
          <div className="overflow-hidden rounded-xl border border-gray-100 shadow-sm text-sm mt-4">
            <div className="grid grid-cols-[2fr_1fr] bg-secondary text-white">
              <div className="px-4 py-3 font-bold">内容</div>
              <div className="px-4 py-3 font-bold text-center">料金（税抜）</div>
            </div>
            {[
              { label: 'PSA書類・CENOMAR取得', price: '込み' },
              { label: 'DFAアポスティーユ認証（入管提出用・紙原本）', price: '込み' },
              { label: 'DHL国際配送（追跡付き）', price: '実費別途' },
              { label: '合計（DFAアポスティーユ込み）', price: '50,000円〜', bold: true },
            ].map((row, i) => (
              <div key={row.label} className={`grid grid-cols-[2fr_1fr] border-b border-gray-100 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'}`}>
                <div className={`px-4 py-3 text-gray-700 ${row.bold ? 'font-bold' : ''}`}>{row.label}</div>
                <div className={`px-4 py-3 text-center ${row.bold ? 'font-bold text-primary' : 'text-gray-600'}`}>{row.price}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2">※正確な金額は無料相談後にご提示します。</p>
        </SectionDivider>
      </div>

      {/* できること / できないこと */}
      <section className="mb-6 rounded-2xl bg-gray-50 border border-gray-200 p-5">
        <h2 className="text-sm font-bold text-gray-800 mb-3">このページでできること・できないこと</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-bold text-green-700 mb-2">✓ できること</p>
            <ul className="space-y-1.5">
              <li className="text-sm text-gray-700">フィリピン書類（PSA・CENOMAR）の取得代行</li>
              <li className="text-sm text-gray-700">DFAアポスティーユ（紙の原本）の手配</li>
              <li className="text-sm text-gray-700">必要書類の整理・案内</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-bold text-red-600 mb-2">✕ できないこと</p>
            <ul className="space-y-1.5">
              <li className="text-sm text-gray-500">配偶者ビザの申請代行（行政書士業務）</li>
              <li className="text-sm text-gray-500">入管への申請書類の作成</li>
              <li className="text-sm text-gray-500">ビザ取得の保証</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 訴求ブロック */}
      <section className="mb-12 rounded-2xl bg-amber-50 border border-amber-200 p-6">
        <div className="flex items-start gap-3 mb-4">
          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <h2 className="text-base font-bold text-amber-900">配偶者ビザの書類準備、こんな落とし穴があります</h2>
        </div>
        <ul className="space-y-2 text-sm text-amber-800 leading-relaxed">
          <li className="flex items-start gap-2"><span className="text-amber-500 font-bold flex-shrink-0">✕</span><span>入国管理局への申請では<strong>紙のアポスティーユ原本が必要</strong>です</span></li>
          <li className="flex items-start gap-2"><span className="text-amber-500 font-bold flex-shrink-0">✕</span><span>書類の<strong>有効期限（発行から6ヶ月〜1年）</strong>を過ぎると再取得が必要</span></li>
          <li className="flex items-start gap-2"><span className="text-amber-500 font-bold flex-shrink-0">✕</span><span>PSA書類・CENOMAR・NBI——<strong>どれが必要かは申請の状況によって異なる</strong></span></li>
        </ul>
        <p className="mt-4 text-sm font-semibold text-amber-900">→ 入管の要件に合わせた形式で、必要書類を一括手配します。</p>
        <p className="mt-3 text-xs text-gray-500">
          ※ フィリピン国籍の方がCOEを申請する場合、結核非発病証明書（JPETS）が別途必要になる場合があります（本人が指定Panel Clinicで受診）。
          <Link to="/ja/kekkaku-shomeisho/" className="underline ml-1">詳細はこちら →</Link>
        </p>
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
        description="入管の要件を確認した上で、正しい形式で書類を手配します。まずご相談ください。"
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
            title: 'PSA書類・CENOMAR取得',
            description: 'フィリピン統計局（PSA）への申請・取得を代行。婚姻証明書・出生証明書・CENOMARに対応します。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'DFAアポスティーユ認証（※日本の手続きではほぼ必須です）',
            description: 'フィリピン外務省（DFA）によるアポスティーユ認証を手配。紙の原本で対応します。',
          },
        ]}
      />

      <StepList
        heading="ご依頼の流れ"
        steps={[
          { title: 'フォームで相談（無料）', description: '申請の種類（新規・更新・変更）と必要書類をお知らせください。入管の要件を確認してご案内します。' },
          { title: '必要書類・料金の確認', description: '料金をご提示します。ご依頼時に着手金50%、書類取得・DHL配送準備完了後に残金50%をお支払いいただきます。' },
          { title: 'フィリピン現地で手配', description: 'PSA取得・DFAアポスティーユを現地スタッフが進めます。進捗は随時ご報告します。' },
          { title: '日本へ郵送・完了', description: '書類が揃い次第、追跡付きでお届けします。目安はおおむね1ヶ月半。' },
        ]}
      />

      <FaqSection
        items={[
          { q: '配偶者ビザ申請に必要な書類は何ですか？', a: 'PSA婚姻証明書・PSA出生証明書・DFAアポスティーユが基本です。申請の状況によって異なるため、まずご相談ください。' },
          { q: 'フィリピン人の方が日本在住でも書類取得を依頼できますか？', a: 'はい。フィリピン人の方がフィリピンにいなくても、現地スタッフが代理で手続きします。委任状等の書類が必要な場合は事前にご案内します。' },
          { q: '書類の有効期限はありますか？', a: 'PSA書類・CENOMARは発行から6ヶ月〜1年が有効期限の目安です。申請タイミングに合わせた取得時期をご案内します。' },
          { q: '更新・変更申請でも書類が必要ですか？', a: '更新・変更申請でも書類の再取得が必要なケースがあります。現在お持ちの書類の有効期限を確認した上でご案内します。' },
        ]}
        ctaTitle="まずは状況をお聞かせください"
        ctaButton="無料相談フォームへ"
      />
    </PageLayout>
  );
}
