import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';

export default function LicenseConversionEn() {
  return (
    <ServicePageTemplate
      lang="en"
      routePath="/en/drivers-license-conversion"
      title="Philippine License Conversion Documents"
      badges={["Ships to USA via DHL", "All-Inclusive Pricing", "Approx. 4-6 Weeks"]}
    />
  );
}

