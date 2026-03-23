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

export default function PsaCrsCebuJa() {
  useMeta(
    'PSA CRSセブ現地レポート【出生証明書・結婚証明書・CENOMAR取得場所】',
    'フィリピンのPSA書類（出生証明書・結婚証明書・CENOMAR・死亡証明書）はセブ市コロン通りのCRSアウトレットで取得します。セブ在住スタッフによる現地写真レポート。',
  );

  return (
    <PageLayout
      breadcrumbs={[
        { label: 'ホーム', href: '/ja/' },
        { label: 'ガイド', href: '/ja/guides' },
        { label: 'PSA CRSセブ現地レポート' },
      ]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'GovernmentOffice',
          name: 'PSA Civil Registration System (CRS) - Cebu City Outlet',
          description:
            'フィリピン統計局（PSA）の書類発行窓口。出生証明書・結婚証明書・CENOMAR・死亡証明書の発行を行う公的機関。セブ市コロン通りに位置する。',
          url: 'https://ph-document.com/ja/psa-crs-cebu-genchi-report',
          telephone: '256-0592',
          openingHours: 'Mo-Fr 07:00-17:00',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Colon Street',
            addressLocality: 'Cebu City',
            addressRegion: 'Cebu',
            addressCountry: 'PH',
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'PSA CRSセブ現地レポート【出生証明書・結婚証明書・CENOMAR取得場所】',
          description:
            'フィリピンのPSA書類（出生証明書・結婚証明書・CENOMAR・死亡証明書）はセブ市コロン通りのCRSアウトレットで取得します。現地写真と詳細解説。',
          url: 'https://ph-document.com/ja/psa-crs-cebu-genchi-report',
          datePublished: '2026-03-01',
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
              name: 'PSA書類はセブのどこで取得できますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'セブ市のコロン通りにある「Civil Registration System (CRS) Cebu City Outlet」で取得できます。出生証明書・結婚証明書・CENOMAR・死亡証明書すべてここで発行されます。PSA Regional Statistical Services Office VII（本部）の隣に位置しています。',
              },
            },
            {
              '@type': 'Question',
              name: 'PSA CRSセブの営業時間は？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '月曜〜金曜の7:00〜17:00です。土曜・日曜・祝日は休業です。',
              },
            },
            {
              '@type': 'Question',
              name: 'PSA CRSセブはオンライン予約が必要ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '2025年10月1日より、PSA Cebu City CRS OutletはCRSオンライン予約システムを完全実施しています。予約なしでは受け付けてもらえません（No Appointment, No Transaction）。予約はhttps://crs-appointment.psahelpline.ph/から行います。',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="PSA CRSセブ現地レポート"
        badges={['現地写真あり', 'セブ在住スタッフが撮影', '日本語解説']}
        lastUpdated="2026年3月23日"
        ctaText="ご相談・お問い合わせ"
        ctaHref="#contact"
      />

      <SummaryBlock
        conclusion="日本のお客さまからご依頼いただいたPSA書類は、セブ市コロン通りにあるフィリピン政府の公的機関「CRS Cebu City Outlet」で取得しています。"
        points={[
          '出生証明書・結婚証明書・CENOMAR・死亡証明書など、PSAが発行するすべての書類をここで取得',
          'PSA Regional Statistical Services Office VII（地方統計局本部）の隣に位置する正規の政府窓口',
          '2025年10月より完全予約制（オンライン予約必須）。当日飛び込みでの受付は不可',
          '営業時間：月〜金 7:00〜17:00、土日祝休み',
        ]}
      />

      {/* 写真ストーリーセクション */}
      <section className="mb-8 space-y-10">

        {/* 1. 場所・外観 */}
        <div>
          <h2 className="text-xl font-bold text-secondary mb-2">
            場所はセブ市コロン通り ― PSA本部とCRSアウトレットが並ぶ
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            セブ市内で最も古い目抜き通り「コロン通り（Colon Street）」沿いに、
            <strong>PSA Regional Statistical Services Office VII（地方統計局本部）</strong>と
            <strong>Civil Registration System (CRS) Cebu City Outlet</strong>が並んで存在します。
            さらにすぐ隣にはLocal Civil Registrar（地元の民事登録局）もあり、
            書類関連の手続きが一か所に集まったエリアです。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <figure>
              <img
                src="/PSA/IMG_20260120_143535.jpg"
                alt="PSA Regional Statistical Services Office VIIとCivil Registration System Cebu City Outletが並ぶ外観。コロン通り沿いの政府機関"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-sm text-gray-500">
                左がPSA本部（シャッター側）、右がCRS Cebu City Outlet（書類発行窓口）。両者が隣接しています。
              </figcaption>
            </figure>
            <figure>
              <img
                src="/PSA/IMG_20260120_143604.jpg"
                alt="Civil Registration System (CRS) Cebu City Outletの看板。出生証明書・結婚証明書・CENOMAR・死亡証明書の発行と記載"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-sm text-gray-500">
                「Civil Registration System (CRS) Cebu City Outlet」の看板。提供サービスが明示されています。
              </figcaption>
            </figure>
          </div>
        </div>

        {/* 2. 周辺環境 */}
        <div>
          <h2 className="text-xl font-bold text-secondary mb-2">
            周辺はセブ市内の繁華街 ― ガイサノキャピタルサウス近く
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            CRS Cebu City Outletはガイサノキャピタルサウス（Gaisano Capital South）の近くに位置する繁華街の一角にあります。
            ジプニーやバイクが行き交う、活気あるセブ市内の典型的な街並みです。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <figure>
              <img
                src="/PSA/IMG_20260120_143930.jpg"
                alt="ガイサノキャピタルサウスの外観。セブ市内の繁華街にある大型商業施設"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-sm text-gray-500">
                近くのガイサノキャピタルサウス。この付近にPSA・CRS・Local Civil Registrarが集まっています。
              </figcaption>
            </figure>
            <figure>
              <img
                src="/PSA/IMG_20260120_143612.jpg"
                alt="コロン通り沿いのPSA CRS Cebu City Outlet入口。利用者が入口前に列を作っている"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-sm text-gray-500">
                入口前の様子。常に多くの利用者が訪れる、セブ市内で最も重要な書類発行窓口の一つです。
              </figcaption>
            </figure>
          </div>
        </div>

        {/* 3. 予約必須の案内 */}
        <div>
          <h2 className="text-xl font-bold text-secondary mb-2">
            入口の掲示：「予約なし・取引なし」― 完全予約制へ移行済み
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            2025年10月1日より、PSA Cebu City CRS OutletはCRSオンライン予約システムを完全実施しています。
            入口には大きく「<strong>NO APPOINTMENT, NO TRANSACTION</strong>（予約なし・手続きなし）」と掲示されており、
            当日の飛び込み申請は一切受け付けられません。
            予約は無料で、<strong>https://crs-appointment.psahelpline.ph/</strong> から行います。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <figure>
              <img
                src="/PSA/IMG_20260120_142533.jpg"
                alt="入口ガラス扉に貼られた掲示。NO APPOINTMENT NO TRANSACTION / ONLINE APPOINTMENT IS FREE / BUSINESS HOURS月〜金7:00-17:00と記載"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-sm text-gray-500">
                入口に貼られた掲示。「No Appointment, No Transaction」と「Online Appointment is Free（予約は無料）」が並んでいます。
              </figcaption>
            </figure>
            <figure>
              <img
                src="/PSA/IMG_20251222_155841.jpg"
                alt="PSA Cebu City CRS OutletのパブリックアドバイザリーポスターにCRSオンライン予約システム実施（2025年10月1日〜）と記載"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-sm text-gray-500">
                公式のパブリックアドバイザリー。2025年10月1日からCRSオンライン予約システムを完全実施と明記。
              </figcaption>
            </figure>
          </div>
        </div>

        {/* 4. 警備員による入場管理 */}
        <div>
          <h2 className="text-xl font-bold text-secondary mb-2">
            入口では予約確認 ― 警備員が予約の有無をチェック
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            入口には制服を着た警備員が常駐しており、入場時に予約の確認が行われます。
            予約なしの来場者は入場を断られます。代行サービスではこの入場管理を含め、
            スタッフが書類の受け取りまですべて対応します。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <figure>
              <img
                src="/PSA/IMG_20260120_142346.jpg"
                alt="PSA CRS Cebu City Outletの入口で制服を着た女性警備員が利用者の予約確認をしている様子"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-sm text-gray-500">
                入口で予約確認をする警備員。予約番号の提示が入場の条件です。
              </figcaption>
            </figure>
            <figure>
              <img
                src="/PSA/IMG_20260120_142355.jpg"
                alt="PSA CRS Cebu City Outlet入口のEXITドア。複数の掲示物と「NO APPOINTMENT NO TRANSACTION」の張り紙が見える"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-sm text-gray-500">
                入口・出口が管理されており、手続きの流れが整備されています。
              </figcaption>
            </figure>
          </div>
        </div>

        {/* 5. 窓口・待合室の様子 */}
        <div>
          <h2 className="text-xl font-bold text-secondary mb-2">
            室内の様子 ― 多くの利用者が番号を待つ
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            室内には多数の窓口と広い待合スペースがあります。
            1〜18番程度の番号付き窓口があり、申請・支払い・書類受け取りの各ステップが
            それぞれ異なる窓口で処理されます。
            混雑時には多くの方が座って順番を待っています。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <figure>
              <img
                src="/PSA/IMG_20260120_142017.jpg"
                alt="PSA CRS Cebu City Outletの待合室。多数の青い椅子に利用者が座って番号を待っている。窓口1〜9番が並ぶ"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-sm text-gray-500">
                番号窓口（1〜9番）と待合エリア。多くの利用者が静かに番号を待っています。
              </figcaption>
            </figure>
            <figure>
              <img
                src="/PSA/IMG_20260120_142456.jpg"
                alt="PSA CRS Cebu City Outletの広い待合室。白い椅子に多数の利用者が座っており、奥に支払い窓口（PAYMENT）が見える"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-sm text-gray-500">
                広い待合スペース。奥にはPAYMENT（支払い）窓口が複数並んでいます。
              </figcaption>
            </figure>
          </div>
          <figure>
            <img
              src="/PSA/IMG_20260120_142515.jpg"
              alt="PSA CRS番号表示ディスプレイ。NOW SERVINGとSCHEDULED RELEASEの番号が表示されている。RELEASINGとPAYMENTの各窓口が見える"
              className="w-full rounded-xl object-cover max-h-72 shadow-card"
              loading="lazy"
            />
            <figcaption className="mt-2 text-sm text-gray-500">
              天井のディスプレイに「NOW SERVING（現在呼び出し中）」の番号が表示されます。申請・支払い・受け取りと段階ごとに窓口が異なります。
            </figcaption>
          </figure>
        </div>

        {/* 6. セルフサービスキオスク */}
        <div>
          <h2 className="text-xl font-bold text-secondary mb-2">
            セルフサービスキオスク ― 申請書の入力端末
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            窓口に向かう前に、セルフサービスキオスク（自動端末）で申請書の情報を入力します。
            バーコード付きの申請番号が印刷されて出てくる仕組みで、窓口での処理をスムーズにする役割を担っています。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <figure>
              <img
                src="/PSA/IMG_20260120_142106.jpg"
                alt="PSA CRSのセルフサービスキオスク。白いタッチパネル端末で申請情報を入力している利用者"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-sm text-gray-500">
                申請情報を入力するセルフサービス端末。タッチパネルとキーボードで操作します。
              </figcaption>
            </figure>
            <figure>
              <img
                src="/PSA/IMG_20260120_142323.jpg"
                alt="セルフサービスキオスクからバーコード付きの申請番号票が印刷されて出てくる様子"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-sm text-gray-500">
                入力後はバーコード付きの番号票が発行されます。これを持って窓口に向かいます。
              </figcaption>
            </figure>
          </div>
        </div>

        {/* 7. 申請書の種類 */}
        <div>
          <h2 className="text-xl font-bold text-secondary mb-2">
            取得できる書類の種類 ― 出生証明書・結婚証明書・CENOMAR・死亡証明書
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            PSA CRS Cebu City Outletでは、PSAが発行するすべての主要書類を申請できます。
            それぞれ専用の申請書があり、窓口付近に用紙が置かれています。
            ただし現在は予約時にオンラインで情報を入力するため、当日の紙の申請書記入は最小限になっています。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <figure>
              <img
                src="/PSA/IMG_20260120_142305.jpg"
                alt="PSA出生証明書（Birth Certificate）申請書の記入方法説明。6つの記入ステップが番号付きで掲示されている"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-sm text-gray-500">
                出生証明書（Birth Certificate）申請書の記入方法説明。氏名・生年月日・出生地・両親の氏名などを記入します。
              </figcaption>
            </figure>
            <figure>
              <img
                src="/PSA/IMG_20260120_142141.jpg"
                alt="CENOMAR（Certificate of No Marriage）申請書。PSA Philippine Statistics Authorityの公式フォーム"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-sm text-gray-500">
                CENOMAR（独身証明書）の申請書。「THIS FORM IS NOT FOR SALE（このフォームは販売しません）」と明記されています。
              </figcaption>
            </figure>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <figure>
              <img
                src="/PSA/IMG_20260120_142221.jpg"
                alt="PSA結婚証明書（Marriage Certificate）申請書。夫・妻の氏名・婚姻日・婚姻場所などの記入欄がある"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-sm text-gray-500">
                結婚証明書（Marriage Certificate）申請書。夫・妻双方の情報と婚姻の詳細を記入します。
              </figcaption>
            </figure>
            <figure>
              <img
                src="/PSA/IMG_20260120_142257.jpg"
                alt="CENODEATH（死亡証明書）の申請書記入方法説明。死亡者の氏名・生年月日・出生地などの記入ステップが掲示"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow-card"
                loading="lazy"
              />
              <figcaption className="mt-2 text-sm text-gray-500">
                死亡証明書（CENODEATH）の申請書記入説明。亡くなった方の情報と申請者の情報を記入します。
              </figcaption>
            </figure>
          </div>
        </div>

        {/* 8. Citizen's Charter */}
        <div>
          <h2 className="text-xl font-bold text-secondary mb-2">
            Citizen's Charter ― 正式な処理手順と担当者が明示
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            PSAは政府機関として「シチズンズ・チャーター（Citizen's Charter）」を義務づけられており、
            処理手順・担当者・処理時間・費用がすべて公式に掲示されています。
            不正や汚職を防ぐ透明性の高い制度で、「No Gift Policy（贈り物禁止）」「Bawal ang Red Tape（不正手続き禁止）」
            なども明示されています。
          </p>
          <figure>
            <img
              src="/PSA/IMG_20260120_142338.jpg"
              alt="PSA Regional Statistical Services Office VIIのCitizen's Charter。民事登録書類のコピー発行手順・担当者・処理時間が一覧で掲示"
              className="w-full rounded-xl object-cover max-h-72 shadow-card"
              loading="lazy"
            />
            <figcaption className="mt-2 text-sm text-gray-500">
              Citizen's Charter（市民憲章）。処理ステップ・担当者・処理時間が明記された、透明性の高い運営体制です。
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
              title: 'どこで書類を取得するの？',
              description:
                'セブ市コロン通りにあるPSA CRS Cebu City Outletという政府機関です。出生証明書・結婚証明書・CENOMAR・死亡証明書のすべてをここで取得します。隣にLocal Civil Registrarもあります。',
              accent: 'gold',
            },
            {
              icon: FileText,
              title: 'ちゃんとした場所で処理されるの？',
              description:
                'フィリピン統計局（PSA）が運営する正式な政府機関です。番号付き窓口・番号表示システム・Citizen\'s Charterが整備されており、透明性の高い運営体制です。',
              accent: 'blue',
            },
            {
              icon: Clock,
              title: '予約や手続きは複雑じゃない？',
              description:
                '2025年10月からオンライン予約が必須になるなど、現地ルールは変化しています。当社スタッフが最新の状況を把握し、予約から書類受け取りまでワンストップで対応します。',
              accent: 'green',
            },
          ]}
        />
      </SectionDivider>

      <CtaBox
        title="PSA書類の取得代行はこちら"
        description="出生証明書・結婚証明書・CENOMAR・死亡証明書など、PSAのすべての書類取得をセブ在住スタッフが日本語でサポートします。予約・窓口対応・DHL発送まで一括対応。"
        buttonText="無料でご相談する"
        href="#contact"
        variant="primary"
        trustNote="着手金50%・書類取得・DHL配送準備完了後に残金50%お支払い・着手前キャンセル無料"
      />

      <FaqSection
        items={[
          {
            q: 'PSA書類はセブのどこで取得できますか？',
            a: 'セブ市のコロン通りにある「Civil Registration System (CRS) Cebu City Outlet」で取得できます。出生証明書・結婚証明書・CENOMAR・死亡証明書すべてここで発行されます。PSA Regional Statistical Services Office VII（本部）の隣に位置しています。',
          },
          {
            q: 'PSA CRSセブの営業時間は？',
            a: '月曜〜金曜の7:00〜17:00です。土曜・日曜・祝日は休業です。',
          },
          {
            q: 'PSA CRSセブはオンライン予約が必要ですか？',
            a: '2025年10月1日より完全予約制です。「No Appointment, No Transaction（予約なし・手続きなし）」が徹底されており、予約なしでは入場できません。予約はhttps://crs-appointment.psahelpline.ph/から無料で行えます。',
          },
          {
            q: 'どのような書類をここで取得できますか？',
            a: '出生証明書（Birth Certificate）・結婚証明書（Marriage Certificate）・独身証明書（CENOMAR）・死亡証明書（CENODEATH）など、PSAが発行するすべての主要な市民登録書類を取得できます。',
          },
          {
            q: '代行を依頼した場合、書類はどのように届きますか？',
            a: 'セブ在住スタッフが予約・窓口申請・書類受け取りまで行い、取得後はDHLなどの国際宅配便で日本のご自宅に発送します。お客さまがフィリピンに来る必要はありません。',
          },
        ]}
        ctaTitle="書類のご依頼・ご相談はこちら"
        ctaButton="無料相談フォームへ"
      />
    </PageLayout>
  );
}
