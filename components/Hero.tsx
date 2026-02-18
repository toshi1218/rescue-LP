import React from 'react';
import { MessageCircle, ArrowDown } from 'lucide-react';
import { getCtaVariant, trackEvent } from '../lib/analytics';

const Hero: React.FC = () => {
  const ctaVariant = getCtaVariant();
  const primaryLabel = ctaVariant === 'A' ? '無料相談する' : '30秒で無料相談';

  return (
    <header className="relative bg-secondary text-white overflow-hidden min-h-[520px] md:min-h-[600px]">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          alt="フィリピン書類取得代行センターの背景イメージ（日本・フィリピン国旗と書類）"
          className="w-full h-full object-cover"
          style={{ objectPosition: '80% 50%' }}
          src="/hero-photo.png"
          width={1600}
          height={900}
          loading="eager"
          decoding="async"
        />
        {/* 上部を暗くしてテキストを読みやすく、下部は写真を見せるグラデーション */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-6 py-16 md:py-24 flex flex-col items-center text-center">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold mb-4 tracking-wider border border-primary/30 backdrop-blur-sm">
          日本法人運営
        </span>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4 drop-shadow-sm">
          セノマー 出生証明書<br />
          アポスティーユ 取得代行<br />
          <span className="text-primary">日本語だけで完結</span>
        </h1>
        <p className="text-gray-200 mb-3 text-sm md:text-base leading-relaxed max-w-xs md:max-w-md mx-auto drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
          フィリピンの独身証明書（CENOMAR／セノマー）・出生証明書・NBI無犯罪証明書・DFAアポスティーユ認証の取得を完全代行。国際結婚・配偶者ビザ申請に必要な書類を日本法人が日本語でサポートします。
        </p>
        <p className="text-primary/90 text-xs mb-8 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
          ※ LTO運転免許関連書類・NBI・CENOMAR PSA など、記載以外の書類もお気軽にご相談ください。
        </p>

        {/* Desktop/Tablet Buttons (Hidden on mobile usually handled by sticky nav, but good to have here too) */}
        <div className="flex flex-col w-full gap-3 sm:flex-row sm:justify-center sm:w-auto">
          <a
            href="#contact"
            onClick={() => trackEvent('cta_click', { location: 'hero', type: 'contact', variant: ctaVariant })}
            className="w-full sm:w-auto bg-primary text-white font-bold py-3.5 px-8 rounded-lg shadow-lg shadow-primary/30 hover:bg-primary-hover hover:scale-[1.02] transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-primary/40"
            aria-label="無料相談フォームへ移動"
          >
            <MessageCircle className="w-5 h-5" />
            {primaryLabel}
          </a>
          <a
            href="#pricing"
            onClick={() => trackEvent('cta_click', { location: 'hero', type: 'pricing', variant: ctaVariant })}
            className="w-full sm:w-auto bg-transparent border border-white/30 text-white font-bold py-3.5 px-8 rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-white/30"
            aria-label="料金プランへ移動"
          >
            料金を見る
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
