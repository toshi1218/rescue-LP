import React from 'react';
import { CreditCard, ShieldCheck, Building2, RefreshCcw } from 'lucide-react';
import { useLanguage } from '../lib/i18n';

/**
 * 支払い不安の除去を目的としたトラストバンド。
 * 既存の運用事実（Stripeクレカ決済・2段階払い・着手前キャンセル無料・日本法人）
 * のみを可視化する。CTA近くに置いてコンバージョンの摩擦を下げる用途。
 * 共通コンポーネントだが本体は presentational で、設置したページにのみ影響する。
 */
export default function PaymentTrust() {
  const { lang } = useLanguage();

  const copy =
    lang === 'ja'
      ? {
          heading: 'お支払いは「先払い一括」ではありません',
          items: [
            {
              icon: CreditCard,
              title: 'クレジットカード決済（Stripe）',
              desc: 'Visa・Mastercard・American Express・Apple Pay・Google Pay に対応。',
            },
            {
              icon: RefreshCcw,
              title: '2段階のお支払い',
              desc: '着手金50%で開始。残り50%は取得書類の写真・PDFをご確認いただいた後です。',
            },
            {
              icon: ShieldCheck,
              title: '着手前キャンセル無料',
              desc: 'お見積もり段階でのキャンセルは無料。まずご相談だけでも大丈夫です。',
            },
            {
              icon: Building2,
              title: '日本法人が運営',
              desc: '株式会社IGRS（日本法人）＋セブ現地スタッフ。日本語だけで完結します。',
            },
          ],
        }
      : {
          heading: 'You never pay the full amount upfront',
          items: [
            {
              icon: CreditCard,
              title: 'Pay by credit card (Stripe)',
              desc: 'Visa, Mastercard, American Express, Apple Pay, and Google Pay accepted.',
            },
            {
              icon: RefreshCcw,
              title: 'Two-stage payment',
              desc: 'About 50% to start; the balance only after you review photos/PDFs of the retrieved documents.',
            },
            {
              icon: ShieldCheck,
              title: 'Free cancellation before we start',
              desc: 'Cancel at the quote stage at no charge. A consultation alone is completely fine.',
            },
            {
              icon: Building2,
              title: 'Run by a Japan-registered company',
              desc: 'IGRS Inc. (Japan) with a Cebu-based local team. English support throughout.',
            },
          ],
        };

  return (
    <section className="mb-12 rounded-2xl border border-primary/20 bg-white px-6 py-6 shadow-sm md:px-8">
      <h2 className="mb-4 flex items-center gap-2 text-base font-bold text-secondary">
        <ShieldCheck className="h-5 w-5 flex-shrink-0 text-primary" />
        {copy.heading}
      </h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {copy.items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex items-start gap-3 rounded-xl bg-gray-50/70 p-4">
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <Icon className="h-4.5 w-4.5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-800 leading-snug">{title}</p>
              <p className="mt-0.5 text-xs text-gray-600 leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
