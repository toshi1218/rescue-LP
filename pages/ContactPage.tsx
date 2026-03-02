import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Send, Mail, Clock, MessageSquare, CheckCircle, AlertCircle, Loader2, ChevronDown, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getCtaVariant, getTrafficSource, trackEvent } from '../lib/analytics';
import { useLanguage } from '../lib/i18n';
import { useMeta } from '../lib/useMeta';

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
        availableLanguage: ['Japanese', 'English'],
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

export default function ContactPage() {
  const { lang } = useLanguage();
  const t = (ja: string, en: string) => lang === 'ja' ? ja : en;

  useMeta(
    t('お問い合わせ｜フィリピン書類取得代行センター', 'Contact Us | Philippine Document Service'),
    t(
      'フィリピン書類取得代行・国際結婚・配偶者ビザに関するご相談・お問い合わせはこちらから。平日9:00〜18:00、翌営業日以内に返信します。',
      'Contact us for Philippine document procurement, international marriage, and spouse visa inquiries. We reply within 1 business day.'
    )
  );

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const ctaVariant = getCtaVariant();
  const trafficSource = getTrafficSource();
  const [status, setStatus] = useState<FormStatus>('idle');


  const faqs = [
    {
      q: t('相談は本当に無料ですか？', 'Is the consultation really free?'),
      a: t(
        'はい、お問い合わせ・ご相談は完全無料です。必要書類のご案内や費用の概算をお伝えするまで、一切費用はかかりません。',
        'Yes, all inquiries and consultations are completely free. There is no charge until we provide you with document guidance and a cost estimate.'
      ),
    },
    {
      q: t('返信にどれくらいかかりますか？', 'How quickly will you reply?'),
      a: t(
        '原則として翌営業日（平日）以内にご返信します。土日祝日のお問い合わせは翌営業日の対応となります。緊急の場合はその旨をメッセージにご記入ください。',
        'We reply within the next business day (weekdays) as a rule. Inquiries received on weekends or holidays will be handled on the next business day. Please note in your message if the matter is urgent.'
      ),
    },
    {
      q: t('どの書類が必要かわからないのですが相談できますか？', 'Can I consult even if I don\'t know which documents I need?'),
      a: t(
        'むしろそういった方が大半です。「国際結婚の手続きをしたい」「配偶者ビザを申請したい」など、目的をお伝えいただければ、必要書類と手順を丁寧にご説明します。',
        'In fact, most of our clients are in that situation. Just tell us your goal — "I want to get married internationally" or "I want to apply for a spouse visa" — and we will explain the required documents and steps in detail.'
      ),
    },
    {
      q: t('日本にいながら依頼できますか？', 'Can I place an order from Japan?'),
      a: t(
        'はい、完全リモートで対応可能です。やり取りはすべてメール・フォームで行い、書類は国際郵便で日本のご自宅に転送します。フィリピンへの渡航は不要です。',
        'Yes, we handle everything remotely. All communication is done by email or form, and documents are forwarded to your home in Japan by international mail. No travel to the Philippines is required.'
      ),
    },
    {
      q: t('依頼してからどのくらいで書類が届きますか？', 'How long does it take for the documents to arrive?'),
      a: t(
        '書類の種類によって異なりますが、PSA・NBI・LTO関連はおおよそ4〜6週間が目安です（PSA取得2〜3週間＋DFAアポスティーユ約2週間＋国際配送3〜5営業日）。フィリピン政府機関の処理状況によって前後する場合があります。お急ぎの場合はご相談ください。',
        'It varies by document type, but PSA, NBI, and LTO-related documents typically take about 4–6 weeks (PSA acquisition 2–3 weeks + DFA Apostille approx. 2 weeks + international shipping 3–5 business days). This may vary depending on the processing status of Philippine government agencies. Please contact us if you are in a hurry.'
      ),
    },
    {
      q: t('英語が話せなくても大丈夫ですか？', 'Is it okay if I don\'t speak English?'),
      a: t(
        'もちろんです。弊社とのやり取りはすべて日本語で行います。フィリピン機関とのやり取りは弊社スタッフが英語・タガログ語で代行します。',
        'Of course. All communication with us is conducted in English. Our staff handle all communication with Philippine agencies in English and Filipino.'
      ),
    },
    {
      q: t('見積もりを先に確認できますか？', 'Can I review the estimate before committing?'),
      a: t(
        'はい、ご相談後に費用の概算をお伝えします。お見積もりにご納得いただいてから正式なご依頼となりますので、ご安心ください。',
        'Yes, we will provide a cost estimate after your consultation. You can review it before making a formal request, so please feel free to inquire.'
      ),
    },
    {
      q: t('複数の書類をまとめて依頼できますか？', 'Can I order multiple documents at once?'),
      a: t(
        'はい、対応可能です。国際結婚パックのように複数書類をセットにしたプランもあります。状況に応じてまとめてご対応します。',
        'Yes, we can handle multiple documents at once. We also offer package plans such as the International Marriage Package. We will handle everything according to your situation.'
      ),
    },
  ];

  const steps = [
    {
      step: '01',
      title: t('フォーム送信', 'Submit Form'),
      desc: t('お名前・メール・ご相談内容を送信してください。', 'Send us your name, email address, and inquiry details.'),
    },
    {
      step: '02',
      title: t('ヒアリング・ご提案', 'Consultation & Proposal'),
      desc: t('翌営業日以内に返信。必要書類と費用をご案内します。', 'We reply within the next business day with required documents and costs.'),
    },
    {
      step: '03',
      title: t('お見積もり確認', 'Review Estimate'),
      desc: t('費用・納期にご納得いただけたら正式にご依頼。', 'Once you are satisfied with the cost and timeline, place a formal order.'),
    },
    {
      step: '04',
      title: t('書類取得・転送', 'Document Retrieval & Delivery'),
      desc: t('フィリピン機関に申請し、取得後日本へ転送します。', 'We apply to Philippine agencies and forward the documents to Japan after retrieval.'),
    },
  ];

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
        <nav className="text-xs text-gray-400 mb-6" aria-label={t('パンくずリスト', 'Breadcrumb')}>
          <Link to="/" className="hover:text-secondary">{t('ホーム', 'Home')}</Link>
          <span className="mx-1">/</span>
          <span className="text-gray-600">{t('お問い合わせ', 'Contact')}</span>
        </nav>

        <h1 className="text-2xl font-bold text-secondary mb-2">{t('お問い合わせ', 'Contact Us')}</h1>
        <p className="text-sm text-gray-500 mb-8">
          {t(
            'どの書類が必要かわからない方も、まずはお気軽にご相談ください。',
            'Not sure which documents you need? Feel free to reach out anytime.'
          )}<br />
          <span className="text-primary font-bold">
            {t('相談・お見積もりは完全無料', 'Consultations & Estimates Are Completely Free')}
          </span>
          {t('です。翌営業日以内にご返信します。', '. We reply within the next business day.')}
        </p>

        {/* 連絡手段 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {[
            {
              icon: MessageSquare,
              title: t('フォームで相談', 'Contact via Form'),
              desc: t('24時間受付。翌営業日以内にご返信します。', '24/7 reception. We reply within the next business day.'),
              highlight: true,
            },
            {
              icon: Mail,
              title: t('メールで相談', 'Contact via Email'),
              desc: 'igrs20200601@gmail.com\n' + t('そのままメーラーで送信できます。', 'Send directly from your email client.'),
              highlight: false,
            },
            {
              icon: Clock,
              title: t('対応時間', 'Business Hours'),
              desc: t('平日 9:00〜18:00（日本時間）\n土日祝はメールのみ対応', 'Weekdays 9:00–18:00 (JST)\nEmail only on weekends & holidays'),
              highlight: false,
            },
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
          <h2 className="text-lg font-bold text-secondary mb-3">{t('よくあるご相談', 'Common Inquiries')}</h2>
          <p className="text-xs text-gray-500 mb-4">{t('以下のような内容でご相談いただく方が多いです。', 'These are the most common topics our clients contact us about.')}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              {
                icon: '💍',
                title: t('国際結婚の書類を準備したい', 'Prepare documents for international marriage'),
                desc: t('CENOMAR・PSA出生証明書など婚姻届に必要な書類を一式取得したい', 'Obtain all required documents such as CENOMAR and PSA Birth Certificate for marriage registration'),
              },
              {
                icon: '🛂',
                title: t('配偶者ビザを申請したい', 'Apply for a spouse visa'),
                desc: t('日本の入管へのビザ申請に必要な書類の準備・サポートを依頼したい', 'Prepare and support documents required for visa application to Japanese immigration'),
              },
              {
                icon: '🚗',
                title: t('フィリピン免許を日本免許に切替えたい', 'Convert Philippine license to Japanese license'),
                desc: t('LTO書類（免許・トランザクション記録）を取得したい', 'Obtain LTO documents (license and transaction records)'),
              },
              {
                icon: '📋',
                title: t('NBI Clearanceが必要', 'Need NBI Clearance'),
                desc: t('就職・ビザ・帰化申請のためにNBI無犯罪証明書を取得したい', 'Obtain NBI Clearance for employment, visa, or naturalization application'),
              },
              {
                icon: '📄',
                title: t('アポスティーユが必要', 'Need Apostille'),
                desc: t('PSA書類のDFAアポスティーユ認証が必要', 'Need DFA Apostille authentication for PSA documents'),
              },
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
          <h2 className="text-lg font-bold text-secondary mb-1">{t('お問い合わせフォーム', 'Contact Form')}</h2>
          <p className="text-xs text-gray-400 mb-6">※{t('相談・見積もりは無料です', 'Consultation and estimates are free')}</p>

          {/* 送信完了 */}
          {status === 'success' && (
            <div className="flex flex-col items-center gap-4 py-10 text-center" role="alert" aria-live="polite">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <div>
                <p className="font-bold text-secondary text-base mb-1">{t('送信が完了しました', 'Message Sent Successfully')}</p>
                <p className="text-sm text-gray-500">
                  {t(
                    '内容を確認のうえ、原則翌営業日以内にご返信します。\nしばらくお待ちください。',
                    'We will review your message and reply within the next business day.\nPlease wait a moment.'
                  )}
                </p>
              </div>
              <button
                onClick={() => setStatus('idle')}
                className="text-xs text-primary underline hover:no-underline"
              >
                {t('もう一件送る', 'Send another message')}
              </button>
            </div>
          )}

          {/* 送信エラー */}
          {status === 'error' && (
            <div className="mb-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4" role="alert" aria-live="polite">
              <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-bold text-red-700 mb-1">{t('送信に失敗しました', 'Failed to send')}</p>
                <p className="text-red-600">
                  {t('お手数ですが、直接メールでご連絡ください：', 'Please contact us directly by email:')}
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
              aria-label={t('お問い合わせフォーム', 'Contact Form')}
            >
              <input type="hidden" name="_subject" value="【LPお問い合わせ】フィリピン書類取得代行" />
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
              <input type="hidden" name="cta_variant" value={ctaVariant} />
              <input type="hidden" name="traffic_source" value={trafficSource} />
              <input type="hidden" name="landing_page" value="https://ph-document.com/contact/" />

              <div>
                <label htmlFor="name" className="block text-xs font-medium text-gray-600 mb-1">
                  {t('お名前', 'Name')} <span className="text-red-400">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder={t('山田 太郎', 'John Smith')}
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-medium text-gray-600 mb-1">
                  {t('メールアドレス', 'Email Address')} <span className="text-red-400">*</span>
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
                  {t('お問い合わせ種別', 'Inquiry Type')}
                </label>
                <select
                  id="inquiry_type"
                  name="inquiry_type"
                  className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white"
                >
                  <option value="">{t('選択してください', 'Please select')}</option>
                  <option value="cenomar">{t('CENOMAR（独身証明書）', 'CENOMAR (Certificate of No Marriage)')}</option>
                  <option value="psa">{t('PSA出生証明書 / 婚姻証明書', 'PSA Birth / Marriage Certificate')}</option>
                  <option value="nbi">{t('NBI無犯罪証明書', 'NBI Clearance')}</option>
                  <option value="apostille">{t('DFAアポスティーユ認証', 'DFA Apostille Authentication')}</option>
                  <option value="kokusai_kekkon">{t('国際結婚サポート', 'International Marriage Support')}</option>
                  <option value="visa">{t('配偶者ビザ', 'Spouse Visa')}</option>
                  <option value="lto">{t('外免切替（LTO書類）', 'License Transfer (LTO Documents)')}</option>
                  <option value="other">{t('その他・複数書類', 'Other / Multiple Documents')}</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-gray-600 mb-1">
                  {t('ご相談内容', 'Message')} <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder={t(
                    '必要な書類、用途、希望納期などをご記入ください。「何が必要かわからない」でも大丈夫です。',
                    'Please describe the documents you need, their purpose, and preferred timeline. "I\'m not sure what I need" is perfectly fine.'
                  )}
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
                    {t('送信中...', 'Sending...')}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {t('送信する（無料）', 'Send (Free)')}
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
              {t('メールで直接送る: igrs20200601@gmail.com', 'Send directly by email: igrs20200601@gmail.com')}
            </a>
          )}
        </div>

        {/* 問い合わせ後の流れ */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-secondary mb-4">{t('お問い合わせ後の流れ', 'What Happens After You Contact Us')}</h2>
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
          <h2 className="text-lg font-bold text-secondary mb-4">{t('よくある質問', 'Frequently Asked Questions')}</h2>
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
            <p className="text-sm font-bold text-secondary mb-1">{t('料金が気になる方へ', 'Interested in Pricing?')}</p>
            <p className="text-xs text-gray-600">{t('各プランの料金・納期・含まれるサービスを詳しくご覧いただけます。', 'View detailed pricing, timelines, and included services for each plan.')}</p>
          </div>
          <Link
            to={lang === 'ja' ? '/ja/ryokin/' : '/pricing/'}
            className="flex-shrink-0 inline-flex items-center gap-1 text-xs font-bold text-secondary hover:text-primary transition-colors"
          >
            {t('料金を見る', 'View Pricing')} <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
