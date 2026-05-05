import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import SummaryBlock from '../components/SummaryBlock';
import FeatureList from '../components/FeatureList';
import StepList from '../components/StepList';
import CtaBox from '../components/CtaBox';
import FaqSection from '../components/FaqSection';
import RelatedArticles from '../components/RelatedArticles';
import { Globe, AlertTriangle, FileCheck, Users } from 'lucide-react';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR_MONTH_JA } from '../lib/seoDate';

export default function NbiClearanceOverseasJa() {
  useMeta(
    `海外在住でも取れるNBIクリアランス【${SEO_YEAR_MONTH_JA}】`,
    'フィリピンに戻らずにNBIクリアランスを取りたい方へ。OFWや海外在住のフィリピン人向けに、代理申請、HIT対応、アポスティーユ、海外発送までを日本語で案内します。',
    'https://ph-document.com/ja/nbi-clearance-overseas',
  );

  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: '海外在住のNBI取得' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: '海外在住でも取れるNBIクリアランス',
          description: 'フィリピンに戻らずにNBIクリアランスを取得したい方へ。OFWや海外在住の方向けに、代理申請やHIT対応を案内します。',
          url: 'https://ph-document.com/ja/nbi-clearance-overseas/',
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
              name: '海外在住でもNBIクリアランスは取れますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'はい。フィリピン側に代理人がいれば、本人が戻らなくても取得できるケースがあります。現地での申請・受け取り・発送を代理で進めます。',
              },
            },
            {
              '@type': 'Question',
              name: 'HITが出たらどうなりますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'HITは照会が必要になった状態です。必ず犯罪歴とは限りませんが、追加確認に時間がかかることがあります。状況を確認して進めます。',
              },
            },
            {
              '@type': 'Question',
              name: '領事館や大使館経由でも取れますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '一部で案内がありますが、予約や待ち時間の問題があるため、急ぎの案件では代理申請の方が進めやすいことが多いです。',
              },
            },
            {
              '@type': 'Question',
              name: 'どのくらい時間がかかりますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'ケースによりますが、NBI申請、アポスティーユ、海外発送まで含めておおむね4〜6週間を見込むことが多いです。HITがある場合は延びることがあります。',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="海外在住でもNBIクリアランスは取得できます"
        badges={['OFW・海外在住者向け', 'HIT対応', '海外発送OK']}
        ctaText="無料で相談する"
        ctaHref="#contact"
        lastUpdated="2026年3月1日"
      />

      <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto text-center px-4">
        フィリピンに戻らなくても、NBIクリアランスを取得できるケースがあります。大切なのは、どのルートで進めるかを先に決めることです。
      </p>

      <SummaryBlock
        conclusion="海外在住でも、現地代理人がいればNBIクリアランスの取得を進められることがあります。HITが出る場合も、先に状況を整理すれば無駄な往復を減らせます。"
        points={[
          '本人がフィリピンに戻らなくても進められるケースがあります',
          'HITが出た場合は追加確認が必要です',
          'アポスティーユや海外発送までまとめて相談できます',
          '急ぎのビザ案件は、先に段取りを決めると進めやすくなります',
        ]}
        ctaText="状況を伝える"
      />

      <FeatureList
        heading="海外でNBIを取る3つの考え方"
        items={[
          {
            icon: <Globe className="w-4 h-4" />,
            title: '領事館・大使館経由',
            description: '案内がある地域もありますが、待ち時間や受付条件に差があります。急ぎの案件では注意が必要です。',
          },
          {
            icon: <AlertTriangle className="w-4 h-4" />,
            title: 'オンライン申請だけで完結すると思い込まない',
            description: 'オンラインの情報だけでは、実際の受け取りや本人確認が必要になる場合があります。先に確認しておくと安心です。',
          },
          {
            icon: <Users className="w-4 h-4" />,
            title: '現地代理人に依頼する',
            description: '現地での申請・受け取りを代理で進められるため、最も実務的です。弊社のセブ側チームで対応します。',
          },
        ]}
      />

      <FeatureList
        heading="このページが役立つ方"
        items={[
          {
            icon: <Users className="w-4 h-4" />,
            title: 'OFW（海外就労者）の方',
            description: '雇用先や在留手続きでNBIクリアランスが必要になった方に向いています。',
          },
          {
            icon: <FileCheck className="w-4 h-4" />,
            title: 'K-1 / CR-1 / 配偶者ビザの申請中',
            description: 'アメリカ、日本、カナダなどの手続きでNBIが必要な方は、提出期限に合わせて進めると安心です。',
          },
          {
            icon: <Globe className="w-4 h-4" />,
            title: '永住・帰化・身元確認の書類が必要',
            description: '在外公館や入国管理の手続きで、犯罪経歴証明として求められることがあります。',
          },
        ]}
      />

      <StepList
        heading="海外から進める流れ"
        steps={[
          { title: '必要情報を送る', description: '氏名、生年月日、パスポート表記、提出先を共有してください。' },
          { title: 'NBI申請の方法を決める', description: '領事館経由か、現地代理人経由か、案件に合う方法を確認します。' },
          { title: 'フィリピン側で手配', description: '必要に応じてHIT確認やアポスティーユを進めます。' },
          { title: '海外へ発送', description: '書類が揃い次第、追跡付きで海外のご住所へ発送します。' },
        ]}
      />

      <CtaBox
        title="HITが出るかもしれない方も、先に相談できます"
        description="NBIは、名前照合で追加確認が入ることがあります。急ぎの申請ほど、先に状況を整理した方が安全です。"
        buttonText="無料で相談する"
        href="#contact"
        variant="primary"
        trustNote="着手前キャンセル無料・進捗共有あり・残金は書類写し確認後にご案内"
      />

      <FaqSection
        items={[
          { q: '海外在住でもNBIクリアランスは取れますか？', a: 'はい。フィリピン側に代理人がいれば、本人が戻らなくても取得できるケースがあります。' },
          { q: 'HITは必ず犯罪歴ですか？', a: '必ずしもそうではありません。同姓同名や表記差で照会が入ることがあります。' },
          { q: 'どのくらい時間がかかりますか？', a: '通常は4〜6週間を見込むことが多いですが、HITがある場合は長くなることがあります。' },
          { q: 'アポスティーユは必要ですか？', a: '提出先によりますが、多くの国際手続きで必要です。先に確認してから進めるのが安全です。' },
        ]}
        ctaTitle="海外在住のNBIは先に段取りを決めるのが大事です"
        ctaButton="相談する"
      />

      <RelatedArticles
        items={[
          { href: '/ja/nbi-clearance/', title: 'NBIクリアランス申請サポート', description: '基本の申請サポートページです。HIT対応もここから確認できます。' },
          { href: '/ja/nbi-hit/', title: 'NBI HIT対応', description: '照会が入ったときの考え方を整理できます。' },
          { href: '/ja/nbi-koyukigen/', title: 'NBIの有効期限', description: '提出期限に合わせた取り方の目安が分かります。' },
          { href: '/ja/document-checklist-by-visa/', title: 'ビザ別チェックリスト', description: 'K-1や配偶者ビザで他に何が必要かを確認できます。' },
        ]}
      />
    </PageLayout>
  );
}
