import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, AlertTriangle, ArrowRight, Clock, FileText, Globe } from 'lucide-react';
import PageLayoutKo from '../components/PageLayoutKo';

export default function CenomarKo() {
  const faqs = [
    {
      q: 'CENOMAR란 무엇인가요?',
      a: 'CENOMAR는 Certificate of No Marriage Record의 약자로, 필리핀 통계청（PSA）이 발급하는 공적 서류입니다. 현재 필리핀에 혼인 기록이 없음을 증명하며, 국제결혼 수속・F-6 결혼이민비자 신청・귀화 신청 등에서 요구되는 경우가 많습니다.',
    },
    {
      q: '한국에 거주하고 있어도 신청할 수 있나요?',
      a: '네. 필리핀에 가지 않아도 저희가 PSA 온라인 신청부터 대행합니다. 본인 확인이 필요한 절차는 안내해 드리며, 나머지는 한국어로 상담하며 진행할 수 있습니다.',
    },
    {
      q: 'CENOMAR의 유효기간은 어떻게 되나요?',
      a: '제출처에 따라 다릅니다. 주한 필리핀 대사관의 혼인 관련 수속에서는 발급일로부터 6개월 이내를 요구하는 경우가 많습니다. 손에 있는 서류가 이번 제출처 기준을 충족하는지 먼저 확인하는 것이 중요합니다.',
    },
    {
      q: 'DFA 아포스티유가 꼭 필요한가요?',
      a: '제출처에 따라 다릅니다. 한국 법무부・출입국관리사무소 제출용으로는 DFA 아포스티유 인증을 요구하는 경우가 많습니다. 2026년 3월 이후 PSA 서류의 아포스티유는 종이가 아닌 e-Apostille（전자 인증）로 일원화되었습니다. 제출처가 e-Apostille를 받아주는지 사전에 확인해 드립니다.',
    },
    {
      q: '취득까지 얼마나 걸리나요?',
      a: 'PSA 발급에 통상 1〜3주, DFA e-Apostille 인증에 추가로 1〜2주가 소요되어 합계 약 1개월〜6주가 기준입니다. 성수기나 현지 기관 상황에 따라 변동될 수 있습니다.',
    },
    {
      q: 'CENOMAR와 출생증명서（PSA Birth Certificate）는 다른 서류인가요?',
      a: 'CENOMAR는 혼인 기록이 없음을 증명하는 서류이고, 출생증명서는 생년월일・출생지・부모 정보를 증명하는 서류입니다. 수속 종류에 따라 두 서류가 모두 필요한 경우도 있습니다.',
    },
  ];

  return (
    <PageLayoutKo
      title="CENOMAR（필리핀 미혼증명서）취득 대행 | PSA・e-Apostille 온라인 신청"
      description="필리핀 CENOMAR（미혼증명서）를 필리핀에 가지 않고 취득 대행. PSA 온라인 신청부터 DFA e-Apostille 인증까지 한국어로 상담 가능. 국제결혼・F-6 결혼비자・귀화 신청에 대응."
      canonical="https://ph-document.com/ko/cenomar/"
      breadcrumbs={[{ label: '홈', href: '/ko/' }, { label: 'CENOMAR（미혼증명서）취득 대행' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'CENOMAR（미혼증명서）취득 대행',
          description: '필리핀 CENOMAR（미혼증명서）를 PSA 온라인 신청부터 DFA e-Apostille（전자 인증）신청까지 한국어로 대행합니다. 국제결혼・F-6 결혼비자・귀화 신청에 대응.',
          url: 'https://ph-document.com/ko/cenomar/',
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
            {['국제결혼 대응', 'e-Apostille 인증 포함', '한국어 상담 가능'].map((b) => (
              <span key={b} className="inline-flex items-center gap-1 text-xs font-semibold bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded-full">
                <span className="w-1 h-1 rounded-full bg-primary inline-block" />
                {b}
              </span>
            ))}
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug mb-3">
            CENOMAR（미혼증명서）<br />취득을 도와드립니다
          </h1>
          <p className="text-sm md:text-base text-white/70 leading-relaxed">
            필리핀에 가지 않아도 PSA 온라인 신청부터 DFA e-Apostille 인증까지 대행합니다.
            국제결혼・F-6 결혼비자・귀화 신청 등 제출처에 맞춰 안내합니다.
          </p>
        </div>
      </section>

      {/* CENOMAR란 */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-secondary mb-4">CENOMAR란 무엇인가</h2>
        <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
          <div className="flex gap-3 mb-4">
            <FileText className="w-6 h-6 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-sm text-secondary mb-1">필리핀 통계청（PSA）이 발급하는 공식 미혼증명서</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                CENOMAR（Certificate of No Marriage Record）는 현재 필리핀에 혼인 기록이 없음을
                필리핀 정부가 공식으로 증명하는 서류입니다. 국제결혼 수속, F-6 결혼이민비자 신청,
                귀화 신청 등 필리핀 국민의 혼인 상태 확인이 필요한 상황에서 요구됩니다.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-3 mt-4">
            {[
              { icon: <Globe className="w-4 h-4 text-primary" />, label: '발급 기관', value: 'PSA（필리핀 통계청）' },
              { icon: <Clock className="w-4 h-4 text-primary" />, label: '유효 기간 기준', value: '제출처별 상이（대사관은 통상 6개월）' },
              { icon: <FileText className="w-4 h-4 text-primary" />, label: '한국 제출 시', value: 'DFA e-Apostille 인증이 필요한 경우多' },
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

      {/* e-Apostille 안내 */}
      <section className="mb-10">
        <div className="rounded-xl border-2 border-amber-400 bg-amber-50 p-5">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-amber-900 text-sm mb-2">2026년 3월 16일부터 PSA 서류는 e-Apostille로 일원화</p>
              <p className="text-sm text-amber-800 leading-relaxed">
                PSA가 발급하는 CENOMAR 등 민사 서류의 DFA 인증은 종이 아포스티유가 아닌
                <strong> e-Apostille（전자）</strong>로 일원화되었습니다. 제출처（대사관・출입국관리사무소 등）가
                e-Apostille 출력본을 받아주는지 사전에 확인하는 것이 중요합니다. 저희가 제출처 요건 확인부터
                PSA 온라인 신청・DFA e-Apostille 신청까지 대행합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 이런 경우에 필요합니다 */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-secondary mb-4">이런 경우에 필요합니다</h2>
        <ul className="space-y-3">
          {[
            '국제결혼 수속（한국 내 혼인신고, 주한 필리핀 대사관 수속）',
            'F-6 결혼이민비자 신청（LCCM과 함께 요구되는 경우가 많음）',
            '귀화 신청 시 첨부 서류',
            '필리핀 현지 혼인 수속（LCR 제출）',
          ].map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
              <CheckCircle className="w-4 h-4 text-primary shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* 신청 절차 */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-secondary mb-4">신청 절차</h2>
        <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
          <ol className="space-y-3 mb-4">
            {[
              { n: '1', who: '상담', text: '용도, 제출처, 필요 시기를 확인하고 견적을 안내해 드립니다.' },
              { n: '2', who: '저희 대행', text: 'PSA CENOMAR 온라인 신청 및 결제를 대행합니다.' },
              { n: '3', who: '저희 대행', text: '제출처가 요구하는 경우 DFA e-Apostille 인증을 신청합니다.' },
              { n: '4', who: '저희 대행', text: '발급된 서류 사본을 확인받은 후 원본을 발송합니다.' },
            ].map((step) => (
              <li key={step.n} className="flex gap-3 text-sm">
                <span className="w-6 h-6 rounded-full bg-primary/10 border border-primary flex items-center justify-center shrink-0 text-xs font-bold text-primary">{step.n}</span>
                <div>
                  <span className={`text-xs font-bold px-1.5 py-0.5 rounded mr-1.5 ${step.who === '상담' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'}`}>{step.who}</span>
                  <span className="text-gray-600">{step.text}</span>
                </div>
              </li>
            ))}
          </ol>
          <div className="bg-amber-50 rounded-lg px-4 py-3">
            <p className="text-xs text-amber-700">
              ⚠ 사안에 따라 본인 확인 서류나 위임장 제출을 요청드리는 경우가 있습니다. 상담 내용을 확인한 후 안내해 드립니다.
            </p>
          </div>
        </div>
      </section>

      {/* 소요 기간 */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-secondary mb-4">소요 기간 기준</h2>
        <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
          <div className="space-y-3">
            {[
              { label: 'PSA CENOMAR 취득', value: '1〜3주' },
              { label: 'DFA e-Apostille 인증', value: '추가 1〜2주' },
              { label: '합산 예상 기간', value: '약 1개월〜6주' },
            ].map((row) => (
              <div key={row.label} className="flex gap-4 text-sm border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                <span className="text-gray-400 shrink-0 w-44">{row.label}</span>
                <span className="font-medium text-secondary">{row.value}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4">
            ※ 성수기나 현지 기관 상황에 따라 기간이 변동될 수 있습니다.
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
        <Link to="/ko/f-6-philippines-documents/" className="inline-flex items-center gap-1.5 text-xs font-medium text-primary border border-primary/30 bg-primary/5 px-3 py-1.5 rounded-full hover:bg-primary/10 transition-colors">
          F-6 비자 서류 준비
          <ArrowRight className="w-3 h-3" />
        </Link>
        <Link to="/ko/nbi-clearance/" className="inline-flex items-center gap-1.5 text-xs font-medium text-primary border border-primary/30 bg-primary/5 px-3 py-1.5 rounded-full hover:bg-primary/10 transition-colors">
          NBI Clearance 신청 지원
          <ArrowRight className="w-3 h-3" />
        </Link>
        <Link to="/ko/pricing/" className="inline-flex items-center gap-1.5 text-xs font-medium text-primary border border-primary/30 bg-primary/5 px-3 py-1.5 rounded-full hover:bg-primary/10 transition-colors">
          요금 안내
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
