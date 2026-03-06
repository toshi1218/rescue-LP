import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';

export default function ApostilleFeeJa() {
  return (
    <ServicePageTemplate
      lang="ja"
      routePath="/ja/apostille-ryokin"
      title="DFA Apostille Fee JA"
      badges={["Nihongo Support", "All-Inclusive", "About 1 Month"]}
    />
  );
}

