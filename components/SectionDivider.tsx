import React from 'react';

type SectionDividerProps = {
  /** 背景バリアント */
  variant?: 'beige' | 'navy' | 'blue' | 'white';
  children: React.ReactNode;
  className?: string;
};

const bgMap = {
  white: 'bg-white border border-gray-100',
  beige: 'bg-[linear-gradient(135deg,#fffbf0_0%,#fef9ec_50%,#fff8e6_100%)] border border-primary/10',
  navy: 'bg-secondary',
  blue: 'bg-gradient-to-br from-blue-50 via-indigo-50/40 to-sky-50/30 border border-blue-100',
};

const decorMap = {
  white: ['bg-primary/5', 'bg-secondary/5'],
  beige: ['bg-primary/15', 'bg-primary/8'],
  navy: ['bg-white/5', 'bg-primary/10'],
  blue: ['bg-blue-200/25', 'bg-indigo-200/20'],
};

export default function SectionDivider({ variant = 'white', children, className = '' }: SectionDividerProps) {
  const [c1, c2] = decorMap[variant];
  return (
    <section className={`relative overflow-hidden rounded-2xl mb-8 px-6 py-8 md:px-8 md:py-10 shadow-card ${bgMap[variant]} ${className}`}>
      {/* 装飾ブラーサークル */}
      <div className="pointer-events-none absolute inset-0">
        <div className={`absolute -right-16 -top-16 h-56 w-56 rounded-full ${c1} blur-[60px]`} />
        <div className={`absolute -left-10 -bottom-10 h-40 w-40 rounded-full ${c2} blur-[50px]`} />
      </div>
      <div className="relative">{children}</div>
    </section>
  );
}
