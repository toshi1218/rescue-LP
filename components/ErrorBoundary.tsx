import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';

type SupportedLang = 'ja' | 'en' | 'ko';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

function detectLang(): SupportedLang {
  if (typeof window === 'undefined') return 'ja';
  const { pathname } = window.location;
  if (pathname.startsWith('/en')) return 'en';
  if (pathname.startsWith('/ko')) return 'ko';
  return 'ja';
}

const copy: Record<SupportedLang, { heading: string; reload: string; home: string; homeHref: string }> = {
  ja: {
    heading: 'エラーが発生しました',
    reload: 'ページを再読み込み',
    home: 'ホームへ戻る',
    homeHref: '/',
  },
  en: {
    heading: 'Something went wrong',
    reload: 'Reload page',
    home: 'Back to Home',
    homeHref: '/en/',
  },
  ko: {
    heading: '오류가 발생했습니다',
    reload: '페이지 새로고침',
    home: '홈으로 돌아가기',
    homeHref: '/ko/',
  },
};

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error('[ErrorBoundary] Uncaught error:', error, info.componentStack);
  }

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    const lang = detectLang();
    const { heading, reload, home, homeHref } = copy[lang];

    return (
      <div className="min-h-screen bg-background-light flex items-center justify-center px-4">
        <div className="max-w-sm w-full bg-white rounded-2xl shadow-soft border border-gray-100 p-8 text-center">
          {/* Error icon */}
          <div className="flex justify-center mb-5">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <AlertTriangle className="w-7 h-7 text-primary" strokeWidth={2} />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-lg font-bold text-secondary mb-6">
            {heading}
          </h1>

          {/* Actions */}
          <div className="flex flex-col gap-3">
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="inline-flex items-center justify-center bg-primary text-secondary font-bold py-3 px-6 rounded-lg shadow hover:bg-primary-hover transition-all focus:outline-none focus:ring-4 focus:ring-primary/40 text-sm"
            >
              {reload}
            </button>

            <a
              href={homeHref}
              className="inline-flex items-center justify-center border border-secondary/20 text-secondary font-semibold py-3 px-6 rounded-lg hover:bg-secondary/5 transition-all focus:outline-none focus:ring-4 focus:ring-secondary/20 text-sm"
            >
              {home}
            </a>
          </div>
        </div>
      </div>
    );
  }
}
