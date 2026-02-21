import React from 'react';
import { Link } from 'react-router-dom';
import { Send, Mail, Clock, MessageSquare } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getCtaVariant, getTrafficSource, trackEvent } from '../lib/analytics';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mojqlqnd';

export default function ContactPage() {
  const ctaVariant = getCtaVariant();
  const trafficSource = getTrafficSource();

  return (
    <div className="min-h-screen bg-background-light text-gray-800 font-body">
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
          どの書類が必要かわからない方も、まずはお気軽にご相談ください。
        </p>

        {/* 連絡手段 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[
            { icon: MessageSquare, title: 'フォームで相談', desc: '24時間受付。1〜2営業日以内にご返信します。', highlight: true },
            { icon: Mail, title: 'メールで相談', desc: 'igrs20200601@gmail.com\nそのままメーラーで送信できます。', highlight: false },
            { icon: Clock, title: '対応時間', desc: '平日 10:00〜18:00\n土日祝はメールのみ対応', highlight: false },
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

        {/* お問い合わせフォーム */}
        <div className="bg-white rounded-2xl shadow-card border border-gray-100 p-6 md:p-8">
          <h2 className="text-lg font-bold text-secondary mb-6">お問い合わせフォーム</h2>

          <form
            action={FORMSPREE_ENDPOINT}
            method="POST"
            className="space-y-4"
            onSubmit={() => trackEvent('form_submit', { location: 'contact_page', type: 'formspree', variant: ctaVariant, traffic_source: trafficSource })}
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
                placeholder="必要な書類、用途、希望納期などをご記入ください。"
                aria-required="true"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg hover:bg-primary-hover transition-all flex items-center justify-center gap-3 focus:outline-none focus:ring-4 focus:ring-primary/30"
            >
              <Send className="w-5 h-5" />
              送信する
            </button>
          </form>

          <a
            href="mailto:igrs20200601@gmail.com"
            onClick={() => trackEvent('cta_click', { location: 'contact_page', type: 'mailto_fallback' })}
            className="mt-4 inline-flex items-center gap-2 text-xs text-gray-500 hover:text-secondary transition-colors"
          >
            <Mail className="w-4 h-4" />
            メールで直接送る: igrs20200601@gmail.com
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
