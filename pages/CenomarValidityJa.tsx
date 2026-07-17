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

      <section className="mb-10">
        <h2 className="text-base font-bold text-gray-900 mb-4">【提出先別】CENOMAR有効期限の目安</h2>
        <div className="text-sm text-gray-700 leading-relaxed space-y-3">
          <p>CENOMAR自体に、発行元のPSA（フィリピン統計局）が定める法的な有効期限はありません。有効期限を実質的に決めているのは「提出先」で、その基準は提出先ごとに異なります。以下は代表的な目安です（最終的には各提出先の最新の案内を必ずご確認ください）。</p>
          <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
            <ul className="space-y-2">
              <li><strong>市区町村役場（婚姻届）</strong>：発行から6ヶ月以内を目安とすることが多い</li>
              <li><strong>出入国在留管理庁（配偶者ビザ・在留資格申請）</strong>：書類の新しさを重視される傾向。提出時点でなるべく新しい発行日のものが安全（提出先の案内に従う）</li>
              <li><strong>在日フィリピン大使館（婚姻要件具備証明書・LCCM取得時）</strong>：発行から6ヶ月以内</li>
              <li><strong>法務局（帰化申請）</strong>：申請前3〜6ヶ月以内が目安（管轄法務局により異なる）</li>
            </ul>
          </div>
          <p>共通する考え方は「取得が早すぎると、提出前に期限が切れてしまう」という点です。特に、婚姻届→配偶者ビザ、といった手続きが連続する場合、最初の手続きに合わせて早く取ると、後半の手続きの時点で期限切れになることがあります。提出スケジュール全体を見て、逆算して取得時期を決めるのが安全です。</p>
        </div>
      </section>

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

      <section className="mb-10">
        <h2 className="text-base font-bold text-gray-900 mb-4">有効期限切れを防ぐ「逆算」の考え方</h2>
        <div className="text-sm text-gray-700 leading-relaxed space-y-3">
          <p>CENOMARは「早く取れば安心」というものではありません。取得が早すぎると、肝心の提出日には6ヶ月を過ぎてしまうことがあります。次の順序で逆算すると、期限切れを避けやすくなります。</p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>提出先と提出予定日を確定する（例：配偶者ビザ申請を◯月に提出）</li>
            <li>その提出先が求める有効期限を確認する（例：発行から6ヶ月以内）</li>
            <li>提出日から逆算して「取得しても期限内に収まる最も早い時期」を決める</li>
            <li>PSA取得＋DFAアポスティーユ＋郵送にかかる期間（おおむね1ヶ月〜1ヶ月半）を見込んで申請を開始する</li>
          </ol>
          <p>複数の書類・手続きが連続する場合は、最も期限が厳しい提出先に合わせるのが基本です。判断が難しいときは、提出予定日をお知らせいただければ、逆算して最適な申請開始時期をご案内します。</p>
        </div>
      </section>

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
