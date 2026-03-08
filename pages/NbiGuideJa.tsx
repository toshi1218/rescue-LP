import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { Fingerprint, AlertTriangle, Clock, Users, FileCheck, Globe } from 'lucide-react';
import SummaryBlock from '../components/SummaryBlock';

export default function NbiGuideJa() {
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'NBI Clearance取得代行' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'NBI Clearance（無犯罪証明書）取得代行',
        description: 'フィリピンのNBI Clearanceを日本語だけで代行取得。DFAアポスティーユ付き対応、HIT案件も対応。配偶者ビザ・就労ビザ・帰化申請に。フィリピン渡航不要、約1ヶ月〜。',
        url: 'https://ph-document.com/ja/nbi-clearance',
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
            description: 'NBI取得・DFAアポスティーユ込み（税抜）。DHL国際郵送費は実費別途',
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
                text: 'NBI取得・DFAアポスティーユをまとめた料金です。（DHL国際郵送費は実費別途となります）無料相談後に正確な金額をご提示します。',
              },
            },
            {
              '@type': 'Question',
              name: 'HIT（同名者あり）が出た場合はどうなりますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'HITが出ると追加審査が必要になり、通常より時間がかかります。HIT対応の経験があるスタッフが対応しますので、まずご相談ください。',
              },
            },
            {
              '@type': 'Question',
              name: 'フィリピン人本人が日本にいても取得できますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'はい。本人がフィリピンにいなくても、現地スタッフが代理で指紋採取・申請を行います。委任状等の書類が必要な場合はご案内します。',
              },
            },
            {
              '@type': 'Question',
              name: '有効期限はいつから数えますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'NBI Clearanceの有効期限は発行日から1年です。ビザ申請のタイミングに合わせて取得時期を調整することをお勧めします。',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="NBI Clearance、日本語だけで取り寄せます"
        badges={['日本語だけでOK', 'アポスティーユ込み対応', '料金']}
        ctaText="無料相談はこちら"
        ctaHref="#contact"
      />

      <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto text-center px-4">
        NBI Clearance（無犯罪証明書）は、フィリピン国家捜査局（NBI）が発行する犯罪経歴証明書です。配偶者ビザ・帰化申請・各国の移民手続きで提出が求められます。
      </p>

      <SummaryBlock
        conclusion="NBI Clearance（無犯罪証明書）は、日本語だけで取り寄せできます。フィリピンに行く必要はありません。"
        points={[
          '現地スタッフが指紋採取・申請・受け取りをすべて代行',
          'HIT（同名者あり）が出た場合も対応経験あり',
          'DFAアポスティーユ付きで日本のご住所へ郵送。約1ヶ月〜',
          '配偶者ビザ・帰化申請・就労ビザ、どの用途にも対応',
        ]}
        ctaText="無料で相談する（24時間以内に返信）"
      />

      {/* 訴求ブロック */}
      <section className="mb-12 rounded-2xl bg-amber-50 border border-amber-200 p-6">
        <div className="flex items-start gap-3 mb-4">
          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <h2 className="text-base font-bold text-amber-900">NBI Clearanceは「指紋採取」が必要です</h2>
        </div>
        <ul className="space-y-2 text-sm text-amber-800 leading-relaxed">
          <li className="flex items-start gap-2"><span className="text-amber-500 font-bold flex-shrink-0">✕</span>オンライン申請しても、<strong>指紋採取のためにフィリピン現地のNBIオフィスへの来訪が必要</strong></li>
          <li className="flex items-start gap-2"><span className="text-amber-500 font-bold flex-shrink-0">✕</span>「HIT（同名者あり）」が出ると<strong>追加審査で数週間〜数ヶ月の遅延</strong>が発生することも</li>
          <li className="flex items-start gap-2"><span className="text-amber-500 font-bold flex-shrink-0">✕</span>有効期限は<strong>発行から1年</strong>。ビザ申請のタイミングに合わせた取得が必要</li>
        </ul>
        <p className="mt-4 text-sm font-semibold text-amber-900">→ 現地での指紋採取から書類受け取りまで、すべて代行します。</p>
      </section>

      <FeatureList
        heading="こんな方に選ばれています"
        items={[
          {
            icon: <Users className="w-4 h-4" />,
            title: '配偶者ビザ・在留資格の申請中の方',
            description: '入国管理局への配偶者ビザ申請では、NBI Clearanceが必要なケースがあります。DFAアポスティーユ付きで手配します。',
          },
          {
            icon: <Fingerprint className="w-4 h-4" />,
            title: '帰化申請を進めている方',
            description: '法務局への帰化申請では、フィリピン人配偶者のNBI Clearanceが求められます。提出先の要件を確認した上で手配します。',
          },
          {
            icon: <Clock className="w-4 h-4" />,
            title: 'HIT（同名者あり）が出て困っている方',
            description: 'NBI申請でHITが出ると通常より時間がかかります。HIT対応の経験があるスタッフが対応します。まずは状況をご相談ください。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: '何が必要かわからない方',
            description: '提出先によってアポスティーユの要否が異なります。用途をお伝えいただければ、必要な形式で手配します。',
          },
        ]}
      />

      <CtaBox
        title="HIT対応・アポスティーユ込みで相談できます"
        description="「HITが出た」「期限が迫っている」「何が必要かわからない」——どんな状況でもまずご相談ください。"
        buttonText="無料で相談する"
        href="#contact"
        variant="primary"
        trustNote="着手金50%・書類取得・DHL配送準備完了後に残金50%お支払い・着手前キャンセル無料"
      />

      <FeatureList
        heading="料金に含まれるもの"
        items={[
          {
            icon: <Fingerprint className="w-4 h-4" />,
            title: 'NBI Clearance取得（指紋採取含む）',
            description: '現地スタッフがNBIオフィスで指紋採取・申請・受け取りを代行します。本人がフィリピンにいなくても対応可能です。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'DFAアポスティーユ認証（※日本の手続きではほぼ必須です）',
            description: 'フィリピン外務省（DFA）によるアポスティーユ認証を手配。紙の原本で対応します。',
          },
        ]}
      />

      <CtaBox
        title="追加費用の後出しはありません"
        description="NBI取得・DFAアポスティーユをまとめた料金でご案内します。（DHL国際郵送費は実費別途となります）見積もり後の追加請求はありません。"
        buttonText="料金を確認する"
        href="#contact"
        variant="secondary"
        trustNote="日本語のみでOK・匿名相談可・返信24時間以内"
      />

      <StepList
        heading="ご依頼の流れ"
        steps={[
          { title: 'フォームで相談（無料）', description: '用途（ビザ申請・帰化申請など）と提出先をお知らせください。24時間以内に返信します。' },
          { title: '必要書類・料金の確認', description: '必要書類（原則DFAアポスティーユ込み）と料金をご提示します。' },
          { title: 'フィリピン現地で手配', description: '現地スタッフがNBIオフィスで指紋採取・申請・受け取りを進めます。HITが出た場合も対応します。' },
          { title: '日本へ郵送・完了', description: '書類が揃い次第、追跡付きでお届けします。目安は約1ヶ月〜。' },
        ]}
      />

      <FaqSection
        items={[
          { q: '料金はいくらですか？', a: 'NBI取得・DFAアポスティーユをまとめた料金です。（DHL国際郵送費は実費別途となります）無料相談後に正確な金額をご提示します。' },
          { q: 'HIT（同名者あり）が出た場合はどうなりますか？', a: 'HITが出ると追加審査が必要になり、通常より時間がかかります。HIT対応の経験があるスタッフが対応しますので、まずご相談ください。' },
          { q: 'フィリピン人本人が日本にいても取得できますか？', a: 'はい。本人がフィリピンにいなくても、現地スタッフが代理で指紋採取・申請を行います。委任状等の書類が必要な場合はご案内します。' },
          { q: '有効期限はいつから数えますか？', a: 'NBI Clearanceの有効期限は発行日から1年です。ビザ申請のタイミングに合わせて取得時期を調整することをお勧めします。' },
        ]}
        ctaTitle="まずは状況をお聞かせください"
        ctaButton="無料相談フォームへ"
      />
    </PageLayout>
  );
}
