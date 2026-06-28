import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="ページトップへ戻る"
      className="fixed bottom-6 left-6 z-50 w-11 h-11 rounded-full bg-secondary text-white shadow-lg hover:bg-secondary/80 transition-all flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-secondary/40"
    >
      <ChevronUp className="w-5 h-5" aria-hidden="true" />
    </button>
  );
};

export default BackToTop;
