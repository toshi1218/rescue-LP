import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';

export default function NbiGuideEn() {
  return (
    <ServicePageTemplate
      lang="en"
      routePath="/en/nbi-clearance"
      title="NBI Clearance Retrieval"
      badges={["Ships to USA via DHL", "All-Inclusive Pricing", "Approx. 4-6 Weeks"]}
    />
  );
}

