import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import SummaryBlock from '../components/SummaryBlock';
import FeatureList from '../components/FeatureList';
import StepList from '../components/StepList';
import CtaBox from '../components/CtaBox';
import FaqSection from '../components/FaqSection';
import RelatedArticles from '../components/RelatedArticles';
import { FileCheck, Globe, Heart, Users } from 'lucide-react';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR_MONTH_JA } from '../lib/seoDate';

export default function DocumentChecklistByVisaJa() {
  useMeta(
    `ビザ別フィリピン書類チェックリスト【${SEO_YEAR_MONTH_JA}】`,
    'K-1、CR-1/IR-1、カナダ、オーストラリア、UK、日本向けに、フィリピン書類の必要書類を整理した日本語チェックリストです。',
    'https://ph-document.com/ja/document-checklist-by-visa/',
  );

  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'ビザ別チェックリスト' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'ビザ別フィリピン書類チェックリスト',
          description: 'K-1、CR-1/IR-1、カナダ、オーストラリア、UK、日本向けに、必要なフィリピン書類を整理したチェックリストです。',
          url: 'https://ph-document.com/ja/document-checklist-by-visa/',
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
              name: 'K-1ビザでは何が必要ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '一般的にはCENOMAR、PSA出生証明書、NBIクリアランスが中心です。提出先によってはアポスティーユや翻訳も必要になります。',
              },
            },
            {
              '@type': 'Question',
              name: 'CR-1/IR-1ビザでは何が必要ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '一般的にはPSA婚姻証明書、PSA出生証明書、NBIクリアランスが中心です。前婚歴がある場合は追加書類が必要になることがあります。',
              },
            },
            {
              '@type': 'Question',
              name: 'アポスティーユは毎回必要ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '多くの国際手続きでは必要です。提出先の要件によって異なるため、最終確認をしてから進めるのが安全です。',
              },
            },
            {
              '@type': 'Question',
              name: '複数の書類を同時に頼めますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'はい。CENOMAR、PSA出生証明書、PSA婚姻証明書、NBIクリアランスなどは同時進行で手配できます。まとめて進めると時間を節約できます。',
              },
            },
          ],
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['#faqsection-heading', "[id^='faqsec-panel-']"],
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'DefinedTermSet',
          '@id': 'https://ph-document.com/ja/document-checklist-by-visa/#glossary',
          name: 'フィリピン書類・アポスティーユ用語集',
          description: 'ビザ・移民・帰化の申請でよく使われるフィリピンの公的書類と認証の用語を、わかりやすく定義した正典の用語集です。ph-document.com 全体から参照されます。',
          hasDefinedTerm: [
            {
              '@type': 'DefinedTerm',
              '@id': 'https://ph-document.com/ja/document-checklist-by-visa/#cenomar',
              name: 'CENOMAR',
              alternateName: '独身証明書',
              description: 'PSA（フィリピン統計局）が発行する、フィリピンに婚姻記録がないことを証明する書類。独身証明として国際結婚・配偶者ビザ等で使われます。',
            },
            {
              '@type': 'DefinedTerm',
              '@id': 'https://ph-document.com/ja/document-checklist-by-visa/#psa-birth-certificate',
              name: 'PSA出生証明書',
              description: 'フィリピン統計局（PSA）が発行する公式の出生証明書。身分関係・国籍の証明として、ビザ・帰化申請で提出します。',
            },
            {
              '@type': 'DefinedTerm',
              '@id': 'https://ph-document.com/ja/document-checklist-by-visa/#psa-marriage-certificate',
              name: 'PSA婚姻証明書',
              description: 'PSAが発行する公式の婚姻証明書。フィリピンで登録された婚姻を証明し、配偶者ビザ・スポンサーシップ申請で必要になります。',
            },
            {
              '@type': 'DefinedTerm',
              '@id': 'https://ph-document.com/ja/document-checklist-by-visa/#nbi-clearance',
              name: 'NBI Clearance',
              alternateName: '無犯罪証明書',
              description: 'フィリピン捜査局（NBI）が発行する無犯罪証明書。ビザ・帰化・海外就労で素行の証明として求められます。',
            },
            {
              '@type': 'DefinedTerm',
              '@id': 'https://ph-document.com/ja/document-checklist-by-visa/#dfa-apostille',
              name: 'DFAアポスティーユ',
              description: 'フィリピン外務省（DFA）による国際認証。アポスティーユ条約加盟国で、フィリピン発行書類を領事認証なしに有効化します。',
            },
            {
              '@type': 'DefinedTerm',
              '@id': 'https://ph-document.com/ja/document-checklist-by-visa/#e-apostille',
              name: 'e-Apostille（電子アポスティーユ）',
              description: '2026年3月16日以降、DFAがPSA民事書類（出生・婚姻・CENOMAR）に発行する電子（PDF）アポスティーユ。電子的に提出し、印刷物は電子原本として扱われません。NBI等の非PSA書類は引き続き物理アポスティーユを使用します。',
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="ビザ別に、必要なフィリピン書類を一覧で確認"
        badges={['K-1 / CR-1 / 配偶者ビザ', 'カナダ・豪州・UK・日本', '無料相談']}
        ctaText="必要書類を確認する"
        ctaHref="#contact"
        lastUpdated="2026年3月1日"
      />

      <SummaryBlock
        conclusion="ビザの種類が変わると、必要な書類も変わります。まずは提出先に合わせて、どの書類を優先して取るべきかを整理しましょう。"
        points={[
          'K-1ではCENOMARが中心',
          'CR-1/IR-1ではPSA婚姻証明書が中心',
          'PSA出生証明書とNBIクリアランスは多くのケースで共通',
          'アポスティーユや翻訳は提出先の条件で追加されます',
        ]}
        ctaText="自分のケースを確認する"
      />

      <FeatureList
        heading="K-1フィアンセビザ"
        items={[
          {
            icon: <Heart className="w-4 h-4" />,
            title: 'CENOMAR',
            description: '独身であることを証明する基本書類です。婚姻手続き前の確認で使われます。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'PSA出生証明書',
            description: '本人確認の基本書類です。提出先によってはアポスティーユ付きが必要です。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'NBIクリアランス',
            description: '経歴確認のために求められることが多い書類です。HITが出る場合は早めの確認が必要です。',
          },
        ]}
      />

      <FeatureList
        heading="CR-1 / IR-1配偶者ビザ"
        items={[
          {
            icon: <Heart className="w-4 h-4" />,
            title: 'PSA婚姻証明書',
            description: '婚姻が成立していることを証明します。CENOMARでは代用できません。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'PSA出生証明書',
            description: '本人確認のために必要です。古い記録や表記ゆれがある場合は事前確認が重要です。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'NBIクリアランス',
            description: '多くのケースで必要です。発行時期の管理が大切です。',
          },
        ]}
      />

      <FeatureList
        heading="カナダ・オーストラリア・UK・日本"
        items={[
          {
            icon: <Globe className="w-4 h-4" />,
            title: '提出先の要件を先に確認',
            description: 'IRCC、Home Affairs、UKVI、日本の入管では、求められる順番や翻訳条件が少しずつ違います。',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: '前婚歴がある場合は追加資料に注意',
            description: '前婚の解消書類や補足説明が必要になることがあります。先に全体像を確認するとスムーズです。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'アポスティーユと翻訳',
            description: '認証や翻訳の要否は提出先と申請段階で異なります。現行チェックリストで指定されたものだけを手配します。',
          },
        ]}
      />

      <StepList
        heading="このチェックリストの使い方"
        steps={[
          { title: 'まずビザの種類を決める', description: 'K-1、CR-1/IR-1、配偶者ビザ、永住・帰化など、提出先を先に確定します。' },
          { title: '必要書類の土台を揃える', description: 'CENOMAR、PSA出生証明書、PSA婚姻証明書、NBIクリアランスのどれが必要かを整理します。' },
          { title: 'アポスティーユと翻訳を確認', description: '提出先によっては、原本だけでなくアポスティーユや翻訳も必要です。' },
          { title: '不足分をまとめて手配する', description: '複数書類は同時進行の方が早く進みます。優先順を一緒に決めましょう。' },
        ]}
      />

      <CtaBox
        title="どの書類を先に取るべきか、整理してご案内できます"
        description="ビザの種類と現在の状況を教えていただければ、必要書類の優先順位を一緒に整理します。"
        buttonText="無料で相談する"
        href="#contact"
        variant="primary"
        trustNote="着手前キャンセル無料・進捗共有あり・残金は書類写し確認後にご案内"
      />

      <FaqSection
        items={[
          { q: 'K-1ビザに必要な基本書類は何ですか？', a: '一般的にはCENOMAR、PSA出生証明書、NBIクリアランスが中心です。提出先の条件でアポスティーユや翻訳が追加されます。' },
          { q: 'CR-1/IR-1では何が変わりますか？', a: 'CENOMARではなくPSA婚姻証明書が中心になります。婚姻成立を示す書類が必要だからです。' },
          { q: '日本向けでは何に注意すればいいですか？', a: '日本語翻訳、提出先ごとの書式、アポスティーユの要否を確認することです。市区町村や入管で少し条件が変わります。' },
          { q: '書類をまとめて頼むと早くなりますか？', a: 'はい。CENOMAR、PSA出生証明書、NBIクリアランスなどは同時に進めやすく、全体の待ち時間を短縮しやすいです。' },
        ]}
        ctaTitle="まとめて進めたい方へ"
        ctaButton="書類をまとめて相談"
      />

      <RelatedArticles
        items={[
          { href: '/ja/cenomar-vs-marriage-certificate/', title: 'CENOMARと婚姻証明書の違い', description: 'どちらを取るべきか迷うときの最初の確認ページです。' },
          { href: '/ja/psa-shussei-shomeisho/', title: 'PSA出生証明書取得代行', description: '国際結婚・配偶者ビザ・帰化申請で使う基本書類です。' },
          { href: '/ja/nbi-clearance/', title: 'NBIクリアランス取得代行', description: 'HIT対応を含めて、取得の流れを確認できます。' },
          { href: '/ja/kika-shinsei-guide/', title: '帰化申請の書類代行', description: 'PSA出生証明書・NBI Clearance・アポスティーユを法務局要件で。' },
          { href: '/ja/gaimen-kirikae-guide/', title: '外免切替ガイド', description: 'フィリピン書類の中でも反響の大きいテーマです。' },
        ]}
      />
    </PageLayout>
  );
}
