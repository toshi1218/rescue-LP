import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import SummaryBlock from '../components/SummaryBlock';
import FeatureList from '../components/FeatureList';
import ComparisonTable from '../components/ComparisonTable';
import CtaBox from '../components/CtaBox';
import FaqSection from '../components/FaqSection';
import RelatedArticles from '../components/RelatedArticles';
import { FileCheck, Heart, Globe, Users } from 'lucide-react';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR_MONTH_JA } from '../lib/seoDate';

export default function CenomarVsMarriageCertJa() {
  useMeta(
    `CENOMARとPSA婚姻証明書の違い【${SEO_YEAR_MONTH_JA}】どちらが必要？`,
    'CENOMARは独身を証明し、PSA婚姻証明書は婚姻を証明します。K-1、CR-1/IR-1、国際結婚でどちらを取るべきかを日本語で整理します。',
    'https://ph-document.com/ja/cenomar-vs-marriage-certificate',
  );

  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'CENOMARと婚姻証明書' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'CENOMARとPSA婚姻証明書の違い',
          description: 'CENOMARは独身を証明し、PSA婚姻証明書は婚姻を証明します。K-1、CR-1/IR-1、国際結婚でどちらが必要かを整理します。',
          url: 'https://ph-document.com/ja/cenomar-vs-marriage-certificate',
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
              name: 'CENOMARとPSA婚姻証明書の違いは何ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'CENOMARは婚姻記録がないことを証明する書類で、PSA婚姻証明書は婚姻が登録されていることを証明する書類です。役割が逆なので、用途を取り違えると再取得になります。',
              },
            },
            {
              '@type': 'Question',
              name: 'K-1ビザではどちらが必要ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '一般的にはCENOMARが必要です。フィリピン人パートナーが法律上独身であることを示すために使います。',
              },
            },
            {
              '@type': 'Question',
              name: 'CR-1/IR-1ビザではどちらが必要ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '一般的にはPSA婚姻証明書が必要です。すでに成立した婚姻を証明するために使います。',
              },
            },
            {
              '@type': 'Question',
              name: '以前に結婚歴がある場合はどうなりますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '過去の婚姻が無効・解消されている場合は、現在の婚姻証明書に加えて、前婚の解消を示す資料が必要になることがあります。ケースごとに確認が必要です。',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="CENOMARとPSA婚姻証明書、どちらが必要？"
        badges={['K-1 / CR-1で迷いやすい', '違いを3分で確認', '無料相談']}
        ctaText="必要書類を確認する"
        ctaHref="#contact"
      />

      <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto text-center px-4">
        CENOMARは「独身を証明する書類」、PSA婚姻証明書は「婚姻を証明する書類」です。似ていますが役割は正反対なので、最初にここを整理しておくと、再取得や遅延を避けやすくなります。
      </p>

      <SummaryBlock
        conclusion="迷ったら、まずはビザの種類と提出先を確認します。K-1ならCENOMAR、CR-1/IR-1や婚姻登録後の手続きならPSA婚姻証明書が基本です。"
        points={[
          'CENOMAR = 婚姻記録がないことを証明',
          'PSA婚姻証明書 = 婚姻が登録されていることを証明',
          'K-1はCENOMAR、CR-1/IR-1は婚姻証明書が基本',
          '以前の婚姻歴がある場合は追加資料が必要になることがあります',
        ]}
        ctaText="どちらが必要か聞く"
      />

      <FeatureList
        heading="CENOMARを使う場面"
        items={[
          {
            icon: <Heart className="w-4 h-4" />,
            title: 'K-1フィアンセビザ',
            description: 'フィリピン人パートナーが法律上独身であることを示すために使います。婚姻登録の前段階で必要になることが多いです。',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: '国際結婚の事前確認',
            description: '日本の市区町村や在外公館で、婚姻届や婚姻手続きの前にCENOMARの提出を求められることがあります。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: '提出先が独身確認を求めるとき',
            description: '婚姻の有無を確認したい提出先では、CENOMARが最適です。婚姻証明書では代用できません。',
          },
        ]}
      />

      <FeatureList
        heading="PSA婚姻証明書を使う場面"
        items={[
          {
            icon: <Heart className="w-4 h-4" />,
            title: 'CR-1 / IR-1配偶者ビザ',
            description: 'すでに婚姻が成立している場合は、婚姻証明書で婚姻関係を示します。CENOMARでは目的が合いません。',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: '日本の配偶者ビザや入管手続き',
            description: '婚姻関係の証明として、PSA婚姻証明書＋アポスティーユ＋翻訳が求められることがあります。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: '家族関係の確認が必要な申請',
            description: '永住・帰化・各種家族関連手続きでは、婚姻証明書が必要になるケースがあります。',
          },
        ]}
      />

      <ComparisonTable
        heading="違いを一覧で確認"
        selfLabel="CENOMAR"
        agencyLabel="PSA婚姻証明書"
        rows={[
          { item: '証明する内容', self: '婚姻記録がないこと', agency: '婚姻が登録されていること' },
          { item: '主な用途', self: 'K-1 / 独身確認', agency: 'CR-1 / IR-1 / 婚姻後の手続き' },
          { item: '提出のタイミング', self: '婚姻前', agency: '婚姻後' },
          { item: '有効性の考え方', self: '提出先で有効期限確認が必要', agency: '原則は永久記録として扱われることが多い' },
          { item: 'アポスティーユ', self: '多くの提出先で必要', agency: '多くの提出先で必要' },
        ]}
      />

      <CtaBox
        title="どちらを取るべきか迷ったら、先に確認できます"
        description="ビザの種類、前婚歴の有無、提出先によって必要書類は変わります。間違った書類を取る前に、状況を教えてください。"
        buttonText="無料で確認する"
        href="#contact"
        variant="primary"
        trustNote="着手前キャンセル無料・進捗は段階ごとに共有・残金は写し確認後にご案内"
      />

      <FaqSection
        items={[
          { q: 'CENOMARと婚姻証明書は同じですか？', a: '同じではありません。CENOMARは独身を証明し、婚姻証明書は婚姻を証明します。' },
          { q: 'K-1なら必ずCENOMARですか？', a: '一般的にはそうです。ただし提出先の要件で追加書類が必要なこともあるため、最終確認は必要です。' },
          { q: 'CR-1なら必ず婚姻証明書ですか？', a: '一般的には婚姻証明書です。以前の婚姻歴がある場合は、追加でCENOMARや離婚・無効化の資料が必要になることがあります。' },
          { q: 'アポスティーユは両方必要ですか？', a: '多くの提出先では必要です。提出先と国によって扱いが変わるため、事前に確認するのが安全です。' },
        ]}
        ctaTitle="迷ったら先に相談"
        ctaButton="書類を確認する"
      />

      <RelatedArticles
        items={[
          { href: '/ja/cenomar/', title: 'CENOMAR取得代行', description: 'PSA取得からDFAアポスティーユ、発送まで一括で対応します。' },
          { href: '/ja/psa-kekkon-shomeisho/', title: 'PSA婚姻証明書取得代行', description: '婚姻後の手続きに必要な婚姻証明書はこちら。' },
          { href: '/ja/cenomar-koyukigen/', title: 'CENOMARの有効期限', description: 'いつ取り直すべきか、提出期限に合わせて整理します。' },
          { href: '/ja/kokusai-kekkon-guide/', title: '国際結婚の書類ガイド', description: '婚姻手続き全体の流れをまとめて確認できます。' },
        ]}
      />
    </PageLayout>
  );
}
