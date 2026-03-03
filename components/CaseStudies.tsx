import React from 'react';
import { useLanguage } from '../lib/i18n';

const caseStudiesData = {
  ja: [
    {
      title: '国際結婚：CENOMAR・PSA・翻訳を一括代行',
      summary: 'フィリピン人パートナーとの婚姻届提出に必要な書類をまとめて相談',
      support: '取得順序の設計から進捗報告まで一括対応。渡航不要で完結',
    },
    {
      title: '配偶者ビザ：NBI・アポスティーユをまとめて取得',
      summary: '配偶者ビザ申請に必要なNBI無犯罪証明書とDFAアポスティーユ認証を代行',
      support: '不備リスクの高い項目を事前確認し、追加手続きの発生を最小化',
    },
    {
      title: '外免切替：LTO関連書類を完全サポート',
      summary: 'LTO運転免許証明書・ドライバーレコードの取得方法が不明な状態から相談',
      support: '外免切替に必要な書類を整理し、公認翻訳への手配もワンストップ対応',
    },
  ],
  en: [
    {
      title: 'K-1 Fiancé Visa (USCIS Petition)',
      summary: 'Needed PSA Birth Certificate, CENOMAR, and NBI Clearance for I-129F petition filing',
      support: 'Identified exact USCIS requirements, coordinated DFA Apostille before the US Embassy interview',
    },
    {
      title: 'CR-1 Spouse Visa (NVC Submission)',
      summary: 'Required PSA Birth Certificate and NBI Clearance with DFA Apostille for NVC document submission',
      support: 'Confirmed NVC-specific format requirements and shipped all documents via DHL to the US address',
    },
    {
      title: 'US Embassy Interview Prep',
      summary: 'Needed fresh NBI Clearance (within 6 months) and PSA Marriage Certificate before the interview date',
      support: 'Verified Embassy interview checklist, obtained NBI renewal and Apostille within the client\'s deadline',
    },
  ],
};

const CaseStudies: React.FC = () => {
  const { lang, t } = useLanguage();
  const caseStudies = caseStudiesData[lang];

  return (
    <section className="py-12 bg-white" aria-labelledby="case-studies-title">
      <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <span className="text-primary font-bold text-xs font-display tracking-widest uppercase mb-1 block">Case Studies</span>
          <h3 id="case-studies-title" className="text-xl font-bold text-secondary">{t('cases.title')}</h3>
          <p className="text-xs text-gray-500 mt-2">{t('cases.note')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {caseStudies.map((item) => (
            <article key={item.title} className="border border-gray-100 bg-gray-50 rounded-xl p-4 shadow-card">
              <h3 className="font-bold text-sm text-secondary mb-2">{item.title}</h3>
              <p className="text-xs text-gray-600 mb-2">{item.summary}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{item.support}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
