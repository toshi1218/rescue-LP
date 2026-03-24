import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import SummaryBlock from '../components/SummaryBlock';
import CtaBox from '../components/CtaBox';
import FaqSection from '../components/FaqSection';
import IconCardGrid from '../components/IconCardGrid';
import StepList from '../components/StepList';
import { FileCheck, Clock, Globe, Users, ShieldCheck, AlertTriangle } from 'lucide-react';
import { useMeta } from '../lib/useMeta';

export default function BusinessTourokushienJa() {
  useMeta(
    '登録支援機関向け フィリピン書類取得代行｜CENOMAR・PSA・NBI一括対応',
    '登録支援機関向けのフィリピン書類取得代行。特定技能外国人の在留資格申請に必要なCENOMAR・PSA出生証明書・NBI・DFAアポスティーユを日本語で一括手配。複数案件同時対応・進捗報告。',
  );

  return (
    <PageLayout
      breadcrumbs={[
        { label: 'ホーム', href: '/ja/' },
        { label: '法人の方へ', href: '/ja/business/' },
        { label: '登録支援機関の方' },
      ]}
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: '登録支援機関向けフィリピン書類取得代行',
        description: '特定技能外国人の在留資格申請に必要なCENOMAR・PSA・NBI・DFAアポスティーユを一括代行。複数案件の同時進行対応。',
        url: 'https://ph-document.com/ja/business/touroku-shien-kikan/',
        provider: { '@type': 'Organization', name: 'IGRS Inc.', url: 'https://ph-document.com/ja/' },
        areaServed: { '@type': 'Country', name: 'JP' },
      }}
    >
      <HeroBanner
        title="登録支援機関の方へ"
        subtitle="特定技能外国人の在留資格申請に必要なフィリピン書類を、日本語だけで一括手配できます。"
        badges={['複数案件の同時進行', '進捗レポート付き', '請求書払い対応']}
        lastUpdated="2026年3月1日"
      />

      <SummaryBlock
        conclusion="特定技能の在留資格申請に必要なフィリピン書類を、現地に行かずに取得できます。"
        points={[
          'CENOMAR・PSA出生証明書・NBI Clearance・DFAアポスティーユに対応',
          '複数名分の書類を並行して手配可能',
          '受理・取得・発送の各段階でメール報告',
          '複数件・継続案件は料金についてご相談いただけます',
        ]}
      />

      <IconCardGrid
        heading="登録支援機関のよくある課題"
        columns={3}
        cards={[
          {
            icon: AlertTriangle,
            title: 'フィリピン現地の手続きが分からない',
            description: 'PSA・DFA・NBIへの申請手順や必要書類が複雑で、自社で手配するのが難しい。',
            accent: 'gold',
          },
          {
            icon: Clock,
            title: '複数案件を同時に進めたい',
            description: '特定技能人材の在留資格申請が重なると、書類取得が間に合わないリスクがある。',
            accent: 'blue',
          },
          {
            icon: Users,
            title: '日本語だけで完結したい',
            description: 'フィリピン現地とのやり取りを日本語で完結させたい。英語やタガログ語での連絡は負担。',
            accent: 'green',
          },
        ]}
      />

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
              </tbody>
            </table>
            <p className="mt-4 text-xs text-gray-500 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              複数件・継続案件の料金はお問い合わせください・DHL国際郵送費は実費別途
            </p>
          </div>
        </div>
      </section>

      <StepList
        heading="ご依頼の流れ"
        steps={[
          { title: 'お問い合わせ', description: '必要な書類の種類・対象者の人数・希望納期をお知らせください。' },
          { title: 'お見積り', description: '案件内容に応じた料金をご提示します。継続案件の場合は包括契約も可能です。' },
          { title: '対象者情報のご提供', description: '対象者の情報（氏名・生年月日等）と委任状をご提出いただきます。' },
          { title: '書類取得・進捗報告', description: 'フィリピン現地で書類を取得。受理・取得・発送の各段階でメールにてご報告します。' },
          { title: '原本発送・請求書発行', description: 'DHL国際宅配便で発送。請求書払いの場合は月末締めで請求書を発行します。' },
        ]}
      />

      <CtaBox
        title="まずは案件内容をお聞かせください"
        description="必要な書類・人数・納期をお知らせいただければ、お見積りをご提示します。"
        buttonText="法人のお問い合わせ"
        href="#contact"
        variant="primary"
        trustNote="初回相談無料・秘密厳守"
      />

      <FaqSection
        items={[
          {
            q: '特定技能の在留資格申請にはどの書類が必要ですか？',
            a: '一般的にはPSA出生証明書とDFAアポスティーユが必要になることが多いですが、入管の求める書類は案件や時期によって異なります。必要書類の確認からお手伝いしますので、まずはご相談ください。',
          },
          {
            q: '複数名分をまとめて依頼できますか？',
            a: 'はい。複数名分の書類を並行して手配できます。案件ごとに管理番号を付けて進捗を整理しますので、貴機関側での管理も容易です。',
          },
          {
            q: '取得までの期間はどのくらいですか？',
            a: '書類の種類やフィリピン現地の処理状況により変わりますが、一般的に1ヶ月〜を目安としています。お急ぎの場合はExpedited処理の選択肢もあります。',
          },
          {
            q: '請求書払いは可能ですか？',
            a: '法人のお客さまには請求書払い（月末締め翌月払い等）に対応しています。経理フローに合わせてご相談ください。',
          },
        ]}
      />
    </PageLayout>
  );
}
