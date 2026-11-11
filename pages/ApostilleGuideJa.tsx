import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import RelatedArticles from '../components/RelatedArticles';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR_MONTH_JA } from '../lib/seoDate';

export default function ApostilleGuideJa() {
  useMeta(
    `フィリピンDFAアポスティーユ代行【${SEO_YEAR_MONTH_JA}】書類取得から一括対応・渡航不要`,
    'DFAアポスティーユはフィリピン現地での手続きが必要ですが、当センターが代行します。PSA・CENOMAR・NBI等の書類取得と同時依頼OK。紙の原本で日本へ郵送。無料相談。',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'アポスティーユ（旧レッドリボン）完全解説' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: '【完全解説】フィリピン書類のアポスティーユ（旧レッドリボン）とは？ 必要になるケースと注意点',
          description: 'フィリピン書類のアポスティーユとは何か、旧レッドリボンとの違い、必要になるケース、IGRSのサポート内容を解説します。',
          url: 'https://ph-document.com/ja/apostille/',
          publisher: {
            '@type': 'Organization',
            name: 'IGRS Inc.',
            url: 'https://ph-document.com/ja/',
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'アポスティーユとは何ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'アポスティーユとは、その書類がフィリピンで正式に発行された公文書であることを権限ある機関（フィリピンの場合はDFA＝外務省）が証明する認証です。ハーグ条約（Apostille Convention）に基づく国際的な認証制度で、フィリピンでは2019年5月14日に発効しました。',
              },
            },
            {
              '@type': 'Question',
              name: 'レッドリボンとアポスティーユは違いますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '現在の正式な表現はアポスティーユです。フィリピンでは2019年5月14日にApostille Conventionが発効しており、現在は "Apostille (Formerly Authentication)" という扱いです。',
              },
            },
            {
              '@type': 'Question',
              name: 'PSAの書類には必ずアポスティーユが必要ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '必ずとは限りません。提出先によって異なりますが、婚姻関係手続などではDFA Apostilleが案内されている例があります。まずは提出先の要求確認が大切です。',
              },
            },
            {
              '@type': 'Question',
              name: 'アポスティーユはどこで取得できますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'フィリピンのDFA（外務省）で取得します。DFAオフィスでの窓口申請のほか、PSA書類については一部オンライン申請も可能な場合があります。運用は変わることがあるため、最新の手続きを確認することが重要です。',
              },
            },
            {
              '@type': 'Question',
              name: 'アポスティーユは必ず予約が必要ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'そう言い切れません。2025年にはPSA DocumentsのFully Online ApostilleやApostille Servicesの予約プロセス変更が案内されており、運用は固定ではありません。',
              },
            },
            {
              '@type': 'Question',
              name: 'LTO書類にもアポスティーユが関係しますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'はい、関係することがあります。警視庁のフィリピン向け外免切替必要書類一覧では、Certification with Apostille、必要に応じてImmigration Record with Apostilleが案内されています。',
              },
            },
            {
              '@type': 'Question',
              name: 'アポスティーユの取得にはどのくらいかかりますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'PSAの電子版は約1週間、紙原本の国際発送が必要な場合は約3〜4週間が目安です。NBI・LTOなどの物理書類は案件により異なります。',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="アポスティーユ"
        subtitle="国際結婚、配偶者ビザ準備、外免切替、帰化申請など、どの場面で必要になりやすいかを分かりやすくまとめています。"
        badges={['PSA・CENOMAR・LTO対応', 'DFA認証代行', '日本語でご相談OK']}
        ctaText="無料で相談する"
        ctaHref="#contact"
        lastUpdated="2026年3月1日"
      />
      <article className="max-w-2xl mx-auto px-4">

        <p className="text-gray-700 leading-relaxed mb-8">
          日本の役所、入管、警察、免許センターなどから「フィリピンの書類にアポスティーユを付けてください」と言われて、何をすればいいのか分からず止まっていませんか。このページでは、アポスティーユの意味、旧レッドリボンとの違い、必要になりやすいケース、そして進めるときの注意点をまとめて整理します。
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            1. アポスティーユ（旧レッドリボン）とは何か
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            アポスティーユとは、その書類がフィリピンで正式に発行された公文書であることを、<a href="https://dfa.gov.ph" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">フィリピン外務省（DFA公式サイト）</a>が証明するための認証です。フィリピンの公館案内でも、Apostille は "Formerly Authentication" と説明されています。
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            フィリピンでは、<strong>2019年5月14日に Apostille Convention が発効しました</strong>。これにより、以前の「authentication」や通称「レッドリボン」と呼ばれていた運用から、現在の Apostille が正式な表現になっています。
          </p>
          <p className="text-gray-700 leading-relaxed">
            そのため、今でも日本側で「レッドリボン」と言われることはありますが、現在取得するものはアポスティーユです。日本にあるフィリピン大使館の案内でも、アポスティーユ済みの書類は日本のフィリピン大使館・総領事館での追加認証が不要とされています。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            2. どんなときに必要になるのか
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            アポスティーユは、フィリピン書類を日本や海外の公的機関へ出すときに求められることがある認証です。ただし、いつでも一律必須というわけではなく、提出先や手続きによって必要性は変わります。
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            たとえば、フィリピン大使館の婚姻関係手続では、PSA Birth Certificate や CENOMAR に DFA Apostille が求められる案内があります。外免切替では、警視庁のフィリピン向け必要書類一覧に Certification with Apostille や、必要に応じて Immigration Record with Apostille が記載されています。
          </p>
          <p className="text-gray-700 leading-relaxed">
            つまり、PSA書類、NBIクリアランス、LTO関連書類などでアポスティーユが関係することはありますが、何に必要かは案件ごとに確認するのが安全です。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            3. よくある誤解
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            まず多いのが、「PSAの書類を取ればそのまま使える」と思ってしまうことです。実際には、提出先によっては PSA の原本だけでは足りず、さらに DFA Apostille が必要になることがあります。
          </p>
          <p className="text-gray-700 leading-relaxed">
            次に多いのが、「アポスティーユはいつでも同じ方法で取れる」と思ってしまうことです。DFA の運用は固定ではなく、2025年には PSA Documents の Fully Online Apostille の案内や、Apostille Services の予約プロセス変更も出ています。つまり、「予約が必須」「必ず窓口へ行く」などと決めつけず、その時点の運用確認が必要です。
          </p>
        </section>

        <section id="vfs-document-authentication" className="mb-8 scroll-mt-24 rounded-2xl border border-primary/25 bg-primary/5 p-5 md:p-6">
          <h2 className="mb-3 text-xl font-bold text-gray-900">VFS Global経由のフィリピン書類認証・照合</h2>
          <p className="mb-4 leading-relaxed text-gray-700">
            ドイツ、アラブ首長国連邦（UAE）、イタリアへの提出に必要なVFS Globalの書類手続きをサポートします。提出先の案内を確認し、書類取得、必要なDFA認証、代理で行えるVFS手続き、完成書類の受け取り・発送を手配します。
          </p>
          <ul className="mb-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-700">
            <li><strong>ドイツ</strong>　紙のDFA認証を取得し、PSA書類はVFSのBasic Legalizationでドイツ大使館認証へ進めます。 <a href="#germany-legalization" className="underline">ドイツ向けの詳細</a></li>
            <li><strong>アラブ首長国連邦（UAE）</strong>　対象の身分関係書類・学歴書類などは、DFA認証を経て、VFS経由でUAE大使館とUAE外務省（MoFA）の認証を手配できます。 <a href="https://services.vfsglobal.com/phl/en/atu/apply-attestation-new" target="_blank" rel="noopener noreferrer" className="underline">VFS公式案内</a></li>
            <li><strong>イタリア</strong>　用途に応じて、VFSで受け付けるPSA書類の照合や、学歴書類のDeclaration of Value（DOV）などを確認します。 <a href="https://visa.vfsglobal.com/phl/en/ita/additional-services" target="_blank" rel="noopener noreferrer" className="underline">VFS公式案内</a></li>
          </ul>
          <p className="mb-4 text-sm leading-relaxed text-gray-700">提出国・提出先機関・書類名・期限をお知らせください。認証の種類、紙原本・電子版の指定、代理申請の可否を確認してからお見積もりします。</p>
          <a href="/ja/contact/" className="inline-flex items-center justify-center rounded-xl bg-secondary px-5 py-3 text-sm font-bold text-white hover:bg-secondary-light">VFS書類手続きを相談する</a>
        </section>

        <section id="germany-legalization" className="mb-8 scroll-mt-24 rounded-2xl border border-primary/25 bg-primary/5 p-5 md:p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">ドイツ向け：紙のDFA認証・大使館認証・海外発送まで対応</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            IGRSでは、ドイツの公証人・行政機関などへ提出するCENOMAR、PSA出生証明書、婚姻証明書について、取得から認証・ドイツへの発送までまとめて手配します。国際結婚・ビザ以外の、独身であることの証明などもご相談いただけます。
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            ドイツとフィリピンの間ではアポスティーユ条約による認証省略の仕組みが適用されていません。提出先が認証を求める場合は、<strong>紙のDFA Authentication Certificateを取得し、VFS Global経由でドイツ大使館のLegalization（領事認証）へ進めます</strong>。電子書類・e-Apostilleはこの大使館認証には使えません。認証の要否は提出先に確認します。
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700 leading-relaxed mb-4">
            <li>提出先・用途・必要書類・期限を確認し、対応範囲と費用をご案内</li>
            <li>PSAの紙原本と、紙のDFA Authentication Certificateを取得手配</li>
            <li>委任状・本人確認書類・補足資料を揃え、VFS GlobalのBasic Legalizationで大使館認証を申請（PSA書類はDFA認証を先に取得）</li>
            <li>完成書類を確認し、DHL・FedEx等でドイツへ発送</li>
          </ol>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            PSA書類が不鮮明な場合は、LCR Form 1Aなどの補足資料の取得可否も確認します。CENOMARには出生証明書／LCR書類の補足が必要です。大使館認証そのものにはドイツ語翻訳は不要ですが、提出先が別途翻訳を求める場合があります。納期・費用・別送の可否は必要書類と提出期限に合わせてご案内します。
          </p>
          <p className="text-xs text-gray-600 leading-relaxed mb-4">
            公式案内：<a href="https://manila.diplo.de/ph-en/service/2673916-2673916" target="_blank" rel="noopener noreferrer" className="underline">ドイツ大使館</a>／<a href="https://visa.vfsglobal.com/phl/en/deu/legalizations" target="_blank" rel="noopener noreferrer" className="underline">VFS Global</a>
          </p>
          <a href="/ja/contact/" className="inline-flex items-center justify-center rounded-xl bg-secondary px-5 py-3 text-sm font-bold text-white hover:bg-secondary-light">ドイツ提出用の書類を相談する</a>
        </section>

        <CtaBox
          title="どの書類にアポスティーユが必要か、まず確認します"
          description="何のために使う書類か、どの書類を持っているかをお知らせください。必要な流れと費用の目安をご案内します。"
          buttonText="無料相談はこちら"
          href="#contact"
          variant="primary"
          trustNote="着手前キャンセル無料・返信24時間以内"
        />

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            4. なぜここで止まりやすいのか
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            アポスティーユは、単に「もう1枚シールを貼る」手続きではありません。元になる書類が正しく揃っているか、その書類がアポスティーユ対象として進められるか、提出先が本当にそれを求めているかを整理しないと、手戻りが起きやすいです。
          </p>
          <p className="text-gray-700 leading-relaxed">
            また、外免切替のように、アポスティーユ付き書類を用意しても、別の本体条件を満たしていなければ意味がない手続きもあります。フィリピン免許の外免切替では、免許取得後にその国で通算3か月以上滞在していたことの立証が前提です。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            5. IGRSのアポスティーユサポート
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            「どの書類にアポスティーユが必要なのか分からない」「PSA書類だけで足りるのか判断できない」「依頼したあと、今どこまで進んでいるのか見えないのが不安」——そうした方に向けて、株式会社IGRSでは、必要書類の整理から取得、アポスティーユ対応、発送までを日本語で進めやすい形でご案内しています。
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            当社が大事にしているのは、<strong>進捗が見えること</strong>です。海外書類の手続きでよくある「依頼したあと状況が見えない」という不安を減らすため、確認、進行、発送の節目ごとに状況をご案内します。
          </p>
          <p className="text-gray-700 leading-relaxed">
            ただし、当社をご利用いただく場合でも、完全に何もしなくてよいわけではありません。案件によっては、authorization letterへのご署名や、身分証明書のコピー提出などをお願いしています。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            6. ご依頼前に知っておいていただきたいこと
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            アポスティーユは便利な認証ですが、すべての案件が同じ難易度ではありません。元書類の種類、提出先、婚姻・ビザ・外免切替などの目的によって、必要な流れは変わります。
          </p>
          <p className="text-gray-700 leading-relaxed">
            また、NBIクリアランスやLTO書類が関係する場合は、アポスティーユ以前に、その書類自体をどの条件で取れるのかを確認しなければいけません。たとえば NBI は、2014年以降取得歴があり個人情報変更がない更新案件と、初回申請や氏名変更ありの新規扱い案件で流れが変わります。
          </p>
        </section>
      </article>

      <CtaBox
        title="まずは無料でご相談ください"
        description="何のために使う書類か、どの書類を持っているかをお知らせください。必要な流れと費用の目安をご案内します。"
        buttonText="自分のケースを確認する"
        href="#contact"
        variant="primary"
        trustNote="着手金50%・書類写し確認後に残金50%お支払い"
      />

      <StepList
        heading="7. ご依頼から発送までの流れ"
        steps={[
          {
            title: '無料相談',
            description: 'まずは、何のために使う書類か、どの書類を持っているかをお知らせください。',
          },
          {
            title: '条件確認・お見積もり',
            description: '提出先や必要書類を確認し、進め方と費用の目安をご案内します。',
          },
          {
            title: '着手金のお支払い',
            description: '代金総額の50%をご入金いただいた後、手続きを開始します。',
          },
          {
            title: '書類取得後のご確認',
            description: '書類が揃った段階で、写しをお送りします。内容をご確認ください。',
          },
          {
            title: '残金のお支払い',
            description: '写しをご確認いただいた後、残りの50%をお支払いいただきます。',
          },
          {
            title: '原本の発送',
            description: '残金の着金確認後、原本を発送します。',
          },
        ]}
      />

      <FaqSection
        items={[
          {
            q: 'アポスティーユとは何ですか？',
            a: 'アポスティーユとは、その書類がフィリピンで正式に発行された公文書であることを権限ある機関（フィリピンの場合はDFA＝外務省）が証明する認証です。ハーグ条約（Apostille Convention）に基づく国際的な認証制度で、フィリピンでは2019年5月14日に発効しました。',
          },
          {
            q: 'レッドリボンとアポスティーユは違いますか？',
            a: '現在の正式な表現はアポスティーユです。フィリピンでは2019年5月14日にApostille Conventionが発効しており、現在は "Apostille (Formerly Authentication)" という扱いです。',
          },
          {
            q: 'PSAの書類には必ずアポスティーユが必要ですか？',
            a: '必ずとは限りません。提出先によって異なりますが、婚姻関係手続などではDFA Apostilleが案内されている例があります。まずは提出先の要求確認が大切です。',
          },
          {
            q: 'アポスティーユはどこで取得できますか？',
            a: 'フィリピンのDFA（外務省）で取得します。DFAオフィスでの窓口申請のほか、PSA書類については一部オンライン申請も可能な場合があります。運用は変わることがあるため、最新の手続きを確認することが重要です。',
          },
          {
            q: 'アポスティーユは必ず予約が必要ですか？',
            a: 'そう言い切れません。2025年にはPSA DocumentsのFully Online ApostilleやApostille Servicesの予約プロセス変更が案内されており、運用は固定ではありません。',
          },
          {
            q: 'LTO書類にもアポスティーユが関係しますか？',
            a: 'はい、関係することがあります。警視庁のフィリピン向け外免切替必要書類一覧では、Certification with Apostille、必要に応じてImmigration Record with Apostilleが案内されています。',
          },
          {
            q: 'アポスティーユの取得にはどのくらいかかりますか？',
            a: 'PSAの電子版は約1週間、紙原本の国際発送が必要な場合は約3〜4週間が目安です。NBI・LTOなどの物理書類は案件により異なります。',
          },
        ]}
        ctaTitle="まずは無料相談"
        ctaButton="無料相談フォームへ"
      />

      <RelatedArticles
        items={[
          { href: '/ja/apostille-shori-kikan/', title: 'アポスティーユの処理期間', description: '通常・速達それぞれの目安期間を解説します。' },
          { href: '/ja/apostille-ryokin/', title: 'アポスティーユの費用', description: 'PSA書類取得・DHL送料込みの料金体系を確認できます。' },
          { href: '/ja/dfa-apostille-genchi-report/', title: 'アポスティーユ取得手順【DFAセブ窓口】', description: 'セブ窓口での実際の取得手順をレポートしています。' },
          { href: '/ja/cenomar/', title: 'CENOMAR（独身証明書）', description: 'CENOMAR取得とDFAアポスティーユをまとめて代行。' },
        ]}
      />

    </PageLayout>
  );
}
