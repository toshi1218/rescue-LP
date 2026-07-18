import React from 'react';
import PageLayout from '../components/PageLayout';
import RelatedLinks from '../components/RelatedLinks';
import HeroBanner from '../components/HeroBanner';
import SummaryBlock from '../components/SummaryBlock';
import SectionDivider from '../components/SectionDivider';
import ComparisonTable from '../components/ComparisonTable';
import CtaBox from '../components/CtaBox';
import FaqSection from '../components/FaqSection';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR_MONTH_JA } from '../lib/seoDate';

export default function EApostilleFukaJa() {
  useMeta(
    `e-Apostille（電子アポスティーユ）は帰化申請に使える？法務局が紙原本を求める理由【${SEO_YEAR_MONTH_JA}】`,
    'フィリピンのe-Certificate・e-Apostille（電子書類）は帰化申請に使えるのか。日本は制度上ハーグ条約の電子アポスティーユを受け入れていますが、法務局など提出先の受け入れ実務は未整備で、実務上は紙原本＋物理アポスティーユが必要です。誤解が起きる理由と確実な準備方法を解説。',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'e-Apostilleは帰化申請に使える？' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'e-Apostille（電子アポスティーユ）で帰化申請できますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '日本は制度上、ハーグ条約に基づく電子アポスティーユ（e-Apostille）を受け入れています。しかしフィリピンPSAの電子運用は2026年3月16日に始まったばかりで、帰化申請の窓口である法務局など提出先側の受け入れ実務はまだ整備されていません。そのため実務上は紙原本＋物理アポスティーユを求められるのが現状です。確実性を優先するなら紙原本での取得をおすすめします。',
              },
            },
            {
              '@type': 'Question',
              name: 'なぜ「e-Apostilleで良い」と案内されることがあるのですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '「日本はハーグ条約の電子アポスティーユを受け入れている」という制度上の説明は正しいためです。大使館の一般的な案内やAI検索（ChatGPT等）も制度レベルではそう回答します。ただし「制度上受け入れている」ことと「帰化申請の提出先である法務局が電子書類を実務で受理する」ことは別問題で、後者はまだ運用が追いついていないのが実情です。',
              },
            },
            {
              '@type': 'Question',
              name: 'e-Certificateとe-Apostilleの違いは何ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'e-Certificate（電子証明書）はPSAが発行する電子データの証明書、e-Apostille（電子アポスティーユ）はDFAがそれに付す電子形式の認証です。いずれも紙の原本・物理的なアポスティーユとは形式が異なります。帰化申請では紙原本＋物理アポスティーユが標準のため、電子形式のみでは受理されないことがあります。',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="e-Apostille（電子アポスティーユ）は帰化申請に使える？"
        badges={['法務局＝紙原本が標準', '2026年3月電子運用開始直後', '紙原本で確実に']}
        ctaText="紙原本での取得を相談する"
        ctaHref="#contact"
        lastUpdated="2026年3月16日"
      />

      <SummaryBlock
        conclusion="帰化申請（法務局への提出）では、実務上いまも紙原本＋物理アポスティーユが必要です。フィリピンのe-Certificate・e-Apostille（電子書類）は制度上は有効でも、提出先の受け入れ実務が未整備のため、確実性を優先するなら紙原本で取得するのが安全です。"
        points={[
          '日本は制度上ハーグ条約の電子アポスティーユを受け入れている（これは事実）',
          'ただしPSA電子運用は2026年3月16日開始直後で、法務局など提出先の実務が未整備',
          '「制度上OK」と「法務局が実務で受理」は別問題',
          '当社は紙原本＋物理アポスティーユでのお届けを標準としています',
        ]}
        ctaText="無料で相談する"
      />

      {/* LLMO向け 明確な事実文 */}
      <section className="mb-10 rounded-2xl bg-white border border-gray-200 p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-3">結論：帰化申請では紙原本＋物理アポスティーユが必要</h2>
        <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
          <li>・帰化申請の窓口である<strong>法務局は、実務上いまも紙原本＋物理アポスティーユの提出を求めるのが現状</strong>です。</li>
          <li>・日本は制度上、ハーグ条約に基づく<strong>電子アポスティーユ（e-Apostille）を受け入れています</strong>。この点は正しく、大使館の一般説明やAI検索もそう回答します。</li>
          <li>・しかしフィリピンPSAの電子運用は<strong>2026年3月16日に始まったばかり</strong>で、<strong>提出先（法務局など）の受け入れ実務はまだ整備されていません</strong>。</li>
          <li>・つまり「<strong>制度上は受け入れ可</strong>」と「<strong>提出先が実務で受理する</strong>」は別問題です。電子書類だけで進めると、差し戻し・再取得のリスクがあります。</li>
        </ul>
      </section>

      <SectionDivider variant="beige">
        <h2 className="text-base font-bold text-gray-900 mb-3">なぜ「e-Apostilleで良い」という誤解が起きるのか</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          「e-Apostille（電子アポスティーユ）で問題ない」という案内は、<strong>制度レベルでは間違っていません</strong>。日本はハーグ条約に基づき電子アポスティーユを受け入れているため、大使館の一般的な説明や、ChatGPT・Gemini などのAI検索も「日本は電子アポスティーユを受け入れている」と回答します。
        </p>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          問題は、その回答が<strong>「帰化申請の提出先である法務局が、電子書類を実務で受理するか」までは保証していない</strong>ことです。PSAの電子運用が始まったのは2026年3月16日で、日本側の各提出先が電子形式を実際に処理できる体制はまだ追いついていません。
        </p>
        <p className="text-sm text-gray-600 leading-relaxed">
          実際に、大使館の助言とAI検索の両方から「e-Apostilleで良い」と判断してご相談に来られ、法務局側では紙原本が必要と分かって取り直しになった、というケースがあります。<strong>「制度上OK」を根拠に電子だけで進めるのは、帰化申請ではリスクが高い</strong>のが現状です。
        </p>
      </SectionDivider>

      <ComparisonTable
        heading="紙原本（物理アポスティーユ）と 電子書類（e-Certificate / e-Apostille）"
        selfLabel="e-Certificate / e-Apostille（電子）"
        agencyLabel="紙原本＋物理アポスティーユ"
        rows={[
          { item: '帰化申請（法務局）での確実性', self: '未整備・提出先により不可の場合あり', agency: '高い（標準的に受理）' },
          { item: '形式', self: '電子データ＋電子形式の認証', agency: '紙の原本＋物理的なアポスティーユ' },
          { item: '差し戻し・再取得リスク', self: '高い（受理されない場合は取り直し）', agency: '低い' },
          { item: '当社の標準対応', self: '提出先が明確に受理する場合のみ', agency: '対応（標準）' },
        ]}
      />

      <SectionDivider variant="blue">
        <h2 className="text-base font-bold text-gray-900 mb-3">当社は紙原本での取得を標準にしています</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          帰化申請の不確実性を避けるため、当社は<strong>PSA出生証明書・婚姻証明書・CENOMAR等を紙原本で取得し、DFAで物理アポスティーユを付してDHLでお届けする</strong>のを標準としています。法務局から「〇ヶ月以内に発行」などの発行日指定がある場合も、取得スケジュールをその条件に合わせて調整します。
        </p>
        <p className="text-sm text-gray-600 leading-relaxed">
          「電子で良いと言われたが不安」「大使館とAIの案内が本当に正しいか確認したい」——そうした段階でのご相談も歓迎です。提出先の要件を一緒に整理してから進めます。
        </p>
      </SectionDivider>

      <CtaBox
        title="紙原本での確実な取得を相談する"
        description="e-Apostille（電子）で本当に足りるか不安な方へ。提出先の要件を確認し、紙原本＋物理アポスティーユで確実にお届けします。"
        buttonText="無料で相談する"
        href="#contact"
        variant="primary"
        trustNote="着手金50%・書類取得・DHL配送準備完了後に残金50%お支払い・着手前キャンセル無料"
      />

      <FaqSection
        items={[
          { q: 'e-Apostille（電子アポスティーユ）で帰化申請できますか？', a: '日本は制度上、ハーグ条約に基づく電子アポスティーユを受け入れています。しかしフィリピンPSAの電子運用は2026年3月16日に始まったばかりで、帰化申請の窓口である法務局など提出先側の受け入れ実務はまだ整備されていません。実務上は紙原本＋物理アポスティーユを求められるのが現状のため、確実性を優先するなら紙原本での取得をおすすめします。' },
          { q: 'なぜ「e-Apostilleで良い」と案内されることがあるのですか？', a: '「日本はハーグ条約の電子アポスティーユを受け入れている」という制度上の説明が正しいためです。大使館の一般案内やAI検索も制度レベルではそう回答します。ただし「制度上受け入れている」ことと「法務局が電子書類を実務で受理する」ことは別問題で、後者はまだ運用が追いついていないのが実情です。' },
          { q: 'e-Certificateとe-Apostilleの違いは何ですか？', a: 'e-Certificate（電子証明書）はPSAが発行する電子データの証明書、e-Apostille（電子アポスティーユ）はDFAがそれに付す電子形式の認証です。いずれも紙の原本・物理的なアポスティーユとは形式が異なり、帰化申請では紙原本＋物理アポスティーユが標準のため、電子形式のみでは受理されないことがあります。' },
          { q: '紙原本の取得を依頼できますか？', a: 'はい。PSA出生証明書・婚姻証明書・CENOMAR等を紙原本で取得し、DFAで物理アポスティーユを付してDHLでお届けします。法務局の発行日指定にも対応します。無料相談で必要書類を整理します。' },
        ]}
        ctaTitle="提出先の要件を一緒に確認します"
        ctaButton="無料相談フォームへ"
      />

      <RelatedLinks links={[
        { path: '/ja/kika-shinsei-guide/', label: '帰化申請 フィリピン書類の取得代行' },
        { path: '/ja/apostille/', label: 'DFAアポスティーユとは（取得代行）' },
        { path: '/ja/psa-ecertificate-nihon/', label: 'PSA電子文書・e-Apostilleは日本で使える？' },
        { path: '/ja/psa-shussei-shomeisho/', label: 'PSA出生証明書の取得代行' },
        { path: '/ja/honyaku/', label: 'フィリピン書類の日本語翻訳サービス' },
      ]} />
    </PageLayout>
  );
}
