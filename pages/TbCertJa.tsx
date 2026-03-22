import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import RelatedLinks from '../components/RelatedLinks';
import HeroBanner from '../components/HeroBanner';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import FaqSection from '../components/FaqSection';
import SectionDivider from '../components/SectionDivider';
import IconCardGrid from '../components/IconCardGrid';
import SummaryBlock from '../components/SummaryBlock';
import { AlertTriangle, Calendar, Clock, MapPin, FileCheck, Users, Info, ShieldCheck, Heart } from 'lucide-react';
import { useMeta } from '../lib/useMeta';

export default function TbCertJa() {
  useMeta(
    '結核非発病証明書（結核証明書）の取得【2026年3月】配偶者ビザに必須',
    '配偶者ビザ申請に必要な結核非発病証明書（TB証明書）の取得方法を解説。2025年6月以降は日本人配偶者ビザでも必須。取得場所・費用・期限を整理します。',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: '結核非発病証明書ガイド【2026年3月版】' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: '結核非発病証明書（JPETS）ガイド【2026年3月版】フィリピン国籍の方のCOE申請に必要',
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
                text: '原則として検査日（胸部エックス線実施日）から180日以内です。ただし検査前2ヶ月以内に同居家族が活動性結核と診断された場合などは90日に短縮されます。COE申請のタイミングに合わせて受診する必要があります。',
              },
            },
            {
              '@type': 'Question',
              name: 'どの医療機関で受診できますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '日本政府が指定したPanel Clinicのみで有効な証明書が発行されます。フィリピンでは、IOM Manila Health Centre（マカティ）、Nationwide Health Systems AUX（マカティ・バギオ・セブ・ダバオ）、St. Luke\'s Medical Center Extension Clinic（マニラ・エルミタ）が指定されています。',
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
            {
              '@type': 'Question',
              name: '特定技能や技能実習も対象ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '2026年3月時点では、特定技能は暫定的に免除されています。一方、技能実習（現在の「育成就労」）は免除対象外で、COE申請時に結核非発病証明書の提出が必要です。免除の可否は入管庁の案内に従ってください。',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="結核非発病証明書"
        badges={['2025年6月23日〜義務化', 'フィリピン国籍対象', '有効期間180日']}
        ctaText="配偶者ビザ書類を相談する"
        ctaHref="#contact"
        lastUpdated="2026年3月1日"
      />

      <SummaryBlock
        conclusion="2025年6月23日から、フィリピン国籍の方の在留資格認定証明書（COE）申請に結核非発病証明書（JPETS）の提出が義務化されました。配偶者ビザも対象です。"
        points={[
          '2025年6月23日から、COE申請に結核非発病証明書の添付が必須（フィリピン国籍対象）',
          '取得できるのは日本政府指定のPanel Clinicのみ（IOM Manila / NHS / St. Luke\'s — 計6拠点）',
          '有効期間は検査日（胸部エックス線日）から原則180日以内',
          '配偶者ビザ（日本人の配偶者等）・留学・技能実習などのCOE申請が対象',
        ]}
        ctaText="無料相談はこちら"
      />

      {/* 重要告知ブロック */}
      <section className="mb-10 rounded-2xl bg-amber-50 border border-amber-200 p-6">
        <div className="flex items-start gap-3 mb-4">
          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <h2 className="text-base font-bold text-amber-900">2025年6月23日から法令が変わりました（JPETS開始）</h2>
        </div>
        <ul className="space-y-2 text-sm text-amber-800 leading-relaxed">
          <li className="flex items-start gap-2">
            <span className="text-amber-500 font-bold flex-shrink-0">▶</span>
            <span>フィリピン国籍の方が<strong>在留資格認定証明書（COE）</strong>を申請する際、<strong>結核非発病証明書の提出が義務</strong>になりました</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-500 font-bold flex-shrink-0">▶</span>
            <span>対象は<strong>配偶者ビザ・留学ビザ・技能実習など</strong>、中長期在留（在留カードが交付される3ヶ月超の滞在）を目的とするCOE申請</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-500 font-bold flex-shrink-0">▶</span>
            <span>証明書は<strong>日本政府指定のPanel Clinic</strong>でのみ発行。一般病院では不可</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-500 font-bold flex-shrink-0">▶</span>
            <span>有効期間は<strong>胸部エックス線日から原則180日以内</strong>（条件によって90日に短縮される場合あり）</span>
          </li>
        </ul>
        <p className="mt-4 text-xs text-amber-700">※ 出典：出入国在留管理庁・厚生労働省「入国前結核スクリーニング（JPETS）」（2025年）</p>
      </section>

      <SectionDivider variant="beige">
        <h2 className="text-base font-bold text-gray-900 mb-4">フィリピンの指定Panel Clinic一覧（全6拠点）</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-5">
          結核非発病証明書を発行できるのは、厚生労働省が指定したPanel Clinicのみです。フィリピンでは現在、以下6拠点が指定されています。
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
            <div className="ml-11 space-y-1.5 text-xs text-gray-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-gray-400" />
                <span>15/F Trafalgar Plaza Building, 105 H.V. Dela Costa St., Brgy. Bel-Air, Makati City 1227, Metro Manila</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-gray-400 flex-shrink-0">📞</span>
                <span>+63 917-593-4688 (Globe) / +63 919-993-4667 (Smart)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-gray-400 flex-shrink-0">✉</span>
                <span>mhc.jp@iom.int</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-gray-400" />
                <span>月〜金 7:30〜17:00（祝日除く）</span>
              </div>
              <div className="mt-2 rounded-lg bg-primary/8 border border-primary/15 p-2">
                <p className="font-semibold text-gray-700 mb-1 text-[11px]">IOM 検査費用</p>
                <div className="space-y-0.5">
                  <p>・0〜4歳（TST）：₱4,500 ／ IGRA：₱9,200</p>
                  <p>・5歳以上：₱6,500</p>
                </div>
              </div>
              <p className="text-[10px] text-gray-500">予約：MyMedical オンラインシステムより。費用はクリニックで当日払い（事前振込不可）。</p>
            </div>
          </div>

          {/* Nationwide Health Systems */}
          <div className="rounded-xl bg-white border border-gray-200 p-5">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-bold text-xs">2〜5</span>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">Nationwide Health Systems AUX, Inc.（NHS）</p>
                <p className="text-xs text-gray-500 mt-0.5">全国4拠点 ／ 費用共通：0〜4歳 ₱7,445 / 5歳以上 ₱8,755（現金払い）</p>
              </div>
            </div>
            <div className="ml-11 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-600">
              <div className="rounded-lg bg-gray-50 border border-gray-100 p-3">
                <p className="font-semibold text-gray-700 mb-1">② Makati（マカティ）</p>
                <p className="text-[11px] leading-relaxed">2/F Zeta II Annex Bldg., 191 Salcedo St., Legaspi Village, Makati City 1229</p>
                <p className="text-[11px] mt-1">📞 +632-8810-0785</p>
                <p className="text-[11px]">月〜金 8:00〜16:00 / 土 8:00〜15:00</p>
              </div>
              <div className="rounded-lg bg-gray-50 border border-gray-100 p-3">
                <p className="font-semibold text-gray-700 mb-1">③ Baguio（バギオ）</p>
                <p className="text-[11px] leading-relaxed">Unit 10–12, 2/F City Hub Bldg., 92 Upper Gen. Luna Rd., Baguio City</p>
                <p className="text-[11px] mt-1">📞 +63 917-714-8963</p>
                <p className="text-[11px]">月〜金 6:00〜16:00 / 土 6:00〜10:00</p>
              </div>
              <div className="rounded-lg bg-gray-50 border border-gray-100 p-3">
                <p className="font-semibold text-gray-700 mb-1">④ Cebu（セブ）</p>
                <p className="text-[11px] leading-relaxed">Tango Plaza Bldg., Queens Rd., Brgy. Kamputhaw, Cebu City 6000</p>
                <p className="text-[11px] mt-1">📞 +63 32-238-6053</p>
                <p className="text-[11px]">月〜金 7:00（9:00 / 11:00 / 13:00） / 土 7:00のみ</p>
              </div>
              <div className="rounded-lg bg-gray-50 border border-gray-100 p-3">
                <p className="font-semibold text-gray-700 mb-1">⑤ Davao（ダバオ）</p>
                <p className="text-[11px] leading-relaxed">2/F Central Lab Tower, Elpidio Quirino Ave., Brgy. 10-A, Davao City 8000</p>
                <p className="text-[11px] mt-1">📞 +63 82-296-5136</p>
                <p className="text-[11px]">月〜金 8:00〜15:00 / 土 8:00〜14:00</p>
              </div>
            </div>
          </div>

          {/* St. Luke's */}
          <div className="rounded-xl bg-white border border-gray-200 p-5">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-bold text-xs">6</span>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">St. Luke's Medical Center Extension Clinic（SLEC）</p>
                <p className="text-xs text-gray-500 mt-0.5">セントルークス・メディカルセンター拡張クリニック</p>
              </div>
            </div>
            <div className="ml-11 space-y-1.5 text-xs text-gray-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-gray-400" />
                <span>1177 Jorge Bocobo Street, Ermita, Manila 1000</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-gray-400 flex-shrink-0">📞</span>
                <span>(02) 8521-0020</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-gray-400 flex-shrink-0">✉</span>
                <span>inquiry@slec.ph</span>
              </div>
              <p className="text-[10px] text-gray-500 mt-1">予約：slec.ph よりオンライン登録。特急・優先対応は行っていません。費用は直接確認要。</p>
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
              <p className="text-sm font-bold text-gray-800">医療機関別 検査費用の目安</p>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-xs font-semibold text-gray-600 mb-1">IOM Manila（目安）</p>
                <div className="text-xs text-gray-600 space-y-0.5">
                  <p>・0〜4歳（TST）：₱4,500 / IGRA：₱9,200</p>
                  <p>・5歳以上：₱6,500</p>
                </div>
              </div>
              <div className="border-t border-gray-100 pt-3">
                <p className="text-xs font-semibold text-gray-600 mb-1">Nationwide Health Systems（共通）</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-1.5 border border-gray-200 font-semibold text-gray-700">年齢</th>
                        <th className="text-left p-1.5 border border-gray-200 font-semibold text-gray-700">検査</th>
                        <th className="text-right p-1.5 border border-gray-200 font-semibold text-gray-700">費用</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="p-1.5 border border-gray-200">0〜4歳</td>
                        <td className="p-1.5 border border-gray-200 text-gray-600">面接・身体・IGRA</td>
                        <td className="p-1.5 border border-gray-200 text-right font-medium">₱7,445</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="p-1.5 border border-gray-200">5歳以上</td>
                        <td className="p-1.5 border border-gray-200 text-gray-600">面接・身体・胸部X線</td>
                        <td className="p-1.5 border border-gray-200 text-right font-medium">₱8,755</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-[10px] text-gray-500">St. Luke'sは費用を公表していないため要問い合わせ。痰検査等が追加される場合は別途費用。</p>
            </div>
          </div>

          <div className="rounded-xl bg-white border border-gray-200 p-5">
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="w-5 h-5 text-primary" />
              <p className="text-sm font-bold text-gray-800">有効期間と注意点</p>
            </div>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="rounded-lg bg-primary/10 border border-primary/20 p-3">
                <p className="font-bold text-primary mb-1">有効期間：胸部X線日から 原則180日以内</p>
                <p className="text-xs text-gray-600">COE申請書の受理日ではなく、<strong>検査日から180日以内</strong>に提出が完了している必要があります。</p>
              </div>
              <div className="rounded-lg bg-amber-50 border border-amber-200 p-3">
                <p className="text-xs font-bold text-amber-800 mb-1">⚠ 90日に短縮される場合</p>
                <p className="text-xs text-amber-700">検査前2ヶ月以内に、同居家族が活動性結核と診断された場合や、長時間密閉空間を共にした活動性結核患者がいた場合は、有効期間が90日に短縮されます。</p>
              </div>
              <div className="space-y-2 text-xs text-gray-600">
                <p>✔ COE申請予定日から逆算して、<strong>少なくとも1ヶ月前まで</strong>に受診</p>
                <p>✔ 申請が遅れた場合は再受診・再取得が必要</p>
                <p>✔ 活動性結核が疑われる場合は痰検査が追加（結果まで6〜8週間かかる場合あり）</p>
              </div>
            </div>
          </div>
        </div>
      </SectionDivider>

      <IconCardGrid
        heading="主な対象となる在留資格"
        columns={3}
        cards={[
          { icon: Heart, title: '配偶者ビザ（日本人の配偶者等）', description: 'COE申請時に必須。フィリピン国籍の配偶者本人が受診します。', accent: 'gold' },
          { icon: FileCheck, title: '技能実習・育成就労', description: '技能実習（現「育成就労」）のCOE申請も対象。特定技能は2026年3月現在、暫定免除です。', accent: 'blue' },
          { icon: ShieldCheck, title: '留学ビザ', description: '中長期在留の留学ビザも対象。政府奨学金プログラムによっては免除になる場合があります。', accent: 'green' },
        ]}
      />

      {/* 対象外・免除 */}
      <section className="mb-8 rounded-2xl bg-gray-50 border border-gray-200 p-5">
        <h2 className="text-sm font-bold text-gray-800 mb-3">結核スクリーニングが免除となる主なケース（2026年3月現在）</h2>
        <ul className="space-y-1.5 text-xs text-gray-600 leading-relaxed">
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold flex-shrink-0">✓</span>
            <span><strong>特定技能</strong>（暫定免除）— 2026年3月時点で暫定的に対象外</span>
          </li>
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
            <span>短期滞在（3ヶ月未満）を目的とするビザ申請（観光・商用など）</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold flex-shrink-0">✓</span>
            <span>JETプログラム参加者、JICA派遣研修員・技術協力、EPA看護師・介護福祉士、日本政府奨学金留学生（一部）</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 font-bold flex-shrink-0">✓</span>
            <span>再入国許可所持者（すでに日本に在留している方）</span>
          </li>
        </ul>
        <p className="text-[10px] text-gray-500 mt-3">※ 免除の適否は入管庁・大使館の判断によります。免除要件が変更になる場合もあるため、申請前に必ず確認してください。</p>
      </section>

      <StepList
        heading="受診から証明書提出までの流れ"
        variant="visual"
        steps={[
          { title: 'Panel Clinicに予約', description: 'IOM Manila（MyMedical）、NHS各拠点、St. Luke\'sのいずれかに予約。COE申請予定日の少なくとも1ヶ月前に余裕を持って予約する。' },
          { title: '受診・検査', description: '面接・身体検査・胸部X線（5歳以上）またはIGRA（0〜4歳）を受診。活動性結核が疑われる場合は痰検査が追加され、結果まで6〜8週間かかる場合がある。' },
          { title: '結核非発病証明書の受取', description: '問題なければ「結核非発病証明書（TB Non-Disease Certificate）」が発行される。英日両語で記載された公式書式。有効期間は検査日から原則180日。' },
          { title: 'COE申請時に提出', description: '在留資格認定証明書交付申請時に、PSA婚姻証明書・出生証明書・CENOMARなど他のフィリピン書類とあわせて提出。' },
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
          { q: '結核非発病証明書はいつから必要になりましたか？', a: '2025年6月23日から、フィリピン国籍の方が在留資格認定証明書（COE）を申請する際に提出が義務付けられました（JPETS開始）。ネパール国籍も同日から対象。ベトナムは2025年9月1日から対象になっています。' },
          { q: '結核非発病証明書の有効期間はどのくらいですか？', a: '原則として検査日（胸部エックス線実施日）から180日以内です。ただし、検査前2ヶ月以内に同居家族が活動性結核と診断された場合などは90日に短縮されます。早すぎると期限切れになるため、COE申請予定日から逆算して少なくとも1ヶ月前の受診をおすすめします。' },
          { q: 'どの医療機関で受診できますか？', a: '日本政府が指定したPanel Clinicのみで有効な証明書が発行されます。フィリピンでは現在6拠点：IOM Manila Health Centre（マカティ）、Nationwide Health Systems AUX（マカティ・バギオ・セブ・ダバオ）、St. Luke\'s Medical Center Extension Clinic（マニラ・エルミタ）が指定されています。一般的な病院では発行できません。' },
          { q: '配偶者ビザの申請でも結核証明書は必要ですか？', a: 'はい。「日本人の配偶者等」（配偶者ビザ）の在留資格認定証明書交付申請も対象です。フィリピン国籍の配偶者がいる場合、COE申請時に結核非発病証明書を添付する必要があります。' },
          { q: '特定技能や技能実習も対象ですか？', a: '2026年3月現在、特定技能は暫定的に免除されています。一方、技能実習（現在の「育成就労」）は免除対象外で、COE申請時に提出が必要です。免除要件は変更される可能性があるため、入管庁の最新案内を確認してください。' },
          { q: '結核と診断された場合はどうなりますか？', a: '活動性結核と診断された場合は治療が必要になります。治療完了後に再検査を受け、非発病証明書と結核治療終了報告書の両方を申請時に提出します。詳細はPanel Clinicと出入国在留管理庁にご確認ください。' },
          { q: '日本からでも手続きできますか？（配偶者がフィリピンにいる場合）', a: '結核検査はフィリピン国内の指定Panel Clinicで本人が受診する必要があります。当社では配偶者ビザ申請に必要なPSA書類・CENOMAR・DFAアポスティーユの代行を日本語のみで対応できますが、結核検査の予約・受診は配偶者本人がフィリピンの指定Panel Clinicで行う必要があります。' },
        ]}
        ctaTitle="配偶者ビザの書類準備、まずはご相談ください"
        ctaButton="無料相談フォームへ"
      />

      <RelatedLinks links={[
        { path: '/ja/haigusha-visa/', label: '配偶者ビザの書類代行（PSA・CENOMAR・アポスティーユ）' },
        { path: '/ja/haigusha-visa-shorui/', label: '配偶者ビザに必要な書類チェックリスト【2026年3月版】' },
        { path: '/ja/psa-kekkon-shomeisho/', label: 'PSA婚姻証明書の取得代行' },
        { path: '/ja/cenomar/', label: 'CENOMAR（独身証明書）取得代行' },
        { path: '/ja/apostille/', label: 'DFAアポスティーユ代行' },
      ]} />
    </PageLayout>
  );
}
