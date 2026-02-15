import React from 'react';
import { MessageCircle } from 'lucide-react';

const MobileStickyCTA: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-3 pb-6 md:hidden z-40 shadow-[0_-5px_15px_rgba(0,0,0,0.05)]">
      <a href="#contact" className="flex items-center justify-center w-full bg-primary text-white font-bold py-3.5 rounded-lg shadow-lg hover:bg-primary-hover transition-colors gap-2">
        <MessageCircle className="w-5 h-5" />
        無料で相談する
      </a>
    </div>
  );
};

export default MobileStickyCTA;