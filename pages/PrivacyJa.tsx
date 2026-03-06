import React from 'react';
import PageLayout from '../components/PageLayout';

export default function PrivacyJa() {
  return (
    <PageLayout breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'プライバシーポリシー' }]}>
      <h1 className="text-2xl md:text-3xl font-bold text-secondary mb-6">プライバシーポリシー</h1>
      <div className="prose prose-sm max-w-none text-gray-700 space-y-6">
        <section>
          <h2 className="text-lg font-bold text-secondary mb-2">1. 個人情報の取得について</h2>
          <p>当社は、お問い合わせフォームおよびサービス提供の過程において、お客様の氏名・メールアドレス・ご相談内容等の個人情報を取得することがあります。</p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-secondary mb-2">2. 個人情報の利用目的</h2>
          <p>取得した個人情報は、以下の目的のみに使用します。</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>お問い合わせへの回答・相談対応</li>
            <li>書類取得代行サービスの提供</li>
            <li>サービスに関する重要なご連絡</li>
          </ul>
        </section>
        <section>
          <h2 className="text-lg font-bold text-secondary mb-2">3. 第三者への提供</h2>
          <p>当社は、法令に基づく場合を除き、お客様の個人情報を第三者に提供・開示することはありません。</p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-secondary mb-2">4. 個人情報の管理</h2>
          <p>当社は、個人情報の漏洩・紛失・改ざんを防止するため、適切な安全管理措置を講じます。</p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-secondary mb-2">5. お問い合わせ</h2>
          <p>個人情報の取扱いに関するお問い合わせは、<a href="#contact" className="text-primary hover:underline">お問い合わせフォーム</a>よりご連絡ください。</p>
        </section>
      </div>
    </PageLayout>
  );
}
