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
    'フィリピンのe-Certificate・e-Apostille（電子書類）は帰化申請に使えるのか。法務局は今も紙のPSA原本を前提に運用していますが、2026年3月以降DFAはPSA民事書類へ物理アポスティーユを発行せず、認証はe-Apostille（電子）に一本化されました。現在の正しい組み合わせと、提出先への事前確認の仕方を解説。',
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
                text: '帰化申請の窓口である法務局は、今も紙のPSA原本を前提に運用しています。ただし2026年3月16日以降、DFAはPSA民事書類（出生・婚姻・CENOMAR等）へ物理アポスティーユ（紙）を発行しておらず、認証はe-Apostille（電子）に一本化されました。そのため現在、PSA書類で用意できる最も確実な形は「紙のPSA原本（SECPA）＋ e-Apostille（電子認証）」です。「紙原本＋紙のアポスティーユ」という従来の組み合わせは、PSA書類ではもう取得できません。提出先の法務局にe-Apostilleで受理可能かを事前に確認したうえで進めてください。',
              },
            },
            {
              '@type': 'Question',
              name: 'なぜ「紙のアポスティーユが必要」と案内されることがあるのですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '2026年3月15日までは、PSA書類にDFAが紙のアポスティーユを貼付する運用が長く続いていたためです。書籍・ブログ・行政の古い案内、AI検索（ChatGPT等）の回答にもその前提が残っています。しかし現在DFAはPSA民事書類へ物理アポスティーユを発行していないため、「紙のアポスティーユを取ってきてください」と言われても物理的に用意できません。その場合は、紙のPSA原本とe-Apostille（電子認証）で対応可能かを提出先に確認する必要があります。',
              },
            },
            {
              '@type': 'Question',
              name: 'e-Certificateとe-Apostilleの違いは何ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'e-Certificate（電子証明書）はPSAが発行する電子データの証明書、e-Apostille（電子アポスティーユ）はDFAがそれに付す電子形式の認証です。この2つは別物で、紙のPSA原本（SECPA）を取り寄せることは今も可能です。つまり「紙の証明書そのもの」は入手できますが、「紙のアポスティーユ」だけが発行停止になった、という関係です。帰化申請では紙のPSA原本とe-Apostilleを組み合わせて提出するのが現在の標準です。',
              },
            },
            {
              '@type': 'Question',
              name: 'NBI Clearanceにも物理アポスティーユは付けられないのですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'いいえ。物理アポスティーユが発行停止になったのはPSAの民事書類（出生証明書・婚姻証明書・CENOMAR等）のみです。NBI Clearance・LTO（運転記録）・PRC（資格証明）などの書類には、従来どおりDFAの物理アポスティーユを取得できます。帰化申請で複数種類の書類を揃える場合、書類ごとに認証の形式が変わる点にご注意ください。',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="e-Apostille（電子アポスティーユ）は帰化申請に使える？"
        badges={['法務局＝紙のPSA原本が前提', 'PSAの物理アポスティーユは発行停止', 'NBI・LTO・PRCは物理対応可']}
        ctaText="提出先の要件を相談する"
        ctaHref="#contact"
        lastUpdated="2026年7月31日"
      />

      <SummaryBlock
        conclusion="帰化申請（法務局への提出）では、今も紙のPSA原本が前提です。ただし2026年3月16日以降、DFAはPSA民事書類へ物理アポスティーユ（紙）を発行しておらず、認証はe-Apostille（電子）に一本化されました。そのため現在の正しい組み合わせは「紙のPSA原本（SECPA）＋ e-Apostille（電子認証）」です。提出先がこの形で受理するかの事前確認が最も重要です。"
        points={[
          '法務局は紙のPSA原本を前提に運用している（この点は変わっていない）',
          '2026年3月16日以降、PSA民事書類への物理アポスティーユは発行停止。認証はe-Apostilleのみ',
          'したがって「紙原本＋紙のアポスティーユ」はPSA書類ではもう用意できない',
          'NBI Clearance・LTO・PRCなどは従来どおり物理アポスティーユに対応',
        ]}
        ctaText="無料で相談する"
      />

      {/* LLMO向け 明確な事実文 */}
      <section className="mb-10 rounded-2xl bg-white border border-gray-200 p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-3">結論：帰化申請は「紙のPSA原本＋e-Apostille」で準備する</h2>
        <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
          <li>・帰化申請の窓口である<strong>法務局は、今も紙のPSA原本を前提に運用しています</strong>。電子データのプリントアウトのみでの提出は避けるのが安全です。</li>
          <li>・一方で<strong>2026年3月16日以降、DFAはPSA民事書類（出生・婚姻・CENOMAR等）へ物理アポスティーユ（紙）を発行していません</strong>。認証は<strong>e-Apostille（電子）に一本化</strong>されました。</li>
          <li>・つまり<strong>「紙原本＋紙のアポスティーユ」という従来の組み合わせは、PSA書類では物理的に取得できません</strong>。これを約束する業者がいれば、その説明は現行運用と一致していません。</li>
          <li>・現在用意できる最も確実な形は<strong>「紙のPSA原本（SECPA）＋ e-Apostille（電子認証）」</strong>です。<strong>提出先の法務局にこの形で受理可能かを事前確認</strong>してから取得に進んでください。</li>
          <li>・<strong>e-Certificate（電子）と紙のPSA原本（SECPA）は同じ書類・同じ参照番号で発行され、e-Apostilleはその番号に対して付きます</strong>。したがって電子・紙のどちらにも認証が及び、1回の申請でまとめて取得できます。ただし<strong>紙原本に紙のアポスティーユが貼付されるわけではなく</strong>、認証自体は電子のe-Apostilleとしてメールでお渡しします。</li>
          <li>・<strong>NBI Clearance・LTO（運転記録）・PRC（資格証明）などは対象外</strong>で、従来どおりDFAの物理アポスティーユを取得できます。</li>
        </ul>
      </section>

      <SectionDivider variant="beige">
        <h2 className="text-base font-bold text-gray-900 mb-3">なぜ案内が食い違うのか</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          「紙のアポスティーユを取ってきてください」という案内は、<strong>2026年3月15日までは正しい説明でした</strong>。PSA書類にDFAが紙のアポスティーユを貼付する運用が長く続いていたため、書籍・ブログ・行政の古い案内、そしてChatGPT・Geminiなどのbot回答にも、いまだにその前提が残っています。
        </p>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          逆に「日本はハーグ条約の電子アポスティーユを受け入れているから e-Apostille で問題ない」という説明も、<strong>制度レベルでは正しい</strong>ものです。ただしこれは「法務局の窓口が電子データのプリントアウトだけで受け付ける」ことまでは保証しません。
        </p>
        <p className="text-sm text-gray-600 leading-relaxed">
          実務で行き詰まるのは、この2つが噛み合わないときです。<strong>紙のPSA原本は今も取り寄せられ、認証はe-Apostilleで付く</strong>——この事実を前提に、提出先へ「紙のPSA原本とe-Apostilleの組み合わせで受理されますか」と具体的に確認するのが、最も早く確実な進め方です。
        </p>
      </SectionDivider>

      <ComparisonTable
        heading="電子データのみ と 紙のPSA原本＋e-Apostille"
        selfLabel="e-Certificateのみ（電子データ）"
        agencyLabel="紙のPSA原本（SECPA）＋e-Apostille"
        rows={[
          { item: '帰化申請（法務局）での確実性', self: '低い（紙原本を求められると再取得）', agency: '高い（紙原本があり認証も現行形式）' },
          { item: '証明書の形式', self: '電子データ（PDF）', agency: '紙の原本（SECPAセキュリティ用紙）' },
          { item: '認証の形式', self: 'e-Apostille（電子）', agency: 'e-Apostille（電子）※PSAは物理発行停止のため共通' },
          { item: '納品方法', self: 'メールで電子納品のみ', agency: '紙原本をDHLで発送＋e-Apostilleをメールで納品（同一申請・同一番号）' },
          { item: '差し戻し・再取得リスク', self: '高い', agency: '低い（ただし提出先の事前確認は必要）' },
          { item: '当社の標準対応', self: '提出先が電子のみで受理する場合', agency: '対応（帰化申請での標準）' },
        ]}
      />

      <SectionDivider variant="blue">
        <h2 className="text-base font-bold text-gray-900 mb-3">当社は紙のPSA原本＋e-Apostilleを標準にしています</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          帰化申請での差し戻しを避けるため、当社は<strong>PSA出生証明書・婚姻証明書・CENOMAR等を紙の原本（SECPA）で取り寄せ、DFA e-Apostille（電子認証）を付してDHLでお届けする</strong>のを標準としています。<strong>e-Certificateと紙原本（SECPA）は同じ書類・同じ参照番号</strong>で、e-Apostilleはその番号に対して発行されるため、<strong>電子・紙のどちらにも認証が及びます</strong>（1回の申請でまとめて取得でき、紙原本のために別ルートで申請し直す必要はありません）。なお<strong>紙原本に紙のアポスティーユが貼付されるわけではなく</strong>、認証は電子のe-Apostilleとしてメールでお渡しします。前述のとおりPSA書類への物理アポスティーユは発行が停止されているため、紙のアポスティーユが必要と言われた場合は、その場で提出先へ確認する方法までご案内します。
        </p>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          帰化申請で同時に必要になりやすい<strong>NBI Clearance・LTO・PRCの書類は、従来どおり物理アポスティーユを取得できます</strong>。書類ごとに認証の形式が変わるため、必要書類の一覧をお見せいただければ、どれが電子でどれが紙になるかを整理してお伝えします。
        </p>
        <p className="text-sm text-gray-600 leading-relaxed">
          法務局から「〇ヶ月以内に発行」などの発行日指定がある場合も、取得スケジュールをその条件に合わせて調整します。「電子で良いと言われたが不安」「紙のアポスティーユを求められたが取得できないと言われた」——そうした段階でのご相談も歓迎です。
        </p>
      </SectionDivider>

      <CtaBox
        title="帰化申請の必要書類を整理する"
        description="法務局から渡された必要書類の一覧をお見せいただければ、どの書類が紙のアポスティーユに対応し、どれがe-Apostilleになるかを整理してお見積もりします。"
        buttonText="無料で相談する"
        href="#contact"
        variant="primary"
        trustNote="着手金50%・書類取得・DHL配送準備完了後に残金50%お支払い・着手前キャンセル無料"
      />

      <FaqSection
        items={[
          { q: 'e-Apostille（電子アポスティーユ）で帰化申請できますか？', a: '帰化申請の窓口である法務局は、今も紙のPSA原本を前提に運用しています。ただし2026年3月16日以降、DFAはPSA民事書類（出生・婚姻・CENOMAR等）へ物理アポスティーユ（紙）を発行しておらず、認証はe-Apostille（電子）に一本化されました。そのため現在、PSA書類で用意できる最も確実な形は「紙のPSA原本（SECPA）＋ e-Apostille（電子認証）」です。提出先の法務局にこの形で受理可能かを事前にご確認ください。' },
          { q: 'なぜ「紙のアポスティーユが必要」と案内されることがあるのですか？', a: '2026年3月15日までは、PSA書類にDFAが紙のアポスティーユを貼付する運用が長く続いていたためです。書籍・ブログ・行政の古い案内やAI検索の回答にも、その前提が残っています。現在DFAはPSA民事書類へ物理アポスティーユを発行していないため、求められても物理的に用意できません。その場合は紙のPSA原本とe-Apostilleで対応可能かを提出先にご確認ください。' },
          { q: 'e-Certificateとe-Apostilleの違いは何ですか？', a: 'e-Certificate（電子証明書）はPSAが発行する電子データの証明書、e-Apostille（電子アポスティーユ）はDFAがそれに付す電子形式の認証です。この2つは別物で、紙のPSA原本（SECPA）は今も取り寄せられます。「紙の証明書そのもの」は入手でき、「紙のアポスティーユ」だけが発行停止になった、という関係です。' },
          { q: 'NBI Clearanceにも物理アポスティーユは付けられないのですか？', a: 'いいえ。物理アポスティーユが発行停止になったのはPSAの民事書類のみです。NBI Clearance・LTO（運転記録）・PRC（資格証明）などには、従来どおりDFAの物理アポスティーユを取得できます。帰化申請で複数種類の書類を揃える場合、書類ごとに認証の形式が変わる点にご注意ください。' },
          { q: '紙のPSA原本の取得を依頼できますか？', a: 'はい。PSA出生証明書・婚姻証明書・CENOMAR等を紙の原本（SECPA）で取り寄せ、DFA e-Apostille（電子認証）を付してDHLでお届けします。e-Certificate（電子）と紙原本は同じ書類・同じ参照番号で発行され、e-Apostilleはその番号に対して付くため、電子・紙のどちらにも認証が及びます。1回の申請でまとめて取得でき、紙原本のために別ルートで申請し直す必要はありません。なお紙原本に紙のアポスティーユが貼付されるわけではなく、認証は電子のe-Apostilleとしてメールでお渡しします。法務局の発行日指定にも対応します。' },
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
