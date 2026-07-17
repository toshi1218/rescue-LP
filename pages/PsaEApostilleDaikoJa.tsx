import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import SummaryBlock from '../components/SummaryBlock';
import FeatureList from '../components/FeatureList';
import IconCardGrid from '../components/IconCardGrid';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import RelatedArticles from '../components/RelatedArticles';
import { AlertTriangle, Smartphone, IdCard, ScanFace, Globe, Users, RefreshCw, CheckCircle, Truck } from 'lucide-react';
import { useMeta } from '../lib/useMeta';

const TITLE = 'PSAアポスティーユのオンライン申請代行【2026年最新】海外在住フィリピン人向け';
const DESCRIPTION = '2026年3月のDFA完全電子化以降、PSA書類のアポスティーユ（e-Apostille）はオンライン申請のみになりました。OTP・身分証・顔認証を海外から同時に通すのが難しい方、ご家族が外国籍で委任状の署名一致に不安がある方へ。代理申請から却下時の再申請まで対応します。';

export default function PsaEApostilleDaikoJa() {
  useMeta(TITLE, DESCRIPTION);

  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'PSAアポスティーユ オンライン申請代行' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'PSAアポスティーユ（e-Apostille）オンライン申請代行',
          description: '2026年3月のDFA完全電子化以降のPSA証明書e-Apostilleオンライン申請を代理サポート。OTP・身分証・顔認証の突破、外国籍家族の委任状署名確認、却下時の再申請まで対応。',
          url: 'https://ph-document.com/ja/psa-e-apostille-daiko/',
          provider: { '@type': 'Organization', name: 'IGRS Inc.', url: 'https://ph-document.com/ja/' },
          areaServed: ['US', 'CA', 'AU', 'GB', 'JP', 'KR', 'AE'],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'e-Apostilleは紙に印刷して使えますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'いいえ。e-Apostilleは印刷すると無効になる仕組みのデジタル証明書です。提出先にはPDFのまま、またはオンライン検証の形で提出する必要があります。提出先が紙の原本を必須とする場合は、別途ご相談ください。',
              },
            },
            {
              '@type': 'Question',
              name: '家族がフィリピン国外に住んでいてもオンライン申請はできますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'はい、可能です。ただし本人確認（OTP受信・身分証・顔認証）を海外から行う必要があり、フィリピンの携帯電話番号の準備などが課題になることがあります。当社が代理での申請対応を承ります。',
              },
            },
            {
              '@type': 'Question',
              name: 'フィリピンの身分証を持っていない家族の分も取得できますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '本人確認の方法はケースによって異なります。外国籍に帰化されている場合は外国パスポートでの確認となることが多く、委任状の署名一致などの条件が関わります。状況をお知らせいただければ、対応可否を確認いたします。',
              },
            },
            {
              '@type': 'Question',
              name: '一度却下されてしまいました。もう取得できませんか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '却下されても再申請は可能です。多くの場合、却下理由（主に本人確認書類の不一致）を確認して修正すれば次の申請で通過します。当社は通るまで再申請対応を行います。',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="2026年3月以降、PSA書類のアポスティーユはオンライン（e-Apostille）のみになりました"
        subtitle="ご自身での申請が難しい場合、当社が代理での手続きをサポートします。難しいけれど、できます。何度でも、通るまで対応します。"
        badges={['2026年3月制度変更対応', 'ご家族が海外在住でもOK', '却下時も再申請まで対応']}
        ctaText="無料で相談する"
        ctaHref="#contact"
        lastUpdated="2026年7月1日"
      />

      <SummaryBlock
        conclusion="PSA書類（出生証明書・婚姻証明書・CENOMAR）のDFAアポスティーユは、現在オンライン申請（e-Apostille）が基本の取得方法です。"
        points={[
          '2026年3月16日、DFAはPSA証明書のアポスティーユを完全デジタル化しました',
          'オンライン申請にはOTP・身分証・顔認証（ライブネス認証）を同時に通す必要があります',
          'ご家族が外国籍に帰化している場合、委任状の署名確認が特に重要になります',
          '当社は代理での申請対応、および却下時の再申請までサポートします',
        ]}
      />

      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary tracking-tight">何が変わったのか</h2>
        </div>
        <div className="space-y-4">
          <p className="text-base text-gray-700 leading-relaxed">
            2026年3月16日、フィリピン外務省（DFA）はPSA発行の証明書（出生証明書・婚姻証明書・CENOMARなど）について、アポスティーユ認証を完全デジタル化しました。以前のような「窓口に紙の証明書を持ち込んで物理アポスティーユを貼ってもらう」という方法は、この制度変更に伴う経過措置も終了し、原則として利用できなくなっています。
          </p>
          <p className="text-base text-gray-700 leading-relaxed">
            現在は、ハーグ条約加盟国（日本を含む）向けには<strong>e-Apostille（電子アポスティーユ）</strong>のみが発行されます。これはPDF形式のデジタル証明書で、DFAの検証システムと紐づいており、正規の形式のまま提出先に送る必要があります。
          </p>
        </div>
      </section>

      <IconCardGrid
        heading="自分で申請する場合に必要なもの"
        subheading="事実として、以下がすべて必要になります"
        columns={3}
        cards={[
          { icon: Smartphone, title: 'フィリピンの携帯電話番号', description: 'ワンタイムパスワード（OTP）受信用に必要です。海外在住の場合、事前の準備が課題になることがあります。', accent: 'blue' },
          { icon: IdCard, title: '申請対象者本人の有効な身分証', description: 'フィリピンのIDまたは（外国籍の場合は）パスポート等、有効な本人確認書類が必要です。', accent: 'gold' },
          { icon: ScanFace, title: 'ライブネス認証（顔認証）', description: '本人がその場にいることを確認する顔認証です。OTP・身分証と同じタイミングで、すべて成功させる必要があります。', accent: 'green' },
        ]}
      />

      <FeatureList
        heading="つまずきやすいポイント"
        items={[
          {
            icon: <Globe className="w-4 h-4" />,
            title: '海外在住だと、OTP受信の準備が必要になります',
            description: 'フィリピンの携帯番号を維持していない、または解約済みの場合、OTPを受け取る手段を別途用意する必要があります。',
          },
          {
            icon: <IdCard className="w-4 h-4" />,
            title: 'ご家族が外国籍の場合、委任状の署名一致が重要になります',
            description: 'ご家族がすでに外国籍に帰化し、外国パスポートしかお持ちでない場合、委任状の署名とパスポートの署名が一致しないと申請が却下されることがあります。ただし、却下されても再申請は可能です。慌てず対応できます。',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: 'ご家族が世界各地に散らばっていると、全員分の確認が大変になります',
            description: '書類によっては複数のご家族の本人確認が必要になる場合があります。それぞれ異なる国・タイムゾーンにいると、足並みを揃えるだけでも時間がかかります。',
          },
        ]}
      />

      <CtaBox
        title="難しいと感じたら、代理での申請をご検討ください"
        description="ご自身での申請でつまずいた方、これから申請される方、どちらもご相談いただけます。まずは状況をお聞かせください。"
        buttonText="無料で相談する"
        href="#contact"
        variant="primary"
        trustNote="24時間以内に返信・匿名相談OK・着手前キャンセル無料"
      />

      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary tracking-tight">当社に依頼した場合</h2>
        </div>
        <ul className="space-y-3">
          {[
            { icon: CheckCircle, title: '代理での申請・本人確認対応', detail: 'OTP受信の準備から、身分証・顔認証の突破まで、現地スタッフが手順を把握したうえで進めます。' },
            { icon: CheckCircle, title: '署名の事前確認で却下を予防', detail: '委任状にご署名いただく前に、パスポート等の署名と照合し、却下されにくい形を確認します。' },
            { icon: RefreshCw, title: '却下されても、通るまで再申請', detail: '万一却下された場合も、理由を確認したうえで再申請します。追加費用の扱いは事前にご案内します。' },
            { icon: Truck, title: '日本（またはご指定先）への一括配送', detail: '取得後の証明書データ・必要に応じた案内まで、まとめてお届けします。' },
          ].map((item) => (
            <li key={item.title} className="flex items-start gap-3">
              <item.icon className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm font-bold text-gray-800 mb-0.5">{item.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <StepList
        heading="ご依頼の流れ"
        steps={[
          { title: '無料相談', description: 'どなたの、どの証明書が必要か、ご家族の国籍状況も含めてお知らせください。' },
          { title: '状況確認・お見積り', description: '本人確認の準備状況を踏まえ、進め方と費用の目安をご案内します。' },
          { title: '委任状・本人確認書類のご準備', description: '署名の事前確認を行い、却下されにくい形で書類を整えます。' },
          { title: '代理申請・結果のご報告', description: '申請状況を随時ご報告します。却下があれば理由を確認し、再申請します。' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'e-Apostilleは紙に印刷して使えますか？', a: 'いいえ。e-Apostilleは印刷すると無効になる仕組みのデジタル証明書です。提出先にはPDFのまま提出する必要があります。提出先が紙の原本を必須とする場合は、別途ご相談ください。' },
          { q: '家族がフィリピン国外に住んでいてもオンライン申請はできますか？', a: 'はい、可能です。ただし本人確認（OTP受信・身分証・顔認証）を海外から行う必要があり、準備が課題になることがあります。当社が代理での申請対応を承ります。' },
          { q: 'フィリピンの身分証を持っていない家族の分も取得できますか？', a: '本人確認の方法はケースによって異なります。外国籍に帰化されている場合は外国パスポートでの確認となることが多いです。状況をお知らせいただければ対応可否を確認いたします。' },
          { q: '一度却下されてしまいました。もう取得できませんか？', a: '却下されても再申請は可能です。多くの場合、却下理由を確認して修正すれば次の申請で通過します。当社は通るまで再申請対応を行います。' },
        ]}
      />

      <RelatedArticles
        heading="関連ガイド"
        items={[
          { href: '/ja/apostille/', title: 'DFAアポスティーユ代行', description: 'PSA・CENOMAR・NBI等の書類取得と同時依頼も可能です。' },
          { href: '/ja/cenomar-apostille/', title: 'CENOMARのDFAアポスティーユ', description: 'CENOMARに特化したアポスティーユ取得代行の詳細。' },
          { href: '/ja/psa-ecertificate-nihon/', title: 'PSA電子文書は日本で使える？', description: '入管・市区町村でのe-Apostille受領状況を解説。' },
          { href: '/ja/kika-shinsei-guide/', title: '帰化申請の書類代行', description: '帰化申請に必要なPSA・NBI・アポスティーユの取得代行。' },
        ]}
      />
    </PageLayout>
  );
}
