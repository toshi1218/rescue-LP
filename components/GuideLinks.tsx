import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight } from 'lucide-react';
import { useLanguage } from '../lib/i18n';

type GuideItem = {
  to: string;
  title: string;
  desc: string;
  tag: string | null;
};

// 最初の6件がホームページに表示される主要項目
const guidesData: Record<'ja' | 'en', GuideItem[]> = {
  ja: [
    { to: '/ja/kokusai-kekkon-guide/', title: '国際結婚の進め方', desc: 'フィリピン人との婚姻手続きの全体像を確認したい方へ', tag: '国際結婚を確認する' },
    { to: '/ja/haigusha-visa/', title: '配偶者ビザの書類', desc: '日本での配偶者ビザ申請に必要な書類を整理したい方へ', tag: '配偶者ビザを確認する' },
    { to: '/ja/gaimen-kirikae-guide/', title: '外免切替', desc: 'LTO書類や外免切替に必要な流れを確認したい方へ', tag: '外免切替を見る' },
    { to: '/ja/kika-shinsei-guide/', title: '帰化申請', desc: '日本国籍取得に必要なフィリピン書類を確認したい方へ', tag: '帰化申請を確認する' },
    { to: '/ja/nbi-clearance/', title: '海外ビザ用NBIクリアランス', desc: '海外ビザ・就労・永住で必要なNBI書類を確認したい方へ', tag: 'NBIクリアランスを確認する' },
    { to: '/ja/kokusai-kekkon-roadmap/', title: '個別ロードマップ作成', desc: '自分のケースに合った手続き順序・必要書類を整理したい方へ', tag: 'ロードマップを作成する' },
    // 以下はお役立ちガイドページにのみ表示
    { to: '/ja/psa-shussei-shomeisho/', title: 'PSA出生証明書', desc: '国際結婚・配偶者ビザ・帰化申請の基本書類を確認したい方へ', tag: '出生証明書を見る' },
    { to: '/ja/cenomar/', title: 'CENOMAR取得代行', desc: '独身証明書の取得手順と必要書類を確認したい方へ', tag: 'CENOMARを確認する' },
    { to: '/ja/cenomar-vs-marriage-certificate/', title: 'CENOMARと婚姻証明書の違い', desc: 'どちらを取るべきか迷うときの確認ページです', tag: 'まずここを確認' },
    { to: '/ja/document-checklist-by-visa/', title: 'ビザ別書類チェックリスト', desc: 'K-1、CR-1、日本向けの必要書類をまとめて確認したい方へ', tag: '提出前に確認' },
    { to: '/ja/nbi-clearance-overseas/', title: '海外在住のNBI取得', desc: 'フィリピンに戻らずNBIを取りたい方へ', tag: '海外在住者向け' },
    { to: '/ja/psa-late-registration/', title: 'PSA記録エラー対応', desc: '記録がない・名前が違うときの整理に', tag: 'No Record 対応' },
    { to: '/ja/psa-ecertificate-nihon/', title: '電子文書・eApostilleは日本で使える？', desc: '入管・市区町村・総領事館の受領状況と対応方法', tag: '2026年4月版' },
  ],
  en: [
    { to: '/en/cenomar/', title: 'CENOMAR (Certificate of No Marriage)', desc: 'How to obtain, cost & timeline', tag: 'Most Popular' },
    { to: '/en/psa-birth-certificate/', title: 'PSA Birth Certificate', desc: 'Why you need it for marriage & visa', tag: null },
    { to: '/en/nbi-clearance/', title: 'NBI Clearance', desc: 'Including how to handle NBI HIT issues', tag: null },
    { to: '/en/international-marriage-guide/', title: 'International Marriage Guide', desc: 'Process, required documents & costs', tag: 'Complete' },
    { to: '/en/spouse-visa-documents/', title: 'Spouse Visa Document Checklist', desc: 'Philippine documents needed for application', tag: null },
    { to: '/en/apostille/', title: 'DFA Apostille Authentication', desc: 'Eligible documents, process & cost', tag: null },
    { to: '/en/drivers-license-conversion/', title: 'License Transfer Guide', desc: 'LTO documents to transfer to Japan license', tag: null },
    { to: '/en/psa-marriage-certificate/', title: 'PSA Marriage Certificate', desc: 'Required for international marriage & spouse visa', tag: null },
    { to: '/en/cenomar-vs-marriage-certificate/', title: 'CENOMAR vs. Marriage Certificate', desc: 'Which document do you actually need? Find out here.', tag: 'New' },
    { to: '/en/document-checklist-by-visa/', title: 'Document Checklist by Visa Type', desc: 'K-1, CR-1, Canada, Australia, UK, Japan complete checklist', tag: null },
    { to: '/en/nbi-clearance-overseas/', title: 'NBI Clearance from Overseas', desc: 'OFWs & Filipinos abroad: get NBI without returning to PH', tag: null },
    { to: '/en/psa-late-registration/', title: 'PSA Record Missing or Has Errors', desc: 'No record found or name error? Here is what to do.', tag: null },
  ],
};

type GuideLinksProps = { maxItems?: number };

const GuideLinks: React.FC<GuideLinksProps> = React.memo(({ maxItems }) => {
  const { lang, t } = useLanguage();
  const guides = maxItems ? guidesData[lang].slice(0, maxItems) : guidesData[lang];

  return (
    <section className="py-10 bg-slate-50 border-t border-gray-100">
      <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-2 mb-6">
          <FileText className="w-5 h-5 text-secondary" />
          <h2 className="text-lg font-bold text-secondary">{t('guides.title')}</h2>
        </div>
        <div className="grid grid-cols-2 gap-3">
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
                <span className="inline-flex items-center gap-1 self-start text-xs font-bold text-primary-dark border border-primary-dark/40 px-2.5 py-1 rounded-lg group-hover:bg-primary group-hover:text-white transition-all mt-1">
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
});

export default GuideLinks;
