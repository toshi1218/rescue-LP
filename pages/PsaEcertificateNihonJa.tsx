import React from 'react';
import PageLayout from '../components/PageLayout';
import SummaryBlock from '../components/SummaryBlock';
import CtaBox from '../components/CtaBox';
import RelatedLinks from '../components/RelatedLinks';
import { useMeta } from '../lib/useMeta';
import { AlertTriangle } from 'lucide-react';

export default function PsaEcertificateNihonJa() {
  useMeta(
    'PSA電子文書・eApostilleは日本で使える？入管・市区町村の受領状況【2026年4月版】',
    'PSA電子文書（eCertificate）とDFA eApostilleの日本国内での受領状況を解説。入管・市区町村・総領事館ごとの対応と、再提出を防ぐための確認手順。',
  );

  return (
    <PageLayout
      breadcrumbs={[
        { label: 'ホーム', href: '/ja/' },
        { label: 'お役立ちガイド', href: '/ja/guides/' },
        { label: 'PSA電子文書・eApostilleは日本で使える？' },
      ]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'PSA電子文書・eApostilleは日本で使える？入管・市区町村の受領状況【2026年4月版】',
          description: 'PSA電子文書（eCertificate）とDFA eApostilleの日本国内での受領状況を解説。入管・市区町村・総領事館ごとの対応と、再提出を防ぐための確認手順。',
          datePublished: '2026-04-24',
          author: { '@type': 'Organization', name: 'IGRS Inc.', url: 'https://ph-document.com/ja/' },
          publisher: { '@type': 'Organization', name: 'IGRS Inc.', url: 'https://ph-document.com/ja/' },
        },
      ]}
    >
      <SummaryBlock
        conclusion="PSA電子文書（eCertificate）とeApostilleは法的に有効です。しかし2026年4月時点では、日本の入管・市区町村・総領事館の多くが紙原本を前提とした運用を続けており、電子文書で提出して再提出を求められるケースが当社に実際に報告されています。"
        points={[
          'DFA eApostilleは2026年3月16日に全面開始。HCCH基準での法的効力は紙アポスティーユと同等です。',
          '日本の各提出先（入管・市区町村・総領事館）の受領可否は窓口ごとの判断に委ねられており、一律受理とは言えない状況です。',
          'SNSでの報告は少ないものの、当社には複数の再提出事例が実際に届いています。提出先への事前確認が必須です。',
        ]}
      />

      {/* 用語解説 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary">PSA電子文書・eApostilleとは</h2>
        </div>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            <strong className="text-gray-900">PSA eCertificate</strong>
            ：PSAが発行する出生証明書・婚姻証明書・CENOMARのPDF電子版。PSAHelpline等でオンライン申請して取得でき、QRコードで真正性を検証できます。
          </p>
          <p>
            <strong className="text-gray-900">DFA eApostille（2026年3月16日開始）</strong>
            ：PSA eCertificateに付与される完全デジタルのアポスティーユ。ASEAN初のフルデジタル運用で、法的効力は紙アポスティーユと同等（HCCH eAPP基準）。
            <strong>印刷すると無効</strong>
            になる場合があるため、デジタル送信を原則とします。
          </p>
          <p>
            従来の紙原本（Security Paper / SECPA）＋物理アポスティーユは引き続き発行・利用可能です。eApostilleは利便性向上のための選択肢として追加されました。
          </p>
        </div>
      </section>

      {/* 日本の受領状況 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary">日本の提出先別 受領状況（2026年4月時点）</h2>
        </div>
        <div className="space-y-3">
          {[
            {
              title: '入国管理局（入管）',
              body: '電子版に関する明示的な受領基準は未公表。在留資格申請では従来、PSA Security Paper＋紙アポスティーユが標準。電子版の受領可否は個別窓口への事前確認を強く推奨します。',
            },
            {
              title: '市区町村（婚姻届・戸籍関連）',
              body: '一部の自治体では電子版（PDF＋eApostille）での受領実績があります。ただし自治体ごとに判断が異なり、紙原本を求められるケースも存在します。事前問い合わせが必須です。',
            },
            {
              title: '在フィリピン日本国大使館・総領事館',
              body: '公式案内はPSA発行証明書を指定していますが、電子版に関する明示的な基準は未更新。紙原本を前提とした記載が主流です。',
            },
          ].map(({ title, body }) => (
            <div key={title} className="flex items-start gap-3 p-4 rounded-xl border border-amber-100 bg-amber-50">
              <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-gray-900 mb-1">{title}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 当社に寄せられた事例 */}
      <section className="mb-10 rounded-2xl overflow-hidden border border-gray-200 border-l-4 border-l-red-700 bg-white shadow-sm">
        <div className="p-6 md:p-8">
          <div className="inline-block mb-3 px-3 py-1 bg-red-700 text-white text-xs font-bold rounded tracking-wide">
            当社への相談事例
          </div>
          <p className="text-base font-bold text-secondary mb-4">
            当社には2026年3月以降、以下のようなご相談が実際に寄せられています。
          </p>
          <ul className="space-y-3">
            {[
              'PSAHelplineで電子文書を取得して市区町村の窓口に持参したところ、「紙の原本を持ってきてください」と言われた。',
              '他社に依頼したら電子文書で納品された。提出先に確認すると紙原本が必要と言われ、改めて当社に依頼することになった。',
              '電子文書でも受理されると聞いていたが、入管から「従来通りの書類を準備してください」と言われた。',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-1" />
                <p className="text-sm text-gray-700 leading-relaxed">「{item}」</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-gray-400">※ 個人を特定できない形に加工した相談内容をもとに作成しています。</p>
        </div>
      </section>

      {/* 比較表 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary">電子文書 vs 紙原本 比較</h2>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
          <table className="w-full min-w-[480px] text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-4 py-3 font-semibold text-gray-700 w-1/3">比較項目</th>
                <th className="text-center px-4 py-3 font-semibold text-gray-500">電子文書（eCertificate＋eApostille）</th>
                <th className="text-center px-4 py-3 font-semibold text-primary">紙原本（SECPA＋物理アポスティーユ）</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['法的有効性', '有効（HCCH基準）', '有効'],
                ['日本での受領確実性', '窓口次第（要事前確認）', '高い（従来の標準）'],
                ['日本在住での取得', 'オンラインで自力取得が可能', '代行業者が必要なケースが多い'],
                ['印刷して提出', '原則不可（無効になる場合あり）', '可'],
                ['再提出リスク', 'あり（移行期につき）', '低い'],
              ].map(([item, electronic, paper]) => (
                <tr key={item} className="hover:bg-gray-50/50">
                  <td className="px-4 py-3 font-medium text-gray-800">{item}</td>
                  <td className="px-4 py-3 text-center text-gray-600">{electronic}</td>
                  <td className="px-4 py-3 text-center text-gray-800 font-medium">{paper}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 推奨対応 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary">推奨対応（優先順位順）</h2>
        </div>
        <ol className="space-y-4">
          {[
            {
              title: '提出先に事前確認（必須）',
              body: '入管・市区町村・総領事館など具体的な窓口に、電子文書の受領可否を電話またはメールで確認してください。可能であればPDFサンプルを添付して問い合わせると確実です。',
            },
            {
              title: '重要手続きは紙原本を選択（安全策）',
              body: '在留資格申請・婚姻届など重要な手続きでは、紙原本（SECPA＋物理アポスティーユ）を選択することを推奨します。電子版は補助的な位置づけにとどめてください。',
            },
            {
              title: '電子版を使う場合はデジタル送信を徹底',
              body: 'DFA公式サイト（apostille.gov.ph）経由で取得したPDFを、印刷せずデジタル送信で提出してください。QRコードによる検証情報を必ず添付してください。',
            },
            {
              title: '今後の運用変更を定期確認',
              body: '制度開始から日が浅く、各機関の運用が変わる可能性があります。DFA・PSA公式サイトおよび法務省入国管理局サイトを定期的にご確認ください。',
            },
          ].map(({ title, body }, i) => (
            <li key={title} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                {i + 1}
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">{title}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <CtaBox
        title="紙原本が必要な場合は当社へ"
        description="当社はフィリピンの現地スタッフがPSA・DFA窓口で直接紙原本を取得しています。電子文書で受理されなかった方・紙原本が必要な方はご相談ください。"
        buttonText="無料相談・お問い合わせ"
        href="/ja/contact/"
        trustNote="着手前キャンセル無料・進捗を随時ご報告"
        service="PSA書類取得代行"
      />

      <RelatedLinks
        links={[
          { label: 'PSA出生証明書の取得方法', path: '/ja/psa-shussei-shomeisho/' },
          { label: 'DFAアポスティーユガイド', path: '/ja/apostille/' },
          { label: 'PSA婚姻証明書の取得方法', path: '/ja/psa-kekkon-shomeisho/' },
          { label: 'CENOMAR（独身証明書）取得代行', path: '/ja/cenomar/' },
        ]}
      />
    </PageLayout>
  );
}
