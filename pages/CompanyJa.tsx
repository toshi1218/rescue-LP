import React from 'react';
import PageLayout from '../components/PageLayout';

export default function CompanyJa() {
  return (
    <PageLayout breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: '会社概要' }]}>
      <h1 className="text-2xl md:text-3xl font-bold text-secondary mb-6">会社概要</h1>
      <div className="bg-white rounded-xl border border-gray-100 shadow-card p-6 space-y-4 text-sm text-gray-700">
        <div className="grid grid-cols-3 gap-4 border-b border-gray-100 pb-4">
          <span className="font-bold text-secondary">会社名</span>
          <span className="col-span-2">IGRS Inc.</span>
        </div>
        <div className="grid grid-cols-3 gap-4 border-b border-gray-100 pb-4">
          <span className="font-bold text-secondary">所在地</span>
          <span className="col-span-2">フィリピン・セブ</span>
        </div>
        <div className="grid grid-cols-3 gap-4 border-b border-gray-100 pb-4">
          <span className="font-bold text-secondary">事業内容</span>
          <span className="col-span-2">フィリピン書類取得代行（PSA・NBI・LTO・DFAアポスティーユ）</span>
        </div>
        <div className="grid grid-cols-3 gap-4 border-b border-gray-100 pb-4">
          <span className="font-bold text-secondary">対応言語</span>
          <span className="col-span-2">日本語・英語</span>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <span className="font-bold text-secondary">お問い合わせ</span>
          <span className="col-span-2">
            <a href="#contact" className="text-primary hover:underline">お問い合わせフォームへ</a>
          </span>
        </div>
      </div>
    </PageLayout>
  );
}
