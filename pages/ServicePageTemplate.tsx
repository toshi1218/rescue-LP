import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';

type Lang = 'ja' | 'en';

type ServicePageTemplateProps = {
  lang: Lang;
  routePath: string;
  title: string;
  badges: string[];
};

export default function ServicePageTemplate({ lang, routePath, title, badges }: ServicePageTemplateProps) {
  const isJa = lang === 'ja';

  const homeLabel = isJa ? 'ホーム' : 'Home';
  const homeHref = isJa ? '/ja/' : '/en/';
  const audienceHeading = isJa ? 'こんな方へ' : 'Who This Is For';
  const includesHeading = isJa ? '料金に含まれるもの' : "What's Included";
  const stepsHeading = isJa ? 'ご依頼の流れ' : 'How It Works';

  return (
    <PageLayout
      breadcrumbs={[{ label: homeLabel, href: homeHref }, { label: title }]}
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: title,
        url: `https://ph-document.com${routePath}`,
        provider: { '@type': 'Organization', name: 'IGRS Inc.' },
      }}
    >
      <HeroBanner title={title} badges={badges} ctaText={isJa ? '無料相談はこちら' : 'Start Free Consultation'} ctaHref="#contact" />

      <FeatureList
        heading={audienceHeading}
        items={[
          {
            icon: '01',
            title: isJa ? '日本在住でフィリピン書類が必要' : 'Applying from the USA',
            description: isJa ? '必要書類を先に整理し、再提出リスクを減らします。' : 'We confirm requirements first to reduce re-submission risk.',
          },
          {
            icon: '02',
            title: isJa ? '提出期限に合わせて進めたい' : 'Need USCIS or NVC-ready documents',
            description: isJa ? '提出先要件に合わせて段取りを作成します。' : 'We align document flow with submission requirements.',
          },
          {
            icon: '03',
            title: isJa ? '日本語だけで進めたい' : 'Want one contact point in English',
            description: isJa ? '進捗共有を含め日本語で対応します。' : 'All communication is in English with clear status updates.',
          },
        ]}
      />

      <CtaBox
        title={isJa ? 'まずは無料相談で要件確認' : 'Start with a quick requirements check'}
        description={isJa ? '必要書類を過不足なく確認し、確実に進めます。' : 'We verify your case and proceed with only required steps.'}
        buttonText={isJa ? '無料で相談する' : 'Talk to Us'}
        href="#contact"
        variant="primary"
      />

      <FeatureList
        heading={includesHeading}
        items={[
          {
            icon: 'A',
            title: isJa ? '書類取得手配' : 'Document retrieval handling',
            description: isJa ? '必要書類の取得を一括で進めます。' : 'Core retrieval process is handled end-to-end.',
          },
          {
            icon: 'B',
            title: isJa ? '必要時の認証手配' : 'Certification when required',
            description: isJa ? '用途に応じて認証手続きまで対応します。' : 'Certification flow is included when your case needs it.',
          },
          {
            icon: 'C',
            title: isJa ? '国際配送' : 'International DHL shipping',
            description: isJa ? '追跡付きで日本住所へ配送します。' : 'Tracked delivery to your US address.',
          },
        ]}
      />

      <CtaBox
        title={isJa ? '提出期限がある案件も対応' : 'Deadline-sensitive cases are supported'}
        description={isJa ? '開始前に可否を確認して案内します。' : 'We confirm feasibility before start when a deadline exists.'}
        buttonText={isJa ? '納期を相談する' : 'Check Timeline'}
        href="#contact"
        variant="secondary"
      />

      <StepList
        heading={stepsHeading}
        steps={isJa
          ? [
              { title: 'フォーム送信', description: '用途と提出予定日を共有' },
              { title: '必要書類確認', description: '必要書類を確定して見積提示' },
              { title: '取得手続き', description: '現地で取得・必要認証を進行' },
              { title: '配送完了', description: '追跡番号付きでお届け' },
            ]
          : [
              { title: 'Submit inquiry', description: 'Share your use case and target date' },
              { title: 'Document scope confirmation', description: 'We confirm required documents and quote' },
              { title: 'Processing', description: 'Our local team handles retrieval and certification' },
              { title: 'DHL delivery', description: 'Shipment with tracking to your address' },
            ]}
      />

      <FaqSection
        items={isJa
          ? [
              { q: '料金はいくらですか？', a: '案件ごとに必要書類が異なるため、無料相談後にコミコミ料金を提示します。' },
              { q: 'いつ届きますか？', a: '通常は約1か月〜です。期限がある場合は先に可否を案内します。' },
              { q: '提出期限に合わせて確実に手配できますか？', a: 'はい。提出予定日をお知らせいただければ、逆算してスケジュールをご案内します。進捗は随時ご報告します。' },
            ]
          : [
              { q: 'How much does it cost?', a: 'Pricing depends on your case. We provide all-inclusive pricing after review.' },
              { q: 'How long does it take?', a: 'Most cases complete in about 4-6 weeks including DHL shipping.' },
              { q: 'Can you handle urgent cases?', a: 'Yes. Share your deadline and we will confirm priority options first.' },
            ]}
        ctaTitle={isJa ? 'まずは状況を共有してください' : 'Share your case and we will guide your next step'}
        ctaButton={isJa ? '無料相談フォームへ' : 'Go to Contact Form'}
      />
    </PageLayout>
  );
}

