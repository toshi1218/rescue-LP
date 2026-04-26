import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, ArrowRight, CheckCircle } from 'lucide-react';
import PageLayoutKo from '../components/PageLayoutKo';

export default function PsaEcertificateGuideKo() {
  const faqs = [
    {
      q: '한국 출입국·외국인청은 PSA eCertificate + eApostille를 받아주나요?',
      a: '2026년 4월 현재, 법무부 출입국·외국인청(하이코리아)은 PSA eCertificate + DFA eApostille 수령에 관한 공식 안내를 발표하지 않았습니다. F-6 결혼이민비자 등 주요 수속에서는 기존의 실물 원본(SECPA + 물리 아포스티유)이 표준으로 간주됩니다. 제출 전에 담당 출입국 사무소에 직접 확인하시기 바랍니다.',
    },
    {
      q: 'PSA eCertificate를 인쇄해서 제출할 수 있나요?',
      a: '아니요. DFA eApostille는 디지털 제출 전용입니다. 인쇄하면 아포스티유가 무효화될 수 있습니다. 실물 서류가 필요한 경우에는 PSA 실물 원본(SECPA) + 물리 아포스티유를 별도로 취득해야 합니다.',
    },
    {
      q: 'PSA Helpline이 eCertificate만 발행하는데 실물 원본은 어떻게 받나요?',
      a: 'PSA 실물 원본(SECPA)은 필리핀 현지 PSA Serbilis 창구 방문 또는 현지 대리인을 통해 취득할 수 있습니다. 저희는 세부 현지 스태프가 PSA·DFA 창구에서 직접 실물 원본을 취득하여 DHL로 한국에 발송합니다.',
    },
    {
      q: 'eApostille의 법적 효력은 물리 아포스티유와 같나요?',
      a: '네. DFA eApostille는 헤이그 국제사법회의(HCCH) eAPP 기준을 충족하며 법적 효력은 물리 아포스티유와 동등합니다. 문제는 법적 효력이 아니라 각 기관이 실무상 수령을 확인하지 않은 데 있습니다.',
    },
    {
      q: '실물 원본 취득에 얼마나 걸리나요?',
      a: '약 4〜6주입니다. PSA 원본 취득 2〜3주, DFA 아포스티유 인증 1〜2주, DHL 한국 배송 3〜5 영업일. 급행 옵션이 필요한 경우 상담 시 안내드립니다.',
    },
  ];

  return (
    <PageLayoutKo
      title="PSA 전자증명서·eApostille 한국에서 받아줄까? 출입국·구청 수령 현황 [2026]"
      description="PSA Helpline이 헤이그 협약 가맹국에 eCertificate + eApostille만 발행 중. 그러나 한국 출입국·구청·대사관은 실물 원본을 요구하는 경우가 많습니다. 실물 원본 대행 취득은 저희에게."
      canonical="https://ph-document.com/ko/psa-ecertificate-eapostille-guide/"
      breadcrumbs={[
        { label: '홈', href: '/ko/' },
        { label: 'PSA 전자증명서·eApostille 안내' },
      ]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'PSA 전자증명서·eApostille 한국에서 받아줄까? 출입국·구청 수령 현황 [2026]',
          description: 'PSA Helpline이 헤이그 협약 가맹국에 eCertificate + eApostille만 발행 중. 한국 출입국·구청·대사관의 수령 현황과 실물 원본 취득 방법을 해설합니다.',
          datePublished: '2026-04-26',
          author: { '@type': 'Organization', name: 'IGRS Inc.', url: 'https://ph-document.com/ko/' },
          publisher: { '@type': 'Organization', name: 'IGRS Inc.', url: 'https://ph-document.com/ko/' },
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
      {/* 히어로 배너 */}
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
            {['2026년 4월 최신 정보', '실물 원본 취득 가능', 'DHL 한국 배송'].map((b) => (
              <span key={b} className="inline-flex items-center gap-1 text-xs font-semibold bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded-full">
                <span className="w-1 h-1 rounded-full bg-primary inline-block" />
                {b}
              </span>
            ))}
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug mb-3">
            PSA 전자증명서·eApostille<br />한국에서 받아줄까?
          </h1>
          <p className="text-sm md:text-base text-white/70 leading-relaxed">
            PSA Helpline이 헤이그 협약 가맹국에 eCertificate + eApostille만 발행하게 되었습니다.
            그러나 한국 출입국, 구청, 대사관은 실물 원본을 요구하는 사례가 다수 보고되고 있습니다.
          </p>
          <p className="mt-1 text-xs text-white/40">최종 업데이트: 2026년 4월 26일</p>
        </div>
      </section>

      {/* 핵심 요약 */}
      <section className="mb-10 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
        <p className="font-bold text-secondary mb-4">
          DFA eApostille는 HCCH 기준상 법적으로 유효합니다. 그러나 2026년 4월 현재, 한국의 출입국·구청·대사관 대부분이 실물 원본 운용을 유지하고 있으며, 전자 서류로 제출했다가 재제출을 요청받은 사례가 저희에게 실제로 접수되고 있습니다.
        </p>
        <ul className="space-y-2">
          {[
            'DFA eApostille는 2026년 3월 16일에 전면 개시. HCCH eAPP 기준에서의 법적 효력은 물리 아포스티유와 동등.',
            'PSA Helpline은 헤이그 협약 가맹국 향으로는 eCertificate + eApostille를 기본 발행 — 실물 원본(SECPA)은 취득하기 어려워졌습니다.',
            '한국 출입국·구청·주한 필리핀 대사관은 전자 서류 수령에 관한 공식 안내를 발표하지 않은 상태입니다.',
            '저희는 세부 현지 스태프가 PSA·DFA 창구에서 직접 실물 원본을 취득합니다 — 중요 수속에 안전한 선택지.',
          ].map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
              <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              {point}
            </li>
          ))}
        </ul>
      </section>

      {/* 용어 해설 */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-secondary mb-4">PSA 전자증명서·eApostille란</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
          <p>
            <strong className="text-gray-900">PSA eCertificate</strong>: PSA가 발행하는 출생증명서·혼인증명서·CENOMAR의 PDF 전자판. PSA Helpline 등에서 온라인 신청하여 취득할 수 있으며, QR코드로 진정성을 검증할 수 있습니다.
          </p>
          <p>
            <strong className="text-gray-900">DFA eApostille（2026년 3월 16일 개시）</strong>: PSA eCertificate에 부여되는 완전 디지털 아포스티유. ASEAN 최초의 풀디지털 운용으로, 법적 효력은 물리 아포스티유와 동등(HCCH eAPP 기준).{' '}
            <strong>인쇄하면 무효</strong>가 되는 경우가 있으므로 디지털 송신을 원칙으로 합니다.
          </p>
          <p>
            기존의 실물 원본(Security Paper / SECPA) + 물리 아포스티유는 계속 발행·이용 가능합니다. 단, PSA Helpline에서는 헤이그 협약 가맹국 향으로 더 이상 기본 제공되지 않습니다.
          </p>
        </div>
      </section>

      {/* PSA Helpline 정책 변경 */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-secondary mb-4">2026년 PSA Helpline 정책 변경</h2>
        <div className="flex items-start gap-3 p-5 rounded-xl border border-amber-100 bg-amber-50 text-sm text-gray-700">
          <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-gray-900 mb-2">헤이그 협약 가맹국 향: PSA Helpline은 eCertificate + eApostille만 발행</p>
            <p>
              2026년부터 PSA Helpline은 한국·일본·미국·캐나다·호주·영국·UAE 등 헤이그 아포스티유 협약 가맹국 향 신청에 대해 <strong>eCertificate + eApostille</strong>를 기본 발행하게 되었습니다. 재외 필리핀 국민이 온라인으로 PSA 서류를 신청하면 전자 문서가 기본으로 발행됩니다.
            </p>
            <p className="mt-2">
              실물 원본(SECPA)을 취득하려면 필리핀 현지 PSA Serbilis 창구 방문 또는 필리핀 현지에 스태프를 둔 대행 업체를 이용할 필요가 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 한국 제출처별 수령 현황 */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-secondary mb-4">한국 제출처별 수령 현황（2026년 4월 현재）</h2>
        <div className="space-y-3">
          {[
            {
              title: '출입국·외국인청（F-6 결혼이민비자, F-5 영주권 등）',
              body: '전자 서류에 관한 명시적인 수령 기준은 미공표. F-6 결혼이민비자 신청에서는 종래 PSA SECPA + 물리 아포스티유가 표준입니다. 전자판 수령 가능 여부는 담당 사무소에 사전 확인을 강력히 권장합니다.',
            },
            {
              title: '구청·시청（혼인신고 등 호적 관련）',
              body: '일부 자치단체에서는 전자판(PDF + eApostille) 수령 실적이 있습니다. 그러나 자치단체마다 판단이 달라 실물 원본을 요구하는 사례도 있습니다. 사전 문의가 필수입니다.',
            },
            {
              title: '주한 필리핀 대사관（서울）',
              body: '영사 서비스 관련 수속에서의 전자 서류 수령 가능 여부는 수속 종류에 따라 다릅니다. 공식 안내가 업데이트되지 않은 항목도 있으므로 대사관에 직접 확인하세요.',
            },
            {
              title: '법원·귀화 신청（법무부）',
              body: '귀화 신청, 법원 제출 등의 수속에서는 실물 원본이 요구되는 경우가 대부분입니다. 전자 서류 수령에 관한 공식 지침이 발표되지 않았습니다.',
            },
          ].map(({ title, body }) => (
            <div key={title} className="flex items-start gap-3 p-4 rounded-xl border border-amber-100 bg-amber-50">
              <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-gray-900 text-sm mb-1">{title}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 저희에게 접수된 사례 */}
      <section className="mb-10 rounded-2xl overflow-hidden border border-gray-200 border-l-4 border-l-red-700 bg-white shadow-sm">
        <div className="p-6">
          <div className="inline-block mb-3 px-3 py-1 bg-red-700 text-white text-xs font-bold rounded tracking-wide">
            저희에게 접수된 상담 사례
          </div>
          <p className="text-base font-bold text-secondary mb-4">
            2026년 3월 이후 다음과 같은 상담이 실제로 접수되고 있습니다.
          </p>
          <ul className="space-y-3">
            {[
              'PSA Helpline에서 전자 서류를 취득하여 구청 창구에 가져갔더니 "실물 원본을 가져오세요"라는 말을 들었습니다.',
              '다른 대행업체에 의뢰했더니 전자 서류로 납품되었습니다. 제출처에 확인하니 실물 원본이 필요하다고 하여 다시 저희에게 의뢰하게 되었습니다.',
              '전자 서류도 수령된다고 들었는데, 출입국 사무소에서 "종래 방식의 서류를 준비해 주세요"라는 말을 들었습니다.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-1" />
                <p className="text-sm text-gray-700 leading-relaxed">「{item}」</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-gray-400">※ 개인을 특정할 수 없는 형태로 가공한 상담 내용을 바탕으로 작성하였습니다.</p>
        </div>
      </section>

      {/* 비교표 */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-secondary mb-4">전자 서류 vs 실물 원본 비교</h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
          <table className="w-full min-w-[480px] text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-4 py-3 font-semibold text-gray-700 w-1/3">비교 항목</th>
                <th className="text-center px-4 py-3 font-semibold text-gray-500">전자 서류（eCertificate + eApostille）</th>
                <th className="text-center px-4 py-3 font-semibold text-primary">실물 원본（SECPA + 물리 아포스티유）</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['법적 효력', '유효（HCCH 기준）', '유효'],
                ['한국에서의 수령 확실성', '창구에 따라 다름（사전 확인 필요）', '높음（기존 표준）'],
                ['인쇄해서 제출', '원칙 불가（무효화 위험）', '가능'],
                ['재제출 리스크', '있음（이행기 중）', '낮음'],
                ['해외에서의 취득', 'PSA Helpline 온라인（헤이그국 기본）', '현지 대행 업체 필요'],
                ['소요 기간', '빠름（디지털 배송）', '4〜6주（DHL 배송）'],
              ].map(([item, electronic, paper]) => (
                <tr key={item} className="hover:bg-gray-50/50">
                  <td className="px-4 py-3 font-medium text-gray-800">{item}</td>
                  <td className="px-4 py-3 text-center text-gray-500">{electronic}</td>
                  <td className="px-4 py-3 text-center text-gray-800 font-medium">{paper}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 권장 대응 */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-secondary mb-4">권장 대응（우선순위 순）</h2>
        <ol className="space-y-4">
          {[
            {
              title: '제출처에 사전 확인（필수）',
              body: '출입국·구청·대사관 등 구체적인 창구에 전자 서류 수령 가능 여부를 전화 또는 이메일로 확인하세요. 가능하면 PDF 샘플을 첨부하여 문의하면 확실합니다.',
            },
            {
              title: '중요 수속은 실물 원본을 선택（안전책）',
              body: 'F-6 비자 신청, 혼인신고 등 중요한 수속에서는 실물 원본（SECPA + 물리 아포스티유）을 선택하는 것을 권장합니다. 재제출 비용은 처음부터 올바른 서류를 준비하는 비용을 초과하는 경우가 많습니다.',
            },
            {
              title: '전자판을 사용하는 경우 디지털 송신을 철저히',
              body: 'DFA 공식 사이트（apostille.gov.ph）경유로 취득한 PDF를 인쇄하지 않고 디지털로 제출하세요. QR코드에 의한 검증 정보를 반드시 첨부하세요.',
            },
          ].map(({ title, body }, i) => (
            <li key={title} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                {i + 1}
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">{title}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* CTA */}
      <section className="mb-10 rounded-2xl bg-secondary p-6 md:p-8 text-center">
        <h2 className="text-xl font-bold text-white mb-2">실물 원본이 필요한 경우 저희에게</h2>
        <p className="text-sm text-white/70 leading-relaxed mb-5">
          저희는 세부 현지 스태프가 PSA·DFA 창구에서 직접 실물 원본(SECPA + 물리 아포스티유)을 취득합니다.
          전자 서류로 수령되지 않은 분, 실물 원본이 필요한 분은 상담해 주세요.
        </p>
        <a
          href="/ko/contact/"
          className="inline-block bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors text-sm"
        >
          무료 상담·문의하기
        </a>
        <p className="text-xs text-white/40 mt-3">착수 전 취소 무료 · 진행 상황 수시 보고</p>
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

      {/* 내부 링크 */}
      <nav className="mb-8 flex flex-wrap gap-3" aria-label="관련 페이지">
        <Link to="/ko/f-6-philippines-documents/" className="inline-flex items-center gap-1.5 text-xs font-medium text-primary border border-primary/30 bg-primary/5 px-3 py-1.5 rounded-full hover:bg-primary/10 transition-colors">
          F-6 비자 서류 준비
          <ArrowRight className="w-3 h-3" />
        </Link>
        <Link to="/ko/nbi-clearance/" className="inline-flex items-center gap-1.5 text-xs font-medium text-primary border border-primary/30 bg-primary/5 px-3 py-1.5 rounded-full hover:bg-primary/10 transition-colors">
          NBI Clearance 대행
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
