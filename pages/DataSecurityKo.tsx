import React from 'react';
import { ShieldCheck, Lock, CreditCard, Trash2, CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageLayoutKo from '../components/PageLayoutKo';

export default function DataSecurityKo() {
  const promises = [
    {
      icon: <Lock className="w-6 h-6 text-primary" />,
      title: '기밀 서류는 채팅·이메일 첨부로 받지 않습니다',
      desc: '여권이나 증명서 이미지는 카카오톡·WhatsApp·Facebook 메신저 등 SNS 채팅이나 이메일 첨부로 받지 않고, 고객 전용 보안 환경을 통해 주고받습니다.',
    },
    {
      icon: <CreditCard className="w-6 h-6 text-primary" />,
      title: '카드 정보는 당사에 전달되지 않습니다',
      desc: '결제는 국제 결제 플랫폼 Stripe의 암호화된 결제 페이지에서 직접 입력하십니다. 카드 번호를 채팅이나 이메일로 보내실 필요가 전혀 없습니다.',
    },
    {
      icon: <Trash2 className="w-6 h-6 text-primary" />,
      title: '업무 완료 후 3개월 이내에 데이터를 삭제합니다',
      desc: '서류의 전자 데이터는 업무 완료 후 3개월 이내에 삭제하며, 종이 서류와 사본은 파쇄기로 물리적으로 폐기합니다.',
    },
  ];

  const snsRisks = [
    {
      title: '채팅 기록에 이미지가 계속 남습니다',
      desc: '한 번 보낸 이미지는 양쪽 채팅 기록에 계속 남습니다. 스마트폰 분실이나 계정 해킹이 발생하면 그대로 제3자의 손에 넘어갑니다.',
    },
    {
      title: '오발송·전달이 너무 쉽게 일어납니다',
      desc: 'SNS 채팅은 편리한 만큼, 잘못된 수신자에게 보내거나 제3자에게 전달하는 일이 한 번의 터치로 일어날 수 있습니다.',
    },
    {
      title: '이메일 첨부도 안전하지 않습니다',
      desc: '이메일은 여러 서버를 거쳐 전달되며, 잘못 보낸 메일은 취소할 수 없습니다. 서류 이미지의 사본이 어디에 남는지 통제할 수 없습니다.',
    },
  ];

  return (
    <PageLayoutKo
      title="개인정보·기밀 서류 보안 정책 | 필리핀 서류 취득 대행"
      description="여권·PSA 출생증명서·CENOMAR 등 기밀 서류 이미지를 SNS 채팅이나 이메일 첨부로 주고받지 않는 이유와, 전용 보안 환경·Stripe 결제·업무 완료 후 3개월 이내 데이터 삭제 등 당사의 보안 정책을 안내합니다."
      breadcrumbs={[{ label: '홈', href: '/ko/' }, { label: '개인정보·기밀 서류 보안 정책' }]}
    >
      <h1 className="text-2xl md:text-3xl font-bold text-secondary leading-snug mb-3">
        개인정보·기밀 서류 보안 정책
      </h1>
      <p className="text-sm text-gray-600 leading-relaxed mb-10">
        여권이나 증명서 이미지를 SNS 채팅·이메일 첨부로 주고받지 않는 것.
        이것이 당사 보안 정책의 기본 원칙입니다. 서류 대행 서비스는 여권, 출생증명서 등
        인생에서 가장 중요한 개인정보를 다루기 때문입니다.
      </p>

      <div className="space-y-12">

        {/* 3가지 약속 */}
        <section>
          <h2 className="text-xl font-bold text-secondary mb-4">당사의 3가지 약속</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {promises.map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
                <div className="mb-3">{item.icon}</div>
                <h3 className="font-bold text-sm text-secondary mb-2">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 왜 SNS·이메일 첨부를 사용하지 않는가 */}
        <section>
          <h2 className="text-xl font-bold text-secondary mb-3">왜 SNS 채팅·이메일 첨부를 사용하지 않는가</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            채팅 앱은 '연락'에는 편리한 도구이며, 상담이나 문의는 카카오톡·이메일로 하실 수 있습니다.
            하지만 신분 증명 서류를 '주고받고 보관'하는 데에는 다음과 같은 위험이 있다고 생각합니다.
          </p>
          <div className="space-y-3">
            {snsRisks.map((risk) => (
              <div key={risk.title} className="flex gap-3 p-4 rounded-xl border border-gray-100 bg-white shadow-sm">
                <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-sm text-gray-800 mb-1">{risk.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{risk.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 대신 어떻게 주고받는가 */}
        <section>
          <h2 className="text-xl font-bold text-secondary mb-3">대신 어떻게 주고받는가</h2>
          <div className="bg-secondary/[0.04] border border-secondary/10 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-bold text-secondary text-sm mb-2">고객 전용 보안 환경을 안내해 드립니다</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    의뢰 확정 후, 서류 이미지 전용 업로드 링크를 안내해 드립니다
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    통신은 암호화(TLS)되며, 접근 권한이 제한된 당사 관리 데이터베이스에 보관됩니다
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    SNS 채팅 기록이나 이메일함에 기밀 서류 이미지가 남지 않습니다
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    진행 상황도 같은 환경에서 확인하실 수 있어, 지금 어느 단계인지 항상 알 수 있습니다
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 데이터 보관과 삭제 */}
        <section>
          <h2 className="text-xl font-bold text-secondary mb-3">데이터 보관 기간과 삭제</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              서류의 전자 데이터는 업무 완료(서류 수령 확인) 후 3개월 이내에 삭제합니다
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              종이 서류와 사본은 파쇄기로 물리적으로 폐기합니다
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              법령상 보존 의무가 있는 거래 기록(회계장부 등)은 법정 기간만 보존하며, 서류 이미지 자체는 포함되지 않습니다
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              고객의 삭제 요청에는 업무에 지장이 없는 범위에서 언제든지 대응합니다
            </li>
          </ul>
        </section>

        {/* 고객께 드리는 부탁 */}
        <section>
          <h2 className="text-xl font-bold text-secondary mb-3">고객께 드리는 부탁</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
            <ul className="space-y-2 text-sm text-amber-900">
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                채팅이나 이메일에 여권 등 서류 이미지를 첨부하지 말아 주세요. 의뢰 확정 후 전용 업로드 링크를 안내해 드립니다.
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                실수로 채팅·이메일로 서류 이미지를 보내신 경우, 내용 확인 후 당사 측 데이터를 삭제하고 보안 환경을 다시 안내해 드립니다.
              </li>
            </ul>
          </div>
        </section>

        {/* 관련 페이지 */}
        <section>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/ko/pricing/"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary transition-colors"
            >
              요금 안내 보기
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/ko/contact/"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary transition-colors"
            >
              문의하기
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </div>
    </PageLayoutKo>
  );
}
