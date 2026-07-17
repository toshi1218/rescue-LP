import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import SummaryBlock from '../components/SummaryBlock';
import CtaBox from '../components/CtaBox';
import FaqSection from '../components/FaqSection';
import IconCardGrid from '../components/IconCardGrid';
import StepList from '../components/StepList';
import { FileCheck, Clock, Scale, ShieldCheck, AlertTriangle, Globe } from 'lucide-react';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR_MONTH_JA } from '../lib/seoDate';

export default function BusinessGyoseishoshiJa() {
  useMeta(
    `行政書士向け フィリピン書類取得代行｜国際結婚・配偶者ビザ・帰化申請対応【${SEO_YEAR_MONTH_JA}】`,
    '行政書士向けのフィリピン書類取得代行。国際結婚・配偶者ビザ・帰化申請に必要なCENOMAR・PSA・NBI・DFAアポスティーユを日本語で一括手配。案件ごとの進捗報告・継続割引あり。',
  );

  return (
    <PageLayout
      breadcrumbs={[
        { label: 'ホーム', href: '/ja/' },
        { label: '法人の方へ', href: '/ja/business/' },
        { label: '行政書士の方' },
      ]}
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: '行政書士向けフィリピン書類取得代行',
        description: '国際結婚・配偶者ビザ・帰化申請に必要なCENOMAR・PSA・NBI・DFAアポスティーユを一括代行。案件ごとの進捗報告付き。',
        url: 'https://ph-document.com/ja/business/gyoseishoshi/',
        provider: { '@type': 'Organization', name: 'IGRS Inc.', url: 'https://ph-document.com/ja/' },
        areaServed: { '@type': 'Country', name: 'JP' },
      }}
    >
      <HeroBanner
        title="行政書士の方へ"
        subtitle="国際結婚・配偶者ビザ・帰化申請に必要なフィリピン書類を、先生の案件に合わせて一括代行します。"
        badges={['案件ごとの進捗報告', '継続割引あり', '紙の原本アポスティーユ対応']}
        lastUpdated="2026年3月1日"
      />

      <SummaryBlock
        conclusion="先生のクライアント案件に必要なフィリピン書類を、日本語だけで取得できます。"
        points={[
          'CENOMAR・PSA出生証明書・PSA婚姻証明書・NBI・DFAアポスティーユに対応',
          '入管・市区町村役場・裁判所が求める「紙の原本アポスティーユ」形式で手配',
          '案件ごとの進捗を受理・取得・発送の各段階でご報告',
          '継続的にご依頼いただく場合はボリュームディスカウントを適用',
        ]}
      />

      <IconCardGrid
        heading="行政書士のよくある課題"
        columns={3}
        cards={[
          {
            icon: AlertTriangle,
            title: '提出先ごとに求められる形式が異なる',
            description: '入管・役所・裁判所で原本アポスティーユの要否や書類の種類が変わる。',
            accent: 'gold',
          },
          {
            icon: Clock,
            title: 'クライアントの期限に間に合わせたい',
            description: '在留資格の更新期限や婚姻届の提出時期に合わせて書類を揃える必要がある。',
            accent: 'blue',
          },
          {
            icon: Globe,
            title: 'フィリピン現地のやり取りが負担',
            description: 'PSA・DFA・NBIへの申請を自社で手配するのは言語面・手続き面で難しい。',
            accent: 'green',
          },
        ]}
      />

      {/* 対応案件例 */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary tracking-tight">対応案件の例</h2>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {[
            { title: '国際結婚（日本先行婚）', desc: 'CENOMAR + DFAアポスティーユ、PSA出生証明書の取得。市区町村役場への提出に対応。' },
            { title: '配偶者ビザ申請', desc: 'PSA書類 + DFAアポスティーユを「紙の原本」形式で手配。入管の求める形式に対応。' },
            { title: '帰化申請', desc: 'CENOMAR・PSA出生証明書・PSA婚姻証明書のDFAアポスティーユ付き取得。法務局提出用。' },
            { title: '在留資格更新・変更', desc: '在留資格の更新時に追加で求められるフィリピン書類の取得にも対応します。' },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
              <p className="text-sm font-bold text-secondary mb-1">{item.title}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
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
                  <td className="py-3 text-gray-700">PSA婚姻証明書 + DFAアポスティーユ</td>
                  <td className="py-3 text-right font-semibold text-secondary">¥55,000〜</td>
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
          { title: '案件のご相談', description: 'クライアントの状況・必要書類・提出先・希望納期をお知らせください。' },
          { title: 'お見積り', description: '案件内容に応じた料金をご提示します。提出先の要件に合う書類形式もご確認します。' },
          { title: '委任状・本人情報のご提供', description: 'クライアントの本人情報と委任状をいただき、取得手続きを開始します。' },
          { title: '取得完了・進捗報告', description: '受理・取得・発送の各段階でメールにてご報告。クライアントへの説明にもお使いいただけます。' },
          { title: '原本発送', description: 'DHL国際宅配便で先生のご指定先へ発送します。' },
        ]}
      />

      <CtaBox
        title="案件のご相談はお気軽に"
        description="クライアントの状況をお聞かせいただければ、必要書類の確認からお見積りまでご案内します。"
        buttonText="法人のお問い合わせ"
        href="#contact"
        variant="primary"
        trustNote="初回相談無料・秘密厳守・守秘義務対応"
      />

      <FaqSection
        items={[
          {
            q: '提出先に合う書類形式を確認してもらえますか？',
            a: 'はい。入管・市区町村役場・裁判所など、提出先に応じて必要な書類の種類・アポスティーユの要否を確認したうえで手配します。',
          },
          {
            q: '先生から直接クライアントへ発送できますか？',
            a: '原本の発送先は先生の事務所でもクライアントのご住所でも指定可能です。',
          },
          {
            q: '帰化申請で法務局が求める書類に対応していますか？',
            a: 'CENOMAR・PSA出生証明書・PSA婚姻証明書のDFAアポスティーユ付き取得に対応しています。法務局から求められる書類をお知らせいただければ、対応可否をご確認します。',
          },
          {
            q: 'クライアントへの説明用の資料はありますか？',
            a: '進捗レポートをメールでお送りしますので、クライアントへの説明にそのままお使いいただけます。',
          },
        ]}
      />
    </PageLayout>
  );
}
