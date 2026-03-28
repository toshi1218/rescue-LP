import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import RelatedLinks from '../components/RelatedLinks';
import RelatedArticles from '../components/RelatedArticles';
import HeroBanner from '../components/HeroBanner';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import SectionDivider from '../components/SectionDivider';
import IconCardGrid from '../components/IconCardGrid';
import ComparisonTable from '../components/ComparisonTable';
import SummaryBlock from '../components/SummaryBlock';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR_MONTH_JA } from '../lib/seoDate';
import FaqSection from '../components/FaqSection';
import { FileText, Calendar, Globe, Users, CheckCircle, AlertTriangle, Clock } from 'lucide-react';

export default function CenomarGuideJa() {
  useMeta(
    `CENOMAR（独身証明書）取得代行【${SEO_YEAR_MONTH_JA}】渡航不要・アポスティーユ付き`,
    'CENOMARが必要だけどフィリピンに行けない方へ。渡航不要・日本語だけで取得完了。国際結婚・配偶者ビザ・帰化申請に対応。24時間以内に返信。',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'CENOMAR（独身証明書）取得代行' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'CENOMAR（独身証明書）取得代行',
          description: 'フィリピンのCENOMAR（独身証明書）を必要書類の確認から取得・発送までサポート。国際結婚・配偶者ビザ・帰化申請に対応。',
          url: 'https://ph-document.com/ja/cenomar/',
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
              name: 'CENOMARとは何ですか？独身証明書と同じですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'CENOMARはCertificate of No Marriage Recordの略で、フィリピン統計局（PSA）が発行する公的書類です。日本語では「独身証明書」に相当し、現在フィリピンに婚姻記録がないことを証明します。国際結婚の手続き、配偶者ビザ申請、帰化申請などで提出を求められることがあります。',
              },
            },
            {
              '@type': 'Question',
              name: 'CENOMARはどこで発行してもらえますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'CENOMARはフィリピン統計局（PSA）が発行します。フィリピン国内では、PSAのオフィスまたはPSAHelplineのオンラインサービスから申請できます。日本国内にいる場合は、代理人や代行サービスを利用して取得するのが一般的です。',
              },
            },
            {
              '@type': 'Question',
              name: 'CENOMARの有効期限はありますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '提出先によって異なります。在東京フィリピン大使館の婚姻関連手続きでは、CENOMARは発行から6ヶ月以内と案内されています。手元の書類が今回の提出先で通るかは、提出先の要件を確認することが大切です。',
              },
            },
            {
              '@type': 'Question',
              name: 'DFA Apostille（アポスティーユ）は必要ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '提出先によって必要かどうか変わります。日本の市区町村役場への提出では不要なことが多いですが、入管（出入国在留管理局）や外国の機関への提出では必要な場合があります。提出先の要件を確認したうえで判断することをおすすめします。',
              },
            },
            {
              '@type': 'Question',
              name: 'CENOMARの取得にはどのくらいかかりますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'PSAからの取得には通常1〜3週間かかります。DFAアポスティーユが必要な場合はさらに1〜2週間追加となり、合計で1か月〜6週間が目安です。繁忙期や現地機関の状況によって前後することがあります。',
              },
            },
            {
              '@type': 'Question',
              name: '取得には何が必要ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '案件に応じて本人確認資料や委任状等をお願いする場合があります。必要な書類はご相談内容を確認したうえでご案内します。',
              },
            },
            {
              '@type': 'Question',
              name: 'CENOMARと出生証明書（PSA Birth Certificate）は何が違いますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'CENOMARは婚姻記録がないことを証明する書類です。出生証明書（PSA Birth Certificate）は生年月日・出生地・両親の情報を証明する書類です。手続きによっては両方必要になる場合があります。',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="CENOMAR（独身証明書）"
        subtitle="国際結婚、日本での婚姻届、配偶者ビザ準備など、提出先に応じて必要書類は変わります。CENOMARだけで足りるかを整理します。"
        badges={['国際結婚対応', 'DFAアポスティーユ込み', '日本語でご相談OK']}
        ctaText="無料で相談する"
        ctaHref="#contact"
        lastUpdated="2026年3月1日"
      />
      <SummaryBlock
        conclusion="CENOMARは国際結婚・配偶者ビザ・帰化申請で必要になることが多い書類です。日本語のみで取得を代行します。"
        points={[
          'PSA発行のCENOMAR取得からDFAアポスティーユまで一括対応',
          '有効期限（発行から6ヶ月以内）に合わせたタイミングで手配',
          '提出先の要件を確認し、そのまま使える状態でお届け',
          'フィリピン渡航不要。まずは無料相談で必要書類を確認',
        ]}
        ctaText="無料で相談する（24時間以内に返信）"
      />
      <article className="max-w-2xl mx-auto px-4">

        <SectionDivider variant="beige">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            CENOMARとは何か（独身証明書）
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            CENOMARは <strong>Certificate of No Marriage Record</strong> の略称で、<a href="https://psa.gov.ph" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">フィリピン統計局（PSA公式サイト）</a>が発行する公的書類です。日本語では<strong>「独身証明書」</strong>に相当し、現在フィリピンに婚姻記録がないことを証明します。
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            国際結婚の手続き・配偶者ビザ申請・帰化申請・フィリピンでの婚姻手続きなど、フィリピン人の婚姻状況を確認する必要がある場面で提出を求められることがあります。
          </p>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 text-sm">
            <div className="bg-white rounded-lg border border-gray-100 p-3">
              <dt className="text-gray-500 text-xs mb-1">正式名称</dt>
              <dd className="font-medium text-gray-800">Certificate of No Marriage Record</dd>
            </div>
            <div className="bg-white rounded-lg border border-gray-100 p-3">
              <dt className="text-gray-500 text-xs mb-1">発行機関</dt>
              <dd className="font-medium text-gray-800">Philippine Statistics Authority（PSA）</dd>
            </div>
            <div className="bg-white rounded-lg border border-gray-100 p-3">
              <dt className="text-gray-500 text-xs mb-1">有効期限の目安</dt>
              <dd className="font-medium text-gray-800">発行から6ヶ月以内（提出先による）</dd>
            </div>
            <div className="bg-white rounded-lg border border-gray-100 p-3">
              <dt className="text-gray-500 text-xs mb-1">PSA発行料金</dt>
              <dd className="font-medium text-gray-800">1通420ペソ（PSAHelpline参考）</dd>
            </div>
          </dl>
        </SectionDivider>

        <SectionDivider variant="white">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            CENOMARが必要になる主な場面
          </h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
              <span><strong>国際結婚の手続き</strong>：日本の市区町村役場への婚姻届提出時、またはフィリピン大使館の手続き時</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
              <span><strong>配偶者ビザ（日本・米国・カナダ等）の申請</strong>：入管やビザ機関への提出書類として</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
              <span><strong>帰化申請</strong>：法務省への申請書類として</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
              <span><strong>フィリピンでの婚姻手続き</strong>：現地自治体（LCR）への提出</span>
            </li>
          </ul>
        </SectionDivider>

        <p className="text-gray-700 leading-relaxed mb-8">
          ただし、実際に困るのは「書類そのもの」より、提出先に合う状態で、必要な時期に間に合わせることです。古い書類を出して受け付けられなかったり、必要な追加手続きの確認が後回しになったりすると、取り直しや再発送が発生しやすくなります。
        </p>

        <SectionDivider variant="beige">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            CENOMARで先に知っておきたいこと
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            CENOMARは「一度取ればずっと使える書類」ではありません。提出先によって、発行日の新しさを求められることがあります。たとえば、在東京フィリピン大使館の婚姻関連手続きでは、CENOMARは<strong>発行から6ヶ月以内</strong>と案内されています。つまり、手元にあるから安心ではなく、<strong>その書類が今回の提出先で通るか</strong>が大事です。
          </p>
          <p className="text-gray-700 leading-relaxed">
            また、必要に応じて <strong>DFA Apostille（アポスティーユ）</strong> が関わることがあります。フィリピンでは、いわゆる昔の「red ribbon」ではなく、現在は Apostille の制度で案内されています。
          </p>
        </SectionDivider>

        <SectionDivider variant="blue">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            IGRSのCENOMAR取得サポート
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            当社では、単に「CENOMARを取る」だけではなく、どの書類が必要か、追加認証がいるか、どの順番で進めるかを整理したうえで手配します。
          </p>
          <p className="text-gray-700 leading-relaxed">
            特に、海外手続きで不安になりやすい<strong>進捗の見えにくさ</strong>を減らすため、申請、取得、発送準備などの節目ごとに状況をご案内します。「今どこまで進んでいるのか分からない」という状態をできるだけ避け、婚姻手続きやその後の予定を立てやすくするためのサポートです。
          </p>
        </SectionDivider>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            ご依頼時にお願いしていること
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            当社は、「何もせず完全丸投げで終わります」といった誇大な案内はしていません。案件に応じて、<strong>本人確認資料や委任状等</strong>のご提出をお願いしています。
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            これは、実際の公式導線でも、代理受領の設定に先立って本人確認書類の提出や liveness check が案内されているためです。誰でも自由に受け取れるわけではなく、本人確認を前提に進めるのが基本です。
          </p>
          <p className="text-gray-700 leading-relaxed">
            必要な資料は案件ごとに異なります。ご相談内容を確認したうえで、当社から必要書類をご案内します。
          </p>
        </section>

        <IconCardGrid
          heading="こんな方に向いています"
          columns={2}
          cards={[
            { icon: AlertTriangle, title: "手元のCENOMARが通るか不安", description: "有効期限と提出先の条件を先に確認します", accent: 'gold' },
            { icon: Calendar, title: "婚姻手続きの期限が迫っている", description: "必要時期から逆算したスケジュールで手配", accent: 'blue' },
            { icon: Globe, title: "現地に行かず代行してほしい", description: "フィリピンに行かずに日本から依頼できます", accent: 'teal' },
            { icon: Users, title: "家族に頼みにくい事情がある", description: "専門スタッフが代わりに対応します", accent: 'purple' },
          ]}
        />

        <ComparisonTable
          heading="自分で手配 vs IGRS代行"
          rows={[
            { item: "日本語でのやりとり", self: "英語が必要", agency: true },
            { item: "有効期限の事前確認", self: "自己調査が必要", agency: true },
            { item: "DFAアポスティーユ手配", self: false, agency: true },
            { item: "進捗レポート", self: "—", agency: true },
            { item: "追加書類の調整", self: false, agency: true },
          ]}
        />

        <SectionDivider variant="white">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            提出先別のCENOMAR要件
          </h2>
          <ul className="space-y-4 text-sm text-gray-700">
            <li className="flex items-start gap-3">
              <Globe className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-800 mb-1">日本（婚姻届・配偶者ビザ）— DFAアポスティーユ＋日本語翻訳が必要なことが多い</p>
                <p className="text-gray-600 leading-relaxed">市区町村役場への婚姻届ではCENOMAR原本のみで受け付けてくれる場合もありますが、入管（出入国在留管理局）への配偶者ビザ申請ではDFAアポスティーユ付きが求められるケースがほとんどです。翻訳も必要かどうかは提出先に確認が必要です。</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Globe className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-800 mb-1">米国（K-1・CR-1ビザ）— 物理アポスティーユ付き原本が必要</p>
                <p className="text-gray-600 leading-relaxed">USCISおよびNVCでは、DFAアポスティーユ付きの紙の原本が求められます。発行から6ヶ月以内の書類が必要です。電子版（e-Apostille）は受け付けられないことがあります。</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Globe className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-800 mb-1">カナダ・オーストラリア・英国 — 認証の形式を要確認</p>
                <p className="text-gray-600 leading-relaxed">IRCC（カナダ）、Home Affairs（オーストラリア）、UKVI（英国）それぞれで要件が異なります。申請先の最新要件を確認したうえで、必要な認証形式をご案内します。</p>
              </div>
            </li>
          </ul>
        </SectionDivider>
      </article>

      <CtaBox
        title="まずは無料相談"
        description="ご自身のケースでCENOMARだけで足りるのか、DFA Apostilleまで必要なのか、今ある書類が使える可能性があるのかを確認したい方は、まずはご相談ください。内容を確認したうえで、必要な書類と進め方をご案内します。"
        buttonText="自分の用途を相談する"
        href="#contact"
        variant="primary"
        trustNote="着手金50%・書類写し確認後に残金50%お支払い"
      />

      <StepList
        variant="visual"
        heading="ご依頼から発送までの流れ"
        steps={[
          {
            title: '無料相談・お見積もり',
            description: '用途、希望部数、提出予定先、必要時期を確認し、お見積もりをご案内します。',
          },
          {
            title: '着手金50%のお支払い',
            description: '内容に問題がなければ、着手金をご入金いただき、手続きを開始します。',
          },
          {
            title: '必要書類のご案内と取得手配',
            description: '案件に応じて、本人確認資料や委任状等をご案内し、取得手配を進めます。',
          },
          {
            title: '取得完了後、写しをご確認',
            description: '書類が取得できた段階で、写し（写真またはPDF）をご確認いただきます。',
          },
          {
            title: '残金50%のお支払い',
            description: '内容に問題がなければ、残額をご入金いただきます。',
          },
          {
            title: '原本発送',
            description: '入金確認後、原本の発送手続きへ進みます。',
          },
        ]}
      />

      <div className="max-w-2xl mx-auto px-4 mt-8">
        <FaqSection
          items={[
            {
              q: 'CENOMARとは何ですか？独身証明書と同じですか？',
              a: 'CENOMARはCertificate of No Marriage Recordの略で、フィリピン統計局（PSA）が発行する公的書類です。日本語では「独身証明書」に相当し、現在フィリピンに婚姻記録がないことを証明します。国際結婚の手続き、配偶者ビザ申請、帰化申請などで提出を求められることがあります。',
            },
            {
              q: 'CENOMARはどこで発行してもらえますか？',
              a: 'CENOMARはフィリピン統計局（PSA）が発行します。フィリピン国内では、PSAのオフィスまたはPSAHelplineのオンラインサービスから申請できます。日本国内にいる場合は、代理人や代行サービスを利用して取得するのが一般的です。',
            },
            {
              q: 'CENOMARの有効期限はありますか？',
              a: '提出先によって異なります。在東京フィリピン大使館の婚姻関連手続きでは、CENOMARは発行から6ヶ月以内と案内されています。手元の書類が今回の提出先で通るかは、提出先の要件を確認することが大切です。',
            },
            {
              q: 'DFA Apostille（アポスティーユ）は必要ですか？',
              a: '提出先によって必要かどうか変わります。日本の市区町村役場への提出では不要なことが多いですが、入管（出入国在留管理局）や外国の機関への提出では必要な場合があります。まずはご相談ください。',
            },
            {
              q: 'CENOMARの取得にはどのくらいかかりますか？',
              a: 'PSAからの取得には通常1〜3週間かかります。DFAアポスティーユが必要な場合はさらに1〜2週間追加となり、合計で1か月〜6週間が目安です。繁忙期や現地機関の状況によって前後することがあります。',
            },
            {
              q: 'CENOMARだけあれば手続きが進められますか？',
              a: '提出先によって異なります。CENOMARだけで足りる場合もありますが、出生証明書（PSA Birth Certificate）や婚姻証明書、DFAアポスティーユなどが追加で必要になる場合もあります。手続きの種類と提出先をお知らせいただければ、必要な書類を整理してご案内します。',
            },
            {
              q: 'CENOMARと出生証明書（PSA Birth Certificate）は何が違いますか？',
              a: 'CENOMARは婚姻記録がないことを証明する書類です。出生証明書（PSA Birth Certificate）は生年月日・出生地・両親の情報を証明する書類です。手続きによっては両方必要になる場合があります。',
            },
          ]}
          ctaTitle="CENOMARについてご不明な点はお気軽にご相談ください"
          ctaButton="無料で相談する"
        />
      </div>

      <RelatedLinks links={[
        { path: '/ja/kokusai-kekkon-guide/', label: '国際結婚の書類一括代行（CENOMAR・PSA・NBI）' },
        { path: '/ja/cenomar-apostille/', label: 'CENOMARのDFAアポスティーユ取得代行' },
        { path: '/ja/cenomar-koyukigen/', label: 'CENOMARの有効期限と取得タイミング' },
        { path: '/ja/haigusha-visa/', label: '配偶者ビザの書類代行' },
      ]} />
      <RelatedArticles
        items={[
          { href: '/ja/cenomar-vs-marriage-certificate', title: 'CENOMARと婚姻証明書の違い', description: 'K-1やCR-1で迷いやすい書類の違いを整理します。' },
          { href: '/ja/document-checklist-by-visa', title: 'ビザ別書類チェックリスト', description: 'K-1、CR-1、日本向けに必要な書類をまとめて確認できます。' },
          { href: '/ja/psa-shussei-shomeisho', title: 'PSA出生証明書取得代行', description: '婚姻関連以外の基本書類もあわせて確認できます。' },
          { href: '/ja/cenomar-apostille', title: 'CENOMARのアポスティーユ', description: '提出先に合わせてアポスティーユが必要か確認できます。' },
        ]}
      />
    </PageLayout>
  );
}
