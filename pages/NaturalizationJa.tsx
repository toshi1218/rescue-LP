import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { FileCheck, Globe, Users, Heart } from 'lucide-react';
import SummaryBlock from '../components/SummaryBlock';

export default function NaturalizationJa() {
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: '帰化申請 フィリピン書類代行' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: '帰化申請 フィリピン書類取得代行',
        description: '帰化申請に必要なPSA出生証明書・NBI Clearance・DFAアポスティーユを一括代行。法務局の要件に合わせた形式で手配。司法書士・行政書士からの依頼も対応。',
        url: 'https://ph-document.com/ja/kika-shinsei-guide',
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
        title="帰化申請のフィリピン書類、まとめて手配します"
        badges={['法務局要件に対応', '書士への書類提供可', 'アポスティーユ込み']}
        ctaText="無料相談はこちら"
        ctaHref="#contact"
      />

      <SummaryBlock
        conclusion="帰化申請で法務局が求めるPSA証明書・NBIクリアランスをアポスティーユ付きで一括取り寄せ。申請期限に間に合うよう優先対応します。"
        points={[
          'PSA出生証明書・婚姻証明書・CENOMARをまとめて代行',
          'DFAアポスティーユ付きで法務局の要件に対応',
          '司法書士・行政書士の先生からのご依頼も対応',
          '必要書類が不明な場合も、無料相談で整理します',
        ]}
        ctaText="無料で相談する（24時間以内に返信）"
      />

      {/* 固有コンテンツ：帰化申請で必要なフィリピン書類 */}
      <section className="mb-10 rounded-2xl bg-white border border-gray-200 p-6">
        <h2 className="text-base font-bold text-gray-900 mb-4">帰化申請で法務局が求めるフィリピン書類</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          帰化申請では、法務局の担当官が必要書類を指定します。フィリピン国籍の方が日本に帰化する場合、以下のようなフィリピン側書類を求められることが多いです（状況によって異なります）。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-2 border border-gray-200 font-bold text-gray-700">書類</th>
                <th className="text-left p-2 border border-gray-200 font-bold text-gray-700">用途</th>
                <th className="text-left p-2 border border-gray-200 font-bold text-gray-700">形式</th>
              </tr>
            </thead>
            <tbody>
              {[
                { doc: 'PSA出生証明書（Birth Certificate）', use: '本人の出生・国籍の確認', format: 'DFAアポスティーユ付き原本' },
                { doc: 'PSA婚姻証明書（Certificate of Marriage）', use: '既婚者の場合、婚姻歴の確認', format: 'DFAアポスティーユ付き原本' },
                { doc: 'CENOMAR（独身証明書）', use: '未婚者の場合、婚姻歴なしの確認', format: 'DFAアポスティーユ付き原本' },
                { doc: 'NBI Clearance', use: '犯罪歴の確認', format: 'DFAアポスティーユ付きが求められる場合あり' },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-2 border border-gray-200 text-gray-700 font-medium">{row.doc}</td>
                  <td className="p-2 border border-gray-200 text-gray-600">{row.use}</td>
                  <td className="p-2 border border-gray-200 text-gray-500">{row.format}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mb-4">※ 担当官によって求める書類・形式が異なります。必ず法務局の担当官の指示に従ってください。</p>

        <h3 className="text-sm font-bold text-gray-800 mb-3">帰化申請の書類でよくある差し戻し理由</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          {[
            'DFAアポスティーユが付いていない（原本だけでは不受理）',
            '書類の発行日が古すぎる（法務局の指示する期間内のものが必要）',
            '名前のスペルが日本側の書類と一致していない',
            '翻訳文に翻訳者の署名・住所の記載がない',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-amber-500 font-bold flex-shrink-0">！</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

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

      <CtaBox
        title="追加費用の後出しはありません"
        description="必要書類・DFAアポスティーユをまとめた料金でご案内します。（DHL国際郵送費は実費別途となります）"
        buttonText="料金を確認する"
        href="#contact"
        variant="secondary"
        trustNote="日本語のみでOK・匿名相談可・返信24時間以内"
      />

      <StepList
        heading="ご依頼の流れ"
        steps={[
          { title: 'フォームで相談', description: '帰化申請の状況・必要書類・提出期限をお知らせください。' },
          { title: '必要書類・料金の確認', description: '必要書類をリストアップし、料金をご提示します。' },
          { title: 'フィリピン現地で手配', description: 'PSA取得・DFAアポスティーユを現地スタッフが進めます。' },
          { title: '日本へ郵送', description: '書類が揃い次第、追跡付きでお届けします。目安はおおむね1ヶ月半。' },
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

      {/* 関連ページ */}
      <nav className="mt-10 pt-8 border-t border-gray-100">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">関連ページ</p>
        <ul className="space-y-2 text-sm">
          <li><Link to="/ja/cenomar/" className="text-secondary hover:underline">→ CENOMAR（独身証明書）取得代行</Link></li>
          <li><Link to="/ja/psa-shussei-shomeisho/" className="text-secondary hover:underline">→ PSA出生証明書の取得代行</Link></li>
          <li><Link to="/ja/nbi-clearance/" className="text-secondary hover:underline">→ NBI Clearance（無犯罪証明書）取得代行</Link></li>
          <li><Link to="/ja/gyouseishoshi-to-shorui-shuttoku/" className="text-secondary hover:underline">→ 行政書士の仕事と書類取得サービスの違い</Link></li>
        </ul>
      </nav>
    </PageLayout>
  );
}
