import React from 'react';
import { Link } from 'react-router-dom';

type Locale = 'ja' | 'en' | 'ko';

type OperatorIdentityProps = {
  locale: Locale;
  className?: string;
};

const content = {
  ja: {
    title: '運営会社情報',
    service: 'フィリピン書類取得代行センター',
    operator: '運営会社：IGRS Inc.（日本法人）',
    desk: '担当窓口：五十嵐',
    locations: '拠点：和歌山県和歌山市・フィリピン セブ市',
    link: '会社情報を確認する',
    href: '/ja/company/',
  },
  en: {
    title: 'Company Information',
    service: 'Philippine Document Procurement Center',
    operator: 'Operated by IGRS Inc., a Japan-registered company',
    desk: 'Contact desk: Igarashi',
    locations: 'Locations: Wakayama City, Japan · Cebu City, Philippines',
    link: 'View company information',
    href: '/en/company/',
  },
  ko: {
    title: '회사 정보',
    service: '필리핀 서류 취득 대행 센터',
    operator: '운영 회사: IGRS Inc. (일본 법인)',
    desk: '담당 창구: Igarashi',
    locations: '거점: 일본 와카야마시 · 필리핀 세부시',
    link: '회사 정보 확인',
    href: '/ko/company/',
  },
} as const;

export default function OperatorIdentity({ locale, className = '' }: OperatorIdentityProps) {
  const item = content[locale];

  return (
    <aside className={`rounded-2xl border border-secondary/10 bg-secondary/[0.03] px-5 py-4 text-left ${className}`} aria-label={item.title}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-bold text-secondary">{item.title}</p>
          <p className="mt-0.5 text-xs font-medium text-gray-700">{item.service}</p>
          <p className="mt-2 text-xs leading-relaxed text-gray-600">{item.operator}</p>
          <p className="text-xs leading-relaxed text-gray-600">{item.desk}</p>
          <p className="text-xs leading-relaxed text-gray-500">{item.locations}</p>
        </div>
        <Link
          to={item.href}
          className="inline-flex shrink-0 items-center justify-center rounded-lg border border-secondary/20 bg-white px-3 py-2 text-xs font-bold text-secondary transition-colors hover:border-secondary hover:bg-secondary hover:text-white"
        >
          {item.link}
        </Link>
      </div>
    </aside>
  );
}
