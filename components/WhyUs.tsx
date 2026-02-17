import React from 'react';
import { Building2, Headset, Eye } from 'lucide-react';

const WhyUs: React.FC = () => {
  return (
    <section className="py-12 max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-4">
      <div className="text-center mb-10">
        <span className="text-primary font-bold text-xs font-display tracking-widest uppercase mb-1 block">Why Us</span>
        <h2 className="text-xl font-bold text-secondary">選ばれる理由</h2>
      </div>

      <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-3 md:gap-6">
        <div className="flex gap-4 p-5 bg-white rounded-xl shadow-soft md:flex-col md:items-center md:text-center md:h-full">
          <div className="shrink-0 w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
            <Building2 className="w-6 h-6 text-secondary" />
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-1">日本法人運営</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              日本法人が運営する信頼性の高いサービスです。現地の最新事情に精通しています。
            </p>
          </div>
        </div>

        <div className="flex gap-4 p-5 bg-white rounded-xl shadow-soft md:flex-col md:items-center md:text-center md:h-full">
          <div className="shrink-0 w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
            <Headset className="w-6 h-6 text-secondary" />
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-1">日本人スタッフ対応</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              お問い合わせから納品まで、日本人スタッフが日本語で丁寧に対応いたします。
            </p>
          </div>
        </div>

        <div className="flex gap-4 p-5 bg-white rounded-xl shadow-soft md:flex-col md:items-center md:text-center md:h-full">
          <div className="shrink-0 w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
            <Eye className="w-6 h-6 text-secondary" />
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-1">進捗の見える化</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              申請状況を随時ご報告。不安な待ち時間を解消し、安心して完了をお待ちいただけます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;