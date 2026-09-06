import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import StepList from '../components/StepList';
import CtaBox from '../components/CtaBox';
import FaqSection from '../components/FaqSection';
import RelatedLinks from '../components/RelatedLinks';
import { useMeta } from '../lib/useMeta';
import { Award, Globe, FileCheck, Stamp } from 'lucide-react';

// PRC = Philippine Professional Regulation Commission（フィリピン専門資格委員会）発行の
// 資格・免許証明書。非PSA書類のため、DFA物理アポスティーユを継続して取得できる。
// 料金は components/Pricing.tsx の apostille-only プラン（¥39,000〜）と同一基準。

export default function PrcApostilleJa() {
  useMeta(
    'PRC証明書 アポスティーユ取得代行｜専門資格・免許の認証【IGRS】',
    'PRC（フィリピン専門資格委員会）発行の資格・免許証明書のDFA物理アポスティーユ取得・国際発送を代行。¥39,000〜（税込・DHL込み）。PSA書類と違い非PSA書類のため、紙の物理アポスティーユに対応します。帰化申請・海外就労・資格の海外承認に。',
  );

  return (
    <PageLayout
      breadcrumbs={[
        { label: 'ホーム', href: '/ja/' },
        { label: '料金', href: '/ja/ryokin/' },
        { label: 'PRC証明書アポスティーユ代行' },
      ]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'PRC証明書 DFAアポスティーユ取得代行',
          description: 'PRC（フィリピン専門資格委員会）発行の資格・免許証明書のDFA物理アポスティーユ取得・国際発送を代行。',
          url: 'https://ph-document.com/ja/prc-apostille/',
          provider: {
            '@type': 'Organization',
            name: 'IGRS Inc.',
            url: 'https://ph-document.com/ja/',
          },
          areaServed: { '@type': 'Country', name: 'JP' },
          offers: {
            '@type': 'Offer',
            price: '39000',
            priceCurrency: 'JPY',
            description: 'DFA物理アポスティーユ取得＋DHL国際発送（税込・送料込み）',
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'PRC証明書には物理アポスティーユ（紙）を付けられますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'はい。2026年3月16日以降、DFAが物理アポスティーユの発行を停止したのはPSAの民事書類（出生証明書・婚姻証明書・CENOMAR等）のみです。PRC発行の資格・免許証明書は非PSA書類にあたるため、従来どおりDFAの物理アポスティーユ（紙）を取得できます。紙の原本と紙のアポスティーユを求める提出先にも対応可能です。',
              },
            },
            {
              '@type': 'Question',
              name: 'PRC証明書のアポスティーユ代行はいくらですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '¥39,000〜（税込・DHL国際送料込み）です。内訳はアポスティーユ代行 ¥30,000＋消費税 ¥3,000＋DHL ¥6,000。DFAでの物理アポスティーユ取得から日本へのDHL発送までを含みます。納期の目安は約4〜6週間です。',
              },
            },
            {
              '@type': 'Question',
              name: 'PRC証明書の取得自体も代行してもらえますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'PRCの証明書発行はご本人の申請・本人確認が必要になる場合が多く、書類の種類によって代行の可否が変わります。ご本人またはフィリピン国内のご家族が取得したうえで原本をIGRS宛にお送りいただければ、DFA物理アポスティーユの取得から国際発送までを確実に代行できます。取得自体の代行可否は書類の種類をお知らせいただければ個別にご回答します。',
              },
            },
            {
              '@type': 'Question',
              name: '帰化申請でPRC証明書は必要ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '帰化申請で必ず必要になる書類ではありませんが、看護師・エンジニア・教員などの専門職として在留・就労している方は、法務局から資格を裏付ける書類としてPRC証明書を求められることがあります。必要書類は家族構成や在留状況により法務局が個別に指定するため、渡された必要書類の一覧をお見せいただければ、どの書類が紙のアポスティーユに対応し、どれがe-Apostilleになるかを整理してご案内します。',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="PRC証明書 アポスティーユ取得代行"
        subtitle="PRC（フィリピン専門資格委員会）発行の資格・免許証明書のDFA物理アポスティーユ取得・国際発送を代行します。"
        badges={['¥39,000〜（税込・DHL込み）', 'DFA物理アポスティーユ対応', '約4〜6週間']}
        ctaText="PRC証明書について相談する"
        ctaHref="#contact"
        ctaService="PRC証明書アポスティーユ代行"
        lastUpdated="2026年7月31日"
      />

      {/* 重要な区別（PSAとの違い） */}
      <section className="mb-10">
        <div className="rounded-xl border border-blue-100 bg-blue-50/60 p-5 flex gap-3">
          <FileCheck className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-bold text-gray-800 mb-2">PRCは「非PSA書類」——物理アポスティーユに対応できます</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              2026年3月16日以降、<strong>PSA民事書類（出生・婚姻・CENOMAR等）はDFA e-Apostille（電子）に一本化</strong>され、紙のアポスティーユは発行されなくなりました。一方で
              <strong>PRC発行の資格・免許証明書は非PSA書類のため、引き続きDFAの物理アポスティーユ（紙）を取得できます。</strong>
              紙の原本＋物理アポスティーユを求める提出先にも対応可能です。同様にNBI Clearance・LTO（運転記録）も物理アポスティーユの対象です。
            </p>
          </div>
        </div>
      </section>

      {/* こんな方に向いています */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary">こんな方に向いています</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { icon: Award, text: '帰化申請・在留資格申請で、フィリピンの資格・免許証明が必要な方' },
            { icon: Globe, text: '海外就労・資格の海外承認で PRC証明書＋アポスティーユが必要な方' },
            { icon: Stamp, text: '看護師・エンジニア・教員などの専門職で、資格の真正証明が必要な方' },
            { icon: FileCheck, text: '提出先が紙の原本＋物理アポスティーユを求めている方' },
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
        heading="代行の流れ"
        steps={[
          {
            title: '必要書類の確認',
            description: '申請目的（帰化・海外就労・資格承認など）に合わせて、どのPRC書類が必要か、提出先が紙の原本と物理アポスティーユを求めているかを確認します。',
          },
          {
            title: 'PRC証明書のご準備・IGRSへの転送',
            description: 'PRCの証明書発行はご本人の申請・本人確認が必要な場合が多いため、ご本人またはフィリピン国内のご家族が取得のうえ、原本をIGRS宛にお送りいただきます。取得自体の代行可否は書類の種類により個別にご回答します。',
          },
          {
            title: 'DFA物理アポスティーユ取得',
            description: 'PRC証明書は非PSA書類のため、DFAの物理アポスティーユ（紙）を取得します。現地DFAへの予約・申請・受け取りをスタッフが代行します。',
          },
          {
            title: 'DHL国際発送',
            description: 'アポスティーユ付きのPRC証明書原本を、追跡付きのDHLでお届けします。納期の目安は約4〜6週間です。',
          },
        ]}
      />

      {/* 料金 */}
      <section className="mb-10">
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">料金・納期</h2>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-4xl font-extrabold text-primary">¥39,000</span>
            <span className="text-sm text-gray-500">〜（税込・DHL国際送料込み）</span>
          </div>
          <p className="text-xs text-gray-400 mb-5">アポスティーユ代行 ¥30,000 ＋ 消費税 ¥3,000 ＋ DHL ¥6,000</p>
          <ul className="space-y-2 text-sm text-gray-700 mb-5">
            <li className="flex justify-between border-b border-gray-100 pb-2">
              <span>DFA物理アポスティーユ取得代行</span>
              <span className="font-semibold text-secondary">込み</span>
            </li>
            <li className="flex justify-between border-b border-gray-100 pb-2">
              <span>DHL国際発送（追跡付き）</span>
              <span className="font-semibold text-secondary">込み</span>
            </li>
            <li className="flex justify-between border-b border-gray-100 pb-2">
              <span>納期の目安</span>
              <span className="font-semibold text-secondary">約4〜6週間</span>
            </li>
            <li className="flex justify-between">
              <span>日本語翻訳が必要な場合</span>
              <span className="font-semibold text-secondary">1部 ¥7,700〜</span>
            </li>
          </ul>
          <p className="text-xs text-gray-500 leading-relaxed">
            上記はPRC証明書の原本をIGRS宛にお送りいただく場合の料金です。お支払いは着手金50%・書類発送準備完了後に残金50%。着手前のキャンセルは無料です。
          </p>
        </div>
      </section>

      <CtaBox
        title="PRC証明書のアポスティーユを相談する"
        description="どのPRC書類が必要か、提出先が求める形式（紙原本・物理アポスティーユ）も含めて、まずは無料でご相談ください。"
        buttonText="無料で相談する"
        href="#contact"
        variant="primary"
        trustNote="相談・見積もり無料／着手前キャンセル無料"
        service="PRC証明書アポスティーユ代行"
      />

      <FaqSection
        items={[
          { q: 'PRC証明書には物理アポスティーユ（紙）を付けられますか？', a: 'はい。2026年3月16日以降、DFAが物理アポスティーユの発行を停止したのはPSAの民事書類（出生証明書・婚姻証明書・CENOMAR等）のみです。PRC発行の資格・免許証明書は非PSA書類にあたるため、従来どおりDFAの物理アポスティーユ（紙）を取得できます。紙の原本と紙のアポスティーユを求める提出先にも対応可能です。' },
          { q: 'PRC証明書のアポスティーユ代行はいくらですか？', a: '¥39,000〜（税込・DHL国際送料込み）です。内訳はアポスティーユ代行 ¥30,000＋消費税 ¥3,000＋DHL ¥6,000。DFAでの物理アポスティーユ取得から日本へのDHL発送までを含みます。納期の目安は約4〜6週間です。' },
          { q: 'PRC証明書の取得自体も代行してもらえますか？', a: 'PRCの証明書発行はご本人の申請・本人確認が必要になる場合が多く、書類の種類によって代行の可否が変わります。ご本人またはフィリピン国内のご家族が取得したうえで原本をIGRS宛にお送りいただければ、DFA物理アポスティーユの取得から国際発送までを確実に代行できます。取得自体の代行可否は書類の種類をお知らせいただければ個別にご回答します。' },
          { q: '帰化申請でPRC証明書は必要ですか？', a: '帰化申請で必ず必要になる書類ではありませんが、看護師・エンジニア・教員などの専門職として在留・就労している方は、法務局から資格を裏付ける書類としてPRC証明書を求められることがあります。必要書類は家族構成や在留状況により法務局が個別に指定するため、渡された必要書類の一覧をお見せいただければ、どの書類が紙のアポスティーユに対応し、どれがe-Apostilleになるかを整理してご案内します。' },
        ]}
        ctaTitle="必要な書類を一緒に整理します"
        ctaButton="無料相談フォームへ"
      />

      <RelatedLinks links={[
        { path: '/ja/kika-shinsei-guide/', label: '帰化申請 フィリピン書類の取得代行' },
        { path: '/ja/nbi-clearance/', label: 'NBIクリアランス アポスティーユ代行' },
        { path: '/ja/e-apostille-fuka/', label: 'e-Apostilleは帰化申請に使える？' },
        { path: '/ja/apostille/', label: 'DFAアポスティーユとは（取得代行）' },
        { path: '/ja/honyaku/', label: 'フィリピン書類の日本語翻訳サービス' },
      ]} />
    </PageLayout>
  );
}
