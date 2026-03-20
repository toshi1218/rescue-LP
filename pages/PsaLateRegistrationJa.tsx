import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import SummaryBlock from '../components/SummaryBlock';
import FeatureList from '../components/FeatureList';
import StepList from '../components/StepList';
import CtaBox from '../components/CtaBox';
import FaqSection from '../components/FaqSection';
import RelatedArticles from '../components/RelatedArticles';
import { AlertTriangle, FileCheck, Clock, Globe } from 'lucide-react';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR_MONTH_JA } from '../lib/seoDate';

export default function PsaLateRegistrationJa() {
  useMeta(
    `PSAに記録がない・氏名誤りのときの対応【${SEO_YEAR_MONTH_JA}】`,
    'PSA出生証明書が見つからない、氏名や生年月日に誤りがある。そんなときに必要になる遅延登録・訂正の違いと、ビザ申請への影響を日本語で整理します。',
    'https://ph-document.com/ja/psa-late-registration',
  );

  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'PSA記録エラー対応' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'PSAに記録がない・氏名誤りのときの対応',
          description: 'PSA出生証明書が見つからない、氏名や生年月日に誤りがある場合の遅延登録・訂正を整理します。',
          url: 'https://ph-document.com/ja/psa-late-registration',
          publisher: {
            '@type': 'Organization',
            name: 'IGRS Inc.',
            url: 'https://ph-document.com/ja/',
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'PSAに記録がないと言われたらどうなりますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '出生が未登録の可能性と、入力情報が一致していない可能性があります。まずは原因を切り分け、遅延登録が必要かどうかを確認します。',
              },
            },
            {
              '@type': 'Question',
              name: '名前のスペル違いは問題ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'はい。小さなスペル差でも、提出先によっては差し戻しや追加説明の原因になります。早めの確認が安全です。',
              },
            },
            {
              '@type': 'Question',
              name: '遅延登録と訂正は同じですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '同じではありません。遅延登録は未登録の出生を登録する手続き、訂正は既存記録の誤りを直す手続きです。',
              },
            },
            {
              '@type': 'Question',
              name: 'どのくらい時間がかかりますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '手続きの種類によって大きく変わりますが、数か月単位になることが多いです。ビザ締切がある場合は早めの着手が重要です。',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="PSAに記録がない？氏名や生年月日が違う？"
        badges={['No Record 対応', '氏名・生年月日エラー', 'ビザ遅延を防ぐ']}
        ctaText="状況を相談する"
        ctaHref="#contact"
      />

      <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto text-center px-4">
        PSAで「記録がない」と言われたり、名前や生年月日の表記が違っていたりすると、ビザや婚姻の手続きが止まることがあります。まずは、どの種類の問題かを切り分けることが大切です。
      </p>

      <SummaryBlock
        conclusion="No Record と表記エラーは、同じように見えても対応が違います。遅延登録なのか、訂正なのか、先に見極めると無駄な時間を減らせます。"
        points={[
          'No Record は未登録の可能性がある',
          '氏名・生年月日のズレは訂正や補正が必要になる',
          '手続きは数か月単位になることが多い',
          'ビザ締切があるなら、早めの確認が重要',
        ]}
        ctaText="どの問題か確認する"
      />

      <FeatureList
        heading="よくあるPSAの問題"
        items={[
          {
            icon: <AlertTriangle className="w-4 h-4" />,
            title: 'No Record Found',
            description: '出生が地方民事登録局にまだ登録されていない場合や、入力情報が一致していない場合に起こります。',
          },
          {
            icon: <AlertTriangle className="w-4 h-4" />,
            title: '氏名のスペル違い',
            description: '1文字違いでも、提出先では別人扱いに近いチェックになることがあります。',
          },
          {
            icon: <AlertTriangle className="w-4 h-4" />,
            title: '生年月日や出生地の誤り',
            description: '生年月日や出生地のずれは、単純な再発行だけでは直らないことがあります。',
          },
        ]}
      />

      <FeatureList
        heading="問題ごとの考え方"
        items={[
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: '遅延登録',
            description: '出生が未登録の場合に、地方民事登録局で手続きを進めます。補助資料が必要になることがあります。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: '行政上の訂正',
            description: '軽微な表記誤りや書き間違いを直す手続きです。ケースにより比較的早く進むことがあります。',
          },
          {
            icon: <Clock className="w-4 h-4" />,
            title: '裁判所手続きが必要な場合',
            description: '生年月日などの大きな変更は、裁判所手続きが必要になることがあります。時間に余裕を見て進めます。',
          },
        ]}
      />

      <StepList
        heading="修正が終わった後の流れ"
        steps={[
          { title: '地方民事登録局や裁判所で手続き完了', description: 'まず、正しい記録が公的に整うことが先です。' },
          { title: 'PSAに反映されるのを待つ', description: 'PSAのデータベースに反映されるまで、さらに時間がかかることがあります。' },
          { title: '修正後の書類を取得', description: '記録が整ったら、改めてPSA出生証明書を取得します。' },
          { title: 'アポスティーユと海外発送', description: '必要に応じてDFAアポスティーユを付け、提出先へ発送します。' },
        ]}
      />

      <CtaBox
        title="PSAの問題は、ビザ申請の前に確認するのが安全です"
        description="記録がないのか、表記が違うのかで動き方が変わります。先に状況を整理して、必要な手続きを選びましょう。"
        buttonText="無料で相談する"
        href="#contact"
        variant="primary"
        trustNote="着手前キャンセル無料・進捗共有あり・残金は書類写し確認後にご案内"
      />

      <FaqSection
        items={[
          { q: 'PSAに記録がない場合、まず何をすればいいですか？', a: 'まず、入力情報の確認と、未登録か単純な不一致かの切り分けを行います。' },
          { q: '名前の違いはすぐ直せますか？', a: '軽微な誤りなら比較的早く進むこともありますが、内容によっては別の手続きが必要です。' },
          { q: 'ビザの提出期限が近いのですが間に合いますか？', a: '手続きが数か月かかることがあるため、早めの着手が重要です。締切がある場合は先にご相談ください。' },
          { q: '修正後のPSA出生証明書にはアポスティーユが必要ですか？', a: '提出先によりますが、多くの国際手続きで必要です。必要なら修正後にまとめて手配します。' },
        ]}
        ctaTitle="No Record や記載ミスは早めに確認しましょう"
        ctaButton="相談する"
      />

      <RelatedArticles
        items={[
          { href: '/ja/psa-shussei-shomeisho', title: 'PSA出生証明書取得代行', description: '修正後に取り直す基本のページです。' },
          { href: '/ja/psa-shussei-cost', title: 'PSA出生証明書の料金', description: '手配費用の目安を確認できます。' },
          { href: '/ja/cenomar-vs-marriage-certificate', title: 'CENOMARと婚姻証明書の違い', description: '婚姻関連の書類を取り違えないための確認ページです。' },
          { href: '/ja/document-checklist-by-visa', title: 'ビザ別チェックリスト', description: 'どのビザで何が必要かをまとめて確認できます。' },
        ]}
      />
    </PageLayout>
  );
}
