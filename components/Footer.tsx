import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Send } from 'lucide-react';
import { getCtaVariant, getTrafficSource, trackEvent } from '../lib/analytics';
import { useLanguage } from '../lib/i18n';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mojqlqnd';

const Footer: React.FC = () => {
  const ctaVariant = getCtaVariant();
  const trafficSource = getTrafficSource();
  const { lang, t } = useLanguage();
  const [service, setService] = useState('');

  useEffect(() => {
    const handler = (e: Event) => setService((e as CustomEvent<string>).detail);
    window.addEventListener('setContactService', handler);
    return () => window.removeEventListener('setContactService', handler);
  }, []);
  const isJa = lang === 'ja';
  const companyPath = isJa ? '/ja/company'  : '/en/company';
  const privacyPath = isJa ? '/ja/privacy'  : '/en/privacy';
  const termsPath   = isJa ? '/ja/terms'    : '/en/terms';
  const pricingPath = isJa ? '/ja/ryokin'   : '/en/pricing';
  const contactPath = isJa ? '/ja/contact'  : '/en/contact';

  return (
    <footer className="bg-white border-t border-gray-100" id="contact">
      <div className="py-16 max-w-md md:max-w-xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold text-secondary mb-2">{t('footer.title')}</h3>
        <p className="text-sm text-gray-500 mb-8 whitespace-pre-line">
          {t('footer.subtitle')}
        </p>

        <form
          action={FORMSPREE_ENDPOINT}
          method="POST"
          className="space-y-3 text-left"
          onSubmit={() => trackEvent('form_submit', { location: 'contact', type: 'formspree', variant: ctaVariant, traffic_source: trafficSource })}
          aria-label={t('footer.formAriaLabel')}
        >
          <input type="hidden" name="_subject" value={isJa ? '【LPお問い合わせ】フィリピン書類取得代行' : '[Philippine Document Service Inquiry - EN]'} />
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
          <input type="hidden" name="cta_variant" value={ctaVariant} />
          <input type="hidden" name="traffic_source" value={trafficSource} />
          <input type="hidden" name="landing_page" value="https://ph-document.com/" />

          <div>
            <label htmlFor="name" className="block text-xs text-gray-600 mb-1">{t('footer.nameLabel')}</label>
            <input
              id="name"
              name="name"
              required
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder={t('footer.namePlaceholder')}
              aria-required="true"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs text-gray-600 mb-1">{t('footer.emailLabel')}</label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder={t('footer.emailPlaceholder')}
              aria-required="true"
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-xs text-gray-600 mb-1">
              {isJa ? 'ご相談の目的' : 'Purpose'} <span className="text-red-400">*</span>
            </label>
            <select
              id="service"
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
                </>
              ) : (
                <>
                  <option value="International Marriage">International Marriage</option>
                  <option value="Spouse Visa">Spouse Visa</option>
                  <option value="License Transfer">License Transfer</option>
                  <option value="Naturalization">Naturalization</option>
                  <option value="Custom Roadmap">Custom Roadmap</option>
                </>
              )}
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs text-gray-600 mb-1">{t('footer.messageLabel')}</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder={t('footer.messagePlaceholder')}
              aria-required="true"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg hover:bg-primary-hover transition-all flex items-center justify-center gap-3 focus:outline-none focus:ring-4 focus:ring-primary/30"
            aria-label={t('footer.submitAriaLabel')}
          >
            <Send className="w-5 h-5" />
            {t('footer.submit')}
          </button>
        </form>

        <a
          href="mailto:igrs20200601@gmail.com"
          onClick={() => trackEvent('cta_click', { location: 'contact', type: 'mailto_fallback' })}
          className="mt-3 inline-flex items-center gap-2 text-xs text-gray-500 hover:text-secondary transition-colors"
        >
          <Mail className="w-4 h-4" />
          {t('footer.mailto')}
        </a>

        <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-4 text-xs text-gray-400">
          <Link to={companyPath} className="hover:text-secondary transition-colors">{t('footer.company')}</Link>
          <Link to={privacyPath} className="hover:text-secondary transition-colors">{t('footer.privacy')}</Link>
          <Link to={termsPath} className="hover:text-secondary transition-colors">{t('footer.terms')}</Link>
          <Link to={pricingPath} className="hover:text-secondary transition-colors">{t('footer.pricingLink')}</Link>
          <Link to={contactPath} className="hover:text-secondary transition-colors">{t('footer.contactLink')}</Link>
        </div>
        <p className="text-[10px] text-gray-300 mt-4">{t('footer.copyright')}</p>
      </div>
    </footer>
  );
};

export default Footer;
