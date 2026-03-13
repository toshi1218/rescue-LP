import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import { Heart, FileCheck, Globe, Users } from 'lucide-react';
import SummaryBlock from '../components/SummaryBlock';

export default function PsaMarriageCertJa() {
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'PSA婚姻証明書取得代行' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'PSA婚姻証明書取得代行',
        description: 'フィリピンのPSA婚姻証明書をDFAアポスティーユ付きで日本語だけで代行取得。配偶者ビザ・国際結婚・帰化申請に対応。注釈付き（Annotated）にも対応。約1ヶ月〜。',
        url: 'https://ph-document.com/ja/psa-kekkon-shomeisho',
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
            description: 'PSA取得・DFAアポスティーユ込み（税抜）。DHL国際郵送費は実費別途',
          },
        },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: '料金はいくらですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'PSA取得・DFAアポスティーユをまとめた料金です。（DHL国際郵送費は実費別途となります）無料相談後に正確な金額をご提示します。',
              },
            },
            {
              '@type': 'Question',
              name: 'PSAへの婚姻記録の反映はいつ完了しますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'フィリピンで婚姻が成立してもPSAへの記録反映には時間がかかります。Metro Manilaで概ね2〜4か月、地方では6か月以上かかるケースもあります。婚姻成立直後にPSA婚姻証明書を取得しようとすると「not yet registered」になることがあります。',
              },
            },
            {
              '@type': 'Question',
              name: '注釈付き（Annotated）の婚姻証明書は取れますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '対応可能です。アニュルメント後や外国離婚承認後の注釈付き書類も手配できます。まずは状況をお知らせください。',
              },
            },
            {
              '@type': 'Question',
              name: '婚姻後、日本の市区町村役場への報告的届出はいつすればいいですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'フィリピンでの婚姻成立後3か月以内に、在フィリピン日本大使館または日本の市区町村役場への報告的届出が必要です。ただしPSA婚姻証明書の取得には数か月かかるため、取得後に届け出ることになります。届出期限の起算点については担当窓口に確認してください。',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="PSA婚姻証明書、日本語だけで取り寄せます"
        badges={['Annotated版対応', '配偶者ビザ・帰化申請対応', '紙の原本でお届け']}
        ctaText="無料相談はこちら"
        ctaHref="#contact"
      />

      <SummaryBlock
        conclusion="PSA婚姻証明書（アポスティーユ付き）を、日本語だけで取り寄せできます。"
        points={[
          '現地スタッフがPSA申請・DFAアポスティーユを代行',
          '配偶者ビザ・帰化申請に必要な「紙の原本」形式で対応',
          '注釈付き（Annotated）婚姻証明書にも対応',
          '約1ヶ月〜で日本のご住所へ郵送',
        ]}
        ctaText="無料で相談する（24時間以内に返信）"
      />

      {/* 固有コンテンツ：PSA婚姻証明書とは */}
      <section className="mb-10 rounded-2xl bg-white border border-gray-200 p-6">
        <h2 className="text-base font-bold text-gray-900 mb-3">PSA婚姻証明書（Certificate of Marriage）とは</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          PSA婚姻証明書は、フィリピン統計局（Philippine Statistics Authority）が発行する公的な婚姻記録です。フィリピンでの婚姻が成立した後、地方民事登録局（Local Civil Registrar）に届け出られた婚姻情報がPSAに集約され、SECPAセキュリティペーパーに印刷された形で発行されます。
        </p>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          日本の入国管理局や市区町村役場への提出では、このPSA婚姻証明書にDFAアポスティーユ（フィリピン外務省による認証）が付いた紙の原本が原則として求められます。
        </p>

        <h3 className="text-sm font-bold text-gray-800 mb-3">通常版とAnnotated（注釈付き）版の違い</h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-2 border border-gray-200 font-bold text-gray-700">種類</th>
                <th className="text-left p-2 border border-gray-200 font-bold text-gray-700">内容</th>
                <th className="text-left p-2 border border-gray-200 font-bold text-gray-700">主な使用場面</th>
              </tr>
            </thead>
            <tbody>
              {[
                { type: '通常版', content: '婚姻時点の情報のみ記載', use: '初婚の場合の配偶者ビザ申請・帰化申請等' },
                { type: 'Annotated（注釈付き）版', content: '婚姻後に更新された情報（外国離婚の承認、アニュルメント等）が注記として記載', use: '再婚・アニュルメント後・外国離婚承認後の手続き' },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-2 border border-gray-200 text-gray-700 font-medium">{row.type}</td>
                  <td className="p-2 border border-gray-200 text-gray-600">{row.content}</td>
                  <td className="p-2 border border-gray-200 text-gray-500">{row.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-sm font-bold text-gray-800 mb-2">PSA婚姻証明書が発行されるまでの時間</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          フィリピンで婚姻が成立しても、PSAへの記録反映には時間がかかります。<strong>Metro Manilaで2〜4か月、地方では6か月以上</strong>になるケースもあります。配偶者ビザ申請や日本での報告的届出のスケジュールに直接影響するため、婚姻後すぐに書類が取れると思っていると計画が大幅にずれることがあります。
        </p>
      </section>

      <FeatureList
        heading="こんな方へ"
        items={[
          {
            icon: <Heart className="w-4 h-4" />,
            title: '配偶者ビザ・在留資格の申請中',
            description: '入国管理局への在留資格申請に、PSA婚姻証明書が必要です。DFAアポスティーユが必要かどうかも含めて確認します。',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: '再婚・アニュルメント後の手続き',
            description: '注釈付きPSA婚姻証明書が必要なケースも対応します。まずは状況をお知らせください。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: '提出先に合った形式で揃えたい',
            description: 'アポスティーユが必要かどうか、提出先ごとに確認して手配します。日本の提出先では紙の原本が原則必要です。',
          },
        ]}
      />

      <CtaBox
        title="まず「何が必要か」を確認しましょう"
        description="提出先によって必要な形式が異なります。無料相談で整理してから進めます。"
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
            title: 'PSA婚姻証明書取得',
            description: 'フィリピン統計局（PSA）への申請・取得を代行します。SECPAセキュリティペーパー印刷の原本をお届けします。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'DFAアポスティーユ認証（※日本の手続きではほぼ必須です）',
            description: '提出先の要件に応じてDFAアポスティーユ認証も手配します。',
          },
        ]}
      />

      <CtaBox
        title="追加費用の後出しはありません"
        description="PSA取得・DFAアポスティーユをまとめた料金でご案内します。（DHL国際郵送費は実費別途となります）"
        buttonText="料金を確認する"
        href="#contact"
        variant="secondary"
        trustNote="日本語のみでOK・匿名相談可・返信24時間以内"
      />

      <StepList
        heading="ご依頼の流れ"
        steps={[
          { title: 'フォームで相談', description: '用途（配偶者ビザ・帰化申請など）と提出先をお知らせください。' },
          { title: '必要書類・料金の確認', description: '必要書類（原則DFAアポスティーユ込み）と料金をご提示します。' },
          { title: 'フィリピン現地で手配', description: 'PSA取得・DFAアポスティーユを現地スタッフが進めます。' },
          { title: '日本へ郵送', description: '書類が揃い次第、追跡付きでお届けします。目安はおおむね1ヶ月半。' },
        ]}
      />

      <FaqSection
        items={[
          { q: '料金はいくらですか？', a: 'PSA取得・DFAアポスティーユをまとめた料金です。（DHL国際郵送費は実費別途となります）無料相談後に正確な金額をご提示します。' },
          { q: 'PSAへの婚姻記録の反映はいつ完了しますか？', a: 'フィリピンで婚姻が成立してもPSAへの記録反映には時間がかかります。Metro Manilaで概ね2〜4か月、地方では6か月以上かかるケースもあります。婚姻成立直後にPSA婚姻証明書を取得しようとすると「not yet registered」になることがあります。' },
          { q: '注釈付き（Annotated）の婚姻証明書は取れますか？', a: '対応可能です。アニュルメント後や外国離婚承認後の注釈付き書類も手配できます。まずは状況をお知らせください。' },
          { q: '婚姻後、日本の市区町村役場への報告的届出はいつすればいいですか？', a: 'フィリピンでの婚姻成立後3か月以内に、在フィリピン日本大使館または日本の市区町村役場への報告的届出が必要です。ただしPSA婚姻証明書の取得には数か月かかるため、取得後に届け出ることになります。届出期限の起算点については担当窓口に確認してください。' },
        ]}
        ctaTitle="まずは状況をお聞かせください"
        ctaButton="無料相談フォームへ"
      />

      {/* 関連ページ */}
      <nav className="mt-10 pt-8 border-t border-gray-100">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">関連ページ</p>
        <ul className="space-y-2 text-sm">
          <li><Link to="/ja/haigusha-visa/" className="text-secondary hover:underline">→ 配偶者ビザの書類代行</Link></li>
          <li><Link to="/ja/kokusai-kekkon-guide/" className="text-secondary hover:underline">→ 国際結婚の書類一括代行</Link></li>
          <li><Link to="/ja/philippines-de-kekkon/" className="text-secondary hover:underline">→ フィリピンで結婚する全ガイド（PSA婚姻証明書反映の仕組みも解説）</Link></li>
          <li><Link to="/ja/apostille/" className="text-secondary hover:underline">→ DFAアポスティーユ代行</Link></li>
        </ul>
      </nav>
    </PageLayout>
  );
}
