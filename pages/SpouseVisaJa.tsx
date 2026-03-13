import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SectionDivider from '../components/SectionDivider';
import IconCardGrid from '../components/IconCardGrid';
import ComparisonTable from '../components/ComparisonTable';
import { Heart, AlertTriangle, Clock, FileCheck, Globe, Users, FileText, Stamp, ShieldCheck, CheckCircle } from 'lucide-react';
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
        conclusion="「日本人の配偶者等」ビザ審査に対応したPSA婚姻証明書・PSA出生証明書・CENOMARをアポスティーユ付きで準備。2025年6月〜必須の結核非発病証明書についても案内します。"
        points={[
          '入管が求める「紙の原本＋DFAアポスティーユ」形式で手配',
          'PSA婚姻証明書・PSA出生証明書・CENOMARをまとめて代行',
          '2025年6月23日〜：在留資格認定証明書交付申請に結核非発病証明書が必須',
          '有効期限に合わせた取得タイミングもアドバイス',
        ]}
        ctaText="無料で相談する（24時間以内に返信）"
      />

      {/* 2025年6月23日〜 法改正アラート */}
      <div className="mb-8 rounded-2xl border-2 border-amber-400 overflow-hidden">
        <div className="bg-amber-500 px-4 py-3 flex items-start gap-2">
          <AlertTriangle className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
          <p className="text-sm font-bold text-white">【2025年6月23日〜 法改正】フィリピン国籍者は結核非発病証明書の提出が必要になりました</p>
        </div>
        <div className="bg-amber-50 px-4 py-3 text-sm text-amber-800 leading-relaxed space-y-1">
          <p>在留資格認定証明書（COE）交付申請にあたり、フィリピン国籍の方は指定Panel Clinicが発行する<strong>結核非発病証明書（TB Non-Disease Certificate）</strong>の提出が必要となりました。</p>
          <p>有効期間は胸部X線撮影日から<strong>180日</strong>。指定クリニック以外の書類は受理されません。</p>
          <Link to="/ja/kekkaku-shomeisho/" className="inline-block mt-1 text-amber-700 font-semibold hover:underline">→ 結核非発病証明書ガイドを見る（指定クリニック・費用・有効期間）</Link>
        </div>
      </div>

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
      <SectionDivider variant="beige">
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
                { doc: 'PSA婚姻証明書（Certificate of Marriage）', from: 'PSA（フィリピン統計局）', note: 'DFAアポスティーユ付きの紙の原本。電子証明書は入管では使用不可。', highlight: false },
                { doc: 'PSA出生証明書（Birth Certificate）', from: 'PSA', note: 'DFAアポスティーユ付きの紙の原本が原則。', highlight: false },
                { doc: 'CENOMAR（独身証明書）', from: 'PSA', note: '初婚の確認に使用。再婚の場合は代わりに別書類が必要な場合あり。', highlight: false },
                { doc: '結核非発病証明書（TB Non-Disease Certificate）★2025年6月〜必須', from: '指定Panel Clinic（IOM Manila / NHS等）', note: '胸部X線撮影日から180日有効。指定クリニック以外は不可。COE申請に必要。', highlight: true },
                { doc: '各書類の日本語訳', from: '翻訳者（本人でも可）', note: '翻訳者の署名・住所・翻訳日の記載が必要。', highlight: false },
              ].map((row, i) => (
                <tr key={i} className={row.highlight ? 'bg-amber-50' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className={`p-2 border border-gray-200 font-medium ${row.highlight ? 'text-amber-800' : 'text-gray-700'}`}>{row.doc}</td>
                  <td className={`p-2 border border-gray-200 ${row.highlight ? 'text-amber-700' : 'text-gray-600'}`}>{row.from}</td>
                  <td className={`p-2 border border-gray-200 ${row.highlight ? 'text-amber-600' : 'text-gray-500'}`}>{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500">※ 上記は一般的な例です。申請の状況・担当官・提出窓口によって追加書類を求められる場合があります。</p>

        <IconCardGrid
          heading="必要書類の特徴"
          columns={3}
          cards={[
            { icon: FileText, title: 'PSA婚姻証明書', description: '婚姻の事実を証明する公式書類。入管への提出に必須。', accent: 'gold' },
            { icon: Stamp, title: 'DFAアポスティーユ', description: '外務省による認証。紙の原本に付与されるため電子版は不可。', accent: 'blue' },
            { icon: ShieldCheck, title: 'CENOMAR', description: '独身証明書。初婚確認に使用。PSAが発行する公式書類。', accent: 'green' },
            { icon: CheckCircle, title: 'PSA出生証明書', description: '本人の生年月日・国籍を証明。アポスティーユ付き原本が原則。', accent: 'teal' },
            { icon: AlertTriangle, title: '結核非発病証明書（2025年6月〜）', description: 'COE申請に必須。指定Panel Clinic発行・有効期間180日。', accent: 'red' },
            { icon: Globe, title: '日本語訳が必要', description: '翻訳者の署名・住所・翻訳日の記載が必要。本人でも作成可能。', accent: 'purple' },
          ]}
        />
      </SectionDivider>

      {/* 固有コンテンツ：申請種類別の違い */}
      <SectionDivider variant="blue">
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
      </SectionDivider>

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
        variant="visual"
        heading="ご依頼の流れ"
        steps={[
          { title: 'フォームで相談（無料）', description: '申請の種類（新規・更新・変更）と必要書類をお知らせください。入管の要件を確認してご案内します。' },
          { title: '必要書類・料金の確認', description: '料金をご提示します。ご依頼時に着手金50%、書類取得・DHL配送準備完了後に残金50%をお支払いいただきます。' },
          { title: 'フィリピン現地で手配', description: 'PSA取得・DFAアポスティーユを現地スタッフが進めます。進捗は随時ご報告します。' },
          { title: '日本へ郵送・完了', description: '書類が揃い次第、追跡付きでお届けします。目安はおおむね1ヶ月半。' },
        ]}
      />

      <ComparisonTable
        heading="自分で手配 vs IGRS代行"
        rows={[
          { item: '必要書類の確認', self: '自己調査が必要', agency: true },
          { item: 'DFAアポスティーユ手配', self: false, agency: true },
          { item: '有効期限の管理', self: '自己管理', agency: true },
          { item: '入管要件の確認', self: '要英語調査', agency: true },
          { item: '日本語での進捗報告', self: '—', agency: true },
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
          <li><Link to="/ja/haigusha-visa-shorui/" className="text-secondary hover:underline">→ 配偶者ビザに必要な書類チェックリスト【2026年3月版】</Link></li>
          <li><Link to="/ja/kekkaku-shomeisho/" className="text-secondary hover:underline">→ 結核非発病証明書ガイド（2025年6月〜COE申請に必須）</Link></li>
          <li><Link to="/ja/kokusai-kekkon-guide/" className="text-secondary hover:underline">→ 国際結婚の書類一括代行（CENOMAR・PSA・NBI）</Link></li>
          <li><Link to="/ja/psa-kekkon-shomeisho/" className="text-secondary hover:underline">→ PSA婚姻証明書の取得代行</Link></li>
          <li><Link to="/ja/cenomar/" className="text-secondary hover:underline">→ CENOMAR（独身証明書）取得代行</Link></li>
        </ul>
      </nav>
    </PageLayout>
  );
}
