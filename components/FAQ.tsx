import React from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "支払い方法は？",
      a: "日本の銀行口座へのお振込みが可能です。"
    },
    {
      q: "取得までどのくらいかかりますか？",
      a: "約1ヶ月程度が目安です。お急ぎの場合はご相談ください。"
    },
    {
      q: "キャンセルはできますか？",
      a: "着手前のキャンセルは無料です。申請開始後は実費と手数料を差し引いた金額をご返金いたします。"
    },
    {
      q: "記載のない書類も対応できますか？",
      a: "はい、お任せください。ウェブサイトに掲載されていない書類でも、現地で取得可能なものであれば対応いたします。まずはお気軽にご相談ください。"
    },
    {
      q: "どの書類が必要かわからないのですが...",
      a: "ご安心ください。目的（結婚、ビザ申請など）をお伝えいただければ、こちらで必要な書類を確認してご案内いたします。詳細が未定でも、まずは無料相談にてお問い合わせください。"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-primary font-bold text-xs font-display tracking-widest uppercase mb-1 block">FAQ</span>
          <h2 className="text-xl font-bold text-secondary">よくあるご質問</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <details key={index} className="group bg-white rounded-lg shadow-sm overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer list-none p-4 select-none">
                <span className="font-bold text-sm text-gray-800 group-open:text-secondary transition-colors">{faq.q}</span>
                <span className="transition-transform duration-300 group-open:rotate-180">
                  <ChevronDown className="w-5 h-5 text-gray-400 group-open:text-primary" />
                </span>
              </summary>
              <div className="text-gray-600 text-sm px-4 pb-4 leading-relaxed border-t border-gray-50 pt-3">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;