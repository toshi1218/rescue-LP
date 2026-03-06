import React from 'react';
import { Send } from 'lucide-react';

interface Props {
  title: string;
  description?: string;
  buttonText: string;
  href?: string;
  variant?: 'primary' | 'secondary';
}

export default function CtaBox({ title, description, buttonText, href = '#contact', variant = 'primary' }: Props) {
  const bg = variant === 'primary'
    ? 'bg-gradient-to-r from-secondary to-secondary-light text-white'
    : 'bg-primary/5 border border-primary/20 text-secondary';
  return (
    <div className={`rounded-xl p-6 text-center my-8 ${bg}`}>
      <p className="font-bold text-lg mb-2">{title}</p>
      {description && <p className="text-sm opacity-90 mb-4">{description}</p>}
      <a
        href={href}
        className="inline-flex items-center gap-2 bg-primary text-white font-bold py-3 px-8 rounded-xl hover:bg-primary-hover transition-all"
      >
        <Send className="w-4 h-4" />
        {buttonText}
      </a>
    </div>
  );
}
