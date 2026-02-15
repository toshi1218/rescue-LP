import React from 'react';
import { MessageCircle, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <header className="relative bg-secondary text-white overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          alt="Tropical palm leaves and blue sky representing Philippines" 
          className="w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo_eTkYWW7XmTdNztc16TOkKCBZEkOAVd4xgCytXb785EnYuOTLT-QLwEXT42Ksr3lKhHAPoYKwgKK98IRdzqV8C3qql-OQDN2XMfgiJ3r9dciGEKFYAW0ZR7kx8nKNKzxtXnh-kNdjMjS4BsXH078WkKAkbHHb9KpzUd8YOz41OrBUl2FWYXxL2VY3TQ0Ex00RGrXKuwP7zf_2TmJEeEV9OjGOxIJJ3xrVt6ldBEG1n2bWXoRYU7fj_Woig3ST1vvgN_CwwqS4ie7"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 via-secondary/80 to-secondary"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-6 py-16 md:py-24 flex flex-col items-center text-center">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold mb-4 tracking-wider border border-primary/30 backdrop-blur-sm">
          日本法人運営
        </span>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4 drop-shadow-sm">
          フィリピンの書類取得、<br />
          <span className="text-primary">日本語だけで完結</span>
        </h1>
        <p className="text-gray-300 mb-8 text-sm md:text-base leading-relaxed max-w-xs md:max-w-md mx-auto">
          セブ島オフィスから国際結婚やビザ申請に必要な公的書類の取得を完全サポート。面倒な手続きはすべてお任せください。
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