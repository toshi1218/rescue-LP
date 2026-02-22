import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Send, Mail, CheckCircle, AlertTriangle, FileText, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mojqlqnd';

const faqs = [
  {
    q: 'PSA出生証明書とNSO出生証明書は違いますか？',
    a: '同じ書類です。NSO（国家統計局）は2014年にPSA（フィリピン統計局）に統合されました。古いNSOの書類でも有効な場合がありますが、最新のPSAが発行したものを用意するのが確実です。',
  },
  {
    q: 'PSA出生証明書に有効期限はありますか？',
    a: '法的な有効期限はありませんが、多くの機関（日本の役所・大使館・入管）は「発行から6ヶ月以内」の書類を求めます。使用予定日の2〜3ヶ月前に取得することをおすすめします。',
  },
  {
    q: '海外生まれのフィリピン人でも取得できますか？',
    a: 'はい。フィリピン国籍を持つ方であれば、海外で生まれた場合でもPSAに出生登録がされていれば取得できます。ただし、海外生まれの場合は手続きが複雑になる場合があります。まずはご相談ください。',
  },
  {
    q: '「NO RECORD FOUND」と返ってきた場合はどうすればよいですか？',
    a: 'PSAのデータベースに記録がない状態です。出生登録が市役所レベルでのみ行われ、PSAへの提出が遅れているケースや、登録自体がされていないケースがあります。この場合は地方市役所（Local Civil Registry）への照会が必要です。',
  },
  {
    q: '日本語翻訳は必要ですか？',
    a: '日本の市区町村役場に提出する場合、英語のPSA書類には日本語訳の添付が求められます（翻訳者の署名が必要）。大使館提出の場合は不要なことが多いです。提出先に事前確認されることをおすすめします。',
  },
  {
    q: 'PSA出生証明書の取得代行にかかる費用はどのくらいですか？',
    a: '代行費用はPSA手数料・国際郵便代込みで約4万円〜が目安です。DFAアポスティーユ認証もセットで依頼できます。詳細はお問い合わせください。',
  },
  {
    q: '複数部数まとめて取得できますか？',
    a: 'はい、PSA出生証明書は複数部の同時申請が可能です。婚姻届提出用・入管提出用など複数枚が必要な場合はご相談ください。まとめて代行することでスムーズに取得できます。',
  },
  {
    q: '親の情報が誤っている場合、訂正はできますか？',
    a: '出生証明書に記載された親の氏名・生年月日等の誤りを訂正するには、フィリピンの地方市役所（LCR）への申請が必要です。場合によっては裁判所の命令が必要になることもあります。複雑なケースは早めにご相談ください。',
  },
  {
    q: 'PSA出生証明書の内容はどのような情報が記載されていますか？',
    a: 'PSA出生証明書（Birth Certificate）には、①氏名（フルネーム）②生年月日・出生時刻 ③出生地（市・州・病院名）④性別 ⑤父の氏名・国籍 ⑥母の旧姓・国籍 ⑦登録番号・登録日・登録機関が記載されています。書類はすべて英語で記載されており、日本の機関に提出する際は日本語翻訳が必要なことがあります。',
  },
  {
    q: '「SECPA（Security Paper）」とはPSAのどの書類ですか？',
    a: 'PSAが発行する出生証明書・婚姻証明書・死亡証明書は、セキュリティペーパー（SECPA）と呼ばれる専用の用紙に印刷されて発行されます。このSECPAが付いたものがPSA発行の公式書類であり、コピーや白紙への再印刷は公式書類として認められません。代行取得の場合は必ずSECPA付きの書類をお届けします。',
  },
];

export default function PsaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://ph-document.com/' },
          { '@type': 'ListItem', position: 2, name: 'PSA出生証明書ガイド', item: 'https://ph-document.com/psa-shussei-shomeisho/' },
        ],
      },
      {
        '@type': 'Article',
        headline: 'フィリピンPSA出生証明書の取得方法｜国際結婚・ビザ申請で必要な理由【2026年】',
        description: 'PSA出生証明書（旧NSO）の取得方法を自分で・大使館・代行の3パターンで解説。費用・期間・NO RECORD FOUNDのトラブル対処まで徹底ガイド。',
        url: 'https://ph-document.com/psa-shussei-shomeisho/',
        inLanguage: 'ja',
        dateModified: '2026-02-22',
        author: { '@type': 'Organization', name: '株式会社IGRS' },
        publisher: { '@type': 'Organization', name: 'フィリピン書類取得代行センター' },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background-light text-gray-800 font-body">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="max-w-2xl lg:max-w-3xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="text-xs text-gray-400 mb-6" aria-label="パンくずリスト">
          <Link to="/" className="hover:text-secondary">ホーム</Link>
          <span className="mx-1">/</span>
          <span className="text-gray-600">PSA出生証明書ガイド</span>
        </nav>

        <h1 className="text-2xl md:text-3xl font-bold text-secondary leading-tight mb-4">
          フィリピンPSA出生証明書の取得方法｜<br className="hidden md:block" />
          国際結婚・ビザ申請で必要な理由【2026年最新】
        </h1>
        <p className="text-sm text-gray-500 mb-8">最終更新：2026年2月22日 ｜ 株式会社IGRS</p>

        {/* 目次 */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-10 shadow-card">
          <p className="text-xs font-bold text-gray-400 mb-3">目次</p>
          <ol className="space-y-1 text-sm text-secondary">
            {['PSA出生証明書とは', '必要になる場面', '基本情報', '取得方法3パターン', 'よくあるトラブル', 'よくある質問（FAQ）', 'お問い合わせ'].map((item, i) => (
              <li key={i}><a href={`#ps-${i + 1}`} className="hover:underline">{i + 1}. {item}</a></li>
            ))}
          </ol>
        </div>

        {/* Section 1 */}
        <section id="ps-1" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">1. PSA出生証明書とは</h2>
          <p className="text-sm leading-relaxed text-gray-700 mb-4">
            <strong>PSA出生証明書（PSA Birth Certificate）</strong>は、フィリピン統計局（PSA）が発行する出生の公式記録です。氏名・生年月日・出生地・両親の情報が記載されており、フィリピン人の身分を証明する最も基本的な公文書です。
          </p>
          <p className="text-sm leading-relaxed text-gray-700">
            日本でいう「戸籍謄本」に相当するもので、国際結婚・ビザ申請・海外移住など、あらゆる手続きで提出を求められます。
          </p>
        </section>

        {/* Section 2 */}
        <section id="ps-2" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">2. 必要になる場面</h2>
          <div className="grid gap-3">
            {[
              { title: '日本での国際結婚手続き', desc: '市区町村役場への婚姻届提出時に、フィリピン人配偶者の出生証明書が必要です。' },
              { title: '配偶者ビザの申請', desc: '日本の入管局（出入国在留管理庁）への配偶者ビザ申請書類として求められます。' },
              { title: 'フィリピン大使館でのRPU（Report of Birth）', desc: '海外生まれのフィリピン人の子どもをPSAに登録する手続きに必要です。' },
              { title: 'パスポート申請・更新', desc: 'フィリピンのパスポート申請・更新時に本人確認書類として使用します。' },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 bg-white border border-gray-100 rounded-lg p-4 shadow-card">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-secondary">{item.title}</p>
                  <p className="text-xs text-gray-600 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 */}
        <section id="ps-3" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">3. 基本情報</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">項目</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">内容</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['発行機関', 'フィリピン統計局（PSA）'],
                  ['旧称', 'NSO出生証明書（同じ書類）'],
                  ['有効期限', '法的な期限なし（ただし6ヶ月以内のものを求められることが多い）'],
                  ['申請費用', '約365ペソ（約900円）＋配送料'],
                  ['取得期間（代行）', '約3〜6週間'],
                  ['言語', '英語'],
                ].map(([k, v], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-secondary border-b border-gray-100">{k}</td>
                    <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4 */}
        <section id="ps-4" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">4. 取得方法3パターン</h2>
          <div className="grid gap-4">
            {[
              {
                label: '方法①', title: 'PSAオンライン申請（自分で）',
                items: ['PSAHelpline.comで申請', 'クレジットカード/PayPal決済', '国際郵便で日本に届く'],
                pros: 'コストが安い', cons: '英語対応が必要。配送トラブルのリスクあり', color: 'border-gray-200',
              },
              {
                label: '方法②', title: '在日フィリピン大使館で申請',
                items: ['東京・大阪・名古屋の領事館で受付', '予約が必要', '現地に出向く必要あり'],
                pros: '比較的安価', cons: '平日のみ。予約が取りにくい場合あり', color: 'border-gray-200',
              },
              {
                label: '方法③ おすすめ', title: '代行サービスに依頼',
                items: ['日本語のみでやり取り完結', '書類確認から郵送まで一括サポート', '不備によるトラブルリスクを最小化'],
                pros: '手間ゼロ。日本語サポートあり', cons: '代行手数料がかかる', color: 'border-primary',
              },
            ].map((m, i) => (
              <div key={i} className={`bg-white border-2 ${m.color} rounded-xl p-5 shadow-card`}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{m.label}</span>
                  <h3 className="font-bold text-secondary">{m.title}</h3>
                </div>
                <ul className="space-y-1 mb-3">
                  {m.items.map((item, j) => (
                    <li key={j} className="text-sm text-gray-700 flex gap-2"><span className="text-primary flex-shrink-0">▸</span>{item}</li>
                  ))}
                </ul>
                <div className="text-xs space-y-1">
                  <p><span className="text-green-600 font-bold">メリット：</span>{m.pros}</p>
                  <p><span className="text-red-500 font-bold">デメリット：</span>{m.cons}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: 申請成功のポイント */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">PSA出生証明書の申請を成功させるポイント</h2>
          <div className="space-y-4">
            {[
              {
                num: '01',
                title: '取得前に名前のスペル・生年月日を確認する',
                body: 'PSA出生証明書に記載される氏名（英語表記）・生年月日が、パスポートや他の書類と一致しているか事前確認が重要です。不一致があると婚姻届・ビザ申請で問題になります。特にミドルネームの記載有無、ハイフン・スペースの違いに注意してください。',
              },
              {
                num: '02',
                title: '使用目的・提出先の「有効期限」要件を確認する',
                body: 'PSA出生証明書自体に法的な有効期限はありませんが、提出先（日本の市区町村・入管・大使館）が「発行から6ヶ月以内」を求めることがあります。使用時期が決まったら逆算して取得してください。早めに取得しすぎると期限切れになる場合があります。',
              },
              {
                num: '03',
                title: '「NO RECORD FOUND」への対処を知っておく',
                body: 'PSAに出生記録がない場合（NO RECORD FOUND）、地方市役所（LCR）に出生登録がされていない可能性があります。この場合、遅延登録（Late Registration）の手続きが必要です。手続きには出生を証明できる書類（病院の記録、学校の書類など）が必要になります。複雑な場合は早めにご相談ください。',
              },
              {
                num: '04',
                title: 'DFAアポスティーユの必要性を確認する',
                body: '日本の市区町村への婚姻届ではアポスティーユは不要なことが多いですが、配偶者ビザ申請や特定の大使館手続きで必要になる場合があります。提出先に事前確認し、必要な場合はPSA取得と同時にDFAアポスティーユもセットで依頼することをおすすめします。',
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-5 shadow-card">
                <span className="text-2xl font-bold text-primary/20 flex-shrink-0 w-8">{item.num}</span>
                <div>
                  <p className="text-sm font-bold text-secondary mb-2">{item.title}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: PSA書類到着後のチェックリスト */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">PSA書類が届いたら確認すること</h2>
          <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-card">
            <p className="text-sm text-gray-700 mb-4">PSA出生証明書を受け取ったら、提出前に以下を必ず確認してください。</p>
            <div className="space-y-3">
              {[
                { check: '氏名（スペル）がパスポートと一致しているか', note: '大文字小文字・ミドルネームを含め確認' },
                { check: '生年月日が正しいか', note: '日・月・年の順番に注意' },
                { check: '書類がSECPA（セキュリティペーパー）で発行されているか', note: 'PSAの公印・透かしが入っているか確認' },
                { check: '発行日付が新しいか（6ヶ月以内か）', note: '提出先の要件を確認' },
                { check: '親の氏名・国籍情報が正確か', note: '日本の婚姻届・ビザ申請で確認されることがある' },
                { check: '日本語翻訳が必要な場合は翻訳を用意する', note: '翻訳者の氏名・署名・翻訳日が必要' },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-secondary font-medium">{item.check}</p>
                    <p className="text-xs text-gray-500">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: 代行費用目安 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">代行費用の目安</h2>
          <div className="grid gap-3">
            {[
              { item: 'PSA出生証明書 取得代行', cost: '約40,000円〜', note: 'PSA手数料・国際郵便込み' },
              { item: 'PSA出生証明書 + DFAアポスティーユ セット', cost: '約60,000円〜', note: 'DFA手数料・認証費用込み' },
              { item: '複数部数（2枚目以降）', cost: '1枚あたり+5,000円〜', note: '同時申請でまとめて対応可能' },
            ].map((row, i) => (
              <div key={i} className="flex justify-between items-center bg-white border border-gray-100 rounded-lg px-4 py-3 shadow-card">
                <div>
                  <p className="text-sm font-medium text-secondary">{row.item}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{row.note}</p>
                </div>
                <span className="text-sm font-bold text-primary ml-4 flex-shrink-0">{row.cost}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3">※ NO RECORD FOUNDや訂正が必要な場合は別途費用・期間がかかります。</p>
        </section>

        {/* Section 5 */}
        <section id="ps-5" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">5. よくあるトラブル</h2>
          <div className="space-y-4">
            {[
              { title: '「NO RECORD FOUND」と返ってきた', body: 'PSAのデータに出生記録がない状態。地方市役所（Local Civil Registry）に記録がある場合は、PSAへの遅延登録（Late Registration）が必要です。' },
              { title: '名前のスペルが異なる', body: 'パスポート・PSA書類・CENOMARで名前のスペルが一致しないと、各機関で問題になります。書類間の整合性を事前に確認してください。' },
              { title: '親の情報が間違って記録されている', body: '出生登録時のミスで親の氏名・生年月日が誤って記録されているケースがあります。訂正には裁判所命令が必要になる場合も。' },
              { title: '届くまでに時間がかかる', body: '国際郵便の遅延で数ヶ月かかるケースがあります。急ぎの場合は代行サービスへの相談をおすすめします。' },
            ].map((t, i) => (
              <div key={i} className="flex gap-3 bg-amber-50 border border-amber-200 rounded-lg p-4">
                <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-amber-800 mb-1">{t.title}</p>
                  <p className="text-xs text-amber-700">{t.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-secondary text-white rounded-2xl p-6 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">PSA書類取得、まるごとお任せ</h2>
          <p className="text-sm text-gray-300 mb-5">面倒な手続きはプロにお任せください。日本語でサポートします。</p>
          <a href="#contact" className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-hover transition-colors">
            無料相談する
          </a>
        </div>

        {/* FAQ */}
        <section id="ps-6" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">6. よくある質問（FAQ）</h2>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg shadow-card overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span className="text-sm font-bold text-secondary pr-4">Q. {faq.q}</span>
                  {openFaq === i ? <ChevronUp className="w-4 h-4 text-primary flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-sm text-gray-700 leading-relaxed border-t border-gray-100">
                    <p className="pt-3">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 関連ページ */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-secondary mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { to: '/cenomar-guide', title: 'CENOMARガイド', desc: '独身証明書の取得方法・費用・期間' },
              { to: '/nbi-clearance-guide', title: 'NBI無犯罪証明書ガイド', desc: 'NBI HIT問題の解説と取得手順' },
              { to: '/kokusai-kekkon-guide', title: 'フィリピン国際結婚ガイド', desc: '手続き全体の流れ・必要書類' },
            ].map((link) => (
              <Link key={link.to} to={link.to} className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-4 shadow-card hover:border-primary transition-colors group">
                <FileText className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm font-bold text-secondary group-hover:text-primary transition-colors">{link.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{link.desc}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-300 ml-auto flex-shrink-0 group-hover:text-primary transition-colors" />
              </Link>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-10">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-soft">
            <h2 className="text-xl font-bold text-secondary mb-2">お問い合わせ</h2>
            <p className="text-sm text-gray-500 mb-6">どの書類が必要かわからない方も、お気軽にご相談ください。</p>
            <form action={FORMSPREE_ENDPOINT} method="POST" className="space-y-3">
              <input type="hidden" name="_subject" value="【PSAガイドからのお問い合わせ】" />
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
              <input type="hidden" name="landing_page" value="https://ph-document.com/psa-shussei-shomeisho/" />
              <div>
                <label htmlFor="psa-name" className="block text-xs text-gray-600 mb-1">お名前</label>
                <input id="psa-name" name="name" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder="山田 太郎" />
              </div>
              <div>
                <label htmlFor="psa-email" className="block text-xs text-gray-600 mb-1">メールアドレス</label>
                <input id="psa-email" type="email" name="email" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder="example@email.com" />
              </div>
              <div>
                <label htmlFor="psa-message" className="block text-xs text-gray-600 mb-1">ご相談内容</label>
                <textarea id="psa-message" name="message" required rows={4} className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder="PSA出生証明書の取得について、お気軽にご相談ください。" />
              </div>
              <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg hover:bg-primary-hover transition-all flex items-center justify-center gap-3">
                <Send className="w-5 h-5" />送信する
              </button>
            </form>
            <a href="mailto:igrs20200601@gmail.com" className="mt-3 inline-flex items-center gap-2 text-xs text-gray-500 hover:text-secondary transition-colors">
              <Mail className="w-4 h-4" />メールで直接送る: igrs20200601@gmail.com
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
