import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, BadgeCheck, Car } from 'lucide-react';

const packs = [
  {
    to: '/ja/kokusai-kekkon-guide/',
    icon: Heart,
    title: '国際結婚準備パック',
    desc: 'フィリピンでの婚姻や日本側への反映に向けて、必要になりやすい書類をまとめて確認したい方へ',
  },
  {
    to: '/ja/haigusha-visa/',
    icon: BadgeCheck,
    title: '配偶者ビザ準備書類パック',
    desc: '日本で一緒に暮らすための準備として、必要になりやすいフィリピン書類を整理したい方へ',
  },
  {
    to: '/ja/gaimen-kirikae-guide/',
    icon: Car,
    title: '外免切替サポート',
    desc: 'LTO書類を日本語で整理して進めたい方へ',
  },
];

const ServicePacks: React.FC = () => (
  <section className="py-12 bg-white">
    <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-6">
      <div className="text-center mb-8">
        <span className="text-primary font-bold text-xs tracking-widest uppercase block mb-1">SERVICES</span>
        <h2 className="text-xl font-bold text-secondary">用途別パック</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {packs.map((pack) => (
          <Link
            key={pack.to}
            to={pack.to}
            className="group flex flex-col gap-3 p-5 border border-gray-100 rounded-2xl bg-gray-50 hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5 transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-secondary/8 border border-secondary/10 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/20 transition-colors">
              <pack.icon className="w-5 h-5 text-secondary group-hover:text-primary transition-colors" />
            </div>
            <span className="font-bold text-sm text-secondary group-hover:text-primary transition-colors">{pack.title}</span>
            <p className="text-xs text-gray-500 leading-relaxed">{pack.desc}</p>
            <span className="text-xs font-bold text-primary mt-1">詳しく見る →</span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default ServicePacks;
