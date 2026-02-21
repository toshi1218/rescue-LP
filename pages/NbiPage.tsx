import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ChevronDown, ChevronUp, AlertTriangle, Clock, DollarSign, FileText, Send, ShieldCheck } from 'lucide-react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mojqlqnd';

const faqs = [
  {
    q: 'NBI HITとは何ですか？',
    a: 'NBI HITとは、NBI（国家調査局）のデータベースに同じ名前・生年月日を持つ人物が複数登録されている状態、または犯罪歴がある可能性がある場合に表示されるフラグです。HITが出た場合、NBI地方事務所へ出頭して本人確認と追加審査が必要になります。同名の別人でもHITが出ることがあります。',
  },
  {
    q: 'NBIクリアランスの有効期限はどのくらいですか？',
    a: '通常、NBIクリアランスの有効期限は発行日から1年間です。ただし、提出先の機関によって要求が異なるため、提出先に確認してください。',
  },
  {
    q: '日本から自分でNBIクリアランスを申請できますか？',
    a: 'NBIクリアランスはNBIのオンラインシステム（e-Clearance）で予約・申請ができますが、最終的にはフィリピン国内のNBI事務所またはフィリピン大使館（領事館）での生体認証・写真撮影が必要です。日本在住の方はフィリピン大使館経由での手続きが可能ですが、時間がかかります。代行サービスでは現地での手続きを代行します。',
  },
  {
    q: 'DFAアポスティーユ認証とは何ですか？必要ですか？',
    a: 'DFA（フィリピン外務省）のアポスティーユ認証は、NBIクリアランスが公式の政府文書であることを証明する認証です。日本の入国管理局への配偶者ビザ申請では、アポスティーユ認証済みのものを求められるケースがあります。代行サービスでは、アポスティーユ認証まで含めたパックも対応しています。',
  },
  {
    q: '犯罪歴がある場合、クリアランスは取得できませんか？',
    a: '犯罪歴がある場合は「HITあり」の状態となり、通常のクリアランスではなく審査結果が記載された書類が発行されます。犯罪の種類・状況によって対応が異なりますので、まずはご相談ください。',
  },
];

export default function NbiPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background-light text-gray-800 font-body">
      <Navbar />

      <main id="main-content">
        {/* Breadcrumb */}
        <nav aria-label="パンくずリスト" className="bg-gray-50 border-b border-gray-100 py-2 px-4">
          <ol className="max-w-4xl mx-auto flex items-center gap-2 text-xs text-gray-500">
            <li><Link to="/" className="hover:text-secondary transition-colors">ホーム</Link></li>
            <li aria-hidden="true">›</li>
            <li className="text-gray-700 font-medium">NBI無犯罪証明書ガイド</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="bg-secondary text-white py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-primary text-sm font-bold mb-2 tracking-wide uppercase">完全ガイド</p>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              フィリピンNBI無犯罪証明書（クリアランス）とは？<br className="hidden md:block" />
              日本から取得する方法を徹底解説
            </h1>
            <p className="text-gray-200 text-sm md:text-base leading-relaxed">
              配偶者ビザ申請や就労手続きで求められるNBIクリアランス。
              「HIT問題って何？」「日本からでも取れる？」——
              初めての方向けに、全ての疑問をこのページで解説します。
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full border border-white/20">最終更新: 2026年2月</span>
              <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full border border-white/20">NBI公式情報に基づく</span>
            </div>
          </div>
        </section>

        {/* Quick summary */}
        <section className="py-8 px-4 bg-white border-b border-gray-100">
          <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <FileText className="w-5 h-5 text-primary" />, label: '発行機関', value: 'フィリピン NBI' },
              { icon: <Clock className="w-5 h-5 text-primary" />, label: '取得目安', value: '2〜6週間' },
              { icon: <DollarSign className="w-5 h-5 text-primary" />, label: '代行料金', value: '¥45,000〜' },
              { icon: <ShieldCheck className="w-5 h-5 text-primary" />, label: '有効期限', value: '発行から1年' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-3 rounded-xl bg-gray-50 border border-gray-100">
                {item.icon}
                <p className="text-xs text-gray-500 mt-1">{item.label}</p>
                <p className="text-sm font-bold text-secondary mt-0.5">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 py-10 space-y-14">

          {/* Section 1: What is NBI */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
              NBIクリアランスとは？
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              NBI Clearance（NBIクリアランス）は、フィリピン国家調査局（National Bureau of Investigation）が発行する
              <strong>無犯罪証明書</strong>です。申請者がフィリピン国内において犯罪記録がないことを
              公式に証明する書類で、指紋・生体認証データに基づいて発行されます。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              日本では「NBI無犯罪証明書」と呼ばれることが多く、配偶者ビザの申請書類として
              入国管理局から求められるケースが増えています。フィリピン国外で就労する際や、
              外国人との結婚手続きなどでも必要になります。
            </p>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mt-4">
              <p className="text-sm text-blue-800">
                <strong>ポイント：</strong> NBIクリアランスは
                「この人物には犯罪記録がありません」という証明ではなく、
                「NBI（国家調査局）のデータベース上、照会時点での記録はこの通り」という証明書です。
                HIT（要確認フラグ）が出ることがありますが、必ずしも犯罪歴を意味しません。
              </p>
            </div>
          </section>

          {/* Section 2: HIT explanation */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
              NBI HITとは？出た場合の対処法
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              NBIクリアランスの申請時に「HIT」が表示されることがあります。
              これはデータベース上に同一または類似の氏名・生年月日が複数存在する場合や、
              過去に係争・逮捕・調査に関わった記録がある場合に発生します。
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-red-50 border border-red-100 rounded-xl p-5">
                <h3 className="font-bold text-red-700 text-sm mb-3">HITが出る主な原因</h3>
                <ul className="space-y-2 text-xs text-red-700">
                  <li className="flex gap-2"><span className="font-bold">・</span><span>同名・同生年月日の別人が犯罪記録を持つ</span></li>
                  <li className="flex gap-2"><span className="font-bold">・</span><span>過去に逮捕・起訴・係争に関与した記録がある</span></li>
                  <li className="flex gap-2"><span className="font-bold">・</span><span>旧姓での犯罪記録が引っかかる</span></li>
                  <li className="flex gap-2"><span className="font-bold">・</span><span>名前のスペルが類似している別人の記録</span></li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-100 rounded-xl p-5">
                <h3 className="font-bold text-green-700 text-sm mb-3">HITが出た場合の対処</h3>
                <ul className="space-y-2 text-xs text-green-700">
                  <li className="flex gap-2"><span className="font-bold">1.</span><span>NBI地方事務所またはメインオフィスへ出頭</span></li>
                  <li className="flex gap-2"><span className="font-bold">2.</span><span>本人確認書類（パスポート等）を提示</span></li>
                  <li className="flex gap-2"><span className="font-bold">3.</span><span>追加審査・照合手続き（数日〜数週間）</span></li>
                  <li className="flex gap-2"><span className="font-bold">4.</span><span>問題なければクリアランスが発行される</span></li>
                </ul>
              </div>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-xs text-amber-800 leading-relaxed">
                <strong>代行サービスの強み：</strong> HIT問題が発生した場合の対応、
                現地NBI事務所との連絡、追加書類の準備など、複雑なケースにも対応します。
                HIT問題で困っている方もまずはご相談ください。
              </p>
            </div>
          </section>

          {/* Section 3: How to get */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
              取得方法：日本から申請するには
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-xs md:text-sm border-collapse">
                <thead>
                  <tr className="bg-secondary text-white">
                    <th className="p-3 text-left rounded-tl-lg">方法</th>
                    <th className="p-3 text-left">費用目安</th>
                    <th className="p-3 text-left">期間</th>
                    <th className="p-3 text-left rounded-tr-lg">特徴</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 bg-white">
                    <td className="p-3 font-medium">① フィリピン大使館経由<br /><span className="text-gray-500 font-normal text-xs">（東京・大阪）</span></td>
                    <td className="p-3">数千円程度</td>
                    <td className="p-3">1〜3ヶ月</td>
                    <td className="p-3 text-gray-600">大使館窓口への来館が必要。待ち時間が長い場合も</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <td className="p-3 font-medium">② フィリピン渡航して取得</td>
                    <td className="p-3">渡航費含め数万円〜</td>
                    <td className="p-3">1〜3日（現地）</td>
                    <td className="p-3 text-gray-600">フィリピンに行ける場合は最速。HIT時も対応可</td>
                  </tr>
                  <tr className="bg-primary/5 border-2 border-primary/30">
                    <td className="p-3 font-bold text-secondary">③ 取得代行サービス<br /><span className="text-primary font-bold text-xs">★ おすすめ</span></td>
                    <td className="p-3 font-bold">¥45,000〜</td>
                    <td className="p-3 font-bold">2〜6週間</td>
                    <td className="p-3 text-gray-600">現地手続きを全て代行。HIT対応・DFA認証もセット可</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3 className="font-bold text-secondary text-sm mb-3">大使館経由で申請する場合のステップ</h3>
            <div className="space-y-3">
              {[
                'NBI e-Clearanceシステム（https://clearance.nbi.gov.ph）でオンライン予約',
                'フィリピン大使館または総領事館に予約日に来館',
                '指紋・顔写真の生体認証を行う',
                '費用を支払い、領収書を受け取る',
                '1〜3ヶ月後にクリアランスを受け取る（郵送または来館）',
              ].map((step, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary text-white text-xs flex items-center justify-center font-bold">{i + 1}</span>
                  <p className="text-sm text-gray-700">{step}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: DFA Apostille */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
              DFAアポスティーユ認証とは？
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              NBIクリアランスを日本の行政手続き（特に配偶者ビザ申請）で使用する場合、
              <strong>DFA（Department of Foreign Affairs）によるアポスティーユ認証</strong>が必要になることがあります。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              アポスティーユとは、ハーグ条約に基づく公文書の国際的な認証手続きです。
              日本は2023年にハーグ条約に加入したため、フィリピン発行の書類にDFAアポスティーユを付けることで
              日本の機関での使用が認められます。
            </p>
            <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-5">
              <h3 className="font-bold text-secondary text-sm mb-3">弊社のNBI代行パックには</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2">✓ <span>NBIクリアランス取得代行</span></li>
                <li className="flex gap-2">✓ <span>DFAアポスティーユ認証（オプション）</span></li>
                <li className="flex gap-2">✓ <span>日本語翻訳（オプション）</span></li>
                <li className="flex gap-2">✓ <span>HIT問題発生時の対応サポート</span></li>
              </ul>
            </div>
          </section>

          {/* Section 5: Trouble */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
              よくあるトラブルと注意点
            </h2>
            <div className="space-y-3">
              {[
                {
                  title: '大使館の予約が取れない・混雑している',
                  desc: '東京・大阪のフィリピン大使館・総領事館は予約が埋まりやすく、数ヶ月待ちになることもあります。早めの予約が必須です。代行サービスなら現地NBI窓口で直接手続きします。',
                },
                {
                  title: 'HIT問題で発行が止まる',
                  desc: 'HIT（要確認フラグ）が出ると通常より時間がかかります。本人がフィリピンのNBI事務所に出向く必要があるため、日本在住の方には代行サービスが実質必須になります。',
                },
                {
                  title: '有効期限切れで再取得が必要',
                  desc: 'NBIクリアランスの有効期限は発行から1年です。手続きが長引いて有効期限内に提出できない場合は再取得が必要になります。',
                },
                {
                  title: 'アポスティーユなしで提出してしまった',
                  desc: '提出先がDFAアポスティーユを要求しているのに付けずに提出すると、書類不備として差し戻されます。事前に提出先の要件を確認してください。',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 bg-white border border-gray-100 rounded-xl p-4 shadow-card">
                  <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-sm text-secondary mb-1">{item.title}</p>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 6: FAQ */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
              よくある質問
            </h2>
            <div className="space-y-2">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between px-5 py-4 bg-white text-left hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span className="font-bold text-sm text-secondary pr-4">{faq.q}</span>
                    {openFaq === i ? <ChevronUp className="w-4 h-4 text-gray-400 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />}
                  </button>
                  {openFaq === i && (
                    <div className="px-5 py-4 bg-gray-50 border-t border-gray-100">
                      <p className="text-sm text-gray-700 leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Related pages */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
              関連書類ガイド
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/cenomar-guide" className="bg-white border border-gray-100 rounded-xl p-5 shadow-card hover:border-primary/50 transition-colors block">
                <p className="text-xs text-primary font-bold mb-1">ガイド記事</p>
                <h3 className="font-bold text-secondary text-sm mb-2">CENOMAR（独身証明書）ガイド</h3>
                <p className="text-xs text-gray-600">国際結婚に必要なCENOMARの取得方法を解説</p>
              </Link>
              <Link to="/psa-shussei-shomeisho" className="bg-white border border-gray-100 rounded-xl p-5 shadow-card hover:border-primary/50 transition-colors block">
                <p className="text-xs text-primary font-bold mb-1">ガイド記事</p>
                <h3 className="font-bold text-secondary text-sm mb-2">PSA出生証明書ガイド</h3>
                <p className="text-xs text-gray-600">国際結婚・ビザ申請で必要なPSA出生証明書の取得方法</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-secondary rounded-2xl p-8 text-white">
            <h2 className="text-xl font-bold mb-2">NBI取得代行・HIT問題のご相談</h2>
            <p className="text-gray-300 text-sm mb-6">
              HIT問題で困っている方、大使館予約が取れない方も歓迎です。
              まずは現状をお聞かせください。
            </p>
            <form action={FORMSPREE_ENDPOINT} method="POST" className="space-y-3">
              <input type="hidden" name="_subject" value="【NBIページからのお問い合わせ】" />
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
              <input type="hidden" name="page" value="/nbi-clearance-guide" />
              <div>
                <label htmlFor="nbi-name" className="block text-xs text-gray-300 mb-1">お名前</label>
                <input id="nbi-name" name="name" required className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-primary" placeholder="山田 太郎" />
              </div>
              <div>
                <label htmlFor="nbi-email" className="block text-xs text-gray-300 mb-1">メールアドレス</label>
                <input id="nbi-email" name="email" type="email" required className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-primary" placeholder="example@email.com" />
              </div>
              <div>
                <label htmlFor="nbi-message" className="block text-xs text-gray-300 mb-1">ご相談内容</label>
                <textarea id="nbi-message" name="message" required rows={4} className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-primary" placeholder="NBIクリアランスの取得について。HITが出て困っている。DFAアポスティーユも必要かどうか etc." />
              </div>
              <button type="submit" className="w-full bg-primary text-white font-bold py-3 rounded-xl hover:bg-primary-hover transition-colors flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                無料で相談する
              </button>
            </form>
          </section>

        </article>
      </main>

      <Footer />
    </div>
  );
}
