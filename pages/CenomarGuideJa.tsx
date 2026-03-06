import React from 'react';
import { CheckCircle, Package, Shield, Clock } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR_MONTH_JA } from '../lib/seoDate';

export default function CenomarGuideJa() {
  useMeta(
    `CENOMAR（独身証明書）取得代行【${SEO_YEAR_MONTH_JA}】アポスティーユ付き｜フィリピン書類センター`,
    '国際結婚・配偶者ビザに必要なCENOMAR、DFAアポスティーユ付きで日本へお届け。日本語だけで依頼OK。まずは無料相談。'
  );

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://ph-document.com/ja/' },
          { '@type': 'ListItem', position: 2, name: 'CENOMAR取得代行', item: 'https://ph-document.com/ja/cenomar/' },
        ],
      },
      {
        '@type': 'Service',
        name: 'CENOMAR（独身証明書）取得代行',
        provider: { '@type': 'Organization', name: '株式会社IGRS', url: 'https://ph-document.com/' },
        areaServed: 'JP',
        description: 'フィリピンPSA発行のCENOMAR（独身証明書）をDFAアポスティーユ付きで取得代行。日本語対応。',
      },
    ],
  };

  return (
    <PageLayout
      breadcrumbs={[
        { label: 'ホーム', href: '/ja/' },
        { label: 'CENOMAR取得代行' },
      ]}
      jsonLd={jsonLd}
    >
      <HeroBanner
        title={<>CENOMAR（独身証明書）<br className="hidden md:block" />取得代行</>}
        badges={['コミコミ料金', '日本語だけでOK', 'アポスティーユ付き', '約1ヶ月〜']}
        ctaText="まずは無料相談"
      />

      <FeatureList
        heading="こんな方が利用しています"
        items={[
          {
            icon: <CheckCircle className="w-5 h-5 text-primary" />,
            title: '国際結婚を予定している',
            description: '婚姻届に必要なCENOMAR、自分で取り寄せる手間を省きたい方',
          },
          {
            icon: <CheckCircle className="w-5 h-5 text-primary" />,
            title: '配偶者ビザを申請する',
            description: '入管に提出するCENOMAR、アポスティーユ付きで必要な方',
          },
          {
            icon: <CheckCircle className="w-5 h-5 text-primary" />,
            title: '英語での手続きが不安',
            description: 'PSAへの申請もDFAアポスティーユも、すべて日本語で依頼したい方',
          },
          {
            icon: <CheckCircle className="w-5 h-5 text-primary" />,
            title: 'フィリピンに行けない',
            description: '渡航せずに日本から書類を手配したい方',
          },
        ]}
      />

      <CtaBox
        title="何が必要かわからなくても大丈夫です"
        description="目的を伝えるだけで、必要書類をご案内します。"
        buttonText="無料相談する"
      />

      <FeatureList
        heading="料金に含まれるもの"
        items={[
          {
            icon: <Package className="w-5 h-5 text-primary" />,
            title: 'PSA CENOMAR取得',
            description: 'フィリピン統計局からのCENOMAR原本取得',
          },
          {
            icon: <Shield className="w-5 h-5 text-primary" />,
            title: 'DFAアポスティーユ',
            description: 'フィリピン外務省の認証手続き（市役所・入管提出に必須）',
          },
          {
            icon: <Clock className="w-5 h-5 text-primary" />,
            title: '国際郵送',
            description: 'EMS等で日本のご住所までお届け。追跡番号付き',
          },
        ]}
      />

      <CtaBox
        title="追加費用なし、コミコミ料金です"
        buttonText="見積もりを依頼する"
        variant="secondary"
      />

      <StepList
        heading="ご依頼の流れ"
        steps={[
          {
            title: 'お問い合わせ',
            description: 'フォームまたはメールでご連絡。目的と必要書類を確認します。',
          },
          {
            title: 'お見積もり・ご入金',
            description: 'コミコミ料金をご提示。ご了承後、お支払い。',
          },
          {
            title: '現地スタッフが取得',
            description: 'PSA申請→DFAアポスティーユ→国際郵送を一括代行。',
          },
          {
            title: 'お届け',
            description: '追跡番号付きでご自宅へ。届いたら内容確認。',
          },
        ]}
      />

      <FaqSection
        items={[
          {
            q: '費用はいくらですか？',
            a: '書類の種類と枚数によって異なります。お問い合わせいただければ、コミコミの見積もりをお出しします。追加請求はありません。',
          },
          {
            q: 'どのくらいで届きますか？',
            a: '目安として約4〜6週間です。PSA発行に2〜3週間、DFAアポスティーユに1〜2週間、国際郵送に3〜5営業日。お急ぎの場合は事前にご相談ください。',
          },
          {
            q: '何を準備すればいいですか？',
            a: 'パスポートのコピー（氏名スペル確認用）と、ご利用目的をお伝えいただくだけで大丈夫です。',
          },
          {
            q: 'アポスティーユは必要ですか？',
            a: '日本の市役所や入管に提出する場合はほぼ必須です。当サービスはアポスティーユ付きがデフォルトですのでご安心ください。',
          },
          {
            q: '急ぎの対応はできますか？',
            a: '可能な限り対応します。締切日をお伝えいただければ、スケジュールを調整してご案内します。',
          },
        ]}
        ctaTitle="まだ疑問がありますか？"
        ctaButton="無料で相談する"
      />
    </PageLayout>
  );
}
