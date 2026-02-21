import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FileText, Fingerprint, Gem, CheckCircle, ChevronRight, ChevronDown,
  Heart, Award, HelpCircle, X, AlertTriangle, Clock, Globe, Users,
} from 'lucide-react';
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
  {
    q: '料金に消費税は含まれていますか？',
    a: '表示金額はすべて税抜きです。別途消費税（10%）がかかります。',
  },
  {
    q: '国際送料はいくらですか？',
    a: '送り先の国・地域によって異なります。お問い合わせ時にご確認ください。',
  },
  {
    q: '取得難易度による変動とはどういう意味ですか？',
    a: 'フィリピン現地での調査や追加手続きが必要な場合（例：MATCH FOUND、NO RECORD FOUND等）は、別途費用が発生する場合があります。事前にご説明します。',
  },
  {
    q: '複数の書類をまとめて依頼できますか？',
    a: 'はい、まとめて対応可能です。セット割引が適用される場合もありますので、まずはご相談ください。',
  },
  {
    q: '支払い方法を教えてください。',
    a: '銀行振込でのお支払いに対応しています。ご依頼確定後に振込先をご案内します。',
  },
  {
    q: '急ぎで書類が必要な場合は対応してもらえますか？',
    a: '緊急対応のご相談も承っています。ただし、フィリピン現地の機関の処理状況によって納期が変動するため、まずはお問い合わせにてご状況をお聞かせください。',
  },
  {
    q: '依頼後にキャンセルはできますか？',
    a: '現地での申請手続き開始前であればキャンセル可能です。手続き開始後のキャンセルは一部費用が発生する場合があります。詳細はご相談ください。',
  },
  {
    q: '取得した書類が使えなかった場合はどうなりますか？',
    a: '書類の内容や取得プロセスに問題があった場合は、状況を確認のうえ再取得対応をご提案します。提出先機関の審査結果については保証の対象外となりますが、不備があった場合はサポートします。',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://ph-document.com/pricing/',
      url: 'https://ph-document.com/pricing/',
      name: '料金・プラン一覧｜フィリピン書類取得代行センター',
      description: 'PSA・CENOMAR・NBI・国際結婚パック・配偶者ビザなど各プランの代行料金を一覧で掲載。',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://ph-document.com/' },
          { '@type': 'ListItem', position: 2, name: '料金・プラン', item: 'https://ph-document.com/pricing/' },
        ],
      },
    },
    {
      '@type': 'ItemList',
      name: 'フィリピン書類取得代行 料金プラン一覧',
      itemListElement: plans.map((plan, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: plan.title,
        description: plan.subtitle,
        url: 'https://ph-document.com/pricing/',
      })),
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
  ],
};

// 自力 vs 代行 比較データ
const comparison = [
  {
    aspect: '手続きの手間',
    self: '現地PSAオンラインシステム登録・英語対応が必要',
    agency: '依頼後はお任せ。進捗報告を日本語で受け取れる',
    selfBad: true,
  },
  {
    aspect: '言語の壁',
    self: 'フィリピン側の窓口・書類はすべて英語',
    agency: '日本語で全工程をサポート',
    selfBad: true,
  },
  {
    aspect: 'トラブル対応',
    self: 'MATCH FOUND・NO RECORD FOUNDなどの問題を自力で解決',
    agency: '問題発生時も現地ネットワークで対応',
    selfBad: true,
  },
  {
    aspect: '国際配送',
    self: '現地の配送状況・追跡を自分で管理',
    agency: '配送手配を代行（送料は別途）',
    selfBad: true,
  },
  {
    aspect: '費用感',
    self: '書類代＋配送料のみ（安く見えるが時間コストが大きい）',
    agency: '代行料金が発生するが、時間・ストレスを大幅に節約',
    selfBad: false,
  },
];

// プランの選び方シナリオ
const scenarios = [
  {
    icon: Users,
    title: 'フィリピン人パートナーと日本で入籍したい',
    desc: 'CENOMARや出生証明書など、日本の市区町村役所に提出する書類が必要です。',
    recommend: '国際結婚パック',
    link: '/kokusai-kekkon-guide',
  },
  {
    icon: Heart,
    title: '配偶者ビザ（在留資格）を取得したい',
    desc: 'PSA婚姻証明書・出生証明書・NBI Clearanceなど複数の書類が必要になることが多いです。',
    recommend: '配偶者ビザ or PSA取得代行',
    link: '/haigusha-visa-shorui',
  },
  {
    icon: Globe,
    title: 'フィリピンの運転免許を日本で使いたい',
    desc: '外国免許切り替え（外免切替）にはLTO発行の証明書類が必要です。',
    recommend: 'LTO関連書類取得代行',
    link: '/gaimen-kirikae-guide',
  },
  {
    icon: Clock,
    title: 'どの書類が必要か分からない',
    desc: '目的に応じて必要書類が異なります。まずはご状況をお聞かせください。',
    recommend: 'まず無料相談',
    link: '/contact',
  },
];

export default function PricingPage() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const ctaVariant = getCtaVariant();

  return (
    <div className="min-h-screen bg-background-light text-gray-800 font-body">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="max-w-md md:max-w-2xl lg:max-w-6xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="text-xs text-gray-400 mb-6" aria-label="パンくずリスト">
          <Link to="/" className="hover:text-secondary">ホーム</Link>
          <span className="mx-1">/</span>
          <span className="text-gray-600">料金・プラン</span>
        </nav>

        {/* ページヘッド */}
        <div className="text-center mb-8">
          <span className="text-primary font-bold text-xs font-display tracking-widest uppercase mb-1 block">Price</span>
          <h1 className="text-2xl font-bold text-secondary mb-3">料金・プラン一覧</h1>
          <p className="text-sm text-gray-600 max-w-xl mx-auto leading-relaxed">
            フィリピン書類の取得代行料金を、用途・書類の種類別にまとめました。<br className="hidden sm:inline" />
            「どれを選べばいいか分からない」という方は、まず<Link to="/contact" className="text-primary font-medium hover:underline">無料相談</Link>からどうぞ。
          </p>
          <p className="text-xs text-gray-400 mt-2">※取得難易度により変動する場合があります。すべて税抜き表示。</p>
        </div>

        {/* 代行 vs 自力 比較 */}
        <section className="mb-14" aria-labelledby="comparison-heading">
          <h2 id="comparison-heading" className="text-base font-bold text-secondary mb-4 text-center">
            代行と自力取得、何が違う？
          </h2>
          <p className="text-sm text-gray-500 text-center mb-5">
            「自分でやれば安いのでは？」と思う方へ。実際の違いを比較しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-4 py-3 text-xs font-bold text-gray-500 w-1/4">比較項目</th>
                  <th className="px-4 py-3 text-center text-xs font-bold text-gray-500 w-[37%]">
                    <span className="inline-flex items-center gap-1"><X className="w-3 h-3 text-red-400" />自力で取得</span>
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-bold text-primary w-[37%]">
                    <span className="inline-flex items-center gap-1"><CheckCircle className="w-3 h-3 text-primary" />代行サービス</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map(({ aspect, self, agency, selfBad }) => (
                  <tr key={aspect} className="border-b border-gray-50 last:border-0">
                    <td className="px-4 py-3 font-medium text-gray-700 text-xs">{aspect}</td>
                    <td className={`px-4 py-3 text-xs leading-relaxed text-center ${selfBad ? 'text-gray-500' : 'text-gray-600'}`}>
                      {selfBad && <AlertTriangle className="w-3.5 h-3.5 text-amber-400 mx-auto mb-1" />}
                      {self}
                    </td>
                    <td className="px-4 py-3 text-xs leading-relaxed text-center text-gray-700">
                      {selfBad && <CheckCircle className="w-3.5 h-3.5 text-primary mx-auto mb-1" />}
                      {agency}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* プランカード */}
        <section aria-labelledby="plans-heading" className="mb-14">
          <h2 id="plans-heading" className="text-base font-bold text-secondary mb-1 text-center">料金プラン</h2>
          <p className="text-xs text-gray-500 text-center mb-8">書類の種類や目的に応じてプランをお選びください</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
        </section>

        {/* どのプランを選べばいい？ */}
        <section className="mb-14 max-w-3xl mx-auto" aria-labelledby="scenario-heading">
          <h2 id="scenario-heading" className="text-base font-bold text-secondary mb-1 text-center">
            どのプランを選べばいい？
          </h2>
          <p className="text-xs text-gray-500 text-center mb-6">目的別に最適なプランをご案内します</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {scenarios.map(({ icon: Icon, title, desc, recommend, link }) => (
              <div key={title} className="bg-white rounded-xl border border-gray-100 shadow-card p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-secondary leading-snug">{title}</h3>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed mb-3">{desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-primary/10 text-primary font-bold px-2 py-1 rounded-full">
                    → {recommend}
                  </span>
                  <Link
                    to={link}
                    className="text-xs text-secondary hover:underline"
                  >
                    詳しく見る
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 料金に含まれるもの / 含まれないもの */}
        <section className="mb-14 max-w-2xl mx-auto" aria-labelledby="included-heading">
          <h2 id="included-heading" className="text-base font-bold text-secondary mb-4 text-center">
            料金に含まれるもの・含まれないもの
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl border border-gray-100 shadow-card p-5">
              <h3 className="text-sm font-bold text-primary mb-3 flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" /> 料金に含まれるもの
              </h3>
              <ul className="space-y-2 text-xs text-gray-600">
                {[
                  '現地申請手数料（PSA・NBIなど）',
                  '日本語での進捗報告・サポート',
                  '書類内容の確認・不備チェック',
                  '現地担当者との交渉・調整',
                  'DFAアポスティーユ認証（プラン内）',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 shadow-card p-5">
              <h3 className="text-sm font-bold text-gray-500 mb-3 flex items-center gap-1.5">
                <X className="w-4 h-4" /> 別途費用が発生するもの
              </h3>
              <ul className="space-y-2 text-xs text-gray-600">
                {[
                  '国際配送料（送り先により異なる）',
                  '消費税（10%）',
                  'MATCH FOUND等の追加調査費用',
                  '日本語翻訳料（一部プランを除く）',
                  '書類の公証・認証（日本側で必要な場合）',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-3.5 h-3.5 shrink-0 mt-0.5 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-300 inline-block" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-2xl mx-auto mb-10" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="text-lg font-bold text-secondary mb-4 flex items-center gap-2">
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
                  {openFaq === i
                    ? <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                    : <ChevronRight className="w-4 h-4 text-gray-400 shrink-0" />}
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
