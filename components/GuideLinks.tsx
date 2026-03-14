import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight } from 'lucide-react';
import { useLanguage } from '../lib/i18n';

const guidesData = {
  ja: [
    { to: '/ja/kokusai-kekkon-guide/', title: '国際結婚', desc: 'フィリピンで先に結婚する場合、日本で先に結婚する場合の流れを確認したい方へ', tag: '国際結婚の流れを見る' },
    { to: '/ja/haigusha-visa/',        title: '配偶者ビザ準備', desc: '日本で一緒に暮らすために必要なフィリピン書類を整理したい方へ', tag: '配偶者ビザ準備を見る' },
    { to: '/ja/gaimen-kirikae-guide/', title: '外免切替', desc: 'LTO書類や外免切替に必要な流れを確認したい方へ', tag: '外免切替を見る' },
    { to: '/ja/cenomar/',              title: '帰化・無犯罪証明など', desc: '用途に応じて必要書類を確認したい方へ', tag: '必要書類を確認する' },
  ],
  en: [
    { to: '/en/cenomar/',                   title: 'CENOMAR (Certificate of No Marriage)', desc: 'How to obtain, cost & timeline',                          tag: 'Most Popular' },
    { to: '/en/psa-birth-certificate/',     title: 'PSA Birth Certificate',               desc: 'Why you need it for marriage & visa',                     tag: null },
    { to: '/en/nbi-clearance/',             title: 'NBI Clearance',                       desc: 'Including how to handle NBI HIT issues',                  tag: null },
    { to: '/en/international-marriage-guide/', title: 'International Marriage Guide',     desc: 'Process, required documents & costs',                     tag: 'Complete' },
    { to: '/en/spouse-visa-documents/',     title: 'Spouse Visa Document Checklist',      desc: 'Philippine documents needed for application',             tag: null },
    { to: '/en/apostille/',                 title: 'DFA Apostille Authentication',        desc: 'Eligible documents, process & cost',                      tag: null },
    { to: '/en/drivers-license-conversion/',title: 'License Transfer Guide',              desc: 'LTO documents to transfer to Japan license',              tag: null },
    { to: '/en/psa-marriage-certificate/',  title: 'PSA Marriage Certificate',            desc: 'Required for international marriage & spouse visa',       tag: null },
  ],
};

const GuideLinks: React.FC = () => {
  const { lang, t } = useLanguage();
  const guides = guidesData[lang];

  return (
    <section className="py-12 bg-gray-50 border-t border-gray-100">
      <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-2 mb-6">
          <FileText className="w-5 h-5 text-secondary" />
          <h2 className="text-lg font-bold text-secondary">{t('guides.title')}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {guides.map((g) => (
            <Link
              key={g.to}
              to={g.to}
              className="flex flex-col gap-2 bg-white rounded-xl border border-gray-200 px-4 py-4 hover:border-primary/50 hover:shadow-md transition-all group"
            >
              <span className="text-sm font-bold text-gray-800 group-hover:text-secondary transition-colors">
                {g.title}
              </span>
              <p className="text-xs text-gray-500 leading-relaxed">{g.desc}</p>
              {g.tag && (
                <span className="inline-flex items-center gap-1 self-start text-xs font-bold text-primary border border-primary/40 px-2.5 py-1 rounded-lg group-hover:bg-primary group-hover:text-white transition-all mt-1">
                  {g.tag}
                  <ArrowRight className="w-3 h-3" />
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuideLinks;
