import React, { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhyUs from '../components/WhyUs';
import SocialProof from '../components/SocialProof';
import ServicePacks from '../components/ServicePacks';
import Process from '../components/Process';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { trackLandingView } from '../lib/analytics';
import { useMeta } from '../lib/useMeta';
import { SEO_DATE_ISO } from '../lib/seoDate';
import { JA_PRICING } from '../lib/pricing';

export default function HomeJa() {
  useMeta(
    'フィリピン書類取得代行｜PSA・CENOMAR・NBIを日本語でサポート',
    'PSA出生証明書・CENOMAR・NBI Clearance・e-Apostilleの取得を日本語でサポート。料金は22,000円から。国際結婚・配偶者ビザ・帰化申請・外免切替に対応。無料見積もり受付中。',
    'https://ph-document.com/ja/',
  );

  useEffect(() => {
    trackLandingView();
  }, []);

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    name: 'フィリピン書類取得代行センター',
    legalName: '株式会社IGRS',
    alternateName: ['ph-document.com', 'IGRS Inc.'],
    url: 'https://ph-document.com/ja/',
    logo: 'https://ph-document.com/logo.png',
    image: 'https://ph-document.com/og-image.png',
    description: 'フィリピンの公的書類（PSA出生証明書・CENOMAR・NBI Clearance・DFAアポスティーユ）を日本語だけで代行取得するサービスを提供。国際結婚・配偶者ビザ・帰化申請・外免切替に対応。渡航不要。',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'JP',
      addressRegion: '和歌山県',
      addressLocality: '和歌山市',
    },
    location: {
      '@type': 'Place',
      name: 'セブ市営業所（フィリピン共和国）',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'PH',
        addressLocality: 'Cebu City',
      },
    },
    email: 'igrs20200601@gmail.com',
    sameAs: [
      'https://ph-document.com/ja/company/',
      'https://ph-document.com/en/company/',
      'https://share.google/oOoXo3nIRvnAAhbg0',
      'https://note.com/igrs_philippines',
      'https://x.com/GswCnxL7Sg15778',
      'https://www.facebook.com/share/1KTmc7CeXi/',
      'https://page.line.me/827jdwvl',
    ],
    areaServed: [
      { '@type': 'Country', name: 'JP' },
      { '@type': 'Country', name: 'PH' },
      { '@type': 'Country', name: 'US' },
      { '@type': 'Country', name: 'CA' },
      { '@type': 'Country', name: 'AU' },
      { '@type': 'Country', name: 'GB' },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'igrs20200601@gmail.com',
      contactType: 'customer service',
      availableLanguage: ['Japanese', 'English'],
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
    priceRange: '¥22,000〜¥132,500',
    currenciesAccepted: 'JPY',
    // NOTE: aggregateRating はプリレンダのテンプレート（buildLocalBusinessJsonLd）が
    // LocalBusiness 側で出力する。自己掲載の review[] マークアップは Google の
    // 自己申告レビュー方針上リスクが高いため JSON-LD からは除去（本文「お客様の声」
    // 表示は維持）。実在・検証可能なレビュー（GBP等）が用意できたら再検討する。
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'フィリピン書類取得代行サービス',
      itemListElement: [
        {
          '@type': 'Offer',
          priceSpecification: { '@type': 'PriceSpecification', minPrice: String(JA_PRICING.inputSupport), priceCurrency: 'JPY' },
          itemOffered: { '@type': 'Service', name: 'PSAオンライン申請入力・決済サポート', description: 'PSAオンライン申請の英語入力・本人確認・決済操作を日本語でサポート。書類発行・政府手数料は含みません。' },
        },
        {
          '@type': 'Offer',
          priceSpecification: { '@type': 'PriceSpecification', minPrice: String(JA_PRICING.digitalSingle), priceCurrency: 'JPY' },
          itemOffered: { '@type': 'Service', name: 'PSA電子書類＋e-Apostille 1通', description: 'PSA e-CertificateとDFA e-Apostilleをオンラインで取得し、電子版を納品。' },
        },
        {
          '@type': 'Offer',
          priceSpecification: { '@type': 'PriceSpecification', minPrice: String(JA_PRICING.digitalPair), priceCurrency: 'JPY' },
          itemOffered: { '@type': 'Service', name: 'PSA電子書類2通パック', description: 'PSA e-CertificateとDFA e-Apostilleを2通まとめて取得。国際結婚・配偶者ビザ向け。' },
        },
        {
          '@type': 'Offer',
          priceSpecification: { '@type': 'PriceSpecification', minPrice: String(JA_PRICING.lto), priceCurrency: 'JPY' },
          itemOffered: { '@type': 'Service', name: 'LTO運転経歴証明書取得代行（外免切替用）', description: 'フィリピン陸運局（LTO）発行の運転経歴証明書をDFAアポスティーユ付きで代行取得。DHL配送込み。' },
        },
      ],
    },
    dateModified: SEO_DATE_ISO,
  };

  return (
    <div className="min-h-screen bg-background-light text-gray-800 font-body">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <Navbar />
      <main id="main-content">
        <Hero />
        <div className="container mx-auto max-w-5xl px-4 pt-8">
          <section className="rounded-2xl border border-blue-200 bg-blue-50 p-5 md:p-6" aria-labelledby="digital-notice-title">
            <div className="flex items-start gap-3">
              <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-700" />
              <div>
                <h2 id="digital-notice-title" className="font-bold text-secondary">PSA書類はe-Apostille（電子認証）が現在の標準です</h2>
                <p className="mt-1 text-sm leading-relaxed text-gray-700">2026年3月16日以降、出生証明書・婚姻証明書・CENOMARなどPSA民事登録書類の認証はe-Apostilleに一本化されました。紙原本が必要な場合は、PSA SECPA紙原本を別途同梱します。受理条件は提出先ごとに異なるため、申請前の確認をおすすめします。</p>
                <p className="mt-2 text-xs text-gray-500">電子版：通常2〜4週間／紙原本付き：通常3〜6週間／NBI・LTO等：通常4〜6週間</p>
              </div>
            </div>
          </section>
        </div>
        <ServicePacks />
        <Process />
        <WhyUs />
        <SocialProof />
        <FAQ />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
