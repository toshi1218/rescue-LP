import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';

export default function CenomarApostilleJa() {
  return (
    <ServicePageTemplate
      lang="ja"
      routePath="/ja/cenomar-apostille"
      title="CENOMAR Apostille Daiko JA"
      badges={["Nihongo Support", "Apostille Included", "About 1 Month"]}
    />
  );
}

