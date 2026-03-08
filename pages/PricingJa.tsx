import React from 'react';
import PageLayout from '../components/PageLayout';
import Pricing from '../components/Pricing';

export default function PricingJa() {
  return (
    <PageLayout breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: '料金' }]}>
      <h1 className="text-2xl md:text-3xl font-bold text-secondary mb-4">料金プラン</h1>
      <p className="text-sm text-gray-600 mb-3">PSA取得、DFAアポスティーユ、必要に応じた国際郵送に対応する、フィリピン書類取得代行の料金をご案内します。</p>
      <div className="bg-secondary/[0.03] border border-secondary/10 rounded-xl p-4 mb-6">
        <p className="text-sm text-secondary font-semibold mb-1">料金に含まれるもの</p>
        <p className="text-xs text-gray-500 leading-relaxed">
          公的手数料だけでなく、必要書類の確認、現地申請、進捗確認、アポスティーユ対応、日本語でのご案内を含みます。
        </p>
      </div>
      <Pricing />
    </PageLayout>
  );
}
