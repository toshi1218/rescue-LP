import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Fingerprint, Globe, Clock, FileText } from 'lucide-react';
import PageLayoutKo from '../components/PageLayoutKo';

export default function NbiKo() {
  const faqs = [
    {
      q: 'NBI Clearance란 무엇인가요?',
      a: '필리핀 국가수사국（NBI）이 발행하는 범죄경력증명서입니다. 필리핀 내에서의 범죄 이력이 없음을 증명합니다. 한국 비자 신청, 해외 취업, 이민 수속 등에 활용됩니다.',
    },
    {
      q: '해외에 살고 있어도 신청할 수 있나요?',
      a: '네. 해외 거주자의 경우, NBI 온라인에서 사전 등록 후 마닐라 NBI 본국에 필요 서류를 우편으로 발송하는 방법이 있습니다. 저희는 이 절차를 정리해 안내해 드립니다. 실제 신청 및 발송은 본인이 직접 진행하시게 됩니다.',
    },
    {
      q: '아포스티유가 필요한 경우는 어떤 때인가요?',
      a: '한국 제출용（F-6 비자, F-5 영주권, 귀화 신청 등）의 경우 원칙적으로 DFA 아포스티유 인증이 필요합니다. 저희 서비스에는 아포스티유 인증이 포함되어 있습니다.',
    },
    {
      q: 'HIT（동명이인 해당）이 뜨면 어떻게 되나요?',
      a: 'HIT가 표시되면 추가 심사 절차가 필요합니다. 처리 기간이 길어질 수 있으며, 본인임을 증명하는 서류 제출이 필요한 경우도 있습니다. 상황에 따라 개별로 안내드립니다.',
    },
    {
      q: '얼마나 걸리나요?',
      a: '일반적으로 NBI Clearance 취득에 1〜3주, 아포스티유 인증에 추가 1〜2주, DHL 배송에 3〜5 영업일이 소요됩니다. 합산하면 4〜6주를 예상하시면 됩니다.',
    },
  ];

  return (
    <PageLayoutKo
      title="NBI Clearance 신청 안내 | 필리핀 범죄경력증명서 절차 지원"
      description="필리핀 NBI Clearance（범죄경력증명서）신청 절차를 안내합니다. 해외 거주자가 마닐라 본국에 우편으로 신청하는 방법, DFA 아포스티유 인증까지 단계별로 지원합니다."
      canonical="https://ph-document.com/ko/nbi-clearance/"
      breadcrumbs={[{ label: '홈', href: '/ko/' }, { label: 'NBI Clearance 신청 지원' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: '필리핀 NBI Clearance（범죄경력증명서）신청 절차 안내',
          description: '해외 거주자를 위한 NBI Clearance 신청 절차를 안내합니다. 마닐라 본국 우편 신청 방법, DFA 아포스티유 인증까지 단계별로 지원합니다.',
          url: 'https://ph-document.com/ko/nbi-clearance/',
          provider: { '@type': 'Organization', name: 'IGRS Inc.', url: 'https://ph-document.com/ko/' },
          areaServed: { '@type': 'Country', name: 'KR' },
          offers: {
            '@type': 'Offer',
            priceCurrency: 'KRW',
            description: 'F-6 준비 패키지에 포함. 단독 신청은 문의 바랍니다.',
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.q,
            acceptedAnswer: { '@type': 'Answer', text: faq.a },
          })),
        },
      ]}
    >
      {/* HeroBanner */}
      <section className="relative mb-10 overflow-hidden rounded-2xl bg-secondary px-6 py-10 md:px-10 md:py-14">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{ backgroundImage: 'radial-gradient(circle, #d69e2e 1px, transparent 1px)', backgroundSize: '24px 24px' }}
          />
        </div>
        <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-primary via-primary/60 to-transparent" />
        <div className="relative">
          <div className="flex flex-wrap gap-2 mb-4">
            {['해외 신청 절차 안내', '아포스티유 대응', 'HIT 케이스 상담 가능'].map((b) => (
              <span key={b} className="inline-flex items-center gap-1 text-xs font-semibold bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded-full">
                <span className="w-1 h-1 rounded-full bg-primary inline-block" />
                {b}
              </span>
            ))}
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug mb-3">
            NBI Clearance 신청을<br />도와드립니다
          </h1>
          <p className="text-sm md:text-base text-white/70 leading-relaxed">
            해외 거주자가 NBI Clearance를 신청하는 절차를 단계별로 안내합니다.
            마닐라 본국 우편 신청 방법부터 DFA 아포스티유 인증까지 정리해 드립니다.
          </p>
        </div>
      </section>

      {/* NBI Clearance란 */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-secondary mb-4">NBI Clearance란 무엇인가</h2>
        <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
          <div className="flex gap-3 mb-4">
            <Fingerprint className="w-6 h-6 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-sm text-secondary mb-1">필리핀 국가수사국（NBI）이 발행하는 공식 범죄경력 증명서</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                NBI Clearance는 필리핀 내에서 범죄 기록이 없음을 필리핀 정부가 공식으로 증명하는 서류입니다.
                결혼이민비자 신청, 해외 취업, 이민 수속, 귀화 신청 등 다양한 상황에서 요구됩니다.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-3 mt-4">
            {[
              { icon: <FileText className="w-4 h-4 text-primary" />, label: '발급 기관', value: 'NBI（필리핀 국가수사국）' },
              { icon: <Clock className="w-4 h-4 text-primary" />, label: '유효 기간', value: '발행일로부터 약 6개월' },
              { icon: <Globe className="w-4 h-4 text-primary" />, label: '한국 제출 시', value: 'DFA 아포스티유 인증 필요' },
            ].map((stat) => (
              <div key={stat.label} className="bg-gray-50 rounded-lg p-3 text-center">
                <div className="flex justify-center mb-1">{stat.icon}</div>
                <p className="text-xs text-gray-400 mb-0.5">{stat.label}</p>
                <p className="text-xs font-medium text-secondary">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 이런 경우에 필요합니다 */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-secondary mb-4">이런 경우에 필요합니다</h2>
        <ul className="space-y-3">
          {[
            'F-6 결혼이민비자 신청（한국 법무부 요구）',
            'F-5 영주권 신청 시 해외 범죄경력 증명',
            '귀화 신청 시 첨부 서류',
            '한국 내 취업・자격 심사',
            '필리핀 현지 취업・비자 신청',
            '기타 공적 수속에서 무범죄 증명이 필요한 경우',
          ].map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
              <CheckCircle className="w-4 h-4 text-primary shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* 해외 거주자의 신청 절차 */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-secondary mb-4">해외 거주자의 신청 절차</h2>
        <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            해외 거주자가 NBI Clearance를 취득하는 방법은 현재 <strong>마닐라 NBI 본국에 우편으로 신청</strong>하는 방식이 유일합니다.
            NBI 온라인에서 사전 등록 후, 필요 서류를 준비해 필리핀으로 직접 발송하는 형태입니다.
          </p>
          <ol className="space-y-2 mb-4 text-sm text-gray-600">
            <li className="flex gap-2"><span className="font-bold text-primary shrink-0">1.</span>NBI 온라인 시스템에서 사전 등록</li>
            <li className="flex gap-2"><span className="font-bold text-primary shrink-0">2.</span>필요 서류（여권 사본, 사진 등）를 마닐라 NBI 본국에 우편 발송</li>
            <li className="flex gap-2"><span className="font-bold text-primary shrink-0">3.</span>NBI Clearance 발행 후 지정 주소로 반송</li>
            <li className="flex gap-2"><span className="font-bold text-primary shrink-0">4.</span>수령한 NBI Clearance를 DFA 아포스티유 인증（저희가 대행 가능）</li>
          </ol>
          <div className="bg-blue-50 rounded-lg px-4 py-3">
            <p className="text-xs text-blue-700">
              저희는 이 절차の準備와 서류 구성을 정리해 안내해 드립니다. 실제 신청 및 우편 발송은 본인이 직접 진행하시며, NBI로부터 발급된 서류의 DFA 아포스티유 인증은 저희가 맡습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 준비해야 할 것 */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-secondary mb-4">준비해야 할 것</h2>
        <ul className="space-y-3">
          {[
            '유효한 필리핀 여권 또는 신분증（사본）',
            '현재 주소（배송 주소）',
            '신청 목적（F-6 비자, 귀화 등）',
            '과거 NBI Clearance 발행 이력（있는 경우）',
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-xs text-gray-400 mt-3">
          ※ 자세한 필요 서류는 상담 시 개별로 안내드립니다.
        </p>
      </section>

      {/* 아포스티유 */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-secondary mb-4">아포스티유가 필요한 경우</h2>
        <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-600 leading-relaxed">
            한국 법무부나 관공서에 제출하는 NBI Clearance에는 원칙적으로 DFA（필리핀 외무부）의 아포스티유 인증이 필요합니다.
            저희 서비스에서는 NBI Clearance 취득 후 아포스티유 인증까지 일괄 대행합니다.
          </p>
        </div>
      </section>

      {/* 소요 기간과 배송 */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-secondary mb-4">소요 기간과 배송</h2>
        <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
          <div className="space-y-3">
            {[
              { label: 'NBI Clearance 취득', value: '1〜3주' },
              { label: 'DFA 아포스티유 인증', value: '추가 1〜2주' },
              { label: 'DHL 국제 특송（한국）', value: '3〜5 영업일' },
              { label: '합산 예상 기간', value: '4〜6주（Express 옵션으로 단축 가능）' },
            ].map((row) => (
              <div key={row.label} className="flex gap-4 text-sm border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                <span className="text-gray-400 shrink-0 w-44">{row.label}</span>
                <span className="font-medium text-secondary">{row.value}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4">
            ※ HIT（동명이인 해당）의 경우 추가 처리 기간이 필요합니다. 사전에 고지합니다.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-secondary mb-5">자주 묻는 질문</h2>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details key={faq.q} className="group rounded-xl border border-gray-100 bg-white shadow-sm overflow-hidden">
              <summary className="flex items-center justify-between gap-3 p-4 cursor-pointer list-none font-bold text-sm text-secondary">
                {faq.q}
                <span className="shrink-0 text-primary group-open:rotate-45 transition-transform text-lg leading-none">+</span>
              </summary>
              <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">{faq.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* Internal links */}
      <nav className="mb-8 flex flex-wrap gap-3" aria-label="관련 페이지">
        <Link to="/ko/pricing/" className="inline-flex items-center gap-1.5 text-xs font-medium text-primary border border-primary/30 bg-primary/5 px-3 py-1.5 rounded-full hover:bg-primary/10 transition-colors">
          요금 안내
          <ArrowRight className="w-3 h-3" />
        </Link>
        <Link to="/ko/f-6-philippines-documents/" className="inline-flex items-center gap-1.5 text-xs font-medium text-primary border border-primary/30 bg-primary/5 px-3 py-1.5 rounded-full hover:bg-primary/10 transition-colors">
          F-6 비자 서류 준비
          <ArrowRight className="w-3 h-3" />
        </Link>
        <Link to="/ko/contact/" className="inline-flex items-center gap-1.5 text-xs font-medium text-primary border border-primary/30 bg-primary/5 px-3 py-1.5 rounded-full hover:bg-primary/10 transition-colors">
          문의하기
          <ArrowRight className="w-3 h-3" />
        </Link>
      </nav>
    </PageLayoutKo>
  );
}
