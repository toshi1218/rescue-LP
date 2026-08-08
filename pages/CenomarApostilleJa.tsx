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
import { SEO_YEAR_MONTH_JA } from '../lib/seoDate';
import { JA_PRICING } from '../lib/pricing';

export default function CenomarApostilleJa() {
  useMeta(
    `CENOMARのDFAアポスティーユ、代行取得できます【${SEO_YEAR_MONTH_JA}】日本語だけでOK`,
    'CENOMARのe-Certificate＋DFA e-Apostilleをオンラインで代行取得。電子版1通39,800円から。PSA SECPA紙原本が必要な場合も対応。',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'CENOMARアポスティーユ代行' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'CENOMARのDFAアポスティーユ取得代行',
        description: 'CENOMARのe-CertificateとDFA e-Apostilleをオンラインで代行取得。PSA SECPA紙原本が必要な場合も対応。日本語で相談可能。',
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
          price: String(JA_PRICING.digitalSingle),
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: String(JA_PRICING.digitalSingle),
            priceCurrency: 'JPY',
            description: 'CENOMAR e-Certificate・DFA e-Apostille込み（税込・電子納品）',
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
                text: '受理条件は提出先ごとに異なります。e-ApostilleのPDFで受理されるか、PSA SECPA紙原本も必要かを事前に確認してください。PSA民事登録書類への認証は現在e-Apostilleで発行されます。',
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
        badges={['PSA取得からe-Apostilleまで一括', '電子版39,800円〜', '紙原本も追加可能']}
        ctaText="無料相談はこちら"
        ctaHref="#contact"
        lastUpdated="2026年3月1日"
      />

      <SummaryBlock
        conclusion="CENOMARのDFAアポスティーユを、フィリピンに行かずに取得できます。"
        points={[
          'PSA CENOMAR取得からDFAアポスティーユまで一括代行',
          'e-Certificate＋e-Apostilleを電子納品。必要に応じてPSA SECPA紙原本も追加',
          '国際結婚・配偶者ビザ・帰化申請、どの用途にも対応',
          '電子版は通常2〜4週間、紙原本付きは通常3〜6週間',
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
                <strong>受理条件は提出先ごとに異なります。</strong>e-ApostilleのPDFで受理されるか、PSA SECPA紙原本も必要かを、申請前に提出先へご確認ください。
              </p>
              <p className="text-sm text-amber-800 leading-relaxed">
                当社は<strong>e-Certificate＋e-Apostille</strong>を標準に、必要な方へPSA SECPA紙原本の手配・発送も行います。
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
              { step: '1', title: 'PSAへオンライン申請', detail: '本人確認と申請情報を確認し、CENOMARのe-Certificateを申請します。' },
              { step: '2', title: 'DFA e-Apostilleを申請', detail: '同じオンライン手続きの中でDFA e-Apostilleを申請し、認証状況を管理します。' },
              { step: '3', title: '電子版を納品', detail: 'e-Certificateとe-Apostilleを電子データでお渡しします。紙原本を追加した場合は追跡付きで発送します。' },
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
            { icon: FileCheck, title: '配偶者ビザ・在留資格の申請中', description: 'e-Apostilleと紙原本のどちらが必要かを整理して手配します。', accent: 'blue' },
            { icon: Globe, title: '日本の提出先への提出', description: '提出先へ確認する項目をご案内し、必要な形式で手配します。', accent: 'green' },
          ]}
        />
      </SectionDivider>

      <CtaBox
        title="CENOMAR＋DFAアポスティーユを一括でご依頼いただけます"
        description="電子版で受理されるか、PSA SECPA紙原本も必要か分からない段階からご相談いただけます。"
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
              title: 'DFA e-Apostille（電子認証）',
              description: 'フィリピン外務省（DFA）によるe-Apostilleをオンラインで手配します。',
            },
          ]}
        />

        <div className="overflow-hidden rounded-xl border border-gray-100 shadow-sm text-sm mt-8 mb-8">
          <div className="grid grid-cols-[2fr_1fr] bg-secondary text-white">
            <div className="px-4 py-3 font-bold">内容</div>
            <div className="px-4 py-3 font-bold text-center">料金（税込）</div>
          </div>
          {[
            { label: 'CENOMAR（PSA）取得', price: '込み' },
            { label: 'DFAアポスティーユ認証', price: '込み' },
            { label: '電子版納品', price: '込み' },
            { label: '合計（e-Apostille込み）', price: '39,800円〜', bold: true },
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
