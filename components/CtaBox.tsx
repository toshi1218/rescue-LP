import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import WhatsAppIcon from './icons/WhatsAppIcon';

type CtaBoxProps = {
  title: string;
  description: string;
  buttonText: string;
  href: string;
  variant?: 'primary' | 'secondary';
  trustNote?: string;
  service?: string;
  whatsappHref?: string;
};

export default function CtaBox({
  title,
  description,
  buttonText,
  href,
  variant = 'primary',
  trustNote,
  service,
  whatsappHref,
}: CtaBoxProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (service) {
      e.preventDefault();
      window.dispatchEvent(new CustomEvent('setContactService', { detail: service }));
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };
  if (variant === 'secondary') {
    return (
      <section className="relative mb-12 overflow-hidden rounded-2xl bg-secondary px-6 py-8 md:px-8">
        {/* 装飾 */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-2xl" />
          <div className="absolute -bottom-10 left-1/3 h-32 w-32 rounded-full bg-white/5 blur-xl" />
        </div>
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-l-2xl" />

        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div>
            <h2 className="text-lg font-bold text-white mb-1 leading-snug">{title}</h2>
            <p className="text-base text-gray-300 leading-relaxed">{description}</p>
            {trustNote && (
              <p className="mt-2 flex items-center gap-1.5 text-sm text-primary/80">
                <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" />
                {trustNote}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2 flex-shrink-0">
            <a
              href={href}
              onClick={handleClick}
              className="group inline-flex items-center gap-2 bg-primary text-secondary font-bold py-3 px-6 rounded-xl shadow-lg shadow-primary/30 hover:bg-primary-hover whitespace-nowrap transition-all duration-200 hover:gap-3"
            >
              {buttonText}
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            {whatsappHref && (
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white font-bold py-3 px-6 rounded-xl whitespace-nowrap transition-all duration-200"
              >
                <WhatsAppIcon />
                WhatsApp us
              </a>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative mb-12 overflow-hidden rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/5 via-white to-primary/5 px-6 py-8 md:px-8">
      {/* 装飾 */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
      </div>
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-l-2xl" />

      <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div>
          <h2 className="text-lg font-bold text-secondary mb-1 leading-snug">{title}</h2>
          <p className="text-base text-gray-600 leading-relaxed">{description}</p>
          {trustNote && (
            <p className="mt-2 flex items-center gap-1.5 text-sm text-secondary/60">
              <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0 text-primary" />
              {trustNote}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2 flex-shrink-0">
          <a
            href={href}
            onClick={handleClick}
            className="group inline-flex items-center gap-2 bg-secondary text-white font-bold py-3 px-6 rounded-xl shadow-md hover:bg-secondary-light whitespace-nowrap transition-all duration-200 hover:gap-3"
          >
            {buttonText}
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
          {whatsappHref && (
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white font-bold py-3 px-6 rounded-xl whitespace-nowrap transition-all duration-200"
            >
              <WhatsAppIcon />
              WhatsApp us
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
