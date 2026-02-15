import React from 'react';
import { FileText, Fingerprint, Gem, CheckCircle, ChevronRight } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section className="py-12 px-4 max-w-md md:max-w-2xl lg:max-w-6xl mx-auto" id="pricing">
      <div className="text-center mb-10">
        <span className="text-primary font-bold text-xs font-display tracking-widest uppercase mb-1 block">Price</span>
        <h2 className="text-xl font-bold text-secondary">料金プラン</h2>
        <p className="text-xs text-gray-500 mt-2">※取得難易度により変動する場合があります</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Basic Plan */}
        <div className="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden relative flex flex-col h-full hover:shadow-lg transition-shadow">
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold text-secondary text-lg">PSA取得代行</h3>
                <p className="text-xs text-gray-500">出生証明書 / 結婚証明書 / CENOMAR</p>
              </div>
              <div className="w-10 h-10 bg-secondary/5 rounded-full flex items-center justify-center text-secondary">
                <FileText className="w-5 h-5" />
              </div>
            </div>
            
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-2xl font-bold font-display text-primary">¥50,000</span>
              <span className="text-xs text-gray-500">〜 (税込)</span>
            </div>
            
            <ul className="space-y-2 mb-6 flex-1">
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                役所申請手数料込み
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                国際送料込み
              </li>
            </ul>
            
            <button className="w-full py-3 rounded-lg border border-secondary text-secondary font-bold text-sm hover:bg-secondary hover:text-white transition-colors flex items-center justify-center gap-1 group">
              詳細を見る
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* NBI Plan */}
        <div className="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow">
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold text-secondary text-lg">NBI取得代行</h3>
                <p className="text-xs text-gray-500">無犯罪証明書の取得サポート</p>
              </div>
              <div className="w-10 h-10 bg-secondary/5 rounded-full flex items-center justify-center text-secondary">
                <Fingerprint className="w-5 h-5" />
              </div>
            </div>
            
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-2xl font-bold font-display text-primary">¥55,000</span>
              <span className="text-xs text-gray-500">〜 (税込)</span>
            </div>
            
            <ul className="space-y-2 mb-6 flex-1">
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                指紋採取サポート
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                DFA認証オプション可
              </li>
            </ul>
            
            <button className="w-full py-3 rounded-lg border border-secondary text-secondary font-bold text-sm hover:bg-secondary hover:text-white transition-colors flex items-center justify-center gap-1 group">
              詳細を見る
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="bg-white rounded-2xl shadow-xl border border-primary/30 overflow-hidden relative flex flex-col h-full transform lg:scale-105 z-10">
          <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg">
            人気 No.1
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold text-secondary text-lg">結婚手続きパック</h3>
                <p className="text-xs text-gray-500">必要書類一式の取得と翻訳</p>
              </div>
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Gem className="w-5 h-5" />
              </div>
            </div>
            
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-2xl font-bold font-display text-primary">¥100,000</span>
              <span className="text-xs text-gray-500">〜 (税込)</span>
            </div>
            
            <ul className="space-y-2 mb-6 flex-1">
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                PSA書類全般
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                日本語翻訳込み
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                優先対応サポート
              </li>
            </ul>
            
            <a href="#contact" className="w-full py-3 rounded-lg bg-secondary text-white font-bold text-sm shadow-lg shadow-secondary/20 hover:bg-secondary-light transition-colors flex items-center justify-center gap-1">
              相談して見積もる
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;