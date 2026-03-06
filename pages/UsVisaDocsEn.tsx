import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';

export default function UsVisaDocsEn() {
  return (
    <ServicePageTemplate
      lang="en"
      routePath="/en/us-visa-documents"
      title="US Visa Documents Service"
      badges={["Ships to USA via DHL", "All-Inclusive Pricing", "Approx. 4-6 Weeks"]}
    />
  );
}

