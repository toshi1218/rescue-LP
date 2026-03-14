import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SectionDivider from '../components/SectionDivider';
import IconCardGrid from '../components/IconCardGrid';
import ComparisonTable from '../components/ComparisonTable';
import { AlertTriangle, CheckCircle, ClipboardList, Car, FileText, Stamp, Clock, Globe } from 'lucide-react';
import { useMeta } from '../lib/useMeta';

export default function LicenseConversionJa() {
  useMeta(
    'フィリピン免許の外免切替｜必要書類とLTO書類取得サポート｜IGRS',
    'フィリピン免許から日本の免許への外免切替に必要な条件（免許取得後3か月以上の滞在）とLTO関連書類を解説。取得手配を日本語でサポートします。',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: '外免切替ガイド' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: '外免切替 LTO書類取得サポート',
          description: 'フィリピン免許から日本免許への外免切替に必要なLTO関連書類の整理と取得手続きを日本語でサポート。',
          url: 'https://ph-document.com/ja/gaimen-kirikae-guide',
          provider: {
            '@type': 'Organization',
            name: 'IGRS Inc.',
            url: 'https://ph-document.com/ja/',
          },
          areaServed: { '@type': 'Country', name: 'JP' },
          offers: {
            '@type': 'Offer',
            priceCurrency: 'JPY',
            price: '100000',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: '100000',
              priceCurrency: 'JPY',
              description: 'LTO書類取得・DFAアポスティーユ込み（税抜）。DHL国際郵送費は実費別途',
            },
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'フィリピン免許があれば、誰でも外免切替できますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'いいえ。免許が有効であることに加え、免許取得後にフィリピンで通算3か月以上滞在していたことを証明できることが重要です。',
              },
            },
            {
              '@type': 'Question',
              name: 'ORをなくしていても進められますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'ケースによります。フィリピン案件では Official Receipt が案内されているため、まずは現在の状況を確認する必要があります。',
              },
            },
            {
              '@type': 'Question',
              name: 'Immigration Record は必ず必要ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '必ずではありません。警視庁の一覧では、運転免許の有効期間中の滞在がすべて確認できない場合に Immigration Record with Apostille が案内されています。',
              },
            },
            {
              '@type': 'Question',
              name: '日本の免許センターで通るかどうかを判断してもらえますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '最終判断はできません。当社はフィリピン側書類の準備を支援しますが、受理や審査の判断は各免許センターによります。',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="外免切替 LTO書類取得代行"
        subtitle="試験場で求められやすいフィリピン側書類を整理し、予約日に合わせて逆算してご案内します。"
        badges={['外免切替ガイド', 'フィリピン免許対応', '無料相談あり']}
        ctaText="必要なLTO書類を確認する"
        ctaHref="#contact"
      />

      {/* リード文 */}
      <section className="mb-10 text-sm text-gray-700 leading-relaxed space-y-3">
        <p>フィリピンで取得した運転免許証をお持ちの方は、日本の運転免許センターで手続きを行うことで、日本の運転免許証に切り替えられる場合があります。</p>
        <p>ただし、外免切替は「外国の免許を持っていれば誰でもできる」手続きではありません。特にフィリピン免許では、免許取得後の滞在歴の確認と、フィリピン側書類の準備が重要になります。</p>
        <p>このページでは、外免切替で先に確認すべき条件と、フィリピン側で求められやすい書類、そして書類準備を進める際の注意点をわかりやすく整理します。</p>
      </section>

      {/* Section 1 */}
      <section className="mb-10">
        <h2 className="text-base font-bold text-gray-900 mb-4">1. まず最初に確認したいこと</h2>
        <div className="text-sm text-gray-700 leading-relaxed space-y-3">
          <p>外免切替でいちばん大事なのは、フィリピンで免許を取得した後、その国に通算3か月以上滞在していたことを証明できるかです。この条件を満たしていない場合、フィリピン側書類を集めても、日本の免許センターで切替が認められません。神奈川県警の案内でも、3か月（90日）以上の滞在証明が条件として明記されています。</p>
          <p>確認したいのは、次の3点です。</p>
          <ul className="space-y-2 mt-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <span>フィリピンの運転免許証が有効か</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <span>免許取得後に、フィリピンへ通算3か月以上滞在していたことを示せるか</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <span>その滞在歴を、パスポートや追加書類で説明できるか</span>
            </li>
          </ul>
          <p>パスポートの出入国スタンプだけで期間が十分に読めない場合や、免許取得後の滞在期間が一部しか確認できない場合は、追加の滞在証明書類を求められることがあります。</p>
        </div>
      </section>

      {/* Section 2 */}
      <SectionDivider variant="beige">
        <h2 className="text-base font-bold text-gray-900 mb-4">2. フィリピン側で求められやすい書類</h2>
        <div className="text-sm text-gray-700 leading-relaxed space-y-3">
          <p>フィリピン免許で外免切替を進める際、警視庁の国別必要書類一覧では、次の書類が案内されています。</p>
          <ol className="space-y-2 mt-2 list-none">
            {[
              'フィリピンの運転免許証（原本）',
              'Official Receipt（OR）',
              'License History',
              'Certification with Apostille',
              'Immigration Record with Apostille　※パスポート等だけで、運転免許の有効期間中の滞在がすべて確認できない場合',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-blue-700 font-bold flex-shrink-0">{i + 1}.</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
          <p>加えて、一般の外免切替手続では、外国免許証の日本語翻訳文など、ほかの必要書類もあります。そのため、実際には「LTO書類だけ取れば終わり」ではなく、管轄の免許センターが何を求めているかを先に確認しておくのが安全です。大阪府警も、交付日が免許証で確認できない場合などには経歴証明書等が必要と案内しています。</p>
        </div>

        <IconCardGrid
          heading="必要書類の概要"
          columns={3}
          cards={[
            { icon: Car, title: 'フィリピン運転免許証', description: '有効な免許証の原本。免許取得後3か月以上の滞在歴が確認できることが前提。', accent: 'gold' },
            { icon: FileText, title: 'License History', description: '初回取得日や更新経歴を証明。免許証の表記だけでは読み取れない場合に必要。', accent: 'blue' },
            { icon: Stamp, title: 'Certification with Apostille', description: 'LTOが発行する証明書にDFAアポスティーユ認証を付与したもの。', accent: 'green' },
            { icon: CheckCircle, title: 'Official Receipt（OR）', description: '免許更新時のレシート。フィリピン案件では案内されている重要書類。', accent: 'teal' },
            { icon: Clock, title: 'Immigration Record', description: 'パスポートだけで滞在歴が読み取れない場合、アポスティーユ付きで必要になることがある。', accent: 'red' },
            { icon: Globe, title: '免許センターで確認を', description: '求める書類は免許センターごとに異なる。先に管轄センターへ確認することが重要。', accent: 'purple' },
          ]}
        />
      </SectionDivider>

      {/* Section 3 */}
      <section className="mb-10">
        <h2 className="text-base font-bold text-gray-900 mb-4">3. よくあるつまずきポイント</h2>
        <div className="space-y-4">
          <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
            <div className="flex items-start gap-2 mb-2">
              <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <h3 className="text-sm font-bold text-amber-900">3か月の滞在歴を説明できない</h3>
            </div>
            <p className="text-sm text-amber-800 leading-relaxed">外免切替では、単にフィリピン免許を持っているだけでは足りません。免許取得後にその国へ通算3か月以上滞在していたことを、日本側に説明できる必要があります。ここが足りないと、手続き全体が止まります。</p>
          </div>
          <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
            <div className="flex items-start gap-2 mb-2">
              <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <h3 className="text-sm font-bold text-amber-900">免許証だけでは初回取得日や経歴が分からない</h3>
            </div>
            <p className="text-sm text-amber-800 leading-relaxed">フィリピン免許の表記だけでは、初回取得日や更新経歴が十分に読めない場合があります。その場合、License History など追加書類が必要になることがあります。</p>
          </div>
          <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
            <div className="flex items-start gap-2 mb-2">
              <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <h3 className="text-sm font-bold text-amber-900">パスポートだけで滞在歴が足りない</h3>
            </div>
            <p className="text-sm text-amber-800 leading-relaxed">パスポートに出入国スタンプがない、旧パスポートが手元にない、または期間が連続して読めない場合は、Immigration Record with Apostille などが必要になることがあります。</p>
          </div>
          <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
            <div className="flex items-start gap-2 mb-2">
              <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <h3 className="text-sm font-bold text-amber-900">免許センターごとに求められる内容が少し違う</h3>
            </div>
            <p className="text-sm text-amber-800 leading-relaxed">外免切替は全国共通の大枠はありますが、実務上は免許センターごとに確認の細かさが異なります。そのため、先に管轄センターへ確認してから動く方が、後戻りが少なくなります。</p>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <SectionDivider variant="blue">
        <h2 className="text-base font-bold text-blue-900 mb-3">4. IGRSのLTO書類サポート</h2>
        <div className="text-sm text-blue-800 leading-relaxed space-y-3">
          <p>「どの書類が必要なのか分からない」「ORをなくしている」「License History や Certification with Apostille をどう揃えるのか分からない」</p>
          <p>そうした方に向けて、株式会社IGRSでは、フィリピン側で必要になりやすいLTO関連書類の整理と取得手続きを、日本語で進めやすい形でサポートしています。</p>
          <p>当社が大事にしているのは、進捗が見えることです。海外書類の手続きでよくある「依頼したあと状況が見えない」という不安を減らすため、確認、進行、発送の節目ごとに状況をご案内します。</p>
          <p className="font-semibold">ただし、当社ができるのはフィリピン側書類の準備を支援することです。日本の免許センターで外免切替が認められるかどうかの最終判断は、各センターの審査によります。そのため、3か月条件や提出書類の最終確認は、必ずご自身でも行ってください。</p>
        </div>
      </SectionDivider>

      {/* Section 5 */}
      <section className="mb-10">
        <h2 className="text-base font-bold text-gray-900 mb-4">5. ご依頼時にお願いしていること</h2>
        <div className="text-sm text-gray-700 leading-relaxed space-y-3">
          <p>当社では、「完全に何もしなくてよい」といったご案内はしていません。正当な手続きのため、次のご協力をお願いしています。</p>
          <ul className="space-y-2 mt-2">
            <li className="flex items-start gap-2">
              <ClipboardList className="w-4 h-4 text-gray-600 flex-shrink-0 mt-0.5" />
              <span>authorization letterへのご署名</span>
            </li>
            <li className="flex items-start gap-2">
              <ClipboardList className="w-4 h-4 text-gray-600 flex-shrink-0 mt-0.5" />
              <span>身分証明書のコピー提出</span>
            </li>
            <li className="flex items-start gap-2">
              <ClipboardList className="w-4 h-4 text-gray-600 flex-shrink-0 mt-0.5" />
              <span>現在お持ちの免許証や、手元にある関連資料の共有</span>
            </li>
          </ul>
          <p>案件によって必要になるものは異なるため、まずは現在の状況を確認してから進め方をご案内します。</p>
        </div>
      </section>

      <StepList
        variant="visual"
        heading="6. ご依頼から発送までの流れ"
        steps={[
          { title: '無料相談', description: 'まずは、現在お持ちのフィリピン免許証、ORの有無、免許取得後の滞在歴の状況をお知らせください。' },
          { title: '条件確認・お見積もり', description: '管轄の免許センターで案内された内容があれば、それもあわせて確認します。必要になりやすい書類と費用の目安をご案内します。' },
          { title: '着手金のお支払い', description: '代金総額の50%をご入金いただいた後、必要書類の準備と手続きを進めます。' },
          { title: '書類取得後のご確認', description: '書類が揃った段階で、写しをお送りします。内容をご確認ください。' },
          { title: '残金のお支払い', description: '写しをご確認いただいた後、残りの50%をお支払いいただきます。' },
          { title: '原本の発送', description: '残金の着金確認後、原本を発送します。' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'フィリピン免許があれば、誰でも外免切替できますか？', a: 'いいえ。免許が有効であることに加え、免許取得後にフィリピンで通算3か月以上滞在していたことを証明できることが重要です。' },
          { q: 'ORをなくしていても進められますか？', a: 'ケースによります。フィリピン案件では Official Receipt が案内されているため、まずは現在の状況を確認する必要があります。' },
          { q: 'Immigration Record は必ず必要ですか？', a: '必ずではありません。警視庁の一覧では、運転免許の有効期間中の滞在がすべて確認できない場合に Immigration Record with Apostille が案内されています。' },
          { q: '日本の免許センターで通るかどうかを判断してもらえますか？', a: '最終判断はできません。当社はフィリピン側書類の準備を支援しますが、受理や審査の判断は各免許センターによります。' },
        ]}
        ctaTitle="まずは無料相談"
        ctaButton="無料相談フォームへ"
      />

      <ComparisonTable
        heading="外免切替 書類準備"
        rows={[
          { item: 'LTOドライバーズレコード取得', self: false, agency: true },
          { item: 'DFAアポスティーユ手配', self: false, agency: true },
          { item: '日本語での手続き', self: '英語が必要', agency: true },
          { item: '公安委員会要件の確認', self: '要調査', agency: true },
        ]}
      />

      <CtaBox
        title="まずは状況のご確認から"
        description="外免切替は、LTO書類を取る前の確認がとても大事です。「自分は条件を満たしているか」「どの書類が必要になりそうか」その確認からで大丈夫です。まずはご相談ください。"
        buttonText="無料相談はこちら"
        href="#contact"
        variant="primary"
        trustNote="着手金50%・書類写し確認後に残金50%・着手前キャンセル無料"
      />

      {/* 関連ページへの内部リンク */}
      <nav className="mt-10 pt-8 border-t border-gray-100">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">関連ページ</p>
        <ul className="space-y-2 text-sm">
          <li><Link to="/ja/driver-record/" className="text-secondary hover:underline">→ LTOドライバーズレコード代行（外免切替・企業採用）</Link></li>
          <li><Link to="/ja/apostille/" className="text-secondary hover:underline">→ DFAアポスティーユ代行</Link></li>
          <li><Link to="/ja/ryokin/" className="text-secondary hover:underline">→ 料金一覧</Link></li>
        </ul>
      </nav>
    </PageLayout>
  );
}
