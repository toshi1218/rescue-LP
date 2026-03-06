import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';

export default function NbiValidityEn() {
  return (
    <ServicePageTemplate
      lang="en"
      routePath="/en/nbi-validity"
      title="NBI Clearance Validity"
      badges={["Ships to USA via DHL", "All-Inclusive Pricing", "Approx. 4-6 Weeks"]}
    />
  );
}

