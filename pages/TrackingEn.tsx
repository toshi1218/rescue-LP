import React from 'react';
import PageLayout from '../components/PageLayout';
import { useMeta } from '../lib/useMeta';
import TrackingPortal from '../components/TrackingPortal';

export default function TrackingEn() {
  useMeta(
    'Track Your Order | Philippine Document Service',
    'Enter your tracking code and PIN to check the status of your order and upload documents.',
  );

  return (
    <PageLayout breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'Track Order' }]}>
      <TrackingPortal lang="en" />
    </PageLayout>
  );
}
