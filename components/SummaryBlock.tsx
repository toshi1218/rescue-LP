import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

type SummaryBlockProps = {
  /** 太字で出る結論1行 例：「フィリピンに行かずに、日本語だけで取り寄せできます」 */
  conclusion: string;
  /** 結論を支える箇条書き（3〜4項目） */
  points: string[];
  /** CTAボタンのテキスト */
  ctaText: string;
  ctaHref?: string;
};

export default function SummaryBlock({ conclusion, points, ctaText, ctaHref = '#contact' }: SummaryBlockProps) {
  return (
    <section className="mb-10 rounded-2xl overflow-hidden border border-primary/20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
      {/* ゴールドの上ライン */}
      <div className="h-1 w-full bg-gradient-to-r from-primary via-primary/70 to-transparent" />

      <div className="p-6 md:p-8">
        {/* 結論 */}
        <p className="text-lg md:text-xl font-bold text-secondary leading-snug mb-5">
          {conclusion}
        </p>

        {/* 根拠リスト */}
        <ul className="space-y-2.5 mb-6">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700 leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={ctaHref}
          className="group inline-flex items-center gap-2 bg-primary text-white font-bold py-3 px-6 rounded-xl shadow-md shadow-primary/20 hover:bg-primary-hover transition-all duration-200 hover:gap-3"
        >
          {ctaText}
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>
  );
}
