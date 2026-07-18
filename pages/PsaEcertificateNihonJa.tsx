import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import SummaryBlock from '../components/SummaryBlock';
import CtaBox from '../components/CtaBox';
import RelatedLinks from '../components/RelatedLinks';
import { useMeta } from '../lib/useMeta';
import { AlertTriangle, Copy, Check } from 'lucide-react';

const TEMPLATE = `件名：フィリピン PSA 電子証明書・DFA eApostille の受理可否確認

お世話になっております。
フィリピン発行の民事登録書類を御庁へ提出予定です。以下の点をご確認いただけますでしょうか。

１．フィリピン PSA 発行の電子証明書（電子署名付き PDF）を受理されますか。
２．フィリピン DFA 発行の e-Apostille（PDF 形式、メール送付）を受理されますか。
３．受理不可の場合、PSA 紙原本・アポスティーユ原本・領事認証のいずれが必要ですか。
４．必要な書式・提出方法があれば具体的にご教示ください。

何卒よろしくお願いいたします。`;

export default function PsaEcertificateNihonJa() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(TEMPLATE).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

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
      <header className="mb-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary leading-snug mb-3">
          PSA電子文書・e-Apostilleは日本で使える？
        </h1>
        <p className="text-sm md:text-base text-gray-500 leading-relaxed">
          入管・市区町村・総領事館の受領状況と、紙原本（PSA SECPA）が安全な理由を整理します。
        </p>
      </header>

      <SummaryBlock
        conclusion="PSA電子文書（eCertificate）とDFA eApostilleは法的に有効です。しかし2026年4月時点では、日本の入管・市区町村・総領事館の多くが引き続き紙原本を前提とした運用をしており、電子文書で提出して再提出を求められるケースが当社に実際に寄せられています。"
        points={[
          '2026年3月16日以降、PSA e-CertificateへのPaper Apostille（紙アポスティーユ）は原則発行されなくなりました。e-Certificateには電子のeApostilleのみが付与されます。',
          '紙のPSA証明書（SECPA）自体の発行・取得は引き続き可能です。日本向け提出には紙原本ルートが安全策です。',
          '当社には複数の再提出事例が実際に届いています。提出先への事前確認が必須です。',
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
            ：PSAが発行する出生証明書・婚姻証明書・CENOMARのPDF電子版。デジタル署名付きで、QRコードとポータルサイトによる真正性検証が可能です。法的効力は紙のPSA発行文書と同等とされていますが、PSA自身も「提出先が受け入れるか事前確認を推奨」としています。
          </p>
          <p>
            <strong className="text-gray-900">DFA eApostille（2026年3月16日開始）</strong>
            ：PSA eCertificateに付与される完全デジタルのアポスティーユ。ハーグ条約（アポスティーユ条約）の枠組みに基づいて発行され、完成後はメールで送付されます。HCCH基準での法的効力は紙アポスティーユと同等です。
            <strong>印刷した場合は公式な印刷版として認められない</strong>
            ため、デジタル送信での提出が前提です。
          </p>
          <p>
            <strong className="text-gray-900">重要：PSA e-CertificateへのPaper Apostille（紙アポスティーユ）は原則不可</strong>
            ：3月16日の運用変更以降、PSA e-CertificateをベースにしたPaper Apostilleは基本的に発行されなくなりました。一方、<strong>紙のPSA証明書（SECPA）自体の発行・取得は引き続き可能</strong>です。Door-to-door・CRS窓口受取・国際配送などの取得ルートが現在も利用できます。
          </p>
        </div>
      </section>

      {/* 実費と納品パターン */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary">PSA e-Certificate・e-Apostilleの実費と納品パターン</h2>
        </div>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            現在、PSA e-Certificateとe-Apostilleは<strong className="text-gray-900">1つのオンライン申請でまとめて発行</strong>されます。移行期間の終了により、PSA書類向けの<strong className="text-gray-900">物理アポスティーユ（紙のアポスティーユ）は新規発行が停止</strong>され、認証は電子のe-Apostilleに一本化されました。フィリピン政府（PSA・DFA）に支払う実費の目安は次のとおりです。
          </p>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full min-w-[420px] text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">内訳（政府実費）</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-700 whitespace-nowrap">手数料の目安</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                <tr>
                  <td className="px-4 py-3 text-gray-800">PSA e-Certificate（電子証明書）</td>
                  <td className="px-4 py-3 text-right text-gray-600 whitespace-nowrap">約300ペソ／通</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-800">DFA e-Apostille（電子アポスティーユ）</td>
                  <td className="px-4 py-3 text-right text-gray-600 whitespace-nowrap">約200ペソ／通</td>
                </tr>
                <tr className="bg-primary/5">
                  <td className="px-4 py-3 font-bold text-gray-900">電子のみ 小計</td>
                  <td className="px-4 py-3 text-right font-bold text-primary whitespace-nowrap">約500ペソ／通</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-800">＋ 物理PSA証明書（SECPA・紙原本）</td>
                  <td className="px-4 py-3 text-right text-gray-600 whitespace-nowrap">＋約350ペソ／通</td>
                </tr>
                <tr className="bg-primary/5">
                  <td className="px-4 py-3 font-bold text-gray-900">電子＋紙原本 小計</td>
                  <td className="px-4 py-3 text-right font-bold text-primary whitespace-nowrap">約850ペソ／通</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">
            ※ いずれも政府実費の目安で、現地の料金改定・決済チャネル手数料（数十ペソ）により変動します。紙原本を海外へ発送する場合は別途、国際配送費（DHL・PHLPost EMS等）が加わります。当社の代行手数料は上記に含まれません。
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 mt-6">
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="font-bold text-secondary mb-1">デジタル納品（電子のみ）</p>
            <p className="text-sm text-primary font-semibold mb-2">実費 約500ペソ／通・配送不要</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              PSA e-Certificate＋e-Apostilleをメールで納品。国際配送が不要なため納期が短く、提出先が電子文書を受理する場合はこれで完結します。
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="font-bold text-secondary mb-1">ハイブリッド納品（電子＋紙原本）</p>
            <p className="text-sm text-primary font-semibold mb-2">実費 約850ペソ／通＋国際配送費</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              上記の電子2点に、物理PSA証明書（紙原本）を追加。電子と紙原本が<strong>同一の申請・同一の登録記録</strong>から発行されるため、紙原本のために別申請をする必要がありません。
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-start gap-3 p-4 rounded-xl border border-blue-100 bg-blue-50">
          <AlertTriangle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong className="text-gray-900">重要：</strong>紙原本も同じオンライン申請の「物理PSA証明書が必要ですか？」を選ぶことで取得できます。ただし
            <strong>物理PSA証明書に紙のアポスティーユは貼付されません</strong>（PSA向け物理アポスティーユは停止済み）。認証はあくまで電子のe-Apostilleで行われるため、紙原本＝紙アポスティーユではない点にご注意ください。
          </p>
        </div>
      </section>

      {/* オンライン申請の本人確認・決済 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary">オンライン申請の本人確認・支払いの注意点</h2>
        </div>
        <div className="space-y-4">
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="font-bold text-gray-900 mb-1">本人確認（liveness check）が必要</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              e-Certificateの発行には、有効な身分証のアップロードとカメラによるリアルタイム本人確認（liveness check）が求められます。これは<strong>申請者本人が行う必要があり、第三者が代理で顔認証を行うことはできません</strong>。一方で、海外在住でも手続きはメールで完結でき、フィリピンのSIM・携帯番号は原則不要です（本人確認・書類受領はメールで行えます）。
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="font-bold text-gray-900 mb-1">支払いはフィリピン現地の決済手段が中心</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              政府への支払いは GCash・Maya・ShopeePay・GrabPay・現金など<strong>フィリピン国内向けの決済手段</strong>が中心で、海外クレジットカードは前面に出ていません。海外在住の方は、決済手段の用意や「申請番号と入金の正しい紐付け」でつまずきやすい部分です。当社は<strong>日本円でのお支払い</strong>で、フィリピン政府機関への決済までまとめて代行します。
            </p>
          </div>
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
              body: '在留資格申請では従来、PSA Security Paper＋紙アポスティーユが標準として運用されています。電子版に関する明示的な受領基準は未公表で、窓口ごとの判断に委ねられています。重要な申請では紙原本での提出を推奨します。',
            },
            {
              title: '市区町村（婚姻届・戸籍関連）',
              body: '一部の自治体では電子版（PDF＋eApostille）での受領実績があります。ただし自治体ごとに判断が異なり、紙原本を求められるケースも存在します。事前問い合わせが必須です。',
            },
            {
              title: '在フィリピン日本国大使館・総領事館',
              body: '在フィリピン日本国大使館は「フィリピンで発行・作成された文書は原本提出」を明記しており、婚姻関係手続ではPSA/LCR発行の出生証明書の原本を要求しています。電子版での受付は確認できていません。',
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
                <th className="text-center px-4 py-3 font-semibold text-primary">紙原本（SECPA）＋e-Apostille</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['法的有効性', '有効（HCCH基準）', '有効'],
                ['アポスティーユの形式', 'eApostille（電子）', 'eApostille（電子）。PSA向け物理アポスティーユは新規発行停止'],
                ['日本での受領確実性', '窓口次第（要事前確認）', '高い（従来の標準）'],
                ['日本在住での取得', 'オンラインで自力取得が可能', '代行業者が必要なケースが多い'],
                ['印刷して提出', '原則不可（公式な印刷版なし）', '可'],
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
              body: '入管・市区町村・総領事館など具体的な窓口に、電子文書の受領可否を電話またはメールで確認してください。在フィリピン日本国大使館は原本提出を明記しており、電子版では対応できない手続きが存在します。',
            },
            {
              title: '重要手続きは紙原本を選択（安全策）',
              body: '在留資格申請・婚姻届など重要な手続きでは、紙原本（SECPA）での取得を推奨します。PSA e-CertificateにはeApostilleしか付与されないため、紙アポスティーユが必要な場合は紙のPSA証明書を別途取得する必要があります。',
            },
            {
              title: '電子版を使う場合はデジタル送信を徹底',
              body: '電子版での提出が認められた場合は、DFA公式より取得したPDFを印刷せずデジタル送信で提出してください。QRコードによる検証情報を必ず添付してください。',
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

      {/* 照会テンプレ */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary">提出先への照会テンプレ</h2>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          入管・市区町村・総領事館への問い合わせにそのままお使いいただけます。
        </p>
        <div className="relative rounded-xl border border-gray-200 bg-gray-50">
          <button
            onClick={handleCopy}
            className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white border border-gray-200 text-gray-600 hover:bg-gray-100 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-green-600" />
                <span className="text-green-600">コピー完了</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                コピー
              </>
            )}
          </button>
          <pre className="p-5 pr-24 text-sm text-gray-700 leading-relaxed whitespace-pre-wrap font-sans">{TEMPLATE}</pre>
        </div>
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
