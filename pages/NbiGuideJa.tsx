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
import RelatedArticles from '../components/RelatedArticles';
import { Fingerprint, AlertTriangle, Eye, MessageSquare, ShieldCheck, CheckCircle, XCircle, Clock, Globe, Users, FileText } from 'lucide-react';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR_MONTH_JA } from '../lib/seoDate';

export default function NbiGuideJa() {
  useMeta(
    `NBI Clearance（無犯罪証明書）申請サポート【${SEO_YEAR_MONTH_JA}】渡航不要・HIT対応`,
    'フィリピンのNBI Clearance（無犯罪証明書）取得を渡航不要で申請サポート。HIT（同名者あり）ケースも対応可。DFAアポスティーユ付きで日本へ郵送。配偶者ビザ・帰化申請・海外就労に。まず無料相談。',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'NBI Clearance（無犯罪証明書）申請サポート' }]}
      jsonLd={[{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'フィリピンNBIクリアランス（無犯罪証明書）更新サポート',
        description: '更新案件（2014年以降取得歴あり・個人情報変更なし）はフル代行対応。初回・2013年以前・氏名変更ありの場合も、フィリピン大使館等でNBI Fingerprint Card Form No. 5（指紋カード）を取得済みであれば、NBIオンライン登録からNBI Manila本局提出・アポスティーユ・発送まで日本語でサポート可能。',
        url: 'https://ph-document.com/ja/nbi-clearance/',
        provider: {
          '@type': 'Organization',
          name: 'IGRS Inc.',
          url: 'https://ph-document.com/ja/',
        },
        areaServed: { '@type': 'Country', name: 'JP' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'JPY',
          price: '55000',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '55000',
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
                text: '初回でも対応可能です。まずフィリピン大使館・領事館等でNBI Fingerprint Card Form No. 5（指紋カード）を取得・指紋採取を受けてください。その後の手続き（NBIオンライン登録、Reference Number取得、NBI Manila本局への提出、返送後のPDF納品・原本発送）はIGRSが代行します。',
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
        title="海外ビザ用NBIクリアランス"
        subtitle="更新（2014年以降取得歴あり）はフル代行。初回でも、大使館で指紋カードを取得済みであればそこから先をIGRSが代行します。"
        badges={['更新・初回（指紋カード取得後）対応', 'HIT対応', '進捗を随時ご報告']}
        ctaText="状況を相談する"
        ctaHref="#contact"
        lastUpdated="2026年3月1日"
      />

      <div className="max-w-2xl mx-auto px-4">
        <SectionDivider variant="beige">
          <h2 className="text-xl font-bold text-gray-900 mb-3">料金・期間の目安</h2>
          <dl className="grid grid-cols-2 gap-3 text-sm">
            <div className="bg-white rounded-lg border border-gray-100 p-3">
              <dt className="text-gray-500 text-xs mb-1">正式名称</dt>
              <dd className="font-medium text-gray-800">NBI Clearance（無犯罪証明書）</dd>
            </div>
            <div className="bg-white rounded-lg border border-gray-100 p-3">
              <dt className="text-gray-500 text-xs mb-1">発行機関</dt>
              <dd className="font-medium text-gray-800">フィリピン国家捜査局（NBI）</dd>
            </div>
            <div className="bg-white rounded-lg border border-gray-100 p-3">
              <dt className="text-gray-500 text-xs mb-1">代行料金（税抜）</dt>
              <dd className="font-medium text-gray-800">55,000円〜（DFAアポスティーユ込み）</dd>
              <dd className="text-gray-400 text-xs mt-1">※HIT対応・緊急処理は追加料金が発生することがあります</dd>
            </div>
            <div className="bg-white rounded-lg border border-gray-100 p-3">
              <dt className="text-gray-500 text-xs mb-1">所要期間の目安</dt>
              <dd className="font-medium text-gray-800">約1か月〜1か月半</dd>
            </div>
          </dl>
          <div className="overflow-hidden rounded-xl border border-gray-100 shadow-sm text-sm mt-4">
            <div className="grid grid-cols-[2fr_1fr] bg-secondary text-white">
              <div className="px-4 py-3 font-bold">内容</div>
              <div className="px-4 py-3 font-bold text-center">料金（税抜）</div>
            </div>
            {[
              { label: 'NBI Clearance取得', price: '込み' },
              { label: 'DFAアポスティーユ認証', price: '込み' },
              { label: 'DHL国際配送（追跡付き）', price: '実費別途' },
              { label: '合計（DFAアポスティーユ込み）', price: '55,000円〜', bold: true },
            ].map((row, i) => (
              <div key={row.label} className={`grid grid-cols-[2fr_1fr] border-b border-gray-100 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'}`}>
                <div className={`px-4 py-3 text-gray-700 ${row.bold ? 'font-bold' : ''}`}>{row.label}</div>
                <div className={`px-4 py-3 text-center ${row.bold ? 'font-bold text-primary' : 'text-gray-600'}`}>{row.price}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2">※正確な金額は無料相談後にご提示します。</p>
        </SectionDivider>
      </div>

      {/* イントロ */}
      <div className="mb-8 space-y-2 text-sm text-gray-600 leading-relaxed">
        <p>「できるだけ早く取りたい」「更新できるのか分からない」「依頼したあと、今どうなっているのか見えないのが不安」</p>
        <p>
          そんな方に向けて、株式会社IGRSでは、フィリピンNBIクリアランスの更新・転送を日本語で進めやすい形でご案内しています。
          ご相談時に条件を確認し、進められる案件かどうかを先に整理したうえで、必要な流れをご案内します。
          NBI Clearanceは<a href="https://nbi.gov.ph" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">フィリピン国家捜査局（NBI公式サイト）</a>が発行する公的書類です。
        </p>
      </div>

      <CtaBox
        title="まずは無料相談"
        description="更新か初回（指紋カード取得済み）かをお知らせください。どちらのルートで進められるか確認してご案内します。"
        buttonText="無料相談はこちら"
        href="#contact"
        variant="primary"
        trustNote="条件確認から対応。返信24時間以内"
      />

      {/* 当社でご案内しやすいケース（先出し） */}
      <SectionDivider variant="beige">
        <h2 className="text-base font-bold text-gray-900 mb-4">対応できるケース</h2>
        <IconCardGrid
          columns={2}
          cards={[
            { icon: CheckCircle, title: "更新（2014年以降取得歴あり・個人情報変更なし）", description: "指紋登録不要。NBIオンライン登録から発送まで全てIGRSが代行します。", accent: 'green' },
            { icon: ShieldCheck, title: "初回・2013年以前・氏名変更あり（指紋カード取得済み）", description: "大使館等でNBI Fingerprint Card Form No. 5を取得・指紋採取済みであれば、そこから先をIGRSが代行します。", accent: 'blue' },
            { icon: Globe, title: "日本から手続きしたい", description: "渡航せずに進めたい方。指紋カード取得（大使館1回）後はIGRSが日本語で対応します。", accent: 'teal' },
            { icon: FileText, title: "HIT対応も相談可", description: "同名者照会（HIT）が入った場合も、状況を確認してご案内します。", accent: 'gold' },
          ]}
        />
        <p className="text-xs text-gray-500 border-t border-primary/10 pt-3 mt-4">
          東京フィリピン大使館の案内でも、初回申請者はNBI Form No. 5の取得・指紋採取後に代理人ルートで申請を進める流れが案内されています。
        </p>
      </SectionDivider>

      {/* IGRSが大事にしていること */}
      <FeatureList
        heading="IGRSが大事にしていること"
        items={[
          {
            icon: <Eye className="w-4 h-4" />,
            title: '進捗が見える',
            description: '申請、受理、発送など、節目ごとに状況をご案内します。',
          },
          {
            icon: <ShieldCheck className="w-4 h-4" />,
            title: '条件を先に確認する',
            description: '更新で進められる案件か、本人対応が必要か、最初に確認してから進めます。',
          },
          {
            icon: <MessageSquare className="w-4 h-4" />,
            title: '日本語で相談しやすい',
            description: '「何を出せばいいか分からない」状態でも、順番に確認していけます。',
          },
        ]}
      />

      {/* 指紋カードが必要なケース */}
      <section className="mb-10 rounded-2xl border border-amber-200 bg-amber-50/60 p-6">
        <div className="flex items-start gap-3 mb-3">
          <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <h2 className="text-base font-bold text-gray-900">まず大使館での指紋採取が必要なケース</h2>
        </div>
        <p className="text-sm text-gray-600 mb-4">以下のケースは、在日フィリピン大使館・総領事館でNBI Fingerprint Card Form No. 5の取得と指紋採取が必要です。指紋カードを取得済みであれば、そこからの手続きはIGRSが代行できます。</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
          {[
            '過去に一度もNBIクリアランスを取得したことがない（初回）',
            '最後の取得が2013年以前',
            '結婚等により姓・個人情報に変更がある',
          ].map((item, i) => (
            <div key={i} className="rounded-xl bg-white border border-amber-200 p-3 flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700">{item}</p>
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-amber-300 bg-white p-4">
          <p className="text-xs font-bold text-amber-800 mb-1">指紋カード取得後はIGRSにお任せください</p>
          <p className="text-xs text-gray-600 leading-relaxed">大使館でNBI Fingerprint Card Form No. 5を取得・指紋採取を受けた後、カードをIGRSへ転送いただければ、NBIオンライン登録・Reference Number取得・NBI Manila本局への提出・返送後の発送まで代行します。</p>
        </div>
      </section>

      <ComparisonTable
        heading="更新 vs 初回（指紋カード取得後）"
        rows={[
          { item: "IGRSで対応可能", self: "指紋カード取得前", agency: "どちらも対応可" },
          { item: "本人の指紋登録", self: "大使館で指紋カード取得が必要（初回・2013年以前・氏名変更あり）", agency: "不要（更新の場合）" },
          { item: "IGRSの代行範囲", self: "—", agency: "オンライン登録〜NBI提出〜発送" },
          { item: "日本語サポート", self: "英語のみ", agency: true },
          { item: "進捗報告", self: "—", agency: true },
        ]}
      />

      {/* ご注意ください */}
      <SectionDivider variant="blue">
        <h2 className="text-base font-bold text-gray-900 mb-4">ご注意ください</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { title: '初回・氏名変更は指紋カードが先', note: '初回・2013年以前・氏名変更ありの場合、大使館でNBI Fingerprint Card Form No. 5の取得・指紋採取が必要です。取得後はIGRSが代行します。' },
            { title: 'NBI処理・HIT・返送遅延は保証外', note: 'NBI側の処理遅延、HIT（同名者照会）による追加確認、返送遅延はIGRSの管理外です。発生した場合も状況を共有してご案内します。' },
            { title: '所要日数は前後する', note: '海外からの申請はNBI Main Office処理のため、現地到着・発送状況にも左右されます。' },
          ].map((item, i) => (
            <div key={i} className="rounded-xl bg-amber-50 border border-amber-200 p-4">
              <p className="text-sm font-bold text-amber-900 mb-1">{item.title}</p>
              <p className="text-xs text-amber-800 leading-relaxed">{item.note}</p>
            </div>
          ))}
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
          { title: '無料相談', description: '更新か初回（指紋カード取得済み）かをお知らせください。どちらのルートで進められるか確認してご案内します。' },
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
          { q: '初めてNBIクリアランスを取るのですが、依頼できますか？', a: '初回でも対応可能です。まずフィリピン大使館・領事館等でNBI Fingerprint Card Form No. 5（指紋カード）を取得・指紋採取を受けてください。その後の手続き（NBIオンライン登録、Reference Number取得、NBI Manila本局への提出、返送後のPDF納品・原本発送）はIGRSが代行します。' },
          { q: '結婚して姓が変わりました。更新できますか？', a: '個人情報に変更がある場合は、更新ではなく新規・初回側の手順が必要になることがあります。この場合も、まず状況を確認してご案内します。' },
          { q: 'どのくらいで届きますか？', a: '状況により変わります。在外申請はNBI Main Officeで処理され、公式案内では書類到着後の処理は最大5営業日とされていますが、実際の全体日数は書類準備、配送、受取方法によって前後します。まずは現在の状況をご相談ください。' },
        ]}
        ctaTitle="まずは状況をお聞かせください"
        ctaButton="無料相談フォームへ"
      />
      <RelatedArticles
        items={[
          { href: '/ja/nbi-clearance-overseas/', title: '海外在住のNBI取得', description: 'フィリピンに戻らずに取得したい方はこちら。' },
          { href: '/ja/nbi-hit/', title: 'NBI HIT対応', description: '照会が入ったときの考え方を整理します。' },
          { href: '/ja/nbi-koyukigen/', title: 'NBIの有効期限', description: '提出期限に合わせた取り方の目安が分かります。' },
          { href: '/ja/apostille-ryokin/', title: 'アポスティーユの料金・費用', description: 'NBI Clearanceにアポスティーユを付ける際の料金目安。' },
          { href: '/ja/apostille-shori-kikan/', title: 'アポスティーユの処理期間', description: 'Regular（4営業日）・Express（翌営業日）の違いを解説。' },
          { href: '/ja/kika-shinsei-guide/', title: '帰化申請の書類代行', description: '帰化申請でNBI Clearance・PSA出生証明書を法務局要件で揃えます。' },
          { href: '/ja/psa-crs-cebu-genchi-report/', title: 'PSA証明書の取得手順【セブ窓口】', description: 'セブ窓口での実際の取得フローをレポートしています。' },
          { href: '/ja/document-checklist-by-visa/', title: 'ビザ別書類チェックリスト', description: 'K-1や配偶者ビザで他に何が必要かを確認できます。' },
        ]}
      />
    </PageLayout>
  );
}
