import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';

export default function NbiHitEn() {
  return (
    <ServicePageTemplate
      lang="en"
      routePath="/en/nbi-hit"
      title="NBI HIT Resolution Service"
      badges={["Ships to USA via DHL", "Case Handling Included", "Approx. 4-6 Weeks"]}
    />
  );
}

