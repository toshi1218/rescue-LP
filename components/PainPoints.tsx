import React from 'react';
import { Globe, Clock, FileQuestion, Frown } from 'lucide-react';
import { useLanguage } from '../lib/i18n';

const PainPoints: React.FC = () => {
  const { t } = useLanguage();

  const cards = [
    { icon: Globe, color: 'bg-red-50 text-red-500', titleKey: 'painpoints.1.title' as const, descKey: 'painpoints.1.desc' as const },
    { icon: Clock, color: 'bg-orange-50 text-orange-500', titleKey: 'painpoints.2.title' as const, descKey: 'painpoints.2.desc' as const },
    { icon: FileQuestion, color: 'bg-blue-50 text-blue-500', titleKey: 'painpoints.3.title' as const, descKey: 'painpoints.3.desc' as const },
    { icon: Frown, color: 'bg-purple-50 text-purple-500', titleKey: 'painpoints.4.title' as const, descKey: 'painpoints.4.desc' as const },
  ];

  return (
    <section className="py-12 px-4 max-w-md md:max-w-2xl lg:max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-lg md:text-xl font-bold text-secondary mb-2">{t('painpoints.title')}</h2>
        <div className="h-1 w-12 bg-primary mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cards.map(({ icon: Icon, color, titleKey, descKey }) => (
          <div key={titleKey} className="bg-white p-4 rounded-xl shadow-card border border-gray-100 flex flex-col items-start h-full">
            <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center mb-3 shrink-0`}>
              <Icon className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm mb-1 text-gray-800">{t(titleKey)}</h3>
            <p className="text-xs text-gray-500 leading-relaxed">{t(descKey)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PainPoints;
