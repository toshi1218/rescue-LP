import React from 'react';
import PageLayout from '../components/PageLayout';
import Pricing from '../components/Pricing';

export default function PricingJa() {
  return (
    <PageLayout breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: '料金' }]}>
      <h1 className="text-2xl md:text-3xl font-bold text-secondary mb-4">料金プラン</h1>
      <p className="text-sm text-gray-600 mb-3">PSA取得・DFAアポスティーユ・国際郵送をまとめたコミコミ料金でご案内します。</p>
      <div className="bg-secondary/[0.03] border border-secondary/10 rounded-xl p-4 mb-6">
        <p className="text-sm text-secondary font-semibold mb-1">IGRSは最安のサービスではありません。</p>
        <p className="text-xs text-gray-500 leading-relaxed">
          書類そのものの発行手数料だけを見ると、現地の公的費用はもっと安い場合があります。ただし、実際に大変なのは書類代ではなく、何を取ればいいかの判断、現地とのやり取り、進捗確認、海外からの対応です。IGRSは、その手間ごと引き受けるサービスです。
        </p>
      </div>
      <Pricing />
    </PageLayout>
  );
}
