import React from 'react';
import { useLanguage } from '../lib/i18n';

const QuickFacts: React.FC = () => {
  const { t } = useLanguage();

  const facts = [
    { labelKey: 'quickfacts.docs.label' as const, valueKey: 'quickfacts.docs.value' as const },
    { labelKey: 'quickfacts.period.label' as const, valueKey: 'quickfacts.period.value' as const },
    { labelKey: 'quickfacts.lang.label' as const, valueKey: 'quickfacts.lang.value' as const },
    { labelKey: 'quickfacts.company.label' as const, valueKey: 'quickfacts.company.value' as const },
  ];

  return (
    <section className="py-8 px-4 max-w-md md:max-w-2xl lg:max-w-4xl mx-auto" aria-labelledby="quick-facts-title">
      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-card">
        <h3 id="quick-facts-title" className="text-lg font-bold text-secondary mb-3">
          {t('quickfacts.title')}
        </h3>
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
          {facts.map(({ labelKey, valueKey }) => (
            <div key={labelKey}>
              <dt className="text-gray-500">{t(labelKey)}</dt>
              <dd className="font-medium text-gray-800">{t(valueKey)}</dd>
            </div>
          ))}
        </dl>
        <p className="text-xs text-gray-500 mt-4">{t('quickfacts.updated')}</p>
      </div>
    </section>
  );
};

export default QuickFacts;
