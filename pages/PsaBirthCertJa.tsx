import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SectionDivider from '../components/SectionDivider';
import ComparisonTable from '../components/ComparisonTable';
import IconCardGrid from '../components/IconCardGrid';
import { Baby, AlertTriangle, Clock, FileCheck, Globe, Users, CheckCircle } from 'lucide-react';
import SummaryBlock from '../components/SummaryBlock';
import RelatedArticles from '../components/RelatedArticles';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR_MONTH_JA } from '../lib/seoDate';

export default function PsaBirthCertJa() {
  useMeta(
    `フィリピン出生証明書の取り寄せ代行【${SEO_YEAR_MONTH_JA}】PSA・アポスティーユ込み`,
    'フィリピン出生証明書（PSA）を日本から代行取得。PSA電子書類、必要な場合のDFA e-Apostille、SECPA紙原本を提出先に合わせて手配します。',
    'https://ph-document.com/ja/psa-shussei-shomeisho/',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'PSA出生証明書取得代行' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'PSA出生証明書取得代行',
        description: 'フィリピンのPSA出生証明書を日本語だけで代行取得。必要な場合のDFA e-ApostilleとSECPA紙原本にも対応。',
        url: 'https://ph-document.com/ja/psa-shussei-shomeisho/',
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
              name: 'PSA出生証明書とは何ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'PSA出生証明書（PSA Birth Certificate）は、フィリピン統計局（Philippine Statistics Authority）が発行する公的な出生記録書類です。氏名・生年月日・出生地・両親の情報が記載されており、国際結婚・配偶者ビザ申請・帰化申請などの手続きで身元証明として提出を求められます。',
              },
            },
            {
              '@type': 'Question',
              name: '料金はいくらですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'PSA出生証明書取得＋DFAアポスティーユ認証をまとめて税抜50,000円〜です。DHL国際郵送費は実費別途となります。無料相談後に正確な金額をご提示します。',
              },
            },
            {
              '@type': 'Question',
              name: 'PSAに記録がない場合はどうなりますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'LCR（地方民事登録局）への申請が必要になります。対応経験がありますので、まずご相談ください。追加費用が発生する場合は事前にご説明します。',
              },
            },
            {
              '@type': 'Question',
              name: '出生証明書とアポスティーユ、両方必要ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '一律ではありません。提出先へPSA出生証明書、DFA認証、SECPA紙原本のどれが必要か確認します。必要な場合、PSA書類のApostilleは電子発行です。',
              },
            },
            {
              '@type': 'Question',
              name: 'いつ届きますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '必要な組み合わせにより異なります。PSA e-Certificateとe-Apostilleは電子手続き、SECPA紙原本が必要な場合は別途取得・国際配送となるため、提出期限を確認して個別にご案内します。',
              },
            },
            {
              '@type': 'Question',
              name: 'PSA出生証明書とCENOMAR（独身証明書）は違うものですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '異なる書類です。PSA出生証明書は生年月日・出生地・両親の情報を証明するもので、CENOMARは婚姻記録がないこと（独身）を証明するものです。手続きによっては両方必要になる場合があります。',
              },
            },
            {
              '@type': 'Question',
              name: 'フィリピンに行かなくても取得できますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'はい、フィリピン渡航不要で対応しています。日本からメールやフォームでご依頼いただければ、現地スタッフが申請・取得・DFAアポスティーユ・発送まで代行します。',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="フィリピン出生証明書の取り寄せ代行"
        subtitle="フィリピンPSA出生証明書を日本から取り寄せ。国際結婚、配偶者ビザ準備、帰化申請など、提出先に合わせて必要な形式を確認しながら進めます。"
        badges={['日本語だけで取り寄せOK', '必要な場合のみe-Apostille', '渡航不要']}
        ctaText="無料相談はこちら"
        ctaHref="#contact"
        lastUpdated="2026年8月30日"
      />

      <div className="max-w-2xl mx-auto px-4">
        <SectionDivider variant="beige">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            フィリピン出生証明書（PSA）とは・取り寄せの基本
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            PSA出生証明書（PSA Birth Certificate）は、フィリピン統計局（Philippine Statistics Authority, PSA）が発行する公的な出生記録書類です。氏名・生年月日・出生地・両親の情報が記載されており、国際結婚の手続きや配偶者ビザ申請、帰化申請など、身元証明が必要な場面で提出を求められます。
          </p>
          <dl className="grid grid-cols-2 gap-3 mt-4 text-sm">
            <div className="bg-white rounded-lg border border-gray-100 p-3">
              <dt className="text-gray-500 text-xs mb-1">正式名称</dt>
              <dd className="font-medium text-gray-800">PSA Birth Certificate</dd>
            </div>
            <div className="bg-white rounded-lg border border-gray-100 p-3">
              <dt className="text-gray-500 text-xs mb-1">発行機関</dt>
              <dd className="font-medium text-gray-800">Philippine Statistics Authority（PSA）</dd>
            </div>
            <div className="bg-white rounded-lg border border-gray-100 p-3">
              <dt className="text-gray-500 text-xs mb-1">代行料金（税抜）</dt>
              <dd className="font-medium text-gray-800">50,000円〜（DFAアポスティーユ込み）</dd>
              <dd className="text-gray-400 text-xs mt-1">※緊急の場合は追加料金を頂くことがあります</dd>
            </div>
            <div className="bg-white rounded-lg border border-gray-100 p-3">
              <dt className="text-gray-500 text-xs mb-1">所要期間の目安</dt>
              <dd className="font-medium text-gray-800">約1か月〜1か月半</dd>
            </div>
          </dl>
          <p className="text-gray-700 leading-relaxed mt-4 text-sm">
            PSA出生証明書には<strong>e-Certificate（電子）</strong>と<strong>SECPA紙原本</strong>があります。2026年3月16日以降、必要なApostilleはe-Certificateに対するe-Apostilleとして電子発行されます。認証や紙原本の要否は提出先ごとに確認します。
          </p>
        </SectionDivider>

        <SectionDivider variant="white">
          <h2 className="text-xl font-bold text-gray-900 mb-4">フィリピン出生証明書 取り寄せ代行料金の内訳</h2>
          <div className="overflow-hidden rounded-xl border border-gray-100 shadow-sm text-sm">
            <div className="grid grid-cols-[2fr_1fr] bg-secondary text-white">
              <div className="px-4 py-3 font-bold">内容</div>
              <div className="px-4 py-3 font-bold text-center">料金（税抜）</div>
            </div>
            {[
              { label: 'PSA出生証明書取得', price: '込み' },
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
          <p className="text-xs text-gray-500 mt-2">※緊急対応の場合は追加料金が発生することがあります。正確な金額は無料相談後にご提示します。</p>
        </SectionDivider>
      </div>

      <SummaryBlock
        conclusion="PSA出生証明書を、電子版・紙原本・必要な場合のe-Apostilleから提出先に合う形で取り寄せできます。"
        points={[
          'PSA出生証明書と必要な場合のDFA e-Apostilleを代行',
          'SECPA紙原本は提出先が必要とする場合のみ別途手配',
          '「PSAに記録がない」など、通常の取り寄せが難しい複雑なケースも相談可能',
          '国際結婚・配偶者ビザ・帰化申請、どの用途の取り寄せにも対応',
        ]}
        ctaText="無料で相談する"
      />

      {/* 訴求ブロック */}
      <section className="mb-12 rounded-2xl bg-amber-50 border border-amber-200 p-6">
        <div className="flex items-start gap-3 mb-4">
          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <h2 className="text-base font-bold text-amber-900">PSAオンライン申請で「届いた書類が使えない」ケースがあります</h2>
        </div>
        <ul className="space-y-2 text-sm text-amber-800 leading-relaxed">
          <li className="flex items-start gap-2"><span className="text-amber-500 font-bold flex-shrink-0">✕</span>PSA e-Apostilleは<strong>電子PDFのみ</strong>。印刷物は電子原本として扱われません</li>
          <li className="flex items-start gap-2"><span className="text-amber-500 font-bold flex-shrink-0">✕</span>SECPA紙原本が必要かは提出先ごとに異なり、e-Apostilleとは別に確認が必要</li>
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
            description: '市区町村や大使館の現行チェックリストを確認し、必要なPSA書類と認証だけを手配します。',
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
        trustNote="着手金50%・書類取得・DHL配送準備完了後に残金50%お支払い・着手前キャンセル無料"
      />

      <FeatureList
        heading="料金に含まれるもの"
        items={[
          {
            icon: <Baby className="w-4 h-4" />,
            title: 'PSA出生証明書取得',
            description: 'フィリピン統計局（PSA）への申請・取得を代行。現地スタッフが直接手続きします。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: '必要な場合のDFA e-Apostille',
            description: '提出先が認証を求める場合、PSA e-Certificateに対するe-Apostilleを電子で手配します。',
          },
        ]}
      />

      <StepList
        heading="ご依頼の流れ"
        steps={[
          { title: 'フォームで相談（無料）', description: '用途（国際結婚・ビザ申請など）と提出先をお知らせください。24時間以内に返信します。' },
          { title: '必要書類・料金の確認', description: '認証や紙原本の要否を確認し、必要な範囲で料金をご提示します。' },
          { title: 'オンラインで手配', description: 'PSA e-Certificateと、必要な場合のDFA e-Apostilleをオンライン申請します。' },
          { title: '納品', description: '電子書類はPDFで納品し、SECPA紙原本が必要な場合のみ追跡付きで郵送します。' },
        ]}
      />

      <IconCardGrid
        heading="こんな方に向いています"
        columns={2}
        cards={[
          { icon: Users, title: "国際結婚・配偶者ビザの手続き中", description: "市区町村や入管の現行要件に合わせ、必要な形式だけ手配します", accent: 'teal' },
          { icon: Baby, title: "帰化申請を進めている", description: "法務局への帰化申請で必要な書類をまとめて手配します", accent: 'blue' },
          { icon: Clock, title: "提出期限が近い", description: "現状をお知らせください。優先対応の可否を確認してご案内します", accent: 'gold' },
          { icon: FileCheck, title: "「PSAに記録がない」と言われた", description: "LCR申請など複雑なケースにも対応経験があります", accent: 'purple' },
        ]}
      />

      <div className="max-w-2xl mx-auto px-4">
        <ComparisonTable
          heading="自分で手配 vs IGRS代行"
          rows={[
            { item: "日本語でのやりとり", self: "英語が必要", agency: true },
            { item: "PSA申請・取得", self: "現地窓口または代理人が必要", agency: true },
            { item: "DFAアポスティーユ手配", self: false, agency: true },
            { item: "「PSAに記録がない」ケース対応", self: "自己調査が必要", agency: true },
            { item: "進捗レポート", self: "—", agency: true },
            { item: "DHL国際発送手配", self: false, agency: true },
          ]}
        />
      </div>

      <FaqSection
        items={[
          { q: 'PSA出生証明書とは何ですか？', a: 'PSA出生証明書（PSA Birth Certificate）は、フィリピン統計局（PSA）が発行する公的な出生記録書類です。氏名・生年月日・出生地・両親の情報が記載されており、国際結婚・配偶者ビザ申請・帰化申請などで身元証明として提出を求められます。' },
          { q: '料金はいくらですか？', a: 'PSA出生証明書取得＋DFAアポスティーユ認証をまとめて税抜50,000円〜です。DHL国際郵送費は実費別途となります。無料相談後に正確な金額をご提示します。' },
          { q: 'PSAに記録がない場合はどうなりますか？', a: 'LCR（地方民事登録局）への申請が必要になります。対応経験がありますので、まずご相談ください。追加費用が発生する場合は事前にご説明します。' },
          { q: '出生証明書とアポスティーユ、両方必要ですか？', a: '一律ではありません。提出先へPSA出生証明書、DFA認証、SECPA紙原本のどれが必要か確認します。必要な場合、PSA書類のApostilleは電子発行です。' },
          { q: 'いつ届きますか？', a: '必要な組み合わせにより異なります。PSA e-Certificateとe-Apostilleは電子手続き、SECPA紙原本が必要な場合は別途取得・国際配送となるため、提出期限を確認して個別にご案内します。' },
          { q: 'PSA出生証明書とCENOMARは違いますか？', a: '異なる書類です。PSA出生証明書は生年月日・出生地・両親の情報を証明するもので、CENOMARは婚姻記録がないこと（独身）を証明するものです。手続きによっては両方必要になる場合があります。' },
          { q: 'フィリピンに行かなくても取得できますか？', a: 'はい、フィリピン渡航不要で対応しています。日本からメールやフォームでご依頼いただければ、現地スタッフが申請・取得・DFAアポスティーユ・発送まで代行します。' },
        ]}
        ctaTitle="まずは状況をお聞かせください"
        ctaButton="無料相談フォームへ"
      />
      <RelatedArticles
        items={[
          { href: '/ja/psa-late-registration/', title: 'PSA記録エラー対応', description: '記録がない・名前が違うときの整理に役立ちます。' },
          { href: '/ja/psa-shussei-cost/', title: 'PSA出生証明書の料金', description: '費用の目安と内訳を確認できます。' },
          { href: '/ja/cenomar-vs-marriage-certificate/', title: 'CENOMARと婚姻証明書の違い', description: '婚姻関連の書類を取り違えないための確認ページです。' },
          { href: '/ja/apostille-ryokin/', title: 'アポスティーユの料金・費用', description: 'PSA出生証明書にアポスティーユを付ける際の料金内訳。' },
          { href: '/ja/apostille-shori-kikan/', title: 'アポスティーユの処理期間', description: 'PSA e-Apostilleの電子申請と現行処理期間を解説。' },
          { href: '/ja/kika-shinsei-guide/', title: '帰化申請の書類代行', description: '帰化申請ではPSA出生証明書とNBI Clearanceを法務局要件で揃えます。' },
          { href: '/ja/document-checklist-by-visa/', title: 'ビザ別チェックリスト', description: 'どのビザで何が必要かをまとめて確認できます。' },
        ]}
      />
    </PageLayout>
  );
}
