import React, { useEffect, useState } from 'react';
import { Mail } from 'lucide-react';
import { trackEvent } from '../lib/analytics';

const StickyBottomCta: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const contact = document.getElementById('contact');
      if (contact) {
        const rect = contact.getBoundingClientRect();
        // Hide when contact section is close to the viewport
        if (rect.top < window.innerHeight * 1.2) {
          setVisible(false);
          return;
        }
      }
      setVisible(scrollY > 300);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden px-4 pb-4 pt-2 bg-gradient-to-t from-white/95 via-white/80 to-transparent pointer-events-none">
      <a
        href="#contact"
        onClick={() => trackEvent('cta_click', { location: 'sticky_bottom', type: 'contact' })}
        className="pointer-events-auto flex items-center justify-center gap-2 w-full bg-primary text-secondary font-bold py-3.5 rounded-xl shadow-lg shadow-primary/30 hover:bg-primary-hover active:scale-[0.98] transition-all focus:outline-none focus:ring-4 focus:ring-primary/40"
        aria-label="今すぐ無料相談する"
      >
        <Mail className="w-4 h-4 flex-shrink-0" />
        <span className="text-sm">今すぐ無料相談（返信24時間以内）</span>
      </a>
    </div>
  );
};

export default StickyBottomCta;
