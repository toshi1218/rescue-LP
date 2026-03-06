import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';

export default function DriverRecordJa() {
  return (
    <ServicePageTemplate
      lang="ja"
      routePath="/ja/driver-record"
      title="Driver Record Daiko JA"
      badges={["Nihongo Support", "All-Inclusive", "About 1 Month"]}
    />
  );
}

