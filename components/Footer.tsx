import React from 'react';
import { Mail, Send } from 'lucide-react';
import { trackEvent } from '../lib/analytics';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mojqlqnd';

const Footer: React.FC = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-100" id="contact">
      <div className="max-w-md md:max-w-xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-secondary mb-2">まずは無料で相談</h2>
        <p className="text-sm text-gray-500 mb-8">
          どの書類が必要かわからない方も、<br />お気軽にお問い合わせください。
        </p>

        <form
          action={FORMSPREE_ENDPOINT}
          method="POST"
          className="space-y-3 text-left"
          onSubmit={() => trackEvent('form_submit', { location: 'contact', type: 'formspree' })}
        >
          <input type="hidden" name="_subject" value="【LPお問い合わせ】フィリピン書類取得代行" />
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

          <div>
            <label htmlFor="name" className="block text-xs text-gray-600 mb-1">お名前</label>
            <input
              id="name"
              name="name"
              required
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none"
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
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none"
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
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none"
              placeholder="必要な書類、用途、希望納期などをご記入ください。"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg hover:bg-primary-hover transition-all flex items-center justify-center gap-3"
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
    </section>
  );
};

export default Footer;
