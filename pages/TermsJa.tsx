import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import { useMeta } from '../lib/useMeta';

export default function TermsJa() {
  useMeta(
    '利用規約 | フィリピン書類取得代行センター',
    'フィリピン書類取得代行センター（株式会社IGRS）の利用規約。ご依頼前にお読みください。',
  );
  return (
    <PageLayout breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: '利用規約' }]}>
      <HeroBanner
        title="利用規約"
        subtitle="最終更新日：2026年3月8日"
        badges={['サービス利用条件', 'IGRS Inc.']}
        ctaText="お問い合わせはこちら"
        ctaHref="/ja/contact"
      />

      <div className="max-w-2xl">

        <div className="space-y-8 text-sm text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-base font-bold text-secondary mb-3">1. サービス概要</h2>
            <p>
              IGRS Inc.（以下「当社」）は、フィリピン公的書類（PSA出生証明書・婚姻証明書・CENOMAR・NBI Clearance・DFAアポスティーユ等）の取得代行サービスを提供しています。
              本サービスのご利用にあたり、本利用規約に同意いただいたものとみなします。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-secondary mb-3">2. サービス範囲と制限事項</h2>
            <ul className="space-y-1.5 pl-4">
              {[
                '当社はフィリピン政府機関（PSA・NBI・DFA）からの書類取得を代行します',
                '法律相談・法的助言は行っておりません。法的な事項については弁護士等の専門家にご相談ください',
                '処理結果はフィリピン政府機関の運営状況に依存し、当社の管理外となります',
                '政府機関が発行する書類の内容を保証するものではありません',
                'サービスの範囲は、当サイトに記載された書類取得・認証・配送に限定されます',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-600">
                  <span className="text-primary font-bold flex-shrink-0 mt-0.5">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-secondary mb-3">3. ご注文・お支払い</h2>
            <ul className="space-y-1.5 pl-4">
              {[
                'ご相談・内容確認・お支払い完了後にサービスを開始します',
                '料金は日本円（JPY）またはUSドル（USD）でご案内します',
                'お支払い方法はご相談時にご案内します',
                '料金には明示された項目のみが含まれます。追加のご依頼には別途費用が発生する場合があります',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-600">
                  <span className="text-primary font-bold flex-shrink-0 mt-0.5">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-secondary mb-3">4. 処理期間の目安</h2>
            <p>
              処理期間の目安は、書類取得・DFAアポスティーユ認証・国際郵送を含め全体で約4〜6週間です。
              ただし、実際の期間はフィリピン政府機関の処理状況に依存するため、保証するものではありません。
              遅延が生じた場合は速やかにご連絡し、最新の見込みをお伝えします。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-secondary mb-3">5. キャンセル・返金ポリシー</h2>
            <ul className="space-y-1.5 pl-4">
              {[
                '着手前（フィリピン政府機関への申請前）のキャンセルは無料です',
                'フィリピン政府機関への申請後は、政府手数料分の返金はいたしかねます',
                'キャンセル時点の進捗状況に応じて、一部返金となる場合があります',
                'キャンセル・返金に関するご相談は、お早めにお問い合わせください',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-600">
                  <span className="text-primary font-bold flex-shrink-0 mt-0.5">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-secondary mb-3">6. お客様の責任</h2>
            <ul className="space-y-1.5 pl-4">
              {[
                '書類取得に必要な正確かつ完全な個人情報をご提供ください',
                '当社からの確認連絡には、合理的な期間内にご対応ください',
                '提出期限がある場合は、事前にお知らせください',
                'ご依頼の書類がお客様のご利用目的に合致していることをご確認ください',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-600">
                  <span className="text-primary font-bold flex-shrink-0 mt-0.5">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-secondary mb-3">7. 免責事項</h2>
            <ul className="space-y-1.5 pl-4">
              {[
                'フィリピン政府機関の遅延・天災・不可抗力等による遅延について、当社は責任を負いません',
                '政府機関が発行する書類の内容については、当社は責任を負いません',
                '当社の責任は、お客様にお支払いいただいたサービス料金の額を上限とします',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-600">
                  <span className="text-primary font-bold flex-shrink-0 mt-0.5">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-secondary mb-3">8. 知的財産権</h2>
            <p>
              当サイトに掲載されたコンテンツ・デザイン・素材は、IGRS Inc.に帰属し、著作権法その他の法令により保護されています。
              当社の事前の書面による許可なく、複製・転載・利用することを禁じます。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-secondary mb-3">9. 利用規約の変更</h2>
            <p>
              本規約は、法令の改正やサービス内容の変更に応じて改定することがあります。
              重要な変更がある場合は、当サイト上でお知らせします。
              変更後のサービスのご利用をもって、改定後の規約に同意いただいたものとみなします。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-secondary mb-3">10. 準拠法・お問い合わせ</h2>
            <p className="mb-4">
              本規約は日本法に準拠し、解釈されます。
              本規約に関する紛争については、和歌山地方裁判所を第一審の専属的合意管轄裁判所とします。
            </p>
            <div className="bg-gray-50 rounded-xl p-5 space-y-1">
              <p className="font-bold text-secondary">IGRS Inc.</p>
              <p className="text-gray-600">和歌山県和歌山市</p>
              <p className="text-gray-600">
                メール：<a href="mailto:igrs20200601@gmail.com" className="text-primary hover:underline">igrs20200601@gmail.com</a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-base font-bold text-secondary mb-3">11. お支払い・返金の要約</h2>
            <div className="bg-gray-50 rounded-xl p-5 space-y-2">
              <p className="text-gray-600">
                ご依頼時に着手金として総額の50%をお支払いいただき、書類写しの確認後に残金をお支払いいただきます。
              </p>
              <p className="text-gray-600">
                お支払いはクレジットカード（Visa・Mastercard・Amex・Apple Pay・Google Pay）または銀行振込にて承っています。
              </p>
              <p className="text-gray-600">
                着手前のキャンセルは全額返金。着手後・書類未取得は実費を除いて返金。書類取得後・写し送付前は実費＋作業費を除いて返金。DHL発送後は返金不可です。
              </p>
            </div>
          </section>

        </div>
      </div>
    </PageLayout>
  );
}
