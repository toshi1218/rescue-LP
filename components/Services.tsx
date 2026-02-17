import React from 'react';
import { Baby, Heart, UserX, Fingerprint, BadgeCheck, Languages, Car } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    { icon: UserX, title: 'CENOMAR', subtitle: '独身証明書（セノマー）', desc: '国際結婚・配偶者ビザに必須のCENOMAR PSA取得代行', badge: '人気No.1' },
    { icon: Baby, title: 'PSA Birth', subtitle: '出生証明書', desc: 'PSA出生証明書の取得代行。DFAアポスティーユ認証も対応', badge: null },
    { icon: Heart, title: 'PSA Marriage', subtitle: '結婚証明書', desc: 'PSA結婚証明書の取得代行。アポスティーユ込みも可', badge: null },
    { icon: Fingerprint, title: 'NBI Clearance', subtitle: '無犯罪証明書', desc: 'NBIクリアランス（フィリピン無犯罪証明書）取得サポート', badge: null },
    { icon: Car, title: 'LTO Documents', subtitle: '運転免許関連書類', desc: 'LTO運転免許証・OR/CR・外免切替に必要な書類取得', badge: null },
    { icon: BadgeCheck, title: 'DFA Apostille', subtitle: 'アポスティーユ認証', desc: 'DFAアポスティーユ認証（フィリピン外務省認証）代行', badge: null },
    { icon: Languages, title: 'Translation', subtitle: '日本語翻訳', desc: 'フィリピン公的書類の日本語翻訳・認証翻訳対応', badge: null },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-primary font-bold text-xs font-display tracking-widest uppercase mb-1 block">Services</span>
          <h2 className="text-xl font-bold text-secondary">対応可能な書類・サービス</h2>
          <p className="text-xs text-gray-500 mt-2">CENOMAR（独身証明書）・PSA・NBI・LTO・DFAアポスティーユ取得代行</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {services.map((service, index) => (
            <div key={index} className="group relative p-4 border border-gray-100 rounded-lg bg-gray-50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-200">
              {service.badge && (
                <span className="absolute top-2 right-2 text-[10px] bg-primary text-white px-1.5 py-0.5 rounded-full font-bold">{service.badge}</span>
              )}
              <div className="flex items-center gap-2 mb-1">
                <service.icon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-display font-bold text-sm text-secondary">{service.title}</span>
              </div>
              <p className="text-xs font-semibold text-gray-700 mb-1">{service.subtitle}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;