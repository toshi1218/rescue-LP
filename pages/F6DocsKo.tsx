import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';
import PageLayoutKo from '../components/PageLayoutKo';

export default function F6DocsKo() {
  const faqs = [
    {
      q: 'CENOMAR만 있으면 되지 않나요?',
      a: 'F-6 비자에는 CENOMAR（미혼증명서）만으로는 부족합니다. 주한 필리핀 대사관에서 발급하는 LCCM（혼인요건증명서）이 추가로 필요하며, PSA 출생증명서와 NBI Clearance도 함께 준비하는 것이 일반적입니다.',
    },
    {
      q: 'LCCM은 저희가 직접 신청해야 하나요?',
      a: 'LCCM（혼인요건증명서）은 주한 필리핀 대사관에서 본인이 직접 신청하는 서류입니다. 두 분이 함께 방문해야 하는 경우가 많습니다. 저희는 예약 방법 안내 및 동선 정리를 지원합니다（+₩390,000〜）。',
    },
    {
      q: 'NBI Clearance도 꼭 필요한가요?',
      a: '한국 출입국에서 요구하는 경우가 많습니다. 주한 필리핀 대사관（서울）에서 지문 등록을 받은 후, 지문 카드와 위임장을 필리핀으로 발송하면 저희가 NBI 신청・아포스티유 인증・DHL 발송까지 대행합니다.',
    },
    {
      q: '아포스티유는 모든 서류에 필요한가요?',
      a: '한국 제출용 필리핀 서류에는 원칙적으로 DFA 아포스티유 인증이 필요합니다. PSA 출생증명서, CENOMAR, NBI Clearance 모두 아포스티유를 부착해야 합니다.',
    },
    {
      q: '서류가 갖춰지지 않으면 F-6 신청이 거절되나요?',
      a: 'F-6 비자는 거절 시 6개월간 재신청이 불가합니다. 서류 불비로 인한 거절 리스크를 줄이는 것이 중요합니다. 처음 상담 시 전체 서류 구성을 정리해 드립니다.',
    },
  ];

  return (
    <PageLayoutKo
      title="F-6 결혼비자용 필리핀 서류 준비 | PSA · CENOMAR · NBI"
      description="F-6 결혼이민비자에 필요한 필리핀 측 서류（CENOMAR, PSA 출생증명서, NBI Clearance, 아포스티유）를 대행합니다. LCCM 안내도 가능. 서류 이름을 모르셔도 괜찮습니다."
      canonical="https://ph-document.com/ko/f-6-philippines-documents/"
      breadcrumbs={[{ label: '홈', href: '/ko/' }, { label: 'F-6 결혼비자 필리핀 서류' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'F-6 결혼이민비자용 필리핀 서류 준비 지원',
          description: 'PSA 출생증명서・CENOMAR・DFA 아포스티유를 필리핀에서 대행 취득합니다. NBI Clearance는 해외 신청 절차를 안내합니다.',
          url: 'https://ph-document.com/ko/f-6-philippines-documents/',
          provider: { '@type': 'Organization', name: 'IGRS Inc.', url: 'https://ph-document.com/ko/' },
          areaServed: { '@type': 'Country', name: 'KR' },
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
            {['F-6 비자 대응', 'LCCM 안내 가능', '필리핀 측 서류 전담'].map((b) => (
              <span key={b} className="inline-flex items-center gap-1 text-xs font-semibold bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded-full">
                <span className="w-1 h-1 rounded-full bg-primary inline-block" />
                {b}
              </span>
            ))}
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug mb-3">
            F-6 결혼비자 준비,<br />필리핀 측 서류부터 정리해드립니다
          </h1>
          <p className="text-sm md:text-base text-white/70 leading-relaxed">
            PSA 출생증명서, CENOMAR, NBI Clearance, DFA 아포스티유를 필리핀 방문 없이 지원합니다.
            NBI는 주한 필리핀 대사관（서울）에서 지문 등록 후 필리핀 측은 저희가 대행합니다.
          </p>
        </div>
      </section>

      {/* F-6 준비에서 자주 막히는 부분 */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-secondary mb-5">F-6 준비에서 자주 막히는 부분</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              title: '필리핀 측 서류 목록을 모른다',
              desc: '어떤 서류가 필요한지, 아포스티유가 필요한지, LCCM은 어디서 받는지 — 처음에는 파악하기 어렵습니다.',
            },
            {
              title: 'CENOMAR만으로는 부족하다는 것을 뒤늦게 안다',
              desc: 'CENOMAR 외에 PSA 출생증명서, NBI Clearance, LCCM이 추가로 필요한 경우가 많습니다.',
            },
            {
              title: 'F-6 거절이 6개월 재신청 금지로 이어진다',
              desc: 'F-6 비자 신청이 거절되면 6개월간 재신청이 불가합니다. 서류 준비가 특히 중요합니다.',
            },
            {
              title: 'LCCM 신청 방법을 모른다',
              desc: '주한 필리핀 대사관에서의 LCCM 신청은 예약제로 운영되며, 양쪽이 모두 방문해야 하는 경우가 많습니다.',
            },
          ].map((item) => (
            <div key={item.title} className="flex gap-3 p-4 rounded-xl border border-amber-100 bg-amber-50">
              <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-sm text-gray-800 mb-1">{item.title}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 필리핀 측 서류 */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-secondary mb-5">필리핀 측에서 자주 필요한 서류</h2>

        {[
          {
            title: 'PSA 출생증명서',
            en: 'PSA Birth Certificate',
            org: 'PSA（필리핀 통계청）',
            desc: '필리핀 국민의 출생을 증명하는 공식 서류입니다. F-6 비자 신청 시 기본적으로 필요하며, DFA 아포스티유 인증이 필요합니다.',
            note: null,
          },
          {
            title: 'CENOMAR（미혼증명서）',
            en: 'Certificate of No Marriage Record',
            org: 'PSA（필리핀 통계청）',
            desc: '혼인 이력이 없음을 증명하는 서류입니다. 유효기간은 발행일로부터 약 1년입니다. DFA 아포스티유 인증이 필요합니다.',
            note: 'F-6 비자에는 CENOMAR 외에 LCCM（혼인요건증명서）도 필요합니다.',
          },
          {
            title: 'NBI Clearance（범죄경력증명서）',
            en: 'NBI Clearance',
            org: 'NBI（필리핀 국가수사국）',
            desc: '필리핀에서의 범죄 이력이 없음을 증명하는 서류입니다. F-6 신청 시 일반적으로 필요하며, 유효기간 6개월 이내의 것이 요구됩니다.',
            note: '주한 필리핀 대사관（서울）에서 지문 등록（Form No. 5）을 받은 후, 지문 카드와 위임장을 필리핀으로 발송하면 저희가 NBI 신청・DFA 아포스티유 인증을 대행합니다.',
          },
          {
            title: '아포스티유（DFA 인증）',
            en: 'DFA Apostille',
            org: 'DFA（필리핀 외무부）',
            desc: '한국 제출용 서류에는 원칙적으로 아포스티유 인증이 필요합니다. 위 서류 모두에 아포스티유를 부착해 드립니다.',
            note: null,
          },
        ].map((doc) => (
          <div key={doc.title} className="mb-6 rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-bold text-secondary text-sm">{doc.title}</h3>
              <span className="text-xs text-gray-400 shrink-0">{doc.org}</span>
            </div>
            <p className="text-xs text-gray-400 mb-2">{doc.en}</p>
            <p className="text-sm text-gray-600 leading-relaxed">{doc.desc}</p>
            {doc.note && (
              <p className="mt-3 text-xs text-amber-600 bg-amber-50 rounded-lg px-3 py-2">
                ⚠ {doc.note}
              </p>
            )}
          </div>
        ))}
      </section>

      {/* 진행 순서 */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-secondary mb-5">진행 순서</h2>
        <ol className="space-y-4">
          {[
            { n: '1', title: '무료 상담', desc: '필요한 서류와 목적을 확인합니다. 서류 이름을 모르셔도 괜찮습니다.' },
            { n: '2', title: '견적 확인', desc: '서류 구성, 비용, 예상 기간을 명확히 안내합니다.' },
            { n: '3', title: '착수금 50% 입금', desc: '입금 확인 후 필리핀 현지 절차를 시작합니다.' },
            { n: '4', title: 'PSA・NBI・DFA 아포스티유 대행', desc: 'PSA 출생증명서・CENOMAR는 현지 스태프가 대행 취득합니다. NBI는 지문 카드 수령 후 필리핀 현지에서 신청합니다. 모든 서류의 DFA 아포스티유 인증까지 진행하며, 진행 상황을 수시로 보고합니다.' },
            { n: '5', title: '사본 확인 후 잔금 입금・DHL 발송', desc: '서류 사본을 확인하신 후 잔금을 입금하시면 한국으로 발송합니다.' },
          ].map((step) => (
            <li key={step.n} className="flex gap-4 p-4 rounded-xl border border-gray-100 bg-white shadow-sm">
              <span className="w-8 h-8 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center shrink-0 text-xs font-bold text-primary">
                {step.n}
              </span>
              <div>
                <p className="font-bold text-sm text-secondary mb-1">{step.title}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* 이런 분들께 추천 */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-secondary mb-5">이런 분들께 추천합니다</h2>
        <ul className="space-y-3">
          {[
            'F-6 결혼이민비자를 준비 중이신 분',
            '어떤 서류가 필요한지 아직 파악하지 못하신 분',
            '필리핀에 직접 가기 어려우신 분',
            '빠른 시일 내에 서류를 준비해야 하는 분',
            'LCCM 신청 방법을 모르는 분',
            '이전에 다른 업체에서 서류 준비가 잘 되지 않으신 분',
          ].map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
              <CheckCircle className="w-4 h-4 text-primary shrink-0" />
              {item}
            </li>
          ))}
        </ul>
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
        <Link to="/ko/nbi-clearance/" className="inline-flex items-center gap-1.5 text-xs font-medium text-primary border border-primary/30 bg-primary/5 px-3 py-1.5 rounded-full hover:bg-primary/10 transition-colors">
          NBI Clearance 단독 신청
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
