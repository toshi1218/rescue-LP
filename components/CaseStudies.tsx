import React from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../lib/i18n';

const caseStudiesData = {
  ja: [
    {
      title: '国際結婚：CENOMAR・PSA一括代行',
      fear: '「何が必要か全く分からない。手続きを間違えたら婚姻届が受理されないかも…」',
      action: '必要書類を一式整理し取得順序を設計。申請・受理・発送の各段階で進捗をご報告。',
      result: '日本の市区町村役場に提出できる書類一式を、日本語だけのやり取りで完全取得。',
    },
    {
      title: '配偶者ビザ：NBI・アポスティーユ代行',
      fear: '「ビザ申請の期限が迫っている。書類に不備があったら申請が通らないかもしれない…」',
      action: '入管の要件を事前確認し、不備リスクの高い項目を先回りして排除。期限から逆算してスケジュールを設計。',
      result: '期限内に書類を届け、配偶者ビザ申請を無事に完了。追加手続きの発生なし。',
    },
    {
      title: '外免切替：LTO書類取得代行',
      fear: '「LTO書類の取り方が全く分からない。フィリピンに行かないと無理なのでは…？」',
      action: '外免切替に必要な書類を整理し、試験場の予約日から逆算して確実に手配。渡航ゼロで完結。',
      result: 'LTO書類・DFAアポスティーユを取得し、日本の試験場に提出できる形で郵送。',
    },
  ],
  en: [
    {
      title: 'K-1 Fiancé Visa (USCIS Petition)',
      fear: '"I don\'t know exactly what USCIS needs. If I get the wrong documents, the petition could be delayed for months."',
      action: 'We confirmed the exact USCIS document checklist, coordinated DFA Apostille, and shipped everything before the embassy interview date.',
      result: 'All documents arrived at the US address via DHL well before the USCIS deadline. Petition filed without issues.',
    },
    {
      title: 'Canada PR Application (IRCC)',
      fear: '"IRCC requirements are different from the US. I have no idea if my NBI Clearance needs Apostille or not."',
      action: 'We confirmed IRCC-specific Apostille requirements, retrieved NBI Clearance and PSA Birth Certificate, and shipped via DHL to Canada.',
      result: 'All documents arrived at the Canadian address in the correct format. PR application submitted on schedule.',
    },
    {
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
          {caseStudies.map((item) => (
            <article key={item.title} className="border border-gray-100 bg-gray-50 rounded-xl p-5 shadow-card flex flex-col gap-3">
              <h3 className="font-bold text-base text-secondary">{item.title}</h3>

              {/* 不安 */}
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-base text-gray-600 italic leading-relaxed">{item.fear}</p>
              </div>

              {/* 対応 */}
              <div className="flex items-start gap-2">
                <span className="flex-shrink-0 w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                  <span className="text-primary text-[9px] font-bold">→</span>
                </span>
                <p className="text-base text-gray-500 leading-relaxed">{item.action}</p>
              </div>

              {/* 結果 */}
              <div className="flex items-start gap-2 pt-1 border-t border-gray-100">
                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-base text-gray-700 font-medium leading-relaxed">{item.result}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
});

export default CaseStudies;
