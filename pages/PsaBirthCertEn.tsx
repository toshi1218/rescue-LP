import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';

export default function PsaBirthCertEn() {
  return (
    <ServicePageTemplate
      lang="en"
      routePath="/en/psa-birth-certificate"
      title="PSA Birth Certificate Retrieval"
      badges={["Ships to USA via DHL", "All-Inclusive Pricing", "Approx. 4-6 Weeks"]}
    />
  );
}

