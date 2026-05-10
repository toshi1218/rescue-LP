import React, { useState } from 'react';
import { AlertCircle, FileX, HelpCircle, ShieldAlert, ChevronDown } from 'lucide-react';
import { useLanguage } from '../lib/i18n';

const PainPoints: React.FC = () => {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState(false);

  const cards = [
    { icon: AlertCircle, titleKey: 'painpoints.1.title' as const, descKey: 'painpoints.1.desc' as const },
    { icon: FileX, titleKey: 'painpoints.2.title' as const, descKey: 'painpoints.2.desc' as const },
    { icon: HelpCircle, titleKey: 'painpoints.3.title' as const, descKey: 'painpoints.3.desc' as const },
    { icon: ShieldAlert, titleKey: 'painpoints.4.title' as const, descKey: 'painpoints.4.desc' as const },
  ];

  const visible = expanded ? cards : cards.slice(0, 2);

  return (
    <section className="py-20 px-4 bg-secondary relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-24 -top-24 w-80 h-80 bg-primary rounded-full blur-[120px] opacity-10"></div>
        <div className="absolute -left-24 -bottom-24 w-80 h-80 bg-primary rounded-full blur-[120px] opacity-10"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle, #d69e2e 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
      </div>

      <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <span className="text-primary font-bold text-xs font-display tracking-widest uppercase mb-2 block">Pain Points</span>
          <h2 className="text-lg md:text-xl font-bold text-white mb-3">{t('painpoints.title')}</h2>
          <div className="h-1 w-12 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {visible.map(({ icon: Icon, titleKey, descKey }) => (
            <div key={titleKey} className="bg-white/10 backdrop-blur-sm border border-white/10 p-5 rounded-2xl flex flex-col items-start h-full hover:bg-white/15 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center mb-4 shrink-0">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-sm mb-1.5 text-white">{t(titleKey)}</h3>
              <p className="text-xs text-white/60 leading-relaxed">{t(descKey)}</p>
            </div>
          ))}
        </div>

        {!expanded && (
          <div className="text-center mt-6">
            <button
              onClick={() => setExpanded(true)}
              className="inline-flex items-center gap-2 text-sm font-bold text-white bg-white/10 border border-white/20 px-6 py-3 rounded-xl hover:bg-white/20 transition-all"
            >
              <ChevronDown className="w-4 h-4" />
              {`残り${cards.length - 2}件を見る`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PainPoints;
