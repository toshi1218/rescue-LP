import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SectionDivider from '../components/SectionDivider';
import IconCardGrid from '../components/IconCardGrid';
import { Heart, AlertTriangle, Clock, FileCheck, Globe, Users, ShieldCheck, FileText, CheckCircle } from 'lucide-react';
import SummaryBlock from '../components/SummaryBlock';

export default function MarriageGuideJa() {
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: '国際結婚 書類代行' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'フィリピン人との国際結婚 必要書類取得代行',
        description: 'フィリピン人との国際結婚に必要なCENOMAR・PSA出生証明書・DFAアポスティーユの取得を代行。必要書類は婚姻の方式や再婚歴等の状況によって変わります。日本語でご相談いただけます。',
        url: 'https://ph-document.com/ja/kokusai-kekkon-guide',
        provider: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/ja/',
        },
        areaServed: { '@type': 'Country', name: 'JP' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'JPY',
          price: '40000',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '40000',
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
                text: '日本の市区町村役場への提出では、通常CENOMARとPSA出生証明書の両方が必要です。提出先によって異なる場合があるため、確認してからご案内します。',
              },
            },
            {
              '@type': 'Question',
              name: '書類の有効期限はありますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'CENOMARは、提出先や用途によっては発行後6か月以内のものが求められることがあります。提出タイミングに合わせた取得時期をご案内します。',
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
        title="フィリピン人との国際結婚、必要書類を一括で手配します"
        badges={['日本語でやり取りOK', '必要書類を整理してご案内', '進捗を随時ご報告']}
        ctaText="無料相談はこちら"
        ctaHref="#contact"
      />

      <SummaryBlock
        conclusion="フィリピン人との国際結婚に必要な書類の整理から取得まで、日本語でご相談いただけます。"
        points={[
          'CENOMAR・PSA出生証明書・DFAアポスティーユの取得を代行',
          '必要書類は婚姻の方式・再婚歴等の状況によって変わります',
          '申請・受理・発送などの節目で進行状況をご報告します',
          'まずは目的と状況をお伝えください。必要な流れを整理してご案内します',
        ]}
        ctaText="無料で相談する（24時間以内に返信）"
      />

      {/* Section 2: ケースに応じて必要になるフィリピン側の公的書類 */}
      <SectionDivider variant="beige">
        <h2 className="text-base font-bold text-gray-900 mb-3">ケースに応じて必要になるフィリピン側の公的書類</h2>
        <p className="text-sm text-gray-700 leading-relaxed mb-4">
          国際結婚では、婚姻をどちらの国で先に行うか、結婚後にどの手続きを進めるか、また再婚・死別・離婚歴があるかによって、必要書類が変わります。その中でも、フィリピン側書類として必要になることが多いのが次のような書類です。
        </p>
        <IconCardGrid
          columns={2}
          cards={[
            { icon: FileText, title: "PSA発行の出生証明書", description: "Birth Certificate（出生証明書）", accent: 'blue' },
            { icon: CheckCircle, title: "PSA発行の独身証明書", description: "CENOMAR（独身証明書）", accent: 'gold' },
            { icon: ShieldCheck, title: "DFAアポスティーユ認証", description: "書類の国際的な認証手続き", accent: 'green' },
            { icon: AlertTriangle, title: "ケースに応じた追加書類", description: "再婚・離婚歴・死別歴がある場合は別の証明書が必要なことがあります", accent: 'red' },
          ]}
        />
        <div className="space-y-1.5 text-xs text-gray-500 border-t border-gray-100 pt-3 mt-4">
          <p>※特にCENOMARは、提出先や用途によっては発行後6か月以内のものが求められることがあります。</p>
          <p>※「どの書類が必要か」は、結婚する場所、現在の在留状況、今後のビザ手続きによって変わります。</p>
        </div>
      </SectionDivider>

      {/* Section 3: よくある「書類集めの落とし穴」 */}
      <SectionDivider variant="blue">
        <div className="flex items-start gap-3 mb-5">
          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <h2 className="text-base font-bold text-amber-900">よくある「書類集めの落とし穴」</h2>
        </div>
        <div className="space-y-5">
          <div>
            <p className="text-sm font-bold text-amber-800 mb-1">落とし穴①：現地の家族や知人に頼んだまま進まない</p>
            <p className="text-sm text-amber-800 leading-relaxed">「あとで行く」「今週行く」と言われたまま、取得が進まず、予定だけが後ろにずれていくケースがあります。婚姻やビザの予定が決まっている場合、この遅れがそのまま全体スケジュールに響きます。</p>
          </div>
          <div>
            <p className="text-sm font-bold text-amber-800 mb-1">落とし穴②：書類が届いても、そのまま使えない</p>
            <p className="text-sm text-amber-800 leading-relaxed">名前のスペル、生年月日、婚姻歴の注記などに不一致があると、日本側で確認や差し戻しになることがあります。書類は「取れたかどうか」だけでなく、「提出先で使える状態かどうか」まで確認が必要です。</p>
          </div>
          <div>
            <p className="text-sm font-bold text-amber-800 mb-1">落とし穴③：婚姻後すぐにPSA婚姻証明書が出るとは限らない</p>
            <p className="text-sm text-amber-800 leading-relaxed">フィリピンで婚姻した場合、婚姻記録がPSAに反映され、婚姻証明書を取得できるようになるまで時間がかかることがあります。目安として、Metro Manilaで2〜4か月、地方では少なくとも6か月かかる案内もあります。「結婚したらすぐ次の手続きに進める」と思っていると、ここで予定がずれることがあります。</p>
          </div>
          <div>
            <p className="text-sm font-bold text-amber-800 mb-1">落とし穴④：NBIクリアランスは誰でも完全代行できるわけではない</p>
            <p className="text-sm text-amber-800 leading-relaxed">NBIクリアランスは、目的によって必要になることがあります。ただし、初回取得や条件によっては、日本国内のフィリピン大使館・総領事館でご本人による指紋対応が必要です。そのため、第三者だけで完結できない案件があります。</p>
          </div>
        </div>
      </SectionDivider>

      <FeatureList
        heading="こんな方に選ばれています"
        items={[
          {
            icon: <Heart className="w-4 h-4" />,
            title: '日本で先に婚姻届を出す方（日本先行婚）',
            description: '日本の市区町村役場への提出には、フィリピン人配偶者のCENOMAR（独身証明書）とPSA出生証明書、DFAアポスティーユが必要です。必要書類を整理してご案内します。',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: 'フィリピンで先に婚姻する方（フィリピン先行婚）',
            description: 'フィリピンでの婚姻には、日本人側の婚姻要件具備証明書（LCCM）が必要です。その後の日本での届け出に必要な書類もまとめてご案内します。',
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
        title="「何が必要か」から一緒に整理します"
        description="日本先行婚・フィリピン先行婚、どちらの方式でも対応します。まず目的と状況をお知らせください。"
        buttonText="無料で相談する"
        href="#contact"
        variant="primary"
        trustNote="着手金50%・書類写し確認後に残金50%お支払い"
      />

      {/* Section 4: 当社（株式会社IGRS）の取得サポート */}
      <section className="mb-10 rounded-2xl bg-white border border-gray-200 p-6">
        <h2 className="text-base font-bold text-gray-900 mb-3">当社（株式会社IGRS）の取得サポート</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-5">
          「何が必要か分からない」「自分のケースでどこまで必要なのか判断できない」「依頼したあと、今どうなっているのか分からないのが不安」——そうした不安を減らすため、株式会社IGRSでは、PSA書類・CENOMAR・DFAアポスティーユ取得を中心に、日本語で進めやすい形でサポートしています。
        </p>
        <div className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/15 mb-5">
          <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-bold text-gray-800 mb-1">当社の特徴：進捗が見える</p>
            <p className="text-sm text-gray-600 leading-relaxed">申請、受理、発送など、節目ごとに進行状況をご報告します。「依頼したあと放置されるのでは」という不安を減らしながら進められるようにしています。</p>
          </div>
        </div>
        <div className="rounded-xl bg-gray-50 border border-gray-200 p-4">
          <p className="text-sm font-bold text-gray-800 mb-2">ご依頼時の重要事項</p>
          <p className="text-xs text-gray-600 leading-relaxed mb-3">当社をご利用いただく場合でも、すべてを完全に丸投げできるわけではありません。適法に取得を進めるため、次のご協力をお願いしています。</p>
          <ul className="space-y-1.5 mb-3">
            {[
              '英文委任状（Special Power of Attorney）へのご署名',
              '身分証明書のコピーのご提出',
              '案件によっては、ご本人様による追加対応',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                <span className="text-primary font-bold flex-shrink-0">・</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="space-y-1 text-xs text-gray-500 border-t border-gray-200 pt-3">
            <p>※渡航不要で進められるケースは多いですが、書類の種類やご本人の状況によっては、追加対応が必要になることがあります。</p>
            <p>※当社は現地書類の取得を支援しますが、最終的な受理や審査の判断は提出先機関によります。</p>
          </div>
        </div>
      </section>

      <CtaBox
        title="書類の整理から取得まで、日本語でご相談いただけます"
        description="まずは目的と現在の状況をお知らせください。必要な流れを確認し、進め方をご提案します。"
        buttonText="無料で相談する"
        href="#contact"
        variant="secondary"
        trustNote="匿名相談可・返信24時間以内"
      />

      {/* Section 5: 安心の決済フロー */}
      <StepList
        variant="visual"
        heading="安心の決済フロー"
        steps={[
          { title: 'ご契約・着手金のお支払い', description: '代金総額の50%をご入金いただいた後、取得手続きを開始します。' },
          { title: '取得完了のご報告', description: '書類が揃った段階で、写し（写真またはPDF）をお送りします。' },
          { title: '残金のお支払い', description: '内容をご確認いただいた後、残りの50%をお支払いいただきます。' },
          { title: '原本の発送', description: '残金の着金確認後に、原本を追跡可能な方法で国際発送します。' },
        ]}
      />

      <FaqSection
        items={[
          { q: '日本先行婚とフィリピン先行婚、どちらがいいですか？', a: 'どちらが適切かはご状況によります。それぞれのメリット・デメリットを含めてご案内しますので、まずご相談ください。' },
          { q: 'CENOMARとPSA出生証明書、両方必要ですか？', a: '日本の市区町村役場への提出では、通常CENOMARとPSA出生証明書の両方が必要です。提出先によって異なる場合があるため、確認してからご案内します。' },
          { q: '書類の有効期限はありますか？', a: 'CENOMARは、提出先や用途によっては発行後6か月以内のものが求められることがあります。提出タイミングに合わせた取得時期をご案内します。' },
          { q: 'NBIクリアランスも代行できますか？', a: '初回取得は、ご本人様による指紋対応が必要になることがあるため、弊社だけで完結する形ではお受けしにくい案件です。2014年以降に取得歴があり、更新として進めやすい案件を中心に対応しています。まずは状況をご相談ください。' },
          { q: '配偶者ビザ申請の書類も一緒に頼めますか？', a: '婚姻書類と配偶者ビザ申請書類をまとめてご相談いただけます。必要な流れを確認し、進め方をご提案します。' },
        ]}
        ctaTitle="まずは状況をお聞かせください"
        ctaButton="無料相談フォームへ"
      />

      {/* 関連ページ */}
      <nav className="mt-10 pt-8 border-t border-gray-100">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">関連ページ</p>
        <ul className="space-y-2 text-sm">
          <li><Link to="/ja/nihon-senko-ph-senko/" className="text-secondary hover:underline">→ 日本先行婚 vs フィリピン先行婚：どちらを選ぶべきか比較</Link></li>
          <li><Link to="/ja/philippines-de-kekkon/" className="text-secondary hover:underline">→ フィリピンで結婚する全ガイド（手続き・必要書類・注意点）</Link></li>
          <li><Link to="/ja/gyouseishoshi-to-shorui-shuttoku/" className="text-secondary hover:underline">→ 行政書士の仕事と書類取得サービスの違い</Link></li>
          <li><Link to="/ja/haigusha-visa/" className="text-secondary hover:underline">→ 配偶者ビザの書類代行</Link></li>
          <li><Link to="/ja/cenomar/" className="text-secondary hover:underline">→ CENOMAR（独身証明書）取得代行</Link></li>
        </ul>
      </nav>
    </PageLayout>
  );
}
