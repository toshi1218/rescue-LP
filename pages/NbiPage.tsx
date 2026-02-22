import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Send, Mail, CheckCircle, AlertTriangle, FileText, ArrowRight, ShieldCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mojqlqnd';

const cases = [
  {
    title: '配偶者ビザ申請のためにNBIが必要な方',
    detail: '日本の入管（出入国在留管理庁）が配偶者ビザ（日本人の配偶者等）の申請書類としてNBI Clearanceを求める場合があります。DFAアポスティーユ認証付きのものが推奨されます。NBI Clearanceの有効期限（1年間）を考慮して、ビザ申請の2〜3ヶ月前に取得を開始しましょう。HIT案件の場合は追加で2〜4週間かかることがあるため、余裕をもったスケジュールが重要です。',
  },
  {
    title: '日本・海外就職のためにNBIが必要な方',
    detail: 'フィリピン人の方が日本や海外で就職する際、雇用主からNBI Clearanceを求められることがあります。企業によっては「3ヶ月以内」の書類を指定するケースもあります。就職確定後すぐに申請を開始し、入社日に間に合うようにスケジュールを組むことをおすすめします。',
  },
  {
    title: '海外移住・永住権申請のためにNBIが必要な方',
    detail: 'カナダ・オーストラリア・ニュージーランドなど多くの国の移民・永住権申請で、フィリピンのNBI Clearanceが必要です。移住先の国の要件によって「発行から6ヶ月以内」などの条件がある場合があります。移住エージェントや弁護士の指示に従い、必要部数・アポスティーユの有無を事前に確認してください。',
  },
  {
    title: 'フィリピンのパスポート申請でNBIが必要な方',
    detail: '成人のパスポート申請時に、NBI Clearanceを求められるケースがあります（特に初回申請や長期間パスポートを更新していない方）。DFA（フィリピン外務省）のパスポート申請要件は定期的に変わるため、最新情報をDFAの公式サイトで確認することをおすすめします。当センターでのNBI取得後、DFAへの申請準備もサポートします。',
  },
];

const faqs = [
  {
    q: 'NBI クリアランスの有効期限はどのくらいですか？',
    a: '発行日から1年間です。ただし使用目的によっては、より新しい書類（6ヶ月以内など）を求められることがあります。',
  },
  {
    q: 'NBI HITとは何ですか？どう対処すればよいですか？',
    a: 'NBI HITとは、申請者の名前がNBIの犯罪記録データベースに登録されている同姓同名の人物と一致した状態です。本人が犯罪を犯したわけではなく、同姓同名が原因であることが多いです。この場合、NBIのQueueing Systemで追加確認（Hit Clearance）を行い、本人と記録の人物が別人であることを証明する必要があります。代行サービスでサポート可能です。',
  },
  {
    q: '日本から自分でNBI クリアランスを申請できますか？',
    a: 'はい、可能です。NBI公式サイト（clearance.nbi.gov.ph）でオンライン申請し、代理人を立てて受け取る方法があります。ただし代理人の設定、支払い方法（フィリピン国内決済手段が必要なことが多い）など、海外からは手続きが複雑です。代行サービスの利用が最もスムーズです。',
  },
  {
    q: 'DFAアポスティーユ認証もまとめて依頼できますか？',
    a: 'はい、対応しております。NBI クリアランス取得後、DFA（外務省）でのアポスティーユ認証もセットで代行可能です。日本の入管や大使館への提出には、アポスティーユ認証が必要な場合があります。',
  },
  {
    q: 'NBI クリアランスを日本語に翻訳する必要はありますか？',
    a: '日本の役所や入管に提出する場合は、英語原文への日本語翻訳が求められることがあります。翻訳サービスについてもご相談いただけます。',
  },
  {
    q: 'NBI クリアランスの申請に必要なIDは何ですか？',
    a: 'フィリピンの有効な政府発行IDが必要です。パスポート（最も確実）、UMID、フィリピン運転免許証などが使用できます。海外在住の方はパスポートを準備してください。',
  },
  {
    q: 'NBI クリアランスを急いで取得したい場合はどうすればよいですか？',
    a: 'NBI自体にエクスプレス処理の制度はありませんが、代行サービスを利用することで手続きの抜け漏れなく迅速に対応できます。HIT案件でない通常案件であれば、2〜3週間での取得を目指して対応します。お急ぎの場合はその旨をご相談時にお伝えください。',
  },
  {
    q: 'フィリピンに住所がない在外フィリピン人でも申請できますか？',
    a: 'はい、海外在住のフィリピン人（OFW・永住権取得者等）もNBI クリアランスを申請できます。ただしNBIオンラインシステムへの登録や現地での手続きに代理人が必要です。当センターで海外在住者の代行申請にも対応しています。',
  },
  {
    q: 'NBI クリアランスに記載される情報はどのような内容ですか？',
    a: 'NBI クリアランスには、申請者の氏名・生年月日・出生地・申請日・発行日・有効期限・顔写真・指紋・シリアルナンバーが記載されています。「MATCH FOUND（HIT）」または「NO DEROGATORY RECORD（無犯罪）」の結果も明記されます。英語で記載されるため、日本の機関に提出する場合は日本語翻訳が必要なことがあります。',
  },
  {
    q: 'NBI クリアランスを取得した後、次に何をすればよいですか？',
    a: 'NBI Clearance取得後の次のステップは目的によって異なります。①配偶者ビザ申請の場合：DFAアポスティーユ認証を取得し、必要なら日本語翻訳を添付して入管に提出します。②就職・雇用先提出の場合：雇用主の指示に従い提出します。③海外移住の場合：移住先の国の要件に合わせてアポスティーユや認証を取得します。当センターではNBI取得後のDFAアポスティーユ認証・発送もセットで対応しています。',
  },
];

export default function NbiPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openCase, setOpenCase] = useState<number | null>(null);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://ph-document.com/' },
          { '@type': 'ListItem', position: 2, name: 'NBI無犯罪証明書ガイド', item: 'https://ph-document.com/nbi-clearance-guide/' },
        ],
      },
      {
        '@type': 'Article',
        headline: 'フィリピンNBI無犯罪証明書（NBI Clearance）とは？日本から取得する方法【2026年】',
        description: 'NBI Clearanceの取得方法・NBI HITの対処法・DFAアポスティーユ認証まで完全解説。日本から代行で取得する手順をわかりやすくガイド。',
        url: 'https://ph-document.com/nbi-clearance-guide/',
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
          <span className="text-gray-600">NBI無犯罪証明書ガイド</span>
        </nav>

        <h1 className="text-2xl md:text-3xl font-bold text-secondary leading-tight mb-4">
          フィリピンNBI無犯罪証明書（NBI Clearance）とは？<br className="hidden md:block" />
          日本から取得する方法【2026年最新】
        </h1>
        <p className="text-sm text-gray-500 mb-8">最終更新：2026年2月22日 ｜ 株式会社IGRS</p>

        {/* 目次 */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-10 shadow-card">
          <p className="text-xs font-bold text-gray-400 mb-3">目次</p>
          <ol className="space-y-1 text-sm text-secondary">
            {['NBI クリアランスとは', '必要になる場面', '基本情報', '取得手順（代行の場合）', 'NBI HITとは？対処法', 'DFAアポスティーユ認証', 'よくある質問（FAQ）', 'お問い合わせ'].map((item, i) => (
              <li key={i}><a href={`#nbi-${i + 1}`} className="hover:underline">{i + 1}. {item}</a></li>
            ))}
          </ol>
        </div>

        {/* Section 1 */}
        <section id="nbi-1" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">1. NBI クリアランスとは</h2>
          <p className="text-sm leading-relaxed text-gray-700 mb-4">
            <strong>NBI Clearance（NBI クリアランス）</strong>は、フィリピン国家捜査局（NBI: National Bureau of Investigation）が発行する<strong>無犯罪証明書</strong>です。申請者の氏名がNBIの犯罪記録データベースに登録されていないことを証明します。
          </p>
          <p className="text-sm leading-relaxed text-gray-700">
            日本でいう「警察証明書」に相当する書類で、海外移住・就労ビザ・国際結婚など、あらゆる場面で求められる重要な書類です。
          </p>
        </section>

        {/* Section 2 */}
        <section id="nbi-2" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">2. 必要になる場面</h2>
          <div className="grid gap-3">
            {[
              { title: '配偶者ビザ・在留資格の申請', desc: '日本の入管が配偶者ビザ申請の書類として求める場合があります。' },
              { title: '就労ビザ・海外就職', desc: '日本・海外での就職時に雇用主から提出を求められます。' },
              { title: 'フィリピンのパスポート申請', desc: '成人のパスポート申請時に必要になるケースがあります。' },
              { title: '海外移住・永住権申請', desc: '多くの国の移民・永住権申請で無犯罪証明書が必要です。' },
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
        <section id="nbi-3" className="mb-10">
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
                  ['発行機関', 'フィリピン国家捜査局（NBI）'],
                  ['有効期限', '発行日から1年間'],
                  ['申請費用', '約130ペソ（約320円）＋e-payment手数料'],
                  ['取得期間（代行）', '通常2〜4週間（HIT案件は追加期間が必要）'],
                  ['言語', '英語'],
                  ['DFAアポスティーユ', 'セットで依頼可能（別途費用）'],
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
        <section id="nbi-4" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">4. 取得手順（代行の場合）</h2>
          <div className="space-y-3">
            {[
              { step: 'STEP 1', title: 'お問い合わせ・必要情報の確認', desc: 'お名前・生年月日・目的などをヒアリング。HIT案件の可能性も事前チェックします。' },
              { step: 'STEP 2', title: '必要書類の準備', desc: 'フィリピンの有効なIDコピーをご用意いただきます（パスポートなど）。' },
              { step: 'STEP 3', title: 'NBI申請・取得', desc: '現地の代理人がNBIシステムに申請・窓口受け取りを代行します。' },
              { step: 'STEP 4', title: '（必要に応じて）DFAアポスティーユ認証', desc: '日本の入管・大使館に提出する場合はDFA認証もセットで対応します。' },
              { step: 'STEP 5', title: '日本へ国際郵便で発送', desc: '取得した書類を速達・追跡付きで日本の住所へお届けします。' },
            ].map((s, i) => (
              <div key={i} className="flex gap-4 bg-white border border-gray-100 rounded-lg p-4 shadow-card">
                <div className="w-16 flex-shrink-0">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">{s.step}</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-secondary mb-1">{s.title}</p>
                  <p className="text-xs text-gray-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: ケース別ガイド */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-2 border-l-4 border-primary pl-3">どんな方がNBIを必要としているか</h2>
          <p className="text-sm text-gray-500 mb-5">目的・状況別に、NBI Clearanceの取得ポイントをまとめました。</p>
          <div className="space-y-2">
            {cases.map((c, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg shadow-card overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                  onClick={() => setOpenCase(openCase === i ? null : i)}
                >
                  <span className="text-sm font-bold text-secondary pr-4">{c.title}</span>
                  {openCase === i ? <ChevronUp className="w-4 h-4 text-primary flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />}
                </button>
                {openCase === i && (
                  <div className="px-5 pb-4 text-sm text-gray-700 leading-relaxed border-t border-gray-100">
                    <p className="pt-3">{c.detail}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: NBI HIT */}
        <section id="nbi-5" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">5. NBI HITとは？対処法</h2>
          <div className="bg-amber-50 border border-amber-300 rounded-xl p-5 mb-6">
            <div className="flex gap-3 mb-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <h3 className="text-sm font-bold text-amber-800">NBI HITとは？</h3>
            </div>
            <p className="text-sm text-amber-800 mb-4">
              申請者の名前が、NBIの犯罪記録データベースに登録された同姓同名の人物と一致した状態を「HIT」といいます。本人が犯罪を犯したわけではありません。
            </p>
            <p className="text-sm text-amber-800">
              フィリピンは同じ名前の人が多いため、HIT（ヒット）が出るケースは珍しくありません。
            </p>
          </div>
          <h3 className="text-sm font-bold text-secondary mb-3">HIT が出た場合の対処手順</h3>
          <div className="space-y-3">
            {[
              'NBIのQueueing Systemで「Hit Clearance」の処理を行う',
              '指紋照合・本人確認書類の提示が求められる',
              '担当官が記録の人物と申請者が別人であることを確認',
              '確認後、通常のNBI クリアランスが発行される（追加で数日〜2週間程度かかる場合あり）',
            ].map((step, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="w-6 h-6 rounded-full bg-secondary text-white text-xs font-bold flex-shrink-0 flex items-center justify-center mt-0.5">{i + 1}</span>
                <p className="text-sm text-gray-700">{step}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
            <ShieldCheck className="w-4 h-4 inline mr-2" />
            当センターではHIT案件にも対応しています。まずはお気軽にご相談ください。
          </div>
        </section>

        {/* Section 6: DFA */}
        <section id="nbi-6" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">6. DFAアポスティーユ認証</h2>
          <p className="text-sm text-gray-700 mb-4">
            日本の入管・大使館に提出するNBI クリアランスには、<strong>DFA（フィリピン外務省）のアポスティーユ認証</strong>が必要な場合があります。
          </p>
          <div className="bg-white border border-gray-100 rounded-lg p-4 shadow-card text-sm text-gray-700 space-y-2">
            <p>✓ NBI クリアランス取得後、DFAに書類を提出</p>
            <p>✓ アポスティーユスタンプ（認証印）が付与される</p>
            <p>✓ 国際的な公文書として認証される</p>
            <p>✓ 当センターではNBI＋DFAアポスティーユのセット代行が可能</p>
          </div>
        </section>

        {/* Section: NBI申請成功のポイント */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">NBI申請を成功させるための重要ポイント</h2>
          <div className="space-y-4">
            {[
              {
                num: '01',
                title: 'パスポートの有効期限と名前のスペルを確認する',
                body: 'NBI申請に使用するIDは有効期限内のものが必要です。また、パスポートに記載されている名前のスペルがNBI申請書類と一致していることが重要です。スペルの不一致は後の配偶者ビザ審査や大使館提出でトラブルになります。全書類でスペルが統一されているか必ず事前確認してください。',
              },
              {
                num: '02',
                title: '有効期限を考慮して申請タイミングを計画する',
                body: 'NBI Clearanceの有効期限は発行日から1年間です。使用目的（配偶者ビザ申請・就職・移住など）に合わせて、提出先が書類を必要とする日から逆算して取得しましょう。代行で取得する場合は2〜4週間かかるため、余裕をもって申請を開始してください。HIT案件はさらに時間がかかることも念頭に置いてください。',
              },
              {
                num: '03',
                title: 'DFAアポスティーユが必要かどうかを事前に確認する',
                body: '日本の入管や大使館に提出するNBI Clearanceは、DFAアポスティーユ認証付きを求められる場合があります。提出先（入管の担当者・行政書士・大使館窓口）に事前に確認し、必要な場合はNBI取得と合わせてDFAアポスティーユもセットで代行依頼すると効率的です。アポスティーユ取得には別途1〜2週間かかります。',
              },
              {
                num: '04',
                title: '「MATCH FOUND（HIT）」の可能性を事前に把握する',
                body: 'フィリピンは同姓同名の人が多いため、HIT（同名の犯罪記録との一致）が出るケースは珍しくありません。HITが出た場合、追加の確認手続き（Hit Clearance）が必要になり、さらに2〜4週間かかることがあります。急ぎの申請が必要な場合は、余裕のあるスケジュールを組むか、代行サービスにHIT対応も含めて相談することをおすすめします。',
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

        {/* Section: 料金目安 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">代行費用の目安</h2>
          <div className="grid gap-3">
            {[
              { item: 'NBI Clearance 取得代行', cost: '約45,000円〜', note: 'NBI申請料・国際郵便込み' },
              { item: 'NBI + DFAアポスティーユ セット', cost: '約65,000円〜', note: 'DFA手数料・認証費用込み' },
              { item: 'NBI HIT案件（追加対応）', cost: '別途お見積もり', note: '状況によって費用が異なります' },
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
          <p className="text-xs text-gray-500 mt-3">※ 費用は申請内容・HIT有無・書類の種類によって変動します。詳細はお問い合わせください。</p>
        </section>

        {/* Section 7: なぜ代行が選ばれるか */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">7. 代行サービスが選ばれる理由</h2>
          <div className="grid gap-4">
            {[
              { icon: '🇯🇵', title: '完全日本語対応', body: 'フィリピン機関とのやり取り・書類確認・発送まですべて日本語でOK。英語が不得意な方でも安心です。' },
              { icon: '⚡', title: 'HIT案件にも対応', body: 'NBI HITが出た場合の追加手続き（Hit Clearance）もサポート。複雑なケースも経験豊富なスタッフが対応します。' },
              { icon: '📦', title: 'DFAアポスティーユまで一括対応', body: 'NBI取得からDFAアポスティーユ認証・日本へ国際郵便発送まで、まるごとお任せいただけます。' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-5 shadow-card">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="text-sm font-bold text-secondary mb-1">{item.title}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-secondary text-white rounded-2xl p-6 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">NBI クリアランス取得、まるごとお任せ</h2>
          <p className="text-sm text-gray-300 mb-5">HIT案件・DFAアポスティーユも対応。日本語でサポートします。</p>
          <a href="#contact" className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-hover transition-colors">
            無料相談する
          </a>
        </div>

        {/* FAQ */}
        <section id="nbi-7" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">7. よくある質問（FAQ）</h2>
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
              { to: '/psa-shussei-shomeisho', title: 'PSA出生証明書ガイド', desc: '出生証明書の取得方法と注意点' },
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
            <p className="text-sm text-gray-500 mb-6">NBI HIT案件・DFAアポスティーユも対応。まずはご相談ください。</p>
            <form action={FORMSPREE_ENDPOINT} method="POST" className="space-y-3">
              <input type="hidden" name="_subject" value="【NBIガイドからのお問い合わせ】" />
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
              <input type="hidden" name="landing_page" value="https://ph-document.com/nbi-clearance-guide/" />
              <div>
                <label htmlFor="nbi-name" className="block text-xs text-gray-600 mb-1">お名前</label>
                <input id="nbi-name" name="name" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder="山田 太郎" />
              </div>
              <div>
                <label htmlFor="nbi-email" className="block text-xs text-gray-600 mb-1">メールアドレス</label>
                <input id="nbi-email" type="email" name="email" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder="example@email.com" />
              </div>
              <div>
                <label htmlFor="nbi-message" className="block text-xs text-gray-600 mb-1">ご相談内容</label>
                <textarea id="nbi-message" name="message" required rows={4} className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder="NBI取得・HIT案件・DFAアポスティーユについてお気軽にどうぞ。" />
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
