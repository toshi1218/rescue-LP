import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';

export default function DriverRecordEn() {
  return (
    <ServicePageTemplate
      lang="en"
      routePath="/en/driver-record"
      title="LTO Driver Record Retrieval"
      badges={["Ships to USA via DHL", "All-Inclusive Pricing", "Approx. 4-6 Weeks"]}
    />
  );
}

