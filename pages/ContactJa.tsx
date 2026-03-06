import React from 'react';
import PageLayout from '../components/PageLayout';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mojqlqnd';

export default function ContactJa() {
  return (
    <PageLayout breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'お問い合わせ' }]}>
      <h1 className="text-2xl md:text-3xl font-bold text-secondary mb-4">お問い合わせ・無料相談</h1>
      <p className="text-sm text-gray-600 mb-6">
        必要書類・料金・期間など、まずはお気軽にご相談ください。日本語で対応します。
      </p>
      <form action={FORMSPREE_ENDPOINT} method="POST" className="space-y-4 max-w-xl">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">お名前 <span className="text-red-500">*</span></label>
          <input name="name" required placeholder="山田 太郎" className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-secondary" />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">メールアドレス <span className="text-red-500">*</span></label>
          <input name="email" type="email" required placeholder="example@email.com" className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-secondary" />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">ご相談内容 <span className="text-red-500">*</span></label>
          <textarea name="message" required rows={5} placeholder="例：国際結婚のためCENOMARとPSA出生証明書（アポスティーユ付き）が必要です。提出先は○○市役所で、提出予定は○月頃です。" className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-secondary" />
        </div>
        <button type="submit" className="bg-primary text-white font-bold px-8 py-3 rounded-xl hover:bg-primary-hover transition-colors">
          送信する
        </button>
      </form>
    </PageLayout>
  );
}
