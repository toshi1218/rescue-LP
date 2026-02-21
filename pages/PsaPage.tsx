import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ChevronDown, ChevronUp, CheckCircle, AlertTriangle, Clock, DollarSign, FileText, Send } from 'lucide-react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mojqlqnd';

const faqs = [
  {
    q: 'PSA出生証明書とBirthCertificateは同じものですか？',
    a: 'PSAが発行する出生証明書のことを「PSA Birth Certificate」と呼びます。フィリピンでは以前NSO（国家統計局）が発行していましたが、現在はPSAに統合されています。NSOと書かれた古い証明書が手元にある場合でも、現在はPSA発行のものが求められることが多いため、新たに取得が必要な場合があります。',
  },
  {
    q: '出生証明書が存在しない場合（未登録）はどうなりますか？',
    a: '出生登録がされていない（Late Registration）ケースでは、まずフィリピンの市区町村役場（LCR）で遅延登録手続きが必要です。この場合は通常より時間がかかります。代行サービスにご相談いただければ手続き方法をご案内します。',
  },
  {
    q: '結婚した姓（夫の姓）でPSAに登録されている場合は？',
    a: '婚姻前の旧姓（出生時の姓）でPSAには登録されています。ただし、婚姻後に改姓した場合は、両方の情報を申請書に記入する必要があります。',
  },
  {
    q: '日本語翻訳は必要ですか？',
    a: 'はい、日本の役所に提出する場合は認定翻訳者による日本語翻訳が必要です。弊社では翻訳込みのパックもご用意しています。',
  },
  {
    q: '取得にはどんな情報が必要ですか？',
    a: '申請者のフルネーム（出生時の姓名）、生年月日、出生地（市区町村名）、両親のフルネームが必要です。これらの情報が正確に揃っていれば、代行手続きを円滑に進めることができます。',
  },
];

export default function PsaPage() {
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
            <li className="text-gray-700 font-medium">PSA出生証明書ガイド</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="bg-secondary text-white py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-primary text-sm font-bold mb-2 tracking-wide uppercase">完全ガイド</p>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              フィリピンPSA出生証明書とは？<br className="hidden md:block" />
              国際結婚・ビザ申請での取得方法を解説
            </h1>
            <p className="text-gray-200 text-sm md:text-base leading-relaxed">
              国際結婚手続きや配偶者ビザ申請で必ず求められるPSA出生証明書。
              自分で取れる？代行は必要？費用は？——このページで全てわかります。
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full border border-white/20">最終更新: 2026年2月</span>
              <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full border border-white/20">PSA公式情報に基づく</span>
            </div>
          </div>
        </section>

        {/* Quick summary */}
        <section className="py-8 px-4 bg-white border-b border-gray-100">
          <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <FileText className="w-5 h-5 text-primary" />, label: '発行機関', value: 'フィリピン PSA' },
              { icon: <Clock className="w-5 h-5 text-primary" />, label: '取得目安', value: '2〜4週間' },
              { icon: <DollarSign className="w-5 h-5 text-primary" />, label: '代行料金', value: '¥40,000〜' },
              { icon: <CheckCircle className="w-5 h-5 text-primary" />, label: '言語', value: '英語（翻訳対応）' },
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

          {/* Section 1: What is PSA */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
              PSA出生証明書とは？
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              PSA出生証明書（PSA Birth Certificate）は、フィリピン統計局（Philippine Statistics Authority）が発行する
              <strong>公式の出生証明書</strong>です。フィリピン国民の出生を公式に記録した書類で、
              氏名・生年月日・出生地・両親の情報が記載されています。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              以前は国家統計局（NSO）が発行していたため、「NSO出生証明書」と呼ばれることもありますが、
              2013年にNSOがPSAに統合されたため、現在は「PSA」の名称が正式です。
              日本の役所や入国管理局では、<strong>PSAが発行したセキュリティペーパー印刷のもの</strong>が求められます。
            </p>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mt-4">
              <p className="text-sm text-blue-800">
                <strong>注意：</strong> 市区町村役場（LCR: Local Civil Registry）が発行する出生証明書は
                PSAのものとは異なります。日本の国際結婚・ビザ手続きでは、必ず
                PSA発行のセキュリティペーパー版が必要です。
              </p>
            </div>
          </section>

          {/* Section 2: When needed */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
              PSA出生証明書が必要になる場面
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: '日本での国際結婚手続き',
                  desc: '日本の市区町村役場での婚姻届提出時、フィリピン人側の身元証明としてPSA出生証明書が必要です。CENOMARとセットで求められることが一般的です。',
                  badge: '最も頻繁',
                },
                {
                  title: '配偶者ビザ（在留資格）申請',
                  desc: '配偶者ビザの申請書類として、フィリピン人配偶者のPSA出生証明書が必要です。入国管理局への提出書類の一つです。',
                  badge: 'ビザ申請',
                },
                {
                  title: 'パスポート申請・更新',
                  desc: 'フィリピン国内でのパスポート申請や更新時に、PSA出生証明書が身元確認書類として求められます。',
                  badge: 'パスポート',
                },
                {
                  title: '帰化申請・各種行政手続き',
                  desc: '日本での帰化申請や、その他の行政手続きでも出生証明書が必要になるケースがあります。',
                  badge: '帰化・行政',
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
              取得方法3パターン比較
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
                    <td className="p-3 font-medium">① PSAオンライン<br /><span className="text-gray-500 font-normal text-xs">（e-Serbisyo / Helpline）</span></td>
                    <td className="p-3">約1,500〜2,000円相当</td>
                    <td className="p-3">2〜6週間</td>
                    <td className="p-3 text-gray-600">フィリピン国内に受け取り住所がある人</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <td className="p-3 font-medium">② フィリピン大使館<br /><span className="text-gray-500 font-normal text-xs">（日本在住の場合）</span></td>
                    <td className="p-3">数千円程度</td>
                    <td className="p-3">1〜3ヶ月</td>
                    <td className="p-3 text-gray-600">時間に余裕がある人</td>
                  </tr>
                  <tr className="bg-primary/5 border-2 border-primary/30">
                    <td className="p-3 font-bold text-secondary">③ 取得代行サービス<br /><span className="text-primary font-bold text-xs">★ おすすめ</span></td>
                    <td className="p-3 font-bold">¥40,000〜</td>
                    <td className="p-3 font-bold">2〜4週間</td>
                    <td className="p-3 text-gray-600">確実・迅速に取得したい人</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 space-y-3">
              <h3 className="font-bold text-secondary text-sm">自分でオンライン申請する場合のステップ</h3>
              {[
                'PSA e-Serbisyo（https://www.psahelpline.ph）にアクセス',
                '申請者のフルネーム、生年月日、出生地、両親の名前を入力',
                'クレジットカードまたは地元の決済手段で費用を支払い',
                'フィリピン国内の受け取り先住所を登録',
                '発送後2〜6週間で到着（地域・混雑状況による）',
              ].map((step, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary text-white text-xs flex items-center justify-center font-bold">{i + 1}</span>
                  <p className="text-sm text-gray-700">{step}</p>
                </div>
              ))}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-2">
                <p className="text-xs text-amber-800">
                  <strong>注意：</strong> PSAオンラインはフィリピン国内住所への郵送のみ対応しています。
                  日本の住所への直接郵送はできません。
                  フィリピン国内に受け取れる住所がない場合は、代行サービスをご利用ください。
                </p>
              </div>
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
                  title: '出生登録がされていない（未登録）',
                  desc: '農村部など、出生登録が漏れているケースがあります。この場合は市区町村役場での遅延登録（Late Registration）手続きが先に必要です。',
                },
                {
                  title: '名前のスペルが書類間で異なる',
                  desc: 'パスポートと出生証明書の名前スペルが一致しない場合、書類の修正手続きが必要になります。事前に確認しておきましょう。',
                },
                {
                  title: 'PSAのデータベースに記録がない',
                  desc: 'PSAのシステムに出生記録が登録されていない場合、「No Record Found」が発行されます。LCR（地元の市民登録局）に直接確認が必要です。',
                },
                {
                  title: '発行に時間がかかる',
                  desc: '繁忙期やシステムメンテナンスで発行が遅延することがあります。婚姻手続きや申請期限の最低1〜2ヶ月前には申請を開始してください。',
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
                <p className="text-xs text-gray-600">国際結婚に必要なCENOMARの取得方法・費用・トラブルを解説</p>
              </Link>
              <Link to="/nbi-clearance-guide" className="bg-white border border-gray-100 rounded-xl p-5 shadow-card hover:border-primary/50 transition-colors block">
                <p className="text-xs text-primary font-bold mb-1">ガイド記事</p>
                <h3 className="font-bold text-secondary text-sm mb-2">NBI無犯罪証明書ガイド</h3>
                <p className="text-xs text-gray-600">配偶者ビザ申請で必要なNBIクリアランスの取得方法を解説</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-secondary rounded-2xl p-8 text-white">
            <h2 className="text-xl font-bold mb-2">PSA出生証明書取得代行のご相談</h2>
            <p className="text-gray-300 text-sm mb-6">
              「出生登録されているか不明」「何が必要かわからない」という方もお気軽にどうぞ。
            </p>
            <form action={FORMSPREE_ENDPOINT} method="POST" className="space-y-3">
              <input type="hidden" name="_subject" value="【PSAページからのお問い合わせ】" />
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
              <input type="hidden" name="page" value="/psa-shussei-shomeisho" />
              <div>
                <label htmlFor="psa-name" className="block text-xs text-gray-300 mb-1">お名前</label>
                <input id="psa-name" name="name" required className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-primary" placeholder="山田 太郎" />
              </div>
              <div>
                <label htmlFor="psa-email" className="block text-xs text-gray-300 mb-1">メールアドレス</label>
                <input id="psa-email" name="email" type="email" required className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-primary" placeholder="example@email.com" />
              </div>
              <div>
                <label htmlFor="psa-message" className="block text-xs text-gray-300 mb-1">ご相談内容</label>
                <textarea id="psa-message" name="message" required rows={4} className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-primary" placeholder="PSA出生証明書の取得について相談したい etc." />
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
