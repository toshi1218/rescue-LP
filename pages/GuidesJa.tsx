import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import GuideLinks from '../components/GuideLinks';
import { useMeta } from '../lib/useMeta';

const COUNTRY_LINKS = [
  { label: '米国（K-1・CR-1・配偶者ビザ）', path: '/ja/us-visa-documents/' },
  { label: 'カナダ', path: '/ja/canada/' },
  { label: 'オーストラリア', path: '/ja/australia/' },
  { label: '英国', path: '/ja/uk/' },
];

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

      <section className="mt-10">
        <h2 className="text-lg font-bold text-secondary mb-3 border-b border-primary/20 pb-2">海外移住・ビザ別の必要書類</h2>
        <p className="text-sm text-gray-600 mb-4">移住先・ビザの種類ごとに、必要なフィリピン書類と認証の要件が異なります。目的地を選んでください。</p>
        <div className="grid grid-cols-2 gap-2">
          {COUNTRY_LINKS.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className="block px-3 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-700 hover:border-primary hover:text-primary transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
