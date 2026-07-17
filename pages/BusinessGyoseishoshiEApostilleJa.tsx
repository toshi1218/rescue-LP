import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import SummaryBlock from '../components/SummaryBlock';
import IconCardGrid from '../components/IconCardGrid';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import RelatedLinks from '../components/RelatedLinks';
import { Smartphone, IdCard, ScanFace, RefreshCw, Scale, HelpCircle, ShieldCheck } from 'lucide-react';
import { useMeta } from '../lib/useMeta';

const TITLE = '行政書士向け e-Apostille申請実務ガイド【2026年3月制度変更後】';
const DESCRIPTION = '2026年3月のDFA完全電子化により変わったPSAアポスティーユ申請の実務を解説。OTP・身分証・顔認証の同時通過、外国籍家族の委任状署名不一致による却下と再申請、法務局のe-Apostille受理運用の差。フィリピン側書類取得の実務をIGRSがサポート・代行します。';

export default function BusinessGyoseishoshiEApostilleJa() {
  useMeta(TITLE, DESCRIPTION);

  return (
    <PageLayout
      breadcrumbs={[
        { label: 'ホーム', href: '/ja/' },
        { label: '法人の方へ', href: '/ja/business/' },
        { label: '行政書士の方', href: '/ja/business/gyoseishoshi/' },
        { label: 'e-Apostille申請実務' },
      ]}
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: '行政書士向け e-Apostille申請実務サポート',
        description: '2026年3月のDFA完全電子化後のPSAアポスティーユ（e-Apostille）申請実務を、行政書士の先生向けにフィリピン側の実務としてサポート・代行します。',
        url: 'https://ph-document.com/ja/business/gyoseishoshi-e-apostille/',
        provider: { '@type': 'Organization', name: 'IGRS Inc.', url: 'https://ph-document.com/ja/' },
        areaServed: { '@type': 'Country', name: 'JP' },
      }}
    >
      <HeroBanner
        title="2026年3月のDFA完全電子化以降、e-Apostille申請の実務は大きく変わりました"
        subtitle="フィリピン側の書類取得実務について、先生の案件の外注先・提携先としてご検討いただける情報をまとめました。"
        badges={['DFAへ直接確認済みの一次情報', '外注・提携のご相談歓迎', '案件ごとの進捗報告']}
        ctaText="法人のお問い合わせ"
        ctaHref="#contact"
        lastUpdated="2026年7月1日"
      />

      <SummaryBlock
        conclusion="国際結婚・配偶者ビザ・帰化申請の案件で必要なPSAアポスティーユは、2026年3月16日以降オンライン申請（e-Apostille）が基本の取得方法になりました。"
        points={[
          '物理アポスティーユは原則廃止、経過措置も終了しています',
          'オンライン申請にはOTP・身分証・顔認証の同時突破が必要です',
          '依頼者のご家族が外国籍の場合、委任状署名の不一致による却下事例があります（再申請は可能）',
          '法務局によってe-Apostilleの受理運用に差がある可能性があり、事前確認をおすすめします',
        ]}
      />

      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary tracking-tight">制度変更の要点</h2>
        </div>
        <div className="space-y-4">
          <p className="text-base text-gray-700 leading-relaxed">
            2026年3月16日、フィリピン外務省（DFA）はPSA発行書類（出生証明書・婚姻証明書・CENOMARなど）のアポスティーユ認証を完全デジタル化しました。当社が現地でDFAに直接確認した内容として、以下を一次情報としてお伝えします。
          </p>
          <ul className="space-y-2.5 pl-1">
            {[
              '物理アポスティーユ（紙の証明書への認証スタンプ）の新規申請は原則できなくなっています',
              '制度変更に伴う経過措置期間はすでに終了しています',
              'ハーグ条約加盟国（日本を含む）向けには、デジタルPDF形式のe-Apostilleのみが発行されます',
            ].map((text) => (
              <li key={text} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                <span className="text-base text-gray-700 leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-500 leading-relaxed">
            ※ 日本側の提出先（法務局・出入国在留管理庁・市区町村役場等）がe-Apostilleをどのように受理するかは、案件・窓口によって運用が異なる可能性があります。この点については先生ご自身での確認をおすすめします。当社が一次情報としてご提供できるのは、あくまでフィリピン側の取得実務です。
          </p>
        </div>
      </section>

      <IconCardGrid
        heading="実務上の落とし穴"
        subheading="先生ご自身で調べても出てきにくい、現場の実務知です"
        columns={2}
        cards={[
          { icon: Smartphone, title: 'OTP・身分証・顔認証の同時突破が必要', description: 'オンライン申請では、ワンタイムパスワード（OTP）受信・本人確認書類・ライブネス認証（顔認証）を同一セッションで通過する必要があります。', accent: 'blue' },
          { icon: IdCard, title: '外国籍家族の委任状署名不一致による却下実例', description: '依頼者のご家族がすでに外国籍に帰化し外国パスポートのみをお持ちの場合、委任状の署名とパスポートの署名が一致せず却下される実例があります。却下通知が発行されますが、再申請は可能です。', accent: 'gold' },
          { icon: ScanFace, title: '署名の事前確認が却下防止の鍵', description: '委任状にご署名いただく前に、パスポート等の身分証と照合しておくことで、却下リスクを大きく下げられます。', accent: 'green' },
          { icon: Scale, title: '法務局ごとにe-Apostille受理の運用差がある可能性', description: '窓口・担当者によって、e-Apostilleの受理方法や求める補足資料が異なる場合があるとの声があります。事前に管轄法務局へご確認いただくことを推奨します（日本側要件の断定的評価は当社の範囲外です）。', accent: 'purple' },
        ]}
      />

      <CtaBox
        title="案件のご相談はお気軽に"
        description="国際結婚・配偶者ビザ・帰化申請の案件で、フィリピン側のe-Apostille取得実務をお任せいただけます。単発のご依頼から継続的な提携まで対応します。"
        buttonText="法人のお問い合わせ"
        href="#contact"
        variant="primary"
        trustNote="初回相談無料・秘密厳守・守秘義務対応"
      />

      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary tracking-tight">IGRSに依頼するメリット</h2>
        </div>
        <ul className="space-y-3">
          {[
            { icon: ShieldCheck, title: '日本語で完結', detail: '先生とのやり取り、進捗報告はすべて日本語で行います。' },
            { icon: HelpCircle, title: 'フィリピン現地実務と日本側要件確認の両方に対応', detail: '現地でのOTP・身分証・顔認証対応と、提出先の要件確認（先生と連携しながら）の両輪で進めます。' },
            { icon: RefreshCw, title: '却下パターンを把握した予防対応', detail: '委任状署名の事前確認など、実際の却下事例を踏まえた予防的な対応を行います。' },
            { icon: ShieldCheck, title: '日本への一括配送・進捗報告', detail: '取得した証明書データ・関連資料は、先生の事務所またはクライアントのご指定先へまとめてお届けします。' },
          ].map((item) => (
            <li key={item.title} className="flex items-start gap-3">
              <item.icon className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm font-bold text-gray-800 mb-0.5">{item.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <StepList
        heading="提携・外注の流れ"
        steps={[
          { title: 'お問い合わせ', description: '案件の概要（国際結婚・配偶者ビザ・帰化申請等）と、依頼者ご家族の国籍状況をお知らせください。' },
          { title: '要件確認', description: '必要書類・提出先の要件・希望納期を確認します。' },
          { title: 'お見積り', description: '案件内容に応じた料金をご提示します。継続案件はボリュームディスカウントもご相談可能です。' },
          { title: '着手', description: '委任状・本人確認書類のご準備から、e-Apostille取得・進捗報告まで対応します。' },
        ]}
      />

      <FaqSection
        items={[
          { q: '物理アポスティーユが必要な案件にはもう対応できませんか？', a: 'PSA発行書類（出生証明書・婚姻証明書・CENOMAR等）については、原則としてe-Apostille（デジタル）での取得となります。NBIクリアランス等PSA以外の書類は、引き続き窓口での物理アポスティーユに対応しています。' },
          { q: '依頼者のご家族が海外に散らばっている場合も対応できますか？', a: 'はい。ただし本人確認（OTP・身分証・顔認証）を各国から行う必要があるため、通常より調整に時間がかかる場合があります。事前にご家族の状況をお知らせいただけると、スムーズです。' },
          { q: '却下された案件のフォローもお願いできますか？', a: '可能です。却下理由を確認し、委任状の署名等を修正したうえで再申請します。' },
          { q: '継続的な提携は可能ですか？', a: 'はい。複数案件・継続案件についてはボリュームディスカウント、請求書払いにも対応しています。まずは1案件からお試しいただくことも可能です。' },
        ]}
      />

      <RelatedLinks links={[
        { path: '/ja/business/gyoseishoshi/', label: '行政書士向け フィリピン書類取得代行（総合）' },
        { path: '/ja/business/', label: '法人の方へ：登録支援機関・企業向けサービス' },
        { path: '/ja/gyouseishoshi-to-shorui-shuttoku/', label: '行政書士の仕事と書類取得サービスの違い' },
        { path: '/ja/psa-e-apostille-daiko/', label: 'PSAアポスティーユのオンライン申請代行（個人のお客様向け）' },
        { path: '/ja/kika-shinsei-guide/', label: '帰化申請のフィリピン書類代行' },
      ]} />
    </PageLayout>
  );
}
