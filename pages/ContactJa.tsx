import React, { useState, useEffect } from 'react';
import { Send, Mail, ShieldCheck, Clock } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import { getCtaVariant, getTrafficSource, trackEvent } from '../lib/analytics';
import { useMeta } from '../lib/useMeta';
import { isValidEmail } from '../lib/validation';
import LineIcon from '../components/icons/LineIcon';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

export default function ContactJa() {
  useMeta(
    '無料相談・お問い合わせ｜フィリピン書類取得代行センター',
    'フィリピン書類取得代行・国際結婚・配偶者ビザ・帰化申請・外免切替に関するご相談はこちら。24時間以内に返信します。まずはお気軽にご相談ください。',
  );
  const [service, setService] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailConfirm, setEmailConfirm] = useState('');
  const [confirmError, setConfirmError] = useState('');
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
          if (!isValidEmail(emailInput)) {
            setEmailError('メールアドレスの形式が正しくないようです（例：example@email.com）。');
            return;
          }
          setEmailError('');
          if (emailInput !== emailConfirm.trim()) {
            setConfirmError('メールアドレスが一致しません。入力内容をご確認ください。');
            return;
          }
          setConfirmError('');
          if (!referral) {
            setReferralError('どこでお知りになったかをお選びください。');
            return;
          }
          setReferralError('');
          setSubmitting(true);
          setSubmitError('');
          try {
            const res = await fetch(WEB3FORMS_ENDPOINT, {
              method: 'POST',
              body: new FormData(e.currentTarget),
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
          <label className="block text-sm font-bold text-gray-700 mb-1">
            メールアドレス（確認用） <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            required
            value={emailConfirm}
            onChange={e => { setEmailConfirm(e.target.value); setConfirmError(''); }}
            onPaste={e => e.preventDefault()}
            placeholder="確認のためもう一度入力してください"
            className={`w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 ${confirmError ? 'border-red-400' : 'border-gray-200'}`}
          />
          {confirmError && <p className="mt-1 text-xs text-red-500">{confirmError}</p>}
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">
            メッセージアプリの連絡先 <span className="text-xs font-normal text-gray-400">（任意・メールが届かない場合の予備連絡先）</span>
          </label>
          <input
            name="alt_contact"
            type="text"
            placeholder="例：LINE ID / WhatsApp番号 / Facebook Messenger名 など"
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
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

        {/* 見積もりに役立つ詳細（任意・選択式）— 初回返信から概算見積を出すため */}
        <div className="rounded-xl border border-gray-100 bg-gray-50/60 p-4">
          <p className="text-sm font-bold text-gray-700 mb-1">お見積もりに役立つ詳細</p>
          <p className="text-xs text-gray-500 mb-3">すべて任意です。わかる範囲で選んでいただくと、初回のご返信で概算のお見積もりをお出しできます。</p>
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-bold text-gray-600 mb-1">必要な証明書・続柄</label>
              <select
                name="doc_types"
                defaultValue=""
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white"
              >
                <option value="">選択してください（任意）</option>
                <option value="本人の出生証明書のみ">本人の出生証明書のみ</option>
                <option value="本人＋配偶者">本人＋配偶者の分</option>
                <option value="本人＋父母">本人＋父母の分</option>
                <option value="家族まとめて（父母・兄弟姉妹など）">家族まとめて（父母・兄弟姉妹など）</option>
                <option value="まだわからない">まだわからない</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-600 mb-1">提出先</label>
              <select
                name="submit_to"
                defaultValue=""
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white"
              >
                <option value="">選択してください（任意）</option>
                <option value="日本の市区町村役場">日本の市区町村役場</option>
                <option value="法務局（帰化申請）">法務局（帰化申請）</option>
                <option value="出入国在留管理庁（ビザ）">出入国在留管理庁（ビザ）</option>
                <option value="海外の政府機関・大使館">海外の政府機関・大使館</option>
                <option value="その他・わからない">その他・わからない</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">NBIクリアランス</label>
                <select
                  name="nbi_needed"
                  defaultValue=""
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white"
                >
                  <option value="">任意</option>
                  <option value="必要">必要</option>
                  <option value="不要">不要</option>
                  <option value="わからない">わからない</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">部数</label>
                <select
                  name="copies"
                  defaultValue=""
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white"
                >
                  <option value="">任意</option>
                  <option value="1通">1通</option>
                  <option value="2通">2通</option>
                  <option value="3通">3通</option>
                  <option value="4〜5通">4〜5通</option>
                  <option value="6通以上">6通以上</option>
                  <option value="わからない">わからない</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-600 mb-1">ご希望の期限</label>
              <select
                name="deadline"
                defaultValue=""
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white"
              >
                <option value="">選択してください（任意）</option>
                <option value="特に急がない">特に急がない</option>
                <option value="1ヶ月以内">1ヶ月以内</option>
                <option value="2〜3ヶ月以内">2〜3ヶ月以内</option>
                <option value="提出日が決まっている">提出日が決まっている（内容欄に記入）</option>
                <option value="わからない">わからない</option>
              </select>
            </div>
          </div>
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
