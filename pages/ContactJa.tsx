import React, { useState, useEffect } from 'react';
import { Send, Mail, ShieldCheck, Clock } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import { getCtaVariant, getTrafficSource, trackEvent } from '../lib/analytics';
import { useMeta } from '../lib/useMeta';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mojqlqnd';

export default function ContactJa() {
  useMeta(
    '無料相談・お問い合わせ｜フィリピン書類取得代行センター',
    'フィリピン書類取得代行・国際結婚・配偶者ビザ・帰化申請・外免切替に関するご相談はこちら。24時間以内に返信します。まずはお気軽にご相談ください。',
  );
  const [service, setService] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const ctaVariant = getCtaVariant();
  const trafficSource = getTrafficSource();

  useEffect(() => {
    const handler = (e: Event) => setService((e as CustomEvent<string>).detail);
    window.addEventListener('setContactService', handler);
    return () => window.removeEventListener('setContactService', handler);
  }, []);

  return (
    <PageLayout breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'お問い合わせ' }]}>
      <h1 className="text-2xl md:text-3xl font-bold text-secondary mb-2">お問い合わせ・無料相談</h1>
      <p className="text-sm text-gray-600 mb-4">
        必要書類・料金・期間など、まずはお気軽にご相談ください。日本語で対応します。
      </p>
      <p className="text-xs text-gray-500 mb-4">
        お問い合わせはEメールのみで承ります。下のフォームから送信された内容もメールで届きます。
      </p>

      {/* 信頼バッジ */}
      <div className="flex flex-wrap gap-3 mb-6">
        <span className="inline-flex items-center gap-1.5 text-xs text-gray-600 bg-gray-50 border border-gray-200 rounded-full px-3 py-1">
          <Clock className="w-3.5 h-3.5 text-primary" />
          24時間以内に返信
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs text-gray-600 bg-gray-50 border border-gray-200 rounded-full px-3 py-1">
          <ShieldCheck className="w-3.5 h-3.5 text-primary" />
          着手前キャンセル無料
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs text-gray-600 bg-gray-50 border border-gray-200 rounded-full px-3 py-1">
          <Mail className="w-3.5 h-3.5 text-primary" />
          Eメールのみ
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs text-gray-600 bg-gray-50 border border-gray-200 rounded-full px-3 py-1">
          <Clock className="w-3.5 h-3.5 text-primary" />
          月〜金 9:00〜17:00（PHT）
        </span>
      </div>

      {submitted ? (
        <div role="status" aria-live="polite" className="bg-green-50 border border-green-200 rounded-xl p-8 text-center max-w-xl">
          <p className="text-3xl mb-3">✅</p>
          <p className="font-bold text-green-700 mb-2">お問い合わせを受け付けました</p>
          <p className="text-sm text-gray-500">24時間以内にご連絡します。</p>
        </div>
      ) : (
      <form
        className="space-y-4 max-w-xl"
        noValidate
        onSubmit={async (e) => {
          e.preventDefault();
          setSubmitting(true);
          setSubmitError('');
          trackEvent('form_submit', { location: 'contact_page', type: 'formspree', variant: ctaVariant, traffic_source: trafficSource });
          try {
            const res = await fetch(FORMSPREE_ENDPOINT, {
              method: 'POST',
              body: new FormData(e.currentTarget),
              headers: { Accept: 'application/json' },
            });
            if (res.ok) {
              setSubmitted(true);
            } else {
              setSubmitError('送信に失敗しました。しばらく経ってから再度お試しください。');
            }
          } catch {
            setSubmitError('送信に失敗しました。しばらく経ってから再度お試しください。');
          } finally {
            setSubmitting(false);
          }
        }}
      >
        <input type="hidden" name="_subject" value="【LPお問い合わせ】フィリピン書類取得代行" />
        <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
        <input type="hidden" name="cta_variant" value={ctaVariant} />
        <input type="hidden" name="traffic_source" value={trafficSource} />
        <input type="hidden" name="landing_page" value="https://ph-document.com/ja/contact/" />

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">お名前 <span className="text-red-500">*</span></label>
          <input
            name="name"
            required
            placeholder="山田 太郎"
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">会社名・事務所名 <span className="text-xs font-normal text-gray-400">（任意）</span></label>
          <input
            name="company"
            placeholder="○○行政書士事務所 / ○○株式会社"
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">メールアドレス <span className="text-red-500">*</span></label>
          <input
            name="email"
            type="email"
            required
            placeholder="example@email.com"
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">
            ご相談の目的 <span className="text-red-500">*</span>
          </label>
          <select
            name="service"
            required
            value={service}
            onChange={e => setService(e.target.value)}
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white"
          >
            <option value="">目的を選択してください</option>
            <option value="国際結婚">国際結婚</option>
            <option value="配偶者ビザ">配偶者ビザ</option>
            <option value="免許切り替え">免許切り替え</option>
            <option value="帰化申請">帰化申請</option>
            <option value="個別ロードマップ作成">個別ロードマップ作成</option>
            <option value="その他">その他</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">ご相談内容 <span className="text-red-500">*</span></label>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="例：国際結婚のためCENOMARとPSA出生証明書（アポスティーユ付き）が必要です。提出先は○○市役所で、提出予定は○月頃です。"
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        {submitError && (
          <p role="alert" className="text-xs text-red-500">{submitError}</p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-primary text-secondary font-bold py-4 rounded-xl shadow-lg hover:bg-primary-hover transition-all flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <Send className="w-5 h-5" aria-hidden="true" />
          {submitting ? '送信中…' : '送信する'}
        </button>
      </form>
      )}

      <a
        href="mailto:igrs20200601@gmail.com"
        className="mt-4 inline-flex items-center gap-2 text-xs text-gray-500 hover:text-secondary transition-colors"
      >
        <Mail className="w-4 h-4" />
        メールで直接連絡する（igrs20200601@gmail.com）
      </a>
    </PageLayout>
  );
}
