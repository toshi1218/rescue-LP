import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import RelatedLinks from '../components/RelatedLinks';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SectionDivider from '../components/SectionDivider';
import IconCardGrid from '../components/IconCardGrid';
import { Heart, AlertTriangle, Clock, FileCheck, Users, ShieldCheck, FileText, CheckCircle } from 'lucide-react';
import SummaryBlock from '../components/SummaryBlock';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR_MONTH_JA } from '../lib/seoDate';

const REQUIREMENTS_FAQ = '提出先によって異なります。在東京フィリピン大使館でLCCMを申請する場合はPSA出生証明書とCENOMARが必要ですが、日本の市区町村へ婚姻届を出す際の必要書類・原本形式は自治体ごとに異なります。提出予定先を確認してから必要な形式を手配します。';

export default function MarriageGuideJa() {
  useMeta(
    `フィリピン人との国際結婚 手続きの流れ・費用・必要書類【${SEO_YEAR_MONTH_JA}】`,
    'フィリピン人との国際結婚の手続き・費用・必要書類を解説。CENOMAR・PSA出生証明書・DFAアポスティーユを日本語で一括代行。日本先行婚・フィリピン先行婚対応。無料相談。',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: '国際結婚 書類代行' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'フィリピン人との国際結婚 手続き・費用・必要書類ガイド',
          description: 'フィリピン人との国際結婚の手続き・費用・必要書類を解説。CENOMAR・PSA出生証明書・DFAアポスティーユを日本語で一括代行。日本先行婚・フィリピン先行婚対応。',
          url: 'https://ph-document.com/ja/kokusai-kekkon-guide/',
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
              description: 'PSA書類取得・DFAアポスティーユ込み（税抜）。DHL国際郵送費は実費別途',
            },
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: '日本先行婚とフィリピン先行婚、どちらがいいですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'どちらが適切かはご状況によります。それぞれのメリット・デメリットを含めてご案内しますので、まずご相談ください。',
              },
            },
            {
              '@type': 'Question',
              name: 'CENOMARとPSA出生証明書、両方必要ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: REQUIREMENTS_FAQ,
              },
            },
            {
              '@type': 'Question',
              name: 'LCCM申請ではPSAの紙原本が必要ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '在東京フィリピン大使館の公式案内はDFAアポスティーユ済みPSA出生証明書・CENOMARの原本とコピーを記載しています。一方、当社が2026年8月に同大使館へ直接確認した際は、LCCM申請ではPSA e-CertificateとDFA e-Apostilleで受付可能で、別途SECPA紙原本は不要との案内でした。公式ページとの表現差があるため、申請時点での再確認を推奨します。',
              },
            },
            {
              '@type': 'Question',
              name: '書類の有効期限はありますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '在東京フィリピン大使館のLCCM案内では、CENOMARは発行から6か月以内とされています。その他の提出先では基準が異なる場合があるため、提出タイミングに合わせて確認します。',
              },
            },
            {
              '@type': 'Question',
              name: 'NBIクリアランスも代行できますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '初回取得は、ご本人様による指紋対応が必要になることがあるため、弊社だけで完結する形ではお受けしにくい案件です。2014年以降に取得歴があり、更新として進めやすい案件を中心に対応しています。まずは状況をご相談ください。',
              },
            },
            {
              '@type': 'Question',
              name: '配偶者ビザ申請の書類も一緒に頼めますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '婚姻書類と配偶者ビザ申請書類をまとめてご相談いただけます。必要な流れを確認し、進め方をご提案します。',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="国際結婚"
        subtitle="フィリピン人との国際結婚の手続き・費用・必要書類をまとめています。日本先行婚・フィリピン先行婚どちらにも対応。"
        badges={['日本語でやり取りOK', '必要書類を整理してご案内', '進捗を随時ご報告']}
        ctaText="無料で相談する"
        ctaHref="#contact"
        lastUpdated="2026年8月15日"
      />

      <SummaryBlock
        conclusion="フィリピン人との国際結婚では、LCCM申請用と日本の市区町村への婚姻届用で、必要書類や求められる形式が同じとは限りません。提出先を確認してから必要なものだけ手配するのが確実です。"
        points={[
          'CENOMAR・PSA出生証明書・DFA e-Apostilleの取得を代行',
          'LCCM用と市区町村提出用の書類を分けて確認',
          '電子版で足りる場合は不要な紙原本を追加しません',
          '紙原本が必要な提出先にはPSA SECPAを追加して手配します',
        ]}
        ctaText="無料で相談する"
      />

      <div className="max-w-2xl mx-auto px-4">
        <SectionDivider variant="beige">
          <h2 className="text-xl font-bold text-gray-900 mb-3">料金・期間の目安</h2>
          <dl className="grid grid-cols-2 gap-3 text-sm">
            <div className="bg-white rounded-lg border border-gray-100 p-3">
              <dt className="text-gray-500 text-xs mb-1">代行料金（税抜）</dt>
              <dd className="font-medium text-gray-800">30,000円〜（書類1種・DFA e-Apostille〈電子〉込み）</dd>
              <dd className="text-gray-400 text-xs mt-1">※必要書類の種類・組み合わせによって変わります</dd>
            </div>
            <div className="bg-white rounded-lg border border-gray-100 p-3">
              <dt className="text-gray-500 text-xs mb-1">所要期間の目安</dt>
              <dd className="font-medium text-gray-800">約1か月〜1か月半</dd>
            </div>
            <div className="bg-white rounded-lg border border-gray-100 p-3">
              <dt className="text-gray-500 text-xs mb-1">主な対応書類</dt>
              <dd className="font-medium text-gray-800">CENOMAR・PSA出生証明書・DFA e-Apostille</dd>
            </div>
            <div className="bg-white rounded-lg border border-gray-100 p-3">
              <dt className="text-gray-500 text-xs mb-1">紙原本（SECPA）</dt>
              <dd className="font-medium text-gray-800">提出先が必要とする場合に追加手配</dd>
            </div>
          </dl>
          <p className="text-xs text-gray-500 mt-3">※必要書類の種類・形式によって料金は変わります。提出先を確認したうえで正確な金額をご提示します。</p>
        </SectionDivider>
      </div>

      {/* Section 2: ケースに応じて必要になるフィリピン側の公的書類 */}
      <SectionDivider variant="beige">
        <h2 className="text-base font-bold text-gray-900 mb-3">ケースに応じて必要になるフィリピン側の公的書類</h2>
        <p className="text-sm text-gray-700 leading-relaxed mb-4">
          国際結婚では、婚姻をどちらの国で先に行うか、結婚後にどの手続きを進めるか、また再婚・死別・離婚歴があるかによって、必要書類が変わります。その中でも、フィリピン側書類として必要になることが多いのが次のような書類です。
        </p>
        <IconCardGrid
          columns={2}
          cards={[
            { icon: FileText, title: 'PSA発行の出生証明書', description: 'Birth Certificate（出生証明書）', accent: 'blue' },
            { icon: CheckCircle, title: 'PSA発行の独身証明書', description: 'CENOMAR（独身証明書）', accent: 'gold' },
            { icon: ShieldCheck, title: 'DFA e-Apostille', description: 'PSA電子文書に付与される電子アポスティーユ', accent: 'green' },
            { icon: AlertTriangle, title: 'ケースに応じた追加書類', description: '再婚・離婚歴・死別歴がある場合は別の証明書が必要なことがあります', accent: 'red' },
          ]}
        />
        <div className="space-y-1.5 text-xs text-gray-500 border-t border-gray-100 pt-3 mt-4">
          <p>※在東京フィリピン大使館のLCCM案内では、CENOMARは発行から6か月以内とされています。</p>
          <p>※「どの書類が必要か」「電子版か紙原本か」は、手続きと提出先によって異なります。</p>
        </div>
      </SectionDivider>

      {/* LCCM と市区町村提出の違い */}
      <SectionDivider variant="blue">
        <div className="flex items-start gap-3 mb-4">
          <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <h2 className="text-base font-bold text-gray-900">LCCM申請と、市区町村への婚姻届は別に確認します</h2>
        </div>
        <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>
            在東京フィリピン大使館が発行するLCCM（Legal Capacity to Contract Marriage）は、日本在住のフィリピン国籍者が外国籍の方と婚姻する際に使用する証明書です。大使館の公式案内では、PSA出生証明書とCENOMARについてDFAアポスティーユ済みの「原本＋コピー」が必要と記載されています。
          </p>
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
            <p className="font-bold text-gray-900 mb-2">2026年8月 当社が在東京フィリピン大使館へ直接確認</p>
            <p>
              LCCM申請については、<strong>PSA e-Certificate＋DFA e-Apostilleで受付可能で、別途SECPA紙原本は不要</strong>との案内を受けています。ただし、公式ページ上の「原本＋コピー」という表現と実務案内に差があるため、申請時点で最新運用を再確認することをおすすめします。
            </p>
          </div>
          <p>
            一方、LCCM取得後に日本の市区町村へ婚姻届を提出する際は、自治体ごとに必要書類が異なります。PSA出生証明書の紙原本を求める自治体もあり、CENOMARの提出有無や形式も一律ではありません。
          </p>
          <p>
            そのため当社では、<strong>「LCCM用だから紙原本も全部取る」ではなく、提出予定の市区町村まで確認して必要な形式だけ手配</strong>する方針です。
          </p>
          <p className="text-xs text-gray-500">
            電子版と紙原本の違いは、<Link to="/ja/psa-ecertificate-nihon/" className="text-primary underline underline-offset-2">PSA電子文書・e-Apostilleの日本での受領状況</Link>もご確認ください。
          </p>
        </div>
      </SectionDivider>

      {/* Section 3: よくある「書類集めの落とし穴」 */}
      <SectionDivider variant="blue">
        <div className="flex items-start gap-3 mb-4">
          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <h2 className="text-base font-bold text-amber-900">よくある「書類集めの落とし穴」</h2>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[
            { num: '①', title: '提出先を確認せず一式を取る', note: '不要な紙原本や認証まで手配すると、費用と時間が余計にかかります。' },
            { num: '②', title: '届いた書類がそのまま使えない', note: '名前・生年月日の不一致や形式違いがあると、再取得が必要になることがあります。' },
            { num: '③', title: 'PSA婚姻証明書はすぐ出ない', note: 'フィリピン婚の場合、PSAへの反映に時間がかかることがあります。' },
            { num: '④', title: 'NBI代行には条件がある', note: '初回取得は本人の指紋対応が必要になることがあり、第三者だけでは完結しません。' },
          ].map((item) => (
            <div key={item.num} className="rounded-xl bg-amber-50 border border-amber-200 p-4">
              <p className="text-xs font-bold text-amber-500 mb-1">落とし穴{item.num}</p>
              <p className="text-sm font-bold text-amber-900 mb-1">{item.title}</p>
              <p className="text-sm text-amber-800 leading-relaxed">{item.note}</p>
            </div>
          ))}
        </div>
      </SectionDivider>

      <FeatureList
        heading="こんな方に選ばれています"
        items={[
          {
            icon: <Heart className="w-4 h-4" />,
            title: '日本で先に婚姻届を出す方（日本先行婚）',
            description: '日本の市区町村では、LCCM・PSA出生証明書・CENOMAR等のうち何を求めるか、また紙原本が必要かが自治体によって異なります。提出予定先を確認してから必要書類を手配します。',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: 'フィリピンで先に婚姻する方（フィリピン先行婚）',
            description: 'フィリピンで先に婚姻する場合も、婚姻登録機関とその後の日本への届出で必要書類が変わります。手続きの順番に沿って整理します。',
          },
          {
            icon: <Clock className="w-4 h-4" />,
            title: '何から始めればいいかわからない方',
            description: '婚姻の方式・提出先・必要書類の順番——用途と状況をお伝えいただければ、必要なものを整理してご案内します。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: '配偶者ビザ申請まで見据えている方',
            description: '婚姻後の配偶者ビザ申請に必要な書類もまとめてご相談いただけます。必要な流れを確認し、進め方をご提案します。',
          },
        ]}
      />

      <CtaBox
        title="提出先から逆算して必要書類を整理します"
        description="大使館・入管・市区町村など、用途と提出先をお知らせください。電子版で足りるか、紙原本まで必要かを分けてご案内します。"
        buttonText="無料で相談する"
        href="#contact"
        variant="primary"
        trustNote="着手金50%・書類写し確認後に残金50%お支払い"
      />

      {/* Section 4: 当社（株式会社IGRS）の取得サポート */}
      <section className="mb-10 rounded-2xl bg-white border border-gray-200 p-6">
        <h2 className="text-base font-bold text-gray-900 mb-3">当社（株式会社IGRS）の取得サポート</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-5">
          「何が必要か分からない」「電子版で足りるのか、紙原本まで必要なのか判断できない」——そうした不安を減らすため、株式会社IGRSでは、PSA書類・CENOMAR・DFA e-Apostille取得を中心に、日本語で進めやすい形でサポートしています。
        </p>
        <div className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/15 mb-5">
          <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-bold text-gray-800 mb-1">当社の方針：提出先に合わせて必要な形式だけ手配</p>
            <p className="text-sm text-gray-600 leading-relaxed">電子版で受理される手続きにはe-Certificate＋e-Apostille、紙原本を求める提出先にはPSA SECPAを追加します。申請、受理、発送などの節目でも進行状況をご報告します。</p>
          </div>
        </div>
        <div className="rounded-xl bg-gray-50 border border-gray-200 p-4">
          <p className="text-sm font-bold text-gray-800 mb-2">ご依頼時の重要事項</p>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">適法に取得を進めるため、次のご協力をお願いしています。</p>
          <ul className="space-y-1.5 mb-3">
            {[
              '必要な委任書類へのご署名',
              '身分証明書のコピーのご提出',
              '用途・提出先（大使館、入管、市区町村名など）の確認',
              '案件によっては、ご本人様による追加対応',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-primary font-bold flex-shrink-0">・</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="space-y-1 text-xs text-gray-500 border-t border-gray-200 pt-3">
            <p>※渡航不要で進められるケースは多いですが、書類の種類やご本人の状況によっては追加対応が必要になることがあります。</p>
            <p>※当社は現地書類の取得を支援しますが、最終的な受理や審査の判断は提出先機関によります。</p>
          </div>
        </div>
      </section>

      {/* Section 5: 安心の決済フロー */}
      <StepList
        variant="visual"
        heading="安心の決済フロー"
        steps={[
          { title: 'ご契約・着手金のお支払い', description: '代金総額の50%をご入金いただいた後、取得手続きを開始します。' },
          { title: '取得完了のご報告', description: '書類が揃った段階で、写し（写真またはPDF）をお送りします。' },
          { title: '残金のお支払い', description: '内容をご確認いただいた後、残りの50%をお支払いいただきます。' },
          { title: '原本の発送', description: '紙原本をご注文の場合は、残金の着金確認後に追跡可能な方法で国際発送します。電子版のみの場合はデータで納品します。' },
        ]}
      />

      <FaqSection
        items={[
          { q: '日本先行婚とフィリピン先行婚、どちらがいいですか？', a: 'どちらが適切かはご状況によります。それぞれのメリット・デメリットを含めてご案内しますので、まずご相談ください。' },
          { q: 'CENOMARとPSA出生証明書、両方必要ですか？', a: REQUIREMENTS_FAQ },
          { q: 'LCCM申請ではPSAの紙原本が必要ですか？', a: '在東京フィリピン大使館の公式案内はDFAアポスティーユ済みPSA出生証明書・CENOMARの原本とコピーを記載しています。一方、当社が2026年8月に同大使館へ直接確認した際は、LCCM申請ではPSA e-CertificateとDFA e-Apostilleで受付可能で、別途SECPA紙原本は不要との案内でした。公式ページとの表現差があるため、申請時点での再確認をおすすめします。' },
          { q: '書類の有効期限はありますか？', a: '在東京フィリピン大使館のLCCM案内では、CENOMARは発行から6か月以内とされています。その他の提出先では基準が異なる場合があるため、提出タイミングに合わせて確認します。' },
          { q: 'NBIクリアランスも代行できますか？', a: '初回取得は、ご本人様による指紋対応が必要になることがあるため、弊社だけで完結する形ではお受けしにくい案件です。2014年以降に取得歴があり、更新として進めやすい案件を中心に対応しています。まずは状況をご相談ください。' },
          { q: '配偶者ビザ申請の書類も一緒に頼めますか？', a: '婚姻書類と配偶者ビザ申請書類をまとめてご相談いただけます。必要な流れを確認し、進め方をご提案します。' },
        ]}
        ctaTitle="まずは用途と提出先をお聞かせください"
        ctaButton="無料相談フォームへ"
      />

      <RelatedLinks
        links={[
          { path: '/ja/psa-ecertificate-nihon/', label: 'PSA電子文書・e-Apostilleは日本で使える？' },
          { path: '/ja/nihon-senko-ph-senko/', label: '日本先行婚 vs フィリピン先行婚：どちらを選ぶべきか比較' },
          { path: '/ja/philippines-de-kekkon/', label: 'フィリピンで結婚する全ガイド（手続き・必要書類・注意点）' },
          { path: '/ja/haigusha-visa/', label: '配偶者ビザの書類代行' },
          { path: '/ja/cenomar/', label: 'CENOMAR（独身証明書）取得代行' },
        ]}
      />
    </PageLayout>
  );
}
