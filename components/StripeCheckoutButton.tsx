import React, { useState } from 'react';
import { CreditCard, Loader2 } from 'lucide-react';
import { trackEvent } from '../lib/analytics';

const STRIPE_WORKER_URL = 'https://stripe.ph-document.com';

interface Props {
  serviceId: string;
  label?: string;
  className?: string;
}

export default function StripeCheckoutButton({ serviceId, label = 'カードで着手金を支払う', className }: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    setLoading(true);
    setError(null);
    trackEvent('cta_click', { location: 'stripe_checkout', type: serviceId });

    try {
      const res = await fetch(`${STRIPE_WORKER_URL}/checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ serviceId }),
      });

      if (!res.ok) {
        throw new Error('checkout_failed');
      }

      const data = await res.json<{ url?: string; error?: string }>();
      if (!data.url) throw new Error('no_url');

      window.location.href = data.url;
    } catch {
      setError('決済画面を開けませんでした。しばらく経ってから再試行してください。');
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <button
        onClick={handleClick}
        disabled={loading}
        className={
          className ??
          'flex items-center justify-center gap-1.5 bg-secondary text-white font-bold text-sm py-2.5 px-4 rounded-xl shadow-md hover:bg-secondary/90 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed'
        }
      >
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <CreditCard className="w-3.5 h-3.5" />
        )}
        {loading ? '接続中...' : label}
      </button>
      {error && (
        <p className="text-xs text-red-500">{error}</p>
      )}
    </div>
  );
}
