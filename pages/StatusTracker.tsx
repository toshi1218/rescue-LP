import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchOrderStatus, type OrderStatus, type StatusLang } from '../lib/statusApi';

const STAGE_LABEL: Record<StatusLang, string[]> = {
  en: [
    'Application & Down Payment',
    'PSA Document Retrieval',
    'DFA Apostille',
    'Balance Payment',
    'DHL International Shipping',
    'Delivered to You',
  ],
  ja: [
    'お申込み・着手金',
    'PSA書類の取得',
    'DFAアポスティーユ',
    '残金のお支払い',
    'DHL国際発送',
    'お手元に到着',
  ],
};

// 各工程の詳細ステップ（public/tools/status.html の SUBSTEPS と揃える）
const SUBSTEPS: Record<StatusLang, string[][]> = {
  en: [
    ['Order received', 'Down payment confirmed'],
    ['Reservation made', 'Application submitted', 'Application accepted (by PSA)', 'In transit to us', 'Document received (by us)'],
    ['Appointment booked', 'Application submitted', 'Application accepted (by DFA)', 'In transit to us', 'Apostille received (by us)'],
    ['Invoice sent', 'Awaiting your payment', 'Payment confirmed'],
    ['Preparing shipment', 'Handed over to DHL', 'Tracking number issued'],
    ['Out for delivery', 'Delivered'],
  ],
  ja: [
    ['ご注文を受付しました', '着手金を確認しました'],
    ['予約が完了しました', '申請しました', 'PSAに申請が受理されました', '配達中です（PSA→当社）', '当社が書類を受け取りました'],
    ['予約が完了しました', '申請しました', 'DFAに申請が受理されました', '配達中です（DFA→当社）', '当社がアポスティーユを受け取りました'],
    ['請求書をお送りしました', 'ご入金をお待ちしています', 'ご入金を確認しました'],
    ['発送準備中です', 'DHLへ引き渡しました', '追跡番号を発行しました'],
    ['配達中です', 'お届け完了しました'],
  ],
};

const DONE_WORD: Record<StatusLang, string> = { en: 'Done', ja: '完了' };
const BADGE: Record<StatusLang, string> = { en: 'In progress now', ja: 'いまこの工程です' };
const ARRIVAL_LABEL: Record<StatusLang, string> = { en: 'Estimated arrival', ja: 'お届け予定' };
const UPDATED_LABEL: Record<StatusLang, string> = { en: 'Last updated', ja: '最終更新' };
const NOT_FOUND_TEXT: Record<StatusLang, string> = {
  en: 'We could not find this tracking link. Please check the URL or contact us.',
  ja: 'この追跡リンクが見つかりませんでした。URLをご確認いただくか、お問い合わせください。',
};
const ERROR_TEXT: Record<StatusLang, string> = {
  en: 'Something went wrong loading your status. Please try again in a moment.',
  ja: '状況の読み込みに失敗しました。少し時間をおいて再度お試しください。',
};

const MON_EN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function fmtDate(d: Date, lang: StatusLang): string {
  return lang === 'ja' ? `${d.getMonth() + 1}月${d.getDate()}日` : `${MON_EN[d.getMonth()]} ${d.getDate()}`;
}

function arrivalText(status: OrderStatus): string {
  if (!status.order_date || status.stage >= 6) return '';
  const [y, m, d] = status.order_date.split('-').map(Number);
  const base = new Date(y, (m || 1) - 1, d || 1);
  if (isNaN(base.getTime())) return '';
  const min = Math.min(status.lead_min, status.lead_max);
  const max = Math.max(status.lead_min, status.lead_max);
  const from = new Date(base.getTime());
  from.setDate(from.getDate() + min * 7);
  const to = new Date(base.getTime());
  to.setDate(to.getDate() + max * 7);
  const range = min === max ? fmtDate(from, status.lang) : `${fmtDate(from, status.lang)}${status.lang === 'ja' ? '〜' : ' – '}${fmtDate(to, status.lang)}`;
  return status.lang === 'ja' ? `${range} ごろ` : `around ${range}`;
}

function setRobots(content: string) {
  const el = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
  if (el) el.setAttribute('content', content);
}

export default function StatusTracker() {
  const { id } = useParams<{ id: string }>();
  const [status, setStatus] = useState<OrderStatus | null>(null);
  const [state, setState] = useState<'loading' | 'ok' | 'not_found' | 'error'>('loading');

  useEffect(() => {
    setRobots('noindex, nofollow');
    document.title = 'Order Status | ph-document.com';
    return () => setRobots('index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
  }, []);

  useEffect(() => {
    let cancelled = false;
    if (!id) {
      setState('not_found');
      return;
    }
    setState('loading');
    fetchOrderStatus(id)
      .then((row) => {
        if (cancelled) return;
        if (!row) {
          setState('not_found');
          return;
        }
        setStatus(row);
        setState('ok');
      })
      .catch(() => {
        if (!cancelled) setState('error');
      });
    return () => {
      cancelled = true;
    };
  }, [id]);

  if (state === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background-light px-4">
        <div className="w-8 h-8 border-4 border-secondary/20 border-t-secondary rounded-full animate-spin" aria-label="Loading" />
      </div>
    );
  }

  if (state === 'not_found' || state === 'error' || !status) {
    const lang: StatusLang = 'ja';
    return (
      <div className="min-h-screen flex items-center justify-center bg-background-light px-4">
        <div className="max-w-md text-center bg-white rounded-2xl shadow-soft p-8">
          <p className="text-secondary font-bold text-lg mb-2">ph-document.com</p>
          <p className="text-gray-600">{state === 'not_found' ? NOT_FOUND_TEXT[lang] : ERROR_TEXT[lang]}</p>
        </div>
      </div>
    );
  }

  const lang = status.lang;
  const labels = STAGE_LABEL[lang];
  const arrival = arrivalText(status);
  const updated = new Date(status.updated_at);

  return (
    <div className="min-h-screen bg-background-light py-10 px-4">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-soft overflow-hidden">
        <div className="bg-gradient-to-r from-secondary to-secondary-light px-6 py-7 text-white">
          <p className="text-sm text-white/70 tracking-wide">
            ph-document<span className="text-primary">.com</span> · Order Status
          </p>
          <h1 className="text-2xl font-extrabold mt-2 text-balance">{status.doc || (lang === 'ja' ? 'ご注文の書類' : 'Your Document')}</h1>
          {status.ref && (
            <span className="inline-block mt-3 text-xs font-bold bg-white/15 border border-white/25 rounded-full px-3 py-1">
              Ref {status.ref}
            </span>
          )}
        </div>

        {arrival && (
          <div className="mx-6 mt-6 bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4 flex items-center gap-4">
            <span className="text-2xl" aria-hidden="true">🗓️</span>
            <div>
              <p className="text-xs font-extrabold text-amber-800 uppercase tracking-wide">{ARRIVAL_LABEL[lang]}</p>
              <p className="text-lg font-extrabold text-secondary">{arrival}</p>
            </div>
          </div>
        )}

        <ol className="px-6 py-6 flex flex-col gap-1">
          {labels.map((label, i) => {
            const n = i + 1;
            const done = n < status.stage || status.stage === 6;
            const isCurrent = n === status.stage && status.stage < 6;
            const stageDate = status.stage_dates?.[i];
            const subLabel = status.sub_idx !== null && status.sub_idx !== undefined ? SUBSTEPS[lang][i]?.[status.sub_idx] : '';
            const extraBits = [subLabel || status.eta_note, status.stage >= 5 && status.track ? `DHL ${status.track}` : ''].filter(Boolean);
            return (
              <li key={label} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span
                    className={
                      'w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ' +
                      (done ? 'bg-emerald-600 text-white' : isCurrent ? 'bg-primary text-secondary' : 'bg-gray-100 text-gray-400 border border-gray-200')
                    }
                  >
                    {done ? '✓' : n}
                  </span>
                  {i < labels.length - 1 && <span className={'w-0.5 flex-1 min-h-[1.75rem] ' + (done ? 'bg-emerald-600' : 'bg-gray-200')} />}
                </div>
                <div className="pb-6">
                  <p className={'font-bold ' + (done || isCurrent ? 'text-secondary' : 'text-gray-400')}>{label}</p>
                  {isCurrent && (
                    <div className="mt-1 flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold bg-primary text-secondary rounded-full px-3 py-1">
                        {BADGE[lang]}
                      </span>
                      {extraBits.length > 0 && <span className="text-sm text-gray-500">{extraBits.join(' · ')}</span>}
                    </div>
                  )}
                  {!isCurrent && (
                    <p className="text-sm text-gray-500 mt-0.5">
                      {done ? stageDate || DONE_WORD[lang] : ''}
                    </p>
                  )}
                </div>
              </li>
            );
          })}
        </ol>

        <p className="text-center text-xs text-gray-400 border-t border-gray-100 py-4">
          {UPDATED_LABEL[lang]}: {fmtDate(updated, lang)}
        </p>
      </div>
    </div>
  );
}
