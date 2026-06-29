import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, BadgeCheck, Car, ShieldCheck, Award, ArrowRight } from 'lucide-react';

const packs = [
  {
    to: '/ja/kokusai-kekkon-guide/',
    icon: Heart,
    title: '国際結婚',
    desc: 'フィリピン婚・日本婚の手続きに必要な書類と費用の目安を確認できます',
    accentBg: 'bg-rose-50',
    accentBorder: 'border-rose-100',
    iconColor: 'text-rose-500',
    numColor: 'text-rose-400',
  },
  {
    to: '/ja/haigusha-visa/',
    icon: BadgeCheck,
    title: '配偶者ビザ（在留資格）',
    desc: '入管申請に向けて必要なフィリピン書類の一覧と費用の目安を確認できます',
    accentBg: 'bg-blue-50',
    accentBorder: 'border-blue-100',
    iconColor: 'text-blue-600',
    numColor: 'text-blue-400',
  },
  {
    to: '/ja/gaimen-kirikae-guide/',
    icon: Car,
    title: '外免切替（免許の切替）',
    desc: 'フィリピン免許を日本免許に切り替えるためのLTO書類と費用を確認できます',
    accentBg: 'bg-emerald-50',
    accentBorder: 'border-emerald-100',
    iconColor: 'text-emerald-600',
    numColor: 'text-emerald-400',
  },
  {
    to: '/ja/nbi-clearance/',
    icon: ShieldCheck,
    title: '海外ビザ用NBIクリアランス',
    desc: '海外ビザ申請に必要な無犯罪証明書の取得サポートと費用を確認できます',
    accentBg: 'bg-amber-50',
    accentBorder: 'border-amber-100',
    iconColor: 'text-amber-600',
    numColor: 'text-amber-400',
  },
  {
    to: '/ja/kikka-shinsei/',
    icon: Award,
    title: '帰化申請書類パック',
    desc: '法務局への帰化申請に必要なフィリピン書類（出生・婚姻・NBI）の取得サポートと費用を確認できます',
    accentBg: 'bg-violet-50',
    accentBorder: 'border-violet-100',
    iconColor: 'text-violet-600',
    numColor: 'text-violet-400',
  },
];

const ServicePacks: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-6">
        <div className="text-center mb-8">
          <span className="text-primary-dark font-bold text-xs font-display tracking-widest uppercase mb-2 block">Services</span>
          <h2 className="text-xl font-bold text-secondary mb-2">目的が決まっている方はこちら</h2>
          <p className="text-xs text-gray-500">必要書類・費用の目安・ご依頼の流れを目的別にまとめています</p>
          <div className="h-1 w-12 bg-primary mx-auto rounded-full mt-3" />
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {packs.map((pack, i) => (
            <Link
              key={pack.to}
              to={pack.to}
              className={`group relative w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)] bg-white border ${pack.accentBorder} rounded-2xl p-5 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all overflow-hidden`}
            >
              {/* Number badge */}
              <span className={`absolute top-4 right-4 font-bold text-2xl leading-none ${pack.numColor} opacity-20 font-display select-none`}>
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Icon */}
              <div className={`w-11 h-11 rounded-xl ${pack.accentBg} border ${pack.accentBorder} flex items-center justify-center mb-3`}>
                <pack.icon className={`w-5 h-5 ${pack.iconColor}`} />
              </div>

              {/* Title */}
              <p className="font-bold text-sm text-secondary leading-snug mb-1.5 group-hover:text-primary transition-colors pr-6">
                {pack.title}
              </p>

              {/* Desc */}
              <p className="text-xs text-gray-500 leading-relaxed mb-4">{pack.desc}</p>

              {/* CTA row */}
              <span className="inline-flex items-center gap-1 text-xs font-bold text-primary-dark group-hover:gap-2 transition-all">
                詳しく見る
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServicePacks;
