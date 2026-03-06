import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { AlertTriangle, FileCheck, Globe, Clock } from 'lucide-react';

export default function NbiHitJa() {
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'NBI HIT対応代行' }]}
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'NBI HIT対応代行',
        url: 'https://ph-document.com/ja/nbi-hit',
        provider: { '@type': 'Organization', name: 'IGRS Inc.' },
      }}
    >
      <HeroBanner
        title="NBI HITが出た——次に何をすべきか、一緒に確認します"
        badges={['日本語だけでOK', '状況確認から対応', 'コミコミ料金']}
        ctaText="無料相談はこちら"
        ctaHref="#contact"
      />

      <FeatureList
        heading="こんな方へ"
        items={[
          {
            icon: <AlertTriangle className="w-4 h-4" />,
            title: 'NBI結果に「HIT」と表示された',
            description: 'HITはNBIのデータベースに何らかの記録が存在することを示します。必ずしも犯罪歴があるわけではありませんが、追加の確認手続きが必要です。',
          },
          {
            icon: <Clock className="w-4 h-4" />,
            title: 'ビザ申請の期限が迫っている',
            description: 'HIT対応には時間がかかる場合があります。早めにご相談いただくことで、対応策を一緒に検討できます。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: '身に覚えのないHITが出た',
            description: '同姓同名の別人の記録が引っかかるケースもあります。状況を確認してから対応策をご案内します。',
          },
        ]}
      />

      <CtaBox
        title="まず状況を確認しましょう"
        description="HITの内容によって対応が異なります。まずは状況をお知らせください。一緒に次のステップを確認します。"
        buttonText="無料で相談する"
        href="#contact"
        variant="primary"
      />

      <FeatureList
        heading="対応できること"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'HIT内容の確認サポート',
            description: 'NBIへの照会・確認手続きのサポートを行います。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'クリアランス取得後のアポスティーユ手配',
            description: 'HIT解消後のNBI Clearance取得・DFAアポスティーユまで一括で対応します。',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: '国際郵送（日本へ）',
            description: '追跡番号付きの国際郵便で日本のご住所へお届けします。',
          },
        ]}
      />

      <CtaBox
        title="時間がかかるほど、選択肢が減ります"
        description="HIT対応は早めに動き始めることが重要です。まずは状況をお知らせください。"
        buttonText="今すぐ相談する"
        href="#contact"
        variant="secondary"
      />

      <StepList
        heading="ご依頼の流れ"
        steps={[
          { title: 'フォームで状況を共有', description: 'HITの内容・提出先・期限をお知らせください。' },
          { title: '対応策の確認', description: '状況に応じた対応策と料金をご案内します。' },
          { title: 'フィリピン現地で手配', description: 'HIT確認・解消手続き・NBI取得を現地スタッフが進めます。' },
          { title: '日本へ郵送', description: '書類が揃い次第、追跡付きでお届けします。' },
        ]}
      />

      <FaqSection
        items={[
          { q: 'HITが出たら必ずビザが却下されますか？', a: 'HITはデータベースに記録があることを示すだけで、必ずしも犯罪歴を意味しません。同姓同名の別人の記録の場合もあります。まず内容を確認することが重要です。' },
          { q: 'HIT対応にはどのくらい時間がかかりますか？', a: '内容によって異なります。確認手続きだけで数週間かかる場合もあります。早めにご相談いただくことをおすすめします。' },
          { q: '料金はいくらですか？', a: '状況によって対応内容が異なるため、無料相談後に料金をご提示します。' },
          { q: '急ぎの場合は対応できますか？', a: '可能な限り対応します。提出期限をお知らせいただければ、優先対応の可否を確認してご案内します。' },
        ]}
        ctaTitle="まずは状況をお聞かせください"
        ctaButton="無料相談フォームへ"
      />
    </PageLayout>
  );
}
