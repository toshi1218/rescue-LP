import React from 'react';
import PageLayout from '../components/PageLayout';
import GuideLinks from '../components/GuideLinks';

export default function GuidesEn() {
  return (
    <PageLayout breadcrumbs={[{ label: 'Home', href: '/en/' }, { label: 'Guides' }]}>
      <h1 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Guides</h1>
      <GuideLinks />
    </PageLayout>
  );
}

