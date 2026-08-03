import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import SummaryBlock from '../components/SummaryBlock';
import CtaBox from '../components/CtaBox';
import FaqSection from '../components/FaqSection';
import IconCardGrid from '../components/IconCardGrid';
import StepList from '../components/StepList';
import SectionDivider from '../components/SectionDivider';
import RelatedLinks from '../components/RelatedLinks';
import {
  AlertTriangle,
  CheckCircle,
  XCircle,
  Users,
  ClipboardList,
  Car,
  FileText,
  Stamp,
  Clock,
  BarChart3,
  Receipt,
  Headphones,
  ShieldCheck,
} from 'lucide-react';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR, SEO_LAST_UPDATED_JA } from '../lib/seoDate';

export default function BusinessMenkyoKirikaeJa() {
  useMeta(
    `フィリピン人従業員の日本免許切替サポート｜登録支援機関・監理団体向け【${SEO_YEAR}年版】`,
    '登録支援機関・監理団体向け。フィリピン人従業員の外免切替に必要なLTO書類（Certification・License History）＋DFAアポスティーユを代行取得。複数名一括対応・進捗報告・請求書払い。',
  );

  return (
    <PageLayout
      breadcrumbs={[
        { label: 'ホーム', href: '/ja/' },
        { label: '法人の方へ', href: '/ja/business/' },
        { label: '免許切替サポート（登録支援機関・監理団体）' },
      ]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'フィリピン人従業員 外免切替LTO書類取得サポート（登録支援機関・監理団体向け）',
          description:
            '登録支援機関・監理団体向け。フィリピン人従業員の外免切替に必要なLTO書類＋DFAアポスティーユの取得を代行。複数名一括・進捗報告・請求書払い対応。',
          url: 'https://ph-document.com/ja/business/menkyo-kirikae/',
          provider: {
            '@type': 'Organization',
            name: 'IGRS Inc.',
            url: 'https://ph-document.com/ja/',
          },
          areaServed: { '@type': 'Country', name: 'JP' },
          offers: {
            '@type': 'Offer',
            priceCurrency: 'JPY',
            price: '100000',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: '100000',
              priceCurrency: 'JPY',
              description: 'LTO書類取得・DFAアポスティーユ込み（税抜）。DHL国際郵送費は実費別途',
            },
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: '登録支援機関・監理団体からまとめて依頼できますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'はい。1名から複数名まで一括でご依頼いただけます。案件ごとに管理番号を付けて進捗を整理し、担当者様へまとめてご報告します。',
              },
            },
            {
              '@type': 'Question',
              name: '外免切替に必要なLTO書類は何ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '警視庁の案内では、①フィリピン運転免許証（原本）、②Official Receipt（OR）、③License History、④Certification with Apostille、⑤Immigration Record with Apostille（パスポートで滞在歴が確認できない場合）が案内されています。都道府県警察ごとに要件が異なるため、管轄の免許センターへの事前確認が必要です。',
              },
            },
            {
              '@type': 'Question',
              name: '日本の免許センターへの代理申請はできますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'できません。外免切替の申請は本人が免許センターへ出向く必要があります。当社が対応できるのは、フィリピン側で必要なLTO書類とDFAアポスティーユの取得代行のみです。',
              },
            },
            {
              '@type': 'Question',
              name: '対象の従業員が外免切替できるかどうか、事前に確認できますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '外免切替の可否の最終判断は各免許センターによりますが、フィリピン免許の有効性・免許取得後の3か月以上滞在条件の充足可能性について、事前にご確認いただけます。まずはご相談ください。',
              },
            },
            {
              '@type': 'Question',
              name: '書類取得にどのくらいかかりますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'LTO書類の取得に通常2〜4週間、DFAアポスティーユに1〜2週間かかります。合計で約1か月〜6週間が目安です。入社・就労開始のスケジュールを逆算してご相談ください。',
              },
            },
            {
              '@type': 'Question',
              name: '請求書払いや銀行振込は対応していますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '法人のお客様には銀行振込・請求書払いに対応しています。月末締め等、貴機関の経理フローに合わせてご相談いただけます。',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="フィリピン人従業員の日本免許切替サポート"
        subtitle="登録支援機関・監理団体向け。フィリピン人材の運転開始に必要なLTO書類とDFAアポスティーユの取得を代行します。複数名一括・進捗報告・請求書払い対応。"
        badges={['登録支援機関・監理団体向け', '複数名一括対応', '進捗報告付き', '請求書払い対応']}
        ctaText="まず相談する"
        ctaHref="#contact"
        lastUpdated={SEO_LAST_UPDATED_JA}
      />

      {/* Section 1: 誰向けか */}
      <SummaryBlock
        conclusion="フィリピン人材を支援する機関の「総務負荷」を減らすためのサービスです。"
        points={[
          '運送・物流・建設・製造・介護など、社用車・業務車両を使う現場で増加中',
          '登録支援機関・監理団体が1社で複数従業員分をまとめて依頼可能',
          'LTO書類（Certification・License History）＋DFAアポスティーユを一括代行',
          '日本語だけで完結。フィリピン側との英語・タガログ語対応は不要',
        ]}
      />

      {/* Section 2: よくある詰まり */}
      <IconCardGrid
        heading="登録支援機関・監理団体のよくある詰まり"
        columns={3}
        cards={[
          {
            icon: AlertTriangle,
            title: 'どの書類が必要か分からない',
            description:
              '都道府県の警察署ごとに案内が異なる。何を揃えればいいか整理できず、手配が止まっている。',
            accent: 'gold',
          },
          {
            icon: Clock,
            title: '就労開始に間に合わない',
            description:
              '書類取得に1〜2か月かかる。入社・配属のスケジュールと合わず、運転業務が始められない。',
            accent: 'blue',
          },
          {
            icon: Users,
            title: '複数名を同時に進めたい',
            description:
              '従業員が複数いる。1名ずつ個別に手配するのは非効率で、担当者の負荷が大きい。',
            accent: 'green',
          },
          {
            icon: FileText,
            title: 'ORや免許証の不備が多い',
            description:
              'Official Receiptをなくしている・免許の経歴が読み取れないケースが多く、手続きが止まる。',
            accent: 'red',
          },
          {
            icon: Car,
            title: '3か月条件を満たせるか分からない',
            description:
              '免許取得後にフィリピンへ通算3か月以上滞在していたか、事前に確認できず不安。',
            accent: 'purple',
          },
          {
            icon: Headphones,
            title: '現地とのやり取りが英語',
            description:
              'フィリピン側の機関（LTO・DFA）との連絡は英語・タガログ語。担当者が対応できない。',
            accent: 'teal',
          },
        ]}
      />

      {/* Section 3: 何を支援できるか */}
      <SectionDivider variant="blue">
        <h2 className="text-base font-bold text-blue-900 mb-4">当社が支援できること</h2>
        <div className="text-sm text-blue-800 leading-relaxed space-y-3">
          <p>
            株式会社IGRSでは、フィリピン人従業員の外免切替に必要なフィリピン側書類の整理と取得手続きを日本語でサポートします。
          </p>
          <ul className="space-y-2 mt-2">
            {[
              'LTO Certification（LTO発行の運転免許証明書）の取得代行',
              'License History（初回取得日・更新歴の証明）の取得代行',
              'DFAアポスティーユ（外務省認証）の取得代行',
              'Immigration Record with Apostilleの手配（必要な場合）',
              '対象者ごとの進捗管理と担当者への報告',
              '複数名分の書類を並行して一括手配',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionDivider>

      {/* Section 4: できないこと（先出しで信用UP） */}
      <section className="mb-10">
        <h2 className="text-base font-bold text-gray-900 mb-4">対応できないこと（重要）</h2>
        <div className="rounded-xl border border-red-200 bg-red-50 p-5 space-y-3">
          <p className="text-sm text-red-900 font-semibold">
            以下は当社の対応範囲外です。依頼前にご確認ください。
          </p>
          <ul className="space-y-2">
            {[
              {
                title: '日本の免許センターへの代理申請',
                note: '外免切替の本人申請は本人が行う必要があります。当社は代理申請できません。',
              },
              {
                title: '切替可否の確約',
                note: '受理・審査の最終判断は各都道府県の免許センターによります。当社はフィリピン側書類の準備を支援するのみです。',
              },
              {
                title: '3か月条件を満たさないケースの書類取得',
                note: '免許取得後にフィリピンへ通算3か月以上滞在していない場合は、書類を揃えても切替が認められません。',
              },
              {
                title: '有効期限切れ免許の更新手続き',
                note: 'フィリピン側の免許更新（LTO更新）は別途手続きが必要です。まずはご相談ください。',
              },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-red-900">{item.title}</p>
                  <p className="text-xs text-red-700 leading-relaxed mt-0.5">{item.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 5: 流れ */}
      <StepList
        variant="visual"
        heading="ご依頼から書類発送までの流れ"
        steps={[
          {
            title: '無料相談・状況確認',
            description:
              '対象者のフィリピン免許証の有無・OR保有状況・免許取得後の滞在歴をお知らせください。複数名の場合は人数と時期の目安も共有いただければ、まとめてご案内します。',
          },
          {
            title: '必要書類の整理・お見積もり',
            description:
              '管轄の免許センターで案内された書類リストがあれば、それも踏まえて必要書類を整理します。案件ごとに費用と取得スケジュールをご提示します。',
          },
          {
            title: '着手金のお支払い',
            description:
              '代金総額の50%をご入金後、フィリピン現地での手続きを開始します。法人のお客様は請求書払いにも対応します。',
          },
          {
            title: '書類取得・進捗報告',
            description:
              '受理・取得・発送の各段階でご報告します。複数名分はまとめてレポートします。担当者窓口を一本化するので、連絡の手間が最小限です。',
          },
          {
            title: '書類写しの確認・残金お支払い',
            description:
              '書類が揃ったら写しをお送りします。内容確認後、残りの50%をお支払いいただきます。',
          },
          {
            title: '原本の発送',
            description:
              '残金確認後、DHL国際宅配便でご指定先へ発送します。複数名分はまとめて、または別送も対応可能です。',
          },
        ]}
      />

      {/* Section 6: 料金 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary tracking-tight">
            参考料金（税抜）
          </h2>
        </div>
        <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-white to-secondary/5 overflow-hidden">
          <div className="h-1 w-full bg-gradient-to-r from-primary via-primary/70 to-transparent" />
          <div className="p-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 text-secondary font-bold">対応内容</th>
                  <th className="text-right py-2 text-secondary font-bold">単発</th>
                  <th className="text-right py-2 text-secondary font-bold">複数・継続案件</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-3 text-gray-700">
                    LTO書類（Certification + License History）
                    <br />
                    <span className="text-xs text-gray-400">＋DFAアポスティーユ込み</span>
                  </td>
                  <td className="py-3 text-right font-semibold text-secondary">¥100,000〜</td>
                  <td className="py-3 text-right font-semibold text-primary">要相談</td>
                </tr>
                <tr>
                  <td className="py-3 text-gray-700">
                    Immigration Record
                    <br />
                    <span className="text-xs text-gray-400">
                      ＋DFAアポスティーユ込み（必要な場合）
                    </span>
                  </td>
                  <td className="py-3 text-right font-semibold text-secondary">別途見積</td>
                  <td className="py-3 text-right font-semibold text-primary">要相談</td>
                </tr>
              </tbody>
            </table>
            <div className="mt-4 space-y-1">
              <p className="text-xs text-gray-500 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                着手金50%・書類写し確認後に残金50%・着手前キャンセル無料
              </p>
              <p className="text-xs text-gray-500 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                DHL国際郵送費は実費別途
              </p>
              <p className="text-xs text-gray-500 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                複数名・継続案件の料金はご相談ください。請求書払い対応可。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* B2B features */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary tracking-tight">
            登録支援機関・監理団体向けサポート
          </h2>
        </div>
        <IconCardGrid
          heading=""
          columns={3}
          cards={[
            {
              icon: Users,
              title: '複数名まとめて依頼',
              description:
                '1〜数十名規模の同時進行に対応。採用計画に合わせてスケジュールをご相談いただけます。',
              accent: 'blue',
            },
            {
              icon: Receipt,
              title: '請求書払い対応',
              description:
                '法人の経費処理に対応。銀行振込・一括請求書の発行が可能です。',
              accent: 'green',
            },
            {
              icon: BarChart3,
              title: '進捗報告レポート',
              description:
                '複数名分の状況をまとめてご報告。担当者様が一目で状況把握できます。',
              accent: 'teal',
            },
            {
              icon: Headphones,
              title: '担当窓口の一本化',
              description:
                '登録支援機関・監理団体専用の窓口を設置。問い合わせ先が分散しません。',
              accent: 'gold',
            },
            {
              icon: ClipboardList,
              title: '採用前の事前確認',
              description:
                '内定前・入社前の段階でも、対象者の書類取得可能性を事前調査します。',
              accent: 'purple',
            },
            {
              icon: Car,
              title: '運転開始スケジュール調整',
              description:
                '就労開始日・配属先を踏まえて書類取得スケジュールを逆算してご提案します。',
              accent: 'red',
            },
          ]}
        />
      </section>

      <CtaBox
        title="まずは担当案件の状況をお聞かせください"
        description="対象者の人数・フィリピン免許の状況・就労開始希望時期をお知らせいただければ、必要書類と取得スケジュールをご案内します。複数名・継続案件のお見積もりも対応します。"
        buttonText="無料相談はこちら"
        href="#contact"
        variant="primary"
        trustNote="初回相談無料・秘密厳守 ｜ 複数名・継続案件は料金要相談 ｜ 請求書払い対応"
      />

      <FaqSection
        items={[
          {
            q: '登録支援機関・監理団体からまとめて依頼できますか？',
            a: 'はい。1名から複数名まで一括でご依頼いただけます。案件ごとに管理番号を付けて進捗を整理し、担当者様へまとめてご報告します。継続案件は料金についてもご相談いただけます。',
          },
          {
            q: '外免切替に必要なLTO書類は何ですか？',
            a: '警視庁の案内では、①フィリピン運転免許証（原本）、②Official Receipt（OR）、③License History、④Certification with Apostille、⑤Immigration Record with Apostille（パスポートで滞在歴が確認できない場合）が案内されています。都道府県警察ごとに要件が異なるため、管轄の免許センターへの事前確認が必要です。',
          },
          {
            q: '日本の免許センターへの代理申請はできますか？',
            a: 'できません。外免切替の申請は本人が免許センターへ出向く必要があります。当社が対応できるのは、フィリピン側で必要なLTO書類とDFAアポスティーユの取得代行のみです。',
          },
          {
            q: '対象の従業員が外免切替できるかどうか、事前に確認できますか？',
            a: '外免切替の可否の最終判断は各免許センターによりますが、フィリピン免許の有効性・免許取得後の3か月以上滞在条件の充足可能性について、事前にご確認いただけます。まずはご相談ください。',
          },
          {
            q: '書類取得にどのくらいかかりますか？',
            a: 'LTO書類の取得に通常2〜4週間、DFAアポスティーユに1〜2週間かかります。合計で約1か月〜6週間が目安です。就労開始のスケジュールを逆算してご相談ください。',
          },
          {
            q: 'ORをなくしている従業員がいますが、対応できますか？',
            a: 'ケースによります。Official Receiptは外免切替の書類として案内されているため、まずは現在の状況を確認する必要があります。対応できる場合とできない場合がありますので、相談時にお知らせください。',
          },
          {
            q: '請求書払いや銀行振込は対応していますか？',
            a: '法人のお客様には銀行振込・請求書払いに対応しています。月末締め等、貴機関の経理フローに合わせてご相談いただけます。',
          },
          {
            q: '採用前の段階で相談できますか？',
            a: 'はい。内定前・入社前の段階でも、候補者のフィリピン免許情報をもとに必要書類の確認や取得可否の事前調査を承っています。採用計画を立てるうえでの参考にご活用ください。',
          },
        ]}
        ctaTitle="まずは無料相談"
        ctaButton="無料相談フォームへ"
      />

      <RelatedLinks
        links={[
          {
            path: '/ja/gaimen-kirikae-guide/',
            label: '外免切替ガイド（個人向け）',
          },
          {
            path: '/ja/driver-record/',
            label: 'LTO運転経歴証明書代行',
          },
          {
            path: '/ja/apostille/',
            label: 'DFAアポスティーユ代行',
          },
          {
            path: '/ja/business/touroku-shien-kikan/',
            label: '登録支援機関向け書類取得代行（在留資格）',
          },
        ]}
      />
    </PageLayout>
  );
}
