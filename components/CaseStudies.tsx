import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, Heart, ShieldCheck, Car, Globe, Users, Fingerprint, ArrowDown, ChevronDown } from 'lucide-react';
import { useLanguage } from '../lib/i18n';

const caseStudiesData = {
  ja: [
    {
      icon: Heart,
      iconColor: 'text-rose-500',
      iconBg: 'bg-rose-50',
      accentColor: 'border-rose-200',
      headerBg: 'bg-gradient-to-r from-rose-50 to-rose-100/50',
      badgeColor: 'bg-rose-100 text-rose-700',
      title: '国際結婚：PSA＋CENOMAR＋アポスティーユ',
      fear: '「フィリピンに一度も行ったことがなく、現地に知人もいない。必要な書類をどうやって取ればいいか全く分からなかった」（日本在住フィリピン国籍・A様）',
      action: 'PSA出生証明書・CENOMAR・DFAアポスティーユを一式代行。必要書類の整理から現地手配・発送まで日本語だけで完結。',
      result: '日本での婚姻届提出に必要な書類一式をDHLで納品。フィリピンへの渡航なしで婚姻手続きを無事完了。',
    },
    {
      icon: ShieldCheck,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-50',
      accentColor: 'border-blue-200',
      headerBg: 'bg-gradient-to-r from-blue-50 to-blue-100/50',
      badgeColor: 'bg-blue-100 text-blue-700',
      title: '配偶者ビザ：NBI・アポスティーユ代行',
      fear: '「ビザ申請の期限が迫っている。書類に不備があったら申請が通らないかもしれない…」',
      action: '入管の要件を事前確認し、不備リスクの高い項目を先回りして排除。期限から逆算してスケジュールを設計。',
      result: '期限内に書類を届け、配偶者ビザ申請を無事に完了。追加手続きの発生なし。',
    },
    {
      icon: Car,
      iconColor: 'text-emerald-600',
      iconBg: 'bg-emerald-50',
      accentColor: 'border-emerald-200',
      headerBg: 'bg-gradient-to-r from-emerald-50 to-emerald-100/50',
      badgeColor: 'bg-emerald-100 text-emerald-700',
      title: '法人：フィリピン人従業員のLTO書類取得',
      fear: '「フィリピン人従業員に日本で運転させたいが、LTO書類の取り方が全く分からない。渡航なしで取れるのか不安だった」（静岡・リサイクル業・O社）',
      action: 'LTO運転経歴証明書×2部＋DFAアポスティーユ＋オフィシャルレシートを一式代行。法人として必要な書類要件を事前確認してから取得。',
      result: '外免切替に必要な書類一式をDHLで法人宛に納品。フィリピンへの渡航・現地手配は一切不要で完結。',
    },
  ],
  en: [
    {
      icon: Users,
      iconColor: 'text-rose-500',
      iconBg: 'bg-rose-50',
      accentColor: 'border-rose-200',
      headerBg: 'bg-gradient-to-r from-rose-50 to-rose-100/50',
      badgeColor: 'bg-rose-100 text-rose-700',
      title: 'K-1 Fiancé Visa (USCIS Petition)',
      fear: '"I don\'t know exactly what USCIS needs. If I get the wrong documents, the petition could be delayed for months."',
      action: 'We confirmed the exact USCIS document checklist, coordinated DFA Apostille, and shipped everything before the embassy interview date.',
      result: 'All documents arrived at the US address via DHL well before the USCIS deadline. Petition filed without issues.',
    },
    {
      icon: Globe,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-50',
      accentColor: 'border-blue-200',
      headerBg: 'bg-gradient-to-r from-blue-50 to-blue-100/50',
      badgeColor: 'bg-blue-100 text-blue-700',
      title: 'Canada PR Application (IRCC)',
      fear: '"IRCC requirements are different from the US. I have no idea if my NBI Clearance needs Apostille or not."',
      action: 'We confirmed IRCC-specific Apostille requirements, retrieved NBI Clearance and PSA Birth Certificate, and shipped via DHL to Canada.',
      result: 'All documents arrived at the Canadian address in the correct format. PR application submitted on schedule.',
    },
    {
      icon: Fingerprint,
      iconColor: 'text-emerald-600',
      iconBg: 'bg-emerald-50',
      accentColor: 'border-emerald-200',
      headerBg: 'bg-gradient-to-r from-emerald-50 to-emerald-100/50',
      badgeColor: 'bg-emerald-100 text-emerald-700',
      title: 'Australia Partner Visa (Home Affairs)',
      fear: '"Home Affairs has a strict document checklist. One wrong format and the whole application could be rejected."',
      action: 'We verified the Department of Home Affairs checklist, obtained CENOMAR and PSA Birth Certificate with DFA Apostille, and shipped within the client\'s deadline.',
      result: 'All Apostille-authenticated originals delivered to Sydney via DHL. Partner visa application submitted successfully.',
    },
  ],
};

const CaseStudies: React.FC = React.memo(() => {
  const { lang, t } = useLanguage();
  const caseStudies = caseStudiesData[lang];
  const isJa = lang === 'ja';
  const [expanded, setExpanded] = useState(false);

  const visibleCases = expanded ? caseStudies : caseStudies.slice(0, 1);

  return (
    <section className="py-12 md:py-20 bg-slate-50" aria-labelledby="case-studies-title">
      <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <span className="text-primary-dark font-bold text-xs font-display tracking-widest uppercase mb-1 block">Case Studies</span>
          <h3 id="case-studies-title" className="text-xl font-bold text-secondary">{t('cases.title')}</h3>
          <p className="text-xs text-gray-500 mt-2">{t('cases.note')}</p>
          <div className="h-1 w-12 bg-primary mx-auto rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {visibleCases.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className={`border ${item.accentColor} bg-white rounded-2xl shadow-card flex flex-col overflow-hidden`}>
                {/* Card header */}
                <div className={`${item.headerBg} px-5 py-4 flex items-center gap-3 border-b ${item.accentColor}`}>
                  <div className={`w-10 h-10 rounded-xl ${item.iconBg} border ${item.accentColor} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-5 h-5 ${item.iconColor}`} />
                  </div>
                  <h3 className="font-bold text-sm text-secondary leading-snug">{item.title}</h3>
                </div>

                <div className="p-5 flex flex-col gap-2 flex-1">
                  {/* PROBLEM */}
                  <div>
                    <span className={`inline-block text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-1.5 ${item.badgeColor}`}>
                      {isJa ? '不安' : 'Challenge'}
                    </span>
                    <div className="flex items-start gap-2 bg-red-50 rounded-xl px-3 py-2.5">
                      <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-gray-600 italic leading-relaxed">{item.fear}</p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <ArrowDown className="w-4 h-4 text-gray-300" />
                  </div>

                  {/* APPROACH */}
                  <div>
                    <span className="inline-block text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-1.5 bg-gray-100 text-gray-500">
                      {isJa ? '対応' : 'Approach'}
                    </span>
                    <div className="flex items-start gap-2 bg-gray-50 rounded-xl px-3 py-2.5">
                      <span className="flex-shrink-0 w-4 h-4 rounded-full bg-secondary/15 flex items-center justify-center mt-0.5">
                        <span className="text-secondary text-[9px] font-bold">→</span>
                      </span>
                      <p className="text-xs text-gray-500 leading-relaxed">{item.action}</p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <ArrowDown className="w-4 h-4 text-gray-300" />
                  </div>

                  {/* OUTCOME */}
                  <div className="mt-auto">
                    <span className="inline-block text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-1.5 bg-green-100 text-green-700">
                      {isJa ? '結果' : 'Outcome'}
                    </span>
                    <div className="flex items-start gap-2 bg-green-50 border border-green-100 rounded-xl px-3 py-2.5">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-gray-700 font-semibold leading-relaxed">{item.result}</p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {!expanded && (
          <div className="text-center mt-6">
            <button
              onClick={() => setExpanded(true)}
              className="inline-flex items-center gap-2 text-sm font-bold text-secondary border border-secondary/30 bg-white px-6 py-3 rounded-xl hover:bg-secondary hover:text-white transition-all shadow-sm"
            >
              <ChevronDown className="w-4 h-4" />
              {isJa ? `他の事例を見る（残り${caseStudies.length - 1}件）` : `See more cases (${caseStudies.length - 1} more)`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
});

export default CaseStudies;
