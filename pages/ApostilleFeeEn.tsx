import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';

export default function ApostilleFeeEn() {
  return (
    <ServicePageTemplate
      lang="en"
      routePath="/en/apostille-fee"
      title="DFA Apostille Fee & Pricing"
      badges={["Ships to USA via DHL", "All-Inclusive Pricing", "Approx. 4-6 Weeks"]}
    />
  );
}

