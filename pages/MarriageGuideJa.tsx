import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SummaryBlock from '../components/SummaryBlock';
import { Heart, AlertTriangle, Clock, FileCheck, Globe, Users, CheckCircle, Info } from 'lucide-react';

export default function MarriageGuideJa() {
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'フィリピン人との国際結婚・配偶者ビザ 完全ガイド' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Article',
        name: 'フィリピン人との国際結婚・配偶者ビザ 完全ガイド',
        description: '日本先行婚・フィリピン先行婚の手順、ROM提出からPSA婚姻証明書取得（約6〜9ヶ月）、配偶者ビザ申請まで、フィリピン人との国際結婚の全プロセスを解説。',
        url: 'https://ph-document.com/ja/kokusai-kekkon-guide',
        publisher: { '@type': 'Organization', name: 'IGRS Inc.', url: 'https://ph-document.com/ja/' },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: '日本先行婚とフィリピン先行婚、どちらがいいですか？',
            acceptedAnswer: { '@type': 'Answer', text: 'どちらが適切かはご状況によります。日本在住のカップルは日本先行婚が一般的です。それぞれのメリット・デメリットを含めてご案内しますので、まずご相談ください。' },
          },
          {
            '@type': 'Question',
            name: 'ROM提出からPSA婚姻証明書が届くまでどのくらいかかりますか？',
            acceptedAnswer: { '@type': 'Answer', text: 'ROM提出から約6〜9ヶ月が目安です。大使館のROM処理に約10営業日、その後PSA登録まで最低6ヶ月の待機期間があります。PSA証明書の郵送には注文後2〜4週間かかります。' },
          },
          {
            '@type': 'Question',
            name: '配偶者ビザ申請にPSA婚姻証明書は必須ですか？',
            acceptedAnswer: { '@type': 'Answer', text: 'はい。出入国在留管理庁の審査では、フィリピンPSAが発行する婚姻証明書（紙の原本＋DFAアポスティーユ）が必須です。日本の戸籍謄本のみでは原則受理されません。' },
          },
          {
            '@type': 'Question',
            name: '大使館でPSA婚姻証明書を発行してもらえますか？',
            acceptedAnswer: { '@type': 'Answer', text: 'いいえ。在日フィリピン大使館・総領事館はROMの受理・転送のみを行います。PSA婚姻証明書はフィリピン本国のPSAのみが発行します。ROM承認後、約6ヶ月の待機後にPSAへ注文する必要があります。' },
          },
          {
            '@type': 'Question',
            name: 'CENOMAR・PSA書類の取得を代行してもらえますか？',
            acceptedAnswer: { '@type': 'Answer', text: 'はい。CENOMAR・PSA出生証明書・PSA婚姻証明書・DFAアポスティーユの取得を一括代行しています。日本語だけでご依頼いただけます。' },
          },
        ],
      }]}
    >
      <HeroBanner
        title="フィリピン人との国際結婚・配偶者ビザ 完全ガイド"
        badges={['婚姻届から配偶者ビザまで', '日本先行婚・フィリピン先行婚対応', '書類代行あり']}
        ctaText="書類の相談をする（無料）"
        ctaHref="#contact"
      />

      <SummaryBlock
        conclusion="フィリピン人との国際結婚は、婚姻届・ROM提出・PSA証明書取得・配偶者ビザ申請と段階があります。全体で約1〜2年かかることを見越して早めに動くことが重要です。"
        points={[
          '日本先行婚：日本で婚姻届 → 大使館でROM申請（約10営業日）→ PSA登録まで6ヶ月待機 → 配偶者ビザ申請',
          'PSA婚姻証明書はROM承認後6〜9ヶ月が目安。1年を超えることは稀',
          '配偶者ビザ（在留資格認定証明書）にはPSA婚姻証明書＋DFAアポスティーユが必須',
          '婚姻届に必要なCENOMAR・PSA出生証明書の代行取得も対応',
        ]}
        ctaText="無料で相談する（24時間以内に返信）"
      />

      {/* 全体フロー */}
      <section className="mb-10 rounded-2xl bg-blue-50 border border-blue-200 p-6">
        <div className="flex items-start gap-3 mb-4">
          <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <h2 className="text-base font-bold text-blue-900">国際結婚〜配偶者ビザ取得までの全体像</h2>
        </div>
        <div className="space-y-2 text-sm text-blue-800 leading-relaxed">
          <div className="flex items-start gap-2"><span className="font-bold text-blue-600 flex-shrink-0">①</span><span><strong>婚姻届（日本先行婚）</strong>：日本の市区町村役場に提出。フィリピン人配偶者のCENOMAR・PSA出生証明書・DFAアポスティーユが必要。</span></div>
          <div className="flex items-start gap-2"><span className="font-bold text-blue-600 flex-shrink-0">②</span><span><strong>ROM（Report of Marriage）申請</strong>：在日フィリピン大使館・総領事館へ提出。処理に通常10営業日（特急5営業日）。DFAマニラへ転送。</span></div>
          <div className="flex items-start gap-2"><span className="font-bold text-blue-600 flex-shrink-0">③</span><span><strong>PSA登録・待機</strong>：ROMがPSAに登録されるまで<strong>最低6ヶ月</strong>が目安。実際には6〜9ヶ月で取得できるケースが多い。</span></div>
          <div className="flex items-start gap-2"><span className="font-bold text-blue-600 flex-shrink-0">④</span><span><strong>PSA婚姻証明書の取得・郵送</strong>：PSAへ注文後、日本には2〜4週間で届く（追跡付き国際郵送）。</span></div>
          <div className="flex items-start gap-2"><span className="font-bold text-blue-600 flex-shrink-0">⑤</span><span><strong>配偶者ビザ（在留資格認定証明書）申請</strong>：出入国在留管理庁へ申請。PSA婚姻証明書＋DFAアポスティーユが必須。</span></div>
        </div>
        <p className="mt-4 text-xs text-blue-700 font-semibold">📅 ROM提出〜PSA婚姻証明書到着まで：約6〜9ヶ月。早めの準備が重要です。</p>
      </section>

      {/* 落とし穴 */}
      <section className="mb-10 rounded-2xl bg-amber-50 border border-amber-200 p-6">
        <div className="flex items-start gap-3 mb-4">
          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <h2 className="text-base font-bold text-amber-900">よくある誤解・落とし穴</h2>
        </div>
        <ul className="space-y-2 text-sm text-amber-800 leading-relaxed">
          <li className="flex items-start gap-2"><span className="text-amber-500 font-bold flex-shrink-0">✕</span><span>在日フィリピン大使館・総領事館は<strong>PSA婚姻証明書を発行しない</strong>。ROMの受理・転送のみ。証明書はフィリピン本国PSAから取得する必要がある。</span></li>
          <li className="flex items-start gap-2"><span className="text-amber-500 font-bold flex-shrink-0">✕</span><span>ROM承認後すぐにPSA証明書を取れない。<strong>最低6ヶ月の待機</strong>が必要。配偶者ビザ申請はそれ以降。</span></li>
          <li className="flex items-start gap-2"><span className="text-amber-500 font-bold flex-shrink-0">✕</span><span>日本の戸籍謄本だけでは配偶者ビザ申請できない。<strong>PSA婚姻証明書＋DFAアポスティーユ</strong>（紙の原本）が必須。</span></li>
          <li className="flex items-start gap-2"><span className="text-amber-500 font-bold flex-shrink-0">✕</span><span>婚姻届のためのCENOMARは<strong>有効期限あり（提出先によって3〜6ヶ月）</strong>。取得タイミングを間違えると再取得に。</span></li>
        </ul>
      </section>

      {/* 日本先行婚のステップ */}
      <StepList
        heading="日本先行婚の手順（日本在住カップルの標準パターン）"
        steps={[
          {
            title: '書類の準備（CENOMAR・PSA出生証明書・DFAアポスティーユ）',
            description: 'フィリピン人配偶者のCENOMAR・PSA出生証明書を取得し、DFAアポスティーユを取得します。取得〜郵送まで約1ヶ月半が目安。当社で一括代行可能です。',
          },
          {
            title: '日本の市区町村役場に婚姻届を提出',
            description: 'フィリピン人配偶者のCENOMAR・PSA出生証明書（アポスティーユ付き原本）と日本語訳を添えて提出。受理されると日本法上の婚姻が成立します。',
          },
          {
            title: '在日フィリピン大使館・総領事館でROM（Report of Marriage）を申請',
            description: '東京大使館の場合、通常10営業日（特急は5営業日）。書類完備で受理後、速やかにDFAマニラへ転送されます。',
          },
          {
            title: 'PSA登録まで6ヶ月程度待機',
            description: 'ROMがPSAに到着・登録されるまで最低6ヶ月が目安です（公式ガイドおよび実務上の標準）。実際には6〜9ヶ月で取得できるケースが多く、1年超は例外的な遅延ケースです。',
          },
          {
            title: 'PSA婚姻証明書を注文・取得',
            description: 'PSA登録後、PSAへ婚姻証明書を注文します。追跡付き国際郵送で日本へは2〜4週間程度で届きます。その後、DFAアポスティーユも取得します。',
          },
          {
            title: '配偶者ビザ（在留資格認定証明書）を申請',
            description: 'PSA婚姻証明書＋DFAアポスティーユ（紙の原本）を揃えて出入国在留管理庁へ申請。日本の戸籍謄本のみでは受理されないため、PSA証明書の到着を待ってから申請します。',
          },
        ]}
      />

      <CtaBox
        title="CENOMAR・PSA書類の代行取得はお任せください"
        description="婚姻届に必要なCENOMAR・PSA出生証明書・DFAアポスティーユを一括代行。書類の種類・有効期限・提出タイミングもご案内します。"
        buttonText="無料で相談する"
        href="#contact"
        variant="primary"
        trustNote="着手金50%・書類取得・DHL配送準備完了後に残金50%・着手前キャンセル無料"
      />

      {/* フィリピン先行婚 */}
      <section className="mb-10 rounded-2xl bg-gray-50 border border-gray-200 p-6">
        <h2 className="text-base font-bold text-gray-800 mb-3">フィリピン先行婚の場合</h2>
        <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
          <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /><span>フィリピンで先に婚姻する場合、日本人側は<strong>婚姻要件具備証明書（LCCM）</strong>が必要。在日フィリピン大使館ではなく、日本の市区町村役場または外務省で取得。</span></li>
          <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /><span>フィリピンでの婚姻後、日本の市区町村役場に<strong>婚姻届（報告的届出）</strong>を提出する必要があります。</span></li>
          <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /><span>PSA婚姻証明書は<strong>フィリピン婚姻後すぐ</strong>に注文できる場合もありますが、登録まで数週間〜数ヶ月かかることがあります。</span></li>
        </ul>
        <p className="mt-3 text-xs text-gray-500">※ フィリピン先行婚の手順は状況により異なります。まずはご相談ください。</p>
      </section>

      {/* 配偶者ビザに必要なフィリピン書類 */}
      <FeatureList
        heading="配偶者ビザ申請で必要なフィリピン書類"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'PSA婚姻証明書（Annotated）＋DFAアポスティーユ',
            description: '出入国在留管理庁への申請では紙の原本が必須。ROMから約6〜9ヶ月後に取得可能。当社でDFAアポスティーユの代行も対応。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'PSA出生証明書＋DFAアポスティーユ',
            description: 'フィリピン人配偶者の出生証明書も提出が求められるケースが多い。アポスティーユ付き紙の原本で対応。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'NBI無犯罪証明書（状況による）',
            description: '在留資格申請の内容によっては提出が求められることがあります。当社でNBI代行取得も対応。',
          },
        ]}
      />

      <CtaBox
        title="PSA婚姻証明書・DFAアポスティーユの代行もお任せください"
        description="配偶者ビザ申請に必要なPSA書類・DFAアポスティーユを一括代行。日本語だけでご依頼いただけます。"
        buttonText="料金・詳細を確認する"
        href="#contact"
        variant="secondary"
        trustNote="日本語のみでOK・匿名相談可・返信24時間以内"
      />

      <FaqSection
        items={[
          { q: '日本先行婚とフィリピン先行婚、どちらがいいですか？', a: 'どちらが適切かはご状況によります。日本在住のカップルは日本先行婚が一般的です。それぞれのメリット・デメリットを含めてご案内しますので、まずご相談ください。' },
          { q: 'ROM提出からPSA婚姻証明書が届くまでどのくらいかかりますか？', a: 'ROM提出から約6〜9ヶ月が目安です。大使館のROM処理に約10営業日（東京）、その後PSA登録まで最低6ヶ月の待機期間があります。PSA証明書の郵送には注文後2〜4週間かかります。1年を超えるのは例外的な遅延ケースです。' },
          { q: '大使館でPSA婚姻証明書を発行してもらえますか？', a: 'いいえ。在日フィリピン大使館・総領事館はROMの受理・DFAへの転送のみを行います。PSA婚姻証明書はフィリピン本国のPSAのみが発行します。ROM承認後、6ヶ月以上の待機後にPSAへ注文する必要があります。' },
          { q: '配偶者ビザ申請にPSA婚姻証明書は必須ですか？', a: 'はい。出入国在留管理庁の審査では、フィリピンPSAが発行する婚姻証明書（紙の原本＋DFAアポスティーユ）が必須です。日本の戸籍謄本のみでは原則受理されません。PSA婚姻証明書が届くまで申請を待つのが安全です。' },
          { q: 'CENOMAR・PSA書類の取得を代行してもらえますか？', a: 'はい。CENOMAR・PSA出生証明書・PSA婚姻証明書・DFAアポスティーユの取得を一括代行しています。日本語だけでご依頼いただけます。' },
        ]}
        ctaTitle="まずは状況をお聞かせください"
        ctaButton="無料相談フォームへ"
      />
    </PageLayout>
  );
}
