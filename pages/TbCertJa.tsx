import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SectionDivider from '../components/SectionDivider';
import IconCardGrid from '../components/IconCardGrid';
import SummaryBlock from '../components/SummaryBlock';
import { AlertTriangle, Calendar, Clock, MapPin, FileCheck, Users, Info, ShieldCheck } from 'lucide-react';

export default function TbCertJa() {
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: '結核非発病証明書ガイド【2026年3月版】' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: '結核非発病証明書ガイド【2026年3月版】フィリピン国籍の方のCOE申請に必要',
          description: '2025年6月23日から、フィリピン国籍の方が在留資格認定証明書（COE）を申請する際に結核非発病証明書の提出が必要になりました。指定Panel Clinic・費用・有効期間・手順を解説します。',
          url: 'https://ph-document.com/ja/kekkaku-shomeisho',
          dateModified: '2026-03-14',
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
              name: '結核非発病証明書はいつから必要になりましたか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '2025年6月23日から、フィリピン国籍の方が在留資格認定証明書（COE）を申請する際に提出が義務付けられました。ネパール国籍も同日から対象です。',
              },
            },
            {
              '@type': 'Question',
              name: '結核非発病証明書の有効期間はどのくらいですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '検査日（胸部エックス線実施日）から180日以内です。COE申請のタイミングに合わせて受診する必要があります。',
              },
            },
            {
              '@type': 'Question',
              name: 'どの医療機関で受診できますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '日本政府が指定したPanel Clinicのみで有効な証明書が発行されます。フィリピンでは、IOM Manila Health Centre（マカティ）、Nationwide Health Systems（マカティ・バギオ・セブ・ダバオ）、St. Luke\'s Medical Center Extension Clinicが指定されています。',
              },
            },
            {
              '@type': 'Question',
              name: '配偶者ビザの申請でも結核証明書は必要ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'はい。「日本人の配偶者等」（配偶者ビザ）の在留資格認定証明書交付申請も対象です。フィリピン国籍の配偶者がいる場合、COE申請時に結核非発病証明書を添付する必要があります。',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="結核非発病証明書、2025年6月から配偶者ビザのCOE申請でも必要です"
        badges={['2025年6月23日〜義務化', 'フィリピン国籍対象', '有効期間180日']}
        ctaText="配偶者ビザ書類を相談する"
        ctaHref="#contact"
      />

      <SummaryBlock
        conclusion="2025年6月23日から、フィリピン国籍の方の在留資格認定証明書（COE）申請に結核非発病証明書の提出が義務化されました。配偶者ビザも対象です。"
        points={[
          '2025年6月23日から、COE申請に結核非発病証明書の添付が必須',
          '取得できるのは日本政府指定のPanel Clinicのみ（IOM Manila / NHS / St. Luke\'s）',
          '有効期間は検査日（胸部エックス線日）から180日以内',
          '配偶者ビザ（日本人の配偶者等）の在留資格認定証明書申請も対象',
        ]}
        ctaText="配偶者ビザ書類について無料相談する"
      />

      {/* 重要告知ブロック */}
      <section className="mb-10 rounded-2xl bg-amber-50 border border-amber-200 p-6">
        <div className="flex items-start gap-3 mb-4">
          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <h2 className="text-base font-bold text-amber-900">2025年6月23日から法令が変わりました</h2>
        </div>
        <ul className="space-y-2 text-sm text-amber-800 leading-relaxed">
          <li className="flex items-start gap-2">
            <span className="text-amber-500 font-bold flex-shrink-0">▶</span>
            <span>フィリピン国籍の方が<strong>在留資格認定証明書（COE）</strong>を申請する際、<strong>結核非発病証明書の提出が義務</strong>になりました</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-500 font-bold flex-shrink-0">▶</span>
            <span>対象は<strong>配偶者ビザ・就労ビザ・留学ビザ・特定技能など</strong>、中長期在留を目的とするすべてのCOE申請</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-500 font-bold flex-shrink-0">▶</span>
            <span>証明書は<strong>日本政府指定のPanel Clinic</strong>でのみ発行。一般病院では不可</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-500 font-bold flex-shrink-0">▶</span>
            <span>有効期間は<strong>胸部エックス線日から180日以内</strong>。COE申請スケジュールに合わせて受診が必要</span>
          </li>
        </ul>
        <p className="mt-4 text-xs text-amber-700">※ 出典：出入国在留管理庁「入国前結核スクリーニング（JPETS）」（2025年）</p>
      </section>

      <SectionDivider variant="beige">
        <h2 className="text-base font-bold text-gray-900 mb-4">フィリピンの指定Panel Clinic一覧</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-5">
          結核非発病証明書を発行できるのは、日本政府（厚生労働省）が指定したPanel Clinicのみです。フィリピンでは現在、以下の医療機関が指定されています。
        </p>

        <div className="space-y-4 mb-4">
          {/* IOM Manila */}
          <div className="rounded-xl bg-white border border-gray-200 p-5">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-bold text-xs">1</span>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">IOM Manila Health Centre</p>
                <p className="text-xs text-gray-500 mt-0.5">国際移住機関（IOM）マニラ</p>
              </div>
            </div>
            <div className="ml-11 space-y-1 text-xs text-gray-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-gray-400" />
                <span>Trafalgar Plaza Building, 105 H.V. Dela Costa St., Brgy. Bel-air, Makati City 1227, Metro Manila</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-gray-400 flex-shrink-0">📞</span>
                <span>(+63) 917-593-4688 / (+63) 919-993-4667</span>
              </div>
            </div>
          </div>

          {/* Nationwide Health Systems */}
          <div className="rounded-xl bg-white border border-gray-200 p-5">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-bold text-xs">2</span>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">Nationwide Health Systems（NHS）</p>
                <p className="text-xs text-gray-500 mt-0.5">全国4拠点</p>
              </div>
            </div>
            <div className="ml-11 grid grid-cols-2 gap-2 text-xs text-gray-600">
              <div className="rounded-lg bg-gray-50 p-2">
                <p className="font-semibold text-gray-700 mb-0.5">Makati（AUX）</p>
                <p>マカティ市内</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-2">
                <p className="font-semibold text-gray-700 mb-0.5">Baguio</p>
                <p>バギオ市内</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-2">
                <p className="font-semibold text-gray-700 mb-0.5">Cebu</p>
                <p>セブ市内</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-2">
                <p className="font-semibold text-gray-700 mb-0.5">Davao</p>
                <p>ダバオ市内</p>
              </div>
            </div>
          </div>

          {/* St. Luke's */}
          <div className="rounded-xl bg-white border border-gray-200 p-5">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-bold text-xs">3</span>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">St. Luke's Medical Center Extension Clinic</p>
                <p className="text-xs text-gray-500 mt-0.5">セントルークス・メディカルセンター</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-blue-50 border border-blue-200 p-3 flex items-start gap-2">
          <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-blue-800">指定Panel Clinicは追加される場合があります。最新の一覧は厚生労働省JPETSサイト（jpets.mhlw.go.jp）でご確認ください。</p>
        </div>
      </SectionDivider>

      {/* 費用・期間 */}
      <SectionDivider variant="blue">
        <h2 className="text-base font-bold text-gray-900 mb-4">検査費用と有効期間</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="rounded-xl bg-white border border-gray-200 p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">💰</span>
              <p className="text-sm font-bold text-gray-800">NHS 検査費用の目安</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-2 border border-gray-200 font-semibold text-gray-700">年齢</th>
                    <th className="text-left p-2 border border-gray-200 font-semibold text-gray-700">検査内容</th>
                    <th className="text-right p-2 border border-gray-200 font-semibold text-gray-700">費用</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="p-2 border border-gray-200 text-gray-700">0〜4歳</td>
                    <td className="p-2 border border-gray-200 text-gray-600">面接・身体検査・IGRA</td>
                    <td className="p-2 border border-gray-200 text-right font-medium">₱7,445</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-2 border border-gray-200 text-gray-700">5〜14歳</td>
                    <td className="p-2 border border-gray-200 text-gray-600">面接・身体検査・胸部X線</td>
                    <td className="p-2 border border-gray-200 text-right font-medium">₱8,755</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-2 border border-gray-200 text-gray-700">15歳以上</td>
                    <td className="p-2 border border-gray-200 text-gray-600">面接・身体検査・胸部X線</td>
                    <td className="p-2 border border-gray-200 text-right font-medium">₱8,755</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[10px] text-gray-500 mt-2">※ Nationwide Health Systems 2025年3月時点。IOM・St. Luke'sは別途確認要。痰検査等が追加される場合は別途費用。</p>
          </div>

          <div className="rounded-xl bg-white border border-gray-200 p-5">
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="w-5 h-5 text-primary" />
              <p className="text-sm font-bold text-gray-800">有効期間と注意点</p>
            </div>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="rounded-lg bg-primary/10 border border-primary/20 p-3">
                <p className="font-bold text-primary mb-1">有効期間：胸部X線日から 180日以内</p>
                <p className="text-xs text-gray-600">COE申請書の提出日を起点ではなく、検査日から180日以内に提出を完了する必要があります。</p>
              </div>
              <div className="space-y-2 text-xs text-gray-600">
                <p>✔ COE申請の提出予定日から逆算して、<strong>遅くても6ヶ月前まで</strong>に受診</p>
                <p>✔ 申請が遅れた場合は再受診・再取得が必要</p>
                <p>✔ 予約から発行まで医療機関により異なる（数日〜数週間）</p>
              </div>
            </div>
          </div>
        </div>
      </SectionDivider>

      <IconCardGrid
        heading="こんな方が対象です"
        columns={3}
        cards={[
          { icon: Users, title: '配偶者ビザを申請する方', description: '「日本人の配偶者等」のCOE申請時に必要。配偶者（フィリピン国籍）本人が受診します。', accent: 'gold' },
          { icon: FileCheck, title: '就労・特定技能ビザの方', description: '技術・人文知識・国際業務、特定技能、技能実習など就労系ビザのCOE申請も対象です。', accent: 'blue' },
          { icon: ShieldCheck, title: '留学ビザの方', description: '留学（中長期在留）のCOE申請も対象。大学・日本語学校への入学時に必要です。', accent: 'green' },
        ]}
      />

      {/* 対象外 */}
      <section className="mb-8 rounded-2xl bg-gray-50 border border-gray-200 p-5">
        <h2 className="text-sm font-bold text-gray-800 mb-3">結核スクリーニング免除となる場合</h2>
        <ul className="space-y-1.5 text-xs text-gray-600 leading-relaxed">
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold flex-shrink-0">✓</span>
            <span>2025年6月23日より前にCOE申請が受理されている場合</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold flex-shrink-0">✓</span>
            <span>フィリピン国籍だが対象国以外（日本・第三国）に在住中で、在留許可証等で証明できる場合</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold flex-shrink-0">✓</span>
            <span>短期滞在（3ヶ月未満）を目的とするビザ申請（観光など）</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold flex-shrink-0">✓</span>
            <span>日本政府の他のプログラムですでに結核スクリーニング済みの方</span>
          </li>
        </ul>
        <p className="text-[10px] text-gray-500 mt-3">※ 免除の適否は入管・大使館の判断によります。不明な場合は申請前に確認することをおすすめします。</p>
      </section>

      <StepList
        heading="受診から証明書提出までの流れ"
        variant="visual"
        steps={[
          { title: 'Panel Clinicに予約', description: 'IOM Manila、NHS、St. Luke\'sのいずれかに電話・メールで予約。COE申請日の6ヶ月以上前に余裕を持って予約する。' },
          { title: '受診・検査', description: '指定の検査（胸部X線・面接・身体検査）を受診。当日に追加検査（痰検査等）が必要になる場合もあり。' },
          { title: '結核非発病証明書の受取', description: '問題なければ「結核非発病証明書（TB Non-Disease Certificate）」が発行される。有効期間は検査日から180日。' },
          { title: 'COE申請時に提出', description: '在留資格認定証明書交付申請時に、他のフィリピン書類（PSA婚姻証明書・出生証明書・CENOMARなど）とあわせて提出。' },
        ]}
      />

      <CtaBox
        title="配偶者ビザのフィリピン書類、まとめて手配します"
        description="PSA婚姻証明書・PSA出生証明書・CENOMAR・DFAアポスティーユを一括代行。結核証明書（Panel Clinic受診）との連携スケジュールもアドバイスします。"
        buttonText="無料で相談する"
        href="#contact"
        variant="primary"
        trustNote="着手金50%・書類取得・DHL配送準備完了後に残金50%お支払い・着手前キャンセル無料"
      />

      <FaqSection
        items={[
          { q: '結核非発病証明書はいつから必要になりましたか？', a: '2025年6月23日から、フィリピン国籍の方が在留資格認定証明書（COE）を申請する際に提出が義務付けられました。ネパール国籍も同日から対象です。' },
          { q: '結核非発病証明書の有効期間はどのくらいですか？', a: '検査日（胸部エックス線実施日）から180日以内です。COE申請のタイミングに合わせて受診する必要があります。早すぎると期限切れになるため、申請6ヶ月前を目安に受診することをおすすめします。' },
          { q: 'どの医療機関で受診できますか？', a: '日本政府が指定したPanel Clinicのみで有効な証明書が発行されます。フィリピンでは、IOM Manila Health Centre（マカティ）、Nationwide Health Systems（マカティ・バギオ・セブ・ダバオ）、St. Luke\'s Medical Center Extension Clinicが指定されています。一般的な病院では発行できません。' },
          { q: '配偶者ビザの申請でも結核証明書は必要ですか？', a: 'はい。「日本人の配偶者等」（配偶者ビザ）の在留資格認定証明書交付申請も対象です。フィリピン国籍の配偶者がいる場合、COE申請時に結核非発病証明書を添付する必要があります。' },
          { q: '結核と診断された場合はどうなりますか？', a: '活動性結核と診断された場合は治療が必要になります。治療完了後に再検査を受け、非発病証明書を取得してから申請に進みます。詳細はPanel Clinicと出入国在留管理庁にご確認ください。' },
          { q: '日本からでも手続きできますか？（配偶者がフィリピンにいる場合）', a: '結核検査はフィリピン国内の指定Panel Clinicで本人が受診する必要があります。当社では、配偶者ビザ申請に必要なPSA書類・CENOMAR・DFAアポスティーユの代行は日本語のみで対応できますが、結核検査の予約・受診は配偶者本人がフィリピンの指定Panel Clinicで行う必要があります。' },
        ]}
        ctaTitle="配偶者ビザの書類準備、まずはご相談ください"
        ctaButton="無料相談フォームへ"
      />

      {/* 関連ページ */}
      <nav className="mt-10 pt-8 border-t border-gray-100">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">関連ページ</p>
        <ul className="space-y-2 text-sm">
          <li><Link to="/ja/haigusha-visa/" className="text-secondary hover:underline">→ 配偶者ビザの書類代行（PSA・CENOMAR・アポスティーユ）</Link></li>
          <li><Link to="/ja/haigusha-visa-shorui/" className="text-secondary hover:underline">→ 配偶者ビザに必要な書類チェックリスト【2026年3月版】</Link></li>
          <li><Link to="/ja/psa-kekkon-shomeisho/" className="text-secondary hover:underline">→ PSA婚姻証明書の取得代行</Link></li>
          <li><Link to="/ja/cenomar/" className="text-secondary hover:underline">→ CENOMAR（独身証明書）取得代行</Link></li>
          <li><Link to="/ja/apostille/" className="text-secondary hover:underline">→ DFAアポスティーユ代行</Link></li>
        </ul>
      </nav>
    </PageLayout>
  );
}
