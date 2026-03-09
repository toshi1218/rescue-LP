import React from 'react';
import PageLayout from '../components/PageLayout';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';

export default function CenomarGuideJa() {
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'CENOMAR（独身証明書）取得代行' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'CENOMAR（独身証明書）取得代行',
          description: 'フィリピンのCENOMAR（独身証明書）を必要書類の確認から取得・発送までサポート。国際結婚・配偶者ビザ・帰化申請に対応。',
          url: 'https://ph-document.com/ja/cenomar',
          provider: {
            '@type': 'Organization',
            name: 'IGRS Inc.',
            url: 'https://ph-document.com/ja/',
          },
          areaServed: { '@type': 'Country', name: 'JP' },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'CENOMARの有効期限はありますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '提出先によって異なります。在東京フィリピン大使館の婚姻関連手続きでは、CENOMARは発行から6か月有効と案内されています。手元の書類が今回の提出先で通るかは、提出先の要件を確認することが大切です。',
              },
            },
            {
              '@type': 'Question',
              name: 'DFA Apostille（アポスティーユ）は必要ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '提出先によって必要かどうか変わります。必要書類の確認から進めるため、まずはご相談ください。',
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
          ],
        },
      ]}
    >
      <article className="max-w-2xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-2 leading-snug">
          フィリピンCENOMAR（独身証明書）の取得代行
        </h1>
        <p className="text-gray-500 mb-6">
          婚姻手続きや各種届出に向けて、必要書類の確認から取得・発送までサポートします。
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          CENOMARは、フィリピン統計局（Philippine Statistics Authority）が発行する Certificate of No Marriage Record です。国際結婚や婚姻関連手続きでは、「今の自分の婚姻記録がどうなっているか」を確認するために求められることがあります。PSAHelpline では、CENOMARのオンライン料金は <strong>1通420ペソ</strong> と案内されています。
        </p>

        <p className="text-gray-700 leading-relaxed mb-8">
          ただし、実際に困るのは「書類そのもの」より、提出先に合う状態で、必要な時期に間に合わせることです。古い書類を出して受け付けられなかったり、必要な追加手続きの確認が後回しになったりすると、取り直しや再発送が発生しやすくなります。
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            CENOMARで先に知っておきたいこと
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            CENOMARは「一度取ればずっと使える書類」ではありません。提出先によって、発行日の新しさを求められることがあります。たとえば、在東京フィリピン大使館の婚姻関連手続きでは、CENOMARは<strong>発行から6か月有効</strong>と案内されています。つまり、手元にあるから安心ではなく、<strong>その書類が今回の提出先で通るか</strong>が大事です。
          </p>
          <p className="text-gray-700 leading-relaxed">
            また、必要に応じて <strong>DFA Apostille（アポスティーユ）</strong> が関わることがあります。フィリピンでは、いわゆる昔の「red ribbon」ではなく、現在は Apostille の制度で案内されています。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            IGRSのCENOMAR取得サポート
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            当社では、単に「CENOMARを取る」だけではなく、どの書類が必要か、追加認証がいるか、どの順番で進めるかを整理したうえで手配します。
          </p>
          <p className="text-gray-700 leading-relaxed">
            特に、海外手続きで不安になりやすい<strong>進捗の見えにくさ</strong>を減らすため、申請、取得、発送準備などの節目ごとに状況をご案内します。「今どこまで進んでいるのか分からない」という状態をできるだけ避け、婚姻手続きやその後の予定を立てやすくするためのサポートです。
          </p>
        </section>

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

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            こんな方に向いています
          </h2>
          <ul className="space-y-2 text-gray-700 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gray-400 flex-shrink-0 mt-1">・</span>
              家族や知人に頼むのが不安
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400 flex-shrink-0 mt-1">・</span>
              今の手元のCENOMARで通るのか分からない
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400 flex-shrink-0 mt-1">・</span>
              婚姻手続きや次の申請に向けて、必要書類を整理したい
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            そういう方は、先に全体像を整理してから動いた方が、結果として遠回りを減らしやすいです。
          </p>
        </section>
      </article>

      <CtaBox
        title="まずは無料相談"
        description="ご自身のケースでCENOMARだけで足りるのか、DFA Apostilleまで必要なのか、今ある書類が使える可能性があるのかを確認したい方は、まずはご相談ください。内容を確認したうえで、必要な書類と進め方をご案内します。"
        buttonText="無料相談・お見積もりフォームへ"
        href="#contact"
        variant="primary"
        trustNote="着手金50%・書類写し確認後に残金50%お支払い"
      />

      <StepList
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

      <CtaBox
        title="LINEで相談する"
        description="お気軽にLINEでもご相談いただけます。"
        buttonText="LINEで相談する"
        href="#contact"
        variant="secondary"
        trustNote="日本語のみでOK・匿名相談可・返信24時間以内"
      />
    </PageLayout>
  );
}
