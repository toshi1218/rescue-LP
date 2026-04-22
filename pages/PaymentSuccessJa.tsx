import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import { useMeta } from '../lib/useMeta';
import { trackEvent } from '../lib/analytics';

export default function PaymentSuccessJa() {
  useMeta(
    'お支払い完了 | フィリピン書類取得代行',
    'クレジットカードでのお支払いが完了しました。担当者よりご連絡いたします。',
  );

  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    trackEvent('payment_success', { sessionId: sessionId ?? 'unknown' });
  }, [sessionId]);

  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'お支払い完了' }]}
    >
      <div className="max-w-lg mx-auto px-4 py-16 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-secondary mb-3">
          お支払いが完了しました
        </h1>
        <p className="text-gray-600 mb-6 leading-relaxed">
          着手金のお支払いありがとうございます。<br />
          担当者より1〜2営業日以内にメールにてご連絡いたします。
        </p>

        <div className="rounded-xl border border-gray-100 bg-gray-50 p-5 text-left mb-8 space-y-2">
          <p className="text-sm font-bold text-secondary">今後の流れ</p>
          <ol className="space-y-2">
            {[
              '担当者よりメールで手続き開始のご連絡',
              'フィリピン側での書類取得開始（約4〜6週間）',
              '書類写しの確認・残金50%のお支払い',
              '原本の発送',
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="w-5 h-5 rounded-full bg-primary/20 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        <Link
          to="/ja/"
          className="inline-flex items-center gap-2 bg-primary text-secondary font-bold text-sm py-3 px-6 rounded-xl shadow-md shadow-primary/20 hover:bg-primary-hover transition-all"
        >
          トップページに戻る
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </PageLayout>
  );
}
