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
  Clock,
  Receipt,
  Headphones,
  ShieldCheck,
  Building2,
  BarChart3,
} from 'lucide-react';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR, SEO_LAST_UPDATED_JA } from '../lib/seoDate';

export default function BusinessMenkyoKirikaeKigyouJa() {
  useMeta(
    `フィリピン人従業員 運転免許切替サポート｜介護・配送・建設向け法人プラン【${SEO_YEAR}年版】`,
    '介護送迎・社用車・現場移動にフィリピン人従業員を使いたい会社向け。外免切替に必要なLTO書類取得を一括代行。1名100,000円〜・3名パック270,000円〜。請求書払い・複数名対応。',
  );

  return (
    <PageLayout
      breadcrumbs={[
        { label: 'ホーム', href: '/ja/' },
        { label: '法人の方へ', href: '/ja/business/' },
        { label: 'フィリピン人従業員 運転免許切替サポート（直接雇用企業向け）' },
      ]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'フィリピン人従業員 外免切替LTO書類取得サポート（直接雇用企業向け）',
          description:
            '介護・配送・建設などフィリピン人従業員に運転業務をさせたい企業向け。外免切替に必要なLTO書類＋DFAアポスティーユの取得を一括代行。複数名・請求書払い対応。',
          url: 'https://ph-document.com/ja/business/menkyo-kirikae-kigyou/',
          provider: {
            '@type': 'Organization',
            name: 'IGRS Inc.',
            url: 'https://ph-document.com/ja/',
          },
          areaServed: { '@type': 'Country', name: 'JP' },
          offers: [
            {
              '@type': 'Offer',
              priceCurrency: 'JPY',
              price: '100000',
              description: '1名プラン（LTO書類取得・DFAアポスティーユ込み、税抜）',
            },
            {
              '@type': 'Offer',
              priceCurrency: 'JPY',
              price: '270000',
              description: '3名パック（LTO書類取得・DFAアポスティーユ込み、税抜）',
            },
          ],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'フィリピン人従業員が社用車・業務車両を運転するには何が必要ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '日本で社用車を運転するには日本の運転免許が必要です。フィリピン免許を持つ従業員は「外免切替」という手続きで日本免許を取得できます。ただし免許取得後にフィリピンへ通算3か月以上滞在していたことを証明できることが条件です。切替に必要なフィリピン側書類（LTO Certification・License History・DFAアポスティーユ）の取得を当社が代行します。',
              },
            },
            {
              '@type': 'Question',
              name: '複数名の従業員分をまとめて依頼できますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'はい。1名から複数名まで一括でご依頼いただけます。3名パック（270,000円〜）をはじめ、人数・時期に応じてご相談いただけます。従業員ごとに進捗を管理し、担当者様へまとめてご報告します。',
              },
            },
            {
              '@type': 'Question',
              name: '従業員が外免切替できるか事前に確認できますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'はい。採用前・入社前の段階でも、候補者のフィリピン免許状況と3か月条件の充足可能性を事前確認できます。採用計画の段階からご相談ください。',
              },
            },
            {
              '@type': 'Question',
              name: '書類取得にどのくらいかかりますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'LTO書類の取得に通常2〜4週間、DFAアポスティーユに1〜2週間かかります。合計で約1か月〜6週間が目安です。運転業務の開始日を逆算してご相談ください。',
              },
            },
            {
              '@type': 'Question',
              name: '請求書払いや銀行振込は対応していますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '法人のお客様には銀行振込・請求書払いに対応しています。月末締めなど、貴社の経理フローに合わせてご相談ください。',
              },
            },
            {
              '@type': 'Question',
              name: '日本の免許センターへの代理申請はできますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'できません。外免切替の申請は本人が免許センターへ出向く必要があります。当社が対応するのは、フィリピン側のLTO書類・DFAアポスティーユの取得代行のみです。',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="フィリピン人従業員に、運転業務をさせたい会社へ"
        subtitle="介護送迎・社用車・現場移動に必要な日本免許切替（外免切替）。フィリピン側LTO書類とDFAアポスティーユの取得を一括代行します。採用前の事前確認から複数名一括対応まで。"
        badges={['直接雇用企業向け', '1名100,000円〜', '3名パック270,000円〜', '請求書払い対応']}
        ctaText="まず相談する"
        ctaHref="#contact"
        lastUpdated={SEO_LAST_UPDATED_JA}
      />

      <SummaryBlock
        conclusion="フィリピン人従業員に運転業務をさせるために、会社側がやるべきことを整理・代行します。"
        points={[
          '介護送迎・配送・建設現場移動など、社用車・業務車両を使う業種で需要増加中',
          '2025年10月の規制強化後、個人での外免切替は難易度が上昇。企業側の支援が必要',
          'LTO書類（Certification・License History）＋DFAアポスティーユを一括代行',
          '日本語だけで完結。フィリピン側機関への英語・タガログ語対応は不要',
        ]}
      />

      {/* 対象業種 */}
      <IconCardGrid
        heading="このサービスが必要になる業種"
        columns={3}
        cards={[
          {
            icon: Users,
            title: '介護・福祉施設',
            description: 'デイサービス送迎・訪問介護の移動にフィリピン人スタッフを活用したい。',
            accent: 'blue',
          },
          {
            icon: Car,
            title: '配送・運送・物流',
            description: '軽貨物・小口配送・社内物流でフィリピン人ドライバーを雇用したい。',
            accent: 'gold',
          },
          {
            icon: Building2,
            title: '建設・土木・現場作業',
            description: '現場間の移動や資材運搬に外国人従業員が車を使う必要がある。',
            accent: 'teal',
          },
          {
            icon: FileText,
            title: 'リサイクル・清掃・食品工場',
            description: '収集ルートの運転や工場内移動にフィリピン人材の免許が必要。',
            accent: 'green',
          },
          {
            icon: ClipboardList,
            title: '農業・農業法人',
            description: '農場内外のトラック・軽トラ運転要員としてフィリピン人を雇用している。',
            accent: 'purple',
          },
          {
            icon: Users,
            title: '人材派遣・人材紹介',
            description: 'クライアント先への派遣前に、運転免許の取得支援を求められている。',
            accent: 'red',
          },
        ]}
      />

      {/* 課題提示 */}
      <IconCardGrid
        heading="総務・HR担当者のよくある困りごと"
        columns={3}
        cards={[
          {
            icon: AlertTriangle,
            title: '何から始めればいいか分からない',
            description: '外免切替に何が必要か、どこに問い合わせればいいか、総務でも把握できていない。',
            accent: 'gold',
          },
          {
            icon: Clock,
            title: '運転業務開始に間に合わない',
            description: '書類取得に1〜2か月かかる。入社・配属スケジュールと合わず、現場が止まりそう。',
            accent: 'blue',
          },
          {
            icon: Users,
            title: '複数名を同時に進めたい',
            description: '対象者が複数いる。1名ずつ個別に動くのは非効率で、担当者の負荷が高い。',
            accent: 'green',
          },
          {
            icon: FileText,
            title: '本人任せにしたら止まった',
            description: 'フィリピン側への問い合わせを本人に任せたが、英語対応できず手続きが進まない。',
            accent: 'red',
          },
          {
            icon: Car,
            title: '採用してから切替不可と判明',
            description: '入社後に3か月条件を満たせないと分かった。採用前に確認すればよかった。',
            accent: 'purple',
          },
          {
            icon: Headphones,
            title: '相談窓口がない',
            description: '行政書士に相談しても海外書類には対応できないと断られた。',
            accent: 'teal',
          },
        ]}
      />

      {/* 提供内容 */}
      <SectionDivider variant="blue">
        <h2 className="text-base font-bold text-blue-900 mb-4">当社が対応できること</h2>
        <div className="text-sm text-blue-800 leading-relaxed space-y-3">
          <p>
            株式会社IGRSでは、フィリピン人従業員の外免切替に必要なフィリピン側書類の手配を、企業の総務・HR担当者様に代わって進めます。
          </p>
          <ul className="space-y-2 mt-2">
            {[
              'LTO Certification（LTO発行の運転免許証明書）の取得代行',
              'License History（初回取得日・更新歴の証明）の取得代行',
              'DFAアポスティーユ（外務省認証）の取得代行',
              'Immigration Record with Apostilleの手配（必要な場合）',
              '採用前・入社前の対象者書類取得可否の事前調査',
              '複数名分の進捗一括管理と担当者への報告',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionDivider>

      {/* できないこと */}
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
                note: '外免切替の本人申請は本人が免許センターへ出向く必要があります。当社は代理申請できません。',
              },
              {
                title: '切替可否の確約',
                note: '受理・審査の最終判断は各都道府県の免許センターによります。当社はフィリピン側書類の準備を支援するのみです。',
              },
              {
                title: '3か月条件を満たさないケースの書類取得',
                note: '免許取得後にフィリピンへ通算3か月以上滞在していない場合、書類を揃えても切替が認められません。',
              },
              {
                title: '知識確認・技能確認の対策',
                note: '2025年10月以降、知識確認（50問・90%以上）と技能確認が必要です。この試験対策は当社の対応範囲外です。',
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

      {/* 料金 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary tracking-tight">
            法人プラン料金（税抜）
          </h2>
        </div>
        <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-white to-secondary/5 overflow-hidden">
          <div className="h-1 w-full bg-gradient-to-r from-primary via-primary/70 to-transparent" />
          <div className="p-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 text-secondary font-bold">プラン</th>
                  <th className="text-right py-2 text-secondary font-bold">料金（税抜）</th>
                  <th className="text-right py-2 text-secondary font-bold hidden sm:table-cell">備考</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-3 text-gray-700">
                    1名プラン
                    <br />
                    <span className="text-xs text-gray-400">LTO書類＋DFAアポスティーユ込み</span>
                  </td>
                  <td className="py-3 text-right font-semibold text-secondary">¥100,000〜</td>
                  <td className="py-3 text-right text-xs text-gray-500 hidden sm:table-cell">
                    Immigration Record が必要な場合は148,000円〜
                  </td>
                </tr>
                <tr className="bg-primary/5">
                  <td className="py-3 text-gray-700">
                    <span className="inline-block bg-primary text-white text-xs font-bold px-2 py-0.5 rounded mr-2">おすすめ</span>
                    3名パック
                    <br />
                    <span className="text-xs text-gray-400">LTO書類＋DFAアポスティーユ込み</span>
                  </td>
                  <td className="py-3 text-right font-bold text-primary text-base">¥270,000〜</td>
                  <td className="py-3 text-right text-xs text-gray-500 hidden sm:table-cell">
                    1名あたり約90,000円。4名以上は要相談
                  </td>
                </tr>
                <tr>
                  <td className="py-3 text-gray-700">
                    4名以上・継続案件
                  </td>
                  <td className="py-3 text-right font-semibold text-secondary">要相談</td>
                  <td className="py-3 text-right text-xs text-gray-500 hidden sm:table-cell">
                    人数・時期・頻度に応じてご提案
                  </td>
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
                法人のお客様は請求書払い・銀行振込対応
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 法人向けサポート */}
      <IconCardGrid
        heading="直接雇用企業向けサポート内容"
        columns={3}
        cards={[
          {
            icon: Users,
            title: '複数名まとめて依頼',
            description: '1〜数十名規模の同時進行に対応。採用計画に合わせてスケジュールをご相談いただけます。',
            accent: 'blue',
          },
          {
            icon: Receipt,
            title: '請求書払い対応',
            description: '法人の経費処理に対応。銀行振込・一括請求書の発行が可能です。',
            accent: 'green',
          },
          {
            icon: BarChart3,
            title: '進捗報告レポート',
            description: '複数名分の状況をまとめてご報告。担当者様が一目で把握できます。',
            accent: 'teal',
          },
          {
            icon: ClipboardList,
            title: '採用前の事前確認',
            description: '内定前・入社前の段階でも、対象者の書類取得可能性を事前調査します。',
            accent: 'gold',
          },
          {
            icon: Car,
            title: '運転開始スケジュール調整',
            description: '就労開始日・配属先を踏まえて書類取得スケジュールを逆算してご提案します。',
            accent: 'purple',
          },
          {
            icon: Headphones,
            title: '担当窓口の一本化',
            description: '企業の総務・HR担当者様専用の窓口を設置。フィリピン側への連絡は不要です。',
            accent: 'red',
          },
        ]}
      />

      <CtaBox
        title="まずは従業員の状況をお聞かせください"
        description="対象者の人数・フィリピン免許の状況・運転業務の開始希望時期をお知らせいただければ、必要書類とスケジュール・費用をご案内します。採用前の事前確認も対応します。"
        buttonText="無料相談はこちら"
        href="#contact"
        variant="primary"
        trustNote="初回相談無料・秘密厳守 ｜ 複数名・継続案件は料金要相談 ｜ 請求書払い対応"
      />

      {/* 流れ */}
      <StepList
        variant="visual"
        heading="ご依頼から書類発送までの流れ"
        steps={[
          {
            title: '無料相談・状況確認',
            description:
              '対象者のフィリピン免許の有無・OR保有状況・免許取得後の滞在歴をお知らせください。複数名の場合は人数と希望時期もお知らせいただければ、まとめてご案内します。',
          },
          {
            title: '必要書類の整理・お見積もり',
            description:
              '管轄の免許センターで案内された書類リストがあれば、それも踏まえて必要書類を整理します。人数・案件ごとに費用と取得スケジュールをご提示します。',
          },
          {
            title: '着手金のお支払い',
            description:
              '代金総額の50%をご入金後、フィリピン現地での手続きを開始します。法人のお客様は請求書払いに対応します。',
          },
          {
            title: '書類取得・進捗報告',
            description:
              '受理・取得・発送の各段階でご報告します。複数名分はまとめてレポートします。',
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

      <FaqSection
        items={[
          {
            q: 'フィリピン人従業員が社用車・業務車両を運転するには何が必要ですか？',
            a: '日本で社用車を運転するには日本の運転免許が必要です。フィリピン免許を持つ従業員は「外免切替」で日本免許を取得できます。ただし免許取得後にフィリピンへ通算3か月以上滞在していた証明が必要です。当社は切替に必要なフィリピン側LTO書類・DFAアポスティーユの取得を代行します。',
          },
          {
            q: '2025年10月の規制強化で何が変わりましたか？',
            a: '外免切替に知識確認（50問・90%以上）と技能確認が必要になりました。住所確認も厳格化されています。個人での手続き難易度が上がったため、企業が支援する重要性が高まっています。なお、知識確認・技能確認の対策は当社の対応範囲外です。',
          },
          {
            q: '複数名の従業員分をまとめて依頼できますか？',
            a: 'はい。1名から複数名まで一括でご依頼いただけます。3名パック（270,000円〜）をはじめ、人数・時期に応じてご相談いただけます。従業員ごとに進捗を管理し、担当者様へまとめてご報告します。',
          },
          {
            q: '従業員が外免切替できるか採用前に確認できますか？',
            a: 'はい。内定前・入社前の段階でも、候補者のフィリピン免許状況と3か月条件の充足可能性を事前確認できます。採用計画の段階からご相談ください。',
          },
          {
            q: '書類取得にどのくらいかかりますか？',
            a: 'LTO書類の取得に通常2〜4週間、DFAアポスティーユに1〜2週間かかります。合計で約1か月〜6週間が目安です。運転業務の開始日を逆算してご相談ください。',
          },
          {
            q: '1名プランと3名パックの違いは何ですか？',
            a: '3名パックは3名分をまとめてご依頼いただく場合の料金で、1名あたりの費用が下がります（1名100,000円〜 → 3名270,000円〜で1名あたり約90,000円）。4名以上・継続案件は別途ご相談ください。',
          },
          {
            q: '請求書払いや銀行振込は対応していますか？',
            a: '法人のお客様には銀行振込・請求書払いに対応しています。月末締めなど、貴社の経理フローに合わせてご相談ください。',
          },
          {
            q: '日本の免許センターへの代理申請はできますか？',
            a: 'できません。外免切替の申請は本人が免許センターへ出向く必要があります。当社が対応するのは、フィリピン側のLTO書類・DFAアポスティーユの取得代行のみです。',
          },
        ]}
        ctaTitle="まずは無料相談"
        ctaButton="無料相談フォームへ"
      />

      <RelatedLinks
        links={[
          {
            path: '/ja/business/menkyo-kirikae/',
            label: '免許切替サポート（登録支援機関・監理団体向け）',
          },
          {
            path: '/ja/gaimen-kirikae-guide/',
            label: '外免切替ガイド（個人向け）',
          },
          {
            path: '/ja/driver-record/',
            label: 'LTO運転経歴証明書代行',
          },
          {
            path: '/ja/lto-koyo-kakunin/',
            label: 'フィリピン人採用のLTO書類3種（雇用確認向け）',
          },
          {
            path: '/ja/apostille/',
            label: 'DFAアポスティーユ代行',
          },
        ]}
      />
    </PageLayout>
  );
}
