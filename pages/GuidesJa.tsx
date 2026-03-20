import React from 'react';
import PageLayout from '../components/PageLayout';
import GuideLinks from '../components/GuideLinks';
import { useMeta } from '../lib/useMeta';

export default function GuidesJa() {
  useMeta(
    'フィリピン書類ガイド一覧【2026年版】｜CENOMAR・NBI・DFAアポスティーユ・LTO',
    'CENOMAR・NBI Clearance・DFAアポスティーユ・LTO書類の取得代行サービス一覧。国際結婚・配偶者ビザ・帰化申請・外免切替に必要な書類を日本語だけで取り寄せ。',
  );
  return (
    <PageLayout breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'ガイド一覧' }]}>
      <h1 className="text-2xl md:text-3xl font-bold text-secondary mb-4">フィリピン書類 代行ガイド一覧</h1>
      <p className="text-sm text-gray-600 mb-6">国際結婚・配偶者ビザ・外免切替・帰化申請に必要なフィリピン書類の代行サービス一覧です。</p>
      <GuideLinks />
    </PageLayout>
  );
}
