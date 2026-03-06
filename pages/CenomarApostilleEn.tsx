import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';

export default function CenomarApostilleEn() {
  return (
    <ServicePageTemplate
      lang="en"
      routePath="/en/cenomar-apostille"
      title="CENOMAR Apostille Service"
      badges={["Ships to USA via DHL", "All-Inclusive Pricing", "Approx. 4-6 Weeks"]}
    />
  );
}

