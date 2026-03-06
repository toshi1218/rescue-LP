import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';

export default function MarriageGuideJa() {
  return (
    <ServicePageTemplate
      lang="ja"
      routePath="/ja/kokusai-kekkon-guide"
      title="International Marriage Docs JA"
      badges={["Nihongo Support", "All-Inclusive", "About 1 Month"]}
    />
  );
}

