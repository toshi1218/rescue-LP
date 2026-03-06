import React from 'react';

type CtaBoxProps = {
  title: string;
  description: string;
  buttonText: string;
  href: string;
  variant?: 'primary' | 'secondary';
};

export default function CtaBox({
  title,
  description,
  buttonText,
  href,
  variant = 'primary',
}: CtaBoxProps) {
  const rootClass =
    variant === 'secondary'
      ? 'bg-secondary text-white border border-secondary'
      : 'bg-primary/5 text-gray-800 border border-primary/20';

  const buttonClass =
    variant === 'secondary'
      ? 'bg-primary text-white hover:bg-primary-hover'
      : 'bg-secondary text-white hover:bg-secondary-light';

  return (
    <section className={`rounded-2xl p-6 md:p-7 mb-10 ${rootClass}`}>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className={`text-sm mb-5 ${variant === 'secondary' ? 'text-gray-100' : 'text-gray-600'}`}>
        {description}
      </p>
      <a href={href} className={`inline-block font-bold py-3 px-6 rounded-lg transition-colors ${buttonClass}`}>
        {buttonText}
      </a>
    </section>
  );
}
