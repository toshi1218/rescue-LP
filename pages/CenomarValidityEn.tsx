import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';

export default function CenomarValidityEn() {
  return (
    <ServicePageTemplate
      lang="en"
      routePath="/en/cenomar-validity"
      title="CENOMAR Validity & Timing Service"
      badges={["Ships to USA via DHL", "All-Inclusive Pricing", "Approx. 4-6 Weeks"]}
    />
  );
}

