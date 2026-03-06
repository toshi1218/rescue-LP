import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { Heart, FileCheck, Globe, AlertTriangle, Clock, Users } from 'lucide-react';

export default function CenomarGuideJa() {
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'CENOMAR取得代行' }]}
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'CENOMAR（独身証明書）取得代行',
        url: 'https://ph-document.com/ja/cenomar',
        provider: { '@type': 'Organization', name: 'IGRS Inc.' },
      }}
    >
      <HeroBanner
        title="CENOMAR（独身証明書）、日本語だけで取り寄せます"
        badges={['日本語だけでOK', 'アポスティーユ込み', '約1ヶ月〜']}
        ctaText="無料相談はこちら"
        ctaHref="#contact"
      />

      {/* 訴求ブロック：なぜ自力取得が難しいか */}
      <section className="mb-12 rounded-2xl bg-amber-50 border border-amber-200 p-6">
        <div className="flex items-start gap-3 mb-4">
          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <h2 className="text-base font-bold text-amber-900">「自分で取れる」と思っていませんか？</h2>
        </div>
        <ul className="space-y-2 text-sm text-amber-800 leading-relaxed">
          <li className="flex items-start gap-2"><span className="text-amber-500 font-bold flex-shrink-0">✕</span>PSAオンラインで注文しても、<strong>DFAアポスティーユは別途フィリピン現地での手続き</strong>が必要</li>
          <li className="flex items-start gap-2"><span className="text-amber-500 font-bold flex-shrink-0">✕</span>フィリピン大使館（東京）では<strong>アポスティーユの代理申請は受け付けていない</strong></li>
          <li className="flex items-start gap-2"><span className="text-amber-500 font-bold flex-shrink-0">✕</span>書類の不備で<strong>再申請になると、さらに1〜2ヶ月のロス</strong></li>
        </ul>
        <p className="mt-4 text-sm font-semibold text-amber-900">→ 結局「誰かにフィリピンで動いてもらう」必要があります。それが私たちのサービスです。</p>
      </section>

      <FeatureList
        heading="こんな方に選ばれています"
        items={[
          {
            icon: <Heart className="w-4 h-4" />,
            title: '国際結婚の手続きを進めている方',
            description: '日本の市区町村役場への提出、フィリピン大使館での婚姻要件具備証明書（LCCM）取得、どちらにもDFAアポスティーユ付きCENOMARが必要です。「何が必要かわからない」状態からでも相談できます。',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: '配偶者ビザ・在留資格の申請中の方',
            description: '入国管理局への申請では、電子アポスティーユ（e-Apostille）ではなく紙の原本が求められるケースがほとんどです。提出先の要件を確認した上で、正しい形式で手配します。',
          },
          {
            icon: <Clock className="w-4 h-4" />,
            title: '提出期限が迫っている方',
            description: 'ビザ更新・婚姻届の期限が近い場合でも、まず現状をお知らせください。優先対応の可否を確認してご案内します。「間に合わないかも」と思ったら早めのご相談を。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: '何が必要かわからない方',
            description: '提出先（役所・大使館・入管）によって必要な書類の形式が異なります。用途をお伝えいただければ、必要書類を整理してご案内します。無駄な書類を取り寄せるリスクを減らします。',
          },
        ]}
      />

      <CtaBox
        title="まず「何が必要か」を確認しましょう"
        description="アポスティーユが必要かどうか、電子版で足りるかどうか、提出先によって異なります。無料相談で整理します。追加費用の後出しはありません。"
        buttonText="無料で相談する"
        href="#contact"
        variant="primary"
      />

      <FeatureList
        heading="料金に含まれるもの（コミコミ）"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'PSA CENOMAR取得',
            description: 'フィリピン統計局（PSA）へのCENOMAR申請・取得を代行。現地スタッフが直接手続きするため、オンライン申請より確実です。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'DFAアポスティーユ認証',
            description: 'フィリピン外務省（DFA）によるアポスティーユ認証を手配。紙の原本で対応。電子アポスティーユ（e-Apostille）が必要な場合も相談可。',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: '国際郵送（日本へ）',
            description: '追跡番号付きの国際郵便で日本のご住所へお届け。書類が揃い次第、最短で発送します。',
          },
        ]}
      />

      <CtaBox
        title="追加費用の後出しはありません"
        description="PSA取得・DFAアポスティーユ・国際郵送をまとめたコミコミ料金でご案内します。見積もり後の追加請求はありません。"
        buttonText="料金を確認する"
        href="#contact"
        variant="secondary"
      />

      <StepList
        heading="ご依頼の流れ"
        steps={[
          { title: 'フォームで相談（無料）', description: '用途（国際結婚・ビザ申請など）と提出先をお知らせください。24時間以内に返信します。' },
          { title: '必要書類・料金の確認', description: 'アポスティーユが必要かどうかを含め、コミコミ料金をご提示します。納得いただいてからお支払い。' },
          { title: 'フィリピン現地で手配', description: 'PSA取得・DFAアポスティーユを現地スタッフが進めます。進捗は随時ご報告します。' },
          { title: '日本へ郵送・完了', description: '書類が揃い次第、追跡付きでお届けします。目安は約1ヶ月〜。受け取り後に不明点があればフォローします。' },
        ]}
      />

      <FaqSection
        items={[
          { q: '料金はいくらですか？', a: 'PSA取得・DFAアポスティーユ（必要な場合）・国際郵送をまとめたコミコミ料金です。無料相談後に正確な金額をご提示します。追加請求はありません。' },
          { q: 'いつ届きますか？', a: '目安は約1ヶ月〜です。PSA発行に2〜3週間、DFAアポスティーユに1〜2週間、郵送に3〜5営業日かかります。急ぎの場合は相談ください。' },
          { q: '急ぎの場合は対応できますか？', a: '可能です。提出期限をお知らせいただければ、優先対応の可否を確認してご案内します。まずはご相談ください。' },
          { q: '電子アポスティーユ（e-Apostille）でも大丈夫ですか？', a: '日本の提出先では紙のアポスティーユ原本が求められるケースが多いです。提出先を確認した上で適切な形式で手配します。' },
          { q: 'フィリピン人本人が日本にいても取得できますか？', a: 'はい。本人がフィリピンにいなくても、現地スタッフが代理で手続きします。委任状等の書類が必要な場合はご案内します。' },
        ]}
        ctaTitle="まずは状況をお聞かせください"
        ctaButton="無料相談フォームへ"
      />
    </PageLayout>
  );
}
