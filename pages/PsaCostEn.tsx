import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';

export default function PsaCostEn() {
  return (
    <ServicePageTemplate
      lang="en"
      routePath="/en/psa-birth-certificate-cost"
      title="PSA Birth Certificate Cost"
      badges={["Ships to USA via DHL", "All-Inclusive Pricing", "Approx. 4-6 Weeks"]}
    />
  );
}

