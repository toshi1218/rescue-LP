import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import RelatedLinks from '../components/RelatedLinks';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { Heart, FileCheck, Globe, Clock, CheckCircle, AlertTriangle, Users, Stamp } from 'lucide-react';
import SummaryBlock from '../components/SummaryBlock';
import SectionDivider from '../components/SectionDivider';
import IconCardGrid from '../components/IconCardGrid';
import ComparisonTable from '../components/ComparisonTable';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR } from '../lib/seoDate';

export default function CenomarApostilleJa() {
  useMeta(
    `CENOMARのDFAアポスティーユ、代行取得できます【${SEO_YEAR}年版】日本語だけでOK`,
    'CENOMARのDFAアポスティーユはフィリピン現地での手続きが必要です。当センターが代行取得し、紙の原本アポスティーユで日本へ郵送。国際結婚・配偶者ビザ・帰化申請に対応。無料相談。',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'CENOMARアポスティーユ代行' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'CENOMARのDFAアポスティーユ取得代行',
        description: 'CENOMARのDFAアポスティーユをフィリピンに行かずに代行取得。国際結婚・配偶者ビザ・帰化申請に必要な紙の原本アポスティーユで対応。日本語だけで完結。',
        url: 'https://ph-document.com/ja/cenomar-apostille/',
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
            description: 'CENOMAR取得・DFAアポスティーユ込み（税抜）。DHL国際郵送費は実費別途',
          },
        },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: '料金はいくらですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'PSA取得・DFAアポスティーユをまとめた料金です。（DHL国際郵送費は実費別途となります）無料相談後に正確な金額をご提示します。',
              },
            },
            {
              '@type': 'Question',
              name: 'CENOMARとDFAアポスティーユ、まとめて依頼できますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'はい。PSA CENOMAR取得からDFAアポスティーユ認証まで一括で代行します。個別に依頼するより手間がかからず、発行から認証まで一貫したスケジュールで手配できます。全体の目安はおおむね1ヶ月半です。',
              },
            },
            {
              '@type': 'Question',
              name: '日本の入管・役所には紙の原本でないと提出できませんか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '原則として紙の原本＋DFAアポスティーユが必要です。PSAのオンライン電子版（e-Apostille）は日本の入管や市区町村役場では原則として受け付けられません。当社は紙の原本形式で対応します。',
              },
            },
            {
              '@type': 'Question',
              name: 'フィリピン人の方が日本在住でも取得できますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'はい。フィリピン人の方がフィリピンにいなくても、現地スタッフが代理で手続きします。委任状等の書類が必要な場合は事前にご案内します。',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="CENOMAR アポスティーユ取得代行"
        badges={['PSA取得からアポスティーユまで一括', '紙の原本形式で対応', '費用は事前にご案内']}
        ctaText="無料相談はこちら"
        ctaHref="#contact"
        lastUpdated="2026年3月1日"
      />

      <SummaryBlock
        conclusion="CENOMARのDFAアポスティーユを、フィリピンに行かずに取得できます。"
        points={[
          'PSA CENOMAR取得からDFAアポスティーユまで一括代行',
          '日本の提出先が求める「紙の原本アポスティーユ」形式で対応',
          '国際結婚・配偶者ビザ・帰化申請、どの用途にも対応',
          '約1ヶ月〜で日本のご住所へ郵送',
        ]}
        ctaText="無料で相談する"
      />

      <div className="max-w-2xl mx-auto px-4 my-6">
        <div className="rounded-xl border-2 border-amber-400 bg-amber-50 p-5">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-amber-900 text-sm mb-2">【2026年3月16日以降】PSAのe-certificate移行について</p>
              <p className="text-sm text-amber-800 leading-relaxed mb-2">
                2026年3月16日より、PSAはデジタル証明書（e-certificate）とDFA電子アポスティーユ（e-Apostille）の発行に完全移行しました。
              </p>
              <p className="text-sm text-amber-800 leading-relaxed mb-2">
                <strong>日本の市区町村役場・法務局・出入国在留管理庁は、e-Apostilleのプリントアウトを原則として受け付けません。</strong>
                日本側にQRコードでオンライン検証する内部マニュアルが整備されておらず、「原本のコピー」として不受理になるリスクがあります。
              </p>
              <p className="text-sm text-amber-800 leading-relaxed">
                当社は<strong>紙の原本＋DFAアポスティーユ</strong>で対応しています。国際結婚・配偶者ビザ・帰化申請でお困りの方はご相談ください。
              </p>
            </div>
          </div>
        </div>
      </div>

      <SectionDivider variant="beige">
        {/* 固有コンテンツ：アポスティーユとは・DFAの手順 */}
        <section className="mb-10 rounded-2xl bg-white border border-gray-200 p-6">
          <h2 className="text-base font-bold text-gray-900 mb-3">アポスティーユ条約とCENOMAR</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            アポスティーユ（Apostille）とは、1961年のハーグ条約（外国公文書の認証を不要とする条約）に基づく証明です。条約加盟国の公的機関が発行した書類に対して、その国の権限ある機関が付与する認証スタンプのことを指します。
          </p>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            フィリピン（条約加盟国）が発行したCENOMARを日本（同じく条約加盟国）で使用する場合、DFA（フィリピン外務省）によるアポスティーユが付いていれば、日本の入管・役所・裁判所などに公文書として提出できます。従来の「領事認証」に代わる簡便な認証方式です。
          </p>

          <h3 className="text-sm font-bold text-gray-800 mb-3">DFAアポスティーユの取得手順</h3>
          <div className="space-y-3 mb-4">
            {[
              { step: '1', title: 'PSAからCENOMARを取得', detail: 'フィリピン統計局（PSA）に申請し、SECPAセキュリティペーパーに印刷されたCENOMARを受け取ります。' },
              { step: '2', title: 'DFAにアポスティーユを申請', detail: 'フィリピン外務省（DFA）のAuthentication Division にCENOMARを持参（または郵送）し、アポスティーユを申請します。DFAのオフィスはManilaとcebu等にあります。' },
              { step: '3', title: 'アポスティーユ付きCENOMARを受け取り', detail: 'DFAがCENOMARの裏面または別紙にアポスティーユ証明を付与します。これで日本の公的機関に提出できる形式になります。' },
            ].map(({ step, title, detail }) => (
              <div key={step} className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/15 text-primary font-bold text-xs flex items-center justify-center mt-0.5">{step}</span>
                <div>
                  <p className="text-sm font-bold text-gray-800 mb-0.5">{title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{detail}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500">※ DFAアポスティーユの処理期間は通常1〜2週間（Regular processing）です。Expedited処理（追加料金）を利用すると短縮できる場合があります。</p>
        </section>

        <IconCardGrid
          heading="こんな方に選ばれています"
          columns={3}
          cards={[
            { icon: Heart, title: '国際結婚の手続き中', description: '日本の市区町村役場やフィリピン大使館への提出に、DFAアポスティーユ付きCENOMARが必要です。', accent: 'gold' },
            { icon: FileCheck, title: '配偶者ビザ・在留資格の申請中', description: '入国管理局が求める形式（紙のアポスティーユ原本）で手配します。', accent: 'blue' },
            { icon: Globe, title: '日本の提出先への提出', description: '日本の入管・役所・大使館への提出では、原則として紙の原本＋DFAアポスティーユが必要です。', accent: 'green' },
          ]}
        />
      </SectionDivider>

      <CtaBox
        title="CENOMAR＋DFAアポスティーユを一括でご依頼いただけます"
        description="日本の入管・役所・大使館への提出では、原則として紙の原本＋DFAアポスティーユが必要です。まずはご相談ください。"
        buttonText="無料で相談する"
        href="#contact"
        variant="primary"
        trustNote="着手金50%・書類取得・DHL配送準備完了後に残金50%お支払い・着手前キャンセル無料"
      />

      <SectionDivider variant="blue">
        <FeatureList
          heading="料金に含まれるもの"
          items={[
            {
              icon: <FileCheck className="w-4 h-4" />,
              title: 'PSA CENOMAR取得',
              description: 'フィリピン統計局（PSA）へのCENOMAR申請・取得を代行します。',
            },
            {
              icon: <FileCheck className="w-4 h-4" />,
              title: 'DFAアポスティーユ認証（※日本の手続きではほぼ必須です）',
              description: 'フィリピン外務省（DFA）によるアポスティーユ認証を手配します。紙の原本で対応。',
            },
          ]}
        />

        <div className="overflow-hidden rounded-xl border border-gray-100 shadow-sm text-sm mt-8 mb-8">
          <div className="grid grid-cols-[2fr_1fr] bg-secondary text-white">
            <div className="px-4 py-3 font-bold">内容</div>
            <div className="px-4 py-3 font-bold text-center">料金（税抜）</div>
          </div>
          {[
            { label: 'CENOMAR（PSA）取得', price: '込み' },
            { label: 'DFAアポスティーユ認証', price: '込み' },
            { label: 'DHL国際配送（追跡付き）', price: '実費別途' },
            { label: '合計（DFAアポスティーユ込み）', price: '50,000円〜', bold: true },
          ].map((row, i) => (
            <div key={row.label} className={`grid grid-cols-[2fr_1fr] border-b border-gray-100 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'}`}>
              <div className={`px-4 py-3 text-gray-700 ${row.bold ? 'font-bold' : ''}`}>{row.label}</div>
              <div className={`px-4 py-3 text-center ${row.bold ? 'font-bold text-primary' : 'text-gray-600'}`}>{row.price}</div>
            </div>
          ))}
        </div>

        <ComparisonTable
          heading="自分で手配 vs IGRS代行"
          rows={[
            { item: 'PSAへのCENOMAR申請', self: false, agency: true },
            { item: 'DFAアポスティーユ手配', self: false, agency: true },
            { item: '紙の原本形式での対応', self: '要現地渡航', agency: true },
            { item: '日本語でのサポート', self: false, agency: true },
            { item: '提出先に合う形式の確認', self: '要調査', agency: true },
          ]}
        />
      </SectionDivider>

      <StepList
        heading="ご依頼の流れ"
        variant="visual"
        steps={[
          { title: 'フォームで相談', description: '用途（国際結婚・ビザ申請など）と提出先をお知らせください。' },
          { title: '必要書類・料金の確認', description: '必要書類（原則DFAアポスティーユ込み）と料金をご提示します。' },
          { title: 'フィリピン現地で手配', description: 'PSA取得→DFAアポスティーユ認証を現地スタッフが進めます。' },
          { title: '日本へ郵送', description: '書類が揃い次第、追跡付きでお届けします。目安はおおむね1ヶ月半。' },
        ]}
      />

      <FaqSection
        items={[
          { q: '料金はいくらですか？', a: 'PSA取得・DFAアポスティーユをまとめた料金です。（DHL国際郵送費は実費別途となります）無料相談後に正確な金額をご提示します。' },
          { q: 'CENOMARとDFAアポスティーユ、まとめて依頼できますか？', a: 'はい。PSA CENOMAR取得からDFAアポスティーユ認証まで一括で代行します。個別に依頼するより手間がかからず、全体の目安はおおむね1ヶ月半です。' },
          { q: '日本の入管・役所には紙の原本でないと提出できませんか？', a: '原則として紙の原本＋DFAアポスティーユが必要です。PSAのオンライン電子版（e-Apostille）は日本の入管や市区町村役場では原則として受け付けられません。当社は紙の原本形式で対応します。' },
          { q: 'フィリピン人の方が日本在住でも取得できますか？', a: 'はい。フィリピン人の方がフィリピンにいなくても、現地スタッフが代理で手続きします。委任状等の書類が必要な場合は事前にご案内します。' },
        ]}
        ctaTitle="まずは状況をお聞かせください"
        ctaButton="無料相談フォームへ"
      />

      <RelatedLinks links={[
        { path: '/ja/cenomar/', label: 'CENOMAR（独身証明書）取得代行' },
        { path: '/ja/cenomar-koyukigen/', label: 'CENOMARの有効期限と取得タイミング' },
        { path: '/ja/apostille/', label: 'DFAアポスティーユ代行（PSA全書類対応）' },
        { path: '/ja/kokusai-kekkon-guide/', label: '国際結婚の書類一括代行' },
      ]} />
    </PageLayout>
  );
}
