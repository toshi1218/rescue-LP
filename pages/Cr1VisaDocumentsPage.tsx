import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ChevronDown, ChevronRight, AlertTriangle, FileText, Fingerprint, Clock, ArrowRight, HelpCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { trackEvent } from '../lib/analytics';
import { useLanguage } from '../lib/i18n';
import { useMeta } from '../lib/useMeta';

export default function Cr1VisaDocumentsPage() {
  const { lang } = useLanguage();
  const t = (ja: string, en: string) => lang === 'ja' ? ja : en;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useMeta(
    t('CR-1/IR-1配偶者ビザ フィリピン書類ガイド【2026年版】PSA・NBI・Apostille', 'CR-1/IR-1 Spouse Visa: Philippine Documents Guide [2026] — PSA, NBI & Apostille'),
    t('CR-1/IR-1ビザ申請に必要なフィリピン書類（PSA婚姻証明書・NBI Clearance）の取得方法とDFAアポスティーユを解説。NVC提出対応。', 'Full guide to Philippine documents for the CR-1/IR-1 spousal immigrant visa: PSA Marriage Certificate, NBI Clearance, and DFA Apostille for NVC submission. Retrieval service available.')
  );

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: t('ホーム', 'Home'), item: 'https://ph-document.com/' },
          { '@type': 'ListItem', position: 2, name: t('CR-1/IR-1ビザ書類ガイド', 'CR-1/IR-1 Visa Documents Guide'), item: 'https://ph-document.com/cr1-visa-documents/' },
        ],
      },
      {
        '@type': 'Article',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://ph-document.com/cr1-visa-documents/',
          speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2'] },
        },
        headline: t('CR-1/IR-1配偶者ビザ フィリピン書類ガイド【2026年版】', 'CR-1/IR-1 Spouse Visa: Philippine Documents Checklist [2026]'),
        description: t('CR-1/IR-1ビザ申請に必要なPSA婚姻証明書・NBI Clearance・DFAアポスティーユの取得方法とNVC提出手順を解説。', 'How to obtain PSA Marriage Certificate, NBI Clearance, and DFA Apostille for the CR-1/IR-1 spousal immigrant visa NVC submission.'),
        image: 'https://ph-document.com/og-image.png',
        url: 'https://ph-document.com/cr1-visa-documents/',
        inLanguage: lang,
        datePublished: '2026-03-01',
        dateModified: '2026-03-01',
        author: { '@type': 'Organization', name: 'IGRS Inc.', url: 'https://ph-document.com/' },
        publisher: {
          '@type': 'Organization',
          name: 'Philippine Document Retrieval Service',
          url: 'https://ph-document.com/',
          logo: { '@type': 'ImageObject', url: 'https://ph-document.com/favicon.svg' },
        },
        citation: ['https://travel.state.gov', 'https://ph.usembassy.gov', 'https://psa.gov.ph', 'https://www.nbi.gov.ph'],
      },
    ],
  };

  const visaTypes = [
    {
      code: 'CR-1',
      title: t('条件付き永住権（婚姻2年未満）', 'Conditional Resident Visa (married < 2 years)'),
      who: t('米国市民または永住者の配偶者（婚姻2年未満）', 'Spouse of US citizen or permanent resident, married less than 2 years'),
      note: t('入国後2年後にI-751で条件解除の申請が必要。', 'Must file I-751 to remove conditions 2 years after entry.'),
    },
    {
      code: 'IR-1',
      title: t('無条件永住権（婚姻2年以上）', 'Immediate Relative Visa (married 2+ years)'),
      who: t('米国市民の配偶者（婚姻2年以上）', 'Spouse of US citizen, married 2 or more years'),
      note: t('婚姻2年以上の場合は入国時点で無条件のグリーンカードを取得。', 'Receive unconditional Green Card upon entry if married 2+ years.'),
    },
  ];

  const steps = [
    {
      step: 'STEP 1',
      title: t('USCISにI-130を提出', 'US Citizen/LPR Files I-130 with USCIS'),
      desc: t(
        '米国市民または永住者がUSCISにI-130（移民ビザ請願書）を提出します。承認まで通常6〜24ヶ月かかります（市民か永住者かにより異なります）。',
        'The US citizen or lawful permanent resident petitioner files Form I-130 (Petition for Alien Relative) with USCIS. Approval can take 6–24 months depending on petitioner status.'
      ),
    },
    {
      step: 'STEP 2',
      title: t('NVC（National Visa Center）書類審査', 'NVC Document Stage'),
      desc: t(
        'I-130承認後、NVCが書類審査を担当します。フィリピン側書類（PSA婚姻証明書・NBI Clearance等、すべてApostille付き）をNVCに提出します。',
        'After I-130 approval, the National Visa Center (NVC) takes over for the document stage. Submit all Philippine documents (PSA Marriage Certificate, NBI Clearance, etc. with DFA Apostille) to NVC.'
      ),
    },
    {
      step: 'STEP 3',
      title: t('フィリピン側の書類を準備', 'Filipino Spouse Prepares Philippine Documents'),
      desc: t(
        'NVCからの連絡後、PSA婚姻証明書・NBI Clearance・PSA出生証明書などをDFAアポスティーユ付きで取得します。NVC提出の2〜3ヶ月前には手配を始めてください。',
        'After NVC contact, obtain all Philippine documents with DFA Apostille. Begin at least 2–3 months before your NVC document submission deadline.'
      ),
    },
    {
      step: 'STEP 4',
      title: t('マニラの米国大使館でビザ面接', 'Visa Interview at US Embassy Manila'),
      desc: t(
        'NVCでの書類審査が完了すると大使館面接の案内が届きます。マニラの米国大使館で面接を受け、ビザが発給されると米国に入国できます。',
        'Once NVC approves the documents, you receive an interview appointment. Attend the interview at the US Embassy in Manila. If approved, you receive an immigrant visa and can enter the US as a permanent resident.'
      ),
    },
  ];

  const docs = [
    {
      doc: t('PSA婚姻証明書 + DFAアポスティーユ', 'PSA Marriage Certificate + DFA Apostille'),
      required: true,
      note: t('NVC提出必須。フィリピンで結婚した証明。Apostille必須。', 'Required for NVC. Proves the marriage in the Philippines. Apostille required.'),
    },
    {
      doc: t('PSA出生証明書（配偶者） + DFAアポスティーユ', 'PSA Birth Certificate (Spouse) + DFA Apostille'),
      required: true,
      note: t('フィリピン人配偶者の出生証明書。NVC提出必須。Apostille必須。', 'Birth certificate of the Filipino spouse. Required for NVC. Apostille required.'),
    },
    {
      doc: t('NBI Clearance（無犯罪証明書） + DFAアポスティーユ', 'NBI Clearance + DFA Apostille'),
      required: true,
      note: t('NVC・大使館面接で必要。発行から1年以内。Apostille強く推奨。', 'Required for NVC and embassy interview. Valid within 1 year. Apostille strongly recommended.'),
    },
    {
      doc: t('CENOMAR（婚前の独身証明） + DFAアポスティーユ', 'CENOMAR (Pre-marriage single status proof) + DFA Apostille'),
      required: false,
      note: t('婚前の独身証明として求められる場合あり。念のため取得を推奨。', 'May be requested as proof of single status before marriage. Recommended as a precaution.'),
    },
    {
      doc: t('有効なフィリピンパスポート', 'Valid Philippine Passport'),
      required: true,
      note: t('面接日から6ヶ月以上の有効期限があること。', 'Must be valid for at least 6 months beyond the interview date.'),
    },
    {
      doc: t('医療診断書（大使館指定パネル医）', 'Medical Examination (Embassy-Designated Panel Physician)'),
      required: true,
      note: t('マニラのSt. Luke's Extension Clinic等、大使館指定機関のみ有効。', 'Only from a US Embassy-designated clinic (e.g. St. Luke's Extension Clinic in Manila).'),
    },
    {
      doc: t('婚姻関係証明（写真・渡航記録等）', 'Evidence of Bona Fide Marriage (photos, travel records, etc.)'),
      required: false,
      note: t('必須ではないが、面接での質問に備えて持参を推奨。', 'Not strictly required, but highly recommended to bring to the interview.'),
    },
  ];

  const faqs = [
    {
      q: t('CR-1とIR-1の違いは何ですか？', 'What is the difference between CR-1 and IR-1?'),
      a: t(
        'CR-1（条件付き永住者）は婚姻から2年未満の配偶者に発給され、入国後2年後にI-751で条件解除の申請が必要です。IR-1（即時家族）は婚姻から2年以上の配偶者に発給され、条件なしのグリーンカードが入国時に付与されます。どちらも同じI-130申請で手続きを開始します。',
        'CR-1 (Conditional Resident) is issued to spouses married less than 2 years at the time of visa issuance. You must file I-751 to remove conditions 2 years after entry. IR-1 (Immediate Relative) is for spouses married 2+ years and provides an unconditional Green Card upon entry. Both start with the same I-130 petition.'
      ),
    },
    {
      q: t('NVCとは何ですか？何を提出すればいいですか？', 'What is NVC and what documents do I submit there?'),
      a: t(
        'NVC（National Visa Center）はUSCIS承認後のビザ申請を管理する米国の政府機関です。NVC段階ではDS-260フォーム（移民ビザ申請書）の入力と、PSA婚姻証明書・PSA出生証明書・NBI Clearance（すべてDFAアポスティーユ付き）等の書類をオンラインでアップロードします。',
        'The National Visa Center (NVC) manages visa applications after USCIS approval. At the NVC stage, you submit Form DS-260 (immigrant visa application) and upload Philippine documents — PSA Marriage Certificate, PSA Birth Certificate, NBI Clearance (all with DFA Apostille) — through the online system.'
      ),
    },
    {
      q: t('PSA婚姻証明書の取得にどのくらいかかりますか？', 'How long does it take to get a PSA Marriage Certificate?'),
      a: t(
        'フィリピンの地方市役所（LCR）への婚姻登録後、PSAデータベースへの反映に通常3〜6ヶ月かかります。その後PSA婚姻証明書の取得申請が可能になり、取得自体には約2〜3週間かかります。DFAアポスティーユにはさらに1〜2週間かかります。',
        'After the marriage is registered at the Philippine Local Civil Registry, it typically takes 3–6 months to appear in the PSA database. Once registered, obtaining the PSA Marriage Certificate takes about 2–3 weeks. DFA Apostille adds another 1–2 weeks.'
      ),
    },
    {
      q: t('書類にDFAアポスティーユは必ず必要ですか？', 'Is DFA Apostille always required for NVC?'),
      a: t(
        'はい、NVC（National Visa Center）への書類提出時にPSA書類・NBI ClearanceへのDFAアポスティーユ認証は実質的に必須です。アポスティーユなしでは書類が受理されない場合があり、後から追加取得は時間的コストが大きいです。最初からApostille付きで取得することを強く推奨します。',
        'Yes, DFA Apostille is effectively required for all Philippine documents submitted to NVC. Documents without Apostille may be rejected, and obtaining it later adds significant time. We strongly recommend getting Apostille on all documents from the start to avoid delays.'
      ),
    },
    {
      q: t('フィリピンに行かずに書類を取得できますか？', 'Can I get Philippine documents without traveling to the Philippines?'),
      a: t(
        'はい。弊社の代行サービスを利用すればフィリピンに渡航する必要はありません。セブを拠点とするスタッフがPSA・NBI取得からDFAアポスティーユ認証まで一括して対応し、DHLで米国の指定住所に直接お届けします。',
        'Yes. With our retrieval service, neither you nor your spouse needs to travel to the Philippines. Our Cebu-based team handles PSA, NBI retrieval, and DFA Apostille — then ships everything via DHL Express directly to your US address.'
      ),
    },
    {
      q: t('NBI HITが出た場合はどうなりますか？', 'What happens if the NBI application shows a HIT?'),
      a: t(
        'NBI HITとは、同姓同名者の記録との照合（MATCH FOUND）が発生した状態です。追加の身元確認手続きが必要で、通常より1〜4週間程度追加でかかります。弊社ではHIT対応も込みでサポートしています。',
        'An NBI HIT (MATCH FOUND) means the applicant\'s name matched someone in the database, requiring additional identity verification. This typically adds 1–4 weeks. Our service includes full MATCH FOUND resolution support at no extra charge.'
      ),
    },
    {
      q: t('PSA婚姻証明書が「NOT FOUND」の場合はどうすればよいですか？', 'What if the PSA Marriage Certificate shows "NOT FOUND"?'),
      a: t(
        '婚姻から3〜6ヶ月以内の場合、まだPSAデータベースに登録されていない可能性があります。地方市役所（LCR）での登録が完了しているか確認し、その後再度PSAに申請してください。弊社では登録状況の確認代行も承っています。',
        'If your marriage was within the past 3–6 months, the record may not yet be in the PSA database. Verify that registration was completed at the Local Civil Registry (LCR), then recheck with PSA after the period passes. We also offer status verification as part of our service.'
      ),
    },
    {
      q: t('全体のプロセスにどのくらいかかりますか？', 'How long does the entire CR-1/IR-1 process take?'),
      a: t(
        'I-130提出からビザ発給までの総所要期間は米国市民の場合12〜24ヶ月、永住者の場合はさらに長くなる場合があります。フィリピン書類の取得は書類に依りますが通常4〜8週間が目安です。全体プロセスを見越して早めに書類取得を進めることをおすすめします。',
        'The total CR-1/IR-1 process from I-130 filing to visa issuance typically takes 12–24 months for US citizens (longer for permanent residents). Philippine document retrieval takes 4–8 weeks on average. We recommend starting document procurement as soon as your I-130 is approved.'
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
          <Link to="/" className="hover:text-secondary">{t('ホーム', 'Home')}</Link>
          <span className="mx-1">/</span>
          <span className="text-gray-600">{t('CR-1/IR-1ビザ書類ガイド', 'CR-1/IR-1 Visa Documents')}</span>
        </nav>

        <h1 className="text-2xl md:text-3xl font-bold text-secondary leading-tight mb-4">
          {t(
            'CR-1/IR-1配偶者ビザに必要なフィリピン書類ガイド【2026年版】',
            'Philippine Documents for the CR-1/IR-1 Spouse Visa [2026 Guide]'
          )}
        </h1>
        <p className="text-sm text-gray-500 mb-8">{t('最終更新：2026年3月1日 ｜ IGRS Inc.', 'Last updated: March 1, 2026 | IGRS Inc.')}</p>

        {/* Intro callout */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10 text-sm text-blue-900 leading-relaxed">
          <strong>{t('このページについて', 'About this guide')}</strong><br />
          {t(
            'このガイドは、フィリピン人配偶者が米国CR-1/IR-1移民ビザ（配偶者）を申請する際に必要なフィリピン書類の取得方法を解説します。NVC提出から大使館面接まで必要な書類を網羅しています。',
            'This guide covers every Philippine document required for the CR-1/IR-1 spousal immigrant visa — from PSA Marriage Certificate and NBI Clearance to DFA Apostille for NVC submission. We retrieve and ship all documents to the USA.'
          )}
        </div>

        {/* CR-1 vs IR-1 */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-secondary mb-4">{t('CR-1とIR-1の違い', 'CR-1 vs IR-1: Which Applies to You?')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {visaTypes.map((v) => (
              <div key={v.code} className="bg-white border border-gray-100 rounded-xl p-5 shadow-card">
                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">{v.code}</p>
                <h3 className="font-bold text-secondary mb-2">{v.title}</h3>
                <p className="text-xs text-gray-500 mb-3"><span className="font-semibold">{t('対象者：', 'For: ')}</span>{v.who}</p>
                <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-lg p-2">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                  <p className="text-xs text-amber-800">{v.note}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3">
            {t(
              '※どちらの場合も必要なフィリピン書類は同一です。I-130申請から始める手続きも同じです。',
              '* The required Philippine documents are the same for both. The process starts with the same I-130 petition.'
            )}
          </p>
        </section>

        {/* Process overview */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-secondary mb-4">{t('CR-1/IR-1ビザの流れ', 'CR-1/IR-1 Visa Process Overview')}</h2>
          <div className="space-y-4">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-4 bg-white rounded-xl border border-gray-100 shadow-card p-4">
                <div className="shrink-0 w-16 text-center">
                  <span className="text-xs font-bold text-primary">{s.step}</span>
                </div>
                <div>
                  <p className="font-bold text-secondary text-sm mb-1">{s.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Document checklist */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-secondary mb-2">
            {t('NVC・大使館面接 必要書類チェックリスト', 'NVC & Embassy Interview: Document Checklist')}
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            {t(
              'NVCへの書類提出・マニラ米国大使館での面接時に必要なフィリピン側書類です。',
              'Philippine documents required for NVC submission and the US Embassy Manila interview.'
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
                {docs.map((item, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-secondary border-b border-gray-100 text-xs">{item.doc}</td>
                    <td className="px-4 py-3 text-center border-b border-gray-100">
                      {item.required
                        ? <CheckCircle className="w-4 h-4 text-green-500 mx-auto" />
                        : <span className="text-gray-300 text-xs">{t('推奨', 'Recommended')}</span>}
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-500 border-b border-gray-100">{item.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-3 flex items-start gap-2 text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg p-3">
            <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>
              {t(
                '書類要件はNVCの指示および大使館によって変更になる場合があります。travel.state.govの最新情報を必ずご確認ください。',
                'Document requirements may change per NVC instructions and embassy policy. Always verify at travel.state.gov and the US Embassy Manila website.'
              )}
            </span>
          </div>
        </section>

        {/* How we help */}
        <section className="mb-12 bg-white rounded-2xl border border-gray-100 shadow-card p-6">
          <h2 className="text-lg font-bold text-secondary mb-4">{t('弊社代行サービスでできること', 'What Our Service Covers')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            {[
              {
                icon: FileText,
                title: t('PSA書類取得（婚姻・出生証明書）', 'PSA Marriage & Birth Certificate'),
                desc: t('PSA婚姻証明書・出生証明書の取得代行。Apostille込み。', 'PSA Marriage and Birth Certificate retrieval including DFA Apostille.'),
              },
              {
                icon: Fingerprint,
                title: t('NBI Clearance取得', 'NBI Clearance Retrieval'),
                desc: t('指紋サポート込みのNBI取得代行。MATCH FOUND対応込み。', 'Includes fingerprint support and MATCH FOUND resolution.'),
              },
              {
                icon: CheckCircle,
                title: t('DFAアポスティーユ認証', 'DFA Apostille Authentication'),
                desc: t('すべての書類にDFAアポスティーユを付けてお届け。', 'All documents authenticated with DFA Apostille before shipping.'),
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
            <p className="font-bold text-primary mb-1">{t('料金目安（Apostille・税・DHL送料込み）', 'Price estimate (Apostille + DHL shipping incl.)')}</p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>• {t('PSA婚姻証明書（Apostille込み）：¥35,000〜', 'PSA Marriage Certificate (Apostille incl.): from US$259')}</li>
              <li>• {t('NBI Clearance（Apostille込み）：¥45,000〜', 'NBI Clearance (Apostille incl.): from US$329')}</li>
              <li>• {t('CR-1/IR-1フルパック（全書類 + Apostille）：¥95,000〜', 'CR-1/IR-1 Full Package (all docs + Apostille): from US$799')}</li>
            </ul>
            <Link to="/pricing/" className="inline-flex items-center gap-1 text-xs text-primary font-bold mt-3 hover:underline">
              {t('料金詳細を見る', 'See full pricing')} <ChevronRight className="w-3 h-3" />
            </Link>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-secondary mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            {t('書類取得の目安期間', 'Estimated Timeline for Document Retrieval')}
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-secondary text-white text-xs">
                  <th className="px-4 py-3 text-left font-semibold">{t('書類', 'Document')}</th>
                  <th className="px-4 py-3 text-left font-semibold">{t('取得期間目安', 'Est. Retrieval Time')}</th>
                  <th className="px-4 py-3 text-left font-semibold">{t('DFAアポスティーユ', 'DFA Apostille')}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { doc: t('PSA婚姻証明書', 'PSA Marriage Certificate'), time: t('2〜3週間', '2–3 weeks'), apostille: t('+1〜2週間', '+1–2 weeks') },
                  { doc: t('PSA出生証明書', 'PSA Birth Certificate'), time: t('2〜3週間', '2–3 weeks'), apostille: t('+1〜2週間', '+1–2 weeks') },
                  { doc: 'NBI Clearance', time: t('1〜2週間（HIT時+1〜4週間）', '1–2 weeks (HIT: +1–4 weeks)'), apostille: t('+1〜2週間', '+1–2 weeks') },
                  { doc: t('DHL発送〜米国到着', 'DHL to USA'), time: t('3〜5営業日', '3–5 business days'), apostille: '—' },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-secondary border-b border-gray-100 text-xs">{row.doc}</td>
                    <td className="px-4 py-3 text-xs text-gray-600 border-b border-gray-100">{row.time}</td>
                    <td className="px-4 py-3 text-xs text-gray-600 border-b border-gray-100">{row.apostille}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            {t(
              '※PSA婚姻証明書はLCR登録から3〜6ヶ月後にPSAデータベースへ反映されます。婚姻直後の場合はこの期間も考慮してください。',
              '* PSA Marriage Certificate appears in the PSA database 3–6 months after Local Civil Registry registration. Factor this in if you were recently married.'
            )}
          </p>
        </section>

        {/* Related links */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-secondary mb-4">{t('関連ガイド', 'Related Guides')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { to: '/psa-marriage-certificate/', label: t('PSA婚姻証明書の取得方法', 'How to Get PSA Marriage Certificate') },
              { to: '/nbi-clearance/', label: t('NBI Clearanceガイド 完全版', 'NBI Clearance Complete Guide') },
              { to: '/apostille/', label: t('DFAアポスティーユガイド', 'DFA Apostille Guide') },
              { to: '/cenomar/', label: t('CENOMARガイド', 'CENOMAR Guide') },
              { to: '/k1-visa-documents/', label: t('K-1婚約者ビザ書類ガイド', 'K-1 Fiancé Visa Documents Guide') },
              { to: '/us-visa-documents/', label: t('米国ビザ書類 全体ガイド', 'US Visa Documents Overview') },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="flex items-center gap-2 bg-white border border-gray-100 rounded-xl px-4 py-3 text-sm text-secondary font-medium hover:border-primary hover:text-primary transition-colors shadow-card"
              >
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                {link.label}
              </Link>
            ))}
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
                  {openFaq === i
                    ? <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                    : <ChevronRight className="w-4 h-4 text-gray-400 shrink-0" />}
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
          <p className="text-xs text-primary font-bold mb-2">{t('まずはお気軽に', 'We handle everything — you focus on your future together')}</p>
          <p className="text-xl font-bold mb-3">
            {t('NVC提出に必要な書類、全部まかせてください', 'Ready to start your CR-1/IR-1 document process?')}
          </p>
          <p className="text-sm text-gray-300 mb-6">
            {t(
              'CR-1/IR-1ビザに必要なフィリピン書類の取得からDFAアポスティーユ、米国への発送まで一括対応します。',
              'Tell us your situation — we\'ll confirm which documents you need for NVC submission and give you a free quote. We retrieve, authenticate, and ship to the USA.'
            )}
          </p>
          <Link
            to="/contact/"
            onClick={() => trackEvent('cta_click', { location: 'cr1_visa_page_bottom' })}
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
