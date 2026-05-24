import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import StepList from '../components/StepList';
import CtaBox from '../components/CtaBox';
import { useMeta } from '../lib/useMeta';
import { CheckCircle, AlertTriangle, ArrowRight, Plane, CreditCard, FileCheck, Globe } from 'lucide-react';

export default function InputSupportJa() {
  useMeta(
    'PSAオンライン申請代行｜海外から¥16,500（税込）で申請まで代行【IGRS】',
    '海外からのPSA・CENOMAR・NBIオンライン申請を日本語で代行。フォーム入力・国際クレカ支払い・送付先設定まで全て代行します。¥16,500（税込）〜。フィリピンに行かずに書類を取得したい方向け。',
  );

  return (
    <PageLayout
      breadcrumbs={[
        { label: 'ホーム', href: '/ja/' },
        { label: '料金', href: '/ja/ryokin/' },
        { label: 'PSAオンライン申請代行' },
      ]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'PSAオンライン申請代行',
        description: '海外からのPSAオンライン申請（フォーム入力・支払い・送付先設定）を日本語で代行。書類はPSAからお客様に直接届きます。',
        url: 'https://ph-document.com/ja/psa-input-support/',
        provider: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/ja/',
        },
        areaServed: { '@type': 'Country', name: 'JP' },
        offers: {
          '@type': 'Offer',
          price: '16500',
          priceCurrency: 'JPY',
          priceSpecification: { '@type': 'UnitPriceSpecification', priceType: 'MinimumPrice' },
        },
      }]}
    >
      <HeroBanner
        title="PSAオンライン申請代行"
        subtitle="PSAへのオンライン申請フォームの入力・申請手続きを代行。書類はPSAからお客様の住所へ直接届きます。"
        badges={['¥16,500〜（税込）', 'オンライン完結・DHL不要', 'PSAから直接お届け']}
        ctaText="無料で相談する"
        ctaHref="#contact"
        ctaService="オンライン申請代行"
        lastUpdated="2026年5月1日"
      />

      {/* このプランが向いている人 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary">こんな方に向いています</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { icon: Plane, text: 'PSA書類が必要だが、フィリピンへ行く時間が取れない' },
            { icon: CreditCard, text: 'オンライン申請の英語入力・国際クレカ支払いを任せたい' },
            { icon: FileCheck, text: '提出先がe-Certificate（電子書類）を受理することが確認できている' },
            { icon: Globe, text: 'アポスティーユは不要で、PSA書類さえあればよい' },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
              <Icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 代行内容 */}
      <StepList
        heading="代行内容"
        steps={[
          {
            title: '必要書類の確認',
            description: '申請目的（国際結婚・配偶者ビザ・帰化など）に合わせて、どの書類が必要かを確認します。',
          },
          {
            title: 'PSAオンライン申請フォームの入力・送信',
            description: 'PSA Serbilis等のオンラインポータルでの申請フォーム入力・送信をすべて代行します。お客様の英語入力は不要です。',
          },
          {
            title: '申請費用の支払い代行',
            description: '海外からの支払い（国際クレジットカード等）をIGRSが代行します。為替・支払いトラブルの心配がありません。',
          },
          {
            title: '送付先設定・ステータス確認',
            description: 'お客様指定の住所をPSAに登録し、申請後の進捗確認・受け取りまでフォローします。',
          },
        ]}
      />

      {/* 料金 */}
      <section className="mb-10">
        <div className="rounded-2xl border border-primary/20 bg-primary/[0.03] p-6">
          <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">料金</p>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-4xl font-extrabold text-primary">¥16,500</span>
            <span className="text-sm text-gray-500">〜（税込 / DHL不要）</span>
          </div>
          <p className="text-xs text-gray-400 mb-1">内訳: 申請代行 ¥15,000 + 消費税 ¥1,500</p>
          <p className="text-sm text-gray-600 mb-4">書類1種類あたり。複数書類のご依頼は別途ご相談ください。</p>
          <ul className="space-y-1.5 mb-4">
            {[
              'PSAオンラインフォームへの入力・申請',
              '申請費用の支払い手続き代行',
              'お客様住所への送付先設定',
              '申請後のステータス確認',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-secondary font-bold text-sm py-3 px-6 rounded-xl shadow-md shadow-primary/20 hover:bg-primary-hover transition-all duration-200"
          >
            オンライン申請代行を相談する
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* 重要な注意点（e-Apostille・紙原本） */}
      <section className="mb-10">
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 flex gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-bold text-gray-800 mb-2">日本の提出先では紙原本が必要な場合があります</p>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              PSAはオンラインでのe-Certificate（電子書類）、DFAはeApostille（電子認証）に対応しています。しかし、
              <strong>日本の市区町村役場・法務局・出入国在留管理庁では、紙の原本・物理アポスティーユを求めるケースが多く</strong>
              あります。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              提出先に事前確認が取れている場合はe-Certificate申請が有効です。
              不安な場合や確認が取れていない場合は、紙原本ルートのフルサービスをご検討ください。
            </p>
            <Link
              to="/ja/psa-ecertificate-nihon/"
              className="inline-flex items-center gap-1.5 text-sm text-primary-dark font-semibold hover:underline"
            >
              e-Certificateの日本での受け入れ状況を確認する
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* フルサービスへの切り替え */}
      <section className="mb-10">
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
          <p className="text-sm font-bold text-secondary mb-2">途中からフルサービスへの切り替えも可能です</p>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            オンライン申請代行で進めていたが、提出先で紙原本・物理アポスティーユが必要と分かった場合は、
            フルサービス（PSA物理書類取得＋DFA物理アポスティーユ）へ切り替えできます。
            支払い済みの代行費用はフルサービス料金の一部に充当します（要相談）。
          </p>
          <Link
            to="/ja/ryokin/"
            className="inline-flex items-center gap-1.5 text-sm text-primary-dark font-semibold hover:underline"
          >
            フルサービスの料金を見る
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      <CtaBox
        title="オンライン申請代行を相談する"
        description="どの書類をどのように申請するか、まずは無料でご相談ください。提出先が紙原本を必要とするかどうかも一緒に確認できます。"
        buttonText="無料で相談する"
        href="#contact"
        variant="primary"
        trustNote="相談・見積もり無料。途中でフルサービスへの切り替えも可"
      />
    </PageLayout>
  );
}
