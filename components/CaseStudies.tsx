import React from 'react';
import { useLanguage } from '../lib/i18n';

const caseStudiesData = {
  ja: [
    {
      title: '国際結婚：CENOMAR・PSA一括代行',
      summary: 'CENOMAR（独身証明書）・PSA出生証明書・翻訳をまとめて代行依頼。日本からフィリピン現地の手続きを完全丸投げ',
      support: '必要書類を一式整理し取得順序を設計。進捗を段階的に報告し、手続き全体をスムーズに完了',
    },
    {
      title: '配偶者ビザ：NBI・アポスティーユ代行',
      summary: 'NBI無犯罪証明書とDFAアポスティーユ認証の取得を代行依頼。ビザ申請の期限に間に合わせたい',
      support: '不備リスクの高い項目を事前確認。追加手続きの発生を抑え、期限内に書類を届け',
    },
    {
      title: '外免切替：LTO書類取得代行',
      summary: 'LTO関連書類の取得方法が不明な状態から代行依頼をスタート。渡航ゼロでLTO書類を取得',
      support: '外免切替に必要な書類を整理し、最短経路で取得。お客様の手間を最小限に',
    },
  ],
  en: [
    {
      title: 'International Marriage: CENOMAR + PSA Bundle',
      summary: 'Ordered CENOMAR, PSA Birth Certificate, and translation as a bundle — fully handled from Japan',
      support: 'Full document list organized, acquisition sequence planned, step-by-step progress updates provided throughout',
    },
    {
      title: 'Spouse Visa: NBI + DFA Apostille',
      summary: 'Requested NBI Clearance and DFA Apostille procurement to meet visa application deadline',
      support: 'Pre-checked high-risk items for errors; delivered documents on time without additional procedures',
    },
    {
      title: 'License Transfer: LTO Document Procurement',
      summary: 'Started with no knowledge of LTO procedures — completed entirely without traveling to the Philippines',
      support: 'Identified the exact documents needed for foreign license conversion and delivered them via the fastest route',
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
