import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Send } from 'lucide-react';
import { getCtaVariant, getTrafficSource, trackEvent } from '../lib/analytics';

const guideLinks = [
  { to: '/cenomar-guide', label: 'CENOMAR（独身証明書）' },
  { to: '/psa-shussei-shomeisho', label: 'PSA出生証明書' },
  { to: '/nbi-clearance-guide', label: 'NBI無犯罪証明書' },
  { to: '/kokusai-kekkon-guide', label: '国際結婚ガイド' },
  { to: '/haigusha-visa-shorui', label: '配偶者ビザ書類' },
  { to: '/apostille-guide', label: 'DFAアポスティーユ' },
  { to: '/gaimen-kirikae-guide', label: '外免切替ガイド' },
  { to: '/kekkon-shomeisho', label: 'PSA婚姻証明書' },
];

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mojqlqnd';

const Footer: React.FC = () => {
  const ctaVariant = getCtaVariant();
  const trafficSource = getTrafficSource();

  return (
    <footer className="bg-white border-t border-gray-100" id="contact">
      {/* ガイド記事ナビゲーション */}
      <div className="py-10 bg-gray-50 border-b border-gray-200">
        <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-6">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">ガイド記事</p>
          <div className="flex flex-wrap gap-2">
            {guideLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="inline-block text-sm text-secondary border border-gray-300 rounded-full px-4 py-1.5 hover:bg-secondary hover:text-white hover:border-secondary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 max-w-md md:max-w-xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold text-secondary mb-2">まずは無料で相談</h3>
        <p className="text-sm text-gray-500 mb-8">
          どの書類が必要かわからない方も、<br />お気軽にお問い合わせください。
        </p>

        <form
          action={FORMSPREE_ENDPOINT}
          method="POST"
          className="space-y-3 text-left"
          onSubmit={() => trackEvent('form_submit', { location: 'contact', type: 'formspree', variant: ctaVariant, traffic_source: trafficSource })}
          aria-label="お問い合わせフォーム"
        >
          <input type="hidden" name="_subject" value="【LPお問い合わせ】フィリピン書類取得代行" />
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
          <input type="hidden" name="cta_variant" value={ctaVariant} />
          <input type="hidden" name="traffic_source" value={trafficSource} />
          <input type="hidden" name="landing_page" value="https://rescue-lp.pages.dev/" />

          <div>
            <label htmlFor="name" className="block text-xs text-gray-600 mb-1">お名前</label>
            <input
              id="name"
              name="name"
              required
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="山田 太郎"
              aria-required="true"
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
              aria-required="true"
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
              placeholder="必要な書類、用途、希望納期などをご記入ください。"
              aria-required="true"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg hover:bg-primary-hover transition-all flex items-center justify-center gap-3 focus:outline-none focus:ring-4 focus:ring-primary/30"
            aria-label="お問い合わせフォームを送信"
          >
            <Send className="w-5 h-5" />
            フォームで問い合わせる
          </button>
        </form>

        <a
          href="mailto:igrs20200601@gmail.com"
          onClick={() => trackEvent('cta_click', { location: 'contact', type: 'mailto_fallback' })}
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
    </footer>

  );
};

export default Footer;
