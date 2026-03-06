import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';

export default function SpouseVisaEn() {
  return (
    <ServicePageTemplate
      lang="en"
      routePath="/en/spouse-visa-documents"
      title="Spouse Visa Documents Service"
      badges={["Ships to USA via DHL", "All-Inclusive Pricing", "Approx. 4-6 Weeks"]}
    />
  );
}

