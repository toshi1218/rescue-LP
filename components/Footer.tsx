import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Send } from 'lucide-react';
import { getCtaVariant, getTrafficSource, trackEvent } from '../lib/analytics';
import { useLanguage } from '../lib/i18n';
import LineIcon from './icons/LineIcon';
import WhatsAppIcon from './icons/WhatsAppIcon';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

const Footer: React.FC = () => {
  const ctaVariant = getCtaVariant();
  const trafficSource = getTrafficSource();
  const { lang, t } = useLanguage();
  const [service, setService] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [referral, setReferral] = useState('');
  const [referralError, setReferralError] = useState('');
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handler = (e: Event) => setService((e as CustomEvent<string>).detail);
    window.addEventListener('setContactService', handler);
    return () => window.removeEventListener('setContactService', handler);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailInput = (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value.trim();
    if (!emailInput) {
      setEmailError(lang === 'ja' ? 'メールアドレスは必須です。' : 'Email address is required.');
      return;
    }
    setEmailError('');
    if (!referral) {
      setReferralError(lang === 'ja' ? '選択してください。' : 'Please select an option.');
      return;
    }
    setReferralError('');
    setSubmitting(true);
    setSubmitError('');
    try {
      const form = e.currentTarget;
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      const data = await res.json();
      if (res.ok && data.success) {
        trackEvent('form_submit_success', { location: 'contact', type: 'web3forms', variant: ctaVariant, traffic_source: trafficSource, service, lang, page_path: window.location.pathname });
        setSubmitted(true);
      } else {
        trackEvent('form_submit_error', { location: 'contact', type: 'web3forms', variant: ctaVariant, traffic_source: trafficSource, lang });
        setSubmitError(lang === 'ja' ? '送信に失敗しました。しばらく経ってから再度お試しください。' : 'Submission failed. Please try again later.');
      }
    } catch {
      trackEvent('form_submit_error', { location: 'contact', type: 'web3forms', variant: ctaVariant, traffic_source: trafficSource, lang });
      setSubmitError(lang === 'ja' ? '送信に失敗しました。しばらく経ってから再度お試しください。' : 'Submission failed. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };
  const isJa = lang === 'ja';
  const companyPath = isJa ? '/ja/company/'  : '/en/company/';
  const privacyPath = isJa ? '/ja/privacy/'  : '/en/privacy/';
  const termsPath   = isJa ? '/ja/terms/'    : '/en/terms/';
  const pricingPath = isJa ? '/ja/ryokin/'   : '/en/pricing/';
  const contactPath = isJa ? '/ja/contact/'  : '/en/contact/';
  const tokushoPath = '/ja/tokusho/';

  return (
    <footer className="bg-white" id="contact">
      {/* Gradient hero header */}
      <div className="relative bg-secondary overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -right-24 -top-24 w-80 h-80 bg-primary rounded-full blur-[120px] opacity-15" />
          <div className="absolute -left-24 -bottom-24 w-80 h-80 bg-primary rounded-full blur-[120px] opacity-10" />
          <div className="absolute inset-0 opacity-[0.025]" style={{backgroundImage: 'radial-gradient(circle, #d69e2e 1px, transparent 1px)', backgroundSize: '28px 28px'}} />
        </div>
        <div className="relative max-w-md md:max-w-xl mx-auto px-6 py-12 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold mb-4 tracking-wider border border-primary/30">
            Contact
          </span>
          <h3 className="text-2xl font-bold text-white mb-2">{t('footer.title')}</h3>
          <p className="text-sm text-white/70 whitespace-pre-line">
            {t('footer.subtitle')}
          </p>
        </div>
      </div>

      <div className="py-10 max-w-md md:max-w-xl mx-auto px-6 text-center">

        {/* Pre-form trust info */}
        {!submitted && (
          <div className="mb-6 text-left bg-gray-50 rounded-xl p-4 border border-gray-100">
            <h4 className="font-bold text-secondary text-sm mb-2">
              {isJa ? 'ご相談の流れ' : 'How It Works'}
            </h4>
            <ol className="space-y-1 text-gray-600 text-xs list-none">
              {isJa ? (
                <>
                  <li>1. フォームに状況を記入（書類名・手続き名が不明でもOK）</li>
                  <li>2. 24時間以内にメールでご返信</li>
                  <li>3. 必要書類・お見積もりをご提示</li>
                  <li>4. ご納得いただけたら着手（見積り段階のキャンセル無料）</li>
                </>
              ) : (
                <>
                  <li>1. Fill in the form (no need to know exact document names)</li>
                  <li>2. We reply by email within 24 hours</li>
                  <li>3. We confirm required documents and quote</li>
                  <li>4. Proceed when you are ready (free cancellation at quote stage)</li>
                </>
              )}
            </ol>
            <p className="text-xs text-gray-500 mt-2 border-t border-gray-200 pt-2">
              {isJa
                ? '※ ご提供いただいた個人情報は、ご相談・書類取得業務のみに使用します。第三者への提供は行いません。'
                : '* Your information is used solely for this inquiry and document procurement. We do not share it with third parties.'}
            </p>
            <p className="text-xs text-gray-500 mt-1.5">
              {isJa
                ? '💳 お支払い: Visa · Mastercard · Amex · Apple Pay · Google Pay（Stripe）'
                : '💳 Pay by credit card — Visa · Mastercard · Amex · Apple Pay · Google Pay'}
            </p>
          </div>
        )}

        {submitted ? (
          <div role="status" aria-live="polite" className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
            <p className="text-2xl mb-2">✅</p>
            <p className="font-bold text-green-700 text-sm mb-1">
              {lang === 'ja' ? 'お問い合わせを受け付けました' : 'Your message has been received!'}
            </p>
            <p className="text-xs text-gray-600 mb-3">
              {lang === 'ja' ? '24時間以内にメールでご連絡します。' : 'We will reply by email within 24 hours.'}
            </p>
            <div className="text-xs text-gray-500 bg-white border border-gray-100 rounded-lg p-3 text-left space-y-1 mb-3">
              {lang === 'ja' ? (
                <>
                  <p>• 返信が届かない場合は<span className="font-semibold">迷惑メール・スパムフォルダ</span>をご確認ください。</p>
                  <p>• 24時間以内に返信がない場合は直接ご連絡ください：<a href="mailto:igrs20200601@gmail.com" className="font-semibold text-primary hover:underline">igrs20200601@gmail.com</a></p>
                </>
              ) : (
                <>
                  <p>• Please also check your <span className="font-semibold">spam / junk folder</span>.</p>
                  <p>• No reply within 24 hours? Email us directly: <a href="mailto:igrs20200601@gmail.com" className="font-semibold text-primary hover:underline">igrs20200601@gmail.com</a></p>
                </>
              )}
            </div>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="text-xs text-primary hover:text-secondary font-medium transition-colors"
            >
              {lang === 'ja' ? '別の内容で再度お問い合わせ' : 'Send another inquiry'}
            </button>
          </div>
        ) : (
        <form
          className="space-y-3 text-left"
          onSubmit={handleSubmit}
          aria-label={t('footer.formAriaLabel')}
          noValidate
        >
          <input type="hidden" name="access_key" value={lang === 'en' ? 'b66fdc64-e552-4ae7-bac2-8ba747bfa77a' : 'c964e168-b5bd-4aa1-a1a4-fb0a4439bbb0'} />
          <input type="hidden" name="subject" value={isJa ? '【LPお問い合わせ】フィリピン書類取得代行' : '[Philippine Document Service Inquiry - EN]'} />
          <input type="text" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
          <input type="hidden" name="cta_variant" value={ctaVariant} />
          <input type="hidden" name="traffic_source" value={trafficSource} />
          <input type="hidden" name="landing_page" value="https://ph-document.com/" />

          <div>
            <label htmlFor="footer-name" className="block text-sm text-gray-600 mb-1">{t('footer.nameLabel')}</label>
            <input
              id="footer-name"
              name="name"
              required
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder={t('footer.namePlaceholder')}
              aria-required="true"
            />
          </div>

          <div>
            <label htmlFor="footer-email" className="block text-sm text-gray-600 mb-1">
              {t('footer.emailLabel')} <span className="text-red-500">*</span>
            </label>
            <input
              id="footer-email"
              type="email"
              name="email"
              required
              onChange={() => setEmailError('')}
              className={`w-full rounded-lg border px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 ${emailError ? 'border-red-400' : 'border-gray-200'}`}
              placeholder={t('footer.emailPlaceholder')}
              aria-required="true"
            />
            {emailError && <p className="mt-1 text-xs text-red-500">{emailError}</p>}
          </div>

          <div>
            <label htmlFor="footer-country" className="block text-sm text-gray-600 mb-1">
              {t('footer.countryLabel')} <span className="text-red-400" aria-hidden="true">*</span>
            </label>
            <input
              id="footer-country"
              name="country"
              required
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder={t('footer.countryPlaceholder')}
              aria-required="true"
            />
          </div>

          <div>
            <label htmlFor="footer-service" className="block text-sm text-gray-600 mb-1">
              {isJa ? 'ご相談の目的' : 'Purpose'} <span className="text-red-400" aria-hidden="true">*</span>
            </label>
            <select
              id="footer-service"
              name="service"
              required
              value={service}
              onChange={e => setService(e.target.value)}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white"
              aria-required="true"
            >
              <option value="">{isJa ? '目的を選択してください' : 'Select purpose'}</option>
              {isJa ? (
                <>
                  <option value="国際結婚">国際結婚</option>
                  <option value="配偶者ビザ">配偶者ビザ</option>
                  <option value="免許切り替え">免許切り替え</option>
                  <option value="帰化申請">帰化申請</option>
                  <option value="個別ロードマップ作成">個別ロードマップ作成</option>
                  <option value="書類取得のみ（PSA・CENOMAR・NBI・LTO等）">書類取得のみ（PSA・CENOMAR・NBI・LTO等）</option>
                  <option value="その他・不明">その他・わからない</option>
                </>
              ) : (
                <>
                  <option value="International Marriage">International Marriage</option>
                  <option value="Spouse Visa">Spouse Visa</option>
                  <option value="License Transfer">License Transfer</option>
                  <option value="Naturalization">Naturalization</option>
                  <option value="Custom Roadmap">Custom Roadmap</option>
                  <option value="Other">Other</option>
                </>
              )}
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              {isJa ? '当社をどこでお知りになりましたか？' : 'How did you find us?'} <span className="text-red-400" aria-hidden="true">*</span>
            </label>
            <select
              name="referral_source"
              value={referral}
              onChange={e => { setReferral(e.target.value); setReferralError(''); }}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white"
            >
              <option value="">{isJa ? '選択してください' : 'Select…'}</option>
              {isJa ? (
                <>
                  <option value="Google検索">Google検索</option>
                  <option value="ChatGPT">ChatGPT</option>
                  <option value="Claude（Anthropic）">Claude（Anthropic）</option>
                  <option value="Gemini（Google AI）">Gemini（Google AI）</option>
                  <option value="SNS（Instagram / X / Facebook）">SNS（Instagram / X / Facebook）</option>
                  <option value="note / ブログ記事">note / ブログ記事</option>
                  <option value="知人・紹介">知人・紹介</option>
                  <option value="その他">その他</option>
                </>
              ) : (
                <>
                  <option value="Google Search">Google Search</option>
                  <option value="ChatGPT">ChatGPT</option>
                  <option value="Claude (Anthropic)">Claude (Anthropic)</option>
                  <option value="Gemini (Google AI)">Gemini (Google AI)</option>
                  <option value="Social Media (Instagram / X / Facebook)">Social Media (Instagram / X / Facebook)</option>
                  <option value="Blog / Article">Blog / Article</option>
                  <option value="Friend / Referral">Friend / Referral</option>
                  <option value="Other">Other</option>
                </>
              )}
            </select>
            {referral === (isJa ? 'その他' : 'Other') && (
              <input
                type="text"
                name="referral_source_detail"
                placeholder={isJa ? 'よろしければ詳しく教えてください' : 'Please tell us more (optional)'}
                className="mt-2 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                maxLength={100}
              />
            )}
            {referralError && <p className="mt-1 text-xs text-red-500">{referralError}</p>}
          </div>

          <div>
            <label htmlFor="footer-message" className="block text-sm text-gray-600 mb-1">
              {t('footer.messageLabel')}
              <span className="text-gray-400 text-xs ml-1">{isJa ? '（任意）' : '(optional)'}</span>
            </label>
            <textarea
              id="footer-message"
              name="message"
              rows={3}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder={t('footer.messagePlaceholder')}
            />
          </div>

          {submitError && (
            <p role="alert" className="text-xs text-red-500">{submitError}</p>
          )}

          <p className="text-xs text-emerald-700 text-center">
            ✓ {isJa ? '書類が取得できなければ着手金を全額返金' : 'Full refund of advance payment if documents cannot be obtained'}
          </p>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-primary text-secondary font-bold py-4 rounded-xl shadow-lg hover:bg-primary-hover transition-all flex items-center justify-center gap-3 focus:outline-none focus:ring-4 focus:ring-primary/30 disabled:opacity-60 disabled:cursor-not-allowed"
            aria-label={t('footer.submitAriaLabel')}
          >
            <Send className="w-5 h-5" aria-hidden="true" />
            {submitting ? (lang === 'ja' ? '送信中…' : 'Sending…') : t('footer.submit')}
          </button>
        </form>
        )}

        <div className="mt-3 flex flex-col items-center gap-2">
          <a
            href="mailto:igrs20200601@gmail.com"
            onClick={() => trackEvent('cta_click', { location: 'contact', type: 'mailto_fallback', page_path: window.location.pathname })}
            className="w-full flex items-center justify-center gap-3 bg-gray-100 hover:bg-gray-200 text-secondary font-bold py-4 rounded-xl shadow transition-all"
          >
            <Mail className="w-5 h-5" />
            {isJa ? 'メールで直接連絡する' : 'Email us directly'}
          </a>
          {isJa ? (
            <a
              href="https://lin.ee/wALag1U"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('cta_click', { location: 'footer', type: 'line', page_path: window.location.pathname })}
              className="w-full flex items-center justify-center gap-3 bg-[#06C755] hover:bg-[#05b34d] text-white font-bold py-4 rounded-xl shadow-lg transition-all"
              aria-label="LINEで相談する（新しいタブで開く）"
            >
              <LineIcon />
              LINEで相談する
            </a>
          ) : (
            <a
              href="https://wa.me/639452833727"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('cta_click', { location: 'footer', type: 'whatsapp', page_path: window.location.pathname })}
              className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20b858] text-white font-bold py-4 rounded-xl shadow-lg transition-all"
              aria-label="Contact us on WhatsApp (opens in new tab)"
            >
              <WhatsAppIcon />
              WhatsApp us
            </a>
          )}
        </div>

        <p className="mt-6 text-xs text-gray-400">
          {isJa
            ? 'お支払い: クレジットカード（Visa · Mastercard · Amex · Apple Pay · Google Pay）'
            : 'Payment: Credit card · Visa · Mastercard · Amex · Apple Pay · Google Pay'}
        </p>

        <div className="mt-4 flex flex-col md:flex-row justify-center items-center gap-4 text-xs text-gray-400">
          <Link to={companyPath} className="hover:text-secondary transition-colors">{t('footer.company')}</Link>
          <Link to={privacyPath} className="hover:text-secondary transition-colors">{t('footer.privacy')}</Link>
          <Link to={termsPath} className="hover:text-secondary transition-colors">{t('footer.terms')}</Link>
          {isJa && (
            <Link to={tokushoPath} className="hover:text-secondary transition-colors">特定商取引法に基づく表記</Link>
          )}
          <Link to={pricingPath} className="hover:text-secondary transition-colors">{t('footer.pricingLink')}</Link>
          <Link to={contactPath} className="hover:text-secondary transition-colors">{t('footer.contactLink')}</Link>
        </div>
        <p className="text-xs text-gray-300 mt-4">
          {isJa ? `© ${currentYear} 株式会社IGRS` : `© ${currentYear} IGRS Inc.`}
        </p>
      </div>
    </footer>
  );

};

export default Footer;
