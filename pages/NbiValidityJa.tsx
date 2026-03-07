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
      jsonLd={[
        {
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
          offers: {
            '@type': 'Offer',
            priceCurrency: 'JPY',
            price: '50000',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: '50000',
              priceCurrency: 'JPY',
              description: 'NBI Clearance取得・DFAアポスティーユ・国際郵送込み（税抜）',
            },
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'NBI Clearanceの有効期限はどのくらいですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '発行から1年間有効です。ただし提出先によっては6ヶ月以内のものを求める場合があります。提出スケジュールに合わせて取得時期を決めることが重要です。',
              },
            },
            {
              '@type': 'Question',
              name: '取得してから使うまでに時間がかかりそうです',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '提出予定日をお知らせいただければ、逆算して最適な申請開始時期をご案内します。',
              },
            },
            {
              '@type': 'Question',
              name: '提出期限に合わせて確実に取得できますか？',
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
        title="配偶者ビザ・帰化申請の提出予定日を教えてください"
        description="NBI Clearanceは発行から1年有効ですが、提出先によっては6ヶ月以内が求められます。提出予定日から逆算して、最適な申請開始時期をご案内します。"
        buttonText="無料で相談する"
        href="#contact"
        variant="primary"
        trustNote="逹謇句燕繧ｭ繝｣繝ｳ繧ｻ繝ｫ辟｡譁吶・騾ｲ謐励ｒ髫乗凾縺泌ｱ蜻翫・譖ｸ鬘槫・縺礼｢ｺ隱榊ｾ後↓谿矩≡縺頑髪謇輔＞"
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
        title="NBI Clearanceは「ギリギリで取る」と失敗します"
        description="NBI取得・DFAアポスティーユ・郵送で全体約1ヶ月〜かかります。HITが出た場合はさらに時間が必要です。余裕を持って動き始めることが、ビザ申請を止めない唯一の方法です。"
        buttonText="今すぐ相談する"
        href="#contact"
        variant="secondary"
        trustNote="日本語のみでOK・匿名相談可・返信24時間以内"
      />

      <StepList
        heading="ご依頼の流れ"
        steps={[
          { title: 'ビザ申請・帰化申請の提出予定日を共有', description: '「いつまでに提出が必要か」をお知らせください。NBI Clearanceの有効期限（1年、提出先によっては6ヶ月）を考慮して申請開始時期を確認します。' },
          { title: '申請開始時期と料金をご提示', description: 'HIT（同名者あり）のリスクも考慮した余裕のあるスケジュールと、コミコミ料金をご案内します。' },
          { title: 'NBI取得・DFAアポスティーユを代行', description: '現地スタッフがNBI申請・DFAアポスティーユを進めます。HITが出た場合も対応します。' },
          { title: '日本へ郵送・完了', description: '追跡付きでお届けします。提出期限に間に合うよう、スケジュールを管理します。' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'NBI Clearanceの有効期限はどのくらいですか？', a: '発行から1年間有効です。ただし提出先によっては6ヶ月以内のものを求める場合があります。提出スケジュールに合わせて取得時期を決めることが重要です。' },
          { q: '取得してから使うまでに時間がかかりそうです', a: '提出予定日をお知らせいただければ、逆算して最適な申請開始時期をご案内します。' },
          { q: '提出期限に合わせて確実に取得できますか？', a: 'はい。提出予定日をお知らせいただければ、逆算してスケジュールをご案内します。書類が確実に揃うよう、進捗を随時ご報告しながら進めます。' },
          { q: '料金はいくらですか？', a: 'NBI取得・DFAアポスティーユ（必要な場合）・国際郵送をまとめたコミコミ料金です。無料相談後に正確な金額をご提示します。' },
        ]}
        ctaTitle="まずは状況をお聞かせください"
        ctaButton="無料相談フォームへ"
      />
    </PageLayout>
  );
}
