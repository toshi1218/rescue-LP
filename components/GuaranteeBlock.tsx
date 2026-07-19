import React from 'react';
import { ShieldCheck, Check } from 'lucide-react';

type GuaranteeItem = {
  label: string;
  detail: string;
};

type GuaranteeBlockProps = {
  /** 小さなバッジ文言（例：安心サポート / Peace-of-mind support） */
  badge: string;
  /** 見出し（利益を平易に言い切る1行） */
  title: string;
  /** 導入文 */
  lead: string;
  /** 箇条書き（2〜3項目・label＋detail） */
  items: GuaranteeItem[];
  /** 免責の注記（受理保証ではない旨・対象外事項） */
  note: string;
};

export default function GuaranteeBlock({ badge, title, lead, items, note }: GuaranteeBlockProps) {
  return (
    <section className="mb-10 rounded-2xl overflow-hidden border border-primary/25 bg-gradient-to-br from-primary/5 via-white to-secondary/5 shadow-sm">
      {/* ゴールドの上ライン */}
      <div className="h-1 w-full bg-gradient-to-r from-primary via-primary/70 to-transparent" />

      <div className="p-6 md:p-8">
        {/* ヘッダー */}
        <div className="flex items-start gap-4 mb-4">
          <div className="w-11 h-11 rounded-xl bg-primary/15 text-primary flex items-center justify-center flex-shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <span className="inline-flex items-center gap-1 text-xs font-bold bg-primary/15 text-primary-dark px-2.5 py-0.5 rounded-full mb-2">
              {badge}
            </span>
            <h2 className="text-lg md:text-xl font-bold text-secondary leading-snug">{title}</h2>
          </div>
        </div>

        {/* 導入文 */}
        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-5">{lead}</p>

        {/* 箇条書き */}
        <ul className="space-y-3 mb-5">
          {items.map((item) => (
            <li key={item.label} className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-primary/15 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3 h-3" />
              </span>
              <div>
                <p className="text-sm font-bold text-secondary mb-0.5">{item.label}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* 注記 */}
        <div className="rounded-lg border border-gray-100 bg-white/70 px-4 py-3">
          <p className="text-xs text-gray-500 leading-relaxed">{note}</p>
        </div>
      </div>
    </section>
  );
}
