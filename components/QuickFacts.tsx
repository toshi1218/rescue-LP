import React, { useMemo } from 'react';
import { FileText, Clock, MessageCircle, Building2 } from 'lucide-react';
import { useLanguage } from '../lib/i18n';

const cardConfig = [
  {
    icon: FileText,
    accentBar: 'bg-secondary',
    iconBg: 'bg-secondary/8',
    iconColor: 'text-secondary',
    border: 'border-secondary/12',
  },
  {
    icon: Clock,
    accentBar: 'bg-primary',
    iconBg: 'bg-primary/10',
    iconColor: 'text-primary-dark',
    border: 'border-primary/12',
  },
  {
    icon: MessageCircle,
    accentBar: 'bg-emerald-500',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-700',
    border: 'border-emerald-100',
  },
  {
    icon: Building2,
    accentBar: 'bg-violet-500',
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-700',
    border: 'border-violet-100',
  },
];

const QuickFacts: React.FC = React.memo(() => {
  const { t } = useLanguage();

  const facts = useMemo(() => [
    { labelKey: 'quickfacts.docs.label' as const, valueKey: 'quickfacts.docs.value' as const },
    { labelKey: 'quickfacts.period.label' as const, valueKey: 'quickfacts.period.value' as const },
    { labelKey: 'quickfacts.lang.label' as const, valueKey: 'quickfacts.lang.value' as const },
    { labelKey: 'quickfacts.company.label' as const, valueKey: 'quickfacts.company.value' as const },
  ], []);

  return (
    <section className="py-10 px-4 max-w-md md:max-w-2xl lg:max-w-4xl mx-auto" aria-labelledby="quick-facts-title">
      <h3 id="quick-facts-title" className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center mb-4">
        {t('quickfacts.title')}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {facts.map(({ labelKey, valueKey }, i) => {
          const { icon: Icon, accentBar, iconBg, iconColor, border } = cardConfig[i];
          return (
            <div
              key={labelKey}
              className={`bg-white border ${border} rounded-2xl p-4 shadow-card relative overflow-hidden`}
            >
              <div className={`absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl ${accentBar}`} />
              <div className={`w-9 h-9 rounded-xl ${iconBg} flex items-center justify-center mb-3`}>
                <Icon className={`w-5 h-5 ${iconColor}`} />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-wide text-gray-400 mb-1 leading-none">
                {t(labelKey)}
              </p>
              <p className="text-xs font-semibold text-gray-800 leading-snug">
                {t(valueKey)}
              </p>
            </div>
          );
        })}
      </div>
      <p className="text-[10px] text-gray-400 text-center mt-3">{t('quickfacts.updated')}</p>
    </section>
  );
});

QuickFacts.displayName = 'QuickFacts';
export default QuickFacts;
