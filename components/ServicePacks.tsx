import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, BadgeCheck, Car, ShieldCheck, Award } from 'lucide-react';

const packs = [
  {
    to: '/ja/kokusai-kekkon-guide/',
    icon: Heart,
    title: '国際結婚',
    desc: 'フィリピン婚・日本婚の手続きに必要な書類と費用の目安を確認できます',
  },
  {
    to: '/ja/haigusha-visa/',
    icon: BadgeCheck,
    title: '配偶者ビザ（在留資格）',
    desc: '入管申請に向けて必要なフィリピン書類の一覧と費用の目安を確認できます',
  },
  {
    to: '/ja/gaimen-kirikae-guide/',
    icon: Car,
    title: '外免切替（免許の切替）',
    desc: 'フィリピン免許を日本免許に切り替えるためのLTO書類と費用を確認できます',
  },
  {
    to: '/ja/nbi-clearance/',
    icon: ShieldCheck,
    title: '海外ビザ用NBIクリアランス',
    desc: '海外ビザ申請に必要な無犯罪証明書の取得サポートと費用を確認できます',
  },
  {
    to: '/ja/kikka-shinsei/',
    icon: Award,
    title: '帰化申請書類パック',
    desc: '法務局への帰化申請に必要なフィリピン書類（出生・婚姻・NBI）の取得サポートと費用を確認できます',
  },
];

const ServicePacks: React.FC = React.memo(() => (
  <section className="py-12 bg-white">
    <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-6">
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold text-secondary mb-2">まず、お手続きの目的をお選びください</h2>
        <p className="text-sm text-gray-500">選んだページで必要書類・費用の目安・ご依頼の流れをご確認いただけます</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {packs.map((pack) => (
          <Link
            key={pack.to}
            to={pack.to}
            className="group flex flex-col gap-3 p-5 border border-gray-100 rounded-2xl bg-gray-50 hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5 transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-secondary/8 border border-secondary/10 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/20 transition-colors">
              <pack.icon className="w-5 h-5 text-secondary group-hover:text-primary transition-colors" />
            </div>
            <span className="font-bold text-sm text-secondary group-hover:text-primary transition-colors leading-snug">{pack.title}</span>
            <p className="text-xs text-gray-500 leading-relaxed">{pack.desc}</p>
            <span className="text-xs font-bold text-primary-dark mt-auto">詳しく見る →</span>
          </Link>
        ))}
      </div>
    </div>
  </section>
));

export default ServicePacks;
