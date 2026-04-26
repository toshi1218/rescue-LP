import React from 'react';
import { SEO_LAST_UPDATED_JA } from '../lib/seoDate';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { FileCheck, Globe, Users, Heart, FileText, Stamp, CheckCircle, Clock, AlertTriangle, Plane } from 'lucide-react';
import SummaryBlock from '../components/SummaryBlock';
import SectionDivider from '../components/SectionDivider';
import IconCardGrid from '../components/IconCardGrid';
import ComparisonTable from '../components/ComparisonTable';
import { useMeta } from '../lib/useMeta';

export default function UsVisaDocsJa() {
  useMeta(
    'K-1・CR-1ビザのフィリピン書類取得代行【2026年3月】',
    'K-1・CR-1/IR-1ビザ申請に必要なCENOMAR・PSA出生証明書・NBI ClearanceをDFAアポスティーユ付きで代行取得。アメリカ在住の請願者向け。日本語でもOK。無料相談。',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: '米国ビザ フィリピン書類代行' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: '米国ビザ（K-1・CR-1・IR-1）フィリピン書類取得代行',
        description: 'K-1・CR-1・IR-1ビザに必要なCENOMAR・PSA出生証明書・婚姻証明書・NBI ClearanceをDFAアポスティーユ付きで一括代行。USCIS・NVC提出に対応。',
        url: 'https://ph-document.com/ja/us-visa-documents/',
        provider: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/ja/',
        },
        areaServed: { '@type': 'Country', name: 'JP' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'JPY',
          price: '50000',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '50000',
            priceCurrency: 'JPY',
            description: 'PSA取得・DFAアポスティーユ・国際郵送込み（税抜、書類1通あたり）',
          },
        },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: '米国ビザに必要な書類は何ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'ビザの種類によって異なります。K-1はCENOMAR・出生証明書・NBI Clearance、CR-1は婚姻証明書・出生証明書などが必要です。無料相談で確認します。',
              },
            },
            {
              '@type': 'Question',
              name: '料金はいくらですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '必要書類・DFAアポスティーユをまとめた料金です。（DHL国際郵送費は実費別途となります）無料相談後に正確な金額をご提示します。',
              },
            },
            {
              '@type': 'Question',
              name: 'USCIS・NVC提出に必要な書類形式はK-1とCR-1で違いますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'はい、異なります。K-1（I-129F）ではCENOMAR・出生証明書・NBI Clearanceが必要で、CR-1（I-130）では婚姻証明書・出生証明書が中心となります。無料相談で申請中のビザ種類をお知らせいただければ、対応する書類をご案内します。',
              },
            },
            {
              '@type': 'Question',
              name: 'NVCからケース番号が発行された後、すぐに書類取得を始めるべきですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'NVCのケースファイル後は書類提出期限が設定されます。おおむね1ヶ月半の取得期間を見込んで、期限が決まったらできるだけ早めにご連絡ください。',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="米国ビザ 書類取得代行"
        badges={['K-1・CR-1・IR-1対応', 'USCIS書類形式で手配', 'アポスティーユ込み']}
        ctaText="無料相談はこちら"
        ctaHref="#contact"
        lastUpdated={SEO_LAST_UPDATED_JA}
      />

      <SummaryBlock
        conclusion="K-1・CR-1・IR-1ビザ審査に必要なNVC提出書類をUSCIS・DOS基準の形式で一括手配。PSA婚姻証明書・NBIクリアランス・出生証明書をまとめて準備します。"
        points={[
          'CENOMAR・PSA出生証明書・婚姻証明書・NBI Clearanceをまとめて代行',
          'USCIS・NVC提出に必要なDFAアポスティーユ付きで対応',
          '英語の書類も当社が確認・手配。日本語だけで完結',
          '必要書類が不明な場合も、無料相談で整理します',
        ]}
        ctaText="無料で相談する"
      />

      <SectionDivider variant="beige">
        <FeatureList
          heading="こんな方へ"
          items={[
            {
              icon: <Heart className="w-4 h-4" />,
              title: 'K-1・CR-1・IR-1ビザの申請中',
              description: 'USCIS・NVCへの提出に必要なPSA書類（出生証明書・婚姻証明書・CENOMAR・NBI Clearance）をまとめて手配します。',
            },
            {
              icon: <Users className="w-4 h-4" />,
              title: 'アメリカ人配偶者が申請を進めている',
              description: '日本語だけで全て対応します。英語の書類も当社が確認・手配します。',
            },
            {
              icon: <FileCheck className="w-4 h-4" />,
              title: '何が必要かわからない',
              description: 'ビザの種類・申請状況によって必要書類が異なります。まず相談いただければ、必要なものをリストアップしてご案内します。',
            },
          ]}
        />

        <IconCardGrid
          heading="ビザ種類別 必要書類ガイド"
          columns={3}
          cards={[
            { icon: Plane, title: 'K-1ビザ（婚約者ビザ）', description: 'CENOMAR・PSA出生証明書・NBI Clearance（DFAアポスティーユ付き）', accent: 'gold' },
            { icon: Heart, title: 'CR-1ビザ（配偶者ビザ）', description: 'PSA婚姻証明書・PSA出生証明書（DFAアポスティーユ付き）', accent: 'blue' },
            { icon: Users, title: 'IR-1ビザ（移民ビザ）', description: 'PSA婚姻証明書・PSA出生証明書・NBI Clearance', accent: 'green' },
            { icon: FileText, title: 'PSA出生証明書', description: 'USCIS・NVC提出に必要な公的出生記録。DFAアポスティーユ付きで代行', accent: 'gold' },
            { icon: Stamp, title: 'DFAアポスティーユ', description: 'フィリピン外務省による認証。米国提出書類にはほぼ必須', accent: 'blue' },
            { icon: CheckCircle, title: 'NBI Clearance', description: '無犯罪証明書。K-1・IR-1ビザ申請で必要。HIT対応も可能', accent: 'green' },
            { icon: Globe, title: 'CENOMAR', description: '独身証明書。K-1ビザ申請に必要なPSA発行書類', accent: 'gold' },
            { icon: Clock, title: '取得期間の目安', description: 'おおむね1ヶ月半。提出期限が決まったら早めにご相談ください', accent: 'blue' },
            { icon: AlertTriangle, title: '期限に注意', description: 'NVCケースファイル後は提出期限が設定されます。早めの手配が重要', accent: 'red' },
          ]}
        />
      </SectionDivider>

      <CtaBox
        title="まず「何が必要か」を確認しましょう"
        description="米国ビザの必要書類はビザの種類・申請状況によって異なります。無料相談で整理してから進めます。"
        buttonText="無料で相談する"
        href="#contact"
        variant="primary"
        trustNote="着手金50%・書類取得・DHL配送準備完了後に残金50%お支払い・着手前キャンセル無料"
      />

      <SectionDivider variant="blue">
        <FeatureList
          heading="料金に含まれるもの"
          items={[
            {
              icon: <FileCheck className="w-4 h-4" />,
              title: 'PSA書類取得（出生証明書・婚姻証明書・CENOMAR・NBI Clearanceなど）',
              description: '必要なPSA書類をまとめて取得します。',
            },
            {
              icon: <FileCheck className="w-4 h-4" />,
              title: 'DFAアポスティーユ認証（※日本の手続きではほぼ必須です）',
              description: '提出先の要件に応じてDFAアポスティーユ認証を手配します。',
            },
          ]}
        />
      </SectionDivider>

      <StepList
        heading="ご依頼の流れ"
        variant="visual"
        steps={[
          { title: 'フォームで相談', description: 'ビザの種類・申請状況・提出期限をお知らせください。' },
          { title: '必要書類・料金の確認', description: '必要書類をリストアップし、料金をご提示します。' },
          { title: 'フィリピン現地で手配', description: 'PSA取得・DFAアポスティーユを現地スタッフが進めます。' },
          { title: '日本へ郵送', description: '書類が揃い次第、追跡付きでお届けします。目安はおおむね1ヶ月半。' },
        ]}
      />

      <ComparisonTable
        heading="自分で手配 vs IGRS代行"
        rows={[
          { item: 'NVC提出書類の確認', self: '要英語調査', agency: true },
          { item: 'PSA書類の手配', self: false, agency: true },
          { item: 'NBIクリアランス取得', self: false, agency: true },
          { item: 'USCIS/DOS基準の確認', self: '要英語調査', agency: true },
          { item: '日本語進捗報告', self: '—', agency: true },
        ]}
      />

      <FaqSection
        items={[
          { q: '米国ビザに必要な書類は何ですか？', a: 'ビザの種類によって異なります。K-1はCENOMAR・出生証明書・NBI Clearance、CR-1は婚姻証明書・出生証明書などが必要です。無料相談で確認します。' },
          { q: '料金はいくらですか？', a: '必要書類・DFAアポスティーユをまとめた料金です。（DHL国際郵送費は実費別途となります）無料相談後に正確な金額をご提示します。' },
          { q: 'USCIS・NVC提出に必要な書類形式はK-1とCR-1で違いますか？', a: 'はい、異なります。K-1（I-129F）ではCENOMAR・出生証明書・NBI Clearanceが必要で、CR-1（I-130）では婚姻証明書・出生証明書が中心となります。無料相談で申請中のビザ種類をお知らせいただければ、対応する書類をご案内します。' },
          { q: 'NVCからケース番号が発行された後、すぐに書類取得を始めるべきですか？', a: 'NVCのケースファイル後は書類提出期限が設定されます。おおむね1ヶ月半の取得期間を見込んで、期限が決まったらできるだけ早めにご連絡ください。' },
        ]}
        ctaTitle="まずは状況をお聞かせください"
        ctaButton="無料相談フォームへ"
      />
    </PageLayout>
  );
}
