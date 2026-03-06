import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';

export default function MarriageGuideEn() {
  return (
    <ServicePageTemplate
      lang="en"
      routePath="/en/international-marriage-guide"
      title="International Marriage Documents Service"
      badges={["Ships to USA via DHL", "All-Inclusive Pricing", "Approx. 4-6 Weeks"]}
    />
  );
}

