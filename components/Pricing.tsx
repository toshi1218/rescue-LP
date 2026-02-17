import React, { useState } from 'react';
import { FileText, Fingerprint, Gem, CheckCircle, ChevronRight, ChevronDown } from 'lucide-react';

const plans = [
  {
    id: 'psa',
    icon: FileText,
    title: 'PSA取得代行',
    subtitle: '出生証明書 / 婚姻証明書 / CENOMAR',
    price: '¥40,000',
    note: '〜 (税・送料別)',
    highlights: [
      '役所申請手数料込み',
      '国際送料別途',
    ],
    details: {
      period: '約4週間',
      note: '※税・国際送料は別途',
      docs: [
        '出生証明書（+ アポスティーユ）',
        '婚姻証明書（+ アポスティーユ）',
        'CENOMAR（+ アポスティーユ）',
      ],
    },
    featured: false,
  },
  {
    id: 'nbi',
    icon: Fingerprint,
    title: 'NBI取得代行',
    subtitle: '無犯罪証明書の取得サポート',
    price: '¥45,000',
    note: '〜 (税・送料別)',
    highlights: [
      '指紋採取サポート',
      'DFA認証オプション可',
    ],
    details: {
      period: '約4週間',
      note: '※税・国際送料は別途',
      docs: [
        'NBI無犯罪証明書',
        'DFAアポスティーユ認証（オプション）',
      ],
    },
    featured: false,
  },
  {
    id: 'lto',
    icon: FileText,
    title: 'LTO関連書類取得代行',
    subtitle: '運転免許関連書類の取得サポート',
    price: '¥85,000',
    note: '〜 (税・送料別)',
    highlights: [
      '役所申請手数料込み',
      '国際送料別途',
    ],
    details: {
      period: '約4週間',
      note: '※税・国際送料は別途',
      docs: [
        'LTO運転免許証関連書類',
        'LTOトランザクション履歴',
      ],
    },
    featured: false,
  },
  {
    id: 'pack',
    icon: Gem,
    title: '結婚パック',
    subtitle: '婚姻具備証明書申請に必要な書類一式',
    price: '¥85,000',
    note: '〜 (税・送料別)',
    highlights: [
      '日本語翻訳込み',
      '優先対応サポート',
    ],
    details: {
      period: '約4週間',
      note: '※税・国際送料は別途',
      docs: [
        '出生証明書（+ アポスティーユ）',
        'セノマー独身証明書（+ アポスティーユ）',
      ],
    },
    featured: true,
  },
];

const Pricing: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="py-12 px-4 max-w-md md:max-w-2xl lg:max-w-6xl mx-auto" id="pricing">
      <div className="text-center mb-10">
        <span className="text-primary font-bold text-xs font-display tracking-widest uppercase mb-1 block">Price</span>
        <h2 className="text-xl font-bold text-secondary">料金プラン</h2>
        <p className="text-xs text-gray-500 mt-2">※取得難易度により変動する場合があります</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {plans.map((plan) => {
          const Icon = plan.icon;
          const isOpen = openId === plan.id;

          return (
            <div
              key={plan.id}
              className={`bg-white rounded-2xl overflow-hidden flex flex-col h-full transition-shadow ${
                plan.featured
                  ? 'shadow-xl border border-primary/30 lg:scale-105 z-10 relative'
                  : 'shadow-card border border-gray-100 hover:shadow-lg'
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg">
                  人気 No.1
                </div>
              )}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-secondary text-lg">{plan.title}</h3>
                    <p className="text-xs text-gray-500">{plan.subtitle}</p>
                  </div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${plan.featured ? 'bg-primary/10 text-primary' : 'bg-secondary/5 text-secondary'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-2xl font-bold font-display text-primary">{plan.price}</span>
                  <span className="text-xs text-gray-500">{plan.note}</span>
                </div>

                <ul className="space-y-2 mb-6 flex-1">
                  {plan.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* 詳細アコーディオン */}
                <button
                  onClick={() => setOpenId(isOpen ? null : plan.id)}
                  className={`w-full py-3 rounded-lg border font-bold text-sm transition-colors flex items-center justify-center gap-1 group mb-3 ${
                    plan.featured
                      ? 'border-secondary text-secondary hover:bg-secondary hover:text-white'
                      : 'border-secondary text-secondary hover:bg-secondary hover:text-white'
                  }`}
                >
                  詳細を見る
                  {isOpen
                    ? <ChevronDown className="w-4 h-4 transition-transform" />
                    : <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  }
                </button>

                {isOpen && (
                  <div className="bg-gray-50 rounded-xl p-4 mb-3 text-sm text-gray-700 space-y-3">
                    <div>
                      <p className="font-bold text-secondary mb-1">取得できる書類</p>
                      <ul className="space-y-1">
                        {plan.details.docs.map((doc) => (
                          <li key={doc} className="flex items-start gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                            {doc}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex gap-4 text-xs text-gray-500">
                      <span>納期: {plan.details.period}</span>
                      <span>{plan.details.note}</span>
                    </div>
                  </div>
                )}

                <a
                  href="#contact"
                  className={`w-full py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-1 transition-colors ${
                    plan.featured
                      ? 'bg-secondary text-white shadow-lg shadow-secondary/20 hover:bg-secondary-light'
                      : 'bg-primary text-white hover:bg-primary-hover'
                  }`}
                >
                  相談して見積もる
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
