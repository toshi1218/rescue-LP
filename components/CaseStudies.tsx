import React from 'react';
import { useLanguage } from '../lib/i18n';

const caseStudiesData = {
  ja: [
    {
      title: '国際結婚手続き向け',
      summary: 'セノマー（CENOMAR）・PSA出生証明書・翻訳をまとめて相談',
      support: '必要書類の整理、取得順序の設計、進捗を段階報告',
    },
    {
      title: '配偶者ビザ申請向け',
      summary: 'NBI無犯罪証明書とDFAアポスティーユ認証の取得を依頼',
      support: '不備リスクの高い項目を事前確認し、追加手続きの発生を抑制',
    },
    {
      title: '外免切替準備向け',
      summary: 'LTO関連書類の取得方法が不明な状態から相談開始',
      support: '用途に合わせた取得書類を整理し、問い合わせ負荷を軽減',
    },
  ],
  en: [
    {
      title: 'International Marriage',
      summary: 'Consulted on CENOMAR, PSA Birth Certificate, and translation as a bundle',
      support: 'Organized required documents, designed acquisition order, and provided step-by-step progress updates',
    },
    {
      title: 'Spouse Visa Application',
      summary: 'Requested NBI Clearance and DFA Apostille Authentication procurement',
      support: 'Pre-checked high-risk items for errors to prevent additional procedures from arising',
    },
    {
      title: 'License Transfer Preparation',
      summary: 'Started consultation with no knowledge of how to obtain LTO documents',
      support: 'Identified the right documents for the specific use case, reducing back-and-forth inquiries',
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
