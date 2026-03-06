import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';

export default function DfaProcessingTimeEn() {
  return (
    <ServicePageTemplate
      lang="en"
      routePath="/en/apostille-processing-time"
      title="DFA Apostille Processing Time"
      badges={["Ships to USA via DHL", "All-Inclusive Pricing", "Approx. 4-6 Weeks"]}
    />
  );
}

