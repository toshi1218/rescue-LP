import React from 'react';
import PageLayout from '../components/PageLayout';
import { useMeta } from '../lib/useMeta';
import TrackingPortal from '../components/TrackingPortal';

export default function TrackingEn() {
  useMeta(
    'Track Your Order | Philippine Document Service',
    'Open the private customer link sent by IGRS Inc. to check your order status securely.',
  );

  return (
    <PageLayout breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'Track Order' }]}>
      <TrackingPortal lang="en" />
    </PageLayout>
  );
}
