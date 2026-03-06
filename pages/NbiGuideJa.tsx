import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';

export default function NbiGuideJa() {
  return (
    <ServicePageTemplate
      lang="ja"
      routePath="/ja/nbi-clearance"
      title="NBI Clearance Daiko JA"
      badges={["Nihongo Support", "All-Inclusive", "About 1 Month"]}
    />
  );
}

