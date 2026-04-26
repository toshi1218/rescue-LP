import React from 'react';
import PageLayoutKo from '../components/PageLayoutKo';
import { AlertTriangle } from 'lucide-react';

export default function PsaEcertificateGuideKo() {
  return (
    <PageLayoutKo
      title="PSA 전자문서·eApostille, 한국에서 사용 가능한가? 2026년 4월판"
      description="PSA eCertificate와 DFA eApostille의 한국 출입국·구청·대사관 수리 현황을 정리했습니다. F-6 비자·혼인신고 제출 전 반드시 확인하세요."
      canonical="https://ph-document.com/ko/psa-ecertificate/"
      breadcrumbs={[
        { label: '홈', href: '/ko/' },
        { label: 'PSA 전자문서·eApostille 한국 수리 현황' },
      ]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'PSA 전자문서·eApostille, 한국에서 사용 가능한가? 2026년 4월판',
          description:
            'PSA eCertificate와 DFA eApostille의 한국 출입국·구청·대사관 수리 현황. F-6 비자·혼인신고 제출 전 확인 필수.',
          datePublished: '2026-04-24',
          author: { '@type': 'Organization', name: 'IGRS Inc.', url: 'https://ph-document.com/ko/' },
          publisher: { '@type': 'Organization', name: 'IGRS Inc.', url: 'https://ph-document.com/ko/' },
        },
      ]}
    >
      {/* Summary */}
      <div className="mb-8 rounded-2xl border border-blue-100 bg-blue-50 p-6">
        <p className="font-bold text-secondary mb-3 text-base">핵심 요약</p>
        <p className="text-gray-700 leading-relaxed mb-4">
          PSA 전자문서（eCertificate）와 DFA eApostille는 법적으로 유효합니다. 그러나 2026년 4월 현재, 한국의 출입국사무소·구청·한국 주재 필리핀 대사관 등 많은 기관이 종이 원본을 기준으로 운영 중입니다. 전자문서로 제출했다가 재제출 요청을 받은 사례가 실제로 보고되고 있습니다.
        </p>
        <ul className="space-y-2">
          {[
            'DFA eApostille는 2026년 3월 16일 전면 시행. HCCH 기준의 법적 효력은 종이 아포스티유와 동일.',
            '한국의 각 제출 기관（출입국·구청·대사관）의 수리 여부는 창구별 판단에 맡겨져 있어 일률적으로 수리된다고 볼 수 없습니다.',
            '실제로 전자문서 제출 후 재제출 요청을 받은 사례가 저희에게 접수되고 있습니다.',
          ].map((point, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
              <span className="text-sm text-gray-700 leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* What are these documents */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary">PSA 전자문서·eApostille란?</h2>
        </div>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            <strong className="text-gray-900">PSA eCertificate</strong>
            ：PSA（필리핀 통계청）가 발행하는 출생증명서·혼인증명서·CENOMAR의 PDF 전자판. PSAHelpline 등에서 온라인으로 신청·취득 가능하며, QR코드로 진위 확인이 가능합니다.
          </p>
          <p>
            <strong className="text-gray-900">DFA eApostille（2026년 3월 16일 시행）</strong>
            ：PSA eCertificate에 부여되는 완전 디지털 아포스티유. ASEAN 최초의 풀디지털 운용으로, 법적 효력은 종이 아포스티유와 동일（HCCH eAPP 기준）.
            <strong> 인쇄하면 무효</strong>가 될 수 있으므로 디지털 전송이 원칙입니다.
          </p>
          <p>
            기존 종이 원본（Security Paper / SECPA）＋물리 아포스티유는 계속 발행·이용 가능합니다. eApostille는 편의성 향상을 위한 추가 선택지입니다.
          </p>
        </div>
      </section>

      {/* Korean acceptance status */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary">한국 제출처별 수리 현황（2026년 4월 기준）</h2>
        </div>
        <div className="space-y-3">
          {[
            {
              title: '출입국·외국인사무소（F-6 비자 등）',
              body: '전자판에 관한 명시적인 수리 기준은 미공표. F-6 비자 신청 시 기존에는 PSA Security Paper＋종이 아포스티유가 기준이었습니다. 전자판 수리 여부는 해당 사무소에 사전 확인을 강력히 권장합니다.',
            },
            {
              title: '구청·시청（혼인신고·가족관계 관련）',
              body: '일부 자치단체에서는 전자판（PDF＋eApostille）으로 접수한 사례가 있습니다. 단, 기관별로 판단이 다르며 종이 원본을 요구하는 경우도 있습니다. 사전 문의가 필수입니다.',
            },
            {
              title: '주한 필리핀 대사관（LCCM 등 관련 절차）',
              body: '공식 안내는 PSA 발행 증명서를 지정하고 있지만, 전자판에 관한 명시적인 기준은 아직 갱신되지 않았습니다. 종이 원본을 전제로 한 기재가 주를 이루고 있습니다.',
            },
          ].map(({ title, body }) => (
            <div key={title} className="flex items-start gap-3 p-4 rounded-xl border border-amber-100 bg-amber-50">
              <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-gray-900 mb-1">{title}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Real cases */}
      <section className="mb-10 rounded-2xl overflow-hidden border border-gray-200 border-l-4 border-l-red-700 bg-white shadow-sm">
        <div className="p-6 md:p-8">
          <div className="inline-block mb-3 px-3 py-1 bg-red-700 text-white text-xs font-bold rounded tracking-wide">
            실제 상담 사례
          </div>
          <p className="text-base font-bold text-secondary mb-4">
            2026년 3월 이후 저희에게 실제로 접수된 상담 내용입니다.
          </p>
          <ul className="space-y-3">
            {[
              'PSAHelpline에서 전자문서를 취득해 구청에 제출했더니 "종이 원본을 가져오세요"라는 말을 들었습니다.',
              '다른 업체에 의뢰했더니 전자문서로 납품됐습니다. 제출처에 확인해 보니 종이 원본이 필요하다고 해서 다시 저희에게 의뢰하게 됐습니다.',
              '전자문서도 수리된다고 들었는데, 출입국에서 "기존과 동일한 서류를 준비해 주세요"라고 했습니다.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-1" />
                <p className="text-sm text-gray-700 leading-relaxed">「{item}」</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-gray-400">※ 개인을 특정할 수 없는 형태로 가공한 상담 내용을 바탕으로 작성했습니다.</p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary">전자문서 vs 종이 원본 비교</h2>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
          <table className="w-full min-w-[480px] text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-4 py-3 font-semibold text-gray-700 w-1/3">비교 항목</th>
                <th className="text-center px-4 py-3 font-semibold text-gray-500">전자문서（eCertificate＋eApostille）</th>
                <th className="text-center px-4 py-3 font-semibold text-primary">종이 원본（SECPA＋물리 아포스티유）</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['법적 유효성', '유효（HCCH 기준）', '유효'],
                ['한국에서의 수리 확실성', '창구별 상이（사전 확인 필수）', '높음（종래의 표준）'],
                ['해외에서의 취득', '온라인으로 자력 취득 가능', '대행 업체 필요한 경우 多'],
                ['인쇄 후 제출', '원칙 불가（무효가 될 수 있음）', '가능'],
                ['재제출 리스크', '있음（이행기）', '낮음'],
              ].map(([item, electronic, paper]) => (
                <tr key={item} className="hover:bg-gray-50/50">
                  <td className="px-4 py-3 font-medium text-gray-800">{item}</td>
                  <td className="px-4 py-3 text-center text-gray-600">{electronic}</td>
                  <td className="px-4 py-3 text-center text-gray-800 font-medium">{paper}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Recommendations */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary">권장 대응（우선순위 순）</h2>
        </div>
        <ol className="space-y-4">
          {[
            {
              title: '제출처에 사전 확인（필수）',
              body: '출입국사무소·구청·대사관 등 구체적인 창구에 전자문서 수리 가능 여부를 전화 또는 이메일로 확인하세요. 가능하면 PDF 샘플을 첨부해서 문의하면 확실합니다.',
            },
            {
              title: '중요 절차에는 종이 원본 선택（안전책）',
              body: 'F-6 비자 신청·혼인신고 등 중요한 절차에서는 종이 원본（SECPA＋물리 아포스티유）을 선택하는 것을 권장합니다. 전자판은 보조적인 위치에 두세요.',
            },
            {
              title: '전자판을 사용하는 경우 디지털 전송 철저히',
              body: 'DFA 공식 사이트（apostille.gov.ph）에서 취득한 PDF를 인쇄하지 않고 디지털 전송으로 제출하세요. QR코드를 통한 검증 정보를 반드시 첨부하세요.',
            },
            {
              title: '향후 운용 변경을 정기적으로 확인',
              body: '제도 시행 초기로 각 기관의 운용이 바뀔 가능성이 있습니다. DFA·PSA 공식 사이트와 한국 출입국외국인정책본부 사이트를 정기적으로 확인하세요.',
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
      <div className="mb-10 rounded-2xl bg-secondary p-6 md:p-8 text-white">
        <p className="text-lg font-bold mb-2">종이 원본이 필요하신 경우</p>
        <p className="text-white/80 text-sm leading-relaxed mb-5">
          저희는 필리핀 현지 스태프가 PSA·DFA 창구에서 직접 종이 원본을 취득합니다. 전자문서로 수리되지 않은 분·종이 원본이 필요한 분은 무료 상담을 이용하세요.
        </p>
        <a
          href="/ko/contact/"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white hover:bg-primary/90 transition-colors"
        >
          무료 상담·문의하기
        </a>
        <p className="mt-3 text-xs text-white/50">착수 전 취소 무료 · 진행 상황 수시 보고</p>
      </div>

      {/* Related links */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-lg font-bold text-secondary">관련 서비스</h2>
        </div>
        <ul className="space-y-2">
          {[
            { label: 'PSA 출생증명서 취득 대행', path: '/ko/' },
            { label: 'CENOMAR（미혼증명서）대행', path: '/ko/' },
            { label: 'F-6 결혼비자 필리핀 서류', path: '/ko/f-6-philippines-documents/' },
            { label: 'NBI Clearance 취득 대행', path: '/ko/nbi-clearance/' },
          ].map(({ label, path }) => (
            <li key={label}>
              <a href={path} className="text-primary hover:underline text-sm font-medium">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </PageLayoutKo>
  );
}
