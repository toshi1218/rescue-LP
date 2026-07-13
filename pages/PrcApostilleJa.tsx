import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import StepList from '../components/StepList';
import CtaBox from '../components/CtaBox';
import { useMeta } from '../lib/useMeta';
import { AlertTriangle, Award, Globe, FileCheck, Stamp } from 'lucide-react';

// ⚠️ 雛形（仮置き）ページ。料金・納期・要件はユーザー確定待ち。
// PRC = Philippine Professional Regulation Commission（フィリピン専門資格委員会）発行の
// 資格・免許証明書。非PSA書類のため、DFA物理アポスティーユは継続利用可能。
// TODO: 料金（PRICE_TODO）・納期・対象書類の正式確定後に本文を更新する。
const PRICE_TODO = '¥39,000〜（仮）';

export default function PrcApostilleJa() {
  useMeta(
    'PRC証明書 アポスティーユ取得代行｜専門資格・免許の認証【IGRS】',
    'PRC（フィリピン専門資格委員会）発行の資格・免許証明書のDFA物理アポスティーユ取得・国際発送を代行。帰化申請・海外就労・資格の海外承認に。非PSA書類のため物理アポスティーユに対応します。',
  );

  return (
    <PageLayout
      breadcrumbs={[
        { label: 'ホーム', href: '/ja/' },
        { label: '料金', href: '/ja/ryokin/' },
        { label: 'PRC証明書アポスティーユ代行' },
      ]}
      jsonLd={[{
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
      }]}
    >
      <HeroBanner
        title="PRC証明書 アポスティーユ取得代行"
        subtitle="PRC（フィリピン専門資格委員会）発行の資格・免許証明書のDFA物理アポスティーユ取得・国際発送を代行します。"
        badges={[`${PRICE_TODO}`, 'DFA物理アポスティーユ対応', 'DHL国際発送']}
        ctaText="PRC証明書について相談する"
        ctaHref="#contact"
        ctaService="PRC証明書アポスティーユ代行"
        lastUpdated="2026年7月13日"
      />

      {/* 重要な区別（PSAとの違い） */}
      <section className="mb-10">
        <div className="rounded-xl border border-blue-100 bg-blue-50/60 p-5 flex gap-3">
          <FileCheck className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-bold text-gray-800 mb-2">PRCは「非PSA書類」——物理アポスティーユに対応できます</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              2026年3月以降、<strong>PSA民事書類（出生・婚姻・CENOMAR等）はDFA e-Apostille（電子）に一本化</strong>されましたが、
              <strong>PRC発行の資格・免許証明書は非PSA書類のため、引き続きDFAの物理アポスティーユ（紙）を取得できます。</strong>
              紙の原本＋物理アポスティーユが必要な提出先にも対応可能です。
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
        heading="代行の流れ（仮）"
        steps={[
          {
            title: '必要書類の確認',
            description: '申請目的（帰化・海外就労・資格承認など）に合わせて、どのPRC書類が必要かを確認します。※対象書類は確定後に更新します。',
          },
          {
            title: 'PRC証明書の取得',
            description: 'PRC発行の証明書を取得します（本人手続きが必要な場合は、取得後に原本をIGRS宛へ転送いただきます）。',
          },
          {
            title: 'DFA物理アポスティーユ取得',
            description: 'PRC証明書は非PSA書類のため、DFAの物理アポスティーユ（紙）を取得します。',
          },
          {
            title: 'DHL国際発送',
            description: 'アポスティーユ付きのPRC証明書原本を、追跡付きでお届けします。納期の目安は約4〜6週間（仮）。',
          },
        ]}
      />

      {/* 料金（仮置き） */}
      <section className="mb-10">
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 flex gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-bold text-gray-800 mb-2">料金：{PRICE_TODO}</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              ※ 本ページは雛形です。対象書類・料金・納期は確定後に更新します。正式なお見積もりはお問い合わせください。
            </p>
          </div>
        </div>
      </section>

      <CtaBox
        title="PRC証明書のアポスティーユを相談する"
        description="どのPRC書類が必要か、提出先が求める形式（紙原本・物理アポスティーユ）も含めて、まずは無料でご相談ください。"
        buttonText="無料で相談する"
        href="#contact"
        variant="primary"
        trustNote="相談・見積もり無料"
        service="PRC証明書アポスティーユ代行"
      />
    </PageLayout>
  );
}
