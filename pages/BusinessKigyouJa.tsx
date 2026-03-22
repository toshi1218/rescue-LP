import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import SummaryBlock from '../components/SummaryBlock';
import CtaBox from '../components/CtaBox';
import FaqSection from '../components/FaqSection';
import IconCardGrid from '../components/IconCardGrid';
import StepList from '../components/StepList';
import { FileCheck, Clock, ShieldCheck, AlertTriangle, Users, Building2 } from 'lucide-react';
import { useMeta } from '../lib/useMeta';

export default function BusinessKigyouJa() {
  useMeta(
    '企業向け フィリピン人材の書類取得代行｜技能実習・特定技能対応',
    '技能実習生・特定技能人材を雇用する企業向け。在留資格申請に必要なフィリピン書類（PSA・CENOMAR・NBI・DFAアポスティーユ）を一括代行。倫理審査用の料金資料あり。',
  );

  return (
    <PageLayout
      breadcrumbs={[
        { label: 'ホーム', href: '/ja/' },
        { label: '法人の方へ', href: '/ja/business/' },
        { label: '企業の方' },
      ]}
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: '企業向けフィリピン書類取得代行',
        description: '技能実習生・特定技能人材の在留資格申請に必要なフィリピン書類を一括代行。倫理審査用の料金資料発行にも対応。',
        url: 'https://ph-document.com/ja/business/kigyou/',
        provider: { '@type': 'Organization', name: 'IGRS Inc.', url: 'https://ph-document.com/ja/' },
        areaServed: { '@type': 'Country', name: 'JP' },
      }}
    >
      <HeroBanner
        title="フィリピン人材を雇用する企業の方へ"
        subtitle="技能実習生・特定技能人材の在留資格申請に必要なフィリピン書類を、日本語だけで一括手配します。"
        badges={['倫理審査用の料金資料あり', '複数名分の一括対応', '請求書払い対応']}
        lastUpdated="2026年3月1日"
      />

      <SummaryBlock
        conclusion="フィリピン人材の在留資格手続きに必要な書類を、現地に行かずに取得できます。"
        points={[
          'PSA出生証明書・CENOMAR・NBI Clearance・DFAアポスティーユに対応',
          '複数名分の書類を並行して手配可能',
          '倫理審査・社内稟議に使える料金表・見積書を発行',
          '案件ごとの進捗をメールでご報告',
        ]}
      />

      <IconCardGrid
        heading="企業のよくある課題"
        columns={3}
        cards={[
          {
            icon: AlertTriangle,
            title: '書類手配に時間がかかる',
            description: 'フィリピン現地での取得手続きが複雑で、入社時期に書類が間に合わないリスクがある。',
            accent: 'gold',
          },
          {
            icon: ShieldCheck,
            title: '倫理審査を通す必要がある',
            description: '技能実習生の受入れでは、外部委託費用について倫理委員会の審査が必要。料金の目安がないと通らない。',
            accent: 'blue',
          },
          {
            icon: Users,
            title: '複数名分を同時に手配したい',
            description: '一度に複数のフィリピン人材を受け入れる場合、書類取得の手配が煩雑になる。',
            accent: 'green',
          },
        ]}
      />

      {/* 倫理審査対応 */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary tracking-tight">倫理審査・社内稟議への対応</h2>
        </div>
        <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-white to-secondary/5 p-6">
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            技能実習生の受入れに関わる外部委託費用は、倫理審査やコンプライアンス確認が求められる場合があります。当センターでは以下の書類をご用意できます。
          </p>
          <div className="grid gap-3 md:grid-cols-2">
            {[
              { title: '料金表', desc: '書類種別ごとの参考価格を記載した料金表を発行します。' },
              { title: '見積書', desc: '案件内容に応じた正式な見積書を発行します。社名・宛先の指定可能。' },
              { title: '業務内容説明書', desc: 'サービス内容・対応範囲を説明した資料をご用意します。' },
              { title: '実績報告書', desc: '過去の対応件数や対応書類の種類をまとめた資料を作成可能です。' },
            ].map((item) => (
              <div key={item.title} className="flex gap-3">
                <FileCheck className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-bold text-secondary">{item.title}</p>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
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
                  <th className="text-right py-2 text-secondary font-bold">月3件〜</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-3 text-gray-700">PSA出生証明書 + DFAアポスティーユ</td>
                  <td className="py-3 text-right font-semibold text-secondary">¥55,000〜</td>
                  <td className="py-3 text-right font-semibold text-primary">¥48,000〜</td>
                </tr>
                <tr>
                  <td className="py-3 text-gray-700">CENOMAR + DFAアポスティーユ</td>
                  <td className="py-3 text-right font-semibold text-secondary">¥55,000〜</td>
                  <td className="py-3 text-right font-semibold text-primary">¥48,000〜</td>
                </tr>
                <tr>
                  <td className="py-3 text-gray-700">NBI Clearance（更新案件）</td>
                  <td className="py-3 text-right font-semibold text-secondary">¥50,000〜</td>
                  <td className="py-3 text-right font-semibold text-primary">要相談</td>
                </tr>
              </tbody>
            </table>
            <div className="mt-4 space-y-1">
              <p className="text-xs text-gray-500 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                月10件以上の継続案件は別途お見積り
              </p>
              <p className="text-xs text-gray-500 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                倫理審査用の正式な料金資料をご用意できます
              </p>
            </div>
          </div>
        </div>
      </section>

      <StepList
        heading="ご依頼の流れ"
        steps={[
          { title: 'お問い合わせ', description: '受入れ予定人数・必要書類・希望時期をお知らせください。' },
          { title: '料金資料・お見積り', description: '倫理審査用の料金資料やお見積書をご提示します。' },
          { title: '対象者情報のご提供', description: '受入れ予定者の情報（氏名・生年月日等）と委任状をいただきます。' },
          { title: '書類取得・進捗報告', description: 'フィリピン現地で書類を取得。進捗は随時メールでご報告します。' },
          { title: '原本発送・請求書発行', description: 'DHL国際宅配便で貴社へ発送。請求書払いにも対応します。' },
        ]}
      />

      <CtaBox
        title="まずは受入れ予定の状況をお聞かせください"
        description="必要な書類・人数・時期をお知らせいただければ、倫理審査用の料金資料を含めてご案内します。"
        buttonText="法人のお問い合わせ"
        href="#contact"
        variant="primary"
        trustNote="初回相談無料・倫理審査用の料金資料あり"
      />

      <FaqSection
        items={[
          {
            q: '倫理審査に使える料金資料をもらえますか？',
            a: 'はい。書類種別ごとの参考価格を記載した料金表や、案件に応じた正式な見積書を発行します。社名・宛先の指定も可能です。',
          },
          {
            q: '技能実習と特定技能で必要な書類は違いますか？',
            a: '在留資格の種類や入管の求める書類は案件ごとに異なります。お問い合わせいただければ、必要書類の確認からお手伝いします。',
          },
          {
            q: '入社時期に合わせて書類を揃えられますか？',
            a: '希望時期をお知らせいただければ、逆算して取得スケジュールをご提案します。お急ぎの場合はExpedited処理の選択肢もあります。',
          },
          {
            q: '監理団体経由でも依頼できますか？',
            a: 'はい。監理団体・登録支援機関・企業いずれからのご依頼にも対応しています。請求先・発送先を別々に指定することも可能です。',
          },
        ]}
      />
    </PageLayout>
  );
}
