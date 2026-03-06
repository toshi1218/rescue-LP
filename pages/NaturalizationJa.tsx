import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';

export default function NaturalizationJa() {
  return (
    <ServicePageTemplate
      lang="ja"
      routePath="/ja/kika-shinsei-guide"
      title="Naturalization Docs JA"
      badges={["Nihongo Support", "All-Inclusive", "About 1 Month"]}
    />
  );
}

