import React from 'react';
import PageLayout from '../components/PageLayout';
import GuideLinks from '../components/GuideLinks';

export default function GuidesJa() {
  return (
    <PageLayout breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'ガイド一覧' }]}>
      <h1 className="text-2xl md:text-3xl font-bold text-secondary mb-4">フィリピン書類 代行ガイド一覧</h1>
      <p className="text-sm text-gray-600 mb-6">国際結婚・配偶者ビザ・外免切替・帰化申請に必要なフィリピン書類の代行サービス一覧です。</p>
      <GuideLinks />
    </PageLayout>
  );
}
