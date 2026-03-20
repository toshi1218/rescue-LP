import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SectionDivider from '../components/SectionDivider';
import { Baby, AlertTriangle, Clock, FileCheck, Globe, Users, CheckCircle } from 'lucide-react';
import SummaryBlock from '../components/SummaryBlock';
import RelatedArticles from '../components/RelatedArticles';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR_MONTH_JA } from '../lib/seoDate';

export default function PsaBirthCertJa() {
  useMeta(
    `PSA出生証明書 取得代行【${SEO_YEAR_MONTH_JA}】料金・期間・アポスティーユ込み対応`,
    'PSA出生証明書をDFAアポスティーユ付きで代行取得。料金は税抜40,000円〜（DHL郵送費別）。国際結婚・配偶者ビザ・帰化申請に対応。日本語のみでOK、渡航不要。',
    'https://ph-document.com/ja/psa-shussei-shomeisho',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'PSA出生証明書取得代行' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'PSA出生証明書取得代行',
        description: 'フィリピンのPSA出生証明書をDFAアポスティーユ付きで日本語だけで代行取得。国際結婚・配偶者ビザ・帰化申請に対応。フィリピン渡航不要、約1ヶ月〜。',
        url: 'https://ph-document.com/ja/psa-shussei-shomeisho',
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
                text: 'PSA出生証明書取得＋DFAアポスティーユ認証をまとめて税抜40,000円〜です。DHL国際郵送費は実費別途となります。無料相談後に正確な金額をご提示します。',
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
                text: '日本の提出先では通常、PSA出生証明書＋DFAアポスティーユの両方が必要です。提出先を確認した上でご案内します。',
              },
            },
            {
              '@type': 'Question',
              name: 'いつ届きますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'おおむね1ヶ月半が目安です。PSA書類の取得に2〜3週間、DFAアポスティーユ取得に約2週間、郵送に約1週間かかります。',
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
        title="出生証明書"
        subtitle="国際結婚、配偶者ビザ準備、帰化申請など、提出先に合わせて必要な形式を確認しながら進めます。"
        badges={['日本語だけでOK', 'アポスティーユ込み対応', '料金']}
        ctaText="無料相談はこちら"
        ctaHref="#contact"
      />

      <div className="max-w-2xl mx-auto px-4">
        <SectionDivider variant="beige">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            PSA出生証明書とは何か
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            PSA出生証明書（PSA Birth Certificate）は、フィリピン統計局（Philippine Statistics Authority, PSA）が発行する公的な出生記録書類です。氏名・生年月日・出生地・両親の情報が記載されており、国際結婚の手続きや配偶者ビザ申請、帰化申請など、身元証明が必要な場面で提出を求められます。
          </p>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 text-sm">
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
              <dd className="font-medium text-gray-800">40,000円〜（DFAアポスティーユ込み）</dd>
            </div>
            <div className="bg-white rounded-lg border border-gray-100 p-3">
              <dt className="text-gray-500 text-xs mb-1">所要期間の目安</dt>
              <dd className="font-medium text-gray-800">約1か月〜1か月半</dd>
            </div>
          </dl>
          <p className="text-gray-700 leading-relaxed mt-4 text-sm">
            PSA出生証明書は<strong>電子認証版（PSAHelplineオンライン）</strong>と<strong>紙の原本</strong>があります。日本の市区町村役場・入管・法務局への提出では、紙の原本＋DFAアポスティーユが求められるケースがほとんどです。
          </p>
        </SectionDivider>
      </div>

      <SummaryBlock
        conclusion="PSA出生証明書（アポスティーユ付き）を、日本語だけで取り寄せできます。"
        points={[
          '現地スタッフがPSA申請・DFAアポスティーユを代行',
          '日本の提出先が求める「紙の原本＋アポスティーユ」形式で対応',
          '「PSAに記録がない」複雑なケースも相談可能',
          '国際結婚・配偶者ビザ・帰化申請、どの用途にも対応',
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
          <li className="flex items-start gap-2"><span className="text-amber-500 font-bold flex-shrink-0">✕</span>PSAオンライン（PSAHelpline）で取得できるのは<strong>電子認証版のみ</strong>。DFAアポスティーユは別途必要</li>
          <li className="flex items-start gap-2"><span className="text-amber-500 font-bold flex-shrink-0">✕</span>日本の提出先では<strong>紙の原本＋DFAアポスティーユ</strong>が求められるケースがほとんど</li>
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
            description: '日本の市区町村役場やフィリピン大使館への提出に、DFAアポスティーユ付きPSA出生証明書が必要です。書類取得とアポスティーユを一括で手配します。',
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
            title: 'DFAアポスティーユ認証（※日本の手続きではほぼ必須です）',
            description: 'フィリピン外務省（DFA）によるアポスティーユ認証を手配。紙の原本で対応します。',
          },
        ]}
      />

      <StepList
        heading="ご依頼の流れ"
        steps={[
          { title: 'フォームで相談（無料）', description: '用途（国際結婚・ビザ申請など）と提出先をお知らせください。24時間以内に返信します。' },
          { title: '必要書類・料金の確認', description: '必要書類（原則DFAアポスティーユ込み）と料金をご提示します。' },
          { title: 'フィリピン現地で手配', description: 'PSA取得・DFAアポスティーユを現地スタッフが進めます。' },
          { title: '日本へ郵送・完了', description: '書類が揃い次第、追跡付きでお届けします。目安はおおむね1ヶ月半。' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'PSA出生証明書とは何ですか？', a: 'PSA出生証明書（PSA Birth Certificate）は、フィリピン統計局（PSA）が発行する公的な出生記録書類です。氏名・生年月日・出生地・両親の情報が記載されており、国際結婚・配偶者ビザ申請・帰化申請などで身元証明として提出を求められます。' },
          { q: '料金はいくらですか？', a: 'PSA出生証明書取得＋DFAアポスティーユ認証をまとめて税抜40,000円〜です。DHL国際郵送費は実費別途となります。無料相談後に正確な金額をご提示します。' },
          { q: 'PSAに記録がない場合はどうなりますか？', a: 'LCR（地方民事登録局）への申請が必要になります。対応経験がありますので、まずご相談ください。追加費用が発生する場合は事前にご説明します。' },
          { q: '出生証明書とアポスティーユ、両方必要ですか？', a: '日本の提出先では通常、PSA出生証明書＋DFAアポスティーユの両方が必要です。提出先を確認した上でご案内します。' },
          { q: 'いつ届きますか？', a: 'おおむね1ヶ月半が目安です。PSA書類の取得に2〜3週間、DFAアポスティーユ取得に約2週間、郵送に約1週間かかります。' },
          { q: 'PSA出生証明書とCENOMARは違いますか？', a: '異なる書類です。PSA出生証明書は生年月日・出生地・両親の情報を証明するもので、CENOMARは婚姻記録がないこと（独身）を証明するものです。手続きによっては両方必要になる場合があります。' },
          { q: 'フィリピンに行かなくても取得できますか？', a: 'はい、フィリピン渡航不要で対応しています。日本からメールやフォームでご依頼いただければ、現地スタッフが申請・取得・DFAアポスティーユ・発送まで代行します。' },
        ]}
        ctaTitle="まずは状況をお聞かせください"
        ctaButton="無料相談フォームへ"
      />
      <RelatedArticles
        items={[
          { href: '/ja/psa-late-registration', title: 'PSA記録エラー対応', description: '記録がない・名前が違うときの整理に役立ちます。' },
          { href: '/ja/psa-shussei-cost', title: 'PSA出生証明書の料金', description: '費用の目安と内訳を確認できます。' },
          { href: '/ja/cenomar-vs-marriage-certificate', title: 'CENOMARと婚姻証明書の違い', description: '婚姻関連の書類を取り違えないための確認ページです。' },
          { href: '/ja/document-checklist-by-visa', title: 'ビザ別チェックリスト', description: 'どのビザで何が必要かをまとめて確認できます。' },
        ]}
      />
    </PageLayout>
  );
}
