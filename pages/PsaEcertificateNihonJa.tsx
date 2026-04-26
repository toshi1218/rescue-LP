import React from 'react';
import PageLayout from '../components/PageLayout';
import SummaryBlock from '../components/SummaryBlock';
import CtaBox from '../components/CtaBox';
import RelatedLinks from '../components/RelatedLinks';
import { useMeta } from '../lib/useMeta';
import { AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

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
          dateModified: '2026-04-26',
          author: { '@type': 'Organization', name: 'IGRS Inc.', url: 'https://ph-document.com/ja/' },
          publisher: { '@type': 'Organization', name: 'IGRS Inc.', url: 'https://ph-document.com/ja/' },
        },
      ]}
    >
      <SummaryBlock
        conclusion="2026年3月以降、PSA Helpline経由の申請はeApostille（電子版）のみの発行に移行しました。しかし日本の入管・市区町村・総領事館は依然として紙原本を前提とした運用を続けています。自力では紙原本が取れなくなった今、代行業者への依頼が唯一の選択肢です。"
        points={[
          'PSA Helpline（オンライン申請）はハーグ条約加盟国向けにeApostille（電子版）のみ発行。紙原本＋物理アポスティーユは自力で取得できなくなりました。',
          '日本の入管・市区町村・総領事館の多くは紙原本を前提とした運用を継続。電子文書で提出し再提出を求められた事例が当社に複数報告されています。',
          '紙原本が必要な場合、フィリピン現地での窓口申請が必要です。当社は現地スタッフがPSA・DFA窓口で直接取得します。',
        ]}
      />

      {/* 重大な変更：電子版しか取れなくなった */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary">2026年3月からPSA申請の動線が変わった</h2>
        </div>
        <div className="rounded-2xl border-2 border-red-200 bg-red-50 p-6 mb-6">
          <div className="flex items-start gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="font-bold text-red-800 text-base">
              PSA Helpline・eApostilleルートでは、もう紙原本は取れません
            </p>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            DFA eApostilleが2026年3月16日に全面開始されて以降、PSA Helplineなどオンライン申請ルートは
            <strong>ハーグ条約加盟国（日本含む）向けにeApostille（電子版）のみ</strong>
            を発行する運用に移行しました。
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            つまり、日本にお住まいの方が自分でPSAに申請しても、届くのは
            <strong>PDFの電子文書のみ</strong>
            です。従来の紙原本（Security Paper / SECPA）＋物理アポスティーユを自力で取得する手段がなくなりました。
          </p>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
          <table className="w-full min-w-[480px] text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-4 py-3 font-semibold text-gray-700 w-1/3">申請ルート</th>
                <th className="text-center px-4 py-3 font-semibold text-gray-500">取得できるもの</th>
                <th className="text-center px-4 py-3 font-semibold text-gray-700">日本での受領</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              <tr className="hover:bg-gray-50/50">
                <td className="px-4 py-3 font-medium text-gray-800">PSA Helpline（オンライン）</td>
                <td className="px-4 py-3 text-center text-gray-600">電子文書＋eApostilleのみ</td>
                <td className="px-4 py-3 text-center">
                  <span className="inline-flex items-center gap-1 text-amber-600 font-medium">
                    <AlertTriangle className="w-4 h-4" />窓口次第
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50/50 bg-blue-50/30">
                <td className="px-4 py-3 font-medium text-gray-800">当社代行（現地窓口申請）</td>
                <td className="px-4 py-3 text-center text-gray-800 font-medium">紙原本（SECPA）＋物理アポスティーユ</td>
                <td className="px-4 py-3 text-center">
                  <span className="inline-flex items-center gap-1 text-green-700 font-medium">
                    <CheckCircle className="w-4 h-4" />受領実績あり
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
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
              level: 'danger',
              title: '入国管理局（入管）',
              body: '電子版の受領基準を公式に更新していません。在留資格申請では従来、PSA Security Paper＋紙アポスティーユが標準書類とされており、電子文書を持参して「従来通りの書類を準備してください」と言われた事例が当社に報告されています。',
            },
            {
              level: 'warning',
              title: '市区町村（婚姻届・戸籍関連）',
              body: '一部自治体で電子版の受領実績はありますが、自治体ごとに判断が異なります。「紙の原本を持ってきてください」と窓口で言われた事例も複数あります。事前問い合わせなしの持参は再提出リスクが高いです。',
            },
            {
              level: 'warning',
              title: '在フィリピン日本国大使館・総領事館',
              body: '公式案内はPSA発行証明書を指定していますが、電子版に関する明示的な基準は未更新。紙原本を前提とした記載が主流で、窓口担当者の判断に委ねられています。',
            },
          ].map(({ level, title, body }) => (
            <div
              key={title}
              className={`flex items-start gap-3 p-4 rounded-xl border ${
                level === 'danger'
                  ? 'border-red-200 bg-red-50'
                  : 'border-amber-100 bg-amber-50'
              }`}
            >
              {level === 'danger' ? (
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              ) : (
                <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              )}
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
            実際の相談事例
          </div>
          <p className="text-base font-bold text-secondary mb-4">
            2026年3月以降、当社に寄せられた相談のうち特に多いパターンです。
          </p>
          <ul className="space-y-4">
            {[
              {
                case: 'PSA Helplineで申請→電子文書が届いた→入管に持参→「紙原本を用意してください」と言われた',
                result: '当社に依頼して紙原本を取得・再提出',
              },
              {
                case: '他社に依頼→電子文書（PDF）で納品された→市区町村窓口に行くと紙原本を要求された',
                result: '当社に改めて依頼して紙原本を取得',
              },
              {
                case: '電子文書でも受理されると聞いていたが、配偶者ビザ申請で入管から「従来通りの書類を準備してください」と指示された',
                result: '当社で紙原本＋物理アポスティーユを取得して申請',
              },
            ].map((item, i) => (
              <li key={i} className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                <p className="text-sm text-gray-700 leading-relaxed mb-2">
                  <span className="font-semibold text-gray-900">状況：</span>
                  {item.case}
                </p>
                <p className="text-sm text-green-700 leading-relaxed">
                  <span className="font-semibold">対応：</span>
                  {item.result}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-gray-400">※ 個人を特定できない形に加工した相談内容をもとに作成しています。</p>
        </div>
      </section>

      <CtaBox
        title="紙原本が必要な場合は今すぐご相談ください"
        description="電子文書で受理されなかった方・最初から紙原本を確実に用意したい方へ。当社はフィリピン現地スタッフがPSA・DFA窓口で直接紙原本を取得します。オンラインでは取れない書類も対応可能です。"
        buttonText="無料相談・お問い合わせ"
        href="/ja/contact/"
        trustNote="着手前キャンセル無料・進捗を随時ご報告"
        service="PSA書類取得代行"
      />

      {/* なぜ電子版で問題が起きるのか */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary">なぜ電子版で問題が起きるのか</h2>
        </div>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            DFA eApostilleはHCCH（ハーグ条約）基準で<strong>法的効力は紙アポスティーユと同等</strong>です。
            しかし「法的に有効」と「日本の窓口で実際に受け取ってもらえる」は別の問題です。
          </p>
          <p>
            日本の入管・市区町村は長年、<strong>紙原本を前提とした審査手順・チェックリスト</strong>で運用されています。
            担当者レベルでの電子文書への対応訓練・マニュアル更新が追いついておらず、
            現場では「見慣れない書類＝受理できない」という判断が起きています。
          </p>
          <p>
            さらに<strong>eApostilleを印刷すると無効</strong>になる場合があります。
            電子文書をプリントアウトして持参しても、それは「電子でも紙でもない」不完全な書類になるため、
            どちらの窓口からも受け取ってもらえないリスクがあります。
          </p>
          <div className="rounded-xl border border-amber-100 bg-amber-50 p-4">
            <p className="text-sm font-semibold text-amber-800 mb-1">結論</p>
            <p className="text-sm text-gray-700">
              重要な手続き（配偶者ビザ・婚姻届・在留資格変更等）には、
              <strong>紙原本（SECPA）＋物理アポスティーユ</strong>を用意することを強く推奨します。
              制度移行期の今は、電子版で「受理されるかもしれない」に賭けるのはリスクが高すぎます。
            </p>
          </div>
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
                ['自力取得', '可能（PSA Helplineで申請）', '不可（現地窓口申請が必要）'],
                ['日本入管での受領', '要事前確認・再提出リスクあり', '実績あり（従来の標準）'],
                ['市区町村での受領', '自治体次第', '実績あり'],
                ['印刷して提出', '原則不可（無効になる場合あり）', '可'],
                ['再提出リスク', '高い（移行期につき）', '低い'],
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

      {/* FAQ */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary">よくある質問</h2>
        </div>
        <div className="space-y-4">
          {[
            {
              q: 'PSA Helplineで申請したら電子文書しか届きませんでした。紙原本に変えられますか？',
              a: '電子文書を紙原本に変換することはできません。別途、現地窓口申請が必要です。当社にご依頼いただければ、フィリピン現地のスタッフがPSA窓口で紙原本を取得します。',
            },
            {
              q: '電子文書をプリントアウトして提出してもいいですか？',
              a: 'DFA eApostilleは印刷すると無効になる場合があります。紙にプリントしたものは「電子文書でも紙原本でもない」不完全な書類として、どちらの窓口からも受け取ってもらえないリスクがあります。',
            },
            {
              q: '入管はいつ電子文書に対応しますか？',
              a: '法務省・入管からの公式な対応時期は発表されていません。制度移行期の今は見通しが立ちにくい状況です。重要な申請は紙原本で進めることを推奨します。',
            },
            {
              q: '他社に頼んだら電子文書で納品されました。紙原本を取り直せますか？',
              a: 'はい、対応可能です。当社にご相談ください。すでに電子文書をお持ちの場合でも、改めて紙原本を取得してお届けします。',
            },
          ].map(({ q, a }, i) => (
            <div key={i} className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
              <p className="font-bold text-gray-900 mb-2">Q. {q}</p>
              <p className="text-sm text-gray-700 leading-relaxed">A. {a}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBox
        title="当社が紙原本を代わりに取得します"
        description="配偶者ビザ・婚姻届・在留資格変更など重要な手続きには紙原本が安全です。PSA出生証明書・婚姻証明書・CENOMAR・アポスティーユまで一括で対応します。"
        buttonText="今すぐ無料相談"
        href="/ja/contact/"
        trustNote="着手前キャンセル無料・日本語対応・進捗報告あり"
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
