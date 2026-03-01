import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../lib/i18n';
import { useMeta } from '../lib/useMeta';

export default function PrivacyPolicyPage() {
  const { lang } = useLanguage();
  const t = (ja: string, en: string) => lang === 'ja' ? ja : en;

  useMeta(
    t('プライバシーポリシー｜フィリピン書類取得代行センター', 'Privacy Policy | Philippine Document Service'),
    t(
      'フィリピン書類取得代行センター（株式会社IGRS）のプライバシーポリシー。個人情報の収集・利用・管理方針についてご説明します。',
      'Privacy policy of Philippine Document Service (IGRS Inc.). Explains how we collect, use, and manage your personal information.'
    )
  );

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: t('ホーム', 'Home'), item: 'https://ph-document.com/' },
          { '@type': 'ListItem', position: 2, name: t('プライバシーポリシー', 'Privacy Policy'), item: 'https://ph-document.com/privacy-policy/' },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': 'https://ph-document.com/privacy-policy/',
        name: t('プライバシーポリシー｜フィリピン書類取得代行センター', 'Privacy Policy | Philippine Document Service'),
        description: t(
          'フィリピン書類取得代行センター（株式会社IGRS）のプライバシーポリシー。個人情報の収集・利用・管理方針についてご説明します。',
          'Privacy policy of Philippine Document Service (IGRS Inc.). Explains how we collect, use, and manage your personal information.'
        ),
        url: 'https://ph-document.com/privacy-policy/',
        inLanguage: lang,
        publisher: {
          '@type': 'Organization',
          name: t('株式会社IGRS', 'IGRS Inc.'),
          url: 'https://ph-document.com/',
        },
      },
    ],
  };

  const sections = [
    {
      title: t('個人情報の収集について', 'Collection of Personal Information'),
      content: t(
        `当社（株式会社IGRS）は、お問い合わせフォームやメール等を通じて、お客様からお名前、メールアドレス、ご相談内容などの個人情報をお預かりする場合があります。`,
        `IGRS Inc. may collect personal information such as your name, email address, and inquiry details through our contact form, email, or other means of communication.`
      ),
    },
    {
      title: t('個人情報の利用目的', 'Purpose of Use'),
      content: t(
        `収集した個人情報は、以下の目的のためにのみ使用します。
・お問い合わせへの回答および対応
・ご依頼いただいたサービスの提供
・サービスに関する重要なご連絡
・法令上の義務の履行`,
        `We use collected personal information solely for the following purposes:
・Responding to inquiries
・Providing requested services
・Sending important service-related communications
・Fulfilling legal obligations`
      ),
    },
    {
      title: t('第三者への提供', 'Disclosure to Third Parties'),
      content: t(
        `当社は、以下の場合を除き、お客様の個人情報を第三者に提供・開示することはありません。
・お客様本人の同意がある場合
・法令に基づき開示が求められる場合
・人の生命、身体または財産の保護のために必要な場合`,
        `We will not disclose or provide your personal information to third parties except in the following cases:
・With your consent
・When required by law
・When necessary to protect life, body, or property`
      ),
    },
    {
      title: t('個人情報の管理', 'Management of Personal Information'),
      content: t(
        `当社は、お客様の個人情報を正確かつ最新の状態に保ち、不正アクセス・紛失・改ざん等を防止するため、適切なセキュリティ対策を講じます。`,
        `We maintain your personal information accurately and up to date, and implement appropriate security measures to prevent unauthorized access, loss, or alteration.`
      ),
    },
    {
      title: t('Cookieおよびアクセス解析', 'Cookies and Analytics'),
      content: t(
        `当サイトでは、Google Analytics等のアクセス解析ツールを使用することがあります。これらのツールはCookieを使用してデータを収集しますが、個人を特定する情報は収集しません。ブラウザの設定によりCookieを無効にすることができます。`,
        `This website may use access analytics tools such as Google Analytics. These tools collect data using cookies but do not collect personally identifiable information. You can disable cookies through your browser settings.`
      ),
    },
    {
      title: t('個人情報の開示・訂正・削除', 'Disclosure, Correction, and Deletion'),
      content: t(
        `お客様は、当社が保有するご自身の個人情報の開示・訂正・削除を求める権利を有します。ご希望の場合は、下記の問い合わせ先までご連絡ください。`,
        `You have the right to request disclosure, correction, or deletion of your personal information held by us. Please contact us at the address below if you wish to exercise this right.`
      ),
    },
    {
      title: t('プライバシーポリシーの変更', 'Changes to This Policy'),
      content: t(
        `当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更後のポリシーは、当ページへの掲載をもって効力を生じるものとします。`,
        `We may revise this Privacy Policy as necessary. Any changes will take effect upon posting on this page.`
      ),
    },
    {
      title: t('お問い合わせ先', 'Contact'),
      content: t(
        `個人情報の取り扱いに関するご質問・ご相談は、以下までご連絡ください。
会社名：株式会社IGRS
メール：igrs20200601@gmail.com`,
        `For questions or concerns regarding the handling of personal information, please contact us:
Company: IGRS Inc.
Email: igrs20200601@gmail.com`
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
          <span className="text-gray-600">{t('プライバシーポリシー', 'Privacy Policy')}</span>
        </nav>

        <h1 className="text-2xl font-bold text-secondary mb-2">{t('プライバシーポリシー', 'Privacy Policy')}</h1>
        <p className="text-xs text-gray-400 mb-8">{t('最終更新日：2026年2月', 'Last updated: February 2026')}</p>

        <div className="bg-white rounded-2xl shadow-card border border-gray-100 p-6 md:p-8 space-y-8">
          {sections.map(({ title, content }) => (
            <section key={title}>
              <h2 className="text-base font-bold text-secondary mb-3 border-l-4 border-primary pl-3">
                {title}
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">{content}</p>
            </section>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/" className="text-xs text-secondary hover:underline">
            {t('← トップページに戻る', '← Back to Home')}
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
