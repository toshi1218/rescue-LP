import React from 'react';
import PageLayout from '../components/PageLayout';
import { useMeta } from '../lib/useMeta';
import TrackingPortal from '../components/TrackingPortal';

export default function TrackingJa() {
  useMeta(
    'ご依頼の進捗確認｜フィリピン書類取得代行センター',
    '追跡番号とPINを入力して、ご依頼の進捗状況を確認・書類のアップロードができます。',
  );

  return (
    <PageLayout breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: '進捗確認' }]}>
      <TrackingPortal lang="ja" />
    </PageLayout>
  );
}
