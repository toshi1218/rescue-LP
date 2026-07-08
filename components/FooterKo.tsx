import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, Mail } from 'lucide-react';
import { trackEvent } from '../lib/analytics';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

const FooterKo: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [referral, setReferral] = useState('');
  const [referralError, setReferralError] = useState('');
  const currentYear = new Date().getFullYear();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailInput = (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value.trim();
    if (!emailInput) {
      setEmailError('이메일 주소는 필수입니다.');
      return;
    }
    setEmailError('');
    setReferralError('');
    setSubmitting(true);
    setSubmitError('');
    const purpose = (e.currentTarget.elements.namedItem('purpose') as HTMLSelectElement)?.value ?? '';
    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: { Accept: 'application/json' },
      });
      const data = await res.json();
      if (res.ok && data.success) {
        trackEvent('form_submit_success', { location: 'footer_ko', type: 'web3forms', lang: 'ko', service: purpose, page_path: window.location.pathname });
        setSubmitted(true);
      } else {
        trackEvent('form_submit_error', { location: 'footer_ko', type: 'web3forms', lang: 'ko' });
        setSubmitError('전송에 실패했습니다. 잠시 후 다시 시도해 주세요.');
      }
    } catch {
      trackEvent('form_submit_error', { location: 'footer_ko', type: 'web3forms', lang: 'ko' });
      setSubmitError('전송에 실패했습니다. 잠시 후 다시 시도해 주세요.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <footer className="bg-white border-t border-gray-100" id="contact">
      <div className="py-16 max-w-md md:max-w-xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-secondary mb-2">문의하기</h2>
        <p className="text-sm text-gray-500 mb-2">
          카카오톡 또는 이메일로 상담 가능합니다.
        </p>
        <p className="text-xs text-gray-400 mb-8">
          필요한 서류가 아직 정확하지 않아도 괜찮습니다. 현재 상황을 알려주시면 정리해 드립니다.
        </p>

        {submitted ? (
          <div
            role="status"
            aria-live="polite"
            className="bg-green-50 border border-green-200 rounded-xl p-8 text-center max-w-xl mx-auto"
          >
            <p className="text-3xl mb-3">✅</p>
            <p className="font-bold text-green-700 mb-2">문의가 접수되었습니다</p>
            <p className="text-sm text-gray-600 mb-3">24시간 이내에 이메일로 연락드리겠습니다.</p>
            <div className="text-xs text-gray-500 bg-white border border-gray-100 rounded-lg p-3 text-left space-y-1">
              <p>• 답변 메일이 오지 않을 경우 <span className="font-semibold">스팸 메일함</span>도 확인해 주세요.</p>
              <p>• 24시간 이내에 답변이 없으면 직접 이메일로 문의해 주세요: <a href="mailto:igrs20200601@gmail.com" className="font-semibold text-primary hover:underline">igrs20200601@gmail.com</a></p>
            </div>
          </div>
        ) : (
          <form
            className="space-y-4 text-left max-w-xl mx-auto"
            noValidate
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="access_key" value="c964e168-b5bd-4aa1-a1a4-fb0a4439bbb0" />
            <input type="hidden" name="subject" value="【한국어 LP 문의】필리핀 서류 취득 대행" />
            <input type="text" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
            <input type="hidden" name="landing_page" value="https://ph-document.com/ko/" />

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
                어느 나라에 제출하실 예정인가요? <span className="text-xs font-normal text-gray-400">(선택)</span>
              </label>
              <select
                name="submit_country"
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white"
              >
                <option value="">선택해 주세요</option>
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
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white"
              >
                <option value="">선택해 주세요</option>
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
                어디서 알게 되셨나요? <span className="text-xs font-normal text-gray-400">(선택)</span>
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
                필요한 서류가 무엇인가요? <span className="text-xs font-normal text-gray-400">(모르셔도 괜찮습니다)</span>
              </label>
              <input
                name="documents_needed"
                placeholder="예: CENOMAR, PSA 출생증명서, NBI Clearance 등"
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">
                급한 일정이 있나요? <span className="text-xs font-normal text-gray-400">(선택)</span>
              </label>
              <input
                name="deadline"
                placeholder="예: 3개월 이내, 6월까지 등"
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">
                문의 내용 <span className="text-xs font-normal text-gray-400">(선택)</span>
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="현재 상황이나 궁금한 점을 자유롭게 적어주세요. 서류명을 모르셔도 괜찮습니다."
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {submitError && (
              <p role="alert" className="text-xs text-red-500">
                {submitError}
              </p>
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
          href="mailto:igrs20200601@gmail.com"
          className="mt-6 inline-flex items-center gap-2 text-xs text-gray-500 hover:text-secondary transition-colors"
        >
          <Mail className="w-4 h-4" />
          이메일로 직접 문의하기(igrs20200601@gmail.com)
        </a>
      </div>

      {/* Footer links */}
      <div className="border-t border-gray-100 py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {currentYear} IGRS Inc.</p>
          <nav className="flex flex-wrap gap-4 justify-center" aria-label="하단 메뉴">
            <Link to="/ko/" className="hover:text-secondary transition-colors">홈</Link>
            <Link to="/ko/pricing/" className="hover:text-secondary transition-colors">요금</Link>
            <Link to="/ko/f-6-philippines-documents/" className="hover:text-secondary transition-colors">F-6 비자 서류</Link>
            <Link to="/ko/nbi-clearance/" className="hover:text-secondary transition-colors">NBI Clearance</Link>
            <Link to="/ko/contact/" className="hover:text-secondary transition-colors">문의하기</Link>
            <Link to="/en/privacy/" className="hover:text-secondary transition-colors">Privacy Policy</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default FooterKo;
