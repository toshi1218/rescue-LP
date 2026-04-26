import React from 'react';
import { SEO_LAST_UPDATED_JA } from '../lib/seoDate';
import PageLayout from '../components/PageLayout';
import RelatedLinks from '../components/RelatedLinks';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SectionDivider from '../components/SectionDivider';
import IconCardGrid from '../components/IconCardGrid';
import ComparisonTable from '../components/ComparisonTable';
import { FileCheck, Globe, Users, Heart, FileText, Scale, Building, CheckCircle, Clock } from 'lucide-react';
import SummaryBlock from '../components/SummaryBlock';
import { useMeta } from '../lib/useMeta';

export default function NaturalizationJa() {
  useMeta(
    '帰化申請に必要なフィリピン書類【2026年3月】PSA・NBI代行取得',
    '日本帰化申請に必要なPSA出生証明書・NBI Clearanceを代行取得。DFAアポスティーユ付きで日本へ郵送。書類取得から申請準備まで日本語でサポート。無料相談。',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: '帰化申請 フィリピン書類代行' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: '帰化申請 フィリピン書類取得代行',
        description: '帰化申請に必要なPSA出生証明書・NBI Clearance・DFAアポスティーユを一括代行。法務局の要件に合わせた形式で手配。司法書士・行政書士からの依頼も対応。',
        url: 'https://ph-document.com/ja/kika-shinsei-guide/',
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
              name: '帰化申請に必要な書類は何ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '一般的にPSA出生証明書・婚姻証明書（DFAアポスティーユ付き）が必要です。状況によって追加書類が必要な場合もあります。無料相談で確認します。',
              },
            },
            {
              '@type': 'Question',
              name: '料金はいくらですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '必要書類・DFAアポスティーユをまとめた料金です。（DHL国際郵送費は実費別途となります）無料相談後に正確な金額をご提示します。',
              },
            },
            {
              '@type': 'Question',
              name: '司法書士・行政書士の先生から書類取得を依頼することはできますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'はい、対応しています。行政書士の先生がクライアントの帰化申請に必要な書類を取り寄せる場合、当社が現地取得からDFAアポスティーユまで代行し、先生の事務所へ郵送します。',
              },
            },
            {
              '@type': 'Question',
              name: '法務局から書類の発行日に条件がある場合、対応できますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'はい。法務局の担当官から「〇ヶ月以内に発行されたもの」という指定がある場合は、発行日を指定してお申し込みください。取得スケジュールをその条件に合わせて調整します。',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="帰化申請"
        badges={['法務局要件に対応', '書士への書類提供可', 'アポスティーユ込み']}
        ctaText="無料相談はこちら"
        ctaHref="#contact"
        lastUpdated={SEO_LAST_UPDATED_JA}
      />

      <SummaryBlock
        conclusion="帰化申請で法務局が求めるPSA証明書・NBIクリアランスをアポスティーユ付きで一括取り寄せ。申請期限に間に合うよう優先対応します。"
        points={[
          'PSA出生証明書・婚姻証明書・CENOMARをまとめて代行',
          'DFAアポスティーユ付きで法務局の要件に対応',
          '司法書士・行政書士の先生からのご依頼も対応',
          '必要書類が不明な場合も、無料相談で整理します',
        ]}
        ctaText="無料で相談する"
      />

      {/* 固有コンテンツ：帰化申請で必要なフィリピン書類 */}
      <SectionDivider variant="beige">
        <h2 className="text-base font-bold text-gray-900 mb-3">帰化申請で法務局が求めるフィリピン書類</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          法務局の担当官が必要書類を指定します。状況によって異なりますが、以下が多く求められます。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          {[
            { icon: FileText, label: 'PSA出生証明書', note: '出生・国籍の確認', format: 'DFAアポスティーユ付き原本', accent: 'bg-blue-50 border-blue-200' },
            { icon: CheckCircle, label: 'PSA婚姻証明書', note: '既婚者の婚姻歴の確認', format: 'DFAアポスティーユ付き原本', accent: 'bg-green-50 border-green-200' },
            { icon: CheckCircle, label: 'CENOMAR（独身証明書）', note: '未婚者の婚姻歴なしの確認', format: 'DFAアポスティーユ付き原本', accent: 'bg-amber-50 border-amber-200' },
            { icon: FileText, label: 'NBI Clearance', note: '犯罪歴の確認', format: 'アポスティーユ付きが求められる場合あり', accent: 'bg-gray-50 border-gray-200' },
          ].map((item, i) => (
            <div key={i} className={`rounded-xl border p-4 ${item.accent}`}>
              <p className="text-sm font-bold text-gray-800 mb-1">{item.label}</p>
              <p className="text-xs text-gray-600 mb-1">{item.note}</p>
              <p className="text-xs text-gray-500 font-medium">{item.format}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 mb-5">※ 担当官によって書類・形式が異なります。法務局の担当官の指示に従ってください。</p>

        <h3 className="text-sm font-bold text-gray-800 mb-3">よくある差し戻し理由</h3>
        <ul className="space-y-2">
          {[
            { main: 'アポスティーユなし', sub: '原本だけでは不受理になります' },
            { main: '発行日が古い', sub: '法務局が指示する期間内のものが必要です' },
            { main: '名前のスペルが不一致', sub: '日本側の書類と一致している必要があります' },
            { main: '翻訳者情報が不足', sub: '署名・住所の記載が必要です' },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-amber-500 font-bold flex-shrink-0 mt-0.5">！</span>
              <span className="text-sm"><span className="font-bold text-gray-800">{item.main}</span><span className="text-gray-500">　{item.sub}</span></span>
            </li>
          ))}
        </ul>

        <IconCardGrid
          heading="帰化申請に必要な書類の特徴"
          columns={3}
          cards={[
            { icon: FileText, title: 'PSA出生証明書', description: '本人の出生・国籍を証明。アポスティーユ付き原本が法務局の要件。', accent: 'gold' },
            { icon: Scale, title: 'NBI Clearance', description: '無犯罪証明書。フィリピン捜査局が発行。帰化申請で求められることが多い。', accent: 'blue' },
            { icon: Building, title: '法務局への提出', description: '帰化申請は法務局が窓口。担当官の指定する形式・発行日が重要。', accent: 'green' },
            { icon: CheckCircle, title: 'アポスティーユ必須', description: 'DFAアポスティーユなしの原本だけでは不受理になる場合あり。', accent: 'teal' },
            { icon: Clock, title: '発行日の指定あり', description: '法務局から「○ヶ月以内に発行」と指定がある場合は発行日を指定して依頼。', accent: 'red' },
            { icon: Globe, title: '書士からの依頼も対応', description: '行政書士・司法書士の先生からのご依頼も対応。事務所への直送可。', accent: 'purple' },
          ]}
        />
      </SectionDivider>

      <SectionDivider variant="blue">
        <FeatureList
          heading="こんな方へ"
          items={[
            {
              icon: <Heart className="w-4 h-4" />,
              title: '日本への帰化申請を進めている',
              description: '法務局への帰化申請に必要なPSA書類（出生証明書・婚姻証明書・CENOMAR）をまとめて手配します。',
            },
            {
              icon: <Users className="w-4 h-4" />,
              title: '司法書士・行政書士の先生からの依頼',
              description: '専門家の先生からのご依頼も対応しています。必要書類の確認から手配まで一括でサポートします。',
            },
            {
              icon: <FileCheck className="w-4 h-4" />,
              title: '何が必要かわからない',
              description: '帰化申請の必要書類は状況によって異なります。まず相談いただければ、必要なものをリストアップしてご案内します。',
            },
          ]}
        />
      </SectionDivider>

      <CtaBox
        title="まず「何が必要か」を確認しましょう"
        description="帰化申請の必要書類は状況によって異なります。無料相談で整理してから進めます。"
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
            title: 'PSA書類取得（出生証明書・婚姻証明書・CENOMARなど）',
            description: '必要なPSA書類をまとめて取得します。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'DFAアポスティーユ認証（※日本の手続きではほぼ必須です）',
            description: '提出先の要件に応じてDFAアポスティーユ認証を手配します。',
          },
        ]}
      />

      <StepList
        variant="visual"
        heading="ご依頼の流れ"
        steps={[
          { title: 'フォームで相談', description: '帰化申請の状況・必要書類・提出期限をお知らせください。' },
          { title: '必要書類・料金の確認', description: '必要書類をリストアップし、料金をご提示します。' },
          { title: 'フィリピン現地で手配', description: 'PSA取得・DFAアポスティーユを現地スタッフが進めます。' },
          { title: '日本へ郵送', description: '書類が揃い次第、追跡付きでお届けします。目安はおおむね1ヶ月半。' },
        ]}
      />

      <ComparisonTable
        heading="帰化申請書類の準備"
        rows={[
          { item: 'PSA書類の手配', self: false, agency: true },
          { item: 'NBIクリアランス取得', self: false, agency: true },
          { item: 'アポスティーユ認証', self: false, agency: true },
          { item: '法務局提出形式の確認', self: '要調査', agency: true },
          { item: '日本語サポート', self: '英語が必要', agency: true },
        ]}
      />

      <FaqSection
        items={[
          { q: '帰化申請に必要な書類は何ですか？', a: '一般的にPSA出生証明書・婚姻証明書（DFAアポスティーユ付き）が必要です。状況によって追加書類が必要な場合もあります。無料相談で確認します。' },
          { q: '料金はいくらですか？', a: '必要書類・DFAアポスティーユをまとめた料金です。（DHL国際郵送費は実費別途となります）無料相談後に正確な金額をご提示します。' },
          { q: '司法書士・行政書士の先生から書類取得を依頼することはできますか？', a: 'はい、対応しています。行政書士の先生がクライアントの帰化申請に必要な書類を取り寄せる場合、当社が現地取得からDFAアポスティーユまで代行し、先生の事務所へ郵送します。' },
          { q: '法務局から書類の発行日に条件がある場合、対応できますか？', a: 'はい。法務局の担当官から「〇ヶ月以内に発行されたもの」という指定がある場合は、発行日を指定してお申し込みください。取得スケジュールをその条件に合わせて調整します。' },
        ]}
        ctaTitle="まずは状況をお聞かせください"
        ctaButton="無料相談フォームへ"
      />

      <RelatedLinks links={[
        { path: '/ja/cenomar/', label: 'CENOMAR（独身証明書）取得代行' },
        { path: '/ja/psa-shussei-shomeisho/', label: 'PSA出生証明書の取得代行' },
        { path: '/ja/nbi-clearance/', label: 'NBI Clearance（無犯罪証明書）取得代行' },
        { path: '/ja/gyouseishoshi-to-shorui-shuttoku/', label: '行政書士の仕事と書類取得サービスの違い' },
      ]} />
    </PageLayout>
  );
}
