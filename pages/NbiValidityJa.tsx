import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { Clock, Calendar, FileCheck, Globe } from 'lucide-react';
import SummaryBlock from '../components/SummaryBlock';

export default function NbiValidityJa() {
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'NBI Clearance有効期限と取得タイミング' }]}
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'NBI Clearance有効期限・最適タイミングでの代行取得',
        description: 'NBI Clearanceの有効期限（発行から1年、提出先によっては6ヶ月以内）を踏まえ、提出予定日から逆算して最適なタイミングで代行取得。期限切れによる再取得リスクをなくします。',
        url: 'https://ph-document.com/ja/nbi-koyukigen',
        provider: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/ja/',
        },
        areaServed: { '@type': 'Country', name: 'JP' },
      }}
    >
      <HeroBanner
        title="NBI Clearanceの取得タイミング、一緒に確認します"
        badges={['日本語だけでOK', '提出期限に合わせて手配', 'コミコミ料金']}
        ctaText="無料相談はこちら"
        ctaHref="#contact"
      />

      <SummaryBlock
        conclusion="NBI Clearanceの有効期限と取得タイミング、一緒に確認します。期限切れで再取得になるリスクをなくします。"
        points={[
          'NBI Clearanceは発行から1年有効。ただし提出先によっては6ヶ月以内を求める場合も',
          '提出予定日から逆算して、最適な申請開始時期をご案内',
          '取得後に期限切れになった場合の再取得にも対応',
          '配偶者ビザ・帰化申請・就労ビザ、どのスケジュールにも対応',
        ]}
        ctaText="無料で相談する（24時間以内に返信）"
      />

      <FeatureList
        heading="こんな方へ"
        items={[
          {
            icon: <Clock className="w-4 h-4" />,
            title: '有効期限が切れないか心配',
            description: 'NBI Clearanceは発行から1年間有効です。ただし提出先によっては6ヶ月以内のものを求める場合があります。提出スケジュールに合わせて取得時期を調整します。',
          },
          {
            icon: <Calendar className="w-4 h-4" />,
            title: '配偶者ビザ申請の期限が決まっている',
            description: '提出予定日から逆算して、最適なタイミングで申請を開始します。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: '取得後に有効期限が切れてしまった',
            description: '再取得が必要な場合も、スムーズに対応します。まずは状況をお知らせください。',
          },
        ]}
      />

      <CtaBox
        title="提出予定日を教えてください"
        description="逆算して最適な申請開始時期をご案内します。「いつ頃取ればいいか」という相談だけでも大丈夫です。"
        buttonText="無料で相談する"
        href="#contact"
        variant="primary"
      />

      <FeatureList
        heading="料金に含まれるもの"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'NBI Clearance取得',
            description: 'フィリピン国家捜査局（NBI）への申請・取得を代行します。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'DFAアポスティーユ（必要な場合）',
            description: '提出先の要件に応じてDFAアポスティーユ認証も手配します。',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: '国際郵送（日本へ）',
            description: '追跡番号付きの国際郵便で日本のご住所へお届けします。',
          },
        ]}
      />

      <CtaBox
        title="期限に間に合わせるために、早めのご相談を"
        description="手続き全体に約1ヶ月〜かかります。余裕を持って動き始めることが、一番のリスク回避です。"
        buttonText="今すぐ相談する"
        href="#contact"
        variant="secondary"
      />

      <StepList
        heading="ご依頼の流れ"
        steps={[
          { title: '提出予定日を共有', description: '配偶者ビザ申請などの提出予定日をお知らせください。' },
          { title: '申請開始時期を確認', description: '逆算して最適な申請開始時期と料金をご提示します。' },
          { title: 'フィリピン現地で手配', description: 'NBI取得・DFAアポスティーユを現地スタッフが進めます。' },
          { title: '日本へ郵送', description: '書類が揃い次第、追跡付きでお届けします。' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'NBI Clearanceの有効期限はどのくらいですか？', a: '発行から1年間有効です。ただし提出先によっては6ヶ月以内のものを求める場合があります。提出スケジュールに合わせて取得時期を決めることが重要です。' },
          { q: '取得してから使うまでに時間がかかりそうです', a: '提出予定日をお知らせいただければ、逆算して最適な申請開始時期をご案内します。' },
          { q: '急ぎで必要です', a: '可能です。提出期限をお知らせいただければ、優先対応の可否を確認してご案内します。' },
          { q: '料金はいくらですか？', a: 'NBI取得・DFAアポスティーユ（必要な場合）・国際郵送をまとめたコミコミ料金です。無料相談後に正確な金額をご提示します。' },
        ]}
        ctaTitle="まずは状況をお聞かせください"
        ctaButton="無料相談フォームへ"
      />
    </PageLayout>
  );
}
