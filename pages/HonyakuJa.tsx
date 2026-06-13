import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import StepList from '../components/StepList';
import CtaBox from '../components/CtaBox';
import { useMeta } from '../lib/useMeta';
import { CheckCircle, AlertTriangle, ArrowRight, FileText, Globe, Stamp, Clock } from 'lucide-react';

export default function HonyakuJa() {
  useMeta(
    'フィリピン書類の日本語翻訳サービス｜1部¥7,700（税込）〜【IGRS】',
    'PSA出生証明書・婚姻証明書・CENOMAR・NBI Clearanceなどフィリピンの公的書類を日本語に翻訳。役所・出入国在留管理庁・法務局への提出に対応。1部¥7,700（税込）、2部目以降は半額¥3,850（税込）。お急ぎ便あり。',
  );

  return (
    <PageLayout
      breadcrumbs={[
        { label: 'ホーム', href: '/ja/' },
        { label: '料金', href: '/ja/ryokin/' },
        { label: 'フィリピン書類の日本語翻訳' },
      ]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'フィリピン書類の日本語翻訳サービス',
        description: 'PSA出生証明書・婚姻証明書・CENOMAR・NBI Clearanceなどフィリピンの公的書類（英語）を日本語に翻訳。役所・出入国在留管理庁・法務局への提出に対応。',
        url: 'https://ph-document.com/ja/honyaku/',
        provider: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/ja/',
        },
        areaServed: { '@type': 'Country', name: 'JP' },
        offers: [
          {
            '@type': 'Offer',
            name: '1部目（1枚）',
            price: '7700',
            priceCurrency: 'JPY',
            description: '税込価格（税抜 ¥7,000）',
          },
          {
            '@type': 'Offer',
            name: '2部目以降（1枚あたり）',
            price: '3850',
            priceCurrency: 'JPY',
            description: '税込価格（税抜 ¥3,500・半額）',
          },
        ],
      }]}
    >
      <HeroBanner
        title="フィリピン書類の日本語翻訳"
        subtitle="PSA出生証明書・婚姻証明書・CENOMAR・NBI Clearanceなど、フィリピンの公的書類を日本語に翻訳します。役所・入管・法務局への提出にご利用いただけます。"
        badges={['1部 ¥7,700（税込）', '納期 5営業日以内', '2部目以降は半額', 'お急ぎ便 +¥2,500']}
        ctaText="翻訳を相談する"
        ctaHref="#contact"
        ctaService="日本語翻訳"
        lastUpdated="2026年6月13日"
      />

      {/* こんな方に向いています */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary">こんな方に向いています</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { icon: FileText, text: 'フィリピンの英語書類を、役所や入管に日本語訳付きで提出したい' },
            { icon: Globe, text: '配偶者ビザ・帰化申請・婚姻届の手続きで日本語訳を求められた' },
            { icon: Stamp, text: 'PSA出生証明書・婚姻証明書・CENOMAR・NBIの翻訳が必要' },
            { icon: Clock, text: '提出期限が近く、急いで日本語訳を用意したい' },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
              <Icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 対応書類 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary">翻訳に対応している書類</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {[
            'PSA出生証明書（Birth Certificate）',
            'PSA婚姻証明書（Marriage Certificate）',
            'CENOMAR（独身証明書）',
            'NBI Clearance（無犯罪証明書）',
            '婚姻記録不存在証明（Advisory on Marriages）',
            '離婚・婚姻無効判決（Annulment / Court Decision）',
            '死亡証明書（Death Certificate）',
            'その他フィリピン発行の公的書類',
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 rounded-lg border border-gray-100 bg-white px-4 py-3 shadow-sm">
              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-sm text-gray-700">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-3">
          ※ 上記以外の書類も翻訳できる場合があります。お持ちの書類の種類をお知らせください。
        </p>
      </section>

      {/* 料金 */}
      <section className="mb-10">
        <div className="rounded-2xl border border-primary/20 bg-primary/[0.03] p-6">
          <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">翻訳料金</p>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-4xl font-extrabold text-primary">¥7,700</span>
            <span className="text-sm text-gray-500">〜（1部・税込）</span>
          </div>
          <p className="text-xs text-gray-400 mb-5">税抜 ¥7,000 ＋ 消費税 ¥700</p>

          <div className="space-y-2.5 mb-5">
            <div className="flex items-center justify-between rounded-lg bg-white border border-gray-100 px-4 py-3">
              <span className="text-sm text-gray-700">1部目（1枚）</span>
              <span className="text-sm font-bold text-secondary">¥7,000（税抜）／ <span className="text-primary">¥7,700（税込）</span></span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-white border border-gray-100 px-4 py-3">
              <span className="text-sm text-gray-700">2部目以降（1枚ごと）<span className="ml-1.5 inline-block rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-bold text-primary">半額</span></span>
              <span className="text-sm font-bold text-secondary">¥3,500（税抜）／ <span className="text-primary">¥3,850（税込）</span></span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-amber-50 border border-amber-200 px-4 py-3">
              <span className="text-sm text-gray-700">お急ぎ便（5営業日より早く）</span>
              <span className="text-sm font-bold text-amber-700">+¥2,500</span>
            </div>
          </div>

          <div className="flex items-start gap-2 rounded-lg bg-secondary/5 border border-secondary/10 px-4 py-3 mb-5">
            <Clock className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold text-secondary">納期は5営業日以内</span>が目安です。これより早くご希望の場合は、お急ぎ便（+¥2,500）で対応します。
            </p>
          </div>

          <div className="rounded-lg bg-white border border-gray-100 p-4 mb-5">
            <p className="text-xs font-bold text-gray-500 mb-2">料金例（税込）</p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li className="flex justify-between"><span>1枚</span><span className="font-semibold">¥7,700</span></li>
              <li className="flex justify-between"><span>2枚（¥7,700 + ¥3,850）</span><span className="font-semibold">¥11,550</span></li>
              <li className="flex justify-between"><span>3枚（¥7,700 + ¥3,850×2）</span><span className="font-semibold">¥15,400</span></li>
            </ul>
            <p className="text-xs text-gray-400 mt-2">2部目以降は1枚増えるごとに ¥3,850（税込）が加算されます。</p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-secondary font-bold text-sm py-3 px-6 rounded-xl shadow-md shadow-primary/20 hover:bg-primary-hover transition-all duration-200"
          >
            翻訳を相談する
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* 翻訳の流れ */}
      <StepList
        heading="ご依頼の流れ"
        steps={[
          {
            title: '書類のご連絡',
            description: '翻訳したいフィリピン書類の種類と枚数、提出先（役所・入管・法務局など）をお知らせください。書類の画像をお送りいただくとスムーズです。',
          },
          {
            title: 'お見積もり',
            description: '枚数とお急ぎ希望の有無に応じて料金をご案内します。1部目¥7,700、2部目以降¥3,850（いずれも税込）が基本です。',
          },
          {
            title: '日本語翻訳の作成',
            description: 'フィリピン書類の内容を正確に日本語へ翻訳します。お急ぎ便（+¥2,500）の場合は優先して対応します。',
          },
          {
            title: '翻訳文のお渡し（5営業日以内）',
            description: '完成した日本語訳を5営業日以内にお渡しします。提出先の様式に合わせた形式でご用意します。お急ぎ便（+¥2,500）ならさらに短縮できます。',
          },
        ]}
      />

      {/* 書類取得とセットのご案内 */}
      <section className="mb-10">
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
          <p className="text-sm font-bold text-secondary mb-2">書類の取得から翻訳までまとめてご依頼いただけます</p>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            「フィリピンの書類そのものをまだ取得していない」という方は、PSA出生証明書・婚姻証明書・CENOMAR・NBI Clearanceの
            取得代行から日本語翻訳まで一括で承れます。取得とセットでご依頼いただくと、書類の受け渡しが一度で済みます。
          </p>
          <Link
            to="/ja/ryokin/"
            className="inline-flex items-center gap-1.5 text-sm text-primary-dark font-semibold hover:underline"
          >
            書類取得代行の料金を見る
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 注意点 */}
      <section className="mb-10">
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 flex gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-bold text-gray-800 mb-2">提出先の翻訳要件を事前にご確認ください</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              提出先によっては「翻訳者の氏名・署名」や「特定の様式」を求める場合があります。
              提出先から指定がある場合は、ご依頼時にあわせてお知らせください。要件に沿った形でご用意します。
            </p>
          </div>
        </div>
      </section>

      <CtaBox
        title="フィリピン書類の日本語翻訳を相談する"
        description="翻訳したい書類の種類と枚数をお知らせください。お急ぎの場合もご相談ください。お見積もりは無料です。"
        buttonText="無料で相談する"
        href="#contact"
        variant="primary"
        trustNote="相談・見積もり無料。書類取得とセットのご依頼も可"
      />
    </PageLayout>
  );
}
