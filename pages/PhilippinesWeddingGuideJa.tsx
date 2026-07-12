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
    'フィリピンで婚姻を成立させる（フィリピン先行婚）の全手続きを解説。LCCMの取得・Marriage License・挙式・PSA婚姻証明書の反映待ち・日本への報告的届出まで、ステップ別にまとめました。',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: '国際結婚ガイド', href: '/ja/kokusai-kekkon-guide/' }, { label: 'フィリピンで結婚する全ガイド' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'フィリピンで結婚する全ガイド【2026年版】手続きの流れ・必要書類・注意点',
          description: 'フィリピンで婚姻を成立させる（フィリピン先行婚）の全手続きを解説。LCCMの取得からMarriage License・挙式・PSA婚姻証明書・日本への報告的届出まで、ステップ別にまとめました。',
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
                text: 'フィリピンで婚姻が成立した後、PSAへの記録反映には時間がかかります。Metro Manilaで2〜4か月、地方では6か月以上かかることもあります。PSA婚姻証明書は日本への報告的届出や配偶者ビザ申請に必要なため、このタイムラインを事前に把握しておくことが重要です。',
              },
            },
            {
              '@type': 'Question',
              name: 'Marriage Licenseの公示期間（10日間）は省略できますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '原則として省略はできません。Market Licenseは申請後10日間の公示期間を経なければ発行されません。この期間は「この婚姻に異議がないか」を確認するためのものです。スケジュールに必ず組み込んでください。',
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
        lastUpdated="2026年3月1日"
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
          heading="フィリピン先行婚の全体の流れ（6ステップ）"
          steps={[
            {
              title: '日本人側が「婚姻要件具備証明書（LCCM）」を取得する',
              description: 'LCCMは「この日本人は婚姻できる状態にある」ことを証明する書類です。①日本の法務局で発行 → ②外務省でアポスティーユ → ③在日フィリピン大使館（または総領事館）で認証、という流れが必要です。トータルで1〜2か月かかることがあるため、早めに動き始めることが重要です。',
            },
            {
              title: 'フィリピンでMarriage Licenseを申請する',
              description: 'フィリピン現地の市役所（Local Civil Registrar）にMarriage Licenseを申請します。申請後、10日間の公示期間が設けられており、この期間中は婚姻ができません。申請時には両者のパスポート・出生証明書等が必要です。',
            },
            {
              title: '挙式（婚姻の宣誓）を行う',
              description: 'Marriage License発行後、挙式権限を持つ者（牧師・裁判官・市長・ムスリムの場合はイマームなど）の立会いのもと、婚姻の宣誓を行います。証人2名も必要です。挙式後、婚姻証明書（Certificate of Marriage）に署名します。',
            },
            {
              title: '婚姻証明書をLocal Civil Registrarに登録する',
              description: '挙式後、挙式権限者がCertificate of MarriageをLocal Civil Registrar（地方民事登録局）に提出します。この登録をもって、フィリピンでの婚姻が法的に成立します。',
            },
            {
              title: 'PSA婚姻証明書が発行されるのを待つ',
              description: 'Local Civil RegistrarからPSAへの記録反映には時間がかかります。Metro Manilaで2〜4か月、地方では6か月以上になる場合もあります。PSA婚姻証明書は日本への届出・配偶者ビザ申請に必要なため、このタイムラインをスケジュールに組み込んでください。',
            },
            {
              title: '日本の市区町村役場に「報告的届出」を行う',
              description: '帰国後3か月以内に、PSA婚姻証明書（DFAアポスティーユ付き）を添付して日本側でも婚姻の届出を行います。これで日本の戸籍にも婚姻が記録されます。届出後は配偶者ビザ（在留資格）の手続きへ進めます。',
            },
          ]}
        />

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
                  { doc: '婚姻要件具備証明書（LCCM）', from: '法務局', note: '戸籍謄本を持参して申請' },
                  { doc: '外務省アポスティーユ', from: '外務省', note: 'LCCMに付与' },
                  { doc: 'フィリピン大使館による認証', from: '在日フィリピン大使館/総領事館', note: 'アポスティーユ後に申請' },
                  { doc: 'パスポート（有効期限内）', from: '本人保有', note: '' },
                  { doc: '戸籍謄本（全部事項証明）', from: '本籍地の市区町村', note: '原本' },
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
                  { doc: '親の同意書', from: '親', note: '18〜21歳の場合は親の同意書、22〜25歳は親の通知書が必要' },
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
                  { doc: 'PSA婚姻証明書（Certificate of Marriage）', note: 'DFAアポスティーユ付きが原則必要' },
                  { doc: '婚姻届（日本のもの）', note: '市区町村役場で入手' },
                  { doc: '日本人側の戸籍謄本', note: '' },
                  { doc: '婚姻証明書の日本語訳', note: '翻訳者の署名が必要（本人でも可）' },
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
                title: 'LCCMの取得に予想以上に時間がかかる',
                detail: '法務局 → 外務省 → フィリピン大使館の3段階が必要で、トータル1〜2か月かかることがあります。スケジュール逆算で早めに着手してください。',
              },
              {
                title: 'Marriage Licenseの公示期間（10日間）を忘れていた',
                detail: 'Marriage License申請後、10日間の公示期間を経ないと発行されません。渡航日程に必ず組み込んでください。',
              },
              {
                title: 'PSA婚姻証明書の反映が遅い',
                detail: '婚姻成立後、PSAへの記録反映にMetro Manilaで2〜4か月、地方では6か月以上かかることがあります。この間はPSA婚姻証明書が取得できないため、配偶者ビザ申請も待つ必要があります。',
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
              { phase: 'LCCM取得', duration: '1〜2か月', note: '法務局 → 外務省 → 大使館認証' },
              { phase: 'フィリピン渡航・Marriage License申請', duration: '申請後10日間の公示期間', note: '' },
              { phase: '挙式・婚姻登録', duration: '渡航中', note: '' },
              { phase: 'PSA婚姻証明書の取得', duration: '2〜6か月以上', note: 'Metro Manila 2〜4か月、地方6か月以上の場合あり' },
              { phase: '日本への報告的届出', duration: '帰国後3か月以内', note: 'PSA婚姻証明書が必要' },
              { phase: '配偶者ビザ申請', duration: '届出後に着手', note: 'PSA婚姻証明書が揃ってから' },
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
              <strong>全体で最低でも4〜8か月は見込んでください。</strong>PSA婚姻証明書の反映が遅い場合は、配偶者ビザ申請まで1年近くかかるケースもあります。
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
            { q: 'PSA婚姻証明書が取得できるまで、どのくらいかかりますか？', a: 'フィリピンで婚姻が成立した後、PSAへの記録反映にはMetro Manilaで2〜4か月、地方では6か月以上かかることもあります。この期間はPSA婚姻証明書が発行されないため、配偶者ビザ申請も待つ必要があります。' },
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
