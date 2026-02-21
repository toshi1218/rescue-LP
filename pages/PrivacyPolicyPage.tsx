import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const sections = [
  {
    title: '個人情報の収集について',
    content: `当社（株式会社IGRS）は、お問い合わせフォームやメール等を通じて、お客様からお名前、メールアドレス、ご相談内容などの個人情報をお預かりする場合があります。`,
  },
  {
    title: '個人情報の利用目的',
    content: `収集した個人情報は、以下の目的のためにのみ使用します。
・お問い合わせへの回答および対応
・ご依頼いただいたサービスの提供
・サービスに関する重要なご連絡
・法令上の義務の履行`,
  },
  {
    title: '第三者への提供',
    content: `当社は、以下の場合を除き、お客様の個人情報を第三者に提供・開示することはありません。
・お客様本人の同意がある場合
・法令に基づき開示が求められる場合
・人の生命、身体または財産の保護のために必要な場合`,
  },
  {
    title: '個人情報の管理',
    content: `当社は、お客様の個人情報を正確かつ最新の状態に保ち、不正アクセス・紛失・改ざん等を防止するため、適切なセキュリティ対策を講じます。`,
  },
  {
    title: 'Cookieおよびアクセス解析',
    content: `当サイトでは、Google Analytics等のアクセス解析ツールを使用することがあります。これらのツールはCookieを使用してデータを収集しますが、個人を特定する情報は収集しません。ブラウザの設定によりCookieを無効にすることができます。`,
  },
  {
    title: '個人情報の開示・訂正・削除',
    content: `お客様は、当社が保有するご自身の個人情報の開示・訂正・削除を求める権利を有します。ご希望の場合は、下記の問い合わせ先までご連絡ください。`,
  },
  {
    title: 'プライバシーポリシーの変更',
    content: `当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更後のポリシーは、当ページへの掲載をもって効力を生じるものとします。`,
  },
  {
    title: 'お問い合わせ先',
    content: `個人情報の取り扱いに関するご質問・ご相談は、以下までご連絡ください。
会社名：株式会社IGRS
メール：igrs20200601@gmail.com`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background-light text-gray-800 font-body">
      <Navbar />

      <main className="max-w-2xl lg:max-w-3xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="text-xs text-gray-400 mb-6" aria-label="パンくずリスト">
          <Link to="/" className="hover:text-secondary">ホーム</Link>
          <span className="mx-1">/</span>
          <span className="text-gray-600">プライバシーポリシー</span>
        </nav>

        <h1 className="text-2xl font-bold text-secondary mb-2">プライバシーポリシー</h1>
        <p className="text-xs text-gray-400 mb-8">最終更新日：2026年2月</p>

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
            ← トップページに戻る
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
