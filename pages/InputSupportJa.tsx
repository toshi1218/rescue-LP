import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import StepList from '../components/StepList';
import CtaBox from '../components/CtaBox';
import { useMeta } from '../lib/useMeta';
import { CheckCircle, AlertTriangle, ArrowRight, HelpCircle, FileCheck, MessageCircle } from 'lucide-react';

export default function InputSupportJa() {
  useMeta(
    'PSA入力サポート｜自分でフィリピン書類を取得したい方へ【IGRS】',
    '海外からのPSA・CENOMAR・NBIオンライン申請を日本語でサポート。フォーム入力・支払い方法・送付先設定まで一緒に進めます。¥15,000〜。自分で取得して費用を抑えたい方向け。',
  );

  return (
    <PageLayout
      breadcrumbs={[
        { label: 'ホーム', href: '/ja/' },
        { label: '料金', href: '/ja/ryokin/' },
        { label: 'PSA入力サポート' },
      ]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'PSA入力サポート',
        description: '海外からのPSAオンライン申請（フォーム入力・支払い・送付先設定）を日本語サポート。自分で取得したい方向け。',
        url: 'https://ph-document.com/ja/psa-input-support/',
        provider: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/ja/',
        },
        areaServed: { '@type': 'Country', name: 'JP' },
        offers: {
          '@type': 'Offer',
          price: '15000',
          priceCurrency: 'JPY',
          priceSpecification: { '@type': 'UnitPriceSpecification', priceType: 'MinimumPrice' },
        },
      }]}
    >
      <HeroBanner
        title="PSA入力サポート"
        subtitle="自分でフィリピン書類を取得したい方へ。フォーム入力・支払い・送付先設定を日本語でサポートします。"
        badges={['¥15,000〜（税別）', '自分で申請・費用を抑える', 'オンラインで完結']}
        ctaText="入力サポートについて相談する"
        ctaHref="#contact"
        ctaService="入力サポート"
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
            { icon: FileCheck, text: 'PSA書類を自分で申請してみたいが、英語のフォームが不安' },
            { icon: HelpCircle, text: '海外からの支払い（国際クレカ・ドル払い）の方法が分からない' },
            { icon: MessageCircle, text: '書類の送付先・確認方法をどう設定すればいいか迷っている' },
            { icon: CheckCircle, text: '代行費用を抑えて、自分で手続きを進めたい' },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
              <Icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* サポート内容 */}
      <StepList
        heading="サポート内容"
        steps={[
          {
            title: '必要書類の確認',
            description: '申請目的（国際結婚・配偶者ビザ・帰化など）に合わせて、どの書類が必要かを確認します。',
          },
          {
            title: 'PSAオンライン申請フォームの入力補助',
            description: 'PSA Serbilisなどのオンラインポータルでの申請フォーム記入を、画面共有またはメールで一緒に進めます。',
          },
          {
            title: '支払い方法の案内',
            description: '海外からの支払い方法（国際クレジットカード・PayPalなど）の選択肢をご案内します。',
          },
          {
            title: '書類送付先・追跡方法のサポート',
            description: '日本または海外への書類の送付先設定、到着後の確認方法をお伝えします。',
          },
        ]}
      />

      {/* 料金 */}
      <section className="mb-10">
        <div className="rounded-2xl border border-primary/20 bg-primary/[0.03] p-6">
          <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">料金</p>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-4xl font-extrabold text-primary">¥15,000</span>
            <span className="text-sm text-gray-500">〜（税別）</span>
          </div>
          <p className="text-sm text-gray-600 mb-4">書類1種類あたり。複数書類のサポートは別途ご相談ください。</p>
          <ul className="space-y-1.5 mb-4">
            {[
              'オンラインでのやり取り（メール・チャット）',
              '申請フォーム入力補助（1書類分）',
              '支払い方法・送付先設定の案内',
              '質疑応答（メール対応）',
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
            入力サポートを相談する
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
            入力サポートで進めていたが、紙原本が必要と分かった場合や、手続きが複雑で代行に切り替えたい場合は、
            フルサービス（PSA代行取得＋DFA物理アポスティーユ）へ移行できます。
            支払い済みの入力サポート費用はフルサービス料金の一部に充当します（要相談）。
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
        title="入力サポートについて相談する"
        description="どの書類をどのように申請するか、まずは無料でご相談ください。提出先が紙原本を必要とするかどうかも一緒に確認できます。"
        buttonText="無料で相談する"
        href="#contact"
        variant="primary"
        trustNote="相談・見積もり無料。途中でフルサービスへの切り替えも可"
      />
    </PageLayout>
  );
}
