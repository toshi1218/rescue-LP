import React from 'react';
import { CheckCircle } from 'lucide-react';

type SummaryBlockProps = {
  /** 太字で出る結論1行 例：「フィリピンに行かずに、日本語だけで取り寄せできます」 */
  conclusion: string;
  /** 結論を支える箇条書き（3〜4項目） */
  points: string[];
  /** @deprecated 使用されなくなりました */
  ctaText?: string;
  ctaHref?: string;
};

export default function SummaryBlock({ conclusion, points }: SummaryBlockProps) {
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
        <ul className="space-y-3">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-base text-gray-700 leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
