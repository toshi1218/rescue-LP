import React from 'react';
import PageLayoutKo from '../components/PageLayoutKo';
import FaqSection from '../components/FaqSection';
import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

const institutions = [
  {
    name: '출입국외국인정책본부 (KIS)',
    subtext: '비자 신청 · 체류 자격 변경',
    status: 'mixed' as const,
    label: '△ 접수 가능 (단, 사전 확인 권장)',
    detail:
      '한국은 헤이그 아포스티유 조약 가입국이므로 e-Apostille는 조약상 유효합니다. 2026년 4월, 주한 필리핀 대사관이 한국 정부 기관에 e-Apostille 도입을 공식 통보했습니다. 비자 신청·체류 자격 변경에서는 담당 심사관이 DFA 포털에서 인증번호를 입력해 진위를 즉시 확인할 수 있습니다. 다만 일선 창구의 대응 수준에 차이가 있을 수 있으므로, 제출 전 해당 출입국관리사무소에 확인하는 것이 안전합니다.',
  },
  {
    name: '가족관계등록소 / 시·구청',
    subtext: '국제결혼 신고 · 인지 · 귀화 수속',
    status: 'caution' as const,
    label: '△〜× 원본 요구 가능성 있음',
    detail:
      '한국 내 혼인 신고나 귀화 수속에서는 창구에 따라 "원본"을 요구하는 경우가 있습니다. 주한 필리핀 대사관은 한국 내 혼인 신고 시 DFA 아포스티유를 받은 PSA 혼인능력증명서(PSA Marriage Certificate) 원본을 요구하도록 안내하고 있습니다. 창구별로 기준이 다를 수 있으므로 반드시 사전에 해당 기관에 확인하십시오.',
  },
  {
    name: '주민센터',
    subtext: '혼인 신고 · 출생 신고 접수 창구',
    status: 'caution' as const,
    label: '△ 사전 확인 필수',
    detail:
      '주민센터(읍·면·동 사무소)는 국제결혼·출생 신고의 최초 접수 창구입니다. 법무부 지침에 따라 운영되지만 창구마다 대응 차이가 있습니다. e-Apostille 프린트물만 지참하면 "이것은 원본이 아니다"라고 반려될 위험이 있습니다. PDF 파일을 지참하고, 스마트폰 등으로 DFA 전자 조회 레지스트리를 직접 보여주면 수리 가능성이 높아집니다.',
  },
];

const statusIcon = (status: 'ok' | 'mixed' | 'caution' | 'no') => {
  if (status === 'ok') return <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />;
  if (status === 'no') return <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />;
  return <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />;
};

export default function PsaEcertificateHangukKo() {
  return (
    <PageLayoutKo
      title="PSA e-Certificate・eApostille 한국 제출 가능 여부【2026년】"
      description="PSA e-Certificate와 DFA e-Apostille의 한국 출입국・가족관계등록소・주민센터 접수 여부를 정리했습니다. e-Apostille 출력본은 유효하지 않습니다. PDF 원본 제출이 원칙입니다."
      canonical="https://ph-document.com/ko/psa-ecertificate-hanguk/"
      breadcrumbs={[{ label: '홈', href: '/ko/' }, { label: 'PSA e-Certificate・eApostille 한국 제출 안내' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'PSA e-Certificate・eApostille 한국 제출 가능 여부【2026년】',
          description:
            'PSA e-Certificate와 DFA e-Apostille의 한국 출입국・가족관계등록소・주민센터 접수 여부를 정리했습니다.',
          datePublished: '2026-04-30',
          author: { '@type': 'Organization', name: 'IGRS Inc.', url: 'https://ph-document.com/ko/' },
          publisher: { '@type': 'Organization', name: 'IGRS Inc.', url: 'https://ph-document.com/ko/' },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: '한국에서 PSA e-Certificate와 DFA e-Apostille를 제출할 수 있나요?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '한국은 헤이그 아포스티유 조약 가입국이므로 e-Apostille는 조약상 유효합니다. 2026년 4월에 주한 필리핀 대사관이 한국 기관에 공식 통보를 마쳤습니다. 다만 출입국관리사무소·가족관계등록소·주민센터에 따라 창구의 대응이 다를 수 있으므로, 제출 전 해당 기관에 반드시 확인하십시오.',
              },
            },
            {
              '@type': 'Question',
              name: 'e-Apostille를 인쇄해서 제출해도 되나요?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '안 됩니다. DFA 공식 안내에 따르면, e-Apostille를 인쇄하면 유효성을 잃습니다. e-Apostille는 반드시 PDF 파일 형태로 전자 제출해야 합니다. 종이 원본이 필요한 경우에는 PSA SECPA 용지(실물 문서)와 물리적 아포스티유 스티커가 필요하며, 이는 별도 경로로 신청해야 합니다.',
              },
            },
            {
              '@type': 'Question',
              name: 'e-Apostille와 종이 아포스티유(Paper Apostille)의 차이는 무엇인가요?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'DFA는 두 가지 형식을 발행합니다. (1) e-Apostille: PSA e-Certificate에 첨부되는 디지털 PDF. 전자 제출 전용이며, 인쇄하면 유효성을 잃습니다. (2) 종이 아포스티유(Paper Apostille): PSA SECPA 용지에 붙이는 물리적 스티커. 모든 제출 방식에서 사용 가능합니다. 2026년 3월 16일부터 DFA는 헤이그 조약 가입국에 대해 e-Apostille를 표준으로 발행하고 있습니다. 종이 아포스티유가 필요한 경우에는 별도의 "Paper Route"로 신청해야 합니다.',
              },
            },
            {
              '@type': 'Question',
              name: 'PSA e-Certificate와 PSA SECPA(Security Paper) 원본의 차이는 무엇인가요?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'PSA e-Certificate는 PSA가 처음부터 디지털로 발행하는 PDF 파일입니다. 실물 종이가 존재하지 않습니다. PSA SECPA는 보안 용지에 인쇄된 실물 문서로, 스캔하거나 직접 제출할 수 있습니다. 한국 기관이 "스캔 원본"을 요구하는 경우, 기대하는 것은 PSA SECPA 실물을 스캔한 이미지이며, PSA e-Certificate PDF 그 자체가 아닙니다. 국제결혼 신고 등 중요한 수속에는 PSA SECPA 원본을 취득하는 것이 안전합니다.',
              },
            },
          ],
        },
      ]}
    >
      <header className="mb-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary leading-snug mb-3">
          PSA e-Certificate・e-Apostille 한국에서 제출 가능한가요?
        </h1>
        <p className="text-sm md:text-base text-gray-500 leading-relaxed">
          출입국·가족관계등록소·주민센터의 접수 현황과 PSA SECPA 원본이 안전한 이유를 정리했습니다.
        </p>
      </header>

      {/* Summary */}
      <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 mb-8">
        <p className="font-bold text-gray-900 mb-3">핵심 요약</p>
        <ul className="space-y-2">
          {[
            '2026년 3월 16일부터 DFA는 헤이그 조약 가입국(한국 포함)에 e-Apostille(PDF)를 표준 발행합니다.',
            'e-Apostille를 인쇄해서 제출하면 유효성을 잃습니다. PDF 파일로 전자 제출하는 것이 원칙입니다.',
            '한국은 헤이그 조약 가입국이므로 e-Apostille는 조약상 유효합니다. 2026년 4월에 주한 필리핀 대사관이 한국 정부 기관에 공식 통보를 마쳤습니다.',
            '출입국관리사무소·가족관계등록소·주민센터의 창구 대응에 차이가 있을 수 있으므로, 제출 전 사전 확인이 필수입니다.',
          ].map((point, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="text-blue-600 font-bold flex-shrink-0">•</span>
              {point}
            </li>
          ))}
        </ul>
      </div>

      {/* Key alerts */}
      <div className="space-y-4 mb-8">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-gray-900 mb-1">중요 ①: e-Apostille는 인쇄 문서가 아닙니다</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              DFA 공식 안내에 따르면, <strong>e-Apostille를 인쇄하면 유효성을 잃습니다.</strong> 창구에서 확인해야 할 것은 "인쇄된 e-Apostille가 받아들여지는가"가 아니라, <strong>"PDF 파일 형식의 e-Apostille를 전자적으로 제출할 수 있는가"</strong>입니다. 제출처가 종이 원본을 요구하는 경우, PSA SECPA 용지와 물리적 아포스티유가 필요한 별도 경로가 있습니다.
            </p>
          </div>
        </div>
        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-gray-900 mb-1">중요 ②: PSA e-Certificate ≠ PSA SECPA 스캔</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>PSA e-Certificate</strong>는 처음부터 디지털 전용으로 발행된 PDF로, 실물 종이가 존재하지 않습니다.
              반면 <strong>PSA SECPA(Security Paper) 원본</strong>은 보안 용지에 인쇄된 실물 문서로, 스캔하거나 직접 제출할 수 있습니다.
              한국 기관이 "스캔 제출"을 허용한다고 해도, 기대하는 것은 PSA SECPA 실물을 스캔한 이미지이며, PSA e-Certificate PDF 그 자체가 아닙니다.
              종이 원본이 필요한 절차(국제결혼 신고 등)에는 반드시 PSA SECPA를 취득하십시오.
            </p>
          </div>
        </div>
      </div>

      {/* Institution breakdown */}
      <section className="mb-10">
        <h2 className="text-xl md:text-2xl font-bold text-secondary mb-4">한국 기관별 접수 현황 (2026년 4월 기준)</h2>
        <div className="space-y-4">
          {institutions.map(({ name, subtext, status, label, detail }) => (
            <div key={name} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-start gap-3">
                {statusIcon(status)}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-bold text-gray-900">{name}</span>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      status === 'ok' ? 'bg-green-100 text-green-700' :
                      status === 'no' ? 'bg-red-100 text-red-700' :
                      'bg-amber-100 text-amber-700'
                    }`}>{label}</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-2">{subtext}</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section className="mb-10">
        <h2 className="text-xl md:text-2xl font-bold text-secondary mb-4">e-Apostille vs 종이 아포스티유 비교</h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
          <table className="w-full min-w-[480px] text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-4 py-3 font-semibold text-gray-700 w-1/3">비교 항목</th>
                <th className="text-center px-4 py-3 font-semibold text-gray-500">e-Apostille (PDF)</th>
                <th className="text-center px-4 py-3 font-semibold text-primary">종이 아포스티유 (SECPA)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['형식', 'PDF 파일 전용 (실물 없음)', 'SECPA 보안 용지에 스티커 부착'],
                ['기반 문서', 'PSA e-Certificate (디지털 전용)', 'PSA SECPA (실물 종이 문서)'],
                ['제출 방법', '전자 업로드 전용', '실물 또는 스캔 원본'],
                ['인쇄 제출', '✗ 인쇄하면 유효성 상실', '✓ 실물 문서'],
                ['한국 조약상 유효성', '✓ 유효 (헤이그 조약)', '✓ 유효'],
                ['출입국관리사무소', '△ 확인 권장', '✓ 수리 가능'],
                ['가족관계등록소', '△〜✗ 원본 요구 가능', '✓ 수리 가능'],
                ['주민센터', '△ 사전 확인 필수', '✓ 수리 가능'],
                ['재제출 위험', '있음 (과도기)', '낮음'],
              ].map(([item, electronic, paper]) => (
                <tr key={item} className="hover:bg-gray-50/50">
                  <td className="px-4 py-3 font-medium text-gray-800">{item}</td>
                  <td className="px-4 py-3 text-center text-gray-600">{electronic}</td>
                  <td className="px-4 py-3 text-center text-gray-800">{paper}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Recommended steps */}
      <section className="mb-10">
        <h2 className="text-xl md:text-2xl font-bold text-secondary mb-4">권장 대응 절차</h2>
        <ol className="space-y-4">
          {[
            {
              title: '제출처에 사전 확인 (필수)',
              body: '출입국관리사무소·가족관계등록소·주민센터에 전화 또는 이메일로 PDF 형식의 e-Apostille 접수 가능 여부를 확인하십시오. "아포스티유를 받아들이나요?"라고 질문하는 것이 아니라, "2026년 3월 16일부터 DFA가 디지털 e-Apostille(PDF)를 표준 발행하고 있는데, QR코드로 온라인 검증하는 방식으로 접수가 가능한지 확인해 주세요"라고 구체적으로 문의하십시오.',
            },
            {
              title: '창구 제출 시 스마트폰으로 실시간 검증 시연',
              body: '창구에서 PDF 인쇄본만 제출하지 마십시오. 스마트폰 등으로 DFA 전자 조회 레지스트리(e-registry.apostille.gov.ph)에 접속해 담당자 앞에서 실시간으로 진위를 확인하는 과정을 보여주면 수리 가능성이 높아집니다.',
            },
            {
              title: '중요 수속에는 종이 원본을 선택 (안전책)',
              body: '국제결혼 신고·귀화 신청 등 중요한 수속에는 PSA SECPA 종이 원본과 물리적 아포스티유(Paper Apostille)가 안전합니다. e-Apostille가 전자 제출로 수리되지 않는 경우, PSA SECPA 경로로 별도 취득이 필요합니다.',
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

      <FaqSection
        items={[
          {
            q: '한국에서 PSA e-Certificate와 DFA e-Apostille를 제출할 수 있나요?',
            a: '한국은 헤이그 아포스티유 조약 가입국이므로 e-Apostille는 조약상 유효합니다. 2026년 4월에 주한 필리핀 대사관이 한국 기관에 공식 통보를 마쳤습니다. 다만 출입국관리사무소·가족관계등록소·주민센터에 따라 창구의 대응이 다를 수 있으므로, 제출 전 해당 기관에 반드시 확인하십시오.',
          },
          {
            q: 'e-Apostille를 인쇄해서 제출해도 되나요?',
            a: '안 됩니다. DFA 공식 안내에 따르면, e-Apostille를 인쇄하면 유효성을 잃습니다. e-Apostille는 반드시 PDF 파일 형태로 전자 제출해야 합니다. 종이 원본이 필요한 경우에는 PSA SECPA 용지(실물 문서)와 물리적 아포스티유 스티커가 필요하며, 이는 별도 경로로 신청해야 합니다.',
          },
          {
            q: 'e-Apostille와 종이 아포스티유(Paper Apostille)의 차이는 무엇인가요?',
            a: 'DFA는 두 가지 형식을 발행합니다. (1) e-Apostille: PSA e-Certificate에 첨부되는 디지털 PDF. 전자 제출 전용이며, 인쇄하면 유효성을 잃습니다. (2) 종이 아포스티유(Paper Apostille): PSA SECPA 용지에 붙이는 물리적 스티커. 모든 제출 방식에서 사용 가능합니다. 2026년 3월 16일부터 DFA는 헤이그 조약 가입국에 대해 e-Apostille를 표준으로 발행하고 있습니다. 종이 아포스티유가 필요한 경우에는 별도의 "Paper Route"로 신청해야 합니다.',
          },
          {
            q: 'PSA e-Certificate와 PSA SECPA(Security Paper) 원본의 차이는 무엇인가요?',
            a: 'PSA e-Certificate는 PSA가 처음부터 디지털로 발행하는 PDF 파일입니다. 실물 종이가 존재하지 않습니다. PSA SECPA는 보안 용지에 인쇄된 실물 문서로, 스캔하거나 직접 제출할 수 있습니다. 한국 기관이 "스캔 원본"을 요구하는 경우, 기대하는 것은 PSA SECPA 실물을 스캔한 이미지이며, PSA e-Certificate PDF 그 자체가 아닙니다. 국제결혼 신고 등 중요한 수속에는 PSA SECPA 원본을 취득하는 것이 안전합니다.',
          },
        ]}
      />

      {/* CTA */}
      <div className="rounded-2xl bg-primary/5 border border-primary/20 p-6 text-center">
        <p className="font-bold text-gray-900 mb-2">종이 원본이 필요하신 경우</p>
        <p className="text-sm text-gray-700 mb-4 leading-relaxed">
          저희는 필리핀 현지 스태프가 PSA・DFA 창구에서 직접 종이 원본을 취득합니다. e-Apostille로 접수되지 않은 분, 종이 원본이 필요한 분은 부담 없이 문의해 주세요.
        </p>
        <a
          href="/ko/contact/"
          className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-colors"
        >
          무료 상담・문의하기
        </a>
        <p className="text-xs text-gray-400 mt-3">착수 전 취소 무료・진행 상황 수시 보고</p>
      </div>
    </PageLayoutKo>
  );
}
