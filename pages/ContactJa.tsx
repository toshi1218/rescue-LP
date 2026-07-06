import React, { useState, useEffect } from 'react';
import { Send, Mail, ShieldCheck, Clock } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import { getCtaVariant, getTrafficSource, trackEvent } from '../lib/analytics';
import { useMeta } from '../lib/useMeta';
import { notifySlack } from '../lib/notifyApi';
import LineIcon from '../components/icons/LineIcon';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

export default function ContactJa() {
  useMeta(
    '無料相談・お問い合わせ｜フィリピン書類取得代行センター',
    'フィリピン書類取得代行・国際結婚・配偶者ビザ・帰化申請・外免切替のご相談はこちら。24時間以内に返信します。書類名が分からない段階でも対応します。',
  );
  const [service, setService] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [referral, setReferral] = useState('');
  const [referralError, setReferralError] = useState('');
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
        必要書類・料金・期間など、まずはご相談ください。日本語で対応します。
      </p>
      <p className="text-xs text-gray-500 mb-4">
        メールまたは公式LINEでご相談いただけます。下のフォームから送信された内容もメールで届きます。
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
          公式LINE & Email
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
          <p className="text-sm text-gray-600 mb-3">内容を確認し、24時間以内にメールでご連絡します。</p>
          <div className="text-xs text-gray-500 bg-white border border-gray-100 rounded-lg p-3 text-left space-y-1">
            <p>• 返信メールが届かない場合は、<span className="font-semibold">迷惑メール・スパムフォルダ</span>もご確認ください。</p>
            <p>• 24時間以内に返信がない場合は、直接メールでお問い合わせください：</p>
            <a href="mailto:igrs20200601@gmail.com" className="font-semibold text-primary hover:underline">igrs20200601@gmail.com</a>
          </div>
        </div>
      ) : (
      <form
        className="space-y-4 max-w-xl"
        noValidate
        onSubmit={async (e) => {
          e.preventDefault();
          const emailInput = (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value.trim();
          if (!emailInput) {
            setEmailError('メールアドレスは必須です。');
            return;
          }
          setEmailError('');
          if (!referral) {
            setReferralError('どこでお知りになったかをお選びください。');
            return;
          }
          setReferralError('');
          setSubmitting(true);
          setSubmitError('');
          try {
            const formData = new FormData(e.currentTarget);
            notifySlack('ja', formData);
            const res = await fetch(WEB3FORMS_ENDPOINT, {
              method: 'POST',
              body: formData,
              headers: { Accept: 'application/json' },
            });
            const data = await res.json();
            if (res.ok && data.success) {
              trackEvent('form_submit_success', { location: 'contact_page', type: 'web3forms', variant: ctaVariant, traffic_source: trafficSource });
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
        <input type="hidden" name="access_key" value="c964e168-b5bd-4aa1-a1a4-fb0a4439bbb0" />
        <input type="hidden" name="subject" value="【LPお問い合わせ】フィリピン書類取得代行" />
        <input type="text" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
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
          <label className="block text-sm font-bold text-gray-700 mb-1">
            メールアドレス <span className="text-red-500">*</span>
          </label>
          <input
            name="email"
            type="email"
            required
            placeholder="example@email.com"
            onChange={() => setEmailError('')}
            className={`w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 ${emailError ? 'border-red-400' : 'border-gray-200'}`}
          />
          {emailError && <p className="mt-1 text-xs text-red-500">{emailError}</p>}
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">居住国（任意）</label>
          <input
            name="country"
            placeholder="例：日本、アメリカ、オーストラリア"
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
            <option value="書類取得のみ（PSA・CENOMAR・NBI・LTO等）">書類取得のみ（PSA・CENOMAR・NBI・LTO等）</option>
            <option value="その他・不明">その他・わからない</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">
            当社をどこでお知りになりましたか？ <span className="text-red-500">*</span>
          </label>
          <select
            name="referral_source"
            value={referral}
            onChange={e => { setReferral(e.target.value); setReferralError(''); }}
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white"
          >
            <option value="">選択してください</option>
            <option value="Google検索">Google検索</option>
            <option value="AI（ChatGPT / Claude / Gemini など）">AI（ChatGPT / Claude / Gemini など）</option>
            <option value="SNS（Instagram / X / Facebook）">SNS（Instagram / X / Facebook）</option>
            <option value="Google広告">Google広告</option>
            <option value="知人の紹介">知人の紹介</option>
            <option value="その他">その他</option>
          </select>
          {referral === 'その他' && (
            <input
              type="text"
              name="referral_source_detail"
              placeholder="よろしければ詳しく教えてください"
              className="mt-2 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              maxLength={100}
            />
          )}
          {referralError && <p className="mt-1 text-xs text-red-500">{referralError}</p>}
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">ご相談内容 <span className="text-red-500">*</span></label>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="例：「フィリピン人と結婚予定でどんな書類が必要か知りたい」「免許切り替えに必要な書類を代行してほしい」など、状況を自由にお書きください。書類名がわからなくても大丈夫です。"
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

      <div className="mt-4 flex flex-col gap-2 max-w-xl">
        <a
          href="mailto:igrs20200601@gmail.com"
          className="w-full flex items-center justify-center gap-3 bg-gray-100 hover:bg-gray-200 text-secondary font-bold py-4 rounded-xl shadow transition-all"
        >
          <Mail className="w-5 h-5" />
          メールで直接連絡する
        </a>
        <a
          href="https://lin.ee/wALag1U"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('cta_click', { location: 'contact_page', type: 'line', page_path: window.location.pathname })}
          aria-label="LINEで相談する（新しいタブで開く）"
          className="w-full flex items-center justify-center gap-3 bg-[#06C755] hover:bg-[#05b34d] text-white font-bold py-4 rounded-xl shadow-lg transition-all"
        >
          <LineIcon />
          LINEで相談する
        </a>
      </div>
    </PageLayout>
  );
}
