import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import RelatedLinks from '../components/RelatedLinks';
import HeroBanner from '../components/HeroBanner';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import SectionDivider from '../components/SectionDivider';
import { CheckCircle, Clock } from 'lucide-react';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR_MONTH_JA } from '../lib/seoDate';

export default function PsaCostJa() {
  useMeta(
    `PSA出生証明書の費用【${SEO_YEAR_MONTH_JA}】総額いくら？現地365ペソだけでは届かない理由`,
    'PSA出生証明書の現地料金は365ペソ。でも日本に届けるにはアポスティーユ・国際郵送が必要です。追加請求なしの総額料金で代行。無料見積もり。',
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
          url: 'https://ph-document.com/ja/psa-shussei-cost/',
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
      <HeroBanner
        title="PSA出生証明書の取得費用"
        subtitle="PSAの現地料金は365ペソ。日本へ届けるまでの費用の全体像を整理して解説します。"
        badges={['現地料金を解説', 'アポスティーユ込み対応', '日本語でご相談OK', '渡航不要']}
        ctaText="無料相談・見積もりを依頼する"
        ctaHref="#contact"
        lastUpdated="2026年3月1日"
      />
      {/* 料金サマリー */}
      <div className="max-w-2xl mx-auto px-4">
        <SectionDivider variant="beige">
          <h2 className="text-xl font-bold text-gray-900 mb-3">代行料金（税抜）の目安</h2>
          <dl className="grid grid-cols-2 gap-3 text-sm mb-4">
            <div className="bg-white rounded-lg border border-gray-100 p-3">
              <dt className="text-gray-500 text-xs mb-1">PSA取得＋DFAアポスティーユ込み</dt>
              <dd className="font-bold text-gray-900 text-base">50,000円〜</dd>
              <dd className="text-gray-400 text-xs mt-1">※DHL国際配送は実費別途</dd>
            </div>
            <div className="bg-white rounded-lg border border-gray-100 p-3">
              <dt className="text-gray-500 text-xs mb-1">所要期間の目安</dt>
              <dd className="font-medium text-gray-800">約1か月〜1か月半</dd>
            </div>
          </dl>
          <div className="overflow-hidden rounded-xl border border-gray-100 shadow-sm text-sm">
            <div className="grid grid-cols-[2fr_1fr] bg-secondary text-white">
              <div className="px-4 py-3 font-bold">内容</div>
              <div className="px-4 py-3 font-bold text-center">料金（税抜）</div>
            </div>
            {[
              { label: 'PSA出生証明書取得', price: '込み' },
              { label: 'DFAアポスティーユ認証', price: '込み' },
              { label: 'DHL国際配送（追跡付き）', price: '実費別途' },
              { label: '合計（DFAアポスティーユ込み）', price: '50,000円〜', bold: true },
            ].map((row, i) => (
              <div key={row.label} className={`grid grid-cols-[2fr_1fr] border-b border-gray-100 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'}`}>
                <div className={`px-4 py-3 text-gray-700 ${row.bold ? 'font-bold' : ''}`}>{row.label}</div>
                <div className={`px-4 py-3 text-center ${row.bold ? 'font-bold text-primary' : 'text-gray-600'}`}>{row.price}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2">※正確な金額は無料相談後にご提示します。</p>

          {/* タイムライン */}
          <div className="mt-4 bg-blue-50 rounded-xl border border-blue-100 p-4">
            <h3 className="text-sm font-bold text-blue-900 mb-3 flex items-center gap-2">
              <Clock className="w-4 h-4" />申込から書類到着までの目安
            </h3>
            <div className="flex items-start gap-1 text-xs text-blue-800">
              {[
                { step: '1', label: '無料相談・見積もり', days: '即日〜翌日' },
                { step: '2', label: 'PSA書類取得', days: '約2〜3週間' },
                { step: '3', label: 'DFAアポスティーユ', days: '約1〜2週間' },
                { step: '4', label: 'DHL発送・到着', days: '約1週間' },
              ].map((s, i, arr) => (
                <React.Fragment key={s.step}>
                  <div className="flex flex-col items-center flex-1 text-center">
                    <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs mb-1">{s.step}</div>
                    <p className="font-semibold leading-tight">{s.label}</p>
                    <p className="text-blue-600 mt-0.5">{s.days}</p>
                  </div>
                  {i < arr.length - 1 && <div className="flex items-center pt-3 text-blue-300 font-bold px-0.5">→</div>}
                </React.Fragment>
              ))}
            </div>
            <p className="text-xs text-blue-700 mt-3 border-t border-blue-100 pt-2">合計の目安：<strong>約1か月〜1か月半</strong></p>
          </div>
        </SectionDivider>
      </div>

      {/* 決断トリガー */}
      <section className="max-w-2xl mx-auto px-4 mb-8 text-sm text-gray-700">
        <p className="font-bold text-base text-gray-900 mb-3">こんな状況でご相談いただいています</p>
        <ul className="space-y-2">
          {[
            '「PSA出生証明書はいくらかかるのか」費用の全体像を知りたい',
            '国際結婚・配偶者ビザ申請に向けてPSA＋アポスティーユを取り寄せたい',
            '自分で取得しようとしたが、手順が複雑で困っている',
            '提出期日が決まっていて、早急に揃えたい',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <article className="max-w-2xl mx-auto px-4">

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
        title="PSA出生証明書、費用・期間の目安をすぐお伝えします"
        description="用途（国際結婚・ビザ申請・帰化申請）と提出先をお知らせください。費用の見積もりを即日でご案内します。「まず費用を確認してから決めたい」方もお気軽にどうぞ。"
        buttonText="無料相談・見積もりを依頼する"
        href="#contact"
        variant="primary"
        trustNote="見積もり無料・即日回答 ｜ 着手金50%・書類写し確認後に残金50% ｜ 着手前キャンセル無料"
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

      <RelatedLinks links={[
        { path: '/ja/psa-shussei-shomeisho/', label: 'PSA出生証明書の取得代行（渡航不要・アポスティーユ付き）' },
        { path: '/ja/apostille/', label: 'DFAアポスティーユ代行' },
        { path: '/ja/haigusha-visa/', label: '配偶者ビザの書類代行' },
        { path: '/ja/kokusai-kekkon-guide/', label: '国際結婚の書類一括代行' },
      ]} />
    </PageLayout>
  );
}
