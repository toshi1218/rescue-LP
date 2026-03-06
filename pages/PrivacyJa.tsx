import React from 'react';
import PageLayout from '../components/PageLayout';

export default function PrivacyJa() {
  return (
    <PageLayout breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'プライバシーポリシー' }]}>
      <div className="max-w-2xl">
        <h1 className="text-2xl md:text-3xl font-bold text-secondary mb-2">プライバシーポリシー</h1>
        <div className="h-0.5 w-12 bg-primary mb-2" />
        <p className="text-xs text-gray-400 mb-8">最終更新日：2025年4月1日</p>

        <div className="space-y-8 text-sm text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-base font-bold text-secondary mb-3">1. 事業者情報</h2>
            <p>
              IGRS Inc.（以下「当社」）は、和歌山県和歌山市に本店を置く日本法人です。
              フィリピン公的書類取得代行サービスの提供にあたり、お客様の個人情報を適切に取り扱うため、
              本プライバシーポリシーを定めます。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-secondary mb-3">2. 取得する個人情報</h2>
            <p className="mb-3">当社は、以下の個人情報を取得することがあります。</p>
            <ul className="space-y-1.5 pl-4">
              {[
                'お名前（漢字・ローマ字）',
                'メールアドレス',
                '電話番号',
                'ご住所（書類の送付先）',
                'お問い合わせ・ご相談の内容',
                'サービス提供に必要な書類情報（生年月日・パスポート番号等）',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-600">
                  <span className="text-primary font-bold flex-shrink-0 mt-0.5">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-secondary mb-3">3. 個人情報の利用目的</h2>
            <p className="mb-3">取得した個人情報は、以下の目的にのみ使用します。</p>
            <ul className="space-y-1.5 pl-4">
              {[
                'お問い合わせ・ご相談への回答',
                '書類取得代行サービスの提供（フィリピン現地機関への申請代行を含む）',
                '書類の郵送・配送手配',
                'サービスに関する重要なご連絡（進捗報告・書類到着通知等）',
                '法令に基づく対応',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-600">
                  <span className="text-primary font-bold flex-shrink-0 mt-0.5">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-secondary mb-3">4. 第三者への提供</h2>
            <p className="mb-3">
              当社は、以下の場合を除き、お客様の個人情報を第三者に提供・開示しません。
            </p>
            <ul className="space-y-1.5 pl-4">
              {[
                'お客様本人の同意がある場合',
                'サービス提供のために必要な業務委託先（フィリピン現地の提携スタッフ・郵便・配送業者等）への提供。この場合、委託先に対して適切な管理を求めます',
                '法令に基づき開示が求められた場合',
                '人の生命・身体・財産の保護のために必要な場合',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-600">
                  <span className="text-primary font-bold flex-shrink-0 mt-0.5">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-secondary mb-3">5. 個人情報の管理</h2>
            <p>
              当社は、個人情報の漏洩・紛失・改ざんを防止するため、適切な安全管理措置を講じます。
              個人情報へのアクセスは、業務上必要な担当者に限定します。
              サービス提供終了後は、法令で定める保存期間を経過した後、適切な方法で廃棄します。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-secondary mb-3">6. Cookieおよびアクセス解析</h2>
            <p>
              当サイトでは、サービス改善のためにGoogle Analytics等のアクセス解析ツールを使用しています。
              これらのツールはCookieを使用してアクセス情報を収集しますが、個人を特定する情報は含まれません。
              ブラウザの設定によりCookieを無効にすることができます。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-secondary mb-3">7. 個人情報の開示・訂正・削除</h2>
            <p>
              お客様は、当社が保有するご自身の個人情報について、開示・訂正・削除・利用停止を請求することができます。
              ご請求の際は、本人確認を行った上で、合理的な期間内に対応します。
              お問い合わせは下記の連絡先までご連絡ください。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-secondary mb-3">8. プライバシーポリシーの変更</h2>
            <p>
              本ポリシーは、法令の改正やサービス内容の変更に応じて改定することがあります。
              重要な変更がある場合は、当サイト上でお知らせします。
              最新のポリシーは本ページに掲載します。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-secondary mb-3">9. お問い合わせ先</h2>
            <div className="bg-gray-50 rounded-xl p-5 space-y-1">
              <p className="font-bold text-secondary">IGRS Inc.</p>
              <p className="text-gray-600">和歌山県和歌山市</p>
              <p className="text-gray-600">
                メール：<a href="/ja/contact" className="text-primary hover:underline">お問い合わせフォームよりご連絡ください</a>
              </p>
            </div>
          </section>

        </div>
      </div>
    </PageLayout>
  );
}
