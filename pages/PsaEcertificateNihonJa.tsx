import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import SummaryBlock from '../components/SummaryBlock';
import CtaBox from '../components/CtaBox';
import RelatedLinks from '../components/RelatedLinks';
import { useMeta } from '../lib/useMeta';
import { AlertTriangle, Copy, Check, CheckCircle } from 'lucide-react';

const TEMPLATE = `件名：フィリピン PSA 電子証明書・DFA e-Apostille の受理可否確認

お世話になっております。
フィリピン発行の民事登録書類を提出予定です。以下の点をご確認いただけますでしょうか。

１．PSA発行のe-Certificate（電子署名付きPDF）を受理されますか。
２．DFA発行のe-Apostille（PDF）を受理されますか。
３．PSAのSECPA紙原本も別途必要でしょうか。
４．その他、必要な書式・日本語訳・提出方法があればご教示ください。

何卒よろしくお願いいたします。`;

export default function PsaEcertificateNihonJa() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(TEMPLATE).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // 静的title/descriptionはprerender.tsと同期管理しているため、構造変更とは分離して更新する。
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
          headline: 'PSA電子文書・eApostilleは日本で使える？入管・市区町村の受領状況',
          description: 'PSA電子文書（eCertificate）とDFA eApostilleの日本国内での受領状況を解説。入管・市区町村・在東京フィリピン大使館など提出先ごとの違いと確認手順を整理。',
          datePublished: '2026-04-24',
          dateModified: '2026-08-14',
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
          提出先によって電子版で完結する場合と、SECPA紙原本を求められる場合があります。2026年8月14日時点の確認情報を整理します。
        </p>
      </header>

      <SummaryBlock
        conclusion="PSA e-Certificate＋DFA e-Apostilleが使えるかは、書類そのものの有効性ではなく、提出先がその形式を受け付けるかで決まります。アポスティーユ自体が不要な手続きもあるため、最初から一律に認証や紙原本を付けず、用途と提出先を確認して必要なものだけ取得するのが合理的です。"
        points={[
          'PSA民事書類の認証はe-Apostille（電子）へ移行しています',
          '在東京フィリピン大使館のLCCMでは、当社の2026年8月直接確認で電子版＋e-Apostilleの受付可との案内を確認',
          '日本の市区町村は自治体ごとに必要書類・原本形式が異なります',
          '永住許可申請では、出入国在留管理庁の通常の提出書類にアポスティーユは含まれていません',
        ]}
      />

      {/* 用語解説 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary">電子版と紙原本は別物です</h2>
        </div>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            <strong className="text-gray-900">PSA e-Certificate</strong>
            ：PSAが発行する出生証明書・婚姻証明書・CENOMAR等の電子文書です。PDFとして発行され、電子署名や検証情報を使って真正性を確認します。
          </p>
          <p>
            <strong className="text-gray-900">DFA e-Apostille</strong>
            ：PSA e-Certificateに対して発行される電子アポスティーユです。電子文書として取り扱うため、提出先が電子ファイルを受け付けるかを事前に確認する必要があります。
          </p>
          <p>
            <strong className="text-gray-900">PSA SECPA紙原本</strong>
            ：PSAが紙で発行する証明書です。e-Certificateとは別の形式で、紙原本を要求する市区町村等に提出するため追加取得する場合があります。
          </p>
          <div className="rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm">
            <strong className="text-gray-900">ポイント：</strong>
            「e-Apostilleが電子だから紙原本も必ず必要」「紙原本があるから紙アポスティーユも付く」という意味ではありません。アポスティーユ自体が不要な手続きも含め、必要な組み合わせは提出先ごとに確認します。
          </div>
        </div>
      </section>

      {/* 納品パターン */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary">当社の基本的な手配パターン</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="font-bold text-secondary mb-1">電子版のみ</p>
            <p className="text-sm text-primary font-semibold mb-2">e-Certificate＋必要な場合のみe-Apostille</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              提出先が電子文書を受け付ける場合は、国際配送をせず電子データで納品できます。アポスティーユが不要な手続きには追加しません。
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="font-bold text-secondary mb-1">電子版＋紙原本</p>
            <p className="text-sm text-primary font-semibold mb-2">e-Certificate＋必要な認証＋SECPA</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              市区町村などがPSA紙原本を求める場合にSECPAを追加します。紙原本はフィリピンで受領後、日本へ発送します。
            </p>
          </div>
        </div>
        <p className="mt-3 text-xs text-gray-500">
          ※当社では、用途と提出先を確認し、不要なアポスティーユ・紙原本・追加手続きをできるだけ省く形でご案内します。
        </p>
      </section>

      {/* 日本の受領状況 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary">日本の提出先別の考え方（2026年8月確認）</h2>
        </div>
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-4 rounded-xl border border-green-100 bg-green-50">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-gray-900 mb-1">在東京フィリピン大使館：LCCM</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                大使館公式サイトでは、LCCM申請のPSA出生証明書・CENOMARについてDFAアポスティーユ済みの「原本＋コピー」と記載されています。一方、当社が2026年8月に同大使館へ直接確認した際は、<strong>PSA e-Certificate＋DFA e-Apostilleで受付可能で、別途SECPA紙原本は不要</strong>との案内でした。公式ページの表現と実務案内に差があるため、申請時点で再確認するのが安全です。
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl border border-amber-100 bg-amber-50">
            <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-gray-900 mb-1">市区町村：婚姻届・戸籍関係</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                自治体によって必要書類と受領形式が異なります。出生証明書のSECPA紙原本を求める自治体もあり、CENOMARを別途提出するか、電子版を受け付けるかも一律ではありません。婚姻届を出す市区町村へ事前確認してください。
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl border border-green-100 bg-green-50">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-gray-900 mb-1">地方出入国在留管理局：永住許可申請</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>永住許可申請では、出入国在留管理庁が公開する通常の提出書類にアポスティーユは含まれていません。</strong>日本人の配偶者として申請する場合は、配偶者の戸籍謄本と、申請人の国籍国の機関から発行された婚姻証明書等が求められます。外国語で作成された書類には日本語訳を添付します。審査上必要な場合に追加資料を求められることはありますが、PSA婚姻証明書等へDFAアポスティーユを付けることが通常要件ではありません。
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl border border-gray-200 bg-gray-50">
            <AlertTriangle className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-gray-900 mb-1">在フィリピン日本国大使館・総領事館</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                日本国内の市区町村や在東京フィリピン大使館とは別の提出先です。手続きによって原本提出を求める案内があるため、その手続きの公式必要書類を個別に確認してください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LCCM と婚姻届 */}
      <section className="mb-10 rounded-2xl overflow-hidden border border-primary/20 bg-primary/5">
        <div className="p-6 md:p-8">
          <p className="text-xs font-bold text-primary mb-2">国際結婚で特に間違いやすい点</p>
          <h2 className="text-xl font-bold text-secondary mb-4">LCCM用と、市区町村への婚姻届用を分けて考える</h2>
          <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
            <p>
              在東京フィリピン大使館でLCCMを取得するために必要なPSA書類と、LCCM取得後に日本の市区町村へ婚姻届を出すための書類は、同じセットとは限りません。
            </p>
            <p>
              たとえばLCCM申請が電子版だけで進められても、婚姻届を出す自治体がPSA出生証明書の紙原本を求める場合があります。反対に、CENOMARの紙原本まで一律に追加する必要があるとは限りません。
            </p>
            <p className="font-medium text-gray-900">
              先に「最終提出先」を確認してから取得内容を決めることで、不要な追加取得と国際配送を減らせます。
            </p>
          </div>
        </div>
      </section>

      {/* 比較表 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary">電子版と紙原本の使い分け</h2>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
          <table className="w-full min-w-[480px] text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-4 py-3 font-semibold text-gray-700 w-1/3">比較項目</th>
                <th className="text-center px-4 py-3 font-semibold text-gray-500">電子版</th>
                <th className="text-center px-4 py-3 font-semibold text-primary">SECPA紙原本を追加</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['構成', 'e-Certificate＋必要な場合のみe-Apostille', '電子版＋必要な認証＋PSA紙原本'],
                ['国際配送', '原則不要', '必要'],
                ['向いているケース', '提出先が電子文書を受理', '提出先がPSA紙原本を要求'],
                ['受理可否', '提出先に事前確認', '紙原本でも必要書類自体は提出先に確認'],
                ['当社の方針', '不要な認証は付けない', '必要な場合だけ追加'],
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
          <h2 className="text-xl md:text-2xl font-bold text-secondary">失敗しにくい確認順序</h2>
        </div>
        <ol className="space-y-4">
          {[
            {
              title: '用途と最終提出先を確定する',
              body: 'LCCM、大使館、入管、市区町村など、どの手続きでどこへ出す書類かを先に確認します。',
            },
            {
              title: 'アポスティーユの要否を先に確認する',
              body: '永住許可申請のように通常の提出書類としてアポスティーユが求められていない手続きには付けません。必要な提出先だけ認証を追加します。',
            },
            {
              title: '電子版・紙原本の形式を確認する',
              body: '電子版で足りる場合はデータで納品し、市区町村等から紙原本を求められた書類だけSECPAを追加します。',
            },
            {
              title: '申請直前にも最新運用を確認する',
              body: '電子化移行中は公式サイトの表記と窓口運用が一致しない場合があります。提出直前の確認が最も確実です。',
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
          入管・市区町村・大使館への問い合わせにそのままお使いいただけます。
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
        title="提出先に合わせて、必要な認証・電子版・紙原本だけ手配します"
        description="用途と提出先（大使館・入管・市区町村名）をお知らせください。アポスティーユが必要か、電子版で足りるか、SECPA紙原本まで必要かを整理してご案内します。"
        buttonText="無料相談・お問い合わせ"
        href="/ja/contact/"
        trustNote="着手前キャンセル無料・進捗を随時ご報告"
        service="PSA書類取得代行"
      />

      <RelatedLinks
        links={[
          { label: 'フィリピン人との国際結婚ガイド', path: '/ja/kokusai-kekkon-guide/' },
          { label: 'PSA出生証明書の取得方法', path: '/ja/psa-shussei-shomeisho/' },
          { label: 'DFAアポスティーユガイド', path: '/ja/apostille/' },
          { label: 'CENOMAR（独身証明書）取得代行', path: '/ja/cenomar/' },
        ]}
      />
    </PageLayout>
  );
}
