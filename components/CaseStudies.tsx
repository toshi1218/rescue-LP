import React from 'react';
import { AlertCircle, CheckCircle2, Heart, ShieldCheck, Car, Globe, Users, Fingerprint } from 'lucide-react';
import { useLanguage } from '../lib/i18n';

const caseStudiesData = {
  ja: [
    {
      icon: Heart,
      iconColor: 'text-rose-500',
      iconBg: 'bg-rose-50',
      accentColor: 'border-rose-200',
      title: '国際結婚：CENOMAR・PSA一括代行',
      fear: '「何が必要か全く分からない。手続きを間違えたら婚姻届が受理されないかも…」',
      action: '必要書類を一式整理し取得順序を設計。申請・受理・発送の各段階で進捗をご報告。',
      result: '日本の市区町村役場に提出できる書類一式を、日本語だけのやり取りで完全取得。',
    },
    {
      icon: ShieldCheck,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-50',
      accentColor: 'border-blue-200',
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
      title: '外免切替：LTO書類取得代行',
      fear: '「LTO書類の取り方が全く分からない。フィリピンに行かないと無理なのでは…？」',
      action: '外免切替に必要な書類を整理し、試験場の予約日から逆算して確実に手配。渡航ゼロで完結。',
      result: 'LTO書類・DFAアポスティーユを取得し、日本の試験場に提出できる形で郵送。',
    },
  ],
  en: [
    {
      icon: Users,
      iconColor: 'text-rose-500',
      iconBg: 'bg-rose-50',
      accentColor: 'border-rose-200',
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

  return (
    <section className="py-12 bg-white" aria-labelledby="case-studies-title">
      <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <span className="text-primary-dark font-bold text-xs font-display tracking-widest uppercase mb-1 block">Case Studies</span>
          <h3 id="case-studies-title" className="text-xl font-bold text-secondary">{t('cases.title')}</h3>
          <p className="text-xs text-gray-500 mt-2">{t('cases.note')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {caseStudies.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className={`border ${item.accentColor} bg-white rounded-xl shadow-card flex flex-col overflow-hidden`}>
                {/* Card header */}
                <div className={`${item.iconBg} px-5 py-4 flex items-center gap-3 border-b ${item.accentColor}`}>
                  <div className={`w-10 h-10 rounded-xl ${item.iconBg} border ${item.accentColor} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-5 h-5 ${item.iconColor}`} />
                  </div>
                  <h3 className="font-bold text-sm text-secondary leading-snug">{item.title}</h3>
                </div>

                <div className="p-5 flex flex-col gap-3 flex-1">
                  {/* 不安 */}
                  <div className="flex items-start gap-2 bg-red-50 rounded-lg px-3 py-2.5">
                    <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-600 italic leading-relaxed">{item.fear}</p>
                  </div>

                  {/* 対応 */}
                  <div className="flex items-start gap-2 px-1">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center mt-0.5">
                      <span className="text-secondary text-[10px] font-bold">→</span>
                    </span>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.action}</p>
                  </div>

                  {/* 結果 */}
                  <div className="flex items-start gap-2 bg-green-50 rounded-lg px-3 py-2.5 mt-auto">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700 font-semibold leading-relaxed">{item.result}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
});

export default CaseStudies;
