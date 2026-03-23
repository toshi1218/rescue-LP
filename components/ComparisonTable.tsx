import React from 'react';
import { CheckCircle, XCircle, Minus } from 'lucide-react';

type ComparisonRow = {
  item: string;
  self: boolean | string;
  agency: boolean | string;
};

type ComparisonTableProps = {
  heading?: string;
  rows: ComparisonRow[];
  selfLabel?: string;
  agencyLabel?: string;
};

function Cell({ val, isAgency }: { val: boolean | string; isAgency: boolean }) {
  if (typeof val === 'boolean') {
    if (val) {
      return (
        <span className={`flex items-center justify-center gap-1.5 font-medium text-xs ${isAgency ? 'text-emerald-600' : 'text-gray-400'}`}>
          <CheckCircle className="w-4 h-4 flex-shrink-0" />
          {isAgency ? '対応' : '可能'}
        </span>
      );
    }
    return (
      <span className="flex items-center justify-center gap-1.5 text-xs text-red-400 font-medium">
        <XCircle className="w-4 h-4 flex-shrink-0" />
        要本人対応
      </span>
    );
  }
  if (val === '—' || val === '-') {
    return (
      <span className="flex items-center justify-center text-gray-300">
        <Minus className="w-4 h-4" />
      </span>
    );
  }
  return <span className="text-xs text-gray-700 leading-snug">{val}</span>;
}

export default function ComparisonTable({
  heading,
  rows,
  selfLabel = '自分で手配',
  agencyLabel = 'IGRS代行',
}: ComparisonTableProps) {
  return (
    <section className="mb-10">
      {heading && (
        <div className="flex items-center gap-3 mb-4">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary tracking-tight">{heading}</h2>
        </div>
      )}
      <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-card" role="table" aria-label={heading ?? '比較表'}>
        {/* ヘッダー */}
        <div className="grid grid-cols-[1fr_1fr_1fr] bg-secondary" role="row">
          <div className="px-4 py-3 text-sm font-bold text-white border-r border-white/10" role="columnheader" scope="col">比較項目</div>
          <div className="px-4 py-3 text-sm font-medium text-white/60 text-center border-r border-white/10" role="columnheader" scope="col">{selfLabel}</div>
          <div className="px-4 py-3 text-sm font-bold text-primary text-center" role="columnheader" scope="col">{agencyLabel}</div>
        </div>
        {/* 行 */}
        {rows.map((row, i) => (
          <div
            key={row.item}
            role="row"
            className={`grid grid-cols-[1fr_1fr_1fr] border-b border-gray-100 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'}`}
          >
            <div className="px-4 py-3 text-xs font-medium text-gray-700 border-r border-gray-100 flex items-center leading-snug" role="rowheader" scope="row">
              {row.item}
            </div>
            <div className="px-4 py-3 flex items-center justify-center border-r border-gray-100" role="cell">
              <Cell val={row.self} isAgency={false} />
            </div>
            <div className="px-4 py-3 flex items-center justify-center bg-primary/[0.04]" role="cell">
              <Cell val={row.agency} isAgency={true} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
