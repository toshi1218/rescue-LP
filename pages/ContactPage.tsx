import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, Mail, Clock, MessageSquare, CheckCircle, AlertCircle, Loader2, ChevronDown, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getCtaVariant, getTrafficSource, trackEvent } from '../lib/analytics';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mojqlqnd';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': 'https://ph-document.com/contact/',
      url: 'https://ph-document.com/contact/',
      name: 'お問い合わせ｜フィリピン書類取得代行センター',
      description: 'フィリピン書類取得代行・国際結婚・配偶者ビザに関するご相談・お問い合わせはこちらから。平日9:00〜18:00、翌営業日以内に返信します。',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://ph-document.com/' },
          { '@type': 'ListItem', position: 2, name: 'お問い合わせ', item: 'https://ph-document.com/contact/' },
        ],
      },
    },
    {
      '@type': 'Organization',
      '@id': 'https://ph-document.com/#organization',
      name: 'フィリピン書類取得代行センター',
      url: 'https://ph-document.com/',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: 'igrs20200601@gmail.com',
        availableLanguage: 'Japanese',
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
      },
    },
  ],
};

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const faqs = [
  {
    q: '相談は本当に無料ですか？',
    a: 'はい、お問い合わせ・ご相談は完全無料です。必要書類のご案内や費用の概算をお伝えするまで、一切費用はかかりません。',
  },
  {
    q: '返信にどれくらいかかりますか？',
    a: '原則として翌営業日（平日）以内にご返信します。土日祝日のお問い合わせは翌営業日の対応となります。緊急の場合はその旨をメッセージにご記入ください。',
  },
  {
    q: 'どの書類が必要かわからないのですが相談できますか？',
    a: 'むしろそういった方が大半です。「国際結婚の手続きをしたい」「配偶者ビザを申請したい」など、目的をお伝えいただければ、必要書類と手順を丁寧にご説明します。',
  },
  {
    q: '日本にいながら依頼できますか？',
    a: 'はい、完全リモートで対応可能です。やり取りはすべてメール・フォームで行い、書類は国際郵便で日本のご自宅に転送します。フィリピンへの渡航は不要です。',
  },
  {
    q: '依頼してからどのくらいで書類が届きますか？',
    a: '書類の種類によって異なりますが、PSA・NBI・LTO関連はおおよそ4週間が目安です。フィリピン政府機関の処理状況によって前後する場合があります。お急ぎの場合はご相談ください。',
  },
  {
    q: '英語が話せなくても大丈夫ですか？',
    a: 'もちろんです。弊社とのやり取りはすべて日本語で行います。フィリピン機関とのやり取りは弊社スタッフが英語・タガログ語で代行します。',
  },
  {
    q: '見積もりを先に確認できますか？',
    a: 'はい、ご相談後に費用の概算をお伝えします。お見積もりにご納得いただいてから正式なご依頼となりますので、ご安心ください。',
  },
  {
    q: '複数の書類をまとめて依頼できますか？',
    a: 'はい、対応可能です。国際結婚パックのように複数書類をセットにしたプランもあります。状況に応じてまとめてご対応します。',
  },
];

const steps = [
  { step: '01', title: 'フォーム送信', desc: 'お名前・メール・ご相談内容を送信してください。' },
  { step: '02', title: 'ヒアリング・ご提案', desc: '翌営業日以内に返信。必要書類と費用をご案内します。' },
  { step: '03', title: 'お見積もり確認', desc: '費用・納期にご納得いただけたら正式にご依頼。' },
  { step: '04', title: '書類取得・転送', desc: 'フィリピン機関に申請し、取得後日本へ転送します。' },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const ctaVariant = getCtaVariant();
  const trafficSource = getTrafficSource();
  const [status, setStatus] = useState<FormStatus>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
        trackEvent('form_submit', {
          location: 'contact_page',
          type: 'formspree',
          variant: ctaVariant,
          traffic_source: trafficSource,
        });
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

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
          <span className="text-gray-600">お問い合わせ</span>
        </nav>

        <h1 className="text-2xl font-bold text-secondary mb-2">お問い合わせ</h1>
        <p className="text-sm text-gray-500 mb-8">
          どの書類が必要かわからない方も、まずはお気軽にご相談ください。<br />
          <span className="text-primary font-bold">相談・お見積もりは完全無料</span>です。翌営業日以内にご返信します。
        </p>

        {/* 連絡手段 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {[
            { icon: MessageSquare, title: 'フォームで相談', desc: '24時間受付。翌営業日以内にご返信します。', highlight: true },
            { icon: Mail, title: 'メールで相談', desc: 'igrs20200601@gmail.com\nそのままメーラーで送信できます。', highlight: false },
            { icon: Clock, title: '対応時間', desc: '平日 9:00〜18:00（日本時間）\n土日祝はメールのみ対応', highlight: false },
          ].map(({ icon: Icon, title, desc, highlight }) => (
            <div
              key={title}
              className={`rounded-xl p-4 border text-center ${highlight ? 'bg-secondary/5 border-secondary/20' : 'bg-white border-gray-100'} shadow-card`}
            >
              <div className="flex justify-center mb-2">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center ${highlight ? 'bg-secondary text-white' : 'bg-gray-100 text-gray-500'}`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>
              <p className="font-bold text-secondary text-sm mb-1">{title}</p>
              <p className="text-xs text-gray-500 whitespace-pre-line leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* よくあるご相談 */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-secondary mb-3">よくあるご相談</h2>
          <p className="text-xs text-gray-500 mb-4">以下のような内容でご相談いただく方が多いです。</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { icon: '💍', title: '国際結婚の書類を準備したい', desc: 'CENOMAR・PSA出生証明書など婚姻届に必要な書類を一式取得したい' },
              { icon: '🛂', title: '配偶者ビザを申請したい', desc: '日本の入管へのビザ申請に必要な書類の準備・サポートを依頼したい' },
              { icon: '🚗', title: 'フィリピン免許を日本免許に切替えたい', desc: 'LTO書類（免許・トランザクション記録）を取得したい' },
              { icon: '📋', title: 'NBI Clearanceが必要', desc: '就職・ビザ・帰化申請のためにNBI無犯罪証明書を取得したい' },
              { icon: '📄', title: '翻訳・アポスティーユが必要', desc: 'PSA書類のDFAアポスティーユ認証や日本語翻訳が必要' },
              { icon: '🏢', title: 'フィリピンへの企業進出', desc: 'フィリピンへの法人設立・進出に関する手続きサポートを依頼したい' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white border border-gray-100 rounded-xl p-4 shadow-card flex gap-3">
                <span className="text-xl flex-shrink-0">{icon}</span>
                <div>
                  <p className="font-bold text-secondary text-xs mb-0.5">{title}</p>
                  <p className="text-[11px] text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* お問い合わせフォーム */}
        <div className="bg-white rounded-2xl shadow-card border border-gray-100 p-6 md:p-8 mb-10">
          <h2 className="text-lg font-bold text-secondary mb-1">お問い合わせフォーム</h2>
          <p className="text-xs text-gray-400 mb-6">※相談・見積もりは無料です</p>

          {/* 送信完了 */}
          {status === 'success' && (
            <div className="flex flex-col items-center gap-4 py-10 text-center" role="alert" aria-live="polite">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <div>
                <p className="font-bold text-secondary text-base mb-1">送信が完了しました</p>
                <p className="text-sm text-gray-500">
                  内容を確認のうえ、原則翌営業日以内にご返信します。<br />
                  しばらくお待ちください。
                </p>
              </div>
              <button
                onClick={() => setStatus('idle')}
                className="text-xs text-primary underline hover:no-underline"
              >
                もう一件送る
              </button>
            </div>
          )}

          {/* 送信エラー */}
          {status === 'error' && (
            <div className="mb-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4" role="alert" aria-live="polite">
              <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-bold text-red-700 mb-1">送信に失敗しました</p>
                <p className="text-red-600">
                  お手数ですが、直接メールでご連絡ください：
                  <a href="mailto:igrs20200601@gmail.com" className="underline ml-1">igrs20200601@gmail.com</a>
                </p>
              </div>
            </div>
          )}

          {/* フォーム本体（成功時は非表示） */}
          {status !== 'success' && (
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
              aria-label="お問い合わせフォーム"
            >
              <input type="hidden" name="_subject" value="【LPお問い合わせ】フィリピン書類取得代行" />
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
              <input type="hidden" name="cta_variant" value={ctaVariant} />
              <input type="hidden" name="traffic_source" value={trafficSource} />
              <input type="hidden" name="landing_page" value="https://ph-document.com/contact/" />

              <div>
                <label htmlFor="name" className="block text-xs font-medium text-gray-600 mb-1">
                  お名前 <span className="text-red-400">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="山田 太郎"
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-medium text-gray-600 mb-1">
                  メールアドレス <span className="text-red-400">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="example@email.com"
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="inquiry_type" className="block text-xs font-medium text-gray-600 mb-1">
                  お問い合わせ種別
                </label>
                <select
                  id="inquiry_type"
                  name="inquiry_type"
                  className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white"
                >
                  <option value="">選択してください</option>
                  <option value="cenomar">CENOMAR（独身証明書）</option>
                  <option value="psa">PSA出生証明書 / 婚姻証明書</option>
                  <option value="nbi">NBI無犯罪証明書</option>
                  <option value="apostille">DFAアポスティーユ認証</option>
                  <option value="kokusai_kekkon">国際結婚サポート</option>
                  <option value="visa">配偶者ビザ</option>
                  <option value="lto">外免切替（LTO書類）</option>
                  <option value="other">その他・複数書類</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-gray-600 mb-1">
                  ご相談内容 <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="必要な書類、用途、希望納期などをご記入ください。「何が必要かわからない」でも大丈夫です。"
                  aria-required="true"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg hover:bg-primary-hover transition-all flex items-center justify-center gap-3 focus:outline-none focus:ring-4 focus:ring-primary/30 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    送信中...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    送信する（無料）
                  </>
                )}
              </button>
            </form>
          )}

          {status !== 'success' && (
            <a
              href="mailto:igrs20200601@gmail.com"
              onClick={() => trackEvent('cta_click', { location: 'contact_page', type: 'mailto_fallback' })}
              className="mt-4 inline-flex items-center gap-2 text-xs text-gray-500 hover:text-secondary transition-colors"
            >
              <Mail className="w-4 h-4" />
              メールで直接送る: igrs20200601@gmail.com
            </a>
          )}
        </div>

        {/* 問い合わせ後の流れ */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-secondary mb-4">お問い合わせ後の流れ</h2>
          <div className="space-y-3">
            {steps.map(({ step, title, desc }) => (
              <div key={step} className="flex gap-4 items-start bg-white rounded-xl p-4 shadow-card border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center flex-shrink-0">
                  {step}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-secondary text-sm">{title}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
                </div>
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-secondary mb-4">よくある質問</h2>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-card overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-5 py-4 flex justify-between items-center"
                  aria-expanded={openFaq === i}
                >
                  <span className="text-sm font-medium text-secondary">Q. {faq.q}</span>
                  {openFaq === i
                    ? <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                    : <ChevronRight className="w-4 h-4 text-gray-400 shrink-0" />}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 料金ページへ誘導 */}
        <div className="bg-secondary/5 border border-secondary/20 rounded-2xl p-5 flex items-center gap-4">
          <div className="flex-1">
            <p className="text-sm font-bold text-secondary mb-1">料金が気になる方へ</p>
            <p className="text-xs text-gray-600">各プランの料金・納期・含まれるサービスを詳しくご覧いただけます。</p>
          </div>
          <Link
            to="/pricing"
            className="flex-shrink-0 inline-flex items-center gap-1 text-xs font-bold text-secondary hover:text-primary transition-colors"
          >
            料金を見る <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
