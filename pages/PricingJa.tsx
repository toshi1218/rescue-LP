import React from 'react';
import PageLayout from '../components/PageLayout';
import Pricing from '../components/Pricing';

export default function PricingJa() {
  return (
    <PageLayout breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: '料金' }]}>
      <h1 className="text-2xl md:text-3xl font-bold text-secondary mb-4">料金プラン</h1>
      <p className="text-sm text-gray-600 mb-6">PSA取得・DFAアポスティーユ・国際郵送をまとめたコミコミ料金でご案内します。</p>
      <Pricing />
    </PageLayout>
  );
}
