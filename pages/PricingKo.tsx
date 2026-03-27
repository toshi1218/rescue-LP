import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import PageLayoutKo from '../components/PageLayoutKo';

export default function PricingKo() {
  return (
    <PageLayoutKo
      title="요금 안내 | 필리핀 PSA · 아포스티유 · NBI 대행"
      description="CENOMAR, PSA 출생증명서, NBI Clearance, DFA 아포스티유 대행 요금 안내. 아포스티유 인증 + 국제 배송 포함. 추가 비용 사전 고지. 무료 견적 신청 가능."
      canonical="https://ph-document.com/ko/pricing/"
      breadcrumbs={[{ label: '홈', href: '/ko/' }, { label: '요금 안내' }]}
    >
      {/* HeroBanner */}
      <section className="relative mb-10 overflow-hidden rounded-2xl bg-secondary px-6 py-10 md:px-10 md:py-14">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/5 blur-2xl" />
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{ backgroundImage: 'radial-gradient(circle, #d69e2e 1px, transparent 1px)', backgroundSize: '24px 24px' }}
          />
        </div>
        <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-primary via-primary/60 to-transparent" />
        <div className="relative">
          <div className="flex flex-wrap gap-2 mb-4">
            {['아포스티유 포함', '국제 배송 포함', '추가 비용 사전 고지'].map((b) => (
              <span key={b} className="inline-flex items-center gap-1 text-xs font-semibold bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded-full">
                <span className="w-1 h-1 rounded-full bg-primary inline-block" />
                {b}
              </span>
            ))}
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug">요금 안내</h1>
          <p className="text-sm text-white/70 mt-3">
            F-6 결혼이민비자 준비, 국제결혼 혼인신고, NBI Clearance 단독 등 목적에 맞는 요금을 확인하세요.
          </p>
        </div>
      </section>

      {/* CTA */}
      <div className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5 text-center">
        <p className="font-bold text-secondary mb-1">먼저 무료로 견적 받아보세요</p>
        <p className="text-xs text-gray-500 mb-4">필요한 서류와 수량, 아포스티유 유무를 알려주시면 정확한 견적을 드립니다.</p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold py-2.5 px-6 rounded-lg shadow hover:bg-primary-hover transition-all text-sm"
        >
          무료 견적 신청
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* 기본 요금 */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-secondary mb-5">패키지 요금</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              name: '베이직 플랜',
              price: '₩590,000',
              sub: '약 6.3만엔',
              items: ['PSA 서류 1통（CENOMAR 또는 출생증명서）', 'DFA 아포스티유 인증', '국제 특송（DHL）'],
              featured: false,
            },
            {
              name: '스탠다드 플랜',
              price: '₩990,000',
              sub: '약 10.5만엔',
              items: ['PSA 출생증명서', 'CENOMAR（미혼증명서）', 'DFA 아포스티유 인증（2통）', '국제 특송（DHL）'],
              featured: true,
            },
            {
              name: 'F-6 준비 패키지',
              price: '₩1,590,000',
              sub: '약 16.9만엔',
              items: ['PSA 출생증명서', 'CENOMAR（미혼증명서）', 'NBI Clearance', 'DFA 아포스티유 인증（3통）', '서류 정리 안내', '국제 특송（DHL）'],
              featured: false,
            },
          ].map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-5 ${plan.featured ? 'border-primary bg-primary/5 shadow-lg' : 'border-gray-100 bg-white shadow-sm'}`}
            >
              {plan.featured && (
                <p className="text-xs font-bold text-primary mb-2">인기 No.1</p>
              )}
              <h3 className="font-bold text-secondary text-sm mb-1">{plan.name}</h3>
              <p className="text-2xl font-bold text-secondary mb-0.5">{plan.price}</p>
              <p className="text-xs text-gray-400 mb-4">{plan.sub}</p>
              <ul className="space-y-2">
                {plan.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                    <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-3">※ 요금은 세금 별도입니다. 취득 난이도에 따라 변동될 수 있으며, 사전에 고지합니다.</p>
      </section>

      {/* 추가 옵션 */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-secondary mb-5">추가 옵션</h2>
        <div className="rounded-xl border border-gray-100 bg-white shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-4 py-3 font-semibold text-gray-700">옵션</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">요금（KRW）</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">일본엔 목안</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Express 우선 처리', price: '+₩180,000', yen: '약 +1.9만엔' },
                { name: 'LCCM 주변 개별 안내・예약 동선 정리', price: '+₩390,000〜', yen: '약 +4.1만엔〜' },
              ].map((opt, i) => (
                <tr key={opt.name} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                  <td className="px-4 py-3 text-gray-700">{opt.name}</td>
                  <td className="px-4 py-3 font-medium text-secondary">{opt.price}</td>
                  <td className="px-4 py-3 text-gray-400 text-xs">{opt.yen}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-2">
          ※ LCCM（혼인요건증명서）은 주한 필리핀 대사관에서 본인이 직접 신청하는 서류입니다. 예약 방법 안내 및 동선 정리를 지원합니다.
        </p>
      </section>

      {/* 국제 배송 안내 */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-secondary mb-4">국제 배송 안내</h2>
        <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-600 leading-relaxed">
            원본 서류는 DHL 국제 특송으로 한국 내 지정 주소로 발송합니다. 배송비는 패키지 요금에 포함되어 있습니다.
            추적 번호를 제공해 드리며, 통상 발송 후 3〜5 영업일 내 도착합니다.
          </p>
        </div>
      </section>

      {/* 진행 기간 안내 */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-secondary mb-4">진행 기간 안내</h2>
        <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
          <div className="space-y-3">
            {[
              { label: '표준 처리 기간', value: '4〜8주（서류 종류・상황에 따라 변동）' },
              { label: 'Express 처리 시', value: '2〜4주（우선 처리 옵션 +₩180,000）' },
              { label: 'NBI Clearance 포함 시', value: '추가 1〜2주가 소요될 수 있습니다' },
            ].map((row) => (
              <div key={row.label} className="flex gap-4 text-sm">
                <span className="text-gray-400 shrink-0 w-40">{row.label}</span>
                <span className="text-secondary font-medium">{row.value}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4">
            ※ PSA 혼잡도, DFA 아포스티유 처리 상황에 따라 기간이 달라질 수 있습니다. 착수 시 현황을 안내드립니다.
          </p>
        </div>
      </section>

      {/* 환불 및 유의사항 */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-secondary mb-4">환불 및 유의사항</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
            <p className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">결제 방법</p>
            <p className="text-sm text-gray-600">은행 송금（착수금 50% → 잔금 50%）</p>
          </div>
          <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
            <p className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">취소・환불</p>
            <ul className="space-y-1">
              <li className="text-sm text-gray-600">・ 착수 전: 무료 취소 가능</li>
              <li className="text-sm text-gray-600">・ 착수 후: 실비 + 진행분 공제 후 환불</li>
              <li className="text-sm text-gray-600">・ 서류 사본 확인 후 잔금 입금 → 발송</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 문의하기 링크 */}
      <div className="text-center mt-8">
        <p className="text-sm text-gray-500 mb-4">
          카카오톡 또는 이메일로 상담 가능합니다. 필요한 서류가 아직 정확하지 않아도 괜찮습니다.
        </p>
        <Link
          to="/ko/contact/"
          className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:bg-primary-hover transition-all text-sm"
        >
          문의하기
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </PageLayoutKo>
  );
}
