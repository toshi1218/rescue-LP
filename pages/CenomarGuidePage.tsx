import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ChevronDown, ChevronUp, CheckCircle, AlertTriangle, Clock, DollarSign, FileText, Send } from 'lucide-react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mojqlqnd';

const faqs = [
  {
    q: 'CENOMARの有効期限はありますか？',
    a: '明確な法律上の有効期限はありませんが、日本の役所や大使館では「発行から6ヶ月以内」を要求するケースが多いです。国際結婚手続きを開始する直前に取得することをおすすめします。',
  },
  {
    q: '日本から自分でCENOMARを取得できますか？',
    a: 'オンライン（PSAe-Serbisyo）から申請し、フィリピン国内の住所へ郵送してもらう方法があります。ただし、フィリピン国内に受け取れる住所がない場合や、英語での手続きに不安がある場合は代行サービスの利用が確実です。',
  },
  {
    q: 'CENOMAR取得に必要な書類は何ですか？',
    a: '申請者本人のフルネーム（旧姓含む）、生年月日、出生地、両親のフルネームが必要です。代行の場合はこれらの情報をご提供いただければ、弊社が手続きを進めます。',
  },
  {
    q: 'CENOMARが英語以外で発行される場合はありますか？',
    a: 'PSAが発行するCENOMARは英語です。日本の役所へ提出する際は日本語翻訳が必要です。弊社の代行パックには翻訳込みのプランもございます。',
  },
  {
    q: 'フィリピン人側がすでに日本に在住している場合でも取得できますか？',
    a: 'はい、取得できます。CENOMARはフィリピン国内でのみ申請・発行されるため、日本在住のフィリピン人の方も代行サービスを利用して取得するのが一般的です。',
  },
];

export default function CenomarGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background-light text-gray-800 font-body">
      {/* SEO: page-specific head via useEffect would need Helmet; using inline for SSR */}
      <Navbar />

      <main id="main-content">
        {/* Breadcrumb */}
        <nav aria-label="パンくずリスト" className="bg-gray-50 border-b border-gray-100 py-2 px-4">
          <ol className="max-w-4xl mx-auto flex items-center gap-2 text-xs text-gray-500">
            <li><Link to="/" className="hover:text-secondary transition-colors">ホーム</Link></li>
            <li aria-hidden="true">›</li>
            <li className="text-gray-700 font-medium">CENOMARガイド</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="bg-secondary text-white py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-primary text-sm font-bold mb-2 tracking-wide uppercase">完全ガイド</p>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              フィリピン独身証明書（CENOMAR・セノマー）とは？<br className="hidden md:block" />
              取得方法・費用・期間を徹底解説
            </h1>
            <p className="text-gray-200 text-sm md:text-base leading-relaxed">
              国際結婚・配偶者ビザ申請で必ず必要になるCENOMAR。
              「どこで取るの？」「自分でできる？」「代行は必要？」——
              初めての方でもわかるよう、全ての疑問をこのページで解決します。
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full border border-white/20">最終更新: 2026年2月</span>
              <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full border border-white/20">PSA公式情報に基づく</span>
            </div>
          </div>
        </section>

        {/* Quick summary box */}
        <section className="py-8 px-4 bg-white border-b border-gray-100">
          <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <FileText className="w-5 h-5 text-primary" />, label: '発行機関', value: 'フィリピン PSA' },
              { icon: <Clock className="w-5 h-5 text-primary" />, label: '取得目安', value: '2〜4週間' },
              { icon: <DollarSign className="w-5 h-5 text-primary" />, label: '代行料金', value: '¥40,000〜' },
              { icon: <CheckCircle className="w-5 h-5 text-primary" />, label: '対応言語', value: '英語（翻訳対応）' },
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

          {/* Section 1: What is CENOMAR */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
              CENOMARとは何か？
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              CENOMAR（セノマー）は <strong>Certificate of No Marriage Record</strong> の略称で、
              フィリピン政府機関 PSA（Philippine Statistics Authority）が発行する
              <strong>独身証明書</strong>です。日本語では「婚姻記録なし証明書」とも呼ばれます。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              この証明書は、申請者が<strong>フィリピン国内でこれまでに結婚していないこと</strong>を公式に証明するものです。
              PSAの婚姻記録データベースに基づいて発行されるため、フィリピン政府が認める唯一の独身証明書です。
            </p>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mt-4">
              <p className="text-sm text-blue-800">
                <strong>豆知識：</strong> 「CENOMAR」は通称・略称です。PSAが発行する公式書類の正式名称は
                「Certificate of No Marriage Record」です。フィリピンでは日常的に「セノマー」と呼ばれています。
              </p>
            </div>
          </section>

          {/* Section 2: When is it needed */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
              CENOMARが必要になる場面
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: '日本での国際結婚手続き',
                  desc: '日本の市区町村役場に婚姻届を提出する際、フィリピン人側の独身証明としてCENOMARが必要です。さらに「婚姻要件具備証明書」とセットで求められることが多いです。',
                  badge: '最もよくある用途',
                },
                {
                  title: '配偶者ビザ（在留資格）申請',
                  desc: '入国管理局への配偶者ビザ申請時、婚姻の正当性を証明するため、CENOMARが証拠書類として必要になります。',
                  badge: 'ビザ申請',
                },
                {
                  title: 'フィリピンでの婚姻手続き',
                  desc: 'フィリピン国内で先に婚姻手続きを行う場合も、双方の独身証明が必要です。',
                  badge: 'フィリピン婚姻',
                },
                {
                  title: '再婚手続き',
                  desc: '離婚歴がある場合は、フィリピン裁判所の「婚姻無効宣言（Annulment）」後に再度CENOMARを取得して独身であることを証明します。',
                  badge: '再婚・離婚後',
                },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-xl p-5 shadow-card">
                  <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-2 py-0.5 rounded mb-2">{item.badge}</span>
                  <h3 className="font-bold text-secondary text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: How to get */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
              CENOMAR取得方法3パターン比較
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs md:text-sm border-collapse">
                <thead>
                  <tr className="bg-secondary text-white">
                    <th className="p-3 text-left rounded-tl-lg">方法</th>
                    <th className="p-3 text-left">費用目安</th>
                    <th className="p-3 text-left">期間</th>
                    <th className="p-3 text-left rounded-tr-lg">向いている人</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 bg-white">
                    <td className="p-3 font-medium">① PSAオンライン申請<br /><span className="text-gray-500 font-normal text-xs">（e-Serbisyo）</span></td>
                    <td className="p-3">約1,500〜2,000円相当</td>
                    <td className="p-3">2〜6週間</td>
                    <td className="p-3 text-gray-600">フィリピン国内に受け取れる住所がある人</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <td className="p-3 font-medium">② フィリピン大使館経由<br /><span className="text-gray-500 font-normal text-xs">（日本在住の場合）</span></td>
                    <td className="p-3">数千円程度</td>
                    <td className="p-3">1〜3ヶ月</td>
                    <td className="p-3 text-gray-600">日本在住で時間に余裕がある人</td>
                  </tr>
                  <tr className="bg-primary/5 border-2 border-primary/30">
                    <td className="p-3 font-bold text-secondary">③ 取得代行サービス<br /><span className="text-primary font-bold text-xs">★ おすすめ</span></td>
                    <td className="p-3 font-bold">¥40,000〜</td>
                    <td className="p-3 font-bold">2〜4週間</td>
                    <td className="p-3 text-gray-600">英語が不安・早く確実に取りたい人</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-xs text-amber-800 leading-relaxed">
                <strong>なぜ代行がおすすめなのか：</strong>
                PSAオンラインは英語のみで、フィリピン国内住所への郵送しか対応していません。
                大使館経由は時間がかかり、書類不備があるとさらに遅延します。
                代行サービスなら日本語で手続きを完結でき、
                書類の不備確認・不足書類の補完も対応するため確実・迅速です。
              </p>
            </div>
          </section>

          {/* Section 4: Trouble cases */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
              よくあるトラブルと注意点
            </h2>
            <div className="space-y-3">
              {[
                {
                  title: '名前のスペルが書類と異なる',
                  desc: '申請時の氏名とパスポート・出生証明書の氏名が一致しないと発行を拒否されます。旧姓（ミドルネーム含む）も正確に記入が必要です。',
                },
                {
                  title: '婚姻記録が残っている（HITが出る）',
                  desc: '以前の婚姻がデータベースに残っている場合、CENOMARではなく婚姻証明書が発行されます。アニュルメント（婚姻無効）が完了しているか確認が必要です。',
                },
                {
                  title: '発行が遅延する',
                  desc: 'PSAのシステム混雑や住所確認の遅延により、想定より時間がかかることがあります。余裕を持って早めに申請することを強くおすすめします。',
                },
                {
                  title: '翻訳が認証されていない',
                  desc: '日本の役所に提出する際は、認定翻訳者による日本語翻訳が必要です。機械翻訳は原則として受け付けられません。',
                },
                {
                  title: '有効期限切れで取り直しが必要',
                  desc: '役所の要求（多くは発行から6ヶ月以内）に間に合わなかった場合、再取得が必要です。手続きを始めるタイミングと合わせて取得計画を立てましょう。',
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

          {/* Section 5: FAQ */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
              よくある質問（FAQ）
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
              <Link to="/psa-shussei-shomeisho" className="bg-white border border-gray-100 rounded-xl p-5 shadow-card hover:border-primary/50 transition-colors block">
                <p className="text-xs text-primary font-bold mb-1">ガイド記事</p>
                <h3 className="font-bold text-secondary text-sm mb-2">PSA出生証明書（Birth Certificate）ガイド</h3>
                <p className="text-xs text-gray-600">国際結婚・ビザ申請で必要なPSA出生証明書の取得方法を解説</p>
              </Link>
              <Link to="/nbi-clearance-guide" className="bg-white border border-gray-100 rounded-xl p-5 shadow-card hover:border-primary/50 transition-colors block">
                <p className="text-xs text-primary font-bold mb-1">ガイド記事</p>
                <h3 className="font-bold text-secondary text-sm mb-2">NBI無犯罪証明書（クリアランス）ガイド</h3>
                <p className="text-xs text-gray-600">配偶者ビザ申請で求められるNBIクリアランスの取得方法を解説</p>
              </Link>
            </div>
          </section>

          {/* CTA Contact Form */}
          <section className="bg-secondary rounded-2xl p-8 text-white">
            <h2 className="text-xl font-bold mb-2">CENOMAR取得代行のご相談</h2>
            <p className="text-gray-300 text-sm mb-6">
              「自分のケースに必要な書類がわからない」という方も歓迎です。
              まずはお気軽にご相談ください。
            </p>
            <form
              action={FORMSPREE_ENDPOINT}
              method="POST"
              className="space-y-3"
            >
              <input type="hidden" name="_subject" value="【CENOMARガイドからのお問い合わせ】" />
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
              <input type="hidden" name="page" value="/cenomar-guide" />
              <div>
                <label htmlFor="cg-name" className="block text-xs text-gray-300 mb-1">お名前</label>
                <input id="cg-name" name="name" required className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-primary" placeholder="山田 太郎" />
              </div>
              <div>
                <label htmlFor="cg-email" className="block text-xs text-gray-300 mb-1">メールアドレス</label>
                <input id="cg-email" name="email" type="email" required className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-primary" placeholder="example@email.com" />
              </div>
              <div>
                <label htmlFor="cg-message" className="block text-xs text-gray-300 mb-1">ご相談内容</label>
                <textarea id="cg-message" name="message" required rows={4} className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-primary" placeholder="CENOMAR取得について相談したい。フィリピン人のパートナーがいて、国際結婚の手続きを進めたい etc." />
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
