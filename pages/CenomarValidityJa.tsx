import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';

export default function CenomarValidityJa() {
  return (
    <ServicePageTemplate
      lang="ja"
      routePath="/ja/cenomar-koyukigen"
      title="CENOMAR Timing Daiko JA"
      badges={["Nihongo Support", "All-Inclusive", "About 1 Month"]}
    />
  );
}

