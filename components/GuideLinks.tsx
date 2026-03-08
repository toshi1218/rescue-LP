import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight } from 'lucide-react';
import { useLanguage } from '../lib/i18n';

const guidesData = {
  ja: [
    { to: '/ja/kokusai-kekkon-guide/', title: '国際結婚・配偶者ビザ 完全ガイド', desc: '婚姻届→ROM→PSA取得→ビザ申請まで全解説', tag: 'まずはここ' },
    { to: '/ja/cenomar/',              title: 'CENOMAR（独身証明書）',             desc: '取得方法・費用・期間を徹底解説',          tag: '人気No.1' },
    { to: '/ja/psa-shussei-shomeisho/',title: 'PSA出生証明書',                    desc: '国際結婚・ビザ申請に必要な理由',          tag: null },
    { to: '/ja/nbi-clearance/',        title: 'NBI無犯罪証明書',                  desc: 'NBI HIT問題の対処法も解説',              tag: null },
    { to: '/ja/haigusha-visa/',        title: '配偶者ビザ書類チェックリスト',     desc: '申請に必要なフィリピン書類一覧',          tag: null },
    { to: '/ja/apostille/',            title: 'DFAアポスティーユ認証',            desc: '対象書類・取得方法・費用',                tag: null },
    { to: '/ja/gaimen-kirikae-guide/', title: '外免切替ガイド',                   desc: 'LTO書類で日本の免許に切替',               tag: null },
    { to: '/ja/psa-kekkon-shomeisho/', title: 'PSA婚姻証明書',                   desc: '国際結婚・配偶者ビザで必要',              tag: null },
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
              className="flex items-start justify-between gap-2 bg-white rounded-xl border border-gray-200 px-4 py-3 hover:border-secondary hover:shadow-sm transition-all group"
            >
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-sm font-bold text-gray-800 group-hover:text-secondary transition-colors">
                    {g.title}
                  </span>
                  {g.tag && (
                    <span className="text-[10px] font-bold bg-primary/10 text-primary px-1.5 py-0.5 rounded-full">
                      {g.tag}
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-500">{g.desc}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-secondary mt-1 flex-shrink-0 transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuideLinks;
