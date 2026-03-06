import React from 'react';
import PageLayout from '../components/PageLayout';
import GuideLinks from '../components/GuideLinks';

export default function GuidesJa() {
  return (
    <PageLayout breadcrumbs={[{ label: 'Home', href: '/ja/' }, { label: 'Guides' }]}>
      <h1 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Guides JA</h1>
      <GuideLinks />
    </PageLayout>
  );
}

