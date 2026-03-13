import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { Baby, AlertTriangle, Clock, FileCheck, Globe, Users, FileText, Scale, Building, CheckCircle } from 'lucide-react';
import SummaryBlock from '../components/SummaryBlock';
import SectionDivider from '../components/SectionDivider';
import IconCardGrid from '../components/IconCardGrid';
import ComparisonTable from '../components/ComparisonTable';

export default function PsaBirthCertJa() {
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
              name: '料金はいくらですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'PSA取得・DFAアポスティーユをまとめた料金です。（DHL国際郵送費は実費別途となります）無料相談後に正確な金額をご提示します。',
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
              name: '書類の名前のスペルが日本側のものと違う場合はどうなりますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '出生証明書に記載された名前のスペルが日本の在留カードや婚姻届と異なる場合、提出先によっては書類の補正・説明が求められることがあります。事前に提出先に確認するか、相談時にお知らせください。',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="PSA出生証明書、日本語だけで取り寄せます"
        badges={['LCR対応可能', '紙の原本でお届け', 'DFAアポスティーユ込み']}
        ctaText="無料相談はこちら"
        ctaHref="#contact"
      />

      <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto text-center px-4">
        PSA出生証明書は、フィリピン統計局（PSA）が発行する公的な出生記録です。国際結婚・配偶者ビザ・帰化申請などで、身元証明として提出が求められます。
      </p>

      <SummaryBlock
        conclusion="PSA出生証明書をアポスティーユ・日本語訳つきで取り寄せ。帰化申請・婚姻届・ビザ申請に合わせた認証形式でお届けします。"
        points={[
          '現地スタッフがPSA申請・DFAアポスティーユを代行',
          '日本の提出先が求める「紙の原本＋アポスティーユ」形式で対応',
          '「PSAに記録がない」複雑なケースも相談可能',
          '国際結婚・配偶者ビザ・帰化申請、どの用途にも対応',
        ]}
        ctaText="無料で相談する（24時間以内に返信）"
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

      <SectionDivider variant="beige">
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

        <IconCardGrid
          heading="PSA出生証明書の主な提出先・用途"
          columns={3}
          cards={[
            { icon: Scale, title: '帰化申請での提出', description: '法務局への帰化申請にフィリピン人配偶者の出生証明書が必要', accent: 'gold' },
            { icon: FileText, title: '婚姻届の添付書類', description: '市区町村役場・フィリピン大使館への婚姻届に必要', accent: 'blue' },
            { icon: Globe, title: 'ビザ申請の証拠書類', description: '配偶者ビザ・米国ビザなど各種ビザ申請に必要', accent: 'green' },
            { icon: Building, title: '在留資格変更', description: '入国管理局への在留資格申請で身元証明として提出', accent: 'gold' },
            { icon: CheckCircle, title: 'アポスティーユ付き対応', description: '日本の提出先が要求するDFAアポスティーユ認証まで一括代行', accent: 'blue' },
            { icon: Users, title: 'LCR対応も可能', description: 'PSAに記録がない複雑なケースにも対応経験あり', accent: 'green' },
          ]}
        />
      </SectionDivider>

      <CtaBox
        title="「PSAに記録がない」場合も相談できます"
        description="LCR申請・遅延登録など、複雑なケースにも対応しています。まず状況をお知らせください。"
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
      </SectionDivider>

      <CtaBox
        title="追加費用の後出しはありません"
        description="PSA取得・DFAアポスティーユをまとめた料金でご案内します。（DHL国際郵送費は実費別途となります）見積もり後の追加請求はありません。"
        buttonText="料金を確認する"
        href="#contact"
        variant="secondary"
        trustNote="日本語のみでOK・匿名相談可・返信24時間以内"
      />

      <StepList
        heading="ご依頼の流れ"
        variant="visual"
        steps={[
          { title: 'フォームで相談（無料）', description: '用途（国際結婚・ビザ申請など）と提出先をお知らせください。24時間以内に返信します。' },
          { title: '必要書類・料金の確認', description: '必要書類（原則DFAアポスティーユ込み）と料金をご提示します。' },
          { title: 'フィリピン現地で手配', description: 'PSA取得・DFAアポスティーユを現地スタッフが進めます。' },
          { title: '日本へ郵送・完了', description: '書類が揃い次第、追跡付きでお届けします。目安はおおむね1ヶ月半。' },
        ]}
      />

      <ComparisonTable
        heading="PSA出生証明書 取得の比較"
        rows={[
          { item: 'PSAへの申請', self: false, agency: true },
          { item: 'DFAアポスティーユ', self: false, agency: true },
          { item: '日本語訳の手配', self: '要翻訳会社', agency: true },
          { item: '提出先に合う形式の確認', self: '要調査', agency: true },
        ]}
      />

      <FaqSection
        items={[
          { q: '料金はいくらですか？', a: 'PSA取得・DFAアポスティーユをまとめた料金です。（DHL国際郵送費は実費別途となります）無料相談後に正確な金額をご提示します。' },
          { q: 'PSAに記録がない場合はどうなりますか？', a: 'LCR（地方民事登録局）への申請が必要になります。対応経験がありますので、まずご相談ください。追加費用が発生する場合は事前にご説明します。' },
          { q: '出生証明書とアポスティーユ、両方必要ですか？', a: '日本の提出先では通常、PSA出生証明書＋DFAアポスティーユの両方が必要です。提出先を確認した上でご案内します。' },
          { q: '書類の名前のスペルが日本側のものと違う場合はどうなりますか？', a: '出生証明書に記載された名前のスペルが日本の在留カードや婚姻届と異なる場合、提出先によっては書類の補正・説明が求められることがあります。事前に提出先に確認するか、相談時にお知らせください。' },
        ]}
        ctaTitle="まずは状況をお聞かせください"
        ctaButton="無料相談フォームへ"
      />
    </PageLayout>
  );
}
