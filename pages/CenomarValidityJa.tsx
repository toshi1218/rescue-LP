import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { Clock, Calendar, FileCheck, Globe, AlertTriangle, CheckCircle, Users } from 'lucide-react';
import SummaryBlock from '../components/SummaryBlock';
import SectionDivider from '../components/SectionDivider';
import IconCardGrid from '../components/IconCardGrid';
import ComparisonTable from '../components/ComparisonTable';
import { useMeta } from '../lib/useMeta';

export default function CenomarValidityJa() {
  useMeta(
    'CENOMARの有効期限【2026年3月】発行から6ヶ月が目安｜提出先別の基準まとめ',
    'CENOMARの有効期限は多くの提出先で発行から6ヶ月以内。入管・市区町村役場・大使館など提出先別の基準と、期限切れを防ぐ最適な取得タイミングを解説します。',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'CENOMAR有効期限と取得タイミング' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'CENOMAR有効期限・最適タイミングでの代行取得',
          description: 'CENOMARの有効期限（多くの提出先で6ヶ月以内）を踏まえ、提出予定日から逆算して最適なタイミングで代行取得。期限切れによる再取得リスクをなくします。',
          url: 'https://ph-document.com/ja/cenomar-koyukigen/',
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
              description: 'PSA CENOMAR取得・DFAアポスティーユ込み（税抜）。DHL国際郵送費は実費別途',
            },
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'CENOMARの有効期限はどのくらいですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '法律上の有効期限はありませんが、ほとんどの提出先（大使館・市役所・入管）が発行から6ヶ月以内のものを求めます。提出スケジュールに合わせて取得時期を決めることが重要です。',
              },
            },
            {
              '@type': 'Question',
              name: '取得してから使うまでに時間がかかりそうです',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '提出予定日をお知らせいただければ、逆算して最適な申請開始時期をご案内します。早すぎると有効期限切れのリスクがあります。',
              },
            },
            {
              '@type': 'Question',
              name: '提出予定日に合わせてスケジュールを組んでもらえますか？',
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
        title="CENOMARの有効期限"
        badges={['有効期限の確認から対応', 'PSAアポスティーユ込み', '費用は事前にご案内']}
        ctaText="無料相談はこちら"
        ctaHref="#contact"
        lastUpdated="2026年3月1日"
      />

      <SummaryBlock
        conclusion="CENOMARの有効期限と取得タイミング、一緒に確認します。期限切れで再取得になるリスクをなくします。"
        points={[
          'CENOMARは多くの提出先で「発行から6ヶ月以内」が求められる',
          '提出予定日から逆算して、最適な申請開始時期をご案内',
          '取得後に期限切れになった場合の再取得にも対応',
          '婚姻届・ビザ申請・帰化申請、どのスケジュールにも対応',
        ]}
        ctaText="無料で相談する"
      />

      <SectionDivider variant="beige">
        <IconCardGrid
          heading="こんな方に選ばれています"
          columns={3}
          cards={[
            { icon: Clock, title: '有効期限が切れないか心配', description: 'CENOMARは多くの提出先で発行から6ヶ月以内のものが求められます。提出スケジュールに合わせて取得時期を調整します。', accent: 'gold' },
            { icon: Calendar, title: '婚姻届・ビザ申請の期限が決まっている', description: '提出予定日から逆算して、最適なタイミングで申請を開始します。早すぎても遅すぎても困ります。', accent: 'blue' },
            { icon: FileCheck, title: '取得後に有効期限が切れてしまった', description: '再取得が必要な場合も、スムーズに対応します。まずは状況をお知らせください。', accent: 'green' },
          ]}
        />
      </SectionDivider>

      <CtaBox
        title="婚姻届・ビザ申請の予定日を教えてください"
        description="CENOMARは取得から6ヶ月以内が求められるケースが多いです。提出予定日から逆算して、最適な申請開始時期をご案内します。"
        buttonText="無料で相談する"
        href="#contact"
        variant="primary"
        trustNote="着手金50%・書類取得・DHL配送準備完了後に残金50%お支払い・着手前キャンセル無料"
      />

      <SectionDivider variant="blue">
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
              title: 'DFAアポスティーユ認証（※日本の手続きではほぼ必須です）',
              description: '提出先の要件に応じてDFAアポスティーユ認証も手配します。',
            },
          ]}
        />

        <ComparisonTable
          heading="自分でスケジュール管理 vs IGRS代行"
          rows={[
            { item: '有効期限の逆算・確認', self: '要自己管理', agency: true },
            { item: '最適な申請開始時期の案内', self: false, agency: true },
            { item: 'PSA・DFAアポスティーユ手配', self: false, agency: true },
            { item: '期限切れ時の再取得対応', self: false, agency: true },
            { item: '進捗報告', self: false, agency: true },
          ]}
        />
      </SectionDivider>

      <StepList
        heading="ご依頼の流れ"
        variant="visual"
        steps={[
          { title: '婚姻届・ビザ申請の予定日を共有', description: '「いつまでに提出が必要か」をお知らせください。逆算してCENOMARの申請開始時期を確認します。' },
          { title: '申請開始時期と料金をご提示', description: 'CENOMARの有効期限（6ヶ月以内）を考慮した最適なタイミングと、料金をご案内します。' },
          { title: 'PSA取得・DFAアポスティーユを代行', description: '現地スタッフがPSA申請・DFAアポスティーユを進めます。進捗は随時ご報告します。' },
          { title: '日本へ郵送・完了', description: '追跡付きでお届けします。提出期限に間に合うよう、スケジュールを管理します。' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'CENOMARの有効期限はどのくらいですか？', a: '法律上の有効期限はありませんが、ほとんどの提出先（大使館・市役所・入管）が発行から6ヶ月以内のものを求めます。提出スケジュールに合わせて取得時期を決めることが重要です。' },
          { q: '取得してから使うまでに時間がかかりそうです', a: '提出予定日をお知らせいただければ、逆算して最適な申請開始時期をご案内します。早すぎると有効期限切れのリスクがあります。' },
          { q: '提出予定日に合わせてスケジュールを組んでもらえますか？', a: '提出予定日をお知らせいただければ、逆算してスケジュールをご案内します。現地機関の処理状況により前後する場合がありますが、進捗は随時ご報告しながら進めます。' },
          { q: '料金はいくらですか？', a: 'PSA取得・DFAアポスティーユをまとめた料金です。（DHL国際郵送費は実費別途となります）無料相談後に正確な金額をご提示します。' },
        ]}
        ctaTitle="まずは状況をお聞かせください"
        ctaButton="無料相談フォームへ"
      />
    </PageLayout>
  );
}
