import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import RelatedArticles from '../components/RelatedArticles';
import { FileText, Globe, CheckCircle } from 'lucide-react';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR } from '../lib/seoDate';

export default function CenomarTohaJa() {
  useMeta(
    `CENOMARとは？意味・正式名称・使い方を徹底解説【${SEO_YEAR}年版】`,
    'CENOMARはフィリピン統計局（PSA）が発行する独身証明書。Certificate of No Marriage Recordの略称で、国際結婚・配偶者ビザ・帰化申請に必要。取得方法・有効期限・アポスティーユまで解説。',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'CENOMARとは' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'CENOMARとは？意味・正式名称・使い方',
          description: 'CENOMARはフィリピン統計局（PSA）が発行する独身証明書（Certificate of No Marriage Record）。国際結婚・配偶者ビザ・帰化申請に必要な書類。',
          url: 'https://ph-document.com/ja/cenomar-toha/',
          inLanguage: 'ja',
          publisher: {
            '@type': 'Organization',
            name: 'IGRS Inc.',
            url: 'https://ph-document.com/ja/',
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'CENOMARとは何ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'CENOMARとは「Certificate of No Marriage Record」の略称で、フィリピン統計局（PSA）が発行する独身証明書です。フィリピン人が国内で婚姻登録されていないことを公式に証明する書類で、国際結婚の手続き・配偶者ビザの申請・帰化申請などに使用されます。',
              },
            },
            {
              '@type': 'Question',
              name: 'CENOMARは誰が発行しますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'CENOMARはフィリピン統計局（PSA：Philippine Statistics Authority）が唯一発行できる公的書類です。かつてはNSO（国家統計局）が発行していましたが、2016年にPSAへ統合されました。',
              },
            },
            {
              '@type': 'Question',
              name: 'CENOMARの有効期限は？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'PSAが定める有効期限はありませんが、提出先機関によって「発行から6ヶ月以内」や「1年以内」を要求される場合があります。配偶者ビザ・帰化申請の際は提出先に事前確認してください。',
              },
            },
            {
              '@type': 'Question',
              name: 'CENOMARとPSA婚姻証明書の違いは？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'CENOMARは「婚姻記録がない（独身である）」ことを証明する書類です。一方PSA婚姻証明書（Marriage Certificate）は「婚姻記録がある（既婚である）」ことを証明します。K-1フィアンセビザにはCENOMAR、CR-1/IR-1配偶者ビザには婚姻証明書が必要です。',
              },
            },
            {
              '@type': 'Question',
              name: 'CENOMARにはアポスティーユが必要ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '日本の公的機関（入管・役所・法務局）に提出する場合、DFAアポスティーユ（公印確認）が必要です。アポスティーユがあれば、在日フィリピン大使館での領事認証は不要です（ハーグ条約締約国のため）。',
              },
            },
            {
              '@type': 'Question',
              name: 'CENOMARは日本から取得できますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'はい。フィリピンに戻らなくても取得できます。PSAHelpline.phからオンライン申請するか、代行サービスを利用してPSA取得→DFAアポスティーユ→国際DHL配送まで一括依頼する方法があります。',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="CENOMARとは？"
        subtitle="Certificate of No Marriage Record（独身証明書）の意味・使い方・取得方法をわかりやすく解説"
        badges={['フィリピン渡航不要', 'DFAアポスティーユ込み', '日本語で対応']}
        ctaText="無料相談はこちら"
        ctaHref="/ja/contact/"
      />

      <SummaryBlock
        conclusion="CENOMARの基本"
        points={['CENOMAR（セノマール）は、フィリピン統計局（PSA）が発行する「独身証明書」です。正式名称はCertificate of No Marriage Recordといい、申請者がフィリピン国内で婚姻登録されていないことを公式に証明します。国際結婚・配偶者ビザ申請・帰化申請など、フィリピン人の独身・婚姻状況を証明する必要がある手続きで広く求められます。']}
      />

      <section className="py-10 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">CENOMARが必要な手続き</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" /><span><strong>日本人との国際結婚</strong> — 婚姻届提出時や婚姻要件具備証明書（LCCM）取得時に必要</span></li>
          <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" /><span><strong>配偶者ビザ申請</strong> — 日本人の配偶者等ビザ、K-1フィアンセビザ、CR-1/IR-1配偶者ビザ</span></li>
          <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" /><span><strong>帰化申請</strong> — 法務局への帰化申請書類として提出</span></li>
          <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" /><span><strong>海外での婚姻登録</strong> — 米国・カナダ・オーストラリア・UAE等での婚姻手続き</span></li>
        </ul>
      </section>

      <FeatureList
        heading="CENOMARとPSA婚姻証明書の違い"
        items={[
          {
            icon: <FileText className="w-6 h-6 text-blue-600" />,
            title: 'CENOMAR（独身証明書）',
            description: '「婚姻記録なし＝独身」を証明。未婚・離婚・死別後の独身状況を証明したい場合に使用。K-1フィアンセビザ申請に必要。',
          },
          {
            icon: <FileText className="w-6 h-6 text-blue-600" />,
            title: 'PSA婚姻証明書（Marriage Certificate）',
            description: '「婚姻記録あり＝既婚」を証明。フィリピン人配偶者と既婚の場合のCR-1/IR-1配偶者ビザ申請に必要。',
          },
          {
            icon: <Globe className="w-6 h-6 text-blue-600" />,
            title: 'DFAアポスティーユ',
            description: '日本の役所・入管・法務局に提出するにはDFAアポスティーユが必要。ハーグ条約締約国では領事認証の代替として有効。',
          },
        ]}
      />

      <section className="py-10 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">CENOMARの有効期限について</h2>
        <p className="text-gray-700 mb-3">
          PSA自体はCENOMARに有効期限を設けていません。ただし、提出先機関によって以下のような期限が設けられる場合があります：
        </p>
        <ul className="space-y-2 text-gray-700 list-disc list-inside">
          <li><strong>入管（配偶者ビザ申請）</strong>：申請日から1年以内に発行されたもの</li>
          <li><strong>法務局（帰化申請）</strong>：申請前3ヶ月〜6ヶ月以内が目安（管轄法務局により異なる）</li>
          <li><strong>在日フィリピン大使館（LCCM取得）</strong>：発行から6ヶ月以内</li>
        </ul>
        <p className="mt-4 text-sm text-gray-500">
          提出先に事前確認することを強くお勧めします。
        </p>
      </section>

      <CtaBox
        title="CENOMARが必要ですか？"
        description="フィリピン渡航不要・日本語だけで対応。PSA取得→DFAアポスティーユ→DHL国際配送まで一括代行します。無料相談受付中。"
        buttonText="無料相談はこちら"
        href="/ja/contact/"
      />

      <FaqSection
        items={[
          {
            q: 'CENOMARとは何ですか？',
            a: 'Certificate of No Marriage Recordの略称で、フィリピン統計局（PSA）が発行する独身証明書です。国際結婚・配偶者ビザ・帰化申請などに使用されます。',
          },
          {
            q: 'CENOMARは誰が発行しますか？',
            a: 'フィリピン統計局（PSA）が唯一発行できる公的書類です。在日フィリピン大使館では発行できません。',
          },
          {
            q: 'CENOMARの有効期限は？',
            a: 'PSA自体に有効期限はありませんが、提出先（入管・法務局・大使館）によって6ヶ月〜1年以内を要求される場合があります。',
          },
          {
            q: 'CENOMARとPSA婚姻証明書の違いは？',
            a: 'CENOMARは独身証明、婚姻証明書は既婚証明です。K-1フィアンセビザにはCENOMAR、CR-1/IR-1配偶者ビザには婚姻証明書が必要です。',
          },
          {
            q: 'CENOMARにはアポスティーユが必要ですか？',
            a: '日本の公的機関に提出する場合はDFAアポスティーユが必要です。ハーグ条約締約国のため、在日フィリピン大使館での領事認証は不要です。',
          },
          {
            q: 'CENOMARは日本から取得できますか？',
            a: 'はい。代行サービスを利用すればフィリピン渡航不要で取得できます。PSA取得→DFAアポスティーユ→DHL国際配送まで一括対応します。',
          },
        ]}
      />

      <RelatedArticles
        items={[
          { href: '/ja/cenomar/', title: 'CENOMAR取得代行サービス' },
          { href: '/ja/cenomar-koyukigen/', title: 'CENOMARの有効期限' },
          { href: '/ja/apostille/', title: 'DFAアポスティーユとは' },
          { href: '/ja/kokusai-kekkon-guide/', title: '国際結婚の流れ' },
        ]}
      />
    </PageLayout>
  );
}
