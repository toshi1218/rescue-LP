import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, BadgeCheck, Car } from 'lucide-react';

const routes = [
  {
    to: '/ja/kokusai-kekkon-guide/',
    icon: Heart,
    title: '国際結婚',
    desc: 'フィリピン婚・日本婚の流れと必要書類を確認したい方へ',
  },
  {
    to: '/ja/haigusha-visa/',
    icon: BadgeCheck,
    title: '配偶者ビザ準備',
    desc: '日本で一緒に暮らすためのフィリピン書類を整えたい方へ',
  },
  {
    to: '/ja/gaimen-kirikae-guide/',
    icon: Car,
    title: '外免切替',
    desc: 'フィリピン免許から日本免許への切替書類を進めたい方へ',
  },
];

const RouteCards: React.FC = () => (
  <section className="py-10 bg-white">
    <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {routes.map((r) => (
          <Link
            key={r.to}
            to={r.to}
            className="flex flex-col gap-3 bg-gray-50 rounded-2xl border border-gray-100 px-5 py-6 hover:border-primary/50 hover:shadow-md hover:-translate-y-0.5 transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-secondary/8 border border-secondary/10 flex items-center justify-center">
              <r.icon className="w-5 h-5 text-secondary" />
            </div>
            <span className="text-base font-bold text-secondary">{r.title}</span>
            <p className="text-xs text-gray-500 leading-relaxed">{r.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default RouteCards;
