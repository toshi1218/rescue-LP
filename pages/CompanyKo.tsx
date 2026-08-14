import React from 'react';
import PageLayoutKo from '../components/PageLayoutKo';

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'IGRS Inc.',
  alternateName: '株式会社IGRS',
  url: 'https://ph-document.com/',
  email: 'igrs20200601@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'JP',
    addressRegion: 'Wakayama',
    addressLocality: 'Wakayama City',
  },
};

export default function CompanyKo() {
  const details = [
    { label: '서비스명', value: '필리핀 서류 취득 대행 센터' },
    { label: '운영 회사', value: 'IGRS Inc. (株式会社IGRS)' },
    { label: '법인번호', type: 'registry' },
    { label: '본점 소재지', value: '일본 와카야마현 와카야마시' },
    { label: '현지 업무 거점', value: '필리핀 세부시' },
    { label: '담당 창구', value: 'Igarashi' },
    { label: '서비스 내용', value: '필리핀 공적 서류 취득 대행: PSA, NBI, LTO, DFA Apostille' },
    { label: '문의', type: 'email' },
  ] as const;

  return (
    <PageLayoutKo
      title="회사 정보 | IGRS Inc. — 필리핀 서류 취득 대행 센터"
      description="필리핀 서류 취득 대행 센터를 운영하는 IGRS Inc.의 회사 정보입니다. 일본 법인 IGRS Inc.와 필리핀 세부 현지 업무 거점이 연계하여 PSA, NBI, LTO, DFA Apostille 관련 업무를 지원합니다."
      canonical="https://ph-document.com/ko/company/"
      breadcrumbs={[{ label: '홈', href: '/ko/' }, { label: '회사 정보' }]}
      jsonLd={orgJsonLd}
    >
      <h1 className="mb-2 text-2xl font-bold text-secondary md:text-3xl">회사 정보</h1>
      <p className="mb-6 text-sm text-gray-600">필리핀 서류 취득 대행 센터는 일본 법인 IGRS Inc.가 운영하며, 세부시 현지 업무 거점과 연계하여 서류 취득 절차를 지원합니다.</p>

      <div className="max-w-2xl">
        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-soft">
          {details.map((item, i) => (
            <div key={item.label} className={`flex flex-col gap-1 px-6 py-4 sm:flex-row sm:gap-0 ${i < details.length - 1 ? 'border-b border-gray-50' : ''}`}>
              <span className="w-full shrink-0 pt-0.5 text-xs font-bold tracking-wider text-gray-400 sm:w-40">{item.label}</span>
              <span className="text-sm leading-relaxed text-gray-700">
                {item.type === 'registry' ? (
                  <a href="https://info.gbiz.go.jp/hojin/ichiran?hojinBango=2170001016118" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">2170001016118 (Japan corporate registry)</a>
                ) : item.type === 'email' ? (
                  <a href="mailto:igrs20200601@gmail.com" className="font-medium text-primary hover:underline">igrs20200601@gmail.com</a>
                ) : item.value}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-secondary/10 bg-secondary/[0.03] p-6">
          <h2 className="mb-3 text-sm font-bold text-secondary">운영 방식</h2>
          <p className="text-sm leading-relaxed text-gray-600">IGRS Inc.가 의뢰 접수와 진행 관리를 담당하고, 세부시 현지 업무 거점이 PSA·NBI·LTO·DFA Apostille 관련 절차를 지원합니다. 서류 형식과 제출처 요건을 확인한 뒤 배송까지 안내합니다.</p>
        </div>
      </div>
    </PageLayoutKo>
  );
}
