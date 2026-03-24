import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import SummaryBlock from '../components/SummaryBlock';
import CtaBox from '../components/CtaBox';
import FaqSection from '../components/FaqSection';
import StepList from '../components/StepList';
import { Building2, Scale, Briefcase, ArrowRight, CheckCircle, ShieldCheck } from 'lucide-react';
import { useMeta } from '../lib/useMeta';

const segments = [
  {
    icon: Building2,
    title: '登録支援機関の方',
    description: '特定技能外国人の在留資格申請に必要なフィリピン書類を一括代行。複数案件の同時進行にも対応します。',
    href: '/ja/business/touroku-shien-kikan/',
  },
  {
    icon: Scale,
    title: '行政書士の方',
    description: '国際結婚・配偶者ビザ・帰化申請の案件で必要なCENOMAR・PSA・NBI・DFAアポスティーユを代行取得。',
    href: '/ja/business/gyoseishoshi/',
  },
  {
    icon: Briefcase,
    title: 'フィリピン人材を雇用する企業の方',
    description: '技能実習生・特定技能人材の在留資格手続きに必要なフィリピン書類の取得を代行します。',
    href: '/ja/business/kigyou/',
  },
];

export default function BusinessHomeJa() {
  useMeta(
    '法人・業務利用の方へ｜フィリピン書類取得代行センター',
    '登録支援機関・行政書士・企業向けのフィリピン書類取得代行。CENOMAR・PSA・NBI・DFAアポスティーユを一括代行。継続案件のボリューム割引・請求書払い対応。',
  );

  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: '法人の方へ' }]}
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: '法人・業務利用向けフィリピン書類取得代行',
        description: '登録支援機関・行政書士・企業向けのフィリピン書類取得代行サービス。CENOMAR・PSA・NBI・DFAアポスティーユを一括代行。',
        url: 'https://ph-document.com/ja/business/',
        provider: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/ja/',
        },
        areaServed: { '@type': 'Country', name: 'JP' },
      }}
    >
      <HeroBanner
        title="法人の方へ"
        subtitle="登録支援機関・行政書士・企業の皆さまへ。フィリピン書類の取得代行を、案件単位でも継続的にもご利用いただけます。"
        badges={['請求書払い対応', '複数案件の同時進行可', '進捗レポート']}
      />

      <SummaryBlock
        conclusion="フィリピン現地の書類取得を、日本語だけで完結できます。"
        points={[
          'CENOMAR・PSA出生証明書・NBI Clearance・DFAアポスティーユに対応',
          '案件ごとの進捗報告・連絡窓口の一本化',
          '複数件・継続案件は料金についてご相談いただけます',
          '請求書払い（月末締め翌月払い等）に対応可能',
        ]}
      />

      {/* セグメントカード */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary tracking-tight">業種別のご案内</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {segments.map((seg) => (
            <Link
              key={seg.href}
              to={seg.href}
              className="group flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-card hover:border-primary/40 hover:shadow-md transition-all"
            >
              <seg.icon className="w-8 h-8 text-primary" />
              <h3 className="text-base font-bold text-secondary group-hover:text-primary transition-colors">{seg.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-1">{seg.description}</p>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:gap-2 transition-all">
                詳しく見る <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 法人対応の特徴 */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary tracking-tight">法人対応の特徴</h2>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {[
            { title: '案件ごとの進捗レポート', desc: '受理・取得・発送の各段階でご報告。クライアントへの説明にもお使いいただけます。' },
            { title: '請求書払い対応', desc: '月末締め翌月払い等、貴社の経理フローに合わせた請求に対応します。' },
            { title: '複数案件の同時進行', desc: '複数名分の書類を並行して手配。案件ごとの管理番号で進捗を整理します。' },
            { title: '倫理審査・稟議用の料金資料', desc: '社内審査やコンプライアンス確認に必要な料金表・見積書を発行します。' },
          ].map((item) => (
            <div key={item.title} className="flex gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-secondary mb-1">{item.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 参考料金 */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary tracking-tight">参考料金（税抜）</h2>
        </div>
        <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-white to-secondary/5 overflow-hidden">
          <div className="h-1 w-full bg-gradient-to-r from-primary via-primary/70 to-transparent" />
          <div className="p-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 text-secondary font-bold">書類</th>
                  <th className="text-right py-2 text-secondary font-bold">単発</th>
                  <th className="text-right py-2 text-secondary font-bold">複数・継続案件</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-3 text-gray-700">CENOMAR + DFAアポスティーユ</td>
                  <td className="py-3 text-right font-semibold text-secondary">¥55,000〜</td>
                  <td className="py-3 text-right font-semibold text-primary">要相談</td>
                </tr>
                <tr>
                  <td className="py-3 text-gray-700">PSA出生証明書 + DFAアポスティーユ</td>
                  <td className="py-3 text-right font-semibold text-secondary">¥55,000〜</td>
                  <td className="py-3 text-right font-semibold text-primary">要相談</td>
                </tr>
                <tr>
                  <td className="py-3 text-gray-700">NBI Clearance（更新案件）</td>
                  <td className="py-3 text-right font-semibold text-secondary">¥50,000〜</td>
                  <td className="py-3 text-right font-semibold text-primary">要相談</td>
                </tr>
                <tr>
                  <td className="py-3 text-gray-700">LTO運転経歴証明書 + DFAアポスティーユ</td>
                  <td className="py-3 text-right font-semibold text-secondary">¥120,000〜</td>
                  <td className="py-3 text-right font-semibold text-primary">要相談</td>
                </tr>
              </tbody>
            </table>
            <div className="mt-4 space-y-1">
              <p className="text-xs text-gray-500 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                複数件・継続案件の料金はお問い合わせください
              </p>
              <p className="text-xs text-gray-500 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                DHL国際郵送費は実費別途
              </p>
              <p className="text-xs text-gray-500 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                正式なお見積りはヒアリング後にご提示します
              </p>
            </div>
          </div>
        </div>
      </section>

      <StepList
        heading="ご依頼の流れ"
        steps={[
          { title: 'お問い合わせ', description: '必要な書類の種類・件数・納期をお知らせください。' },
          { title: 'お見積り・ご契約', description: '案件内容に応じたお見積りをご提示します。継続案件の場合は包括契約も可能です。' },
          { title: '必要情報のご提供', description: '対象者の情報・委任状等をご提出いただきます。' },
          { title: '取得・進捗報告', description: 'フィリピン現地で書類を取得。各段階でメールにて進捗をご報告します。' },
          { title: '原本発送', description: 'DHL国際宅配便で日本のご指定先へ発送します。' },
        ]}
      />

      <CtaBox
        title="まずはお気軽にご相談ください"
        description="必要な書類・件数・納期をお知らせいただければ、お見積りをご提示します。倫理審査・社内稟議用の料金資料もご用意できます。"
        buttonText="法人のお問い合わせ"
        href="#contact"
        variant="primary"
        trustNote="初回相談無料・秘密厳守"
      />

      <FaqSection
        items={[
          {
            q: 'B2Cの個人向けサービスと何が違いますか？',
            a: '法人向けでは、案件ごとの進捗レポート、請求書払い対応、複数案件の同時進行管理、倫理審査用の料金資料発行に対応しています。対応する書類の種類は個人向けと同じです。',
          },
          {
            q: '継続案件の割引はありますか？',
            a: 'はい。複数件・継続案件の場合は件数や頻度に応じてご相談いただけます。まずはお問い合わせください。',
          },
          {
            q: '請求書払いは可能ですか？',
            a: '法人のお客さまには請求書払いに対応しています。月末締め翌月払い等、貴社の経理フローに合わせてご相談いただけます。',
          },
          {
            q: '倫理審査や社内稟議に使える資料はありますか？',
            a: 'ご依頼内容に応じた見積書・料金表を発行します。倫理審査やコンプライアンス確認にお使いいただけます。',
          },
          {
            q: '対応エリアはどこですか？',
            a: 'フィリピン現地（PSA・DFA・NBI等）での書類取得を代行し、DHL国際宅配便で日本全国へ発送します。',
          },
        ]}
      />
    </PageLayout>
  );
}
