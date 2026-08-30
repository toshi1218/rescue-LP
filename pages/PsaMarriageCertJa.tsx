import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { Heart, FileCheck, Globe, Users } from 'lucide-react';
import SummaryBlock from '../components/SummaryBlock';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR_MONTH_JA } from '../lib/seoDate';

export default function PsaMarriageCertJa() {
  useMeta(
    `PSA婚姻証明書の取得代行【${SEO_YEAR_MONTH_JA}】アポスティーユ付き`,
    'PSA婚姻証明書はフィリピンに行かずに取得できます。PSA電子書類、必要な場合のDFA e-Apostille、SECPA紙原本を提出先に合わせて手配。',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'PSA婚姻証明書取得代行' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'PSA婚姻証明書取得代行',
        description: 'フィリピンのPSA婚姻証明書を日本語だけで代行取得。必要な場合のDFA e-Apostille、SECPA紙原本、注釈付きにも対応。',
        url: 'https://ph-document.com/ja/psa-kekkon-shomeisho/',
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
              name: '料金はいくらですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'PSA取得・DFAアポスティーユをまとめた料金です。（DHL国際郵送費は実費別途となります）無料相談後に正確な金額をご提示します。',
              },
            },
            {
              '@type': 'Question',
              name: 'いつ届きますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '必要な形式によって異なります。電子書類だけの場合とSECPA紙原本の国際配送を含む場合で期間が変わるため、提出期限を確認して案内します。',
              },
            },
            {
              '@type': 'Question',
              name: '注釈付き（Annotated）の婚姻証明書は取れますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '対応可能です。アニュルメント後や外国離婚承認後の注釈付き書類も手配できます。まずは状況をお知らせください。',
              },
            },
            {
              '@type': 'Question',
              name: '急ぎの場合は対応できますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '可能です。提出期限をお知らせいただければ、優先対応の可否を確認してご案内します。',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="婚姻証明書"
        subtitle="配偶者ビザ準備、帰化申請、日本側への婚姻反映など、提出先に応じて必要な形式を確認してご案内します。"
        badges={['日本語だけでOK', '必要な場合のみe-Apostille', '料金事前案内']}
        ctaText="必要な形式を確認する"
        ctaHref="#contact"
        lastUpdated="2026年8月30日"
      />

      <SummaryBlock
        conclusion="PSA婚姻証明書を、電子版・紙原本・必要な場合のe-Apostilleから提出先に合う形で取り寄せできます。"
        points={[
          'PSA申請と必要な場合のDFA e-Apostilleを代行',
          'SECPA紙原本は提出先が必要とする場合のみ別途手配',
          '注釈付き（Annotated）婚姻証明書にも対応',
          '約1ヶ月〜で日本のご住所へ郵送',
        ]}
        ctaText="無料で相談する"
      />

      <FeatureList
        heading="こんな方へ"
        items={[
          {
            icon: <Heart className="w-4 h-4" />,
            title: '配偶者ビザ・在留資格の申請中',
            description: '入国管理局への在留資格申請に、PSA婚姻証明書が必要です。DFAアポスティーユが必要かどうかも含めて確認します。',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: '再婚・アニュルメント後の手続き',
            description: '注釈付きPSA婚姻証明書が必要なケースも対応します。まずは状況をお知らせください。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: '提出先に合った形式で揃えたい',
            description: 'e-Certificate、e-Apostille、SECPA紙原本のうち何が必要かを提出先ごとに確認して手配します。',
          },
        ]}
      />

      <section className="mb-10">
        <h2 className="text-base font-bold text-gray-900 mb-4">PSA婚姻証明書とは？どんなときに必要になるか</h2>
        <div className="text-sm text-gray-700 leading-relaxed space-y-3">
          <p>PSA婚姻証明書（Marriage Certificate）は、フィリピン統計局（PSA：Philippine Statistics Authority）が発行する、婚姻が正式に登録されていることを証明する公的書類です。フィリピン人配偶者との結婚に関する日本側の手続きで、婚姻の事実を公的に示すために求められます。</p>
          <p>具体的には、次のような場面で必要になります。</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>配偶者ビザ（在留資格認定証明書）の申請</strong>：入国管理局へ、フィリピンでの婚姻を証明する書類として提出します。</li>
            <li><strong>日本側への婚姻の反映</strong>：役所での手続きで、フィリピン側の婚姻記録の確認に使われます。</li>
            <li><strong>帰化申請</strong>：法務局へ提出する身分関係書類の一つとして求められることがあります。</li>
          </ul>
          <p>なお、「婚姻記録がある（既婚である）」ことを証明するのがPSA婚姻証明書で、「婚姻記録がない（独身である）」ことを証明する<a href="/ja/cenomar/" className="text-primary underline">CENOMAR（独身証明書）</a>とは用途が逆になります。提出先がどちらを求めているかを最初に確認することが大切です。</p>
        </div>
      </section>

      <CtaBox
        title="まず「何が必要か」を確認しましょう"
        description="提出先によって必要な形式が異なります。無料相談で整理してから進めます。"
        buttonText="無料で相談する"
        href="#contact"
        variant="primary"
        trustNote="着手金50%・書類取得・DHL配送準備完了後に残金50%お支払い・着手前キャンセル無料"
      />

      <FeatureList
        heading="料金に含まれるもの"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'PSA婚姻証明書取得',
            description: 'フィリピン統計局（PSA）への申請を代行します。SECPA紙原本は提出先が必要とする場合のみ別途取得・配送します。',
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
          { title: 'フォームで相談', description: '用途（配偶者ビザ・帰化申請など）と提出先をお知らせください。' },
          { title: '必要書類・料金の確認', description: '認証や紙原本の要否を確認し、必要な範囲で料金をご提示します。' },
          { title: 'オンラインで手配', description: 'PSA e-Certificateと、必要な場合のDFA e-Apostilleをオンライン申請します。' },
          { title: '納品', description: '電子書類はPDFで納品し、SECPA紙原本が必要な場合のみ追跡付きで郵送します。' },
        ]}
      />

      <section className="mb-10">
        <h2 className="text-base font-bold text-gray-900 mb-4">通常版と「注釈付き（Annotated）」の違い</h2>
        <div className="text-sm text-gray-700 leading-relaxed space-y-3">
          <p>PSA婚姻証明書には、通常版のほかに<strong>注釈付き（Annotated）</strong>版があります。過去にアニュルメント（婚姻無効判決）を受けた場合や、外国での離婚がフィリピンで承認された場合など、婚姻状態に変更があったときは、その事実が注釈（Annotation）として追記された版が必要になることがあります。</p>
          <p>提出先によっては「最新の状態が反映された注釈付きのもの」を求めるケースがあります。再婚・離婚・アニュルメントなどの経緯がある方は、どちらの形式が必要かを事前に提出先へ確認しておくと、取り直しを避けられます。判断が難しい場合は、状況をお知らせいただければ整理してご案内します。</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-base font-bold text-gray-900 mb-4">日本の提出先で気をつけたい3つのポイント</h2>
        <div className="text-sm text-gray-700 leading-relaxed space-y-3">
          <p><strong>① 電子版・認証・紙原本を分けて確認</strong><br />PSA書類のApostilleは2026年3月16日以降、e-Certificateに対するe-Apostilleとして電子発行されます。e-ApostilleはPDFのまま提出し、SECPA紙原本は提出先が別途求める場合のみ用意します。</p>
          <p><strong>② 発行時期（新しさ）を確認</strong><br />書類そのものに有効期限はありませんが、提出先が「発行から◯ヶ月以内」を求めることがあります。特に配偶者ビザなどでは、なるべく新しい発行日のものを求められる傾向があるため、提出予定日から逆算して取得すると安全です。</p>
          <p><strong>③ 氏名・生年月日の表記を揃える</strong><br />パスポートや他の提出書類とローマ字表記・生年月日が一致しているかを確認してください。表記の不一致は、提出先での確認や差し戻しの原因になることがあります。</p>
        </div>
      </section>

      <FaqSection
        items={[
          { q: '料金はいくらですか？', a: 'PSA取得・DFAアポスティーユをまとめた料金です。（DHL国際郵送費は実費別途となります）無料相談後に正確な金額をご提示します。' },
          { q: 'いつ届きますか？', a: '必要な形式によって異なります。電子書類だけの場合とSECPA紙原本の国際配送を含む場合で期間が変わるため、提出期限を確認して案内します。' },
          { q: '注釈付き（Annotated）の婚姻証明書は取れますか？', a: '対応可能です。アニュルメント後や外国離婚承認後の注釈付き書類も手配できます。まずは状況をお知らせください。' },
          { q: '急ぎの場合は対応できますか？', a: '可能です。提出期限をお知らせいただければ、優先対応の可否を確認してご案内します。' },
        ]}
        ctaTitle="まずは状況をお聞かせください"
        ctaButton="無料相談フォームへ"
      />
    </PageLayout>
  );
}
