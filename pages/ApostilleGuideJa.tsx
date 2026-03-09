import React from 'react';
import PageLayout from '../components/PageLayout';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { useMeta } from '../lib/useMeta';

export default function ApostilleGuideJa() {
  useMeta(
    'フィリピン書類のアポスティーユ（旧レッドリボン）完全解説｜IGRS',
    'アポスティーユ（旧レッドリボン）とは何か、必要になるケース、よくある誤解と注意点を解説。PSA・CENOMAR・LTO書類の認証代行も日本語でサポートします。',
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
          url: 'https://ph-document.com/ja/apostille',
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
          ],
        },
      ]}
    >
      <article className="max-w-2xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-4 leading-snug">
          【完全解説】フィリピン書類のアポスティーユ（旧レッドリボン）とは？ 必要になるケースと注意点
        </h1>

        <p className="text-gray-700 leading-relaxed mb-8">
          日本の役所、入管、警察、免許センターなどから「フィリピンの書類にアポスティーユを付けてください」と言われて、何をすればいいのか分からず止まっていませんか。このページでは、アポスティーユの意味、旧レッドリボンとの違い、必要になりやすいケース、そして進めるときの注意点をまとめて整理します。
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            1. アポスティーユ（旧レッドリボン）とは何か
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            アポスティーユとは、その書類がフィリピンで正式に発行された公文書であることを、権限のある機関が証明するための認証です。フィリピンの公館案内でも、Apostille は "Formerly Authentication" と説明されています。
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
            ただし、当社をご利用いただく場合でも、完全に何もしなくてよいわけではありません。案件によっては、英文委任状（Special Power of Attorney）へのご署名や、身分証明書のコピー提出などをお願いしています。
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
        buttonText="無料相談はこちら"
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
            q: 'レッドリボンとアポスティーユは違いますか？',
            a: '現在の正式な表現はアポスティーユです。フィリピンでは2019年5月14日にApostille Conventionが発効しており、現在は "Apostille (Formerly Authentication)" という扱いです。',
          },
          {
            q: 'PSAの書類には必ずアポスティーユが必要ですか？',
            a: '必ずとは限りません。提出先によって異なりますが、婚姻関係手続などではDFA Apostilleが案内されている例があります。まずは提出先の要求確認が大切です。',
          },
          {
            q: 'アポスティーユは必ず予約が必要ですか？',
            a: 'そう言い切れません。2025年にはPSA DocumentsのFully Online ApostilleやApostille Servicesの予約プロセス変更が案内されており、運用は固定ではありません。',
          },
          {
            q: 'LTO書類にもアポスティーユが関係しますか？',
            a: 'はい、関係することがあります。警視庁のフィリピン向け外免切替必要書類一覧では、Certification with Apostille、必要に応じてImmigration Record with Apostilleが案内されています。',
          },
        ]}
        ctaTitle="9. まずは無料相談"
        ctaButton="無料相談フォームへ"
      />

      <article className="max-w-2xl mx-auto px-4 mb-8">
        <p className="text-gray-700 leading-relaxed mb-3">
          アポスティーユは、書類を取る前の整理が大事です。何のために使うのか、どの書類が必要なのか、元書類に不足がないか。そこを先に整理すると、後戻りが減ります。
        </p>
        <p className="text-gray-700 leading-relaxed">
          「自分のケースで本当に必要なのか」「PSAだけで足りるのか」「NBIやLTOまで関係するのか」——その確認からで大丈夫です。まずはご相談ください。
        </p>
      </article>

      <CtaBox
        title="料金を確認する"
        description="必要書類と費用の目安を無料でご案内します。"
        buttonText="料金を見る"
        href="/ja/apostille-cost/"
        variant="secondary"
        trustNote="日本語のみでOK・匿名相談可・返信24時間以内"
      />
    </PageLayout>
  );
}
