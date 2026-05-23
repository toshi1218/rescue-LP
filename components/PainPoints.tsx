import React from 'react';
import { AlertCircle, FileX, HelpCircle, ShieldAlert } from 'lucide-react';
import { useLanguage } from '../lib/i18n';

const PainPoints: React.FC = () => {
  const { t } = useLanguage();

  const cards = [
    { icon: AlertCircle, titleKey: 'painpoints.1.title' as const, descKey: 'painpoints.1.desc' as const },
    { icon: FileX, titleKey: 'painpoints.2.title' as const, descKey: 'painpoints.2.desc' as const },
    { icon: HelpCircle, titleKey: 'painpoints.3.title' as const, descKey: 'painpoints.3.desc' as const },
    { icon: ShieldAlert, titleKey: 'painpoints.4.title' as const, descKey: 'painpoints.4.desc' as const },
  ];

  return (
    <section className="py-10 px-4 bg-secondary relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-24 -top-24 w-80 h-80 bg-primary rounded-full blur-[120px] opacity-10"></div>
        <div className="absolute -left-24 -bottom-24 w-80 h-80 bg-primary rounded-full blur-[120px] opacity-10"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle, #d69e2e 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
      </div>

      <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-5">
          <span className="text-primary font-bold text-xs font-display tracking-widest uppercase mb-2 block">Pain Points</span>
          <h2 className="text-lg md:text-xl font-bold text-white mb-3">{t('painpoints.title')}</h2>
          <div className="h-1 w-12 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {cards.map(({ icon: Icon, titleKey, descKey }) => (
            <div key={titleKey} className="bg-white/10 backdrop-blur-sm border border-white/10 p-4 rounded-2xl flex flex-col gap-2 hover:bg-white/15 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-sm text-white">{t(titleKey)}</h3>
              </div>
              <p className="text-xs text-white/60 leading-relaxed">{t(descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
