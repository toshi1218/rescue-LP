import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import StepList from '../components/StepList';
import CtaBox from '../components/CtaBox';
import FaqSection from '../components/FaqSection';
import RelatedLinks from '../components/RelatedLinks';
import { useMeta } from '../lib/useMeta';
import { Award, Globe, FileCheck, Stamp } from 'lucide-react';

export default function PrcApostilleJa() {
  useMeta(
    'PRC証明書取得・アポスティーユ代行｜海外就労・資格登録【IGRS】',
    'PRCのGood Standing・Board Rating・Passing・資格登録書類をフィリピンで代理取得。PRC認証、DFAアポスティーユ、DHL海外発送まで対応。海外在住者の委任方法も事前確認。',
  );

  return (
    <PageLayout
      breadcrumbs={[
        { label: 'ホーム', href: '/ja/' },
        { label: '料金', href: '/ja/ryokin/' },
        { label: 'PRC証明書取得・認証代行' },
      ]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'PRC証明書取得・認証・海外発送サービス',
          description: 'PRC（フィリピン専門資格委員会）の各種証明書について、取得、PRC認証、DFAアポスティーユ、国際発送を支援。',
          url: 'https://ph-document.com/ja/prc-apostille/',
          provider: {
            '@type': 'Organization',
            name: 'IGRS Inc.',
            url: 'https://ph-document.com/ja/',
          },
          areaServed: { '@type': 'Country', name: 'JP' },
          offers: {
            '@type': 'Offer',
            price: '39000',
            priceCurrency: 'JPY',
            description: 'DFAアポスティーユ取得＋DHL国際発送（税込・送料込み）',
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'どのPRC証明書を取得できますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '主な対象はCertificate of Good Standing、Certificate of Board Rating、Certificate of Passing、PRC IDやCertificate of Registrationの認証コピーです。その他の照会・確認書類も個別に対応可否を確認します。',
              },
            },
            {
              '@type': 'Question',
              name: '海外から委任して取得できますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '案件によります。2026年のPRC通達により、条件を満たす海外在住のPRC登録専門職は、委任状と所定書類のスキャンを選択したPRC Regional Officeへ送る手続きが利用できます。対象外の案件では原本のSPA等が必要になる場合があります。',
              },
            },
            {
              '@type': 'Question',
              name: 'PRC証明書にDFAアポスティーユを付けられますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'はい。DFAの現行要件では、PRC書類は原本またはPRC認証済み写しとしてアポスティーユ申請対象です。提出国・受取機関によっては大使館認証など別の手続きが必要になるため、見積もり前に提出先の要件を確認します。',
              },
            },
            {
              '@type': 'Question',
              name: '料金はいくらですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'すでにお持ちのPRC書類へのDFAアポスティーユ取得と日本へのDHL発送は39,000円からです。PRCでの証明書取得を含む場合は、書類の種類、委任方法、認証、発送先を確認して個別に総額を提示します。',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="PRC証明書の取得・認証・海外発送"
        subtitle="Good Standing・Board Rating・PassingなどのPRC書類を、フィリピンでの代理取得から認証・DHL発送まで支援します。"
        badges={['PRC窓口での現地対応', 'アポスティーユ対応', '世界各国へDHL発送']}
        ctaText="PRC証明書について相談する"
        ctaHref="#contact"
        ctaService="PRC証明書取得・認証代行"
        lastUpdated="2026年9月30日"
      />

      <section className="mb-10">
        <div className="rounded-xl border border-blue-100 bg-blue-50/60 p-5 flex gap-3">
          <FileCheck className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-bold text-gray-800 mb-2">2026年から海外在住者の委任手続きが改善されました</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              PRC Memorandum Circular No. 1（2026年）により、条件を満たす海外在住のPRC登録専門職は、署名済み委任状・所定の誓約書・海外居住証明をスキャンして、選択したPRC Regional Officeへ送る手続きが利用できます。代理人は受取時に本人確認書類と所定書式を提出します。対象条件と必要書類を確認してから受任します。
            </p>
            <a href="https://www.prc.gov.ph/prc-memorandum-circular-no-1-s-2026" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex text-sm font-semibold text-secondary underline underline-offset-2">PRC公式通達を確認する</a>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary">取得を相談できるPRC書類</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: 'Certificate of Good Standing', text: '海外の資格登録機関・雇用主等に、資格の登録状況を示す証明書。' },
            { title: 'Certificate of Board Rating', text: 'フィリピンの資格試験における成績を示す証明書。' },
            { title: 'Certificate of Passing', text: '資格試験への合格を示すPRC発行の証明書。' },
            { title: 'PIC・Certificate of Registration', text: 'PRC IDや登録証明書について、PRCのCertified True Copyを取得。' },
          ].map(({ title, text }) => (
            <div key={title} className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
              <p className="text-sm font-bold text-secondary mb-1">{title}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-gray-500">その他のPRC照会・資格確認書類も、提出先の指示を確認して対応可否を調査します。</p>
      </section>

      {/* こんな方に向いています */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary">こんな方に向いています</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { icon: Award, text: '日本や海外での就職・資格登録にPRC証明書が必要な方' },
            { icon: Globe, text: '海外在住で、フィリピン国内に手続きを頼める人がいない方' },
            { icon: Stamp, text: '看護師・エンジニアなど、資格の真正証明が必要な方' },
            { icon: FileCheck, text: 'PRC取得からDFAアポスティーユ、海外発送までまとめて任せたい方' },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
              <Icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 代行内容 */}
      <StepList
        heading="代行の流れ"
        steps={[
          {
            title: '必要なPRC書類と提出形式の確認',
            description: '職種、提出国、受取機関、期限を確認し、Good Standing・Rating・Passing・認証コピー等のどれが必要かを整理します。',
          },
          {
            title: 'LERIS申請・委任書類の準備',
            description: '必要に応じて、ご本人にLERISでの予約・支払い、委任状や海外居住証明等をご準備いただきます。案件によっては原本SPAや既存のPIC・CORが必要です。',
          },
          {
            title: 'PRC窓口での申請・受取',
            description: '代理対応が認められる範囲で、現地スタッフが指定のPRC窓口へ出向き、書類の申請・受取・確認を行います。',
          },
          {
            title: '認証・海外発送',
            description: '提出先に必要な場合はDFAアポスティーユ等を手配し、完成書類の写真・PDFをご確認いただいた後、DHLで発送します。',
          },
        ]}
      />

      {/* 料金 */}
      <section className="mb-10">
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">料金・納期</h2>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-4xl font-extrabold text-primary">¥39,000</span>
            <span className="text-sm text-gray-500">〜（税込・DHL国際送料込み）</span>
          </div>
          <p className="text-xs text-gray-400 mb-5">お手元のPRC書類にDFAアポスティーユを取得し、日本へ発送する場合</p>
          <ul className="space-y-2 text-sm text-gray-700 mb-5">
            <li className="flex justify-between border-b border-gray-100 pb-2">
              <span>PRCでの証明書取得を含む場合</span>
              <span className="font-semibold text-secondary">個別見積もり</span>
            </li>
            <li className="flex justify-between border-b border-gray-100 pb-2">
              <span>DFAアポスティーユ取得代行</span>
              <span className="font-semibold text-secondary">込み</span>
            </li>
            <li className="flex justify-between border-b border-gray-100 pb-2">
              <span>DHL国際発送（追跡付き）</span>
              <span className="font-semibold text-secondary">込み</span>
            </li>
            <li className="flex justify-between border-b border-gray-100 pb-2">
              <span>納期</span>
              <span className="font-semibold text-secondary">PRC予約状況確認後に案内</span>
            </li>
            <li className="flex justify-between">
              <span>日本語翻訳が必要な場合</span>
              <span className="font-semibold text-secondary">1部 ¥7,700〜</span>
            </li>
          </ul>
          <p className="text-xs text-gray-500 leading-relaxed">
            取得込みの案件は、PRC手数料、現地対応、認証、発送を含む総額を着手前に提示します。お支払いは着手金約50%・書類の写真またはPDF確認後に残金。着手前のキャンセルは無料です。
          </p>
        </div>
      </section>

      <CtaBox
        title="PRC証明書の取得可否を無料確認"
        description="職種、必要書類、提出国、受取機関、期限をお知らせください。委任方法と認証ルートを確認してお見積もりします。"
        buttonText="無料で相談する"
        href="#contact"
        variant="primary"
        trustNote="相談・見積もり無料／着手前キャンセル無料"
        service="PRC証明書取得・認証代行"
      />

      <FaqSection
        items={[
          { q: 'どのPRC証明書を取得できますか？', a: '主な対象はCertificate of Good Standing、Certificate of Board Rating、Certificate of Passing、PRC IDやCertificate of Registrationの認証コピーです。その他の照会・確認書類も個別に対応可否を確認します。' },
          { q: '海外から委任して取得できますか？', a: '案件によります。2026年のPRC通達により、条件を満たす海外在住のPRC登録専門職は、委任状と所定書類のスキャンをPRC Regional Officeへ送る手続きが利用できます。対象外の案件では原本SPA等が必要になる場合があります。' },
          { q: 'PRC証明書にDFAアポスティーユを付けられますか？', a: 'はい。DFAの現行要件では、PRC書類は原本またはPRC認証済み写しとしてアポスティーユ申請対象です。提出国・受取機関に応じて必要な認証ルートを確認します。' },
          { q: '料金はいくらですか？', a: 'すでにお持ちのPRC書類へのDFAアポスティーユ取得と日本へのDHL発送は39,000円からです。PRCでの証明書取得を含む場合は、書類の種類、委任方法、認証、発送先を確認して個別に総額を提示します。' },
        ]}
        ctaTitle="必要な書類を一緒に整理します"
        ctaButton="無料相談フォームへ"
      />

      <RelatedLinks links={[
        { path: '/ja/kika-shinsei-guide/', label: '帰化申請 フィリピン書類の取得代行' },
        { path: '/ja/nbi-clearance/', label: 'NBIクリアランス アポスティーユ代行' },
        { path: '/ja/e-apostille-fuka/', label: 'e-Apostilleは帰化申請に使える？' },
        { path: '/ja/apostille/', label: 'DFAアポスティーユとは（取得代行）' },
        { path: '/ja/honyaku/', label: 'フィリピン書類の日本語翻訳サービス' },
      ]} />
    </PageLayout>
  );
}
