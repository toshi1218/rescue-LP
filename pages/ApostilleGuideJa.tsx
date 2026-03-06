import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';

export default function ApostilleGuideJa() {
  return (
    <ServicePageTemplate
      lang="ja"
      routePath="/ja/apostille"
      title="DFA Apostille Daiko JA"
      badges={["Nihongo Support", "All-Inclusive", "About 1 Month"]}
    />
  );
}

