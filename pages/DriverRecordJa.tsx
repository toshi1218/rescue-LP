import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import RelatedLinks from '../components/RelatedLinks';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { FileCheck, Globe, Users, Car } from 'lucide-react';
import SummaryBlock from '../components/SummaryBlock';
import SectionDivider from '../components/SectionDivider';
import IconCardGrid from '../components/IconCardGrid';
import ComparisonTable from '../components/ComparisonTable';
import { FileText, Stamp, CheckCircle, Clock, AlertTriangle, Building } from 'lucide-react';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR_MONTH_JA } from '../lib/seoDate';

export default function DriverRecordJa() {
  useMeta(
    `LTO運転経歴証明書代行【${SEO_YEAR_MONTH_JA}】外免切替・企業採用`,
    'フィリピン免許の外免切替に必要なLTO運転経歴証明書を代行取得。DFAアポスティーユ・オリジナルレシート込みで都道府県の免許センターへの提出形式に対応。複数名まとめ依頼可。無料相談。',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'LTO運転経歴証明書取得代行' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'LTO運転経歴証明書取得代行',
        description: 'フィリピンのLTO運転経歴証明書をDFAアポスティーユ付きで代行取得。外免切替・フィリピン人採用に対応。複数名まとめ依頼も可能。フィリピン渡航不要。',
        url: 'https://ph-document.com/ja/driver-record/',
        provider: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/ja/',
        },
        areaServed: { '@type': 'Country', name: 'JP' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'JPY',
          price: '99000',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '99000',
            priceCurrency: 'JPY',
            description: 'LTO書類取得・DFAアポスティーユ込み（税込・DHL国際送料込み）',
          },
        },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: '外免切替に必要な書類は何ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '一般的にLTO運転経歴証明書（DFAアポスティーユ付き）・公式レシートが必要です。都道府県によって追加書類が必要な場合もあります。無料相談で確認します。',
              },
            },
            {
              '@type': 'Question',
              name: '料金はいくらですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'LTO取得・DFAアポスティーユ・DHL国際送料をすべて含めて99,000円（税込）〜です。無料相談後に正確な金額をご提示します。',
              },
            },
            {
              '@type': 'Question',
              name: '複数名分まとめて依頼できますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'はい、可能です。人数と状況をお知らせいただければ、まとめて手配します。',
              },
            },
            {
              '@type': 'Question',
              name: '都道府県ごとに必要書類が異なると聞きましたが、確認してもらえますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'はい。都道府県の運転免許センターによって求める書類や書式が異なります。無料相談で提出先の都道府県をお知らせいただければ、その要件に合わせた書類を手配します。',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="LTO運転経歴証明書 取得代行"
        badges={['複数名対応', 'OR・アポスティーユ込み', '外免切替専門対応']}
        ctaText="無料相談はこちら"
        ctaHref="#contact"
        lastUpdated="2026年8月23日"
      />

      <SummaryBlock
        conclusion="LTO運転経歴証明書を、日本語だけで取り寄せできます。外免切替の書類準備を一括代行します。"
        points={[
          '現地スタッフがフィリピン陸運局（LTO）に直接申請・取得',
          '提出先の都道府県に合わせた正規書類で手配',
          'DFAアポスティーユが必要な場合も一括対応',
          '複数名分のまとめ依頼にも対応',
        ]}
        ctaText="無料で相談する"
      />

      {/* 固有コンテンツ：LTO運転経歴証明書とは */}
      <section className="mb-10 rounded-2xl bg-white border border-gray-200 p-6">
        <h2 className="text-base font-bold text-gray-900 mb-3">LTO運転経歴証明書（Driver's Record）とは</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          LTO運転経歴証明書は、フィリピン陸運局（Land Transportation Office）が発行する運転免許の履歴証明書です。免許の種類・取得日・更新履歴・違反歴などが記載されており、外国免許を日本の免許に切り替える「外国免許切替（外免切替）」に必要な書類の一つです。
        </p>

        <h3 className="text-sm font-bold text-gray-800 mb-3">外免切替で試験場に提出する書類</h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-2 border border-gray-200 font-bold text-gray-700">書類</th>
                <th className="text-left p-2 border border-gray-200 font-bold text-gray-700">取得先</th>
                <th className="text-left p-2 border border-gray-200 font-bold text-gray-700">注意点</th>
              </tr>
            </thead>
            <tbody>
              {[
                { doc: 'LTO運転経歴証明書', from: 'LTO（フィリピン陸運局）', note: 'DFAアポスティーユ付きが必要。都道府県によって要求が異なる場合あり。' },
                { doc: 'オリジナルレシート（OR）', from: 'LTO', note: '免許更新時の支払い領収書。試験場によって求められる場合がある。' },
                { doc: 'フィリピン免許証（現物）', from: '本人保有', note: '有効期限内のもの。切れている場合は要確認。' },
                { doc: 'パスポート', from: '本人保有', note: '来日時のもの（フィリピン滞在歴の証明として）' },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-2 border border-gray-200 text-gray-700 font-medium">{row.doc}</td>
                  <td className="p-2 border border-gray-200 text-gray-600">{row.from}</td>
                  <td className="p-2 border border-gray-200 text-gray-500">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500">※ 必要書類・手続きは各都道府県の運転免許センターによって異なります。事前に提出先に確認してください。</p>
      </section>

      <FeatureList
        heading="こんな方へ"
        items={[
          {
            icon: <Car className="w-4 h-4" />,
            title: '外免切替のためにLTO書類が必要',
            description: '日本の都道府県運転免許センターへの外免切替申請に必要なLTO運転経歴証明書を代行取得します。',
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
        trustNote="着手金50%・書類取得・DHL配送準備完了後に残金50%お支払い・着手前キャンセル無料"
      />

      <SectionDivider variant="beige">
        <FeatureList
          heading="料金に含まれるもの"
          items={[
            {
              icon: <FileCheck className="w-4 h-4" />,
              title: 'LTO運転経歴証明書取得',
              description: 'フィリピン陸運局（LTO）への運転経歴証明書申請・取得を代行します。',
            },
            {
              icon: <FileCheck className="w-4 h-4" />,
              title: '提出先が指定するDFAアポスティーユ認証',
              description: '都道府県警察・免許センターの最新案内で指定された場合に、LTO書類の物理アポスティーユを手配します。',
            },
            {
              icon: <FileCheck className="w-4 h-4" />,
              title: 'オリジナルレシート（OR）',
              description: '試験場提出に必要なLTOオリジナルレシート（OR）を取得します。',
            },
          ]}
        />

        <IconCardGrid
          heading="外免切替の流れ・利用シーン"
          columns={4}
          cards={[
            { icon: Car, title: '外免切替申請', description: 'フィリピン免許から日本の運転免許への切替に必要な書類を代行取得', accent: 'blue' },
            { icon: FileText, title: 'LTO運転経歴証明書', description: '免許種別・取得日・更新歴・違反歴が記載された公式書類', accent: 'gold' },
            { icon: Stamp, title: 'DFAアポスティーユ', description: '日本の公安委員会・試験場への提出に必要な外務省認証', accent: 'teal' },
            { icon: CheckCircle, title: 'オリジナルレシート（OR）', description: 'LTO免許更新時の公式領収書。試験場提出で求められることがある', accent: 'green' },
            { icon: Clock, title: '提出期限に合わせて手配', description: '免許取得・雇用開始など、期限から逆算してスケジュールをご案内', accent: 'purple' },
            { icon: Globe, title: 'フィリピン渡航不要', description: '日本にいながら日本語だけで手配が完結します', accent: 'blue' },
            { icon: AlertTriangle, title: '都道府県別の要件確認', description: '提出先の都道府県ごとに必要書類・書式が異なります。事前確認込み', accent: 'red' },
            { icon: Building, title: '企業・複数名対応', description: 'フィリピン人スタッフの採用・就労に伴う書類まとめ依頼も可能', accent: 'gold' },
          ]}
        />
      </SectionDivider>

      <SectionDivider variant="blue">
        <StepList
          heading="ご依頼の流れ"
          variant="visual"
          steps={[
            { title: 'フォームで相談', description: '提出先の都道府県・対象者の人数・提出期限をお知らせください。' },
            { title: '必要書類・料金の確認', description: '必要書類をリストアップし、料金をご提示します。' },
            { title: 'フィリピン現地で手配', description: 'LTO取得・DFAアポスティーユを現地スタッフが進めます。' },
            { title: '日本へ郵送', description: '書類が揃い次第、追跡付きでお届けします。目安はおおむね1ヶ月半。' },
          ]}
        />
      </SectionDivider>

      <ComparisonTable
        heading="LTO運転経歴証明書取得"
        rows={[
          { item: 'LTOへの申請手配', self: false, agency: true },
          { item: 'DFAアポスティーユ', self: false, agency: true },
          { item: '外免切替の要件確認', self: '要調査', agency: true },
          { item: '日本語サポート', self: '英語が必要', agency: true },
          { item: '公安委員会向け形式', self: '—', agency: true },
        ]}
      />

      <FaqSection
        items={[
          { q: '外免切替に必要な書類は何ですか？', a: '一般的にLTO運転経歴証明書（DFAアポスティーユ付き）・公式レシートが必要です。都道府県によって追加書類が必要な場合もあります。無料相談で確認します。' },
          { q: '料金はいくらですか？', a: 'LTO取得・DFAアポスティーユ・OR・DHL国際送料をすべて含めて99,000円（税込）〜です。無料相談後に正確な金額をご提示します。' },
          { q: '複数名分まとめて依頼できますか？', a: 'はい、可能です。人数と状況をお知らせいただければ、まとめて手配します。' },
          { q: '都道府県ごとに必要書類が異なると聞きましたが、確認してもらえますか？', a: 'はい。都道府県の運転免許センターによって求める書類や書式が異なります。無料相談で提出先の都道府県をお知らせいただければ、その要件に合わせた書類を手配します。' },
        ]}
        ctaTitle="まずは状況をお聞かせください"
        ctaButton="無料相談フォームへ"
      />

      <RelatedLinks links={[
        { path: '/ja/gaimen-kirikae-guide/', label: 'フィリピン免許の外免切替ガイド（必要書類と手続きの流れ）' },
        { path: '/ja/apostille/', label: 'DFAアポスティーユ代行' },
        { path: '/ja/ryokin/', label: '料金一覧' },
      ]} />
    </PageLayout>
  );
}
