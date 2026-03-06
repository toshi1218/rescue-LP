import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';

export default function NbiHitJa() {
  return (
    <ServicePageTemplate
      lang="ja"
      routePath="/ja/nbi-hit"
      title="NBI HIT Daiko JA"
      badges={["Nihongo Support", "Case Handling", "About 1 Month"]}
    />
  );
}

