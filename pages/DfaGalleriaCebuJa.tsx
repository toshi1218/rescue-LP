import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import SummaryBlock from '../components/SummaryBlock';
import SectionDivider from '../components/SectionDivider';
import IconCardGrid from '../components/IconCardGrid';
import CtaBox from '../components/CtaBox';
import FaqSection from '../components/FaqSection';
import { MapPin, Building2, CalendarCheck } from 'lucide-react';
import { useMeta } from '../lib/useMeta';

export default function DfaGalleriaCebuJa() {
  useMeta(
    'DFAアポスティーユ現地レポート【セブ・ロビンソンズガレリア2026年】',
    'フィリピンのDFAアポスティーユはセブのロビンソンズガレリア内で取得できます。現地写真で場所・専用窓口・最新ルールを解説。日本語対応の代行サービスも。',
  );

  return (
    <PageLayout
      breadcrumbs={[
        { label: 'ホーム', href: '/ja/' },
        { label: 'ガイド', href: '/ja/guides' },
        { label: 'DFAアポスティーユ現地レポート' },
      ]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'GovernmentOffice',
          name: 'DFA Consular Office Cebu',
          description:
            'フィリピン外務省の領事館。パスポート申請・更新およびアポスティーユ認証を行う公的機関。ロビンソンズガレリアセブのモール内に位置する。',
          url: 'https://ph-document.com/ja/dfa-apostille-genchi-report/',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Robinsons Galleria Cebu, General Maxilom Ave',
            addressLocality: 'Cebu City',
            addressRegion: 'Cebu',
            addressCountry: 'PH',
          },
          containedInPlace: {
            '@type': 'ShoppingCenter',
            name: 'Robinsons Galleria Cebu',
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'DFAアポスティーユ現地レポート【セブ・ロビンソンズガレリア2026年】',
          description:
            'フィリピンのDFAアポスティーユはセブのロビンソンズガレリア内で取得できます。現地写真で場所・専用窓口・最新ルールを解説。',
          url: 'https://ph-document.com/ja/dfa-apostille-genchi-report/',
          datePublished: '2026-02-01',
          dateModified: '2026-03-01',
          publisher: {
            '@type': 'Organization',
            name: 'フィリピン書類取得代行センター',
            url: 'https://ph-document.com/',
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'DFAセブはどこにありますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'セブ市内のロビンソンズガレリアセブというショッピングモールの中にあります。パスポート申請とアポスティーユで受付エリアが分かれています。',
              },
            },
            {
              '@type': 'Question',
              name: 'アポスティーユの手続きはどのように行われますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '専用の「APOSTILLE AUTHENTICATION/PROCESSING」コーナーで受け付けています。2024年12月2日より事前オンライン予約が必要になっています（当日ウォークイン不可）。',
              },
            },
            {
              '@type': 'Question',
              name: '現地の様子はどんな環境ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'ショッピングモール内の清潔な環境で、制服を着た警備員が常駐しています。パスポートエリアとアポスティーユエリアはそれぞれ独立した受付窓口を持つ正式な政府機関です。',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="DFAアポスティーユ現地レポート"
        badges={['現地写真あり', 'セブ在住スタッフが撮影', '日本語解説']}
        lastUpdated="2026年3月1日"
        ctaText="ご相談・お問い合わせ"
        ctaHref="#contact"
      />

      <SummaryBlock
        conclusion="あなたの書類が処理される場所は、セブ市内のショッピングモール「ロビンソンズガレリア」の中にある公的機関です。"
        points={[
          'DFA（フィリピン外務省領事館）はロビンソンズガレリアセブのモール内に入っています',
          'パスポート申請・更新とアポスティーユ認証を扱う政府機関です',
          '2024年12月より、アポスティーユは事前オンライン予約制になっています',
        ]}
      />

      {/* 写真ストーリーセクション */}
      <section className="mb-8 space-y-10">

        {/* 1. ガレリアの外観 */}
        <div>
          <h2 className="text-xl font-bold text-secondary mb-4">
            ロビンソンズガレリアセブの外観
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <figure>
              <img
                src="/dfa-galleria-cebu-01.webp"
                alt="ロビンソンズガレリアセブの正面外観。ヤシの木と白い外壁が特徴的な大型ショッピングモール"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-sm text-gray-500">
                ロビンソンズガレリアセブの正面入口。セブ市内の大型ショッピングモールで、DFAはここに入っています。
              </figcaption>
            </figure>
            <figure>
              <img
                src="/dfa-galleria-cebu-02.webp"
                alt="幹線道路側から見たロビンソンズガレリアセブ。バイクや車が行き交うセブの街並みの中にある"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-sm text-gray-500">
                道路側から見た外観。幹線道路沿いにあり、セブ市内からアクセスしやすい立地です。
              </figcaption>
            </figure>
          </div>
        </div>

        {/* 2. DFAの入口 */}
        <div>
          <h2 className="text-xl font-bold text-secondary mb-4">
            モール内のDFA入口
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <figure>
              <img
                src="/dfa-galleria-cebu-03.webp"
                alt="DFA Consular Office Cebuの入口サイン。煉瓦調の壁にLEDで照らされた「Department of Foreign Affairs Consular Office Cebu」の文字とフィリピン国旗・ASEAN旗"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-sm text-gray-500">
                フィリピン外務省（DFA）領事館の入口サイン。フィリピン国旗とASEAN旗が目印です。
              </figcaption>
            </figure>
            <figure>
              <img
                src="/dfa-galleria-cebu-04.webp"
                alt="DFAのINFORMATIONカウンターとENTRANCEガラス扉。制服を着た警備員が常駐している"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-sm text-gray-500">
                ガラス張りのINFORMATIONカウンター前。制服のセキュリティが常駐する正式な政府機関です。
              </figcaption>
            </figure>
          </div>
        </div>

        {/* 3. パスポート申請エリア */}
        <div>
          <h2 className="text-xl font-bold text-secondary mb-4">
            パスポート申請エリア
          </h2>
          <figure>
            <img
              src="/dfa-galleria-cebu-05.webp"
              alt="DFAパスポート申請の待合エリア。モール内にベンチと赤いロープで整備された専用ゾーンが設けられており、Jollibeeが背景に見える"
              className="w-full rounded-xl object-cover max-h-80 shadow-card"
              loading="lazy"
            />
            <figcaption className="mt-2 text-sm text-gray-500">
              パスポート申請・更新の待合エリア。モール内に専用ゾーンが設けられています。
            </figcaption>
          </figure>
        </div>

        {/* 4. アポスティーユ専用コーナー */}
        <div>
          <h2 className="text-xl font-bold text-secondary mb-4">
            アポスティーユ専用コーナー
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            DFA Galleria Cebuでは、アポスティーユはパスポートとは別の専用エリアで受け付けています。
            「APOSTILLE AUTHENTICATION/PROCESSING」と書かれた赤い看板が目印です。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <figure>
              <img
                src="/dfa-galleria-cebu-09.webp"
                alt="アポスティーユ専用の受付エリア。AUTHENTICATION/PROCESSINGの看板と白いベンチが並ぶ待合スペース"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-sm text-gray-500">
                アポスティーユエリアの全体像。パスポートエリアとは独立した受付となっています。
              </figcaption>
            </figure>
            <figure>
              <img
                src="/dfa-galleria-cebu-10.webp"
                alt="DFA AUTHENTICATION室の入口。ガラス越しに番号付きの窓口が見える。申請者が窓口前で対応を受けている"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-sm text-gray-500">
                AUTHENTICATION（認証）室の入口。番号付き窓口で書類の確認・処理が行われます。
              </figcaption>
            </figure>
          </div>
        </div>

        {/* 5. 現地で確認した最新ルール */}
        <div>
          <h2 className="text-xl font-bold text-secondary mb-2">
            現地で確認した最新ルール（2024年12月〜）
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            2024年12月2日より、アポスティーユ・オーセンティケーションの申請には
            <strong>事前オンライン予約（apostille.gov.ph）</strong>が必要になりました。
            当日窓口でのウォークイン申請は受け付けられていません。
            以下は現地で確認した公式の掲示物です。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <figure>
              <img
                src="/dfa-galleria-cebu-07.webp"
                alt="DFA Consular Office Cebuが掲示するADVISORY。APPOINTMENT-ONLY POLICY FOR AUTHENTICATION/APOSTILLE SERVICESと記載。2024年12月2日より実施"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-sm text-gray-500">
                DFA Consular Office Cebu が掲示するADVISORY。アポスティーユは事前予約必須と明記されています。
              </figcaption>
            </figure>
            <figure>
              <img
                src="/dfa-galleria-cebu-08.webp"
                alt="DFA Manilaが発行したPaunawa sa Publiko（公式告知文書）。Online-Appointment-Only Systemへの移行とapostille.gov.phでの予約方法が記載"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-sm text-gray-500">
                DFA Manila発行の公式告知（Paunawa sa Publiko）。apostille.gov.ph からの予約が必要と記載されています。
              </figcaption>
            </figure>
          </div>
          <figure className="mt-4">
            <img
              src="/dfa-galleria-cebu-06.webp"
              alt="APOSTILLE AUTHENTICATION/PROCESSINGと大きく書かれた赤い看板。上部にADVISORYとPaunawa sa Publikoが貼付されている"
              className="w-full rounded-xl object-cover max-h-72 shadow-card"
              loading="lazy"
            />
            <figcaption className="mt-2 text-sm text-gray-500">
              アポスティーユ受付入口の看板。ADVISORYとPaunawa sa Publikoが掲示されています。
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
              title: 'どんな場所で処理されるの？',
              description:
                'セブ市内の大型モール「ロビンソンズガレリア」内にある、フィリピン政府の正式な機関です。清潔で整備された環境で処理されます。',
              accent: 'gold',
            },
            {
              icon: Building2,
              title: 'ちゃんとした体制で処理されているの？',
              description:
                'パスポート申請・アポスティーユ認証それぞれに専用の受付部門と処理室があります。番号付きの窓口で正式に処理されます。',
              accent: 'blue',
            },
            {
              icon: CalendarCheck,
              title: '現地のルール変更にも対応できる？',
              description:
                '2024年12月にアポスティーユが事前予約制に変わるなど、現地ルールは変わります。当社スタッフが常に最新の状況を把握しています。',
              accent: 'green',
            },
          ]}
        />
      </SectionDivider>

      <CtaBox
        title="書類取得・アポスティーユのご依頼はこちら"
        description="フィリピン外務省（DFA）でのアポスティーユ認証を含む書類取得を、セブ在住スタッフが日本語でサポートします。"
        buttonText="無料でご相談する"
        href="#contact"
        variant="primary"
        trustNote="着手金50%・書類取得・DHL配送準備完了後に残金50%お支払い・着手前キャンセル無料"
      />

      <FaqSection
        items={[
          {
            q: 'DFAセブはどこにありますか？',
            a: 'セブ市内のロビンソンズガレリアセブというショッピングモールの中にあります。パスポート申請とアポスティーユで受付エリアが分かれています。',
          },
          {
            q: 'アポスティーユの手続きはどのように行われますか？',
            a: '専用の「APOSTILLE AUTHENTICATION/PROCESSING」コーナーで受け付けています。2024年12月2日より事前オンライン予約が必要になっています（当日ウォークイン不可）。',
          },
          {
            q: '現地の様子はどんな環境ですか？',
            a: 'ショッピングモール内の清潔な環境で、制服を着た警備員が常駐しています。パスポートエリアとアポスティーユエリアはそれぞれ独立した受付窓口を持つ正式な政府機関です。',
          },
        ]}
        ctaTitle="書類のご依頼・ご相談はこちら"
        ctaButton="無料相談フォームへ"
      />
    </PageLayout>
  );
}
