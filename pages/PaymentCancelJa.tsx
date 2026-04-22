import React from 'react';
import { Link } from 'react-router-dom';
import { XCircle, ArrowLeft } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import { useMeta } from '../lib/useMeta';

export default function PaymentCancelJa() {
  useMeta(
    'お支払いキャンセル | フィリピン書類取得代行',
    'お支払いがキャンセルされました。ご不明な点はお問い合わせください。',
  );

  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'お支払いキャンセル' }]}
    >
      <div className="max-w-lg mx-auto px-4 py-16 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
            <XCircle className="w-8 h-8 text-gray-400" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-secondary mb-3">
          お支払いをキャンセルしました
        </h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          お支払いはキャンセルされました。<br />
          ご不明な点や金額のご確認はお気軽にお問い合わせください。
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/ja/ryokin/"
            className="inline-flex items-center justify-center gap-2 border border-primary text-primary font-bold text-sm py-3 px-6 rounded-xl hover:bg-primary/5 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            料金ページに戻る
          </Link>
          <a
            href="/ja/ryokin/#contact"
            className="inline-flex items-center justify-center gap-2 bg-primary text-secondary font-bold text-sm py-3 px-6 rounded-xl shadow-md shadow-primary/20 hover:bg-primary-hover transition-all"
          >
            お問い合わせ
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
