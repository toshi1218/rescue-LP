import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';

export default function NaturalizationEn() {
  return (
    <ServicePageTemplate
      lang="en"
      routePath="/en/naturalization-guide"
      title="Naturalization Documents Service"
      badges={["Ships to USA via DHL", "All-Inclusive Pricing", "Approx. 4-6 Weeks"]}
    />
  );
}

