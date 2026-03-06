import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { Clock, Calendar, FileCheck, Globe } from 'lucide-react';

export default function CenomarValidityJa() {
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'CENOMAR有効期限と取得タイミング' }]}
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'CENOMAR有効期限・取得タイミング相談',
        url: 'https://ph-document.com/ja/cenomar-koyukigen',
        provider: { '@type': 'Organization', name: 'IGRS Inc.' },
      }}
    >
      <HeroBanner
        title="CENOMARの取得タイミング、一緒に確認します"
        badges={['日本語だけでOK', '提出期限に合わせて手配', 'コミコミ料金']}
        ctaText="無料相談はこちら"
        ctaHref="#contact"
      />

      <FeatureList
        heading="こんな方へ"
        items={[
          {
            icon: <Clock className="w-4 h-4" />,
            title: '有効期限が切れないか心配',
            description: 'CENOMARは多くの提出先で発行から6ヶ月以内のものが求められます。提出スケジュールに合わせて取得時期を調整します。',
          },
          {
            icon: <Calendar className="w-4 h-4" />,
            title: '婚姻届・ビザ申請の期限が決まっている',
            description: '提出予定日から逆算して、最適なタイミングで申請を開始します。早すぎても遅すぎても困ります。',
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
            title: 'PSA CENOMAR取得',
            description: 'フィリピン統計局（PSA）へのCENOMAR申請・取得を代行します。',
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
          { title: '提出予定日を共有', description: '婚姻届・ビザ申請などの提出予定日をお知らせください。' },
          { title: '申請開始時期を確認', description: '逆算して最適な申請開始時期と料金をご提示します。' },
          { title: 'フィリピン現地で手配', description: 'PSA取得・DFAアポスティーユを現地スタッフが進めます。' },
          { title: '日本へ郵送', description: '書類が揃い次第、追跡付きでお届けします。' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'CENOMARの有効期限はどのくらいですか？', a: '法律上の有効期限はありませんが、ほとんどの提出先（大使館・市役所・入管）が発行から6ヶ月以内のものを求めます。提出スケジュールに合わせて取得時期を決めることが重要です。' },
          { q: '取得してから使うまでに時間がかかりそうです', a: '提出予定日をお知らせいただければ、逆算して最適な申請開始時期をご案内します。早すぎると有効期限切れのリスクがあります。' },
          { q: '急ぎで必要です', a: '可能です。提出期限をお知らせいただければ、優先対応の可否を確認してご案内します。' },
          { q: '料金はいくらですか？', a: 'PSA取得・DFAアポスティーユ（必要な場合）・国際郵送をまとめたコミコミ料金です。無料相談後に正確な金額をご提示します。' },
        ]}
        ctaTitle="まずは状況をお聞かせください"
        ctaButton="無料相談フォームへ"
      />
    </PageLayout>
  );
}
