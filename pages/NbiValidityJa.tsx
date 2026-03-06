import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';

export default function NbiValidityJa() {
  return (
    <ServicePageTemplate
      lang="ja"
      routePath="/ja/nbi-koyukigen"
      title="NBI Validity Daiko JA"
      badges={["Nihongo Support", "All-Inclusive", "About 1 Month"]}
    />
  );
}

