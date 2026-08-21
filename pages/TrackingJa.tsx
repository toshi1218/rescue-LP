import React from 'react';
import PageLayout from '../components/PageLayout';
import { useMeta } from '../lib/useMeta';
import TrackingPortal from '../components/TrackingPortal';

export default function TrackingJa() {
  useMeta(
    'ご依頼の進捗確認｜フィリピン書類取得代行センター',
    'IGRS Inc.からお送りしたお客様専用リンクで、ご依頼の進捗状況を安全に確認できます。',
  );

  return (
    <PageLayout breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: '進捗確認' }]}>
      <TrackingPortal lang="ja" />
    </PageLayout>
  );
}
