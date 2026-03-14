import React from 'react';
import PageLayout from '../components/PageLayout';
import Pricing from '../components/Pricing';
import StepList from '../components/StepList';
import CtaBox from '../components/CtaBox';
import { useMeta } from '../lib/useMeta';

export default function PricingJa() {
  useMeta(
    '料金案内｜フィリピン書類取得代行の費用と2段階決済｜IGRS',
    'PSA・NBI・LTO等のフィリピン書類取得代行の料金案内。着手金50%・書類写し確認後残金50%の2段階決済で安心して依頼できます。',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: '料金案内' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'フィリピン書類取得代行',
        description: 'PSA・NBI・LTO等のフィリピン書類取得代行サービス。着手金50%・書類写し確認後残金50%の2段階決済。',
        url: 'https://ph-document.com/ja/ryokin',
        provider: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/ja/',
        },
        areaServed: { '@type': 'Country', name: 'JP' },
      }]}
    >
      <article className="max-w-2xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-2 leading-snug">
          料金は、用途別に分かる形でご案内します
        </h1>

        <p className="text-gray-500 mb-6">
          国際結婚準備、配偶者ビザ準備、外免切替など、目的に合わせた費用感を先にご確認いただけます。
        </p>

        <p className="text-gray-700 leading-relaxed mb-8">
          株式会社IGRSの料金は、単に書類を取るための費用ではありません。必要書類の確認、現地申請、進捗確認、アポスティーユ対応、日本語でのご案内まで含めた、見通しを立てながら進めるための料金設計です。料金は書類の種類、部数、認証の有無、発送先などで変わるため、まずは無料でお見積もりをご案内します。
        </p>

        {/* 価格アンカー */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">料金の目安</h2>
          <div className="rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-bold text-gray-700">サービス</th>
                  <th className="text-right px-4 py-3 font-bold text-gray-700">目安</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'PSA書類関連', price: '50,000円〜' },
                  { label: 'NBI更新関連', price: '55,000円〜' },
                  { label: 'LTO関連', price: '100,000円〜' },
                  { label: '国際郵送費', price: '6,000円〜' },
                ].map((row, i, arr) => (
                  <tr key={row.label} className={i < arr.length - 1 ? 'border-b border-gray-100' : ''}>
                    <td className="px-4 py-3 text-gray-700">{row.label}</td>
                    <td className="px-4 py-3 text-right font-bold text-gray-900">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            ※いずれも税別。内容や追加確認の有無で変動します。
          </p>
        </section>

        {/* この料金に含まれるもの */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">この料金に含まれるもの</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            公的手数料だけでなく、必要書類の確認、現地申請、進捗確認、アポスティーユ対応、日本語でのご案内を含みます。
          </p>
          <p className="text-gray-700 leading-relaxed">
            一方で、翻訳、日本の役所や入管への提出代行、行政書士・弁護士業務、審査結果の保証は含まれません。
          </p>
        </section>
      </article>

      {/* 2段階決済 */}
      <StepList
        heading="2段階決済の流れ"
        steps={[
          {
            title: '無料お見積もり',
            description: '必要書類とご希望内容を確認し、無料でお見積もりをお出しします。',
          },
          {
            title: '着手金50%のご入金',
            description: '内容に問題がなければ、着手金として総額の50%をご入金いただきます。着金確認後に手続きを開始します。',
          },
          {
            title: '書類写しのご確認',
            description: '書類取得が完了した段階で、写し（写真またはPDF）をご確認いただきます。',
          },
          {
            title: '残金50%のご入金・発送',
            description: '内容に問題がなければ、残額50%をご入金いただきます。残金確認後に原本を発送します。',
          },
        ]}
      />

      <CtaBox
        title="まずは無料でお見積もり"
        description="書類の種類・部数・認証の有無・発送先をお知らせください。見通しのある料金をご案内します。"
        buttonText="用途別の料金を見る"
        href="#contact"
        variant="primary"
        trustNote="追加費用が出る場合は事前にご相談します"
      />

      {/* 既存の詳細価格テーブル */}
      <Pricing />
    </PageLayout>
  );
}
