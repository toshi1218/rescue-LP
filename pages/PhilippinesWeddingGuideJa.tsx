import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import RelatedLinks from '../components/RelatedLinks';
import HeroBanner from '../components/HeroBanner';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR_MONTH_JA } from '../lib/seoDate';

export default function PhilippinesWeddingGuideJa() {
  useMeta(
    `フィリピンで結婚する全ガイド【${SEO_YEAR_MONTH_JA}】手続きの流れ・必要書類・注意点`,
    'フィリピンで婚姻を成立させる（フィリピン先行婚）の手続きを公式案内に沿って解説。在フィリピン日本大使館・総領事館でのLCCM取得、Marriage License、挙式、日本への報告的届出までをまとめました。',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: '国際結婚ガイド', href: '/ja/kokusai-kekkon-guide/' }, { label: 'フィリピンで結婚する全ガイド' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'フィリピンで結婚する全ガイド【2026年版】手続きの流れ・必要書類・注意点',
          description: 'フィリピンで婚姻を成立させる（フィリピン先行婚）の手続きを公式案内に沿って解説。在フィリピン日本大使館・総領事館でのLCCM取得からMarriage License・挙式・日本への報告的届出までをまとめました。',
          url: 'https://ph-document.com/ja/philippines-de-kekkon/',
          publisher: { '@type': 'Organization', name: 'IGRS Inc.', url: 'https://ph-document.com/ja/' },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'フィリピンで結婚するのに渡航は必ず必要ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'フィリピン先行婚（フィリピンで先に婚姻を成立させる方式）では、挙式に両者の出席が必要なため、日本人側のフィリピン渡航が必要です。一方、日本先行婚（日本で先に婚姻届を出す方式）であれば渡航不要で手続きを進められます。',
              },
            },
            {
              '@type': 'Question',
              name: 'PSA婚姻証明書が取得できるまで、どのくらいかかりますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'PSAへの記録反映時期は地域や登録状況により異なります。ただし、在フィリピン日本大使館・総領事館への婚姻届では、市区町村役場発行の原本照合済み婚姻証明書またはPSA婚姻証明書のいずれかを使用できます。PSA反映を待つ必要があるかは提出先と後続手続きに確認してください。',
              },
            },
            {
              '@type': 'Question',
              name: 'Marriage Licenseの公示期間（10日間）は省略できますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '原則として省略はできません。Marriage Licenseは申請後10日間の公示期間を経なければ発行されません。この期間は「この婚姻に異議がないか」を確認するためのものです。スケジュールに必ず組み込んでください。',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="フィリピンで結婚する全ガイド【2026年版】"
        badges={['手続きの流れをステップ解説', '必要書類を整理', 'つまずきポイントも解説']}
        ctaText="書類の相談はこちら"
        ctaHref="#contact"
        lastUpdated="2026年8月30日"
      />

      <article className="space-y-10">

        {/* 導入 */}
        <section className="rounded-2xl bg-white border border-gray-200 p-6">
          <h2 className="text-base font-bold text-gray-900 mb-3">フィリピンで婚姻を成立させるとはどういうことか</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            フィリピン人と国際結婚をする場合、婚姻を「先にどちらの国で成立させるか」によって手続きが大きく異なります。このページでは<strong>フィリピンで先に婚姻を成立させる方式（フィリピン先行婚）</strong>の手続きを解説します。
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            フィリピン先行婚では、フィリピンの法律に基づいてMarriage Licenseを取得し、挙式権限を持つ者の前で婚姻の宣誓を行います。その後、フィリピンの民事登録機関（PSA）に婚姻が記録され、日本側でも「報告的届出」を行うことで、両国で婚姻が認められます。
          </p>
          <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200">
            <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800">
              <strong>注意</strong>: フィリピン先行婚はフィリピンへの渡航が必要です。渡航なしで手続きを進めたい方は<Link to="/ja/nihon-senko-ph-senko/" className="underline">日本先行婚との比較ページ</Link>もご参照ください。
            </p>
          </div>
        </section>

        {/* 全体の流れ */}
        <StepList
          heading="フィリピン先行婚の全体の流れ（4ステップ）"
          steps={[
            {
              title: '日本人側が「婚姻要件具備証明書（LCCM）」を取得する',
              description: 'LCCMは、在フィリピン日本国大使館、在セブ日本国総領事館または在ダバオ日本国総領事館で、日本人本人が申請・受領します。戸籍謄（抄）本または電子戸籍パス、有効な日本旅券、フィリピン人婚約者の出生証明書などが必要です。日本の法務局での発行、外務省のアポスティーユ、在日フィリピン大使館の認証は不要です。',
            },
            {
              title: 'フィリピンでMarriage Licenseを申請する',
              description: 'フィリピン現地の市役所（Local Civil Registrar）にMarriage Licenseを申請します。申請後、10日間の公示期間が設けられており、この期間中は婚姻ができません。申請時には両者のパスポート・出生証明書等が必要です。',
            },
            {
              title: '挙式（婚姻の宣誓）を行う',
              description: 'Marriage License発行後、挙式権限を持つ者と成人2名以上の証人の前で婚姻を宣誓し、婚姻証明書に署名します。婚姻挙行担当官が認証することで婚姻が成立し、婚姻証明書は原則15日以内に挙行地の市区町村役場へ送付・登録されます。登録後、市区町村役場で原本照合済みの婚姻証明書謄本を取得できます。',
            },
            {
              title: '3か月以内に日本側へ婚姻届を提出する',
              description: '婚姻成立後3か月以内に、日本の市区町村役場または在フィリピン日本大使館・総領事館へ報告的届出を行います。在外公館への届出では、市区町村役場発行の原本照合済み婚姻証明書またはPSA婚姻証明書を使用でき、DFAアポスティーユは公式の必要書類に含まれていません。日本で届け出る場合は、提出先の市区町村役場へ必要書類を事前確認してください。',
            },
          ]}
        />
        <p className="text-xs text-gray-500 -mt-7">
          出典：<a href="https://www.ph.emb-japan.go.jp/files/100672027.pdf" target="_blank" rel="noreferrer" className="underline">在フィリピン日本国大使館「フィリピンにおいて日本人とフィリピン人が結婚するための手続き」</a>、<a href="https://www.ph.emb-japan.go.jp/itpr_ja/00_000281.html" target="_blank" rel="noreferrer" className="underline">外国方式で婚姻した場合の報告的届出</a>
        </p>

        {/* 必要書類 */}
        <section className="rounded-2xl bg-white border border-gray-200 p-6">
          <h2 className="text-base font-bold text-gray-900 mb-4">必要書類まとめ</h2>

          <h3 className="text-sm font-bold text-gray-800 mb-3">【日本人側】LCCMの取得に必要な書類</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-2 border border-gray-200 font-bold text-gray-700">書類</th>
                  <th className="text-left p-2 border border-gray-200 font-bold text-gray-700">取得先</th>
                  <th className="text-left p-2 border border-gray-200 font-bold text-gray-700">備考</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { doc: '婚姻要件具備証明書（LCCM）', from: '在フィリピン日本大使館・総領事館', note: '日本人本人が申請・受領' },
                  { doc: 'パスポート（有効期限内）', from: '本人保有', note: '' },
                  { doc: '戸籍謄（抄）本または電子戸籍パス', from: '本籍地の市区町村／マイナポータル', note: '戸籍は原則3か月以内' },
                  { doc: 'フィリピン人婚約者の出生証明書', from: 'PSAまたは市区町村役場', note: 'Certified True Copy' },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-2 border border-gray-200 text-gray-700 font-medium">{row.doc}</td>
                    <td className="p-2 border border-gray-200 text-gray-600">{row.from}</td>
                    <td className="p-2 border border-gray-200 text-gray-500">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-sm font-bold text-gray-800 mb-3">【フィリピン人側】Marriage License申請に必要な書類</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-2 border border-gray-200 font-bold text-gray-700">書類</th>
                  <th className="text-left p-2 border border-gray-200 font-bold text-gray-700">取得先</th>
                  <th className="text-left p-2 border border-gray-200 font-bold text-gray-700">備考</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { doc: 'PSA出生証明書', from: 'PSA（フィリピン統計局）', note: 'Birthday Certificate' },
                  { doc: 'CENOMAR（独身証明書）', from: 'PSA', note: '婚姻歴がないことの証明' },
                  { doc: 'パスポート', from: '本人保有', note: '' },
                  { doc: '婚前ガイダンス修了証', from: '地方政府機関', note: '市役所によって要求される場合あり' },
                  { doc: '親の同意・助言に関する書類', from: '親・保護者', note: '18〜20歳は同意、21〜25歳は助言が必要' },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-2 border border-gray-200 text-gray-700 font-medium">{row.doc}</td>
                    <td className="p-2 border border-gray-200 text-gray-600">{row.from}</td>
                    <td className="p-2 border border-gray-200 text-gray-500">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-sm font-bold text-gray-800 mb-3">【日本への報告的届出】に必要な書類</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-2 border border-gray-200 font-bold text-gray-700">書類</th>
                  <th className="text-left p-2 border border-gray-200 font-bold text-gray-700">備考</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { doc: '婚姻証明書（Certificate of Marriage）', note: '在外公館への届出は市区町村役場発行の原本照合済み謄本またはPSA発行のもの' },
                  { doc: '婚姻届（日本のもの）', note: '市区町村役場で入手' },
                  { doc: '婚姻証明書の日本語訳', note: '翻訳者の署名が必要（本人でも可）' },
                  { doc: '婚姻許可証・申請書・LCCMの写し', note: '在フィリピン日本大使館・総領事館へ届け出る場合' },
                  { doc: '届出人の写真付き身分証明書', note: '旅券・運転免許証など' },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-2 border border-gray-200 text-gray-700 font-medium">{row.doc}</td>
                    <td className="p-2 border border-gray-200 text-gray-500">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* つまずきポイント */}
        <section className="rounded-2xl bg-amber-50 border border-amber-200 p-6">
          <div className="flex items-start gap-3 mb-4">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <h2 className="text-base font-bold text-amber-900">よくあるつまずきポイント</h2>
          </div>
          <div className="space-y-4">
            {[
              {
                title: 'LCCMを日本で取得するものと誤解する',
                detail: 'フィリピン婚用のLCCMは、フィリピン所在の日本大使館・総領事館で本人が申請・受領します。マニラ・セブ・ダバオの公式案内では、通常は申請の翌開館日に交付されます。',
              },
              {
                title: 'Marriage Licenseの公示期間（10日間）を忘れていた',
                detail: 'Marriage License申請後、10日間の公示期間を経ないと発行されません。渡航日程に必ず組み込んでください。',
              },
              {
                title: 'PSA婚姻証明書の反映が遅い',
                detail: 'PSAへの反映時期は地域や登録状況により異なります。ただし、日本大使館・総領事館への婚姻届は、市区町村役場発行の原本照合済み婚姻証明書でも提出できます。PSA反映を待つ前に、届出先と後続手続きの必要書類を確認してください。',
              },
              {
                title: '書類の名前が日本のパスポートと一致しない',
                detail: 'PSA書類に記載された名前のスペルが、日本のパスポートや婚姻届の記載と異なる場合があります。事前に確認し、不一致が発覚した場合は早めに対処が必要です。',
              },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-sm font-bold text-amber-800 mb-1">⚠ {item.title}</p>
                <p className="text-sm text-amber-700 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* タイムライン */}
        <section className="rounded-2xl bg-white border border-gray-200 p-6">
          <h2 className="text-base font-bold text-gray-900 mb-4">全体のタイムライン目安</h2>
          <div className="space-y-2">
            {[
              { phase: 'LCCM取得', duration: '通常2開館日', note: 'フィリピン所在の日本大使館・総領事館で本人申請・受領' },
              { phase: 'フィリピン渡航・Marriage License申請', duration: '申請後10日間の公示期間', note: '' },
              { phase: '挙式・市区町村役場への登録', duration: '挙式後15日以内に送付', note: '登録後、原本照合済み婚姻証明書謄本を取得可能' },
              { phase: '日本への報告的届出', duration: '婚姻成立後3か月以内', note: '日本の市区町村役場または在フィリピン日本大使館・総領事館へ提出' },
              { phase: 'PSA婚姻証明書の取得', duration: '反映後', note: '後続手続きで必要な場合に取得' },
              { phase: '配偶者ビザ申請', duration: '必要書類確認後', note: '申請先の最新要件を確認' },
            ].map((row, i) => (
              <div key={i} className="flex gap-3 items-start text-sm">
                <Clock className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <span className="font-bold text-gray-800">{row.phase}</span>
                  <span className="text-gray-500 ml-2">— {row.duration}</span>
                  {row.note && <p className="text-xs text-gray-500 mt-0.5">{row.note}</p>}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 p-4 rounded-xl bg-primary/5 border border-primary/15">
            <p className="text-sm text-gray-700">
              <strong>婚姻許可証の10日間の公示期間は必ず日程に入れてください。</strong>日本への婚姻届はPSA反映を待たずに進められる場合があるため、挙行地の市区町村役場と日本側の届出先へ必要書類を確認するのが確実です。
            </p>
          </div>
        </section>

        <CtaBox
          title="フィリピン書類（PSA・CENOMAR・アポスティーユ）の取得はIGRSへ"
          description="フィリピン先行婚・日本先行婚どちらでも必要なPSA書類・DFAアポスティーユを、渡航不要・日本語だけで取り寄せできます。"
          buttonText="無料で相談する"
          href="#contact"
          variant="primary"
          trustNote="24時間以内に返信・匿名相談OK・着手前キャンセル無料"
        />

        <FaqSection
          items={[
            { q: 'フィリピンで結婚するのに渡航は必ず必要ですか？', a: 'フィリピン先行婚（フィリピンで先に婚姻を成立させる方式）では、挙式に両者の出席が必要なため、日本人側のフィリピン渡航が必要です。渡航不要で手続きを進めたい場合は日本先行婚を検討してください。' },
            { q: 'PSA婚姻証明書が取得できるまで、どのくらいかかりますか？', a: 'PSAへの記録反映時期は地域や登録状況によって異なります。ただし、在フィリピン日本大使館・総領事館への婚姻届では、市区町村役場発行の原本照合済み婚姻証明書またはPSA婚姻証明書を使用できます。PSA反映を待つ必要があるかは、届出先と後続手続きに確認してください。' },
            { q: 'Marriage Licenseの公示期間（10日間）は省略できますか？', a: '原則として省略はできません。Marriage Licenseは申請後10日間の公示期間を経なければ発行されません。スケジュールに必ず組み込んでください。' },
          ]}
          ctaTitle="手続きの進め方について相談できます"
          ctaButton="無料相談フォームへ"
        />

        <RelatedLinks links={[
          { path: '/ja/nihon-senko-ph-senko/', label: '日本先行婚 vs フィリピン先行婚：どちらを選ぶべきか比較' },
          { path: '/ja/kokusai-kekkon-guide/', label: '国際結婚の書類一括代行（CENOMAR・PSA・NBI）' },
          { path: '/ja/psa-kekkon-shomeisho/', label: 'PSA婚姻証明書の取得代行' },
          { path: '/ja/cenomar/', label: 'CENOMAR（独身証明書）取得代行' },
          { path: '/ja/haigusha-visa/', label: '配偶者ビザの書類代行' },
        ]} />
      </article>
    </PageLayout>
  );
}
