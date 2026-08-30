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

export default function CenomarApostilleJa() {
  useMeta(
    `CENOMARのDFAアポスティーユ、代行取得できます【${SEO_YEAR_MONTH_JA}】日本語だけでOK`,
    'CENOMARのPSA e-CertificateとDFA e-Apostilleをオンラインで代行取得。2026年3月16日以降の電子発行に対応し、SECPA紙原本は提出先が必要とする場合のみ別途手配します。',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'CENOMARアポスティーユ代行' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'CENOMARのDFAアポスティーユ取得代行',
        description: 'CENOMARのPSA e-CertificateとDFA e-Apostilleをオンラインで代行取得。SECPA紙原本は提出先が必要とする場合のみ別途手配。',
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
                text: '提出先によって異なります。2026年3月16日以降、PSA書類のApostilleはe-Certificateに対するe-Apostilleとして電子発行され、物理Apostilleは発行されません。e-ApostilleはPDFのまま提出・転送し、SECPA紙原本は必要な場合のみ別途用意します。',
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
        badges={['PSA取得からe-Apostilleまで一括', '2026年電子発行対応', '費用は事前にご案内']}
        ctaText="無料相談はこちら"
        ctaHref="#contact"
        lastUpdated="2026年8月30日"
      />

      <SummaryBlock
        conclusion="CENOMARのDFAアポスティーユを、フィリピンに行かずに取得できます。"
        points={[
          'PSA CENOMAR取得からDFAアポスティーユまで一括代行',
          'PSA e-ApostilleはPDFで納品し、SECPA紙原本は必要な場合のみ別途手配',
          '国際結婚・配偶者ビザ・帰化申請、どの用途にも対応',
          '電子書類はメール納品、紙原本が必要な場合のみ日本へ郵送',
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
                2026年3月16日より、ハーグ条約加盟国向けのPSA書類はe-Certificateに対するDFA e-Apostilleとして電子発行され、物理Apostilleは発行されなくなりました。
              </p>
              <p className="text-sm text-amber-800 leading-relaxed mb-2">
                DFA公式FAQでは、e-Apostilleを印刷して紙で提出すると電子文書としての効力を失うため、PDFのまま提出先へ転送するよう案内されています。
              </p>
              <p className="text-sm text-amber-800 leading-relaxed">
                アポスティーユ自体が必要か、e-Certificateで足りるか、SECPA紙原本も必要かは提出先ごとに確認します。紙原本が必要な場合でも、e-Apostilleとは別書類として手配します。
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
              { step: '1', title: '提出先の要件を確認', detail: 'CENOMAR、DFA認証、SECPA紙原本のどれが必要かを確認します。アポスティーユは一律必須ではありません。' },
              { step: '2', title: 'PSA e-Certificateとe-Apostilleをオンライン申請', detail: '認証が必要な場合はPSAHelplineの統合申請を利用し、CENOMAR e-CertificateとDFA e-Apostilleをオンラインで手配します。' },
              { step: '3', title: '電子PDFを納品', detail: 'e-Certificateとe-ApostilleをPDFで納品します。SECPA紙原本を求められた場合のみ、別途取得・配送します。' },
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
          <p className="text-xs text-gray-500">※ e-ApostilleはPDFのまま提出・転送します。印刷物は電子原本として扱われません。</p>
        </section>

        <IconCardGrid
          heading="こんな方に選ばれています"
          columns={3}
          cards={[
            { icon: Heart, title: '国際結婚の手続き中', description: '市区町村や大使館の現行チェックリストを確認して必要な形式だけ手配します。', accent: 'gold' },
            { icon: FileCheck, title: '配偶者ビザ・在留資格の申請中', description: '入管が認証を指定した場合はDFA e-Apostilleを電子で手配します。', accent: 'blue' },
            { icon: Globe, title: '日本の提出先への提出', description: 'e-Certificate・e-Apostille・SECPA紙原本の必要な組み合わせを提出先ごとに確認します。', accent: 'green' },
          ]}
        />
      </SectionDivider>

      <CtaBox
        title="CENOMAR＋DFAアポスティーユを一括でご依頼いただけます"
        description="提出先を確認し、e-Certificate・e-Apostille・SECPA紙原本のうち必要なものだけ手配します。"
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
              description: '提出先が認証を求める場合、PSA e-Certificateに対するe-Apostilleをオンラインで手配します。',
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
            { item: '必要な場合のSECPA紙原本', self: '別途申請', agency: true },
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
          { title: '必要書類・料金の確認', description: '認証や紙原本の要否を確認し、必要な範囲で料金をご提示します。' },
          { title: 'オンラインで手配', description: 'PSA e-Certificateと、必要な場合のDFA e-Apostilleをオンライン申請します。' },
          { title: '納品', description: '電子書類はPDFで納品し、SECPA紙原本が必要な場合のみ追跡付きで郵送します。' },
        ]}
      />

      <FaqSection
        items={[
          { q: '料金はいくらですか？', a: 'PSA取得・DFAアポスティーユをまとめた料金です。（DHL国際郵送費は実費別途となります）無料相談後に正確な金額をご提示します。' },
          { q: 'CENOMARとDFAアポスティーユ、まとめて依頼できますか？', a: 'はい。PSA CENOMAR取得からDFAアポスティーユ認証まで一括で代行します。個別に依頼するより手間がかからず、全体の目安はおおむね1ヶ月半です。' },
          { q: '日本の入管・役所には紙の原本でないと提出できませんか？', a: '提出先によって異なります。PSA e-Apostilleは電子PDFで発行され、印刷すると電子文書としての効力を失います。SECPA紙原本が必要な場合はe-Apostilleとは別に手配します。' },
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
