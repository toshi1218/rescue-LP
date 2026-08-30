import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import RelatedLinks from '../components/RelatedLinks';
import HeroBanner from '../components/HeroBanner';
import CtaBox from '../components/CtaBox';
import FaqSection from '../components/FaqSection';
import { AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR_MONTH_JA } from '../lib/seoDate';

export default function MarriageOrderJa() {
  useMeta(
    `日本先行婚とフィリピン先行婚【${SEO_YEAR_MONTH_JA}】どちらを選ぶべき？手続きと必要書類を比較`,
    'フィリピン人との国際結婚で「日本とフィリピン、どちらで先に結婚するか」を比較。手続きの流れ・必要書類・メリット・デメリットをステップ別に整理。渡航不要で進めたい方は日本先行婚が有利です。',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: '国際結婚ガイド', href: '/ja/kokusai-kekkon-guide/' }, { label: '日本先行婚 vs フィリピン先行婚' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: '日本先行婚とフィリピン先行婚、どちらを選ぶべき？それぞれの手続きと必要書類を比較',
          description: 'フィリピン人との国際結婚で「日本とフィリピン、どちらで先に結婚するか」を比較解説。手続きの流れ・必要書類・メリット・デメリットを整理します。',
          url: 'https://ph-document.com/ja/nihon-senko-ph-senko/',
          publisher: { '@type': 'Organization', name: 'IGRS Inc.', url: 'https://ph-document.com/ja/' },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'フィリピン人パートナーが日本在住の場合、どちらの方式が多いですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '日本在住の場合は、渡航が不要な日本先行婚を選ぶ方が多い傾向があります。ただし、婚姻届の受理後に配偶者ビザ（在留資格変更）の手続きが必要になるため、全体のスケジュールを踏まえて判断することをおすすめします。',
              },
            },
            {
              '@type': 'Question',
              name: 'フィリピン先行婚を選ぶと、PSA婚姻証明書はすぐに取れますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'PSAへの記録反映時期は地域や登録状況により異なります。ただし、在フィリピン日本大使館・総領事館への婚姻届では、市区町村役場発行の原本照合済み婚姻証明書またはPSA婚姻証明書を使用できます。PSA反映を待つ必要があるかは、届出先と後続手続きに確認してください。',
              },
            },
            {
              '@type': 'Question',
              name: '日本先行婚では、どのフィリピン書類が必要ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '一般的にPSA発行のCENOMAR（独身証明書）とPSA出生証明書が用いられますが、必要書類やアポスティーユの要否は提出先の市区町村役場によって異なります。提出前に確認してください。',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="日本先行婚とフィリピン先行婚、どちらを選ぶべき？"
        badges={['手続きの流れを比較', '必要書類を整理', '状況に合わせて判断']}
        ctaText="無料相談はこちら"
        ctaHref="#contact"
        lastUpdated="2026年8月30日"
      />

      <article className="space-y-10">

        {/* 導入 */}
        <section className="rounded-2xl bg-white border border-gray-200 p-6">
          <h2 className="text-base font-bold text-gray-900 mb-3">「どちらの国で先に結婚するか」で、手続きの流れが大きく変わる</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            フィリピン人との国際結婚を進めるとき、最初に直面する判断が「日本で先に婚姻届を出すか（日本先行婚）、フィリピンで先に結婚するか（フィリピン先行婚）」です。
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            どちらを選んでも法的に有効な結婚になりますが、必要な書類・手続きの順番・かかる時間が異なります。また、パートナーがすでに日本在住か、フィリピン在住かによっても現実的な選択肢が変わります。
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            このページでは、両方式の流れ・必要書類・メリット・デメリットを整理します。
          </p>
        </section>

        {/* 日本先行婚 */}
        <section className="rounded-2xl bg-white border border-gray-200 p-6">
          <h2 className="text-base font-bold text-gray-900 mb-4">日本先行婚：日本の市区町村役場に先に婚姻届を出す方式</h2>

          <h3 className="text-sm font-bold text-gray-800 mb-3">手続きの流れ</h3>
          <ol className="space-y-3 mb-6">
            {[
              { step: '1', title: 'フィリピン側の書類を取り寄せる', detail: '一般的にPSA発行のCENOMAR（独身証明書）とPSA出生証明書を用意します。アポスティーユの要否や必要な形式は提出先の市区町村役場へ確認します。' },
              { step: '2', title: '日本の市区町村役場に婚姻届を提出', detail: '婚姻届と、提出先が指定するフィリピン側書類・日本語訳を提出します。必要書類や翻訳文の書式は市区町村役場によって異なります。' },
              { step: '3', title: '婚姻届が受理されたら、フィリピン大使館（または総領事館）へ報告', detail: '日本で婚姻が成立した後、在日フィリピン大使館または総領事館に「Report of Marriage（婚姻の報告）」を提出します。これでフィリピン側にも婚姻が記録されます。' },
              { step: '4', title: '配偶者ビザ（在留資格）の手続きへ', detail: 'パートナーが短期滞在または観光ビザで来日中の場合は、「在留資格変更許可申請」が必要です。' },
            ].map(({ step, title, detail }) => (
              <li key={step} className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/15 text-primary font-bold text-xs flex items-center justify-center mt-0.5">{step}</span>
                <div>
                  <p className="text-sm font-bold text-gray-800 mb-1">{title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{detail}</p>
                </div>
              </li>
            ))}
          </ol>

          <h3 className="text-sm font-bold text-gray-800 mb-3">必要なフィリピン書類</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-2 border border-gray-200 font-bold text-gray-700">書類</th>
                  <th className="text-left p-2 border border-gray-200 font-bold text-gray-700">発行機関</th>
                  <th className="text-left p-2 border border-gray-200 font-bold text-gray-700">アポスティーユ</th>
                  <th className="text-left p-2 border border-gray-200 font-bold text-gray-700">備考</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { doc: 'CENOMAR（独身証明書）', issuer: 'PSA（フィリピン統計局）', apo: '提出先に確認', note: '提出先によっては発行から6ヶ月以内のものを求められる場合あり' },
                  { doc: 'PSA出生証明書', issuer: 'PSA', apo: '提出先に確認', note: 'Certificate of Live Birth' },
                  { doc: 'パスポートのコピー', issuer: 'フィリピン人本人', apo: '不要', note: '有効期限内のもの' },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-2 border border-gray-200 text-gray-700 font-medium">{row.doc}</td>
                    <td className="p-2 border border-gray-200 text-gray-600">{row.issuer}</td>
                    <td className="p-2 border border-gray-200 text-gray-600">{row.apo}</td>
                    <td className="p-2 border border-gray-200 text-gray-500">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl bg-green-50 border border-green-200">
            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-green-800 mb-1">日本先行婚のメリット</p>
              <ul className="text-sm text-green-700 space-y-1">
                <li>・フィリピンへの渡航が不要（書類代行を使えば日本にいながら完結）</li>
                <li>・フィリピン先行婚よりも、PSA婚姻証明書の反映待ちがない</li>
                <li>・日本の戸籍に婚姻が記録される</li>
              </ul>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200 mt-3">
            <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-amber-800 mb-1">注意点</p>
              <ul className="text-sm text-amber-700 space-y-1">
                <li>・婚姻届受理後に、在日フィリピン大使館への報告が別途必要</li>
                <li>・市区町村役場によって、翻訳文の様式や要求書類が異なる場合がある</li>
              </ul>
            </div>
          </div>
        </section>

        {/* フィリピン先行婚 */}
        <section className="rounded-2xl bg-white border border-gray-200 p-6">
          <h2 className="text-base font-bold text-gray-900 mb-4">フィリピン先行婚：フィリピンで先に婚姻を成立させる方式</h2>

          <h3 className="text-sm font-bold text-gray-800 mb-3">手続きの流れ</h3>
          <ol className="space-y-3 mb-6">
            {[
              { step: '1', title: '日本人側が「婚姻要件具備証明書（LCCM）」を取得', detail: '在フィリピン日本国大使館、在セブ日本国総領事館または在ダバオ日本国総領事館で、日本人本人が申請・受領します。日本の法務局、外務省のアポスティーユ、在日フィリピン大使館の認証は不要です。' },
              { step: '2', title: 'フィリピンでMarriage Licenseを申請', detail: 'フィリピン現地の市役所（Local Civil Registrar）に申請。申請後10日間の公示期間があり、この間は婚姻できません。' },
              { step: '3', title: '挙式（婚姻の宣誓）', detail: '牧師・裁判官・市長など挙式権限を持つ者の前で婚姻の宣誓を行います。' },
              { step: '4', title: '日本側へ「報告的届出」', detail: '婚姻成立後3か月以内に、日本の市区町村役場または在フィリピン日本大使館・総領事館へ届け出ます。在外公館への届出は、市区町村役場発行の原本照合済み婚姻証明書またはPSA婚姻証明書を使用できます。' },
            ].map(({ step, title, detail }) => (
              <li key={step} className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/15 text-secondary font-bold text-xs flex items-center justify-center mt-0.5">{step}</span>
                <div>
                  <p className="text-sm font-bold text-gray-800 mb-1">{title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{detail}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="flex items-start gap-3 p-4 rounded-xl bg-green-50 border border-green-200">
            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-green-800 mb-1">フィリピン先行婚のメリット</p>
              <ul className="text-sm text-green-700 space-y-1">
                <li>・フィリピン側の家族・親族を招いて挙式できる</li>
                <li>・フィリピンで婚姻を先に成立させた後、日本の届出は報告的届出のみ</li>
              </ul>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200 mt-3">
            <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-amber-800 mb-1">注意点</p>
              <ul className="text-sm text-amber-700 space-y-1">
                <li>・LCCMはフィリピン所在の日本大使館・総領事館で本人申請・受領が必要</li>
                <li>・Marriage Licenseに10日間の公示期間が必要</li>
                <li>・PSAへの反映時期は地域や登録状況により異なるため、後続手続きの必要書類を確認する</li>
                <li>・フィリピンへの渡航が必要</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 比較表 */}
        <section className="rounded-2xl bg-gray-50 border border-gray-200 p-6">
          <h2 className="text-base font-bold text-gray-900 mb-4">どちらを選ぶべきか：状況別の判断目安</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-white">
                  <th className="text-left p-3 border border-gray-200 font-bold text-gray-700">状況</th>
                  <th className="text-center p-3 border border-gray-200 font-bold text-primary">日本先行婚</th>
                  <th className="text-center p-3 border border-gray-200 font-bold text-secondary">フィリピン先行婚</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { situation: 'パートナーが日本在住', japan: '◎ 渡航不要で進められる', ph: '△ フィリピン渡航が必要' },
                  { situation: 'パートナーがフィリピン在住', japan: '○ 書類取り寄せが必要', ph: '○ 現地で一緒に手続きできる' },
                  { situation: '配偶者ビザを早く取りたい', japan: '◎ PSA反映待ちがない分、早く進めやすい', ph: '△ 後続手続きでPSA書類待ちとなる場合あり' },
                  { situation: '親族への挨拶・挙式を重視', japan: '△ 日本での届出のみ', ph: '◎ フィリピンで家族を呼んで挙式できる' },
                  { situation: 'スケジュールに余裕がない', japan: '◎ 渡航・公示期間が不要', ph: '✕ Marriage License公示10日＋渡航日程が必要' },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-3 border border-gray-200 text-gray-700 font-medium">{row.situation}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-center">{row.japan}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-center">{row.ph}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 上記は一般的な目安です。再婚・離婚歴がある場合などは追加書類が必要になることがあります。</p>
        </section>

        {/* どちらでも共通 */}
        <section className="rounded-2xl bg-white border border-gray-200 p-6">
          <h2 className="text-base font-bold text-gray-900 mb-3">どちらの方式でも共通して必要なこと</h2>
          <ul className="space-y-2">
            {[
              'フィリピン側のPSA書類（CENOMAR・PSA出生証明書）の取得と確認',
              '書類に記載された名前・生年月日が日本側のパスポート等と一致しているか確認',
              '書類の形式・アポスティーユの要否を実際の提出先に確認',
              '配偶者ビザ（在留資格）への手続きを婚姻成立後に進めること',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 p-4 rounded-xl bg-amber-50 border border-amber-200">
            <div className="flex items-start gap-2">
              <Clock className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800">
                <strong>書類取得には1〜2か月かかることが多い</strong>ため、婚姻届を出したい時期から逆算して、早めに動き始めることをおすすめします。
              </p>
            </div>
          </div>
        </section>

        <CtaBox
          title="どちらが合うか分からない方は、まず相談ください"
          description="状況（パートナーの在留状況・スケジュール・再婚歴など）をお知らせいただければ、必要な流れを整理してご案内します。"
          buttonText="無料で相談する"
          href="#contact"
          variant="primary"
          trustNote="24時間以内に返信・匿名相談OK・着手前キャンセル無料"
        />

        <FaqSection
          items={[
            { q: 'フィリピン人パートナーが日本在住の場合、どちらの方式が多いですか？', a: '日本在住の場合は、渡航が不要な日本先行婚を選ぶ方が多い傾向があります。ただし、婚姻届の受理後に配偶者ビザ（在留資格変更）の手続きが必要になるため、全体のスケジュールを踏まえて判断することをおすすめします。' },
            { q: 'フィリピン先行婚を選ぶと、PSA婚姻証明書はすぐに取れますか？', a: 'PSAへの記録反映時期は地域や登録状況により異なります。ただし、在フィリピン日本大使館・総領事館への婚姻届では、市区町村役場発行の原本照合済み婚姻証明書またはPSA婚姻証明書を使用できます。PSA反映を待つ必要があるかは、届出先と後続手続きに確認してください。' },
            { q: '日本先行婚では、どのフィリピン書類が必要ですか？', a: '一般的にPSA発行のCENOMAR（独身証明書）とPSA出生証明書が用いられますが、必要書類やアポスティーユの要否は提出先の市区町村役場によって異なります。提出前に確認してください。' },
          ]}
          ctaTitle="状況に合わせて整理します。まずはご相談ください"
          ctaButton="無料相談フォームへ"
        />

        <RelatedLinks links={[
          { path: '/ja/kokusai-kekkon-guide/', label: '国際結婚の書類一括代行（CENOMAR・PSA・NBI）' },
          { path: '/ja/philippines-de-kekkon/', label: 'フィリピンで結婚する全ガイド（手続きと必要書類）' },
          { path: '/ja/cenomar/', label: 'CENOMAR（独身証明書）取得代行' },
          { path: '/ja/haigusha-visa/', label: '配偶者ビザの書類代行' },
        ]} />
      </article>
    </PageLayout>
  );
}
