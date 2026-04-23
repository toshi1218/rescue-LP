import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import SummaryBlock from '../components/SummaryBlock';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import FaqSection from '../components/FaqSection';
import SectionDivider from '../components/SectionDivider';
import RelatedLinks from '../components/RelatedLinks';
import {
  AlertTriangle,
  FileCheck,
  Globe,
  FileText,
  MapPin,
  ShieldCheck,
  Clock,
} from 'lucide-react';
import { useMeta } from '../lib/useMeta';
import { SEO_LAST_UPDATED_JA } from '../lib/seoDate';

export default function PsaNotice2026Ja() {
  useMeta(
    '【重要】2026年3月以降のフィリピンPSA書類（電子・紙）取得のお知らせ｜フィリピン書類取得代行センター',
    '2026年2月25日PSA E-Certificate導入・3月16日DFA eApostille完全デジタル化により、フィリピン公文書の取得形式が電子と紙に分かれました。日本の提出先では対応が未統一のため要件確認が必須。フィリピン現地営業所を持つ弊社が電子・紙両形式で対応します。',
  );

  return (
    <PageLayout
      breadcrumbs={[
        { label: 'ホーム', href: '/ja/' },
        { label: '2026年3月以降のPSA書類取得に関するお知らせ' },
      ]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'NewsArticle',
          headline:
            '【重要】2026年3月以降のフィリピンPSA書類（電子・紙）取得に関するお知らせ',
          description:
            '2026年2月25日のPSA E-Certificate導入と2026年3月16日のDFA eApostille完全デジタル化により、フィリピン公文書の取得形式が電子（PDF）と紙（SECPA）に分かれました。日本の市区町村役場・法務局・入国管理局などの提出先では対応が未統一のため、要件確認が必須です。',
          url: 'https://ph-document.com/ja/psa-ecertificate-2026/',
          datePublished: '2026-04-23',
          dateModified: '2026-04-23',
          author: { '@type': 'Organization', name: 'IGRS Inc.' },
          publisher: {
            '@type': 'Organization',
            name: 'IGRS Inc.',
            url: 'https://ph-document.com/ja/',
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: '現在の納期はどのくらいかかりますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '基本的に約2ヶ月が目安です。2026年3月以降の制度変更の影響で弊社へのご依頼が急増しており、加えてフィリピン現地のPSA・DFA窓口でも予約枠が逼迫しているためです。お急ぎの方は早めにご連絡ください。提出期限から逆算した優先スケジュールのご相談も承ります。',
              },
            },
            {
              '@type': 'Question',
              name: '2026年3月以降、フィリピンの紙のPSA書類は取得できなくなったのですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'いいえ。PSAの紙原本（SECPA）はフィリピン現地の窓口やPSA認可のチャネルを通じて引き続き取得可能です。変わったのは、PSAが2026年2月25日にE-Certificate（電子証明書）を正式導入したこと、および2026年3月16日からDFA（外務省）がPSA E-Certificateに対するアポスティーユを電子版（eApostille）のみで発行する方針となったことです。',
              },
            },
            {
              '@type': 'Question',
              name: 'PSA E-CertificateやeApostilleは日本の提出先で受理されますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'ハーグアポスティーユ条約上は有効ですが、日本の外務省自身も電子証明書について「提出先によっては受理されず、従来の紙媒体を求められることがある」と明記しており、市区町村役場・法務局・入国管理局・家庭裁判所・勤務先・学校などでは対応が未統一の状態が続く可能性があります。提出前に提出先へ確認することを強く推奨します。',
              },
            },
            {
              '@type': 'Question',
              name: 'なぜ他の代行業者は紙のPSA書類を提供できないケースがあるのですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '多くの書類代行業者・行政書士事務所は、PSAHelplineなどのオンラインサービスや現地の第三者機関への委託に依存しているためです。これらのオンラインチャネルは公式ルートとして認可されていますが、2026年3月16日以降はApostille条約加盟国（日本含む）向けの納品が電子版（E-Certificate＋eApostille）に限定されるケースが増えています。',
              },
            },
            {
              '@type': 'Question',
              name: '弊社サービスはどう対応しますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '弊社はフィリピン現地に自社営業所を構え、PSA窓口で紙原本（SECPA）を直接取得し、DFA現地窓口ルートでの紙アポスティーユ手配も可能です。同時にPSA E-Certificate＋eApostilleの取得にも対応しており、提出先の要件に応じて電子・紙どちらの形式でも納品できます。',
              },
            },
            {
              '@type': 'Question',
              name: 'eApostilleを印刷して提出することはできますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'できません。DFAは「eApostilleは印刷して紙として提出すると無効になる」と明記しています（loses its validity when printed and submitted as hard copies）。紙での提出が必要な場合は、DFA現地窓口ルートで紙原本＋紙アポスティーユを取得する必要があります。',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="【重要】2026年3月以降、フィリピンPSA書類は「電子」と「紙」に分かれました"
        subtitle="PSA E-Certificate と DFA eApostille の導入で、従来の紙提出が必要な日本側手続きに対応できる代行業者が限られています。弊社はフィリピン現地営業所から電子・紙の両方に対応します。"
        badges={['2026年3月16日 DFA eApostille開始', '紙原本は引き続き取得可能', 'フィリピン現地営業所で対応']}
        ctaText="要件に合わせて無料相談"
        ctaHref="#contact"
        lastUpdated={SEO_LAST_UPDATED_JA}
      />

      <section
        aria-label="現在の納期のお知らせ"
        className="mb-10 relative overflow-hidden rounded-2xl border-2 border-red-400/70 bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 p-6 md:p-7"
      >
        <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-red-500 via-red-400 to-transparent" />
        <div className="flex items-start gap-3 mb-3">
          <Clock className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
          <h2 className="text-lg md:text-xl font-bold text-red-900 leading-snug">
            【現在の納期のお知らせ】基本的に約2ヶ月かかります
          </h2>
        </div>
        <p className="text-base text-gray-800 leading-relaxed mb-3">
          2026年3月以降の制度変更の影響で、弊社へのご依頼が急増しており、加えてフィリピン現地の発行機関（PSA・DFA窓口）でも予約枠が逼迫しています。そのため、<strong className="font-bold text-red-900">現在の納期の目安は約2ヶ月</strong>となります（書類の種類・提出先要件により変動）。
        </p>
        <p className="text-base text-gray-800 leading-relaxed">
          <strong className="font-bold text-secondary">お急ぎの方は早めにご連絡ください。</strong>提出期限から逆算した優先スケジュールのご相談も承ります。
        </p>
        <div className="mt-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-red-600 text-white font-bold py-2.5 px-5 rounded-lg shadow hover:bg-red-700 transition-colors text-sm"
          >
            今すぐ相談する →
          </a>
        </div>
      </section>

      <SummaryBlock
        conclusion="2026年3月以降、フィリピン公文書の取得形式が電子と紙に分かれました。提出先ごとの要件確認が、再取得リスクを回避する鍵になります。"
        points={[
          '2026年2月25日：PSA（フィリピン統計局）が E-Certificate（電子証明書・PDF）を正式導入',
          '2026年3月16日：DFA（外務省）が PSA E-Certificate へのアポスティーユを電子版（eApostille）のみで発行する方針に',
          'PSA の紙原本（SECPA）と DFA 現地窓口での紙アポスティーユは引き続き取得可能',
          '日本の市区町村・法務局・入管・大使館・学校・勤務先などでは、電子版の受理対応が未統一',
        ]}
      />

      <section className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary tracking-tight">
            2026年に起きた3つの制度変更
          </h2>
        </div>

        <div className="space-y-4">
          <div className="rounded-xl border border-gray-100 bg-white shadow-card p-5">
            <p className="text-xs font-bold text-primary tracking-wider mb-1">2026年2月25日</p>
            <h3 className="text-base font-bold text-secondary mb-2">
              PSA E-Certificate（電子証明書）が正式導入
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              フィリピン統計局（PSA）は PSAHelpline.ph を通じて、出生証明書・婚姻証明書・死亡証明書・CENOMAR・CENODEATH の電子版（デジタル署名付き PDF）の発行を正式に開始しました。
              従来の紙原本（SECPA）と同等の法的効力を持つ公式サービスで、発行速度も大幅に短縮されています。
            </p>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white shadow-card p-5">
            <p className="text-xs font-bold text-primary tracking-wider mb-1">2026年3月9日</p>
            <h3 className="text-base font-bold text-secondary mb-2">
              DFA の一部の紙アポスティーユ申請が一時停止
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              デジタル化準備のため、DFA の紙アポスティーユ申請（オンライン・配送経由）が一時的に停止されました。現地窓口ルート（DFA Aseana・Consular Offices）の物理書類提出は継続しています。
            </p>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white shadow-card p-5">
            <p className="text-xs font-bold text-primary tracking-wider mb-1">2026年3月16日</p>
            <h3 className="text-base font-bold text-secondary mb-2">
              DFA 完全デジタル eApostille が正式開始
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              フィリピンはASEAN初となる HCCH eAPP（電子アポスティーユ）の完全実装国となりました。PSA E-Certificate および CHED eCAVs に対するアポスティーユは、Apostille条約加盟国（日本を含む）向けは原則 eApostille（電子版）のみで発行されます。
              eApostille は<strong className="font-bold text-secondary">印刷して紙として提出すると無効</strong>になります。
            </p>
          </div>
        </div>
      </section>

      <SectionDivider variant="beige">
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
            <h2 className="text-xl md:text-2xl font-bold text-secondary tracking-tight">
              なぜ多くの代行業者が「紙のPSA書類」を提供できないのか
            </h2>
          </div>
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            多くの書類代行業者・行政書士事務所は、PSAHelpline などの公式オンラインサービスや現地の第三者機関への委託に依存しています。これらは公式に認可された正規ルートですが、オンライン経由で申請した場合、2026年3月16日以降は Apostille 条約加盟国向けの納品が <strong className="font-bold text-secondary">電子 E-Certificate ＋ eApostille</strong> に限定されるケースが主流となっています。
          </p>
          <p className="text-base text-gray-700 leading-relaxed">
            一方、紙原本（SECPA）＋紙アポスティーユを取得するには、フィリピン現地で <strong className="font-bold text-secondary">PSA 窓口に直接出向き</strong>、さらに DFA 現地窓口（Aseana / Consular Offices）へ物理書類として持ち込む必要があります。これには現地の稼働体制が不可欠です。
          </p>
        </section>
      </SectionDivider>

      <section className="mb-12 relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/8 via-white to-secondary/5 p-6 md:p-8">
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-l-2xl" />
        <div className="flex items-start gap-3 mb-4">
          <ShieldCheck className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
          <h2 className="text-lg md:text-xl font-bold text-secondary leading-snug">
            弊社の立ち位置 — フィリピン現地営業所で「電子」も「紙」も対応
          </h2>
        </div>
        <p className="text-base text-gray-700 leading-relaxed mb-4">
          2026年3月以降も、PSA の紙原本（SECPA）を現地フィリピンで従来通りの形式で取得し、日本の提出先（市区町村役場・入国管理局・法務局・家庭裁判所・大使館等）が求める形で納品できるのは、<strong className="font-bold text-secondary">私たちの知る限り、フィリピンに自社営業所を持つ弊社だけ</strong>です。
        </p>
        <p className="text-sm text-gray-600 leading-relaxed">
          他の書類代行業者・行政書士事務所の多くは、PSAHelpline などのオンラインサービスや現地第三者機関への委託に依存しており、電子版（PDF＋eApostille）での納品に限定されるケースが主流となっています。日本の外務省自身も電子証明書について「提出先によっては受理されず、従来の紙媒体を求められることがある」と明記しており、紙原本が必要なケースは当面続くと見られます。
        </p>
      </section>

      <FeatureList
        heading="弊社のサポート内容"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: '提出先要件の切り分け（電子で足りるか／紙が必要か）',
            description:
              '市区町村役場・法務局・入国管理局・家庭裁判所・勤務先・学校など、提出先ごとの電子版受理可否を事前確認。再取得リスクを最小化します。',
          },
          {
            icon: <FileText className="w-4 h-4" />,
            title: '紙 PSA 原本（SECPA）の取得',
            description:
              'フィリピン現地営業所のスタッフが PSA 窓口で紙原本を直接取得。日本の提出先がこれまで受理してきた形式で納品します。',
          },
          {
            icon: <MapPin className="w-4 h-4" />,
            title: 'DFA 現地窓口での紙アポスティーユ手配',
            description:
              'DFA Aseana・各地 Consular Offices での物理書類ルートを活用。紙の Certificate of Authentication／アポスティーユの取得をサポートします。',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: 'PSA E-Certificate ＋ eApostille の取得',
            description:
              '電子で足りる提出先向けには、PSAHelpline 経由で電子版をスピーディに取得。処理時間・費用面でメリットがあります。',
          },
          {
            icon: <AlertTriangle className="w-4 h-4" />,
            title: '提出先への事前確認サポート',
            description:
              '「電子で足りますか、紙原本が必要ですか」という確認文面のひな形作成から、確認結果に基づく取得ルート選定までサポートします。',
          },
        ]}
      />

      <CtaBox
        title="行政書士の先生方・個人のお客様からのご相談を承っております"
        description="「電子で足りるのか、紙が必要か分からない」という段階からお気軽にご相談ください。提出先要件の整理から、フィリピン現地での取得・納品まで日本語で一貫サポートします。"
        buttonText="無料で相談する"
        href="#contact"
        variant="primary"
        trustNote="着手前キャンセル無料・進捗を随時ご報告"
      />

      <FaqSection
        items={[
          {
            q: '現在の納期はどのくらいかかりますか？',
            a: '基本的に約2ヶ月が目安です。2026年3月以降の制度変更の影響で弊社へのご依頼が急増しており、加えてフィリピン現地のPSA・DFA窓口でも予約枠が逼迫しているためです。お急ぎの方は早めにご連絡ください。提出期限から逆算した優先スケジュールのご相談も承ります。',
          },
          {
            q: '2026年3月以降、フィリピンの紙のPSA書類は取得できなくなったのですか？',
            a: 'いいえ。PSA の紙原本（SECPA）はフィリピン現地の窓口や PSA 認可のチャネルを通じて引き続き取得可能です。変わったのは、PSA が2026年2月25日に E-Certificate（電子証明書）を正式導入したこと、および2026年3月16日から DFA（外務省）が PSA E-Certificate に対するアポスティーユを電子版（eApostille）のみで発行する方針となったことです。',
          },
          {
            q: 'PSA E-CertificateやeApostilleは日本の提出先で受理されますか？',
            a: 'ハーグアポスティーユ条約上は有効ですが、日本の外務省自身も電子証明書について「提出先によっては受理されず、従来の紙媒体を求められることがある」と明記しており、市区町村役場・法務局・入国管理局・家庭裁判所・勤務先・学校などでは対応が未統一の状態が続く可能性があります。提出前に提出先へ確認することを強く推奨します。',
          },
          {
            q: 'なぜ他の代行業者は紙のPSA書類を提供できないケースがあるのですか？',
            a: '多くの書類代行業者・行政書士事務所は、PSAHelpline などのオンラインサービスや現地の第三者機関への委託に依存しているためです。これらのオンラインチャネルは公式ルートとして認可されていますが、2026年3月16日以降は Apostille 条約加盟国（日本含む）向けの納品が電子版（E-Certificate＋eApostille）に限定されるケースが増えています。',
          },
          {
            q: 'eApostilleを印刷して提出することはできますか？',
            a: 'できません。DFA は「eApostille は印刷して紙として提出すると無効になる」と明記しています（loses its validity when printed and submitted as hard copies）。紙での提出が必要な場合は、DFA 現地窓口ルートで紙原本＋紙アポスティーユを取得する必要があります。',
          },
          {
            q: '弊社サービスはどう対応しますか？',
            a: '弊社はフィリピン現地に自社営業所を構え、PSA 窓口で紙原本（SECPA）を直接取得し、DFA 現地窓口ルートでの紙アポスティーユ手配も可能です。同時に PSA E-Certificate ＋ eApostille の取得にも対応しており、提出先の要件に応じて電子・紙どちらの形式でも納品できます。',
          },
          {
            q: '料金は紙と電子で違いますか？',
            a: '取得ルートによって原価が異なるため、料金もケースにより変動します。まずは提出先と必要書類をお知らせいただければ、最適なルート（電子 or 紙）と総額を事前にご提示します。',
          },
        ]}
      />

      <RelatedLinks
        links={[
          { label: 'DFAアポスティーユ ガイド', path: '/ja/apostille/' },
          { label: 'DFAアポスティーユの料金', path: '/ja/apostille-ryokin/' },
          { label: 'PSA出生証明書の取得方法', path: '/ja/psa-shussei-shomeisho/' },
          { label: 'PSA婚姻証明書の取得方法', path: '/ja/psa-kekkon-shomeisho/' },
          { label: 'CENOMAR ガイド', path: '/ja/cenomar/' },
          { label: '行政書士向け法人サービス', path: '/ja/business/gyoseishoshi/' },
        ]}
      />
    </PageLayout>
  );
}
