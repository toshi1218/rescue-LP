import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ChevronDown, ChevronRight, AlertTriangle, FileText, Fingerprint, ArrowRight, HelpCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { trackEvent } from '../lib/analytics';
import { useLanguage } from '../lib/i18n';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR_MONTH_JA, SEO_YEAR_MONTH_EN } from '../lib/seoDate';

export default function UsVisaDocumentsPage() {
  const { lang } = useLanguage();
  const t = (ja: string, en: string) => lang === 'ja' ? ja : en;

  useMeta(
    t(`米国ビザ（CR-1/IR-1・K-1）フィリピン書類ガイド【${SEO_YEAR_MONTH_JA}版】`, `Philippine Documents for US Visa: CR-1, IR-1 & K-1 [${SEO_YEAR_MONTH_EN}]`),
    t('CR-1/IR-1・K-1ビザ申請に必要なフィリピン書類（PSA・CENOMAR・NBI）の取得方法とDFAアポスティーユを解説。', 'Complete guide to Philippine documents required for US CR-1/IR-1 and K-1 visa applications. Covers PSA, CENOMAR, and NBI Clearance with DFA Apostille.')
  );

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: t('ホーム', 'Home'), item: 'https://ph-document.com/' },
          { '@type': 'ListItem', position: 2, name: t('米国ビザ書類ガイド', 'US Visa Documents Guide'), item: 'https://ph-document.com/us-visa-documents/' },
        ],
      },
      {
        '@type': 'Article',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://ph-document.com/us-visa-documents/',
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['h1', 'h2'],
          },
        },
        headline: t(`米国ビザ（CR-1/IR-1・K-1）フィリピン書類ガイド【${SEO_YEAR_MONTH_JA}版】`, `Philippine Documents for US Visa (CR-1/IR-1 & K-1) [${SEO_YEAR_MONTH_EN} Guide]`),
        description: t('米国ビザ（CR-1/IR-1配偶者移民ビザ・K-1婚約者ビザ）申請に必要なフィリピン書類（CENOMAR・PSA・NBI）の取得方法を解説。', 'Guide to obtaining Philippine documents (CENOMAR, PSA, NBI) required for US visa applications (CR-1/IR-1 spousal immigration visa and K-1 fiancé visa).'),
        image: 'https://ph-document.com/og-image.png',
        url: 'https://ph-document.com/us-visa-documents/',
        inLanguage: lang,
        datePublished: '2026-01-01',
        dateModified: '2026-03-01',
        author: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Philippine Document Retrieval Service',
          url: 'https://ph-document.com/',
          logo: {
            '@type': 'ImageObject',
            url: 'https://ph-document.com/favicon.svg',
          },
        },
        citation: [
          'https://travel.state.gov',
          'https://ph.usembassy.gov',
          'https://psa.gov.ph',
          'https://www.nbi.gov.ph',
        ],
      },
    ],
  };

  const visaTypes = [
    {
      code: 'CR-1 / IR-1',
      title: t('配偶者移民ビザ（永住権）', 'Spousal Immigration Visa (Green Card)'),
      who: t('米国市民または永住者の配偶者', 'Spouse of a US citizen or permanent resident'),
      process: t('USCIS（I-130）→ NVC（書類審査）→ 米国大使館面接', 'USCIS (I-130) → NVC (document review) → US Embassy interview'),
      note: t('NVC提出時にApotilleが必要', 'Apostille required at NVC document submission stage'),
    },
    {
      code: 'K-1',
      title: t('婚約者ビザ', 'Fiancée/Fiancé Visa'),
      who: t('米国市民の婚約者', 'Fiancée/Fiancé of a US citizen'),
      process: t('USCIS（I-129F）→ 米国大使館面接 → 入国後90日以内に結婚', 'USCIS (I-129F) → US Embassy interview → marry within 90 days of entry'),
      note: t('大使館面接時にApostille付書類が必要', 'Apostille-authenticated documents required at embassy interview'),
    },
  ];

  const cr1Docs = [
    {
      doc: t('PSA出生証明書（+ DFAアポスティーユ）', 'PSA Birth Certificate + DFA Apostille'),
      required: true,
      note: t('NVC提出必須。Apostilleなしは不可。', 'Required for NVC. Must have Apostille.'),
    },
    {
      doc: t('CENOMAR（独身証明書）（+ DFAアポスティーユ）', 'CENOMAR (Certificate of No Marriage Record) + DFA Apostille'),
      required: true,
      note: t('婚姻前の独身証明。6ヶ月以内発行が目安。', 'Proof of single status before marriage. Typically within 6 months of issuance.'),
    },
    {
      doc: t('PSA婚姻証明書（+ DFAアポスティーユ）', 'PSA Marriage Certificate + DFA Apostille'),
      required: true,
      note: t('フィリピンで先行婚姻した場合に必要。', 'Required if married in the Philippines first.'),
    },
    {
      doc: t('NBI Clearance（無犯罪証明書）（+ DFAアポスティーユ）', 'NBI Clearance + DFA Apostille'),
      required: true,
      note: t('大使館面接・NVC提出で必要。Apostille推奨。', 'Required for NVC and embassy interview. Apostille strongly recommended.'),
    },
    {
      doc: t('有効なフィリピンパスポート（コピー）', 'Valid Philippine Passport (copy)'),
      required: true,
      note: '',
    },
    {
      doc: t('医療診断書（パネル医によるもの）', 'Medical Examination Report (by designated panel physician)'),
      required: true,
      note: t('指定医療機関での受診が必要。米国大使館指定。', 'Must be conducted at a US Embassy-designated clinic.'),
    },
  ];

  const k1Docs = [
    {
      doc: t('PSA出生証明書（+ DFAアポスティーユ）', 'PSA Birth Certificate + DFA Apostille'),
      required: true,
      note: t('大使館面接時に提出。Apostille必須。', 'Submit at embassy interview. Apostille required.'),
    },
    {
      doc: t('CENOMAR（独身証明書）（+ DFAアポスティーユ）', 'CENOMAR (Certificate of No Marriage Record) + DFA Apostille'),
      required: true,
      note: t('6ヶ月以内発行が望ましい。', 'Preferably issued within 6 months.'),
    },
    {
      doc: t('NBI Clearance（無犯罪証明書）（+ DFAアポスティーユ）', 'NBI Clearance + DFA Apostille'),
      required: true,
      note: t('大使館面接で必要。Apostille付を強く推奨。', 'Required at embassy interview. Apostille strongly recommended.'),
    },
    {
      doc: t('有効なフィリピンパスポート', 'Valid Philippine Passport'),
      required: true,
      note: '',
    },
    {
      doc: t('医療診断書（パネル医によるもの）', 'Medical Examination Report (by designated panel physician)'),
      required: true,
      note: t('大使館指定医療機関のみ有効。', 'Only valid from US Embassy-designated clinics.'),
    },
  ];

  const faqs = [
    {
      q: t('PSA書類とNBI書類にDFAアポスティーユは必ず必要ですか？', 'Is DFA Apostille always required for PSA and NBI documents for a US visa?'),
      a: t(
        'CR-1/IR-1ビザのNVC提出では必須です。K-1ビザの大使館面接でも実務上Apostilleが要求される場合がほとんどです。取得タイミングを考えると、最初からApostilleを付けて取得しておくことを強く推奨します。',
        'For CR-1/IR-1 visas, DFA Apostille is required by NVC. For K-1 visas, the US Embassy typically requires it at the interview as well. We strongly recommend obtaining all documents with Apostille from the start to avoid delays.'
      ),
    },
    {
      q: t('書類の有効期限はありますか？', 'Do the Philippine documents have an expiration date?'),
      a: t(
        'NBI Clearanceは発行から1年が有効期限の目安です。CENOMARはNVC・大使館の判断により6ヶ月以内が目安とされることが多いです。PSA出生証明書・婚姻証明書は有効期限なし（内容変更がない限り）ですが、発行日が古いと再取得を求められる場合もあります。',
        'NBI Clearance is generally valid for 1 year from issuance. CENOMAR is typically expected to be within 6 months by NVC and the embassy. PSA Birth/Marriage Certificates have no expiration, but very old copies may be questioned. We recommend obtaining fresh copies to be safe.'
      ),
    },
    {
      q: t('フィリピンに行かずに書類を取得できますか？', 'Can I get these documents without going to the Philippines?'),
      a: t(
        'はい、弊社の代行サービスを使えばフィリピンに渡航する必要はありません。現地セブのスタッフがPSA・CENOMAR・NBIの取得からDFAアポスティーユの認証まで一括して対応し、DHLで米国の指定住所に直接お届けします。',
        'Yes. With our retrieval service, you never need to travel to the Philippines. Our Cebu-based staff handles everything — from PSA, CENOMAR, and NBI retrieval to DFA Apostille — and ships directly to your US address via DHL Express.'
      ),
    },
    {
      q: t('NBI HITが出た場合はどうなりますか？', 'What happens if my NBI application shows a HIT (MATCH FOUND)?'),
      a: t(
        'NBI HITとは、同姓同名者の記録との照合（MATCH FOUND）が発生した状態です。追加の身元確認手続きが必要となり、通常より1〜4週間程度期間が延びます。弊社ではHIT対応も含めてサポートしていますので、ご安心ください。',
        'An NBI HIT (MATCH FOUND) means your name matches someone else in the database, triggering additional identity verification. This typically adds 1–4 weeks to processing time. Our service includes full support for MATCH FOUND resolution at no extra charge.'
      ),
    },
    {
      q: t('取得から米国到着までどのくらいかかりますか？', 'How long does it take from order to delivery in the USA?'),
      a: t(
        '通常、PSA・CENOMAR・NBI取得からDFAアポスティーユ認証、DHL発送まで合計4〜6週間程度が目安です。NBI HITや書類の不備がある場合はさらに時間がかかる場合があります。NVCへの提出スケジュールに余裕をもって早めにご依頼ください。',
        'Typically 4–6 weeks from order to delivery in the USA, including PSA/CENOMAR/NBI retrieval, DFA Apostille, and DHL Express shipping. NBI HIT cases may take longer. We recommend ordering well ahead of your NVC submission or embassy interview date.'
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background-light text-gray-800 font-body">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <main className="max-w-2xl lg:max-w-3xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="text-xs text-gray-400 mb-6" aria-label={t('パンくずリスト', 'Breadcrumb')}>
          <Link to={t('/ja/', '/')} className="hover:text-secondary">{t('ホーム', 'Home')}</Link>
          <span className="mx-1">/</span>
          <span className="text-gray-600">{t('米国ビザ書類ガイド', 'US Visa Documents Guide')}</span>
        </nav>

        <h1 className="text-2xl md:text-3xl font-bold text-secondary leading-tight mb-4">
          {t(
            `米国ビザ（CR-1/IR-1・K-1）に必要なフィリピン書類ガイド【${SEO_YEAR_MONTH_JA}版】`,
            `Philippine Documents for US Visa (CR-1/IR-1 & K-1) [${SEO_YEAR_MONTH_EN} Guide]`
          )}
        </h1>
        <p className="text-sm text-gray-500 mb-8">{t('最終更新：2026年3月1日 ｜ IGRS Inc.', 'Last updated: March 1, 2026 | IGRS Inc.')}</p>

        {/* Intro callout */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10 text-sm text-blue-900 leading-relaxed">
          <strong>{t('このページについて', 'About this guide')}</strong><br />
          {t(
            'このガイドは、フィリピン人（または配偶者がフィリピン人）が米国ビザ（CR-1/IR-1・K-1）を申請する際に必要なフィリピン書類の取得方法を解説します。書類の取得からDFAアポスティーユ認証、米国への発送まで一括代行が可能です。',
            'This guide explains the Philippine documents required when a Filipino national (or the spouse of one) applies for a US CR-1/IR-1 spousal immigration visa or K-1 fiancée visa. We cover how to obtain each document, get DFA Apostille, and ship to the USA.'
          )}
        </div>

        {/* Visa types overview */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-secondary mb-4">{t('主な米国ビザの種類', 'US Visa Types for Filipinos')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {visaTypes.map((v) => (
              <div key={v.code} className="bg-white border border-gray-100 rounded-xl p-5 shadow-card">
                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">{v.code}</p>
                <h3 className="font-bold text-secondary mb-2">{v.title}</h3>
                <p className="text-xs text-gray-500 mb-1"><span className="font-semibold">{t('対象者：', 'For: ')}</span>{v.who}</p>
                <p className="text-xs text-gray-500 mb-2"><span className="font-semibold">{t('手続き：', 'Process: ')}</span>{v.process}</p>
                <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-lg p-2">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                  <p className="text-xs text-amber-800">{v.note}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3">
            {t(
              '※学生ビザ（F-1）・就労ビザ（H-1B等）はフィリピン書類のApostille要件が異なります。詳細はご相談ください。',
              '* Student (F-1) and work visas (H-1B, L-1, etc.) have different Apostille requirements. Contact us for details.'
            )}
          </p>
        </section>

        {/* CR-1/IR-1 checklist */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-secondary mb-2">{t('CR-1/IR-1ビザ必要書類チェックリスト', 'CR-1/IR-1 Visa: Required Philippine Documents')}</h2>
          <p className="text-sm text-gray-500 mb-4">
            {t(
              'NVC（National Visa Center）への書類提出時に必要なフィリピン側書類です。すべてDFAアポスティーユ認証が必要です。',
              'These documents are required for submission to the National Visa Center (NVC). All must have DFA Apostille authentication.'
            )}
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-secondary text-white text-xs">
                  <th className="px-4 py-3 text-left font-semibold">{t('書類', 'Document')}</th>
                  <th className="px-4 py-3 text-center font-semibold">{t('必須', 'Required')}</th>
                  <th className="px-4 py-3 text-left font-semibold">{t('備考', 'Notes')}</th>
                </tr>
              </thead>
              <tbody>
                {cr1Docs.map((item, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-secondary border-b border-gray-100 text-xs">{item.doc}</td>
                    <td className="px-4 py-3 text-center border-b border-gray-100">
                      {item.required
                        ? <CheckCircle className="w-4 h-4 text-green-500 mx-auto" />
                        : <span className="text-gray-300 text-xs">{t('場合による', 'May vary')}</span>}
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-500 border-b border-gray-100">{item.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* K-1 checklist */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-secondary mb-2">{t('K-1ビザ必要書類チェックリスト', 'K-1 Visa: Required Philippine Documents')}</h2>
          <p className="text-sm text-gray-500 mb-4">
            {t(
              '米国大使館でのK-1ビザ面接時に必要なフィリピン側書類です。',
              'These documents are required at the US Embassy interview for the K-1 fiancée visa.'
            )}
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-secondary text-white text-xs">
                  <th className="px-4 py-3 text-left font-semibold">{t('書類', 'Document')}</th>
                  <th className="px-4 py-3 text-center font-semibold">{t('必須', 'Required')}</th>
                  <th className="px-4 py-3 text-left font-semibold">{t('備考', 'Notes')}</th>
                </tr>
              </thead>
              <tbody>
                {k1Docs.map((item, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-secondary border-b border-gray-100 text-xs">{item.doc}</td>
                    <td className="px-4 py-3 text-center border-b border-gray-100">
                      {item.required
                        ? <CheckCircle className="w-4 h-4 text-green-500 mx-auto" />
                        : <span className="text-gray-300 text-xs">{t('場合による', 'May vary')}</span>}
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-500 border-b border-gray-100">{item.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* How we help */}
        <section className="mb-12 bg-white rounded-2xl border border-gray-100 shadow-card p-6">
          <h2 className="text-lg font-bold text-secondary mb-4">{t('弊社代行サービスでできること', 'What Our Service Covers')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            {[
              {
                icon: FileText,
                title: t('PSA・CENOMAR取得', 'PSA & CENOMAR Retrieval'),
                desc: t('PSA出生証明書・婚姻証明書・CENOMAR（独身証明書）の取得代行。', 'PSA Birth Certificate, Marriage Certificate, and CENOMAR retrieval.'),
              },
              {
                icon: Fingerprint,
                title: t('NBI Clearance取得', 'NBI Clearance Retrieval'),
                desc: t('指紋採取のサポートを含むNBI取得代行。MATCH FOUND対応込み。', 'NBI Clearance including fingerprint support. MATCH FOUND resolution included.'),
              },
              {
                icon: CheckCircle,
                title: t('DFAアポスティーユ認証', 'DFA Apostille Authentication'),
                desc: t('取得書類すべてにDFAアポスティーユ認証を付けてお届け。', 'All documents authenticated with DFA Apostille before shipping.'),
              },
              {
                icon: ArrowRight,
                title: t('米国住所へのDHL発送', 'DHL Shipping to USA'),
                desc: t('DHL Expressで米国の指定住所に直接発送。送料込み。', 'DHL Express direct to your US address. Shipping included.'),
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-secondary text-sm mb-0.5">{item.title}</p>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 text-sm">
            <p className="font-bold text-primary mb-1">{t('料金目安（Apostille・税・DHL送料込み）', 'Price estimate (Apostille + tax + DHL incl.)')}</p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>• {t('PSA書類取得代行（Apostille込み）：¥40,000〜', 'PSA Document Retrieval (Apostille incl.): from US$289')}</li>
              <li>• {t('NBI Clearance取得代行（Apostille込み）：¥45,000〜', 'NBI Clearance Retrieval (Apostille incl.): from US$329')}</li>
              <li>• {t('配偶者ビザサポートパック（全書類 + Apostille）：¥85,000〜', 'Spouse / CR-1 Visa Support Package (all docs + Apostille): from US$799')}</li>
            </ul>
            <Link to="/pricing/" className="inline-flex items-center gap-1 text-xs text-primary font-bold mt-3 hover:underline">
              {t('料金詳細を見る', 'See full pricing')} <ChevronRight className="w-3 h-3" />
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-secondary mb-4 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-primary" />
            {t('よくある質問', 'Frequently Asked Questions')}
          </h2>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-card overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-5 py-4 flex justify-between items-center"
                  aria-expanded={openFaq === i}
                >
                  <span className="text-sm font-medium text-secondary">Q. {faq.q}</span>
                  {openFaq === i ? <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" /> : <ChevronRight className="w-4 h-4 text-gray-400 shrink-0" />}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-secondary text-white rounded-2xl p-8">
          <p className="text-xs text-primary font-bold mb-2">{t('まずはお気軽に', 'No guesswork — we handle everything')}</p>
          <p className="text-xl font-bold mb-3">
            {t('どの書類が必要か、わからなくて大丈夫です', "Not sure which documents you need?")}
          </p>
          <p className="text-sm text-gray-300 mb-6">
            {t(
              'お状況をお聞きして、必要書類とお見積もりをご案内します。',
              'Tell us your visa type and situation — we\'ll confirm exactly which documents you need and give you a free quote.'
            )}
          </p>
          <Link
            to="/contact/"
            onClick={() => trackEvent('cta_click', { location: 'us_visa_page_bottom' })}
            className="inline-block bg-primary text-white font-bold px-10 py-4 rounded-xl hover:bg-primary-hover transition-colors shadow-lg"
          >
            {t('無料で相談する', 'Get a Free Quote')}
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
