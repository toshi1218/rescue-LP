import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import FeatureList from '../components/FeatureList';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SectionDivider from '../components/SectionDivider';
import IconCardGrid from '../components/IconCardGrid';
import ComparisonTable from '../components/ComparisonTable';
import { Fingerprint, AlertTriangle, Eye, MessageSquare, ShieldCheck, CheckCircle, XCircle, Clock, Globe, Users, FileText } from 'lucide-react';

export default function NbiGuideJa() {
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'NBI Clearance（無犯罪証明書）取得代行' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'フィリピンNBIクリアランス（無犯罪証明書）更新サポート',
        description: '2014年以降に発行されたNBIクリアランスの取得歴があり、個人情報に変更がない更新案件を中心に対応。初回取得・氏名変更がある場合は在日フィリピン大使館等でのご本人対応が必要です。日本語でご相談いただけます。',
        url: 'https://ph-document.com/ja/nbi-clearance',
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
            description: 'NBI Clearance取得・DFAアポスティーユ込み（税抜）。DHL国際郵送費は実費別途',
          },
        },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: '自分が更新対象か分かりません',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'まずは、最後にNBIクリアランスを取った年と、その後に氏名などの変更があったかをお知らせください。更新として進めやすいかどうかを確認してご案内します。',
              },
            },
            {
              '@type': 'Question',
              name: '初めてNBIクリアランスを取るのですが、依頼できますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '初回取得は、在日フィリピン大使館・総領事館での本人による指紋対応が必要です。そのため、当社だけで完結する形ではお受けしていません。進め方の整理が必要な場合はご相談ください。',
              },
            },
            {
              '@type': 'Question',
              name: '結婚して姓が変わりました。更新できますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '個人情報に変更がある場合は、更新ではなく新規・初回側の手順が必要になることがあります。まず状況を確認してご案内します。',
              },
            },
            {
              '@type': 'Question',
              name: 'どのくらいで届きますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '状況により変わります。在外申請はNBI Main Officeで処理され、公式案内では書類到着後の処理は最大5営業日とされていますが、実際の全体日数は書類準備、配送、受取方法によって前後します。まずは現在の状況をご相談ください。',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="NBIクリアランス申請代行"
        subtitle="取得歴、氏名変更の有無、現在地を確認し、進められる案件だけを整理してご案内します。"
        badges={['更新案件を中心に対応', '条件を先に確認', '進捗を随時ご報告']}
        ctaText="更新できるか確認する"
        ctaHref="#contact"
      />

      {/* イントロ */}
      <div className="mb-8 space-y-2 text-sm text-gray-600 leading-relaxed">
        <p>「できるだけ早く取りたい」「更新できるのか分からない」「依頼したあと、今どうなっているのか見えないのが不安」</p>
        <p>
          そんな方に向けて、株式会社IGRSでは、フィリピンNBIクリアランスの更新・転送を日本語で進めやすい形でご案内しています。
          ご相談時に条件を確認し、進められる案件かどうかを先に整理したうえで、必要な流れをご案内します。
        </p>
      </div>

      <CtaBox
        title="まずは無料相談"
        description="過去の取得年と氏名変更の有無をお知らせください。更新として進められるか確認します。"
        buttonText="無料相談はこちら"
        href="#contact"
        variant="primary"
        trustNote="条件確認から対応。返信24時間以内"
      />

      {/* まず最初にご確認ください */}
      <section className="mb-10 rounded-2xl border border-gray-200 bg-white p-6">
        <div className="flex items-start gap-3 mb-4">
          <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <h2 className="text-base font-bold text-gray-900">まず最初にご確認ください</h2>
        </div>
        <p className="text-sm text-gray-700 leading-relaxed mb-4">
          当社が対応しやすいのは、<strong>2014年以降に発行されたNBIクリアランスの取得歴があり、前回証明書から個人情報に変更がない更新案件</strong>です。
          在東京フィリピン大使館の案内でも、2014年以降発行の証明書で、個人情報に変更がなければ更新扱いとされています。
        </p>
        <div className="rounded-xl bg-red-50 border border-red-100 p-4">
          <p className="text-sm font-bold text-red-800 mb-2">一方で、次のようなケースは、当社だけで完結する形では進めにくい案件です。</p>
          <ul className="space-y-1.5">
            {[
              '過去に一度もNBIクリアランスを取得したことがない',
              '最後のNBIクリアランスが2013年以前のもの',
              '結婚などにより、姓やその他の個人情報に変更がある',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-red-700">
                <XCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-red-600 mt-3">
            これらは新規扱いとなり、在日フィリピン大使館・総領事館での本人による指紋対応が必要になります。
          </p>
        </div>
      </section>

      {/* IGRSが大事にしていること */}
      <FeatureList
        heading="IGRSが大事にしていること"
        items={[
          {
            icon: <Eye className="w-4 h-4" />,
            title: '進捗が見える',
            description: '申請、受理、発送など、節目ごとに状況をご案内します。「依頼したのに、その後どうなっているのか分からない」という不安を減らしながら進めます。',
          },
          {
            icon: <ShieldCheck className="w-4 h-4" />,
            title: '条件を先に確認する',
            description: 'NBIクリアランスは、更新で進められる案件と、本人対応が必要な案件がはっきり分かれます。当社では、最初にそこを確認してから進めます。',
          },
          {
            icon: <MessageSquare className="w-4 h-4" />,
            title: '日本語で相談しやすい',
            description: 'フィリピン側のやり取りや必要書類の整理を、日本語で進めやすい形でご案内します。「何を出せばいいのか分からない」状態でも、順番に確認していけます。',
          },
        ]}
      />

      {/* 当社でご案内しやすいケース */}
      <SectionDivider variant="beige">
        <h2 className="text-base font-bold text-gray-900 mb-4">当社でご案内しやすいケース</h2>
        <IconCardGrid
          columns={2}
          cards={[
            { icon: CheckCircle, title: "2014年以降に取得歴がある", description: "2014年以降にNBIクリアランスを取得したことがある方", accent: 'green' },
            { icon: ShieldCheck, title: "個人情報に変更がない", description: "姓・名・生年月日などの個人情報に変更がない方", accent: 'blue' },
            { icon: Globe, title: "日本から手続きしたい", description: "日本からできるだけ手間を減らして進めたい方", accent: 'teal' },
            { icon: FileText, title: "更新として進められる可能性", description: "更新として進められる可能性が高い案件", accent: 'gold' },
          ]}
        />
        <p className="text-xs text-gray-500 border-t border-primary/10 pt-3 mt-4">
          在東京フィリピン大使館の案内でも、2014年以降の証明書で個人情報変更がなければ、新しいFingerprint Cardを作らずに更新手続きが可能とされています。
        </p>
      </SectionDivider>

      <ComparisonTable
        heading="更新案件 vs 新規取得"
        rows={[
          { item: "IGRSで対応可能", self: "新規・氏名変更", agency: "更新案件（2014年以降）" },
          { item: "本人の指紋登録", self: "大使館へ本人訪問", agency: "不要（更新の場合）" },
          { item: "日本語サポート", self: "英語のみ", agency: true },
          { item: "進捗報告", self: "—", agency: true },
        ]}
      />

      {/* ご注意ください */}
      <SectionDivider variant="blue">
        <h2 className="text-base font-bold text-gray-900 mb-4">ご注意ください</h2>

        <div className="space-y-4">
          <div className="rounded-xl bg-amber-50 border border-amber-200 p-5">
            <p className="text-sm font-bold text-amber-900 mb-1">初回取得は、本人対応が必要です</p>
            <p className="text-sm text-amber-800 leading-relaxed">
              初めてNBIクリアランスを取る方は、在日フィリピン大使館・総領事館でFingerprint Card Form No. 5の作成と指紋対応が必要です。そのため、第三者だけで完結する形では進められません。
            </p>
          </div>

          <div className="rounded-xl bg-amber-50 border border-amber-200 p-5">
            <p className="text-sm font-bold text-amber-900 mb-1">氏名変更がある場合も、新規扱いになることがあります</p>
            <p className="text-sm text-amber-800 leading-relaxed">
              たとえば結婚後に姓が変わった場合など、個人情報に変更があると、2014年以降の取得歴があっても新規・初回申請側の手順が必要になります。
            </p>
          </div>

          <div className="rounded-xl bg-amber-50 border border-amber-200 p-5">
            <p className="text-sm font-bold text-amber-900 mb-1">海外からの申請は、NBI Main Officeで処理されます</p>
            <p className="text-sm text-amber-800 leading-relaxed">
              在外申請はNBI Main Officeで処理される案内です。そのため、全体の所要日数は、書類準備だけでなく、現地到着や発送状況にも左右されます。
            </p>
          </div>
        </div>
      </SectionDivider>

      {/* ご依頼時にお願いしていること */}
      <section className="mb-10 rounded-2xl bg-white border border-gray-200 p-6">
        <h2 className="text-base font-bold text-gray-900 mb-2">ご依頼時にお願いしていること</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          当社では、「完全に何もしなくてよい」といった表現はしていません。適法に進めるため、次のご協力をお願いしています。
        </p>
        <ol className="space-y-4">
          {[
            {
              title: 'authorization letterへのご署名',
              desc: '当社で作成した委任状データをお送りします。内容をご確認のうえ、ご署名をお願いします。',
            },
            {
              title: '身分証明書のコピー提出',
              desc: 'ご本人確認のため、有効な身分証明書のコピーをご提出いただきます。',
            },
            {
              title: '案件によっては追加確認',
              desc: '更新条件に合うかどうかを確認するため、過去のNBIクリアランス情報などをお伺いすることがあります。',
            },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary text-white font-bold text-xs flex items-center justify-center mt-0.5">{i + 1}</span>
              <div>
                <p className="text-sm font-bold text-gray-800 mb-0.5">{item.title}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <StepList
        variant="visual"
        heading="ご依頼の流れ"
        steps={[
          { title: '無料相談', description: 'まずは、過去の取得年と、氏名変更の有無をお知らせください。更新として進めやすい案件かどうかを確認します。' },
          { title: 'お見積もり', description: '内容を確認し、費用と進め方をご案内します。' },
          { title: '着手金のお支払い', description: '代金総額の50%をご入金いただいた後、手続きを開始します。' },
          { title: '書類取得後のご確認', description: '取得できた段階で、書類の写しをお送りします。内容をご確認ください。' },
          { title: '残金のお支払い', description: '写しをご確認いただいた後、残りの50%をお支払いいただきます。' },
          { title: '原本の発送', description: '残金の着金確認後、原本を発送します。' },
        ]}
      />

      <FaqSection
        items={[
          { q: '自分が更新対象か分かりません', a: 'まずは、最後にNBIクリアランスを取った年と、その後に氏名などの変更があったかをお知らせください。更新として進めやすいかどうかを確認してご案内します。' },
          { q: '初めてNBIクリアランスを取るのですが、依頼できますか？', a: '初回取得は、在日フィリピン大使館・総領事館での本人による指紋対応が必要です。そのため、当社だけで完結する形ではお受けしていません。進め方の整理が必要な場合はご相談ください。' },
          { q: '結婚して姓が変わりました。更新できますか？', a: '個人情報に変更がある場合は、更新ではなく新規・初回側の手順が必要になることがあります。この場合も、まず状況を確認してご案内します。' },
          { q: 'どのくらいで届きますか？', a: '状況により変わります。在外申請はNBI Main Officeで処理され、公式案内では書類到着後の処理は最大5営業日とされていますが、実際の全体日数は書類準備、配送、受取方法によって前後します。まずは現在の状況をご相談ください。' },
        ]}
        ctaTitle="まずは状況をお聞かせください"
        ctaButton="無料相談フォームへ"
      />
    </PageLayout>
  );
}
