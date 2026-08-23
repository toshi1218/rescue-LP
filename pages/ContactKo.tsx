import React, { useState, useRef } from 'react';
import { Send, Mail, Clock, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageLayoutKo from '../components/PageLayoutKo';
import { trackEvent } from '../lib/analytics';
import { notifySlack } from '../lib/notifyApi';
import { isValidEmail } from '../lib/validation';
import WhatsAppIcon from '../components/icons/WhatsAppIcon';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

export default function ContactKo() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailConfirm, setEmailConfirm] = useState('');
  const [confirmError, setConfirmError] = useState('');
  const [referral, setReferral] = useState('');
  const [referralError, setReferralError] = useState('');
  const emailConfirmRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailInput = (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value.trim();
    if (!emailInput) {
      setEmailError('이메일 주소는 필수입니다.');
      return;
    }
    if (!isValidEmail(emailInput)) {
      setEmailError('이메일 주소 형식이 올바르지 않습니다 (예: example@email.com).');
      return;
    }
    setEmailError('');
    if (emailInput !== emailConfirm.trim()) {
      setConfirmError('이메일 주소가 일치하지 않습니다. 다시 확인해 주세요.');
      emailConfirmRef.current?.focus();
      emailConfirmRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    setConfirmError('');
    if (!referral) {
      setReferralError('어디서 알게 되셨는지 선택해 주세요.');
      return;
    }
    setReferralError('');
    setSubmitting(true);
    setSubmitError('');
    try {
      const formData = new FormData(e.currentTarget);
      notifySlack('ko', formData);
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      const data = await res.json();
      if (res.ok && data.success) {
        trackEvent('form_submit_success', { location: 'contact_page_ko', type: 'web3forms' });
        setSubmitted(true);
      } else {
        setSubmitError('전송에 실패했습니다. 잠시 후 다시 시도해 주세요.');
      }
    } catch {
      setSubmitError('전송에 실패했습니다. 잠시 후 다시 시도해 주세요.');
    } finally {
      setSubmitting(false);
    }
  };

  const faqs = [
    {
      q: '서류 이름을 정확히 모르는데 상담할 수 있나요?',
      a: '네, 괜찮습니다. 비자 종류나 목적만 알려주셔도 필요한 서류를 정리해 드립니다.',
    },
    {
      q: '견적은 무료인가요?',
      a: '네. 상담 및 견적은 무료입니다. 착수 전 취소도 무료입니다.',
    },
    {
      q: '답변까지 얼마나 걸리나요?',
      a: '24시간 이내에 답변드립니다（주말・공휴일 포함）。',
    },
  ];

  return (
    <PageLayoutKo
      title="문의하기 | 필리핀 서류 취득 상담"
      description="필리핀 서류 취득 대행에 관한 상담은 이메일로 접수합니다. F-6 비자, NBI Clearance, CENOMAR, 아포스티유 등 서류 이름을 모르셔도 괜찮습니다. 24시간 이내 답변."
      canonical="https://ph-document.com/ko/contact/"
      breadcrumbs={[{ label: '홈', href: '/ko/' }, { label: '문의하기' }]}
    >
      <h1 className="text-2xl md:text-3xl font-bold text-secondary mb-2">문의하기</h1>
      <p className="text-sm text-gray-600 mb-2">
        WhatsApp 또는 이메일로 상담 가능합니다.
      </p>
      <p className="text-xs text-gray-500 mb-6">
        필요한 서류가 아직 정확하지 않아도 괜찮습니다. 현재 상황을 알려주시면 정리해 드립니다.
      </p>

      <a
        href="https://wa.me/639452833727?text=Hello%20IGRS%2C%20I%20would%20like%20a%20free%20document%20consultation."
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent('cta_click', { location: 'contact_top_ko', type: 'whatsapp', page_path: window.location.pathname })}
        className="mb-6 flex max-w-xl items-center justify-center gap-3 rounded-xl bg-[#25D366] px-4 py-4 font-bold text-white shadow-lg transition-all hover:bg-[#20b858]"
      >
        <WhatsAppIcon />
        WhatsApp으로 무료 상담・견적받기（가장 빠름）
      </a>
      <p className="mb-6 -mt-4 text-center text-xs text-gray-500">양식 작성 없이 서류 사진・PDF 또는 필요한 서류와 기한만 보내 주세요.</p>
      <p className="mb-3 text-sm font-bold text-secondary">WhatsApp을 사용할 수 없는 경우 이메일로 문의하세요</p>

      {/* 신뢰 배지 */}
      <div className="flex flex-wrap gap-3 mb-8">
        {[
          { icon: <Clock className="w-3.5 h-3.5 text-primary" />, label: '24시간 이내 답변' },
          { icon: <ShieldCheck className="w-3.5 h-3.5 text-primary" />, label: '착수 전 취소 무료' },
          { icon: <Mail className="w-3.5 h-3.5 text-primary" />, label: 'WhatsApp & 이메일' },
        ].map((badge) => (
          <span key={badge.label} className="inline-flex items-center gap-1.5 text-xs text-gray-600 bg-gray-50 border border-gray-200 rounded-full px-3 py-1">
            {badge.icon}
            {badge.label}
          </span>
        ))}
      </div>

      {/* 상담 전 확인 사항 */}
      <section className="mb-8 rounded-xl border border-gray-100 bg-gray-50 p-5">
        <h2 className="text-sm font-bold text-secondary mb-3">상담 전에 확인해주세요</h2>
        <ul className="space-y-2">
          {[
            '저희는 필리핀 측 서류（CENOMAR, PSA, NBI Clearance, 아포스티유）취득을 대행합니다.',
            'LCCM（혼인요건증명서）은 주한 필리핀 대사관에서 본인이 직접 신청하는 서류입니다. 안내 지원은 가능합니다.',
            '한국 내 비자 신청 절차 그 자체는 취급하지 않습니다（서류 준비만 지원）。',
            '서류 이름이나 필요 수량을 모르셔도 상담 가능합니다.',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* 문의 양식 */}
      {submitted ? (
        <div role="status" aria-live="polite" className="bg-green-50 border border-green-200 rounded-xl p-8 text-center max-w-xl">
          <p className="text-3xl mb-3">✅</p>
          <p className="font-bold text-green-700 mb-2">문의가 접수되었습니다</p>
          <p className="text-sm text-gray-600 mb-4">내용을 확인 후 24시간 이내에 연락드립니다.</p>
          <a
            href="https://wa.me/639452833727?text=Hello%20IGRS%2C%20I%20would%20like%20a%20free%20document%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('cta_click', { location: 'contact_success_ko', type: 'whatsapp', page_path: window.location.pathname })}
            className="mb-4 flex w-full items-center justify-center gap-3 rounded-xl bg-[#25D366] px-4 py-4 font-bold text-white shadow-lg transition-all hover:bg-[#20b858]"
          >
            <WhatsAppIcon />
            WhatsApp에서 빠르게 상담 계속하기
          </a>
          <div className="text-xs text-gray-500 bg-white border border-gray-100 rounded-lg p-3 text-left space-y-1">
            <p>• 답변 메일이 오지 않을 경우 <span className="font-semibold">스팸 메일함</span>도 확인해 주세요.</p>
            <p>• 24시간 이내에 답변이 없으면 직접 이메일로 문의해 주세요:</p>
            <a href="mailto:igrs20200601@gmail.com" className="font-semibold text-primary hover:underline">igrs20200601@gmail.com</a>
          </div>
        </div>
      ) : (
        <form className="space-y-5 max-w-xl" noValidate onSubmit={handleSubmit}>
          <input type="hidden" name="access_key" value="c964e168-b5bd-4aa1-a1a4-fb0a4439bbb0" />
          <input type="hidden" name="subject" value="【한국어 LP 문의】필리핀 서류 취득 대행" />
          <input type="text" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
          <input type="hidden" name="landing_page" value="https://ph-document.com/ko/contact/" />

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              이름 <span className="text-red-500">*</span>
            </label>
            <input
              name="name"
              required
              placeholder="홍길동"
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              이메일 주소 <span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="example@email.com"
              onChange={() => setEmailError('')}
              className={`w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 ${emailError ? 'border-red-400' : 'border-gray-200'}`}
            />
            {emailError && <p className="mt-1 text-xs text-red-500">{emailError}</p>}
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              이메일 주소 (확인용) <span className="text-red-500">*</span>
            </label>
            <input
              ref={emailConfirmRef}
              type="email"
              required
              value={emailConfirm}
              onChange={e => { setEmailConfirm(e.target.value); setConfirmError(''); }}
              placeholder="확인을 위해 다시 입력해 주세요"
              className={`w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 ${confirmError ? 'border-red-400' : 'border-gray-200'}`}
            />
            {confirmError && <p className="mt-1 text-xs text-red-500">{confirmError}</p>}
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              메신저 연락처 <span className="text-xs font-normal text-gray-400">（선택 · 이메일이 도달하지 않을 경우 예비 연락처）</span>
            </label>
            <input
              name="alt_contact"
              type="text"
              placeholder="예: 카카오톡 ID / WhatsApp 번호 / Facebook Messenger 이름 등"
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              어느 나라에 제출하실 예정인가요? <span className="text-red-500">*</span>
            </label>
            <select
              name="submit_country"
              required
              defaultValue=""
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white"
            >
              <option value="" disabled>선택해 주세요</option>
              <option value="한국">한국</option>
              <option value="필리핀">필리핀</option>
              <option value="미국">미국</option>
              <option value="기타">기타</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              어떤 목적으로 필요하신가요? <span className="text-red-500">*</span>
            </label>
            <select
              name="purpose"
              required
              defaultValue=""
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white"
            >
              <option value="" disabled>선택해 주세요</option>
              <option value="F-6 결혼이민비자">F-6 결혼이민비자</option>
              <option value="국제결혼 혼인신고">국제결혼 혼인신고</option>
              <option value="F-5 영주권">F-5 영주권</option>
              <option value="귀화 신청">귀화 신청</option>
              <option value="NBI 단독">NBI Clearance 단독</option>
              <option value="기타">기타</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              어디서 알게 되셨나요? <span className="text-red-500">*</span>
            </label>
            <select
              name="referral_source"
              value={referral}
              onChange={e => { setReferral(e.target.value); setReferralError(''); }}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white"
            >
              <option value="">선택해 주세요</option>
              <option value="Google 검색">Google 검색</option>
              <option value="AI（ChatGPT / Claude / Gemini 등）">AI（ChatGPT / Claude / Gemini 등）</option>
              <option value="SNS（Instagram / X / Facebook）">SNS（Instagram / X / Facebook）</option>
              <option value="Google 광고">Google 광고</option>
              <option value="지인 소개">지인 소개</option>
              <option value="기타">기타</option>
            </select>
            {referral === '기타' && (
              <input
                type="text"
                name="referral_source_detail"
                placeholder="자세히 알려주시면 감사하겠습니다"
                className="mt-2 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                maxLength={100}
              />
            )}
            {referralError && <p className="mt-1 text-xs text-red-500">{referralError}</p>}
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              필요한 서류가 무엇인가요? <span className="text-xs font-normal text-gray-400">（모르셔도 괜찮습니다）</span>
            </label>
            <input
              name="documents_needed"
              placeholder="예: CENOMAR, PSA 출생증명서, NBI Clearance 등"
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              기존에 가지고 있는 서류가 있나요? <span className="text-xs font-normal text-gray-400">（선택）</span>
            </label>
            <input
              name="existing_documents"
              placeholder="예: PSA 출생증명서는 이미 있습니다 등"
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              급한 일정이 있나요? <span className="text-xs font-normal text-gray-400">（선택）</span>
            </label>
            <input
              name="deadline"
              placeholder="예: 3개월 이내, 6월까지 등"
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              문의 내용 <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="현재 상황이나 궁금한 점을 자유롭게 적어주세요. 서류명을 모르셔도 괜찮습니다."
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {submitError && (
            <p role="alert" className="text-xs text-red-500">{submitError}</p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-primary text-secondary font-bold py-4 rounded-xl shadow-lg hover:bg-primary-hover transition-all flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" aria-hidden="true" />
            {submitting ? '전송 중…' : '문의 보내기'}
          </button>
        </form>
      )}

      <a
        href="https://wa.me/639452833727?text=Hello%20IGRS%2C%20I%20would%20like%20a%20free%20document%20consultation."
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent('cta_click', { location: 'contact_bottom_ko', type: 'whatsapp', page_path: window.location.pathname })}
        className="mt-6 flex max-w-xl items-center justify-center gap-3 rounded-xl bg-[#25D366] px-4 py-4 font-bold text-white shadow-lg transition-all hover:bg-[#20b858]"
      >
        <WhatsAppIcon />
        WhatsApp으로 상담하기
      </a>
      <a
        href="mailto:igrs20200601@gmail.com"
        className="mt-6 inline-flex items-center gap-2 text-xs text-gray-500 hover:text-secondary transition-colors"
      >
        <Mail className="w-4 h-4" />
        이메일로 직접 문의하기（igrs20200601@gmail.com）
      </a>

      {/* FAQ */}
      <section className="mt-12">
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

      {/* 관련 페이지 링크 */}
      <nav className="mt-8 flex flex-wrap gap-3" aria-label="관련 페이지">
        <Link to="/ko/pricing/" className="text-xs font-medium text-primary hover:underline">요금 안내</Link>
        <Link to="/ko/f-6-philippines-documents/" className="text-xs font-medium text-primary hover:underline">F-6 비자 서류</Link>
        <Link to="/ko/nbi-clearance/" className="text-xs font-medium text-primary hover:underline">NBI Clearance</Link>
      </nav>
    </PageLayoutKo>
  );
}
