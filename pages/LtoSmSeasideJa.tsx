import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import SummaryBlock from '../components/SummaryBlock';
import SectionDivider from '../components/SectionDivider';
import IconCardGrid from '../components/IconCardGrid';
import CtaBox from '../components/CtaBox';
import FaqSection from '../components/FaqSection';
import { MapPin, FileText, Clock } from 'lucide-react';
import { useMeta } from '../lib/useMeta';

export default function LtoSmSeasideJa() {
  useMeta(
    'LTO SMシーサイド現地レポート【運転経歴証明書・免許更新の取得場所】',
    'フィリピンのLTO（陸運局）書類はセブのSMシーサイドシティ内のLTO窓口で取得します。運転経歴証明書・免許更新の手続きをセブ在住スタッフによる現地写真でレポート。',
  );

  return (
    <PageLayout
      breadcrumbs={[
        { label: 'ホーム', href: '/ja/' },
        { label: 'ガイド', href: '/ja/guides' },
        { label: 'LTO SMシーサイド現地レポート' },
      ]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'GovernmentOffice',
          name: 'LTO (Land Transportation Office) - SM Seaside City Cebu',
          description:
            'フィリピン陸運局（LTO）の書類発行・免許手続き窓口。運転経歴証明書・運転免許証の発行を行う公的機関。セブ市SMシーサイドシティ内に位置する。',
          url: 'https://ph-document.com/ja/lto-sm-seaside-genchi-report/',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'SM Seaside City Cebu, South Road Properties',
            addressLocality: 'Cebu City',
            addressRegion: 'Cebu',
            addressCountry: 'PH',
          },
          containedInPlace: {
            '@type': 'ShoppingCenter',
            name: 'SM Seaside City Cebu',
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'LTO SMシーサイド現地レポート【運転経歴証明書・免許更新の取得場所】',
          description:
            'フィリピンのLTO書類（運転経歴証明書・運転免許証更新）はセブ市SMシーサイドシティ内のLTO窓口で取得します。現地写真と詳細解説。',
          url: 'https://ph-document.com/ja/lto-sm-seaside-genchi-report/',
          datePublished: '2026-03-23',
          dateModified: '2026-03-23',
          author: {
            '@type': 'Organization',
            name: 'フィリピン書類取得代行センター',
            url: 'https://ph-document.com',
          },
          publisher: {
            '@type': 'Organization',
            name: 'フィリピン書類取得代行センター',
            url: 'https://ph-document.com',
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'LTO運転経歴証明書はセブのどこで取得できますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'セブ市SMシーサイドシティ（SM Seaside City Cebu）内にあるLTO（陸運局）窓口で取得できます。ショッピングモール内の政府機関です。',
              },
            },
            {
              '@type': 'Question',
              name: 'LTO SMシーサイドの営業時間は？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '月曜〜金曜の8:00〜17:00です。土曜・日曜・祝日は休業です。',
              },
            },
            {
              '@type': 'Question',
              name: 'LTO運転経歴証明書はどのような書類ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '運転経歴証明書はフィリピンLTOが発行する運転履歴証明書です。日本での外国免許切替（外免切替）に必要な書類で、DFAアポスティーユを取得したうえで日本の免許センターへ提出します。',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="LTO SMシーサイド現地レポート"
        badges={['現地写真あり', 'セブ在住スタッフが撮影', '日本語解説']}
        lastUpdated="2026年3月23日"
        ctaText="ご相談・お問い合わせ"
        ctaHref="#contact"
      />

      <SummaryBlock
        conclusion="日本のお客さまからご依頼いただいたLTO書類は、セブ市SMシーサイドシティ内にあるフィリピン陸運局（LTO）の公式窓口で取得しています。"
        points={[
          '運転経歴証明書（運転履歴証明書）・運転免許証更新など、LTOが発行するすべての書類をここで取得',
          'セブ市南部のサウスロードプロパティーズに位置するSMシーサイドシティ内の正規政府窓口',
          '番号発券制で窓口手続きが整備されており、透明性の高い運営体制',
          '営業時間：月〜金 8:00〜17:00、土日祝休み',
        ]}
      />

      {/* 写真ストーリーセクション */}
      <section className="mb-8 space-y-10">

        {/* 1. 場所・外観 */}
        <div>
          <h2 className="text-xl font-bold text-secondary mb-2">
            場所はSMシーサイドシティ ― モール内の政府機関
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            セブ市南部の「サウスロードプロパティーズ（South Road Properties）」に位置するショッピングモール
            「<strong>SM Seaside City Cebu</strong>」の中に、
            フィリピン陸運局（<strong>Land Transportation Office / LTO</strong>）の窓口があります。
            大型モール内の公的機関のため、駐車場やフードコートも完備されており、
            手続き待ちも快適な環境で行えます。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <figure>
              <img
                src="/LTO/LTO SM SEASIDE/IMG_20251222_165139.jpg"
                alt="SMシーサイドシティセブの外観。大型ショッピングモールとLTO窓口への入口"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-sm text-gray-500">
                SMシーサイドシティセブの外観。セブ市南部のサウスロードプロパティーズに位置する大型ショッピングモールです。
              </figcaption>
            </figure>
            <figure>
              <img
                src="/LTO/LTO SM SEASIDE/IMG_20251222_165141.jpg"
                alt="SMシーサイドシティ内のLTO（陸運局）窓口方向を示す案内表示"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-sm text-gray-500">
                モール内のLTO窓口方向。政府機関がショッピングモール内に設置されており、アクセスしやすい環境です。
              </figcaption>
            </figure>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <figure>
              <img
                src="/LTO/LTO SM SEASIDE/IMG_20251222_165237.jpg"
                alt="LTO SMシーサイドの入口外観。「Land Transportation Office」の看板が見える"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-sm text-gray-500">
                LTO窓口の入口外観。「Land Transportation Office」と明示されており、正規の政府機関です。
              </figcaption>
            </figure>
            <figure>
              <img
                src="/LTO/LTO SM SEASIDE/IMG_20251222_165325.jpg"
                alt="LTO SMシーサイドの入口周辺の様子。利用者が入口付近に並んでいる"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-sm text-gray-500">
                入口付近の様子。LTO窓口への入場を待つ利用者の様子が見られます。
              </figcaption>
            </figure>
          </div>
        </div>

        {/* 2. 入口・掲示物 */}
        <div>
          <h2 className="text-xl font-bold text-secondary mb-2">
            入口の掲示・案内 ― 手続きの種類と流れが明示
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            LTO窓口の入口付近には、手続きの種類・必要書類・流れが掲示されています。
            運転経歴証明書をはじめ、運転免許証の更新・再発行など各手続きの案内が整備されています。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <figure>
              <img
                src="/LTO/LTO SM SEASIDE/IMG_20251222_165332.jpg"
                alt="LTO SMシーサイドの入口に掲示された手続き案内。必要書類と手順が記載されている"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-sm text-gray-500">
                入口付近の掲示物。手続きの種類・必要書類が明示されています。
              </figcaption>
            </figure>
            <figure>
              <img
                src="/LTO/LTO SM SEASIDE/IMG_20251222_165357.jpg"
                alt="LTO SMシーサイドの案内掲示。運転経歴証明書を含む各種申請の手順が掲載"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-sm text-gray-500">
                各種申請手順の案内掲示。手続きの流れが来訪者に向けて明示されています。
              </figcaption>
            </figure>
          </div>
        </div>

        {/* 3. 窓口・受付の様子 */}
        <div>
          <h2 className="text-xl font-bold text-secondary mb-2">
            窓口・受付の様子 ― 番号発券制で手続きが整備
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            LTO SMシーサイドでは番号発券制が導入されており、
            受付から書類申請・支払い・受け取りまで各ステップが整備されています。
            窓口には担当者が常駐し、来訪者の対応を行っています。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <figure>
              <img
                src="/LTO/LTO SM SEASIDE/IMG_20251222_165402.jpg"
                alt="LTO SMシーサイドの受付窓口。整然とした窓口が並び担当者が対応している"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-sm text-gray-500">
                受付窓口の様子。手続きの種類ごとに窓口が分かれています。
              </figcaption>
            </figure>
            <figure>
              <img
                src="/LTO/LTO SM SEASIDE/IMG_20251222_165408.jpg"
                alt="LTO SMシーサイドの番号発券機と待合スペース。利用者が番号を待っている"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-sm text-gray-500">
                番号発券機と待合エリア。番号を呼ばれるまで着席して待ちます。
              </figcaption>
            </figure>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <figure>
              <img
                src="/LTO/LTO SM SEASIDE/IMG_20251222_165413.jpg"
                alt="LTO SMシーサイドの窓口対応の様子。担当者が書類を確認している"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-sm text-gray-500">
                窓口での書類確認の様子。担当者が申請内容を確認します。
              </figcaption>
            </figure>
            <figure>
              <img
                src="/LTO/LTO SM SEASIDE/IMG_20251222_165415.jpg"
                alt="LTO SMシーサイドの支払い窓口と番号表示ディスプレイ"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-sm text-gray-500">
                支払い窓口と番号表示。申請・支払い・受け取りと段階ごとに窓口が異なります。
              </figcaption>
            </figure>
          </div>
        </div>

        {/* 4. 運転経歴証明書の申請 */}
        <div>
          <h2 className="text-xl font-bold text-secondary mb-2">
            運転経歴証明書の申請 ― 外免切替に必要な書類
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            日本での外国免許切替（外免切替）に必要な「<strong>運転経歴証明書（Driver's Record）</strong>」は、
            LTOが発行する公式の運転履歴証明書です。
            取得後はDFAでアポスティーユ認証を受けたうえで、日本の都道府県免許センターへ提出します。
            LTO SMシーサイドでは、この書類申請の窓口受付が行われています。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <figure>
              <img
                src="/LTO/LTO SM SEASIDE/IMG_20251222_165420.jpg"
                alt="LTO SMシーサイドの運転経歴証明書申請窓口。申請書類と担当者の様子"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-sm text-gray-500">
                運転経歴証明書申請窓口。申請書類の確認と受付が行われます。
              </figcaption>
            </figure>
            <figure>
              <img
                src="/LTO/LTO SM SEASIDE/IMG_20251222_165448.jpg"
                alt="LTOが発行した運転経歴証明書（Driver's Record）。運転履歴が記載された公式書類"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-sm text-gray-500">
                LTOが発行する運転経歴証明書。外免切替の申請に必要な公式書類です。
              </figcaption>
            </figure>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <figure>
              <img
                src="/LTO/LTO SM SEASIDE/IMG_20251222_165455.jpg"
                alt="運転経歴証明書の記載内容。免許番号・有効期限・違反履歴などが記載されている"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-sm text-gray-500">
                運転経歴証明書の記載内容。免許番号・有効期限・運転履歴が公式に記載されます。
              </figcaption>
            </figure>
            <figure>
              <img
                src="/LTO/LTO SM SEASIDE/IMG_20251222_165503.jpg"
                alt="LTO運転経歴証明書に押されたLTOの公式スタンプと署名"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-sm text-gray-500">
                LTOの公式スタンプと署名が押された正式書類。DFAアポスティーユ取得後に日本の免許センターへ提出します。
              </figcaption>
            </figure>
          </div>
        </div>

        {/* 5. 室内環境と掲示物 */}
        <div>
          <h2 className="text-xl font-bold text-secondary mb-2">
            室内環境・Citizen's Charter ― 透明性の高い運営体制
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            SMシーサイドシティ内という立地のため、LTO窓口は空調が効いた清潔な環境で運営されています。
            政府機関として「Citizen's Charter（市民憲章）」が掲示されており、
            処理手順・担当者・費用が公式に明示された透明性の高い運営体制です。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <figure>
              <img
                src="/LTO/LTO SM SEASIDE/IMG_20251222_165510.jpg"
                alt="LTO SMシーサイドの室内全景。清潔で整備された窓口エリアとCitizen's Charterの掲示"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-sm text-gray-500">
                清潔な室内環境。モール内のため快適な空調環境で手続きが行えます。
              </figcaption>
            </figure>
            <figure>
              <img
                src="/LTO/LTO SM SEASIDE/IMG_20251222_165512.jpg"
                alt="LTO SMシーサイドのCitizen's Charter掲示。手続きの種類・担当者・処理時間が一覧で明示"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-sm text-gray-500">
                Citizen's Charter（市民憲章）。処理ステップ・担当者・処理時間が公式に掲示されています。
              </figcaption>
            </figure>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <figure>
              <img
                src="/LTO/LTO SM SEASIDE/IMG_20251222_165520.jpg"
                alt="LTO SMシーサイドの料金表・手数料の掲示。各種手続きの費用が公式に明示されている"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-sm text-gray-500">
                料金表の掲示。各種手続きの費用が公式に明示されており、透明性の高い運営体制です。
              </figcaption>
            </figure>
            <figure>
              <img
                src="/LTO/LTO SM SEASIDE/IMG_20251222_165526.jpg"
                alt="LTO SMシーサイドの注意事項・案内掲示。腐敗防止・贈り物禁止ポリシーが掲示されている"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-sm text-gray-500">
                注意事項の掲示。「No Gift Policy（贈り物禁止）」など腐敗防止の取り組みが明示されています。
              </figcaption>
            </figure>
          </div>
          <figure className="mt-4">
            <img
              src="/LTO/LTO SM SEASIDE/IMG_20251222_165529.jpg"
              alt="LTO SMシーサイドの全体的な室内の様子。整備された窓口と待合エリアが確認できる"
              className="w-full rounded-xl object-cover max-h-72 shadow-card"
              loading="lazy"
            />
            <figcaption className="mt-2 text-sm text-gray-500">
              LTO窓口全体の様子。整備された窓口と待合エリアが確認できます。モール内の政府機関として快適な環境が整っています。
            </figcaption>
          </figure>
        </div>

      </section>

      <SectionDivider variant="beige">
        <IconCardGrid
          heading="日本のお客さまによく聞かれること"
          columns={3}
          cards={[
            {
              icon: MapPin,
              title: 'LTO書類はセブのどこで取得するの？',
              description:
                'セブ市南部のSMシーサイドシティ（SM Seaside City Cebu）内にあるLTO（陸運局）窓口です。ショッピングモール内の政府機関で、アクセスしやすい立地にあります。',
              accent: 'gold',
            },
            {
              icon: FileText,
              title: '運転経歴証明書って何？',
              description:
                'フィリピンLTOが発行する公式の運転履歴証明書です。日本での外国免許切替（外免切替）に必要な書類で、LTO取得後にDFAアポスティーユを取得して日本の免許センターへ提出します。',
              accent: 'blue',
            },
            {
              icon: Clock,
              title: '手続きはどれくらいかかる？',
              description:
                'LTO窓口での申請から書類受け取りまで、混雑状況により変わりますが通常は数時間程度です。当社スタッフが予約・申請・受け取り・DFAアポスティーユまでワンストップで対応します。',
              accent: 'green',
            },
          ]}
        />
      </SectionDivider>

      <CtaBox
        title="LTO運転経歴証明書の取得代行はこちら"
        description="外免切替に必要なLTO運転経歴証明書の取得からDFAアポスティーユまで、セブ在住スタッフが日本語でサポートします。申請・窓口対応・DHL発送まで一括対応。"
        buttonText="無料でご相談する"
        href="#contact"
        variant="primary"
        trustNote="着手金50%・書類取得・DHL配送準備完了後に残金50%お支払い・着手前キャンセル無料"
      />

      <FaqSection
        items={[
          {
            q: 'LTO運転経歴証明書はセブのどこで取得できますか？',
            a: 'セブ市のSMシーサイドシティ（SM Seaside City Cebu）内にある「LTO（Land Transportation Office）」窓口で取得できます。モール内の政府機関です。',
          },
          {
            q: 'LTO SMシーサイドの営業時間は？',
            a: '月曜〜金曜の8:00〜17:00です。土曜・日曜・祝日は休業です。',
          },
          {
            q: '運転経歴証明書は外免切替に必要ですか？',
            a: 'はい。日本での外国免許切替（外免切替）にはLTOが発行する運転経歴証明書（Driver\'s Record）が必要です。さらにDFA（フィリピン外務省）でアポスティーユ認証を受けたうえで、日本の都道府県免許センターへ提出します。',
          },
          {
            q: 'SMシーサイドのLTOでどのような書類を取得できますか？',
            a: '運転経歴証明書（Driver\'s Record）・運転免許証の更新・再発行など、LTOが提供する各種書類・手続きに対応しています。',
          },
          {
            q: '代行を依頼した場合、書類はどのように届きますか？',
            a: 'セブ在住スタッフがLTO窓口での申請・書類受け取り・DFAアポスティーユまで行い、取得後はDHLなどの国際宅配便で日本のご自宅に発送します。お客さまがフィリピンに来る必要はありません。',
          },
        ]}
        ctaTitle="書類のご依頼・ご相談はこちら"
        ctaButton="無料相談フォームへ"
      />
    </PageLayout>
  );
}
