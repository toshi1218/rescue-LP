import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, AlertCircle, ArrowRight, Clock, Shield, FileText, ShieldCheck, Lock, CreditCard, Trash2, Eye, HeartHandshake } from 'lucide-react';
import NavbarKo from '../components/NavbarKo';
import FooterKo from '../components/FooterKo';
import BackToTop from '../components/BackToTop';
import { useMeta } from '../lib/useMeta';

export default function HomeKo() {
  useMeta(
    '필리핀 서류 취득 대행 | PSA · 아포스티유 · NBI 원스톱 지원',
    'CENOMAR(미혼증명서), PSA 출생증명서, NBI Clearance, 아포스티유 취득을 대행합니다. F-6 결혼이민비자 준비, 한국 제출용 필리핀 서류를 처음부터 끝까지 지원합니다.',
    'https://ph-document.com/ko/',
  );

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    name: '필리핀 서류 취득 대행 센터',
    legalName: 'IGRS Inc.',
    url: 'https://ph-document.com/ko/',
    description:
      '필리핀 공적 서류(PSA 출생증명서, CENOMAR, NBI Clearance, DFA 아포스티유)를 대행 취득합니다. F-6 결혼이민비자, F-5 영주권, 귀화 신청에 대응. 방문 불필요.',
    email: 'igrs20200601@gmail.com',
    areaServed: [
      { '@type': 'Country', name: 'KR' },
      { '@type': 'Country', name: 'PH' },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'igrs20200601@gmail.com',
      contactType: 'customer service',
      availableLanguage: ['Korean', 'English'],
    },
    priceRange: '₩590,000〜₩1,590,000',
    currenciesAccepted: 'KRW',
  };

  const faqs = [
    {
      q: '서류 이름을 정확히 모르는데 상담할 수 있나요?',
      a: '네, 괜찮습니다. 비자 종류나 목적을 알려주시면 필요한 서류를 정리해 드립니다.',
    },
    {
      q: '필리핀에 직접 가지 않아도 되나요?',
      a: '네. 저희가 필리핀 현지에서 서류를 취득하고 아포스티유 인증까지 마친 뒤 국제 특송으로 배송해 드립니다.',
    },
    {
      q: 'F-6 비자 준비에 필요한 서류를 모두 맡길 수 있나요?',
      a: 'CENOMAR, PSA 출생증명서, 아포스티유는 저희가 대행 취득합니다. NBI Clearance는 신청 방법 안내・아포스티유 수배를 지원합니다（지문 등록은 주한 필리핀 대사관에서 본인 직접 필요）. LCCM（혼인요건증명서）에 관한 안내도 가능합니다.',
    },
    {
      q: '얼마나 걸리나요?',
      a: '서류 종류와 상황에 따라 다르지만, 일반적으로 4〜8주가 소요됩니다. 급행 옵션（+₩180,000）을 선택하시면 단축할 수 있습니다.',
    },
    {
      q: '아포스티유가 꼭 필요한가요?',
      a: '한국 제출용 필리핀 서류는 원칙적으로 DFA 아포스티유 인증이 필요합니다. 저희 패키지에는 기본적으로 포함되어 있습니다.',
    },
    {
      q: '결제는 어떻게 하나요?',
      a: '신용카드로 결제하실 수 있습니다. 착수금 50% 결제 후 진행을 시작합니다. 서류 사본 확인 후 나머지 50%를 결제하시면 원본을 발송합니다.',
    },
  ];

  return (
    <div className="min-h-screen bg-background-light text-gray-800 font-body">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-primary to-transparent" />
      <NavbarKo />

      <main id="main-content">
        {/* Hero */}
        <section className="bg-secondary text-white py-14 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="inline-flex items-center gap-1 text-xs font-semibold bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded-full">
                <span className="w-1 h-1 rounded-full bg-primary inline-block" />
                필리핀 현지 스태프 대응
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-semibold bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded-full">
                <span className="w-1 h-1 rounded-full bg-primary inline-block" />
                한국어 이메일 상담
              </span>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold leading-snug mb-4">
              필리핀 서류 취득,<br />처음부터 끝까지 도와드립니다
            </h1>
            <p className="text-white/70 text-sm md:text-base mb-8 max-w-xl">
              CENOMAR（미혼증명서）, PSA 출생증명서, NBI Clearance, DFA 아포스티유를 필리핀 방문 없이 대행합니다.
              F-6 결혼이민비자 준비부터 한국 혼인신고까지 필리핀 측 서류를 정리해 드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-secondary font-bold py-3.5 px-6 rounded-xl shadow-lg hover:bg-primary-hover transition-all text-sm"
              >
                무료로 상담하기
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/ko/pricing/"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-medium py-3.5 px-6 rounded-xl hover:bg-white/10 transition-all text-sm"
              >
                요금 보기
              </Link>
            </div>
            <p className="text-white/40 text-xs mt-4">
              카카오톡 또는 이메일로 상담 가능합니다 · 필요한 서류가 아직 정확하지 않아도 괜찮습니다
            </p>
          </div>
        </section>

        {/* 서류 준비가 막막한 이유 */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-secondary mb-8 text-center">
              서류 준비가 막막한 이유
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: '어떤 서류가 필요한지 모른다',
                  desc: 'F-6 비자, 혼인신고, F-5 등 목적에 따라 필요한 서류가 다릅니다. 필리핀 측 서류를 무엇부터 준비해야 하는지 파악하기 어렵습니다.',
                },
                {
                  title: '필리핀 기관 대응이 어렵다',
                  desc: 'PSA, NBI, DFA는 필리핀에서만 발급됩니다. 영어와 타갈로그어로만 운영되는 기관과의 소통이 부담스럽습니다.',
                },
                {
                  title: '아포스티유가 필요한지 모른다',
                  desc: '한국 제출용 서류에는 DFA 아포스티유 인증이 필요한 경우가 대부분입니다. 어떤 서류에 필요한지 파악하기 쉽지 않습니다.',
                },
                {
                  title: '대행업자를 믿을 수 있을지 모른다',
                  desc: '해외 서류 대행은 실태가 보이지 않아 불안합니다. 비용을 지불한 후 연락이 끊기는 사례도 존재합니다.',
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-3 p-4 rounded-xl border border-gray-100 bg-gray-50">
                  <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-sm text-gray-800 mb-1">{item.title}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 저희가 도와드릴 수 있는 서비스 */}
        <section className="py-14 px-4 bg-background-light">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-secondary mb-2 text-center">
              저희가 도와드릴 수 있는 서비스
            </h2>
            <p className="text-sm text-gray-500 text-center mb-8">
              필리핀 서류 취득 전 과정을 대행합니다. 방문 불필요, 이메일만으로 완결.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  icon: <FileText className="w-6 h-6 text-primary" />,
                  title: 'PSA 서류 취득',
                  desc: '출생증명서, CENOMAR（미혼증명서）, 혼인증명서를 필리핀 통계청（PSA）에서 취득합니다.',
                },
                {
                  icon: <Shield className="w-6 h-6 text-primary" />,
                  title: 'NBI Clearance 신청',
                  desc: '필리핀 국가수사국（NBI）의 범죄경력증명서 취득을 지원합니다. 아포스티유 인증까지 대응합니다.',
                },
                {
                  icon: <CheckCircle className="w-6 h-6 text-primary" />,
                  title: 'DFA 아포스티유 인증',
                  desc: '한국 제출용 아포스티유 인증을 필리핀 외무부（DFA）에서 취득합니다. 국제 특송으로 배송합니다.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
                  <div className="mb-3">{item.icon}</div>
                  <h3 className="font-bold text-sm text-secondary mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 grid md:grid-cols-3 gap-3">
              {[
                { label: '의뢰 방법', value: '필리핀 방문 불필요' },
                { label: '착수 전 취소', value: '무료' },
                { label: '답변 속도', value: '24시간 이내' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-4 text-center">
                  <p className="text-xs text-gray-400 mb-1">{stat.label}</p>
                  <p className="font-bold text-secondary text-sm">{stat.value}</p>
                </div>
              ))}
            </div>
            {/* 서류 취득 보증 */}
            <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-2xl px-5 py-4 flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                <Shield className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="font-bold text-emerald-800 text-sm mb-1">서류 취득 보증</p>
                <p className="text-xs text-emerald-700 leading-relaxed">당사 진행으로 서류 취득이 불가능한 경우, 착수금을 전액 환불해 드립니다.</p>
                <p className="text-xs text-gray-500 leading-relaxed mt-1">고객 사유 취소의 경우, 착수 시 발생한 실비를 공제한 금액을 환불해 드립니다.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-secondary mb-2 text-center">
              한국 제출용으로 자주 요청되는 서류
            </h2>
            <p className="text-sm text-gray-500 text-center mb-8">
              F-6 결혼이민비자 준비에서 필리핀 측 서류는 아래가 대표적입니다
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-secondary text-white">
                    <th className="text-left px-4 py-3 font-semibold rounded-tl-xl">서류명（한국어）</th>
                    <th className="text-left px-4 py-3 font-semibold">영문 명칭</th>
                    <th className="text-left px-4 py-3 font-semibold rounded-tr-xl">발급기관</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { ko: '미혼증명서', en: 'CENOMAR', org: 'PSA' },
                    { ko: '출생증명서', en: 'PSA Birth Certificate', org: 'PSA' },
                    { ko: '혼인관계증명서', en: 'PSA Marriage Certificate', org: 'PSA' },
                    { ko: '범죄경력증명서', en: 'NBI Clearance', org: 'NBI' },
                    { ko: '아포스티유 인증', en: 'DFA Apostille', org: 'DFA' },
                  ].map((row, i) => (
                    <tr key={row.en} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-4 py-3 font-medium text-secondary">{row.ko}</td>
                      <td className="px-4 py-3 text-gray-600">{row.en}</td>
                      <td className="px-4 py-3 text-gray-500">{row.org}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-3 text-center">
              ※ F-6 비자에는 별도로 주한 필리핀 대사관 발급 LCCM（혼인요건증명서）이 필요합니다. 안내 가능합니다.
            </p>
            <div className="mt-6 text-center">
              <Link
                to="/ko/f-6-philippines-documents/"
                className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary transition-colors"
              >
                F-6 비자 서류 준비 자세히 보기
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* 진행 절차 */}
        <section className="py-14 px-4 bg-background-light">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-secondary mb-8 text-center">
              진행 절차
            </h2>
            <div className="relative">
              {[
                { step: '01', title: '무료 상담', desc: '필요한 서류와 목적을 확인합니다. 서류 이름을 모르셔도 괜찮습니다.' },
                { step: '02', title: '견적 안내', desc: '취득할 서류와 비용, 예상 기간을 명확하게 안내합니다. 추가 비용은 사전에 고지합니다.' },
                { step: '03', title: '착수금 50% 입금', desc: '착수금 입금 확인 후 현지 절차를 시작합니다.' },
                { step: '04', title: '필리핀 현지 취득・인증', desc: 'PSA, NBI, DFA에서 서류를 취득하고 아포스티유 인증까지 진행합니다. 진행 상황을 수시로 보고합니다.' },
                { step: '05', title: '사본 확인 후 잔금 입금・발송', desc: '서류 사본을 확인하신 후 잔금 50%를 입금하시면 국제 특송으로 발송합니다.' },
              ].map((item, i) => (
                <div key={item.step} className="flex gap-4 mb-6 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center shrink-0">
                      <span className="text-xs font-bold text-primary">{item.step}</span>
                    </div>
                    {i < 4 && <div className="w-0.5 h-full bg-primary/20 my-1" />}
                  </div>
                  <div className="pb-6">
                    <p className="font-bold text-sm text-secondary mb-1">{item.title}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 요금 안내 */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-secondary mb-2 text-center">
              요금 안내
            </h2>
            <p className="text-sm text-gray-500 text-center mb-8">
              아포스티유 인증 + 국제 배송 포함 가격입니다
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  name: '베이직 플랜',
                  price: '₩590,000',
                  sub: '약 6.3만엔',
                  desc: 'PSA 서류 1통 + 아포스티유 + 국제 배송',
                  items: ['PSA 서류 1통 (CENOMAR 또는 출생증명서)', 'DFA 아포스티유 인증', '국제 특송 (DHL)'],
                  featured: false,
                },
                {
                  name: '스탠다드 플랜',
                  price: '₩990,000',
                  sub: '약 10.5만엔',
                  desc: 'PSA 출생증명서 + CENOMAR + 아포스티유 + 국제 배송',
                  items: ['PSA 출생증명서', 'CENOMAR（미혼증명서）', 'DFA 아포스티유 인증（2통）', '국제 특송 (DHL)'],
                  featured: true,
                },
                {
                  name: 'F-6 준비 패키지',
                  price: '₩1,590,000',
                  sub: '약 16.9만엔',
                  desc: 'PSA 출생증명서 + CENOMAR + NBI Clearance + 아포스티유 + 서류 정리 안내 + 진행 보고',
                  items: ['PSA 출생증명서', 'CENOMAR（미혼증명서）', 'NBI Clearance（대사관 지문 등록 후 대행）', 'DFA 아포스티유 인증（3통）', '서류 정리 안내', '국제 특송 (DHL)'],
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
                  <p className="text-xs text-gray-400 mb-3">{plan.sub}</p>
                  <ul className="space-y-1.5 mb-4">
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
            <div className="mt-4 text-center">
              <Link
                to="/ko/pricing/"
                className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary transition-colors"
              >
                추가 옵션・상세 요금 보기
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* 보안과 안심 */}
        <section className="py-14 px-4 bg-white" aria-label="보안과 안심">
          <div className="max-w-3xl mx-auto">

            {/* Part 1: 보안 */}
            <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-secondary/[0.03] to-primary/[0.04] p-6 md:p-8 mb-10">
              <div className="flex items-center gap-3 mb-3">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-primary tracking-wide uppercase mb-0.5">보안 정책</p>
                  <h2 className="text-xl md:text-2xl font-bold text-secondary leading-snug">
                    소중한 서류를 SNS나 이메일로 주고받지 않습니다
                  </h2>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                여권과 증명서는 인생에서 가장 중요한 개인정보입니다. 그래서 당사는 서류 데이터를 주고받고 보관하고 폐기하는 방법을 서비스 설계의 중심에 두고 있습니다.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {[
                  { icon: <Lock className="w-5 h-5 text-primary" />, title: '기밀 서류는 채팅·이메일 첨부로 받지 않습니다', desc: '여권·PSA 출생증명서·CENOMAR 이미지는 카카오톡·WhatsApp·메신저나 이메일 첨부가 아닌, 고객 전용 보안 환경으로 주고받습니다.' },
                  { icon: <CreditCard className="w-5 h-5 text-primary" />, title: '카드 정보는 당사에 전달되지 않습니다', desc: '결제는 Stripe의 암호화된 페이지에서 직접 입력하십니다. 카드 번호를 채팅이나 이메일로 보내실 필요가 없습니다.' },
                  { icon: <Trash2 className="w-5 h-5 text-primary" />, title: '업무 완료 후 3개월 이내 삭제', desc: '전자 데이터는 업무 완료 후 3개월 이내에 삭제하고, 종이 서류는 파쇄기로 물리적으로 폐기합니다.' },
                ].map((item) => (
                  <div key={item.title} className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
                    <div className="mb-2">{item.icon}</div>
                    <h3 className="font-bold text-sm text-secondary mb-1.5">{item.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <Link
                to="/ko/data-security/"
                className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary transition-colors"
              >
                보안 정책 자세히 보기
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Part 2: 이야기 + 안심 */}
            <div className="rounded-2xl border border-gray-200 bg-secondary p-6 md:p-8 text-white">
              <div className="flex items-center gap-2 mb-4">
                <HeartHandshake className="w-5 h-5 text-primary" />
                <p className="text-xs font-bold text-primary tracking-wide uppercase">왜 이 서비스를 시작했는가</p>
              </div>
              <div className="space-y-3 text-sm text-white/80 leading-relaxed mb-6">
                <p>
                  계기는 아내의 친구가 Facebook의 업자에게 사기를 당한 일이었습니다. 돈을 지불했지만 서류는 오지 않았고 연락도 끊겼습니다 —
                  국제결혼 서류 준비에서 결코 드문 이야기가 아닙니다.
                </p>
                <p>
                  Facebook 커뮤니티에서 찾는 개인 업자가 모두 나쁘다고는 할 수 없습니다. 다만 저렴한 만큼 트레이드오프가 있습니다.
                  개인정보가 메신저로 오가고, 진행 보고도 없으며, 저렴한 배송은 추적도 되지 않아 '정말 도착할까' 하는 불안을 안고 기다리게 됩니다.
                </p>
                <p className="text-white font-semibold">
                  그래서 저희는 자체 데이터베이스로 개인정보를 지키고, 진행 상황을 눈에 보이게 하며, 24시간 이내에 반드시 답변하는 체제를 갖췄습니다.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-3 mb-6">
                {[
                  { icon: <Eye className="w-5 h-5 text-primary" />, title: '진행 상황을 언제나 확인', desc: '고객 전용 페이지에서 지금 서류가 전체 중 어느 단계인지 확인하실 수 있습니다.' },
                  { icon: <Clock className="w-5 h-5 text-primary" />, title: '24시간 이내 반드시 답변', desc: '문의에는 24시간 이내에 반드시 답변드리고, 추적 가능한 배송으로 발송합니다.' },
                  { icon: <ShieldCheck className="w-5 h-5 text-primary" />, title: '일본 법인이 책임지고 대응', desc: '프라이버시·데이터·진행 공유까지 갖춘 일본 법인(IGRS Inc.)의 정식 서비스입니다.' },
                ].map((item) => (
                  <div key={item.title} className="bg-white/[0.06] border border-white/10 rounded-xl p-4">
                    <div className="mb-2">{item.icon}</div>
                    <h3 className="font-bold text-sm text-white mb-1.5">{item.title}</h3>
                    <p className="text-xs text-white/60 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/10 pt-5">
                <p className="text-base md:text-lg font-bold text-white leading-snug">
                  정식 요금은 Facebook의 개인 업자보다 조금 높을 수 있습니다. 하지만 그것은 '안심'의 가격입니다.
                </p>
                <p className="text-sm text-white/70 mt-2">
                  프라이버시도, 데이터도, 진행 상황도 일본 법인이 확실히 지켜 전해 드립니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 자주 묻는 질문 */}
        <section className="py-14 px-4 bg-background-light">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-secondary mb-8 text-center">
              자주 묻는 질문
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-xl border border-gray-100 bg-white shadow-sm overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-3 p-4 cursor-pointer list-none font-bold text-sm text-secondary">
                    {faq.q}
                    <span className="shrink-0 text-primary group-open:rotate-45 transition-transform text-lg leading-none">+</span>
                  </summary>
                  <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 문의하기 CTA */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-xl font-bold text-secondary mb-2">먼저 무료로 상담해 보세요</h2>
            <p className="text-sm text-gray-500 mb-6">
              카카오톡 또는 이메일로 상담 가능합니다.<br />
              필요한 서류가 아직 정확하지 않아도 괜찮습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-secondary font-bold py-3.5 px-8 rounded-xl shadow-lg hover:bg-primary-hover transition-all text-sm"
              >
                문의하기
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/ko/pricing/"
                className="inline-flex items-center justify-center gap-2 border border-gray-200 text-secondary font-medium py-3.5 px-8 rounded-xl hover:bg-gray-50 transition-all text-sm"
              >
                요금 보기
              </Link>
            </div>
          </div>
        </section>
      </main>

      <BackToTop />
      <FooterKo />
    </div>
  );
}
