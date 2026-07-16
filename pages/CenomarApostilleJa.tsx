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

export default function CenomarApostilleJa() {
  useMeta(
    'CENOMARのDFAアポスティーユ、代行取得できます【2026年3月】日本語だけでOK',
    'CENOMARのDFA e-Apostille（電子認証）申請を、フィリピンに行かずに日本語で代行。2026年3月以降、PSA民事書類の認証はe-Apostilleに一本化。国際結婚・配偶者ビザ・帰化申請に対応。無料相談。',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'CENOMARアポスティーユ代行' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'CENOMARのDFAアポスティーユ取得代行',
        description: 'CENOMARのDFA e-Apostille（電子認証）申請をフィリピンに行かずに代行。2026年3月以降、PSA民事書類の認証は電子のe-Apostilleに一本化。日本語だけで完結。',
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
            description: 'CENOMARオンライン申請＋DFA e-Apostille（電子認証）申請の代行（税抜）',
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
                text: 'PSAオンライン申請とDFA e-Apostille（電子認証）申請をまとめた料金です。紙のPSA原本が必要な場合の国際配送は実費・要相談です。無料相談後に正確な金額をご提示します。',
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
                text: '日本の入管・市区町村役場は従来、紙の原本を前提に運用してきました。ただし2026年3月以降、DFAの認証はe-Apostille（電子）のみとなり、物理アポスティーユは発行されません。当社はPSAオンライン申請とDFA e-Apostille申請を代行し、提出先がe-Apostilleを受理するかの確認や、紙のPSA原本（SECPA）の取得方法までご案内します。',
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
        badges={['PSA申請からe-Apostilleまで一括代行', 'e-Apostille（電子認証）対応', '費用は事前にご案内']}
        ctaText="無料相談はこちら"
        ctaHref="#contact"
        lastUpdated="2026年3月1日"
      />

      <SummaryBlock
        conclusion="CENOMARのDFAアポスティーユを、フィリピンに行かずに取得できます。"
        points={[
          'PSA CENOMARのオンライン申請からDFA e-Apostille申請まで一括代行',
          '2026年3月以降、PSA民事書類の認証はe-Apostille（電子）に一本化（物理アポスティーユは発行不可）',
          '国際結婚・配偶者ビザ・帰化申請、どの用途にも対応',
          'e-Apostille（電子）で交付。紙のPSA原本が必要な場合の受け取り方法もご案内',
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
                当社は<strong>PSAオンライン申請とDFA e-Apostille（電子認証）申請</strong>を日本語で代行します。提出先がe-Apostilleを受理するかの確認や、紙のPSA原本（SECPA）が必要な場合の進め方もご案内します。国際結婚・配偶者ビザ・帰化申請でお困りの方はご相談ください。
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
              { step: '1', title: 'PSA CENOMARをオンライン申請', detail: 'フィリピン統計局（PSA）のオンライン申請フォーム入力・本人確認・支払いを日本語で代行します。' },
              { step: '2', title: 'DFA e-Apostille（電子）を申請', detail: 'フィリピン外務省（DFA）のオンライン窓口（apostille.gov.ph）でe-Apostille（電子認証）を申請します。2026年3月以降、PSA民事書類に物理アポスティーユは発行されません。' },
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
            { icon: FileCheck, title: '配偶者ビザ・在留資格の申請中', description: '入国管理局への提出を想定し、PSA原本とDFA e-Apostille（電子）で手配します。', accent: 'blue' },
            { icon: Globe, title: '日本の提出先への提出', description: '日本の入管・役所・大使館は従来、紙の原本を前提に運用してきました。2026年3月以降、DFAの認証はe-Apostille（電子）のみです。提出先の受理形式を事前に確認します。', accent: 'green' },
          ]}
        />
      </SectionDivider>

      <CtaBox
        title="CENOMAR＋DFAアポスティーユを一括でご依頼いただけます"
        description="日本の入管・役所・大使館は従来、紙の原本を前提に運用してきました。2026年3月以降、DFAの認証はe-Apostille（電子）のみです。提出先の受理形式を事前に確認します。まずはご相談ください。"
        buttonText="無料で相談する"
        href="#contact"
        variant="primary"
        trustNote="着手金50%・書類発行の確認後に残金50%お支払い・着手前キャンセル無料"
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
              description: 'フィリピン外務省（DFA）のe-Apostille（電子認証）申請を代行します。物理アポスティーユは2026年3月以降発行されません。',
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
            { label: '紙のPSA原本（SECPA）が必要な場合の国際配送', price: '実費・要相談' },
            { label: '合計（DFA e-Apostille〈電子〉込み）', price: '30,000円〜', bold: true },
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
            { item: 'DFA e-Apostille（電子）の申請・受領', self: '要現地渡航・英語対応', agency: true },
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
          { title: 'オンライン申請を代行', description: 'PSA・DFA e-Apostilleのオンライン申請の入力・支払いを日本語で進めます。' },
          { title: 'e-Apostille交付・完了', description: 'DFA e-Apostille（電子）を受領します。紙のPSA原本が必要な場合の受け取り方法もご案内します。' },
        ]}
      />

      <FaqSection
        items={[
          { q: '料金はいくらですか？', a: 'PSAオンライン申請とDFA e-Apostille（電子認証）申請をまとめた料金です。紙のPSA原本が必要な場合の国際配送は実費・要相談です。無料相談後に正確な金額をご提示します。' },
          { q: 'CENOMARとDFAアポスティーユ、まとめて依頼できますか？', a: 'はい。PSA CENOMAR取得からDFAアポスティーユ認証まで一括で代行します。個別に依頼するより手間がかからず、全体の目安はおおむね1ヶ月半です。' },
          { q: '日本の入管・役所には紙の原本でないと提出できませんか？', a: '日本の入管・市区町村役場は従来、紙の原本を前提に運用してきました。ただし2026年3月以降、DFAの認証はe-Apostille（電子）のみとなり、物理アポスティーユは発行されません。当社はPSAオンライン申請とDFA e-Apostille申請を代行し、提出先がe-Apostilleを受理するかの確認や、紙のPSA原本（SECPA）の取得方法までご案内します。' },
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
