import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import { useMeta } from '../lib/useMeta';

export default function PsaCostJa() {
  useMeta(
    'PSA出生証明書の取得費用｜フィリピン現地料金と日本への発送総額｜IGRS',
    'PSA出生証明書の現地料金は365ペソ。日本への取り寄せでは国際配送・本人確認・アポスティーユ等が加わります。費用の全体像を整理して解説します。',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'PSA出生証明書の取得費用' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'フィリピンPSA出生証明書の取得費用はいくら？現地料金と日本へ届けるまでの総額を解説',
          description: 'PSA出生証明書の現地料金と日本へ届けるまでの総費用を解説。365ペソの書類代だけでなく、国際配送・アポスティーユなど実際の負担を整理します。',
          url: 'https://ph-document.com/ja/psa-shussei-cost',
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
              name: 'PSA出生証明書そのものの料金はいくらですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'PSAHelplineのオンライン注文では365ペソと案内されています。ただし、これはフィリピン国内向けの処理・国内courier費用を含む案内です。海外への発送は別途手配・別料金になります。',
              },
            },
            {
              '@type': 'Question',
              name: 'なぜ日本に取り寄せると費用が上がるのですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'PSAの発行料以外の費用が加わるためです。DHL・FedExなどの国際courier費用、本人確認手続き、受領者設定などが別途必要になります。',
              },
            },
            {
              '@type': 'Question',
              name: 'アポスティーユが必要な場合の費用は？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'PSAHelplineの案内ではDFA e-Apostilleが200ペソ、PSA e-Certificateが300ペソとされています。ただし提出先がデジタル書類を受け付けるかは個別に確認が必要です。',
              },
            },
          ],
        },
      ]}
    >
      <article className="max-w-2xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-4 leading-snug">
          フィリピンPSA出生証明書の取得費用はいくら？現地料金と日本へ届けるまでの総額を解説
        </h1>

        <p className="text-gray-700 leading-relaxed mb-4">
          配偶者ビザ、国際結婚、相続、各種届出などで必要になることが多い、フィリピン統計局発行の PSA Birth Certificate（出生証明書）。よくある疑問が、「PSAの書類自体は安いと聞くのに、なぜ日本から頼むと高くなるのか？」というものです。
        </p>

        <p className="text-gray-700 leading-relaxed mb-8">
          結論から言うと、PSAの書類そのものの料金は高くありません。高くなるのは、日本で使う前提で"取得・受領・確認・発送"まで含めるからです。このページでは、PSA出生証明書の実際の費用感と、安く見えて結果的に高くつきやすいポイントを、できるだけわかりやすく整理します。
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            PSA出生証明書そのものの料金はいくらですか？
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            オンラインで PSA Birth Certificate（出生証明書）を注文する場合、PSAHelpline では <strong>365ペソ</strong> と案内されています。これは、フィリピン国内向けの processing と nationwide courier fee を含む案内です。つまり、「書類そのもの」は数万円するものではありません。
          </p>
          <p className="text-gray-700 leading-relaxed">
            一方で、海外在住者が日本で受け取る場合は話が別です。PSAHelpline の海外向け案内では、申込者が abroad から注文することはできますが、国際配送は別手配・別料金です。PSAHelpline 側の支払いでカバーされるのは、申請処理、digital copy の作成、書類準備までで、実際の international courier pickup は利用者側で予約・支払いを行う仕組みです。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            なぜ「現地では安い」のに、日本に取り寄せると費用が上がるのですか？
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            理由はシンプルで、PSAの発行料以外の費用が乗るからです。特に海外配送では、DHL や FedEx などの courier を自分で手配する方式になっており、送料は配送先の国、配送スピード、利用する会社によって変わります。つまり、「PSAの料金」と「日本へ届けるコスト」は分けて考える必要があります。
          </p>
          <p className="text-gray-700 leading-relaxed">
            また、日本に住んでいる方が「フィリピンの家族や知人に受け取ってもらう」方法を使う場合でも、PSAHelpline では Authorized Person to Receive の設定に先立ち、本人確認書類のアップロードと liveness check が必要と案内されています。単に「誰かに頼めば終わり」ではなく、本人確認や受領者設定の手間が発生します。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            追加でアポスティーユが必要な場合はどうなりますか？
          </h2>
          <p className="text-gray-700 leading-relaxed">
            提出先によっては、PSA出生証明書だけでなく、さらに DFA e-Apostille（電子アポスティーユ）や別の認証が必要になることがあります。PSAHelpline の案内では、DFA e-Apostille は <strong>200ペソ</strong>、これとは別に PSA e-Certificate の <strong>300ペソ</strong> がかかるとされています。ただし、digital copy や e-Apostille を提出先が受け付けるかは、必ず提出先に確認が必要です。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            安く見えて、結果的に高くつきやすいポイント
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            一番多いのは、<strong>「書類代だけ見て判断してしまうこと」</strong>です。実際には、本人確認、受領者設定、国際配送の手配、提出先が求める形式の確認まで必要になり、途中で認識違いがあると、書類を取り直したり、再発送になったりします。そうなると、最初は安く見えても、時間も費用も余計にかかります。
          </p>
          <p className="text-gray-700 leading-relaxed">
            特に、「PSAの取得」と「日本で使える状態にすること」は同じではありません。提出先によって、原本が必要なのか、電子版で足りるのか、アポスティーユが必要なのかが変わるため、ここを曖昧にしたまま進めると失敗しやすいです。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            当社のPSA取得サポートについて
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            当社では、単に「書類を取る」だけではなく、どの書類が必要か、どの形式で受け取るべきか、日本で使う前提でどう進めるかまで含めてご案内しています。
          </p>
          <p className="text-gray-700 leading-relaxed">
            なお、当社は「完全放置で何もしなくてよい」といった誇大な案内はしていません。案件に応じて、本人確認資料、Authorization Letter（委任状）、そのほか必要資料のご用意をお願いする場合があります。必要なものは、内容を確認したうえで当社からご案内します。
          </p>
        </section>
      </article>

      <CtaBox
        title="まずは無料でお見積もり"
        description="必要書類とご希望内容を確認し、無料でお見積もりをお出しします。"
        buttonText="無料相談はこちら"
        href="#contact"
        variant="primary"
        trustNote="着手金50%・書類写し確認後に残金50%お支払い"
      />

      <StepList
        heading="ご依頼時の決済フロー"
        variant="visual"
        steps={[
          {
            title: '無料お見積もり',
            description: '必要書類とご希望内容を確認し、無料でお見積もりをお出しします。',
          },
          {
            title: '着手金50%をご入金',
            description: '内容に問題がなければ、着手金として総額の50%をご入金いただき、手続きを開始します。',
          },
          {
            title: '書類写しをご確認',
            description: '書類取得が完了した段階で、写し（写真またはPDF）をご確認いただきます。',
          },
          {
            title: '残額50%ご入金・原本発送',
            description: '内容に問題がなければ、残額50%をご入金いただき、入金確認後に原本発送へ進みます。',
          },
        ]}
      />

      <article className="max-w-2xl mx-auto px-4">
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">まとめ</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            PSA出生証明書そのものは、オンライン注文で見る限り365ペソ程度の低額な書類です。ただし、日本から使う前提では、国際配送、本人確認、受領者設定、必要に応じた認証手続きが加わるため、実際の負担はそれだけでは済みません。
          </p>
          <p className="text-gray-700 leading-relaxed">
            「なるべく安く済ませたい」よりも、最初から提出先に合う形で、無駄な取り直しなく進めたいという方は、先に全体像を確認してから動く方が安全です。
          </p>
        </section>
      </article>

      <CtaBox
        title="全体像を確認してから動きたい方へ"
        description="PSA出生証明書の取得から日本での使用まで、まず無料相談でご確認ください。"
        buttonText="無料相談フォームへ"
        href="#contact"
        variant="secondary"
        trustNote="日本語のみでOK・匿名相談可・返信24時間以内"
      />

      {/* 関連ページへの内部リンク */}
      <nav className="mt-10 pt-8 border-t border-gray-100">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">関連ページ</p>
        <ul className="space-y-2 text-sm">
          <li><Link to="/ja/psa-shussei-shomeisho/" className="text-secondary hover:underline">→ PSA出生証明書の取得代行（渡航不要・アポスティーユ付き）</Link></li>
          <li><Link to="/ja/apostille/" className="text-secondary hover:underline">→ DFAアポスティーユ代行</Link></li>
          <li><Link to="/ja/haigusha-visa/" className="text-secondary hover:underline">→ 配偶者ビザの書類代行</Link></li>
          <li><Link to="/ja/kokusai-kekkon-guide/" className="text-secondary hover:underline">→ 国際結婚の書類一括代行</Link></li>
        </ul>
      </nav>
    </PageLayout>
  );
}
