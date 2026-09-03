import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { FileCheck, Globe, AlertTriangle } from 'lucide-react';
import SummaryBlock from '../components/SummaryBlock';
import SectionDivider from '../components/SectionDivider';
import IconCardGrid from '../components/IconCardGrid';
import { FileText, Stamp, CheckCircle, Clock, MessageSquare, Package } from 'lucide-react';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR_MONTH_JA } from '../lib/seoDate';

export default function ApostilleFeeJa() {
  useMeta(
    'DFAアポスティーユの料金【2026年】Regular 100ペソ・Express 200ペソ｜総額の目安',
    'DFAアポスティーユの政府手数料はRegular 100ペソ・Express 200ペソ。PSA民事書類はe-Apostille（電子）のみ。PSA取得費・国際配送を含む総額の考え方を解説。',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'DFAアポスティーユの料金と代行費用' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'DFAアポスティーユ取得代行（料金・費用）',
          description: 'DFAアポスティーユの代行費用を料金で公開。PSA・CENOMAR・NBI別の費用目安も確認可能。後から追加請求なし。無料見積もり受付中。',
          url: 'https://ph-document.com/ja/apostille-ryokin/',
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
              description: 'PSA e-Certificate・DFA e-Apostille・SECPA紙原本・DHL国際郵送を含む税込総額',
            },
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'DFAアポスティーユの政府手数料はいくらですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'DFAの政府手数料は、Regularが1書類あたり100ペソ、Expressが1書類あたり200ペソです。これは認証手数料のみで、PSA書類の取得費・代行手数料・国際配送費は別に必要です。',
              },
            },
            {
              '@type': 'Question',
              name: '他社より高くなりませんか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '他社の「1通○○円〜」は書類取得費用のみの場合があります。当社はアポスティーユ・郵送まで含めた料金なので、最終的な総額で比較してください。',
              },
            },
            {
              '@type': 'Question',
              name: '日本への提出にアポスティーユは必要ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '提出先によって異なります。PSAの出生証明書・婚姻証明書・CENOMARなどの民事書類は、2026年3月以降DFA e-Apostille（電子）のみが発行されます。提出先がe-Apostilleを受理するかを事前に確認してください。',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="DFAアポスティーユの費用"
        badges={['費用は事前にご案内', '総額で事前ご提示', 'DFA公式料金込み']}
        ctaText="無料相談はこちら"
        ctaHref="#contact"
        lastUpdated="2026年9月3日"
      />

      <SummaryBlock
        conclusion="DFAアポスティーユの費用は、料金で最初から明示します。後から追加請求はありません。"
        points={[
          'DFAアポスティーユ・PSA取得・国際郵送をまとめた料金',
          '他社の「1通○○円〜」は書類取得費用のみの場合が多い',
          'アポスティーユの要否・受理形式は提出先ごとに確認',
          '見積もり後の追加請求なし。総額で比較してください',
        ]}
        ctaText="無料で相談する"
      />

      <section className="mb-10">
        <h2 className="text-base font-bold text-gray-900 mb-4">DFAアポスティーユの公式手数料（政府手数料）の目安</h2>
        <div className="text-sm text-gray-700 leading-relaxed space-y-3">
          <p>まず、DFA（フィリピン外務省）自体に支払う「アポスティーユ認証の公式手数料」があります。これは処理区分によって異なり、目安は次のとおりです（現地の料金改定で変わることがあります）。</p>
          <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
            <ul className="space-y-2">
              <li><strong>Regular（通常・数営業日）</strong>：1書類あたり<strong>100ペソ</strong></li>
              <li><strong>Express（特急・より短い日数）</strong>：1書類あたり<strong>200ペソ</strong></li>
            </ul>
          </div>
          <p>これはあくまでDFAに支払う政府手数料の部分です。実際に日本で書類を使うためには、この前後にPSA書類の取得費用・（海外からの場合）代行手数料・日本への国際郵送費が加わります。総額の内訳は次の項目もご覧ください。</p>
        </div>
      </section>

      <FeatureList
        heading="こんな方へ"
        items={[
          {
            icon: <AlertTriangle className="w-4 h-4" />,
            title: '他社の料金が安く見えるが、本当に安いのか不安',
            description: 'PSA書類1通の費用だけを安く見せているケースがあります。実際にはアポスティーユ・国際郵送・追加書類が別途加算されることがあります。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: '総額でいくらかかるか知りたい',
            description: 'PSA民事書類1通は、e-Certificateのみ30,000円、紙原本＋DHL（認証なし）30,000円、e-Apostille付き電子版40,000円、フルセット50,000円です（すべて税込）。',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: '提出先がe-Apostilleを受理するか確認したい',
            description: 'アポスティーユの要否と受理形式は提出先ごとに異なります。PSA民事書類の認証はe-Apostille（電子）のみです。',
          },
        ]}
      />

      <CtaBox
        title="必要書類と料金をまとめてご案内します"
        description="アポスティーユの要否とe-Apostilleの受理形式は提出先によって異なります。用途をお知らせいただければ、必要な書類と総額をご案内します。"
        buttonText="無料で相談する"
        href="#contact"
        variant="primary"
        trustNote="着手金50%・納品または発送前に残金50%・着手前キャンセル無料"
      />

      <SectionDivider variant="beige">
        <FeatureList
          heading="料金に含まれるもの"
          items={[
            {
              icon: <FileCheck className="w-4 h-4" />,
              title: 'DFA認証の申請',
              description: 'PSA民事書類はDFA e-Apostille（電子）を申請します。NBI Clearanceなど非PSA書類は物理アポスティーユの対象です。',
            },
            {
              icon: <FileCheck className="w-4 h-4" />,
              title: 'PSA書類取得（必要な場合）',
              description: 'PSA書類の取得からまとめて依頼いただけます。',
            },
          ]}
        />

        <IconCardGrid
          heading="料金に含まれるもの"
          columns={3}
          cards={[
            { icon: FileText, title: 'PSA発行手数料', description: 'フィリピン統計局への申請費用込み', accent: 'gold' },
            { icon: Stamp, title: 'DFAアポスティーユ', description: '外務省認証費用込み', accent: 'blue' },
            { icon: Package, title: 'DHL国際郵送', description: '原本を日本まで安全にお届け', accent: 'teal' },
            { icon: MessageSquare, title: '日本語サポート', description: '全ての手続きを日本語でご案内', accent: 'green' },
            { icon: CheckCircle, title: '進捗報告', description: '各段階で状況をご連絡', accent: 'purple' },
            { icon: Clock, title: 'スケジュール調整', description: '提出期限に合わせて手配', accent: 'gold' },
          ]}
        />
      </SectionDivider>

      <SectionDivider variant="blue">
        <StepList
          heading="ご依頼の流れ"
          variant="visual"
          steps={[
            { title: '書類の種類と提出先を共有', description: 'CENOMAR・PSA・NBI等の種類と、提出先（市役所・大使館・入管など）をお知らせください。アポスティーユが必要かどうかも確認します。' },
            { title: '必要な認証と総額をご提示', description: 'DFAアポスティーユ・PSA取得（必要な場合）・国際郵送を含めた料金をご案内します。' },
            { title: 'DFAアポスティーユを代行', description: '現地スタッフがDFA申請を進めます。Regular（4営業日）またはExpress（翌営業日）を状況に応じて選択します。' },
            { title: '日本へ郵送・完了', description: '追跡付きでお届けします。全体の目安はおおむね1ヶ月半。' },
          ]}
        />
      </SectionDivider>

      <section className="mb-10">
        <h2 className="text-base font-bold text-gray-900 mb-4">「総額」で見るときのポイント（内訳）</h2>
        <div className="text-sm text-gray-700 leading-relaxed space-y-3">
          <p>料金を比較するときは、一部の費用だけでなく、日本に書類が届くまでの総額で見ることが大切です。総額は、大きく次の要素で構成されます。</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>PSA発行手数料（CENOMAR・出生証明書・婚姻証明書など、書類の種類ごと）</li>
            <li>DFAアポスティーユの政府手数料（Regular / Express）</li>
            <li>代行手数料（現地での申請・受け取り・日本語サポート）</li>
            <li>国際郵送費（DHL等・追跡付き）</li>
          </ul>
          <p>他社の「1通○○円〜」という表示は、このうちPSA書類の取得費用だけを指していることがあります。アポスティーユ・郵送・追加書類が別途加算されると、最終的な総額は大きく変わります。当社は無料相談の時点で、これらを含めた総額を先にご提示します。</p>
        </div>
      </section>

      <FaqSection
        items={[
          { q: 'DFAアポスティーユの政府手数料はいくらですか？', a: 'DFAの政府手数料は、Regularが1書類あたり100ペソ、Expressが1書類あたり200ペソです。これは認証手数料のみで、PSA書類の取得費・代行手数料・国際配送費は別に必要です。' },
          { q: '他社より高くなりませんか？', a: '他社の「1通○○円〜」は書類取得費用のみの場合があります。当社のPSA民事書類フルセット50,000円は、e-Certificate・e-Apostille・SECPA紙原本・DHL国際送料を含む税込総額です。' },
          { q: '日本への提出にアポスティーユは必要ですか？', a: '提出先によって異なります。PSAの出生証明書・婚姻証明書・CENOMARなどの民事書類は、2026年3月以降DFA e-Apostille（電子）のみが発行されます。提出先がe-Apostilleを受理するかを事前に確認してください。' },
          { q: '提出予定日に合わせてスケジュールを組んでもらえますか？', a: '提出予定日をお知らせいただければ、逆算してスケジュールをご案内します。現地機関の処理状況により前後する場合がありますが、進捗は随時ご報告しながら進めます。' },
        ]}
        ctaTitle="まずは状況をお聞かせください"
        ctaButton="無料相談フォームへ"
      />
    </PageLayout>
  );
}
