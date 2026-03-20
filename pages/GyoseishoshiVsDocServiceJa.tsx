import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import RelatedLinks from '../components/RelatedLinks';
import HeroBanner from '../components/HeroBanner';
import CtaBox from '../components/CtaBox';
import FaqSection from '../components/FaqSection';
import { CheckCircle, XCircle, Users, FileCheck } from 'lucide-react';
import { useMeta } from '../lib/useMeta';

export default function GyoseishoshiVsDocServiceJa() {
  useMeta(
    '行政書士の仕事とフィリピン書類取得サービスの違い【2026年3月】管轄を正確に理解する',
    '国際結婚・配偶者ビザ・帰化申請で行政書士と書類取得サービスを使い分ける方法。入管申請は行政書士、フィリピン現地書類（PSA・CENOMAR・NBI）の取得は書類取得サービスの管轄です。',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: '国際結婚ガイド', href: '/ja/kokusai-kekkon-guide/' }, { label: '行政書士と書類取得サービスの違い' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: '行政書士に頼む仕事と書類取得サービスに頼む仕事の違い｜国際結婚・配偶者ビザ',
          description: '国際結婚や配偶者ビザで行政書士と書類取得サービスを使い分ける方法を解説。入管申請・役所届出は行政書士、フィリピン書類（PSA・CENOMAR・NBI）の現地取得は書類取得サービスの管轄です。',
          url: 'https://ph-document.com/ja/gyouseishoshi-to-shorui-shuttoku/',
          publisher: { '@type': 'Organization', name: 'IGRS Inc.', url: 'https://ph-document.com/ja/' },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: '行政書士に頼めばフィリピン書類も取得してもらえますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '行政書士は日本国内の書類作成・申請代行を業務とする国家資格者です。フィリピンのPSA・CENOMAR・NBIなど現地書類の取得は行政書士の業務範囲外となります。これらの現地書類はフィリピン在住のスタッフや書類取得専門サービスを通じて取得する必要があります。',
              },
            },
            {
              '@type': 'Question',
              name: 'フィリピン総領事館への手続きは行政書士に頼めますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '東京・大阪・名古屋にあるフィリピン総領事館はフィリピン国の機関です。そのため、ここでの手続き（Report of Marriage申請・フィリピン国籍確認等）は日本の行政書士の職域外となります。フィリピン総領事館での手続きは本人が行うか、フィリピン側の専門家を通じる必要があります。',
              },
            },
            {
              '@type': 'Question',
              name: '配偶者ビザは自分で申請できますか？行政書士は必要ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '配偶者ビザ（在留資格認定証明書交付申請・在留資格変更許可申請）は本人（または配偶者・弁護士・行政書士）が申請できます。過去に不許可になったことがある、理由書が書けない、複雑な事情がある場合などは行政書士に相談することをおすすめします。初めてで書類の不備がなければ自力申請も可能です。',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="行政書士の仕事と、書類取得サービスの仕事の違い"
        badges={['役割の切り分けを解説', '管轄を正確に理解する', '費用の二重払いを防ぐ']}
        ctaText="フィリピン書類の相談はこちら"
        ctaHref="#contact"
      />

      <article className="space-y-10">

        {/* 導入 */}
        <section className="rounded-2xl bg-white border border-gray-200 p-6">
          <h2 className="text-base font-bold text-gray-900 mb-3">「行政書士に全部お任せ」はできないケースがある</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            国際結婚・配偶者ビザ・帰化申請を進めるとき、「行政書士に頼めばすべて解決する」と思っている方が少なくありません。しかし実際には、<strong>行政書士が対応できる業務と、できない業務</strong>があります。
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            特にフィリピンが関係する手続きでは、「日本の入管や役所に提出する申請書類の作成」と「フィリピン現地での書類取得」が別々の作業になります。この2つを混同すると、行政書士に依頼したのにフィリピン書類が揃わない、という状況が起きます。
          </p>
        </section>

        {/* 行政書士の管轄 */}
        <section className="rounded-2xl bg-white border border-gray-200 p-6">
          <h2 className="text-base font-bold text-gray-900 mb-4">行政書士が担当できる業務</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            行政書士は、官公署（入国管理局・市区町村役場・法務局など）に提出する書類の作成・申請代行を業とする日本の国家資格者です。
          </p>
          <ul className="space-y-3">
            {[
              { icon: true, title: '入国管理局への申請書類の作成・提出代行', detail: '配偶者ビザ（在留資格認定証明書交付申請・在留資格変更許可申請・更新申請）の申請書類作成、理由書の作成、窓口への提出代行。' },
              { icon: true, title: '市区町村役場への婚姻届・関連書類の相談', detail: '婚姻届の書き方・添付書類の確認・受理後の手続きについてのアドバイス。' },
              { icon: true, title: '法務局への帰化申請書類の作成支援', detail: '帰化申請に必要な書類のリストアップ・申請書類の作成・法務局との折衝。' },
              { icon: true, title: '理由書・申告書など日本語書類の作成', detail: '入管が求める「婚姻の経緯」「申請の理由」などの文書作成は行政書士の得意分野。' },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-gray-800 mb-0.5">{item.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* 行政書士の管轄外 */}
        <section className="rounded-2xl bg-amber-50 border border-amber-200 p-6">
          <h2 className="text-base font-bold text-amber-900 mb-4">行政書士の業務範囲外になるもの</h2>
          <p className="text-sm text-amber-800 leading-relaxed mb-4">
            以下は、日本の行政書士が業務として引き受けることができない（または資格の範囲外となる）手続きです。
          </p>
          <ul className="space-y-3">
            {[
              { title: 'フィリピン総領事館（東京・大阪・名古屋）での手続き', detail: 'Report of Marriage（婚姻報告）の申請などはフィリピン国の機関での手続きです。日本の行政書士の職域外となります。本人または代理人（フィリピン側）が対応する必要があります。' },
              { title: 'PSA・CENOMAR・NBIなど、フィリピン現地書類の取得', detail: 'フィリピン統計局（PSA）・NBIなどへの申請・受領はフィリピン国内の手続きです。日本の資格者が代行できる業務ではありません。' },
              { title: 'DFAアポスティーユの取得', detail: 'フィリピン外務省（DFA）によるアポスティーユ認証はフィリピン国内での手続きです。行政書士が直接取得することはできません。' },
              { title: 'フィリピドへの国際郵送・現地費用', detail: 'PSA書類の現地手数料・DFAアポスティーユの申請料・DHLなどの国際郵送費用は、現地での実費であり行政書士の業務とは別です。' },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-amber-800 mb-0.5">{item.title}</p>
                  <p className="text-sm text-amber-700 leading-relaxed">{item.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* 書類取得サービスの管轄 */}
        <section className="rounded-2xl bg-white border border-gray-200 p-6">
          <h2 className="text-base font-bold text-gray-900 mb-4">フィリピン書類取得サービス（IGRS）が担当できること</h2>
          <ul className="space-y-3">
            {[
              { title: 'PSA書類の取得代行', detail: 'CENOMAR（独身証明書）・PSA出生証明書・PSA婚姻証明書などをフィリピン統計局（PSA）から取得します。' },
              { title: 'DFAアポスティーユの取得代行', detail: 'PSA書類・CENOMAR・NBI ClearanceなどへのDFAアポスティーユ認証をフィリピン外務省（DFA）に申請します。' },
              { title: 'NBI Clearanceの取得代行', detail: '過去にNBI取得歴がある場合（更新）を中心に対応。HIT（同名者あり）の対応も可能です。' },
              { title: 'LTOドライバーズレコードの取得代行', detail: '外免切替・企業採用に必要なLTOドライバーズレコードをフィリピン陸運局から取得します。' },
              { title: '日本への国際郵送', detail: 'DHL追跡付きで書類を日本のご住所へ郵送します。' },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-gray-800 mb-0.5">{item.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* 併用パターン */}
        <section className="rounded-2xl bg-gray-50 border border-gray-200 p-6">
          <h2 className="text-base font-bold text-gray-900 mb-4">よくある「行政書士 + 書類取得サービス」の併用パターン</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-5">
            実際には、行政書士とフィリピン書類取得サービスを<strong>並行して使う</strong>のが最もスムーズなケースが多いです。
          </p>
          <div className="space-y-4">
            {[
              {
                title: '配偶者ビザ申請のケース',
                rows: [
                  { role: '行政書士', task: '在留資格認定証明書交付申請書・理由書・申告書の作成、入国管理局への提出代行' },
                  { role: 'IGRSなど書類取得サービス', task: 'PSA婚姻証明書・PSA出生証明書・DFAアポスティーユの取得・日本への郵送' },
                ],
              },
              {
                title: '帰化申請のケース',
                rows: [
                  { role: '行政書士', task: '帰化申請書類の作成・法務局との折衝、申請の進行管理' },
                  { role: 'IGRSなど書類取得サービス', task: 'PSA出生証明書・CENOMAR・DFAアポスティーユの取得' },
                ],
              },
            ].map((pattern, i) => (
              <div key={i} className="rounded-xl bg-white border border-gray-200 p-4">
                <p className="text-sm font-bold text-gray-800 mb-3">{pattern.title}</p>
                <div className="space-y-2">
                  {pattern.rows.map((row, j) => (
                    <div key={j} className="flex gap-3 text-sm">
                      <span className="flex-shrink-0 text-xs font-bold bg-gray-100 text-gray-600 px-2 py-1 rounded whitespace-nowrap">{row.role}</span>
                      <span className="text-gray-600 leading-relaxed">{row.task}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 判断基準 */}
        <section className="rounded-2xl bg-white border border-gray-200 p-6">
          <h2 className="text-base font-bold text-gray-900 mb-4">行政書士が必要なケース / 書類取得サービスだけで足りるケース</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-4 h-4 text-blue-600" />
                <p className="text-sm font-bold text-blue-800">行政書士が有効なケース</p>
              </div>
              <ul className="space-y-1.5 text-sm text-blue-700">
                <li>・配偶者ビザが過去に不許可になった</li>
                <li>・理由書・申告書の書き方が分からない</li>
                <li>・複雑な在留歴・離婚歴がある</li>
                <li>・帰化申請を進めている</li>
                <li>・入管対応に不安がある</li>
              </ul>
            </div>
            <div className="rounded-xl bg-green-50 border border-green-200 p-4">
              <div className="flex items-center gap-2 mb-3">
                <FileCheck className="w-4 h-4 text-green-600" />
                <p className="text-sm font-bold text-green-800">書類取得サービスだけで足りるケース</p>
              </div>
              <ul className="space-y-1.5 text-sm text-green-700">
                <li>・入管申請は自分でできる（書類さえ揃えば）</li>
                <li>・フィリピン書類（PSA・CENOMAR・NBI）の取得だけが課題</li>
                <li>・書類が届いたら自分で婚姻届を提出できる</li>
                <li>・行政書士への費用は節約したい</li>
              </ul>
            </div>
          </div>
        </section>

        <CtaBox
          title="フィリピン書類の取得はIGRSにお任せください"
          description="PSA・CENOMAR・NBI・DFAアポスティーユの取得を日本語で代行します。行政書士の先生からのご依頼も歓迎します。"
          buttonText="無料で相談する"
          href="#contact"
          variant="primary"
          trustNote="24時間以内に返信・匿名相談OK・着手前キャンセル無料"
        />

        <FaqSection
          items={[
            { q: '行政書士に頼めばフィリピン書類も取得してもらえますか？', a: '行政書士は日本国内の書類作成・申請代行を業務とする国家資格者です。フィリピンのPSA・CENOMAR・NBIなど現地書類の取得は行政書士の業務範囲外となります。これらの現地書類はフィリピン在住のスタッフや書類取得専門サービスを通じて取得する必要があります。' },
            { q: 'フィリピン総領事館への手続きは行政書士に頼めますか？', a: '東京・大阪・名古屋にあるフィリピン総領事館はフィリピン国の機関です。そのため、ここでの手続き（Report of Marriage申請等）は日本の行政書士の職域外となります。' },
            { q: '配偶者ビザは自分で申請できますか？行政書士は必要ですか？', a: '配偶者ビザは本人・配偶者・弁護士・行政書士が申請できます。過去に不許可になったことがある、理由書が書けない場合などは行政書士に相談することをおすすめします。初めてで書類の不備がなければ自力申請も可能です。' },
          ]}
          ctaTitle="フィリピン書類の取得についてご相談ください"
          ctaButton="無料相談フォームへ"
        />

        <RelatedLinks links={[
          { path: '/ja/kokusai-kekkon-guide/', label: '国際結婚の書類一括代行（CENOMAR・PSA・NBI）' },
          { path: '/ja/haigusha-visa/', label: '配偶者ビザの書類代行' },
          { path: '/ja/kika-shinsei-guide/', label: '帰化申請のフィリピン書類代行' },
          { path: '/ja/cenomar/', label: 'CENOMAR（独身証明書）取得代行' },
        ]} />
      </article>
    </PageLayout>
  );
}
