import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, BadgeCheck, Car, ShieldCheck, Award, ArrowRight, ChevronDown } from 'lucide-react';

const packs = [
  {
    to: '/ja/kokusai-kekkon-guide/',
    icon: Heart,
    title: '国際結婚',
    desc: 'フィリピン婚・日本婚の手続きに必要な書類と費用の目安を確認できます',
    accentBg: 'bg-rose-50',
    accentBorder: 'border-rose-100',
    iconColor: 'text-rose-500',
  },
  {
    to: '/ja/haigusha-visa/',
    icon: BadgeCheck,
    title: '配偶者ビザ（在留資格）',
    desc: '入管申請に向けて必要なフィリピン書類の一覧と費用の目安を確認できます',
    accentBg: 'bg-blue-50',
    accentBorder: 'border-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    to: '/ja/gaimen-kirikae-guide/',
    icon: Car,
    title: '外免切替（免許の切替）',
    desc: 'フィリピン免許を日本免許に切り替えるためのLTO書類と費用を確認できます',
    accentBg: 'bg-emerald-50',
    accentBorder: 'border-emerald-100',
    iconColor: 'text-emerald-600',
  },
  {
    to: '/ja/nbi-clearance/',
    icon: ShieldCheck,
    title: '海外ビザ用NBIクリアランス',
    desc: '海外ビザ申請に必要な無犯罪証明書の取得サポートと費用を確認できます',
    accentBg: 'bg-amber-50',
    accentBorder: 'border-amber-100',
    iconColor: 'text-amber-600',
  },
  {
    to: '/ja/kikka-shinsei/',
    icon: Award,
    title: '帰化申請書類パック',
    desc: '法務局への帰化申請に必要なフィリピン書類（出生・婚姻・NBI）の取得サポートと費用を確認できます',
    accentBg: 'bg-violet-50',
    accentBorder: 'border-violet-100',
    iconColor: 'text-violet-600',
  },
];

const ServicePacks: React.FC = () => {
  // 単一開閉アコーディオン（最初の1件を初期表示）
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-md md:max-w-2xl mx-auto px-6">
        <div className="text-center mb-8">
          <span className="text-primary-dark font-bold text-xs font-display tracking-widest uppercase mb-2 block">Services</span>
          <h2 className="text-xl font-bold text-secondary mb-2">目的が決まっている方はこちら</h2>
          <p className="text-xs text-gray-500">タイトルをタップすると、必要書類・費用の目安・ご依頼の流れが開きます</p>
          <div className="h-1 w-12 bg-primary mx-auto rounded-full mt-3" />
        </div>

        <div className="space-y-3">
          {packs.map((pack, i) => {
            const open = openIndex === i;
            const panelId = `service-panel-${i}`;
            const btnId = `service-button-${i}`;
            return (
              <div
                key={pack.to}
                className={`rounded-2xl border bg-white shadow-card transition-shadow ${open ? 'shadow-card-hover ' + pack.accentBorder : 'border-gray-100'}`}
              >
                {/* タイトル行（常時表示） */}
                <button
                  type="button"
                  id={btnId}
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="w-full flex items-center gap-3 p-4 text-left"
                >
                  <span className={`w-10 h-10 rounded-xl ${pack.accentBg} border ${pack.accentBorder} flex items-center justify-center flex-shrink-0`}>
                    <pack.icon className={`w-5 h-5 ${pack.iconColor}`} />
                  </span>
                  <span className="flex-1 min-w-0 font-bold text-sm text-secondary leading-snug">
                    {pack.title}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>

                {/* 中身（アコーディオン） */}
                {open && (
                  <div id={panelId} role="region" aria-labelledby={btnId} className="px-4 pb-4 pl-[68px]">
                    <p className="text-xs text-gray-500 leading-relaxed mb-3">{pack.desc}</p>
                    <Link
                      to={pack.to}
                      className="inline-flex items-center gap-1 text-xs font-bold text-primary-dark hover:gap-2 transition-all"
                    >
                      詳しく見る
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default ServicePacks;
