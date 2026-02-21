import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { trackLandingView, trackEvent } from '../lib/analytics';
import { Mail, Send, CheckCircle, AlertTriangle, ChevronDown, ChevronUp } from 'lucide-react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mojqlqnd';

// --- Inline contact form (same as Footer) ---
function ContactForm() {
  return (
    <section className="py-16 bg-white border-t border-gray-100" id="contact">
      <div className="max-w-md md:max-w-xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold text-secondary mb-2">まずは無料で相談</h3>
        <p className="text-sm text-gray-500 mb-8">
          どの書類が必要かわからない方も、<br />お気軽にお問い合わせください。
        </p>
        <form
          action={FORMSPREE_ENDPOINT}
          method="POST"
          className="space-y-3 text-left"
          aria-label="お問い合わせフォーム"
        >
          <input type="hidden" name="_subject" value="【CENOMARガイドページ】お問い合わせ" />
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
          <div>
            <label htmlFor="name" className="block text-xs text-gray-600 mb-1">お名前</label>
            <input
              id="name"
              name="name"
              required
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="山田 太郎"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs text-gray-600 mb-1">メールアドレス</label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="example@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-xs text-gray-600 mb-1">ご相談内容</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="CENOMARが必要な理由、お急ぎの場合はご希望納期など、何でもお気軽にご記入ください。"
            />
          </div>
          <button
            type="submit"
            onClick={() => trackEvent('form_submit', { location: 'cenomar_guide', type: 'formspree' })}
            className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg hover:bg-primary-hover transition-all flex items-center justify-center gap-3 focus:outline-none focus:ring-4 focus:ring-primary/30"
          >
            <Send className="w-5 h-5" />
            フォームで問い合わせる
          </button>
        </form>
        <a
          href="mailto:igrs20200601@gmail.com"
          onClick={() => trackEvent('cta_click', { location: 'cenomar_guide', type: 'mailto_fallback' })}
          className="mt-3 inline-flex items-center gap-2 text-xs text-gray-500 hover:text-secondary transition-colors"
        >
          <Mail className="w-4 h-4" />
          メールで直接送る: igrs20200601@gmail.com
        </a>
        <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-4 text-xs text-gray-400">
          <span className="font-medium text-gray-500">運営会社: 株式会社IGRS</span>
        </div>
        <p className="text-[10px] text-gray-300 mt-4">© 2026 IGRS Inc.</p>
      </div>
    </section>
  );
}

// --- FAQ accordion item ---
interface FaqItem {
  q: string;
  a: string;
}

function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="bg-white border border-gray-100 rounded-xl overflow-hidden">
          <button
            className="w-full text-left px-5 py-4 flex items-start justify-between gap-3 font-bold text-secondary text-sm hover:bg-gray-50 transition-colors"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span className="flex-1">{item.q}</span>
            {openIndex === i
              ? <ChevronUp className="w-4 h-4 flex-shrink-0 mt-0.5 text-primary" />
              : <ChevronDown className="w-4 h-4 flex-shrink-0 mt-0.5 text-gray-400" />
            }
          </button>
          {openIndex === i && (
            <div className="px-5 pb-4 text-sm text-gray-700 leading-relaxed border-t border-gray-100">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// --- Main page ---
export default function CenomarGuidePage() {
  useEffect(() => {
    trackLandingView();
  }, []);

  const faqItems: FaqItem[] = [
    {
      q: 'CENOMARの有効期限はどのくらいですか？',
      a: 'PSAから発行された日を起算して、提出先が指定する期限（多くの場合6ヶ月、場合によっては3ヶ月以内）のものが求められます。日本の市区町村や出入国在留管理庁（入管）の窓口によって異なるため、事前に確認した上で余裕を持って取得することをお勧めします。',
    },
    {
      q: 'フィリピンに行かなくてもCENOMARは取得できますか？',
      a: 'はい、PSAのオンライン申請システムを利用すればフィリピンに渡航せずに取得できます。ただし、申請から書類が日本に届くまで通常1〜2ヶ月かかります。当センターの代行サービスをご利用いただくと、書類確認から発送手配まで一括してスムーズに進めることができます。',
    },
    {
      q: '日本語翻訳は必要ですか？',
      a: 'CENOMARは英語で発行されます。日本の市区町村に婚姻届を提出する際は、日本語翻訳文の添付が必要です。翻訳は本人またはパートナーが行うことも可能ですが、当センターでは翻訳込みのプランもご提供しています。',
    },
    {
      q: '過去に婚姻歴がある場合はどうなりますか？',
      a: 'フィリピンに婚姻記録がある場合、PSAはCENOMARではなく婚姻証明書（Marriage Certificate）を発行します。再婚を希望する場合は、フィリピン法廷での婚姻無効判決（Annulment）や配偶者の死亡証明書など、状況に応じた追加書類が必要になります。複雑なケースはまず無料相談でご状況をお聞かせください。',
    },
    {
      q: 'CENOMARとアポスティーユ認証は違うものですか？',
      a: 'CENOMARはPSAが発行する独身証明書そのものです。DFAアポスティーユ認証はCENOMAR等の書類に付ける国際的な公証で、別の手続きです。日本での国際結婚・配偶者ビザ申請では、通常アポスティーユ認証は不要とされることが多いですが、提出先によって異なりますので事前にご確認ください。',
    },
  ];

  return (
    <div className="min-h-screen bg-background-light text-gray-800 font-body">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] bg-white text-secondary text-sm font-bold px-3 py-2 rounded shadow">
        メインコンテンツへスキップ
      </a>
      <Navbar />

      <main id="main-content" className="max-w-3xl mx-auto px-4 py-8 md:py-12">

        {/* Breadcrumb */}
        <nav aria-label="パンくずリスト" className="text-xs text-gray-400 mb-6 flex items-center gap-1.5 flex-wrap">
          <a href="/" className="hover:text-secondary transition-colors">ホーム</a>
          <span>›</span>
          <span className="text-gray-600">CENOMAR（独身証明書）ガイド</span>
        </nav>

        {/* Title & Meta */}
        <header className="mb-8">
          <p className="text-xs text-primary font-bold mb-2 uppercase tracking-wider">フィリピン書類ガイド</p>
          <h1 className="text-2xl md:text-3xl font-bold text-secondary leading-tight mb-4">
            フィリピン独身証明書（CENOMAR・セノマー）とは？<br className="hidden md:block" />
            取得方法・費用・期間を徹底解説
          </h1>
          <p className="text-xs text-gray-400 mb-4">最終更新日: 2026年2月21日｜フィリピン書類取得代行センター</p>

          {/* Summary box */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
            <p className="text-sm font-bold text-secondary mb-3">このページでわかること</p>
            <ul className="space-y-1.5">
              {[
                'CENOMARとは何か（正式名称・発行元）',
                '国際結婚・配偶者ビザでなぜ必要なのか',
                '有効期限・費用・日本語翻訳の必要性',
                '3つの取得方法とそれぞれのメリット・デメリット',
                'よくあるトラブルと対処法',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </header>

        {/* Section 1: CENOMARとは */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 pb-2 border-b-2 border-primary/30">
            CENOMARとは何ですか？
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            CENOMARは <strong>「Certificate of No Marriage Record」</strong> の略で、日本語では<strong>「独身証明書」</strong>または「婚姻記録なし証明書」と呼ばれます。フィリピンの戸籍管理機関である <strong>PSA（Philippine Statistics Authority／フィリピン統計局）</strong> が発行する公的書類です。
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            「セノマー」という呼び方はこの略称（CENOMAR）の音読みで、日本ではよく使われています。
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            この書類は、申請者がフィリピンにおいて<strong>法的に婚姻関係にないことを公的に証明</strong>するものです。フィリピン人が日本人と結婚する際に「独身であること」を証明する書類として必要になります。
          </p>
        </section>

        {/* Section 2: どんな場面で必要か */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 pb-2 border-b-2 border-primary/30">
            CENOMARが必要になる場面
          </h2>
          <div className="space-y-4">
            {[
              {
                num: '1',
                title: '日本の市区町村で婚姻届を提出するとき',
                desc: '日本でフィリピン人との婚姻届を提出する際、フィリピン人パートナーが「独身である」ことを証明する書類が必要です。市区町村窓口の求めに応じて提出します。',
              },
              {
                num: '2',
                title: '配偶者ビザ（在留資格「日本人の配偶者等」）を申請するとき',
                desc: '出入国在留管理庁（入管）に配偶者ビザを申請する際、フィリピン側の書類としてCENOMARの提出を求められる場合があります。',
              },
              {
                num: '3',
                title: '在日フィリピン大使館で「婚姻要件具備証明書（LCCM）」を取得するとき',
                desc: '在日フィリピン大使館でLCCM（Legal Capacity to Contract Marriage）を取得するためにCENOMARが必要です。日本で先に手続きする場合のルートで使います。',
              },
              {
                num: '4',
                title: 'フィリピンで先に婚姻手続きを行うとき（フィリピン挙式）',
                desc: 'フィリピン国内での結婚手続き（フィリピン先行婚姻）でも、独身であることの証明として提出が求められます。',
              },
            ].map((item) => (
              <div key={item.num} className="bg-white rounded-xl p-5 shadow-card flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary text-white text-sm font-bold flex items-center justify-center">
                  {item.num}
                </span>
                <div>
                  <p className="font-bold text-secondary text-sm mb-1">{item.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: 書類の基本情報 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 pb-2 border-b-2 border-primary/30">
            CENOMARの基本情報
          </h2>
          <div className="bg-white rounded-xl overflow-hidden shadow-card">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['正式名称', 'Certificate of No Marriage Record'],
                  ['通称', 'セノマー（CENOMAR）'],
                  ['発行機関', 'PSA（Philippine Statistics Authority）'],
                  ['PSA公式申請費用', '約330〜365ペソ（約1,000円前後）'],
                  ['有効期限の目安', '発行日から6ヶ月（提出先により3ヶ月）'],
                  ['書類の言語', '英語のみ'],
                  ['日本語翻訳', '婚姻届提出時に必要'],
                  ['発行までの期間', '約2〜4週間（PSA処理）＋配送'],
                ].map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <th className="text-left px-4 py-3 font-bold text-secondary w-36 text-xs">{label}</th>
                    <td className="px-4 py-3 text-gray-700">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-amber-800 mb-1">有効期限に注意</p>
              <p className="text-sm text-amber-700 leading-relaxed">
                PSAには法定の有効期限はありませんが、提出先（市区町村・入管）の多くは「発行から6ヶ月以内」を要件としています。手続きが遅れると期限切れになるため、手続き開始の直前に取得するのがベストです。
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: 取得方法3つ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 pb-2 border-b-2 border-primary/30">
            CENOMARの取得方法3つ
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            CENOMARを取得するには、主に3つの方法があります。それぞれのメリット・デメリットを理解して、自分に合った方法を選びましょう。
          </p>

          <div className="space-y-5">
            {/* Method 1 */}
            <div className="bg-white rounded-xl shadow-card overflow-hidden">
              <div className="bg-gray-50 px-5 py-4 border-b border-gray-100">
                <p className="text-xs font-bold text-gray-500 mb-1">方法①</p>
                <h3 className="text-base font-bold text-secondary">自分でPSAオンライン申請</h3>
              </div>
              <div className="px-5 py-4">
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  PSAのオンライン申請サービス（PSAHelpline.ph など）から自分で申請する方法です。日本からでも手続きは可能ですが、すべて英語での手続きになります。
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-bold text-green-700 mb-2">メリット</p>
                    <ul className="space-y-1 text-xs text-gray-600">
                      <li className="flex gap-1.5"><span className="text-green-500">✓</span>費用がPSA手数料のみ</li>
                      <li className="flex gap-1.5"><span className="text-green-500">✓</span>自分のペースで進められる</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-red-700 mb-2">デメリット</p>
                    <ul className="space-y-1 text-xs text-gray-600">
                      <li className="flex gap-1.5"><span className="text-red-400">✗</span>英語サイトの手続きが複雑</li>
                      <li className="flex gap-1.5"><span className="text-red-400">✗</span>入力ミスで書類が使えなくなるリスク</li>
                      <li className="flex gap-1.5"><span className="text-red-400">✗</span>国際配送の時間と費用がかかる</li>
                      <li className="flex gap-1.5"><span className="text-red-400">✗</span>トラブル時はすべて自己対応</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4 text-xs text-gray-500 bg-gray-50 rounded-lg px-3 py-2">
                  <strong>こんな方向け：</strong> 英語が得意で、時間に余裕があり、費用を最小限にしたい方
                </p>
              </div>
            </div>

            {/* Method 2 */}
            <div className="bg-white rounded-xl shadow-card overflow-hidden">
              <div className="bg-gray-50 px-5 py-4 border-b border-gray-100">
                <p className="text-xs font-bold text-gray-500 mb-1">方法②</p>
                <h3 className="text-base font-bold text-secondary">在日フィリピン大使館・領事館を通じた申請</h3>
              </div>
              <div className="px-5 py-4">
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  在日フィリピン大使館（東京）または領事館（大阪・名古屋）でCENOMARの申請手続きをサポートしてもらえます。
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-bold text-green-700 mb-2">メリット</p>
                    <ul className="space-y-1 text-xs text-gray-600">
                      <li className="flex gap-1.5"><span className="text-green-500">✓</span>大使館スタッフが案内してくれる</li>
                      <li className="flex gap-1.5"><span className="text-green-500">✓</span>在日フィリピン人に馴染みがある方法</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-red-700 mb-2">デメリット</p>
                    <ul className="space-y-1 text-xs text-gray-600">
                      <li className="flex gap-1.5"><span className="text-red-400">✗</span>来館予約が必要（数週間待ちになる場合も）</li>
                      <li className="flex gap-1.5"><span className="text-red-400">✗</span>平日のみ対応</li>
                      <li className="flex gap-1.5"><span className="text-red-400">✗</span>書類不備で出直しになるリスク</li>
                      <li className="flex gap-1.5"><span className="text-red-400">✗</span>発行まで時間がかかる</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4 text-xs text-gray-500 bg-gray-50 rounded-lg px-3 py-2">
                  <strong>こんな方向け：</strong> 東京・大阪・名古屋近郊に住んでいる在日フィリピン人の方
                </p>
              </div>
            </div>

            {/* Method 3 */}
            <div className="bg-white rounded-xl shadow-card overflow-hidden border-2 border-primary/30">
              <div className="bg-primary/10 px-5 py-4 border-b border-primary/20">
                <p className="text-xs font-bold text-primary mb-1">方法③　おすすめ</p>
                <h3 className="text-base font-bold text-secondary">取得代行サービスを利用する</h3>
              </div>
              <div className="px-5 py-4">
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  フィリピン書類取得代行センターのような専門業者に依頼する方法です。申請からお届けまですべて日本語でやり取りできます。
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-bold text-green-700 mb-2">メリット</p>
                    <ul className="space-y-1 text-xs text-gray-600">
                      <li className="flex gap-1.5"><span className="text-green-500">✓</span>日本語でのやり取りのみでOK</li>
                      <li className="flex gap-1.5"><span className="text-green-500">✓</span>書類の不備を事前チェック</li>
                      <li className="flex gap-1.5"><span className="text-green-500">✓</span>申請〜発送まで一括対応</li>
                      <li className="flex gap-1.5"><span className="text-green-500">✓</span>トラブル時もプロが対応</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-red-700 mb-2">デメリット</p>
                    <ul className="space-y-1 text-xs text-gray-600">
                      <li className="flex gap-1.5"><span className="text-red-400">✗</span>代行手数料がかかる</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4 text-xs text-gray-500 bg-gray-50 rounded-lg px-3 py-2">
                  <strong>こんな方向け：</strong> 確実・スムーズに取得したい方、英語が不安な方、忙しくて時間がない方
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mid-page CTA */}
        <div className="mb-10 bg-secondary rounded-2xl p-6 md:p-8 text-center">
          <p className="text-sm text-white/80 mb-2">面倒な手続きはすべてお任せください</p>
          <h3 className="text-xl font-bold text-white mb-1">CENOMAR取得、プロに依頼しませんか？</h3>
          <p className="text-sm text-white/70 mb-6">日本語で完結・書類チェックあり・取得実績多数</p>
          <a
            href="#contact"
            onClick={() => trackEvent('cta_click', { location: 'cenomar_guide_mid', type: 'contact' })}
            className="inline-block bg-primary text-white font-bold px-8 py-3 rounded-full hover:bg-primary-hover transition-colors shadow-lg text-sm"
          >
            無料で相談する
          </a>
        </div>

        {/* Section 5: よくあるトラブル */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 pb-2 border-b-2 border-primary/30">
            CENOMARでよくあるトラブルと注意点
          </h2>
          <div className="space-y-4">
            {[
              {
                title: '氏名のスペルミス',
                desc: 'PSAへの申請時に氏名（ローマ字）を誤入力すると、パスポートや戸籍情報と一致せず書類が使えなくなります。再申請には時間と費用がかかるため、入力は慎重に行いましょう。',
              },
              {
                title: 'PSAに婚姻記録が残っている',
                desc: '過去の婚姻歴がPSAに記録されている場合、CENOMARは発行されません。この場合は婚姻無効判決（Annulment）・配偶者の死亡証明書など、状況に応じた追加書類が必要になります。',
              },
              {
                title: '氏名のバリアント（表記ゆれ）問題',
                desc: 'フィリピンでは同一人物でも書類によってスペルが異なる場合（例：「dela Cruz」と「De La Cruz」）があります。PSAの記録と他の書類の名前が一致しない場合、証明が複雑になることがあります。',
              },
              {
                title: '書類の配送遅延',
                desc: 'PSA申請後の国際配送（フィリピン→日本）が想定以上に遅れるケースがあります。特に繁忙期（年末年始・クリスマスシーズン）は要注意です。余裕を持ったスケジュールで申請しましょう。',
              },
              {
                title: '取得後に有効期限が切れてしまう',
                desc: 'CENOMARを取得しても、その後の手続きが遅れて提出時に有効期限切れになるケースがあります。手続き全体のスケジュールを見通した上で、タイミングよく申請することが大切です。',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-5 shadow-card flex gap-4">
                <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-secondary text-sm mb-1">{item.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 pb-2 border-b-2 border-primary/30">
            よくある質問（FAQ）
          </h2>
          <FaqAccordion items={faqItems} />
        </section>

        {/* Bottom internal links */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-secondary mb-4">関連ページ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { href: '/', label: 'サービス一覧・料金を見る', desc: 'CENOMAR・PSA・NBI書類取得代行' },
              { href: '/#contact', label: '無料相談する', desc: '必要書類がわからない方もOK' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="bg-white rounded-xl p-4 shadow-card hover:shadow-soft transition-shadow flex flex-col gap-1 border border-gray-100 hover:border-primary/30"
              >
                <span className="text-sm font-bold text-secondary">{link.label} →</span>
                <span className="text-xs text-gray-500">{link.desc}</span>
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* Contact form (Footer replacement for guide pages) */}
      <ContactForm />
    </div>
  );
}
