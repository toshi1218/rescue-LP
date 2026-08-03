import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import RelatedLinks from '../components/RelatedLinks';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { AlertTriangle, FileCheck, Globe, Clock, CheckCircle, Fingerprint, ShieldCheck, Users, FileText } from 'lucide-react';
import SummaryBlock from '../components/SummaryBlock';
import SectionDivider from '../components/SectionDivider';
import IconCardGrid from '../components/IconCardGrid';
import ComparisonTable from '../components/ComparisonTable';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR } from '../lib/seoDate';

export default function NbiHitJa() {
  useMeta(
    `NBI HITが出た——あきらめないでください【${SEO_YEAR}年版】HIT解消から代行取得まで対応`,
    'NBI HITは必ずしも犯罪歴ではありません。同姓同名の別人の記録の場合も多い。当センターがHIT確認・解消・NBI取得・DFAアポスティーユまで一括代行。まず状況をご相談ください。',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'NBI HIT対応代行' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'NBI HIT（同名者あり）解消・NBI Clearance申請サポート',
        description: 'NBI ClearanceでHIT（同名者あり）が出た場合の解消手続きからNBI取得・DFAアポスティーユまで一括代行。配偶者ビザ・就労ビザの期限を考慮してスケジュールをご案内します。',
        url: 'https://ph-document.com/ja/nbi-hit/',
        provider: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/ja/',
        },
        areaServed: { '@type': 'Country', name: 'JP' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'JPY',
          price: '55000',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '55000',
            priceCurrency: 'JPY',
            description: 'NBI取得・HIT対応・DFAアポスティーユ込み（税抜）。DHL国際郵送費は実費別途',
          },
        },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'HITが出たら必ずビザが却下されますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'HITはデータベースに記録があることを示すだけで、必ずしも犯罪歴を意味しません。同姓同名の別人の記録の場合もあります。まず内容を確認することが重要です。',
              },
            },
            {
              '@type': 'Question',
              name: 'HIT対応にはどのくらい時間がかかりますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '内容によって異なります。確認手続きだけで数週間かかる場合もあります。早めにご相談いただくことをおすすめします。',
              },
            },
            {
              '@type': 'Question',
              name: '料金はいくらですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '状況によって対応内容が異なるため、無料相談後に料金をご提示します。',
              },
            },
            {
              '@type': 'Question',
              name: 'HITが出た状態でビザ申請期限が近い場合、間に合いますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'HITの解消には内容によって数週間かかることがあります。提出期限が迫っている場合はその期限をお知らせいただければ、現実的なスケジュールをご案内します。',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="NBI HIT 解決サポート"
        badges={['HIT解消から一括対応', 'アポスティーユ込み', '費用は事前にご案内']}
        ctaText="無料相談はこちら"
        ctaHref="#contact"
        lastUpdated="2026年3月1日"
      />

      <SummaryBlock
        conclusion="NBI HITが出ても、あきらめないでください。HIT解消からNBI Clearance取得まで、一括で対応します。"
        points={[
          'HITは必ずしも犯罪歴ではない。同姓同名の別人の記録の場合も多い',
          'HIT確認・解消手続き・NBI取得・DFAアポスティーユまで一括代行',
          'ビザ申請の期限が迫っている場合も、まず状況をご相談ください',
          '日本語だけで対応可能。フィリピンに行く必要なし',
        ]}
        ctaText="無料で相談する"
      />

      {/* 固有コンテンツ：HITとは何か */}
      <section className="mb-10 rounded-2xl bg-white border border-gray-200 p-6">
        <h2 className="text-base font-bold text-gray-900 mb-3">NBI ClearanceでHITが出るとはどういうことか</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          NBI ClearanceのHIT（ヒット）とは、申請者の名前がNBI（National Bureau of Investigation）のデータベースに登録されている何らかの記録と一致したことを意味します。HIT自体は犯罪歴があることを確定するものではありません。
        </p>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          最も多いのが<strong>「同姓同名の別人の記録が引っかかる」</strong>ケースです。フィリピンでは同じ名前の人が多く、特に「Juan dela Cruz」「Maria Santos」などよく見られる名前の方は、身に覚えのないHITが出ることがあります。
        </p>

        <h3 className="text-sm font-bold text-gray-800 mb-3">HIT解消までの一般的な流れ</h3>
        <div className="space-y-3">
          {[
            { step: '1', title: 'HIT通知を受け取る', detail: 'NBI申請後、「HIT」の通知が出る。この時点ではClearanceは発行されない。' },
            { step: '2', title: 'NBIの担当部署で内容確認', detail: 'NBIのHIT担当部署（Regional Office等）に出頭し、記録の内容を確認する手続きが必要。' },
            { step: '3', title: '同名者との区別手続き（Identity Verification）', detail: '自分の記録でないことを証明するための書類提出・指紋照合等を行う。' },
            { step: '4', title: 'ClearanceまたはDerogatory Recordの判定', detail: '問題なければ「Clearance」が発行される。実際に記録が存在する場合は別途対応が必要。' },
          ].map(({ step, title, detail }) => (
            <div key={step} className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/15 text-primary font-bold text-xs flex items-center justify-center mt-0.5">{step}</span>
              <div>
                <p className="text-sm font-bold text-gray-800 mb-0.5">{title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{detail}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-start gap-2 text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg p-3">
          <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
          <span>HIT確認手続きだけで<strong>数週間〜1か月以上</strong>かかることがあります。ビザ申請の期限が迫っている場合は早急に動き始めることが重要です。</span>
        </div>
      </section>

      <SectionDivider variant="beige">
        <FeatureList
          heading="こんな方へ"
          items={[
            {
              icon: <AlertTriangle className="w-4 h-4" />,
              title: 'NBI結果に「HIT」と表示された',
              description: 'HITはNBIのデータベースに何らかの記録が存在することを示します。必ずしも犯罪歴があるわけではありませんが、追加の確認手続きが必要です。',
            },
            {
              icon: <Clock className="w-4 h-4" />,
              title: 'ビザ申請の期限が迫っている',
              description: 'HIT対応には時間がかかる場合があります。早めにご相談いただくことで、対応策を一緒に検討できます。',
            },
            {
              icon: <FileCheck className="w-4 h-4" />,
              title: '身に覚えのないHITが出た',
              description: '同姓同名の別人の記録が引っかかるケースもあります。状況を確認してから対応策をご案内します。',
            },
          ]}
        />

        <IconCardGrid
          heading="HIT解消でお困りの方へ"
          columns={3}
          cards={[
            { icon: AlertTriangle, title: 'HITが突然出た', description: '身に覚えがなくても同姓同名の記録が引っかかるケースが多い。まず状況確認から', accent: 'red' },
            { icon: Fingerprint, title: 'Identity Verification', description: '指紋照合・書類提出で同名者との区別を証明する手続きを代行', accent: 'gold' },
            { icon: Clock, title: '期限が迫っている', description: 'ビザ申請の期限が近い場合も、まず相談ください。スケジュールをご案内します', accent: 'blue' },
            { icon: ShieldCheck, title: 'HIT解消まで一括対応', description: 'NBI窓口との手続き・解消・Clearance取得・DFAアポスティーユまで代行', accent: 'green' },
            { icon: Users, title: '日本語でサポート', description: 'フィリピン語・英語の手続きも当社が対応。日本語だけで完結', accent: 'gold' },
            { icon: Globe, title: 'フィリピン渡航不要', description: '現地スタッフがNBI窓口に対応。日本にいながら手続きを進められます', accent: 'blue' },
          ]}
        />
      </SectionDivider>

      <CtaBox
        title="まず状況を確認しましょう"
        description="HITの内容によって対応が異なります。まずは状況をお知らせください。一緒に次のステップを確認します。"
        buttonText="無料で相談する"
        href="#contact"
        variant="primary"
        trustNote="着手金50%・書類取得・DHL配送準備完了後に残金50%お支払い・着手前キャンセル無料"
      />

      <SectionDivider variant="blue">
        <FeatureList
          heading="対応できること"
          items={[
            {
              icon: <FileCheck className="w-4 h-4" />,
              title: 'HIT内容の確認サポート',
              description: 'NBIへの照会・確認手続きのサポートを行います。',
            },
            {
              icon: <FileCheck className="w-4 h-4" />,
              title: 'クリアランス取得後のアポスティーユ手配',
              description: 'HIT解消後のNBI Clearance取得・DFAアポスティーユまで一括で対応します。',
            },
          ]}
        />
      </SectionDivider>

      <StepList
        heading="ご依頼の流れ"
        variant="visual"
        steps={[
          { title: 'フォームで状況を共有', description: 'HITの内容・提出先・期限をお知らせください。' },
          { title: '対応策の確認', description: '状況に応じた対応策と料金をご案内します。' },
          { title: 'フィリピン現地で手配', description: 'HIT確認・解消手続き・NBI取得を現地スタッフが進めます。' },
          { title: '日本へ郵送', description: '書類が揃い次第、追跡付きでお届けします。' },
        ]}
      />

      <ComparisonTable
        heading="HIT解消 自分で vs 代行"
        rows={[
          { item: 'HIT解消の手続き', self: false, agency: true },
          { item: 'NBI窓口との交渉', self: 'フィリピン語が必要', agency: true },
          { item: '日本語サポート', self: '英語のみ', agency: true },
          { item: 'アポスティーユまで一括', self: false, agency: true },
          { item: '緊急対応の相談', self: '—', agency: true },
        ]}
      />

      <FaqSection
        items={[
          { q: 'HITが出たら必ずビザが却下されますか？', a: 'HITはデータベースに記録があることを示すだけで、必ずしも犯罪歴を意味しません。同姓同名の別人の記録の場合もあります。まず内容を確認することが重要です。' },
          { q: 'HIT対応にはどのくらい時間がかかりますか？', a: '内容によって異なります。確認手続きだけで数週間かかる場合もあります。早めにご相談いただくことをおすすめします。' },
          { q: '料金はいくらですか？', a: '状況によって対応内容が異なるため、無料相談後に料金をご提示します。' },
          { q: 'HITが出た状態でビザ申請期限が近い場合、間に合いますか？', a: 'HITの解消には内容によって数週間かかることがあります。提出期限が迫っている場合はその期限をお知らせいただければ、現実的なスケジュールをご案内します。' },
        ]}
        ctaTitle="まずは状況をお聞かせください"
        ctaButton="無料相談フォームへ"
      />

      <RelatedLinks links={[
        { path: '/ja/nbi-clearance/', label: 'NBI Clearance（無犯罪証明書）申請サポート' },
        { path: '/ja/nbi-koyukigen/', label: 'NBIクリアランスの有効期限' },
        { path: '/ja/nbi-clearance-overseas/', label: '海外在住でのNBI取得' },
        { path: '/ja/apostille/', label: 'DFAアポスティーユ代行' },
        { path: '/ja/haigusha-visa/', label: '配偶者ビザの書類代行' },
      ]} />
    </PageLayout>
  );
}
