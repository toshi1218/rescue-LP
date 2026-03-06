import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';

export default function ApostilleGuideEn() {
  return (
    <ServicePageTemplate
      lang="en"
      routePath="/en/apostille"
      title="DFA Apostille Service"
      badges={["Ships to USA via DHL", "All-Inclusive Pricing", "Approx. 4-6 Weeks"]}
    />
  );
}

