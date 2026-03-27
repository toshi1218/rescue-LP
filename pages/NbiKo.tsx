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
      a: '네. 해외 거주자는 NBI 온라인 시스템으로 신청 등록이 가능합니다. 다만, NBI Clearance 본체는 마닐라 NBI에서 발행되며, 초회 신청이나 갱신 조건 미해당 시에는 주한 필리핀 대사관에서 본인이 직접 지문 등록을 해야 합니다. 저희는 신청 절차 안내, 예약 방법 안내, 아포스티유 수배를 서포트합니다.',
    },
    {
      q: '아포스티유가 필요한 경우는 어떤 때인가요?',
      a: '한국 제출용（F-6 비자, F-5 영주권, 귀화 신청 등）의 경우 원칙적으로 DFA 아포스티유 인증이 필요합니다. NBI Clearance 발행 후, 저희가 아포스티유 수배와 국내 배송을 지원합니다.',
    },
    {
      q: 'HIT（동명이인 해당）이 뜨면 어떻게 되나요?',
      a: 'HIT가 표시되면 추가 심사 절차가 필요합니다. 처리 기간이 길어질 수 있으며, 본인임을 증명하는 서류 제출이 필요한 경우도 있습니다. 상황에 따라 개별로 안내드립니다.',
    },
    {
      q: '얼마나 걸리나요?',
      a: '신청 조건에 따라 달라집니다. NBI Clearance 발행에 1〜3주, 아포스티유 인증에 추가 1〜2주, DHL 배송에 3〜5 영업일이 소요됩니다. 대사관 지문 등록이 필요한 경우 예약 상황에 따라 추가 시간이 필요합니다.',
    },
    {
      q: '저희는 어디까지 지원해 주시나요?',
      a: '저희는 NBI Clearance를 직접 대행 발급하는 서비스가 아닙니다. 온라인 신청 방법 안내, 주한 필리핀 대사관 예약 방법 안내, 발행된 클리어런스의 아포스티유 수배, DHL 국제 특송을 서포트합니다. 대사관 지문 등록 및 NBI Clearance 원본의 저희 측 송부는 본인 부담이 됩니다.',
    },
  ];

  return (
    <PageLayoutKo
      title="NBI Clearance 신청 지원 | 필리핀 범죄경력증명서 취득 서포트"
      description="필리핀 NBI Clearance（범죄경력증명서） 신청 절차를 안내합니다. 주한 필리핀 대사관 지문 등록 예약 방법, 온라인 신청 안내, DFA 아포스티유 수배, DHL 발송까지 서포트. F-6 비자, 귀화 신청에 대응."
      canonical="https://ph-document.com/ko/nbi-clearance/"
      breadcrumbs={[{ label: '홈', href: '/ko/' }, { label: 'NBI Clearance 취득 서포트' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: '필리핀 NBI Clearance（범죄경력증명서）신청 지원',
          description: '필리핀 국가수사국（NBI）발행의 범죄경력증명서 신청 절차 안내 및 아포스티유 수배를 지원합니다. NBI Clearance 본체는 마닐라 NBI에서 발행됩니다.',
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
            {['신청 절차 안내', '대사관 예약 방법 안내', 'HIT 케이스 상담 가능'].map((b) => (
              <span key={b} className="inline-flex items-center gap-1 text-xs font-semibold bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded-full">
                <span className="w-1 h-1 rounded-full bg-primary inline-block" />
                {b}
              </span>
            ))}
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug mb-3">
            NBI Clearance 신청,<br />단계별로 안내합니다
          </h1>
          <p className="text-sm md:text-base text-white/70 leading-relaxed">
            필리핀 국가수사국（NBI）의 범죄경력증명서 신청 방법을 안내합니다.
            온라인 신청 방법, 주한 필리핀 대사관 지문 등록 예약, 아포스티유 수배, DHL 발송까지 서포트합니다.
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

      {/* 서비스 범위 안내 */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-secondary mb-4">저희 서비스 범위</h2>
        <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm space-y-4">
          <div>
            <p className="text-xs font-bold text-green-700 mb-2">✅ 저희가 지원하는 것</p>
            <ul className="space-y-1.5 text-sm text-gray-600">
              <li className="flex items-start gap-2"><span className="text-green-500 shrink-0">·</span>NBI 온라인 신청 방법 안내</li>
              <li className="flex items-start gap-2"><span className="text-green-500 shrink-0">·</span>주한 필리핀 대사관 지문 등록（Form No. 5） 예약 방법 안내</li>
              <li className="flex items-start gap-2"><span className="text-green-500 shrink-0">·</span>DFA 아포스티유 수배（NBI Clearance 원본 수령 후）</li>
              <li className="flex items-start gap-2"><span className="text-green-500 shrink-0">·</span>DHL 국제 특송（한국 자택 배송）</li>
              <li className="flex items-start gap-2"><span className="text-green-500 shrink-0">·</span>진행 상황 수시 보고</li>
            </ul>
          </div>
          <div className="border-t border-gray-100 pt-4">
            <p className="text-xs font-bold text-amber-700 mb-2">⚠ 본인이 직접 해야 하는 것</p>
            <ul className="space-y-1.5 text-sm text-gray-600">
              <li className="flex items-start gap-2"><span className="text-amber-500 shrink-0">·</span>주한 필리핀 대사관 방문 및 지문 등록（초회 신청 또는 갱신 조건 미해당 시 필수）</li>
              <li className="flex items-start gap-2"><span className="text-amber-500 shrink-0">·</span>NBI Clearance 원본 발행 후, 아포스티유 수배를 위해 저희 측에 송부</li>
            </ul>
          </div>
          <div className="bg-amber-50 rounded-lg px-4 py-3">
            <p className="text-xs text-amber-700">
              NBI Clearance 본체는 마닐라 NBI에서 발행됩니다. 저희는 발행 과정 자체를 대행하는 것이 아니라, 신청 방법 안내와 발행 후의 아포스티유・배송을 서포트하는 서비스입니다.
            </p>
          </div>
        </div>
      </section>

      {/* 한국에서 신청하는 절차 */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-secondary mb-4">한국에서 신청하는 절차</h2>
        <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
          <ol className="space-y-3">
            {[
              { n: '1', title: 'NBI 온라인 신청 등록', desc: 'NBI 공식 사이트에서 신청 등록을 합니다. 방법을 안내드립니다.' },
              { n: '2', title: '주한 필리핀 대사관 방문 · 지문 등록', desc: '서울 필리핀 대사관（Setmore 예약 필요）에서 본인이 직접 지문 등록（Form No. 5）을 합니다. 예약 방법을 안내드립니다.' },
              { n: '3', title: 'NBI Clearance 발행（마닐라）', desc: '마닐라 NBI에서 클리어런스가 발행됩니다. 발행된 원본을 저희 측으로 보내 주세요.' },
              { n: '4', title: 'DFA 아포스티유 수배', desc: '저희가 아포스티유 인증을 수배합니다（한국 제출용 필수）.' },
              { n: '5', title: 'DHL로 한국 발송', desc: '아포스티유 완료 후 DHL 국제 특송으로 자택에 배송합니다.' },
            ].map((step) => (
              <li key={step.n} className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/10 border border-primary flex items-center justify-center shrink-0 text-xs font-bold text-primary mt-0.5">{step.n}</span>
                <div>
                  <p className="text-sm font-bold text-secondary mb-0.5">{step.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
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
            NBI Clearance 원본을 저희 측에 보내 주시면, 아포스티유 수배부터 한국 배송까지 저희가 진행합니다.
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
