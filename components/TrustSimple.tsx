import React from 'react';
import { Building2, Users, Bell } from 'lucide-react';

const items = [
  {
    icon: Building2,
    title: '日本法人運営',
    desc: '株式会社IGRSが運営。日本法人として日本語でサポートします。',
  },
  {
    icon: Users,
    title: '現地対応あり',
    desc: 'フィリピン現地のスタッフが直接窓口機関に対応します。',
  },
  {
    icon: Bell,
    title: '進捗報告あり',
    desc: '申請・受理・発送の各ステップで状況をご報告します。',
  },
];

const TrustSimple: React.FC = React.memo(() => (
  <section className="py-12 bg-secondary">
    <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {items.map((item) => (
          <div key={item.title} className="flex flex-col gap-3 text-white">
            <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center">
              <item.icon className="w-5 h-5 text-primary" />
            </div>
            <span className="text-base font-bold">{item.title}</span>
            <p className="text-sm text-white/70 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
));

TrustSimple.displayName = 'TrustSimple';
export default TrustSimple;
