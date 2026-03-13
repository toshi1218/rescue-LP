import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { Heart, AlertTriangle, Clock, FileCheck, Globe, Users } from 'lucide-react';
import SummaryBlock from '../components/SummaryBlock';

export default function SpouseVisaJa() {
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: '配偶者ビザ 書類代行' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: '配偶者ビザ申請 フィリピン書類取得代行',
        description: '配偶者ビザ（在留資格「日本人の配偶者等」）申請に必要なPSA婚姻証明書・出生証明書・CENOMAR・DFAアポスティーユを一括代行。入管要件に合わせた形式で手配。',
        url: 'https://ph-document.com/ja/haigusha-visa',
        provider: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/ja/',
        },
        areaServed: { '@type': 'Country', name: 'JP' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'JPY',
          price: '40000',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '40000',
            priceCurrency: 'JPY',
            description: 'PSA取得・DFAアポスティーユ・国際郵送込み（税抜、書類1通あたり）',
          },
        },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: '配偶者ビザ申請に必要な書類は何ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'PSA婚姻証明書・PSA出生証明書・DFAアポスティーユが基本です。申請の状況によって異なるため、まずご相談ください。',
              },
            },
            {
              '@type': 'Question',
              name: 'フィリピン人の方が日本在住でも書類取得を依頼できますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'はい。フィリピン人の方がフィリピンにいなくても、現地スタッフが代理で手続きします。委任状等の書類が必要な場合は事前にご案内します。',
              },
            },
            {
              '@type': 'Question',
              name: '書類の有効期限はありますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'PSA書類・CENOMARは発行から6ヶ月〜1年が有効期限の目安です。申請タイミングに合わせた取得時期をご案内します。',
              },
            },
            {
              '@type': 'Question',
              name: '更新・変更申請でも書類が必要ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '更新・変更申請でも書類の再取得が必要なケースがあります。現在お持ちの書類の有効期限を確認した上でご案内します。',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="配偶者ビザのフィリピン書類、一括で手配します"
        badges={['在留資格・配偶者ビザ対応', '入管要件の形式で手配', 'アポスティーユ込み']}
        ctaText="無料相談はこちら"
        ctaHref="#contact"
      />

      <SummaryBlock
        conclusion="「日本人の配偶者等」ビザ審査に対応したPSA婚姻証明書・NBIクリアランスをアポスティーユ付きで準備。入管提出に間に合うスケジュールで進めます。"
        points={[
          '入管が求める「紙の原本＋DFAアポスティーユ」形式で手配',
          'PSA婚姻証明書・PSA出生証明書・CENOMARをまとめて代行',
          '有効期限に合わせた取得タイミングもアドバイス',
          '新規申請・更新・変更、どの申請にも対応',
        ]}
        ctaText="無料で相談する（24時間以内に返信）"
      />

      {/* 訴求ブロック */}
      <section className="mb-12 rounded-2xl bg-amber-50 border border-amber-200 p-6">
        <div className="flex items-start gap-3 mb-4">
          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <h2 className="text-base font-bold text-amber-900">配偶者ビザの書類準備、こんな落とし穴があります</h2>
        </div>
        <ul className="space-y-2 text-sm text-amber-800 leading-relaxed">
          <li className="flex items-start gap-2"><span className="text-amber-500 font-bold flex-shrink-0">✕</span>入国管理局への申請では<strong>紙のアポスティーユ原本が必要</strong>です</li>
          <li className="flex items-start gap-2"><span className="text-amber-500 font-bold flex-shrink-0">✕</span>書類の<strong>有効期限（発行から6ヶ月〜1年）</strong>を過ぎると再取得が必要</li>
          <li className="flex items-start gap-2"><span className="text-amber-500 font-bold flex-shrink-0">✕</span>PSA書類・CENOMAR・NBI——<strong>どれが必要かは申請の状況によって異なる</strong></li>
        </ul>
        <p className="mt-4 text-sm font-semibold text-amber-900">→ 入管の要件に合わせた形式で、必要書類を一括手配します。</p>
      </section>

      {/* 固有コンテンツ：入管に提出するフィリピン書類 */}
      <section className="mb-10 rounded-2xl bg-white border border-gray-200 p-6">
        <h2 className="text-base font-bold text-gray-900 mb-4">入国管理局（入管）に提出するフィリピン書類の一覧</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          配偶者ビザ（在留資格「日本人の配偶者等」）の申請には、フィリピン人配偶者に関する書類を入管に提出する必要があります。申請の種類（新規・更新・変更）や個別の状況によって必要書類が異なりますが、一般的に求められる書類は以下の通りです。
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-2 border border-gray-200 font-bold text-gray-700">書類</th>
                <th className="text-left p-2 border border-gray-200 font-bold text-gray-700">発行機関</th>
                <th className="text-left p-2 border border-gray-200 font-bold text-gray-700">形式・注意点</th>
              </tr>
            </thead>
            <tbody>
              {[
                { doc: 'PSA婚姻証明書（Certificate of Marriage）', from: 'PSA（フィリピン統計局）', note: 'DFAアポスティーユ付きの紙の原本。電子証明書は入管では使用不可。' },
                { doc: 'PSA出生証明書（Birth Certificate）', from: 'PSA', note: 'DFAアポスティーユ付きの紙の原本が原則。' },
                { doc: 'CENOMAR（独身証明書）', from: 'PSA', note: '初婚の確認に使用。再婚の場合は代わりに別書類が必要な場合あり。' },
                { doc: '各書類の日本語訳', from: '翻訳者（本人でも可）', note: '翻訳者の署名・住所・翻訳日の記載が必要。' },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-2 border border-gray-200 text-gray-700 font-medium">{row.doc}</td>
                  <td className="p-2 border border-gray-200 text-gray-600">{row.from}</td>
                  <td className="p-2 border border-gray-200 text-gray-500">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500">※ 上記は一般的な例です。申請の状況・担当官・提出窓口によって追加書類を求められる場合があります。</p>
      </section>

      {/* 固有コンテンツ：申請種類別の違い */}
      <section className="mb-10 rounded-2xl bg-gray-50 border border-gray-200 p-6">
        <h2 className="text-base font-bold text-gray-900 mb-4">新規・更新・変更で必要書類はどう違うか</h2>
        <div className="space-y-4">
          {[
            {
              type: '新規申請（在留資格認定証明書交付申請）',
              detail: 'フィリピンにいる配偶者を日本に呼び寄せる場合。PSA婚姻証明書・PSA出生証明書・CENOMARが通常必要。書類は婚姻成立後に取得したものを使用する。',
            },
            {
              type: '在留資格変更許可申請（短期滞在→配偶者ビザ）',
              detail: '観光・短期滞在で来日中の配偶者のビザを変更する場合。新規申請と同様の書類が必要。入管によっては書類の取得日が直近であることを求めることがある。',
            },
            {
              type: '在留期間更新許可申請',
              detail: '既に配偶者ビザを持っている配偶者の更新。初回更新では改めてPSA書類が求められる場合がある。有効期限が近づいたら早めに書類の状態を確認する。',
            },
          ].map((item, i) => (
            <div key={i} className="rounded-xl bg-white border border-gray-200 p-4">
              <p className="text-sm font-bold text-gray-800 mb-1">{item.type}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-start gap-2 text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg p-3">
          <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
          <span>PSA書類・CENOMARは発行から6か月〜1年が有効期限の目安とされています。申請タイミングに合わせた取得時期が重要です。</span>
        </div>
      </section>

      <FeatureList
        heading="こんな方に選ばれています"
        items={[
          {
            icon: <Heart className="w-4 h-4" />,
            title: '在留資格「日本人の配偶者等」を申請する方',
            description: 'PSA婚姻証明書・PSA出生証明書・DFAアポスティーユが必要です。入管の要件に合わせた形式で手配します。',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: '配偶者ビザの更新・変更を予定している方',
            description: '更新・変更申請でも書類の再取得が必要なケースがあります。有効期限を確認した上で、必要なものだけを手配します。',
          },
          {
            icon: <Clock className="w-4 h-4" />,
            title: '申請期限が迫っている方',
            description: 'ビザの期限が近い場合でも、まず現状をお知らせください。優先対応の可否を確認してご案内します。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: '何が必要かわからない方',
            description: '初めての申請・更新・変更、それぞれで必要書類が異なります。状況をお伝えいただければ、必要なものを整理してご案内します。',
          },
        ]}
      />

      <CtaBox
        title="入管要件に合わせた書類を手配します"
        description="「電子か紙か」「何が必要か」——入管の要件を確認した上で、正しい形式で手配します。まずご相談ください。"
        buttonText="無料で相談する"
        href="#contact"
        variant="primary"
        trustNote="着手金50%・書類取得・DHL配送準備完了後に残金50%お支払い・着手前キャンセル無料"
      />

      <FeatureList
        heading="料金に含まれるもの"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'PSA書類・CENOMAR取得',
            description: 'フィリピン統計局（PSA）への申請・取得を代行。婚姻証明書・出生証明書・CENOMARに対応します。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'DFAアポスティーユ認証（※日本の手続きではほぼ必須です）',
            description: 'フィリピン外務省（DFA）によるアポスティーユ認証を手配。紙の原本で対応します。',
          },
        ]}
      />

      <CtaBox
        title="追加費用の後出しはありません"
        description="書類取得・DFAアポスティーユをまとめた料金でご案内します。（DHL国際郵送費は実費別途となります）見積もり後の追加請求はありません。"
        buttonText="料金を確認する"
        href="#contact"
        variant="secondary"
        trustNote="日本語のみでOK・匿名相談可・返信24時間以内"
      />

      <StepList
        heading="ご依頼の流れ"
        steps={[
          { title: 'フォームで相談（無料）', description: '申請の種類（新規・更新・変更）と必要書類をお知らせください。入管の要件を確認してご案内します。' },
          { title: '必要書類・料金の確認', description: '料金をご提示します。ご依頼時に着手金50%、書類取得・DHL配送準備完了後に残金50%をお支払いいただきます。' },
          { title: 'フィリピン現地で手配', description: 'PSA取得・DFAアポスティーユを現地スタッフが進めます。進捗は随時ご報告します。' },
          { title: '日本へ郵送・完了', description: '書類が揃い次第、追跡付きでお届けします。目安はおおむね1ヶ月半。' },
        ]}
      />

      <FaqSection
        items={[
          { q: '配偶者ビザ申請に必要な書類は何ですか？', a: 'PSA婚姻証明書・PSA出生証明書・DFAアポスティーユが基本です。申請の状況によって異なるため、まずご相談ください。' },
          { q: 'フィリピン人の方が日本在住でも書類取得を依頼できますか？', a: 'はい。フィリピン人の方がフィリピンにいなくても、現地スタッフが代理で手続きします。委任状等の書類が必要な場合は事前にご案内します。' },
          { q: '書類の有効期限はありますか？', a: 'PSA書類・CENOMARは発行から6ヶ月〜1年が有効期限の目安です。申請タイミングに合わせた取得時期をご案内します。' },
          { q: '更新・変更申請でも書類が必要ですか？', a: '更新・変更申請でも書類の再取得が必要なケースがあります。現在お持ちの書類の有効期限を確認した上でご案内します。' },
        ]}
        ctaTitle="まずは状況をお聞かせください"
        ctaButton="無料相談フォームへ"
      />

      {/* 関連ページ */}
      <nav className="mt-10 pt-8 border-t border-gray-100">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">関連ページ</p>
        <ul className="space-y-2 text-sm">
          <li><Link to="/ja/kokusai-kekkon-guide/" className="text-secondary hover:underline">→ 国際結婚の書類一括代行（CENOMAR・PSA・NBI）</Link></li>
          <li><Link to="/ja/psa-kekkon-shomeisho/" className="text-secondary hover:underline">→ PSA婚姻証明書の取得代行</Link></li>
          <li><Link to="/ja/cenomar/" className="text-secondary hover:underline">→ CENOMAR（独身証明書）取得代行</Link></li>
          <li><Link to="/ja/gyouseishoshi-to-shorui-shuttoku/" className="text-secondary hover:underline">→ 行政書士の仕事と書類取得サービスの違い</Link></li>
        </ul>
      </nav>
    </PageLayout>
  );
}
