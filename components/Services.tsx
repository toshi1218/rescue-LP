import React from 'react';
import { Baby, Heart, UserX, Fingerprint, BadgeCheck, Languages } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    { icon: Baby, title: 'PSA Birth', subtitle: '出生証明書' },
    { icon: Heart, title: 'PSA Marriage', subtitle: '結婚証明書' },
    { icon: UserX, title: 'CENOMAR', subtitle: '独身証明書' },
    { icon: Fingerprint, title: 'NBI Clearance', subtitle: '無犯罪証明書' },
    { icon: BadgeCheck, title: 'DFA Apostille', subtitle: 'アポスティーユ認証' },
    { icon: Languages, title: 'Translation', subtitle: '日本語翻訳' },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-primary font-bold text-xs font-display tracking-widest uppercase mb-1 block">Services</span>
          <h2 className="text-xl font-bold text-secondary">対応可能な書類・サービス</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {services.map((service, index) => (
            <div key={index} className="group p-4 border border-gray-100 rounded-lg bg-gray-50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-200">
              <div className="flex items-center gap-2 mb-2">
                <service.icon className="w-5 h-5 text-primary" />
                <span className="font-display font-bold text-sm text-secondary">{service.title}</span>
              </div>
              <p className="text-xs text-gray-600">{service.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;