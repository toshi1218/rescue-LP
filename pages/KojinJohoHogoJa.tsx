import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import { useMeta } from '../lib/useMeta';

export default function KojinJohoHogoJa() {
  useMeta(
    '個人情報保護方針 | フィリピン書類取得代行センター',
    '株式会社IGRSの個人情報保護方針。個人情報の保護に関する基本方針・取組みをご説明します。',
  );
  return (
    <PageLayout breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: '個人情報保護方針' }]}>
      <HeroBanner
        title="個人情報保護方針"
        subtitle="最終更新日：2026年3月"
        badges={['個人情報保護法準拠', 'IGRS Inc.']}
        ctaText="お問い合わせはこちら"
        ctaHref="/ja/contact"
      />

      <div className="max-w-2xl">
        <div className="space-y-8 text-sm text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-base font-bold text-secondary mb-3">基本方針</h2>
            <p>
              株式会社IGRS（以下「当社」）は、フィリピン公的書類取得代行サービスの提供にあたり、
              お客様の個人情報を適切に取り扱うことを最重要事項と位置づけます。
              当社は個人情報の保護に関する法律（個人情報保護法）をはじめとする関係法令・ガイドラインを遵守し、
              個人情報の適切な取得・利用・管理・保護に取り組みます。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-secondary mb-3">1. 事業者情報</h2>
            <dl className="space-y-2">
              {[
                { dt: '法人名', dd: '株式会社IGRS（IGRS Inc.）' },
                { dt: '所在地', dd: '和歌山県和歌山市' },
                { dt: '代表者', dd: '代表取締役' },
                { dt: '事業内容', dd: 'フィリピン公的書類取得代行サービス' },
              ].map(({ dt, dd }) => (
                <div key={dt} className="flex gap-4">
                  <dt className="w-28 font-semibold text-gray-600 flex-shrink-0">{dt}</dt>
                  <dd className="text-gray-700">{dd}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section>
            <h2 className="text-base font-bold text-secondary mb-3">2. 個人情報の取得</h2>
            <p className="mb-3">
              当社は、サービス提供に必要な範囲で、適法かつ公正な方法によりお客様の個人情報を取得します。
            </p>
            <ul className="space-y-1.5 pl-4 list-disc">
              {[
                'お名前（漢字・ローマ字）',
                'メールアドレス',
                '電話番号（任意）',
                'ご依頼内容・書類の種別',
                '書類の送付先住所',
                'フィリピン人当事者のお名前・生年月日等（書類取得に必要な情報）',
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-secondary mb-3">3. 個人情報の利用目的</h2>
            <p className="mb-3">取得した個人情報は、以下の目的に限り利用します。</p>
            <ol className="space-y-1.5 pl-4 list-decimal">
              {[
                'フィリピン公的書類取得代行サービスの提供',
                'お問い合わせへの回答および進捗報告',
                '書類・郵便物の国際発送手配',
                'サービス改善のための統計的分析（個人を特定しない形式）',
                '法令上の義務履行',
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
            <p className="mt-3 text-gray-500 text-xs">
              ※上記以外の目的で個人情報を利用する場合は、事前にお客様の同意を得ます。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-secondary mb-3">4. 個人情報の第三者提供</h2>
            <p className="mb-3">
              当社は、以下の場合を除き、お客様の個人情報を第三者に提供しません。
            </p>
            <ul className="space-y-1.5 pl-4 list-disc">
              {[
                'お客様ご本人の同意がある場合',
                '法令の規定に基づく場合',
                'サービス提供に必要な業務委託先（フィリピン現地スタッフ、DHLなどの配送業者）への提供。この場合、委託先に対して適切な個人情報管理を義務付けます',
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-secondary mb-3">5. 安全管理措置</h2>
            <p>
              当社は個人情報への不正アクセス・紛失・破損・改ざん・漏えいを防止するため、
              適切な技術的・組織的な安全管理措置を講じます。
              個人情報の取り扱いに関する内部規程を整備し、従業者への教育・監督を行います。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-secondary mb-3">6. 個人情報の開示・訂正・削除等のご請求</h2>
            <p className="mb-3">
              お客様はご自身の個人情報について、開示・訂正・追加・削除・利用停止・消去・第三者提供の停止をご請求いただけます。
              ご本人確認のうえ、法令の定めに従い対応いたします。
            </p>
            <p className="text-gray-500 text-xs">
              ※開示等のご請求は、下記お問い合わせ先までメールにてご連絡ください。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-secondary mb-3">7. Cookieおよびアクセス解析について</h2>
            <p>
              当サイトは、サービス改善を目的としてGoogle Analyticsを使用しており、
              Cookieを通じて匿名のアクセス情報を収集する場合があります。
              個人を特定する情報は収集しません。ブラウザの設定によりCookieを無効化することが可能です。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-secondary mb-3">8. 本方針の改定</h2>
            <p>
              当社は法令の改正やサービス内容の変更に応じ、本方針を改定することがあります。
              改定後の方針は当サイトに掲載した時点で効力を生じます。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-secondary mb-3">9. お問い合わせ窓口</h2>
            <p className="mb-3">個人情報の取り扱いに関するお問い合わせ・ご請求はこちらまで。</p>
            <dl className="space-y-2 bg-gray-50 rounded-xl p-4">
              {[
                { dt: '事業者名', dd: '株式会社IGRS（IGRS Inc.）' },
                { dt: '所在地', dd: '和歌山県和歌山市' },
                { dt: 'メール', dd: 'お問い合わせフォームよりご連絡ください' },
                { dt: '対応時間', dd: '平日 9:00〜18:00（土日祝・年末年始を除く）' },
              ].map(({ dt, dd }) => (
                <div key={dt} className="flex gap-4">
                  <dt className="w-24 font-semibold text-gray-600 flex-shrink-0">{dt}</dt>
                  <dd className="text-gray-700">{dd}</dd>
                </div>
              ))}
            </dl>
          </section>

        </div>
      </div>
    </PageLayout>
  );
}
