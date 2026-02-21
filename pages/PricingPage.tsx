import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Fingerprint, Gem, CheckCircle, ChevronRight, ChevronDown, Heart, Award, HelpCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getCtaVariant, trackEvent } from '../lib/analytics';

const plans = [
  {
    id: 'psa',
    icon: FileText,
    title: 'PSA取得代行',
    subtitle: '出生証明書 / 婚姻証明書 / CENOMAR',
    price: '¥40,000',
    note: '〜 (税・送料別)',
    highlights: ['役所申請手数料込み', '国際送料別途'],
    details: {
      period: '約4週間',
      note: '※税・国際送料は別途',
      docs: ['出生証明書（+ アポスティーユ）', '婚姻証明書（+ アポスティーユ）', 'CENOMAR（+ アポスティーユ）'],
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
    highlights: ['指紋採取サポート', 'DFA認証オプション可'],
    details: {
      period: '約4週間',
      note: '※税・国際送料は別途',
      docs: ['NBI無犯罪証明書', 'DFAアポスティーユ認証（オプション）'],
    },
    featured: false,
  },
  {
    id: 'lto',
    icon: FileText,
    title: 'LTO関連書類取得代行',
    subtitle: '運転免許関連書類（外免切り替え用）',
    price: '¥85,000',
    note: '〜 (税・送料別)',
    highlights: ['役所申請手数料込み', '国際送料別途'],
    details: {
      period: '約4週間',
      note: '※税・国際送料は別途',
      docs: ['LTO運転免許証関連書類', 'LTOトランザクション履歴'],
    },
    featured: false,
  },
  {
    id: 'pack',
    icon: Gem,
    title: '国際結婚パック',
    subtitle: '婚姻済証明書申請に必要な書類一式',
    price: '¥85,000',
    note: '〜 (税・送料別)',
    highlights: ['日本語翻訳込み', '優先対応サポート'],
    details: {
      period: '約4週間',
      note: '※税・国際送料は別途',
      docs: ['出生証明書（+ アポスティーユ）', 'セノマー独身証明書（+ アポスティーユ）'],
    },
    featured: true,
  },
  {
    id: 'visa',
    icon: Heart,
    title: '配偶者ビザ',
    subtitle: '在留資格「日本人の配偶者等」申請サポート',
    price: '¥85,000',
    note: '〜 (税・送料別)',
    highlights: ['必要書類の準備サポート', '申請書類チェック'],
    details: {
      period: '要相談',
      note: '※ケースにより異なります',
      docs: ['在留資格認定証明書交付申請書', '婚姻証明書・戸籍謄本など'],
    },
    featured: false,
  },
  {
    id: 'naturalization',
    icon: Award,
    title: '帰化申請',
    subtitle: '日本国籍取得の申請サポート',
    price: '¥85,000',
    note: '〜 (税・送料別)',
    highlights: ['必要書類の準備サポート', '継続的フォローアップ'],
    details: {
      period: '要相談',
      note: '※ケースにより異なります',
      docs: ['帰化許可申請書類一式', '居住・納税関連書類など'],
    },
    featured: false,
  },
];

const faqs = [
  { q: '料金に消費税は含まれていますか？', a: '表示金額はすべて税抜きです。別途消費税（10%）がかかります。' },
  { q: '国際送料はいくらですか？', a: '送り先の国・地域によって異なります。お問い合わせ時にご確認ください。' },
  { q: '取得難易度による変動とはどういう意味ですか？', a: 'フィリピン現地での調査や追加手続きが必要な場合（例：MATCH FOUND、NO RECORD FOUND等）は、別途費用が発生する場合があります。事前にご説明します。' },
  { q: '複数の書類をまとめて依頼できますか？', a: 'はい、まとめて対応可能です。セット割引が適用される場合もありますので、まずはご相談ください。' },
];

export default function PricingPage() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const ctaVariant = getCtaVariant();

  return (
    <div className="min-h-screen bg-background-light text-gray-800 font-body">
      <Navbar />

      <main className="max-w-md md:max-w-2xl lg:max-w-6xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="text-xs text-gray-400 mb-6" aria-label="パンくずリスト">
          <Link to="/" className="hover:text-secondary">ホーム</Link>
          <span className="mx-1">/</span>
          <span className="text-gray-600">料金</span>
        </nav>

        <div className="text-center mb-10">
          <span className="text-primary font-bold text-xs font-display tracking-widest uppercase mb-1 block">Price</span>
          <h1 className="text-2xl font-bold text-secondary">料金プラン</h1>
          <p className="text-xs text-gray-500 mt-2">※取得難易度により変動する場合があります。すべて税抜き表示。</p>
        </div>

        {/* プランカード */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-14">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const isOpen = openId === plan.id;

            return (
              <div
                key={plan.id}
                className={`bg-white rounded-2xl overflow-hidden flex flex-col h-full transition-shadow relative ${
                  plan.featured
                    ? 'shadow-xl border border-primary/30 lg:scale-105 z-10'
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
                      <h2 className="font-bold text-secondary text-lg">{plan.title}</h2>
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

                  <button
                    onClick={() => setOpenId(isOpen ? null : plan.id)}
                    aria-expanded={isOpen}
                    className="w-full py-3 rounded-lg border border-secondary text-secondary font-bold text-sm transition-colors flex items-center justify-center gap-1 hover:bg-secondary hover:text-white mb-3"
                  >
                    詳細を見る
                    {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
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

                  <Link
                    to="/contact"
                    onClick={() => trackEvent('cta_click', { location: 'pricing_page', type: plan.id, variant: ctaVariant })}
                    className={`w-full py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-1 transition-colors ${
                      plan.featured
                        ? 'bg-secondary text-white shadow-lg shadow-secondary/20 hover:bg-secondary-light'
                        : 'bg-primary text-white hover:bg-primary-hover'
                    }`}
                  >
                    相談して見積もる
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* 料金に関するFAQ */}
        <section className="max-w-2xl mx-auto mb-10">
          <h2 className="text-lg font-bold text-secondary mb-4 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-primary" />
            料金に関するよくある質問
          </h2>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-card overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-5 py-4 flex justify-between items-center"
                  aria-expanded={openFaq === i}
                >
                  <span className="text-sm font-medium text-secondary">{faq.q}</span>
                  {openFaq === i ? <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" /> : <ChevronRight className="w-4 h-4 text-gray-400 shrink-0" />}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <div className="text-center">
          <p className="text-sm text-gray-500 mb-4">ご不明な点はお気軽にご相談ください</p>
          <Link
            to="/contact"
            className="inline-block bg-primary text-white font-bold px-8 py-3 rounded-full hover:bg-primary-hover transition-colors shadow-md"
          >
            無料で相談する
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
