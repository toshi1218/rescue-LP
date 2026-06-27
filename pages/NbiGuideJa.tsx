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
import { Fingerprint, AlertTriangle, Eye, MessageSquare, ShieldCheck, CheckCircle, XCircle, Clock, Globe, Users, FileText, Mail, Smartphone, PackageSearch } from 'lucide-react';
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
        description: '2014年以降に発行されたNBIクリアランスの取得歴があり、個人情報に変更がない更新案件を中心に対応。初回取得・氏名変更がある場合は在日フィリピン大使館等でのご本人対応が必要です。日本語でご相談いただけます。',
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
            description: '初回申請PDF納品プラン55,000円（税込）、原本郵送込み61,000円。更新・再発行PDF納品39,800円〜、原本郵送込み46,800円〜。DFAアポスティーユ込みは+20,000円',
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
                text: '全体ではおおむね1か月が目安です。在外申請はNBI Main Officeで処理され、公式案内では書類到着後の処理は最大5営業日とされていますが、実際の全体日数は書類準備、配送、受取方法によって前後します。まずは現在の状況をご相談ください。',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="海外ビザ用NBIクリアランス"
        subtitle="取得歴、氏名変更の有無、現在地を確認し、進められる案件だけを整理してご案内します。"
        badges={['更新案件を中心に対応', '条件を先に確認', '進捗を随時ご報告']}
        ctaText="更新できるか確認する"
        ctaHref="#contact"
        lastUpdated="2026年3月1日"
      />

      <div className="max-w-2xl mx-auto px-4">
        <SectionDivider variant="beige">
          <h2 className="text-xl font-bold text-gray-900 mb-3">料金・期間の目安</h2>

          {/* プラン比較カード */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            {/* 初回申請 */}
            <div className="bg-white rounded-2xl border-2 border-secondary p-4 flex flex-col">
              <div className="text-xs font-bold text-white bg-secondary rounded-full px-3 py-0.5 self-start mb-3">初回申請・Form No.5利用</div>
              <p className="text-xs text-gray-500 mb-3 leading-relaxed">大使館で指紋採取済みの方。ポータル登録・支払い・取得・納品まで代行。</p>
              <div className="mt-auto">
                <div className="text-2xl font-bold text-secondary">55,000<span className="text-sm font-normal">円（税込）</span></div>
                <div className="text-xs text-gray-500 mt-0.5">PDF納品プラン</div>
                <div className="text-sm text-gray-700 mt-1.5">原本を日本へ郵送 <span className="font-medium">+6,000円 → 61,000円</span></div>
              </div>
            </div>

            {/* 更新・再発行 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-4 flex flex-col">
              <div className="text-xs font-bold text-white bg-gray-500 rounded-full px-3 py-0.5 self-start mb-3">更新・再発行</div>
              <p className="text-xs text-gray-500 mb-3 leading-relaxed">2014年以降に取得歴があり、氏名等の変更がない方。指紋採取不要で進められるケース。</p>
              <div className="mt-auto">
                <div className="text-2xl font-bold text-gray-700">39,800<span className="text-sm font-normal">円（税込）〜</span></div>
                <div className="text-xs text-gray-500 mt-0.5">PDF納品プラン</div>
                <div className="text-sm text-gray-700 mt-1.5">原本を日本へ郵送 <span className="font-medium">+7,000円 → 46,800円</span></div>
              </div>
            </div>
          </div>

          {/* 最小プラン */}
          <div className="bg-gray-50 rounded-xl border border-gray-200 p-3 flex items-center justify-between text-sm mb-3">
            <div>
              <span className="font-medium text-gray-800">ポータル入力・支払いのみ</span>
              <span className="text-xs text-gray-500 ml-2">登録〜支払いだけ代行。書類の取得・配送は含まない。</span>
            </div>
            <span className="font-bold text-gray-700 whitespace-nowrap ml-3">19,800円</span>
          </div>

          <p className="text-xs text-gray-500 leading-relaxed">
            ※DFAアポスティーユ込みは +20,000円。HIT（同名者照合）発生・緊急対応は追加料金が発生することがあります。更新扱いになるかは事前確認が必要です。正確な金額は無料相談後にご提示します。
          </p>

          {/* 所要期間 */}
          <div className="mt-3 pt-3 border-t border-gray-100 flex items-center gap-2 text-sm text-gray-600">
            <Clock className="w-4 h-4 text-gray-400 flex-shrink-0" />
            <span>所要期間の目安：<span className="font-medium text-gray-800">約1か月</span></span>
          </div>
        </SectionDivider>
      </div>

      {/* イントロ */}
      <div className="mb-8 space-y-2 text-sm text-gray-600 leading-relaxed">
        <p>「できるだけ早く取りたい」「更新できるのか分からない」「依頼したあと、今どうなっているのか見えないのが不安」</p>
        <p>
          そんな方に向けて、株式会社IGRSでは、フィリピンNBIクリアランスの更新・転送を日本語で進めやすい形でご案内しています。
          ご相談時に条件を確認し、進められる案件かどうかを先に整理したうえで、必要な流れをご案内します。
          NBI Clearanceは<a href="http://nbi.gov.ph" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">フィリピン国家捜査局（NBI公式サイト）</a>が発行する公的書類です。
        </p>
      </div>

      <CtaBox
        title="更新できるか、まず確認します"
        description="過去の取得年と氏名変更の有無をお知らせください。更新として進められるか確認し、費用の目安を即日でご案内します。"
        buttonText="無料相談・見積もりを依頼する"
        href="#contact"
        variant="primary"
        trustNote="見積もり無料・即日回答 ｜ 着手前キャンセル無料"
      />

      {/* 自力申請で詰まるポイント → 当社が代行して可視化 */}
      <SectionDivider variant="beige">
        <h2 className="text-base font-bold text-gray-900 mb-2">自力申請で「見えない・詰まる」を、当社が代わりに進めます</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          日本から自分でNBIクリアランスを取ろうとすると、特に初めての方は次のような壁にぶつかりがちです。
        </p>
        <IconCardGrid
          columns={3}
          cards={[
            { icon: Mail, title: 'NBIから返信が来ない', description: '海外から問い合わせても返信がなく、進め方が分からないまま止まってしまう。', accent: 'red' },
            { icon: Smartphone, title: 'ポータル登録・支払いで詰まる', description: 'NBIオンライン登録やReference Number取得、フィリピン国内での支払いでつまずきやすい。', accent: 'gold' },
            { icon: PackageSearch, title: '送った後の状況が見えない', description: '書類を送った後、今どこにあるのか・処理されたのかが分からず不安になる。', accent: 'blue' },
          ]}
        />
        <div className="bg-white rounded-xl border border-gray-100 p-4 mt-2">
          <p className="text-sm text-gray-700 leading-relaxed">
            当社では、NBIからの返信を待つだけの状態にせず、フィリピン国内での申請・支払い・書類のやり取りを代行します。
            配送には<span className="font-medium text-gray-900">追跡可能な手段</span>を用い、申請・受理・発送など節目ごとに状況をご報告するので、
            「今どこまで進んでいるか」が見える状態で進められます。
          </p>
          <p className="text-xs text-gray-500 leading-relaxed mt-2">
            ※NBI内部の審査状況そのものをリアルタイムに確認することはできませんが、書類の発送・返送などの配送状況は追跡してご報告します。公式案内では、書類到着後の処理は最大5営業日とされています。これを大きく超える場合は、同名者照合（HIT）が発生している可能性があります。
          </p>
          <p className="text-xs text-gray-600 leading-relaxed mt-2 pt-2 border-t border-gray-100">
            <span className="font-medium text-gray-800">万一の備えについて：</span>返送中の郵送事故などで原本を紛失した場合でも、パスポートのコピーと委任状をお預かりしていれば、当社にて再取得（再発行）を手配できます。
          </p>
        </div>
        <div className="bg-secondary/5 rounded-xl border border-secondary/20 p-4 mt-3">
          <div className="flex items-start gap-2">
            <Fingerprint className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-gray-900 mb-1">日本の大使館で指紋採取（Form No.5）をお済ませの方へ</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                指紋採取はご本人が在日フィリピン大使館・総領事館で行う必要がありますが、
                その後の<span className="font-medium">オンライン申請・支払い・フィリピンでの手続き・書類の受け取り</span>までは当社で代行できます。
                「大使館までは行ったが、その先で止まっている」という方はご相談ください。
              </p>
            </div>
          </div>
        </div>
      </SectionDivider>

      {/* 当社でご案内しやすいケース（先出し） */}
      <SectionDivider variant="beige">
        <h2 className="text-base font-bold text-gray-900 mb-4">当社でご案内しやすいケース</h2>
        <IconCardGrid
          columns={2}
          cards={[
            { icon: CheckCircle, title: "2014年以降に取得歴がある", description: "2014年以降にNBIクリアランスを取得したことがある方", accent: 'green' },
            { icon: ShieldCheck, title: "個人情報に変更がない", description: "姓・名・生年月日などに変更がない方", accent: 'blue' },
            { icon: Globe, title: "日本から手続きしたい", description: "渡航せずに進めたい方", accent: 'teal' },
            { icon: FileText, title: "更新として進められる案件", description: "新しいFingerprint Card不要で進められる可能性が高い案件", accent: 'gold' },
          ]}
        />
        <p className="text-xs text-gray-500 border-t border-primary/10 pt-3 mt-4">
          在東京フィリピン大使館の案内でも、2014年以降の証明書で個人情報変更がなければ更新手続きが可能とされています。
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

      {/* 対応できないケース（後半に配置） */}
      <section className="mb-10 rounded-2xl border border-gray-200 bg-white p-6">
        <div className="flex items-start gap-3 mb-3">
          <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <h2 className="text-base font-bold text-gray-900">ご相談前にご確認ください</h2>
        </div>
        <p className="text-sm text-gray-600 mb-4">以下のケースは、在日フィリピン大使館・総領事館でのご本人対応（指紋採取等）が必要です。なお、大使館での指紋採取がお済みの場合は、その後の手続きを当社で代行できます。まずはご相談ください。</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            '過去に一度もNBIクリアランスを取得したことがない',
            '最後の取得が2013年以前',
            '結婚等により姓・個人情報に変更がある',
          ].map((item, i) => (
            <div key={i} className="rounded-xl bg-gray-50 border border-gray-200 p-3 flex items-start gap-2">
              <XCircle className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { title: '初回取得は本人対応が必要', note: '大使館でFingerprint Card Form No. 5の作成と指紋対応が必要です。' },
            { title: '氏名変更は新規扱いに', note: '2014年以降の取得歴があっても、個人情報変更があると新規手順が必要になります。' },
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
          { q: 'どのくらいで届きますか？', a: '全体ではおおむね1か月が目安です。在外申請はNBI Main Officeで処理され、公式案内では書類到着後の処理は最大5営業日とされていますが、実際の全体日数は書類準備、配送、受取方法によって前後します。まずは現在の状況をご相談ください。' },
        ]}
        ctaTitle="NBI Clearanceのご相談は無料・即日回答"
        ctaButton="無料相談・見積もりを依頼する"
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
