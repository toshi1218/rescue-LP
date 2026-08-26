import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import StepList from '../components/StepList';
import CtaBox from '../components/CtaBox';
import { useMeta } from '../lib/useMeta';
import { CheckCircle, AlertTriangle, ArrowRight, Plane, CreditCard, FileCheck, Globe, Smartphone } from 'lucide-react';

export default function InputSupportJa() {
  useMeta(
    'PSA e-Certificate取得代行｜海外から¥30,000（税込）・電子納品【IGRS】',
    '海外からPSA出生証明書・CENOMAR・婚姻証明書のe-Certificate取得を日本語で代行。本人確認・申請・支払いからPDF納品まで¥30,000（税込）。',
  );

  return (
    <PageLayout
      breadcrumbs={[
        { label: 'ホーム', href: '/ja/' },
        { label: '料金', href: '/ja/ryokin/' },
        { label: 'PSA e-Certificate取得代行' },
      ]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'PSA e-Certificate取得代行',
        description: '海外からPSA e-Certificateの取得を日本語で代行。本人確認・フォーム入力・支払いからPDF納品まで対応します。',
        url: 'https://ph-document.com/ja/psa-input-support/',
        provider: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/ja/',
        },
        areaServed: { '@type': 'Country', name: 'JP' },
        offers: {
          '@type': 'Offer',
          price: '30000',
          priceCurrency: 'JPY',
          priceSpecification: { '@type': 'UnitPriceSpecification', priceType: 'MinimumPrice' },
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'PSAのオンライン申請にはフィリピンの携帯番号が必要ですか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'PSAのオンライン申請ポータル（PSA Serbilis・PSAHelpline等）では、本人確認のためフィリピンの携帯電話番号あてにOTP（ワンタイムパスワード）が送信される手続きがあります。日本など海外に住んでいてフィリピンのSIM・携帯番号を持っていない場合、このOTP認証で申請が完了できないことがあります。当社の申請代行ではお客様側でフィリピンの携帯番号やOTP受信は不要です。',
            },
          },
          {
            '@type': 'Question',
            name: 'e-Certificate（電子書類）は日本の役所や法務局で使えますか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'PSAはe-Certificate（電子書類）、DFAはe-Apostille（電子認証）に対応していますが、日本の市区町村役場・法務局・出入国在留管理庁では紙の原本・物理アポスティーユを求めるケースが多くあります。提出先に受け入れの事前確認が取れている場合はe-Certificate申請が有効ですが、確認が取れていない場合は紙原本ルートのフルサービスをおすすめします。',
            },
          },
          {
            '@type': 'Question',
            name: 'PSA e-Certificate取得代行の料金はいくらですか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '書類1種類あたり¥30,000（税込）です。PSA e-Certificateの取得からPDF納品までを含み、DHL国際配送は不要です。DFA e-Apostilleが必要な場合は¥40,000（税込）です。',
            },
          },
        ],
      }]}
    >
      <HeroBanner
        title="PSA e-Certificate取得代行"
        subtitle="本人確認・オンライン申請・支払いから、PSA e-CertificateのPDF納品まで代行します。"
        badges={['¥30,000（税込）', '電子納品・DHL不要', 'e-Apostille付き¥40,000']}
        ctaText="e-Certificate取得を相談する"
        ctaHref="#contact"
        ctaService="PSA e-Certificate取得代行"
        lastUpdated="2026年8月26日"
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

      {/* OTP・フィリピン携帯番号の詰まりポイント（競合が薄いKW） */}
      <section className="mb-10">
        <div className="rounded-2xl border border-primary/20 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <Smartphone className="w-6 h-6 text-primary flex-shrink-0" />
            <h2 className="text-xl md:text-2xl font-bold text-secondary">フィリピンの携帯番号がなくてOTPが受け取れない方へ</h2>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            PSAのオンライン申請ポータル（PSA Serbilis・PSAHelpline 等）では、本人確認のために
            <strong>フィリピンの携帯電話番号あてにOTP（ワンタイムパスワード）が送信される</strong>手続きがあります。
            日本など海外に住んでいてフィリピンのSIM・携帯番号を持っていない方は、
            <strong>このOTP認証で止まってしまい、申請を完了できない</strong>ケースが多くあります。
            在日フィリピン系の方から特に多いご相談です。
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            当社の申請代行では、<strong>お客様側でフィリピンの携帯番号やOTPの受信は必要ありません</strong>。
            申請フォームの入力から本人確認・支払い・送付先設定まで当社が代行するため、
            「フィリピンの番号がないから自分では申請できない」という壁をそのまま解消できます。
          </p>
          <div className="rounded-xl bg-primary/[0.04] border border-primary/15 p-4">
            <p className="text-sm font-bold text-secondary mb-2">こんな方に特に向いています</p>
            <ul className="space-y-1.5">
              {[
                '日本在住でフィリピンのSIM・携帯番号を解約してしまった',
                'PSAオンライン申請のOTP画面から先に進めなかった',
                'フィリピンの家族に頼まず、自分の手続きとして完結させたい',
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
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
            description: 'PSAのオンラインポータルでe-Certificateの申請フォーム入力・送信を代行します。お客様の英語入力は不要です。',
          },
          {
            title: '申請費用の支払い代行',
            description: '海外からの支払い（国際クレジットカード等）をIGRSが代行します。為替・支払いトラブルの心配がありません。',
          },
          {
            title: 'ステータス確認・電子納品',
            description: '申請後の進捗を確認し、取得したPSA e-CertificateをPDFで納品します。',
          },
        ]}
      />

      {/* 料金 */}
      <section className="mb-10">
        <div className="rounded-2xl border border-primary/20 bg-primary/[0.03] p-6">
          <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">料金</p>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-4xl font-extrabold text-primary">¥30,000</span>
            <span className="text-sm text-gray-500">（税込 / DHL不要）</span>
          </div>
          <p className="text-xs text-gray-400 mb-1">PSA e-Certificate 1種類の取得・PDF納品を含む総額</p>
          <p className="text-sm text-gray-600 mb-4">DFA e-Apostille付きは¥40,000（税込）。書類2種類以上はセット料金をご案内します。</p>
          <ul className="space-y-1.5 mb-4">
            {[
              'PSAオンラインフォームへの入力・申請',
              '申請費用の支払い手続き代行',
              '本人確認手続きのサポート',
              'PSA e-Certificateの取得・PDF納品',
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
            e-Certificate取得を相談する
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* 重要な注意点（e-Apostille・紙原本） */}
      <section className="mb-10">
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 flex gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-bold text-gray-800 mb-2">日本の提出先では紙のPSA原本が必要な場合があります</p>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              PSAはオンラインでのe-Certificate（電子書類）、DFAはe-Apostille（電子認証）に対応しています。2026年3月以降、DFAはPSA民事書類へ物理アポスティーユ（紙）を発行しなくなり、認証はe-Apostilleに一本化されました。一方で
              <strong>日本の市区町村役場・法務局・出入国在留管理庁では、今も紙のPSA原本を前提に運用するケースが多く</strong>
              あります。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              提出先がe-Apostille（電子認証）を受理する場合はe-Certificate申請が有効です。
              紙のPSA原本が必要な場合は、PSA原本＋e-Apostilleを手配するフルサービスをご検討ください。
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
            オンライン申請代行で進めていたが、提出先で紙のPSA原本が必要と分かった場合は、
            フルサービス（PSA原本〈紙〉取得＋DFA e-Apostille〈電子認証〉＋国際発送）へ切り替えできます。
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
