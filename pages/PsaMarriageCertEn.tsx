import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';

export default function PsaMarriageCertEn() {
  return (
    <ServicePageTemplate
      lang="en"
      routePath="/en/psa-marriage-certificate"
      title="PSA Marriage Certificate Retrieval"
      badges={["Ships to USA via DHL", "All-Inclusive Pricing", "Approx. 4-6 Weeks"]}
    />
  );
}

