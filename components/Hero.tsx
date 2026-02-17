import React from 'react';
import { MessageCircle, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <header className="relative bg-secondary text-white overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Philippine government documents and official papers"
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1554224311-beee4cae80a5?q=80&w=2000&auto=format&fit=crop"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/95 via-secondary/90 to-secondary/95"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-6 py-16 md:py-24 flex flex-col items-center text-center">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold mb-4 tracking-wider border border-primary/30 backdrop-blur-sm">
          セブ島現地法人・日本法人運営
        </span>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4 drop-shadow-sm">
          CENOMAR・PSA・NBI取得代行<br />
          <span className="text-primary">日本語だけで完結</span>
        </h1>
        <p className="text-gray-300 mb-3 text-sm md:text-base leading-relaxed max-w-xs md:max-w-md mx-auto">
          フィリピンの独身証明書（CENOMAR／セノマール）・出生証明書・NBI無犯罪証明書・DFAアポスティーユ認証の取得を完全代行。国際結婚・配偶者ビザ申請に必要な書類をセブ島現地法人が日本語でサポートします。
        </p>
        <p className="text-primary/80 text-xs mb-8">
          ※ LTO運転免許関連書類・NBI・CENOMAR PSA など、記載以外の書類もお気軽にご相談ください。
        </p>

        {/* Desktop/Tablet Buttons (Hidden on mobile usually handled by sticky nav, but good to have here too) */}
        <div className="flex flex-col w-full gap-3 sm:flex-row sm:justify-center sm:w-auto">
          <a href="#contact" className="w-full sm:w-auto bg-primary text-white font-bold py-3.5 px-8 rounded-lg shadow-lg shadow-primary/30 hover:bg-primary-hover hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
            <MessageCircle className="w-5 h-5" />
            無料相談する
          </a>
          <a href="#pricing" className="w-full sm:w-auto bg-transparent border border-white/30 text-white font-bold py-3.5 px-8 rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
            料金を見る
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;