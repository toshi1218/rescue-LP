import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import CtaBox from '../components/CtaBox';
import SectionDivider from '../components/SectionDivider';
import { AlertTriangle, CheckCircle, Info, Calendar, FileText, Stamp, ShieldCheck, Heart } from 'lucide-react';
import { useMeta } from '../lib/useMeta';

export default function SpouseVisaShoryuJa() {
  useMeta(
    '配偶者ビザに必要な書類チェックリスト【2026年3月版】フィリピン人配偶者の在留資格認定証明書申請',
    '2025年6月23日改正対応。フィリピン人配偶者の在留資格認定証明書（COE）申請に必要な書類を最新情報で解説。結核非発病証明書の追加要件・PSA書類・CENOMARをまとめてご案内。',
  );

  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: '配偶者ビザ 書類チェックリスト【2026年3月版】' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: '配偶者ビザに必要な書類チェックリスト【2026年3月版】フィリピン人配偶者',
          description: '2025年6月から結核非発病証明書が追加義務化。在留資格「日本人の配偶者等」COE申請に必要なPSA書類・CENOMAR・アポスティーユ・結核証明書を最新情報で解説。',
          url: 'https://ph-document.com/ja/haigusha-visa-shorui',
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
              name: '配偶者ビザのCOE申請に必要なフィリピン書類は？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '2026年3月時点では、PSA婚姻証明書（DFAアポスティーユ付き）、PSA出生証明書（DFAアポスティーユ付き）、CENOMAR（独身証明書）、各書類の日本語訳、そして2025年6月23日から新たに義務化された結核非発病証明書（指定Panel Clinic発行）が必要です。',
              },
            },
            {
              '@type': 'Question',
              name: '2025年6月から追加された新しい書類は何ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '「結核非発病証明書」です。フィリピン国籍の方が在留資格認定証明書（COE）を申請する際、2025年6月23日から提出が義務化されました。IOM Manila Health Centre、Nationwide Health Systems（NHS）、St. Luke\'s Medical Center Extension Clinicなど、日本政府が指定したPanel Clinicでのみ発行されます。有効期間は検査日から180日です。',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="配偶者ビザに必要な書類チェックリスト【2026年3月版】"
        subtitle="在留資格「日本人の配偶者等」COE申請に必要なフィリピン書類を最新情報でまとめています。2025年6月から結核非発病証明書が追加義務化。"
        badges={['2026年3月最新', '結核証明書対応', '書類取得代行あり']}
      />
      <article className="max-w-2xl mx-auto px-4">

        {/* 2025年6月 重要変更 */}
        <section className="mb-8 rounded-2xl bg-amber-50 border border-amber-300 p-5">
          <div className="flex items-start gap-3 mb-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <h2 className="text-base font-bold text-amber-900">【2025年6月23日〜】新書類が追加されました</h2>
          </div>
          <p className="text-sm text-amber-800 leading-relaxed mb-3">
            フィリピン国籍の方の在留資格認定証明書（COE）申請に、<strong>「結核非発病証明書」の提出が義務化</strong>されました。配偶者ビザ（日本人の配偶者等）も対象です。
          </p>
          <ul className="space-y-1.5 text-sm text-amber-800">
            <li className="flex items-start gap-2">
              <span className="font-bold text-amber-600 flex-shrink-0">▶</span>
              <span>発行できるのは<strong>日本政府指定のPanel Clinic</strong>のみ（IOM Manila / NHS / St. Luke's）</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-amber-600 flex-shrink-0">▶</span>
              <span>有効期間は<strong>胸部エックス線日から180日以内</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-amber-600 flex-shrink-0">▶</span>
              <span>一般病院では取得不可。COE申請スケジュールに合わせて<strong>早めの予約</strong>が必要</span>
            </li>
          </ul>
          <div className="mt-3">
            <Link to="/ja/kekkaku-shomeisho/" className="text-sm font-semibold text-amber-900 underline hover:text-amber-700">
              → 結核非発病証明書ガイド（Panel Clinic一覧・費用・手順）
            </Link>
          </div>
        </section>

        {/* 概要 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            配偶者ビザ（在留資格「日本人の配偶者等」）とは
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            「日本人の配偶者等」は、日本人と婚姻しているフィリピン人配偶者が日本に長期在留するための在留資格です。初めて日本に呼び寄せる場合は<strong>在留資格認定証明書（COE）の交付申請</strong>が必要で、COEが交付されてからビザ申請・入国という流れになります。
          </p>
          <p className="text-gray-700 leading-relaxed">
            このページでは、2026年3月時点の最新情報をもとに、COE申請に必要なフィリピン書類を整理します。
          </p>
        </section>

        {/* メイン：書類一覧 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            必要なフィリピン書類 チェックリスト
          </h2>

          <div className="space-y-4">
            {/* 1. PSA婚姻証明書 */}
            <div className="rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-secondary px-4 py-2.5 flex items-center gap-2">
                <Stamp className="w-4 h-4 text-primary" />
                <span className="text-sm font-bold text-white">① PSA婚姻証明書（Certificate of Marriage）</span>
              </div>
              <div className="p-4 text-sm text-gray-700 space-y-2">
                <div className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-1 text-xs">
                  <span className="font-semibold text-gray-500">発行機関</span>
                  <span>PSA（フィリピン統計局）</span>
                  <span className="font-semibold text-gray-500">形式</span>
                  <span>DFAアポスティーユ付き紙の原本</span>
                  <span className="font-semibold text-gray-500">有効期限目安</span>
                  <span>発行から6ヶ月〜1年以内（入管の判断による）</span>
                </div>
                <div className="rounded-lg bg-blue-50 border border-blue-200 p-2.5 text-xs text-blue-800 mt-2">
                  <strong>ポイント：</strong>電子認証版（e-Certificate）は入管では使用不可。紙の原本＋DFAアポスティーユが必須。
                </div>
              </div>
            </div>

            {/* 2. PSA出生証明書 */}
            <div className="rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-secondary px-4 py-2.5 flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary" />
                <span className="text-sm font-bold text-white">② PSA出生証明書（Birth Certificate）</span>
              </div>
              <div className="p-4 text-sm text-gray-700 space-y-2">
                <div className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-1 text-xs">
                  <span className="font-semibold text-gray-500">発行機関</span>
                  <span>PSA（フィリピン統計局）</span>
                  <span className="font-semibold text-gray-500">形式</span>
                  <span>DFAアポスティーユ付き紙の原本</span>
                  <span className="font-semibold text-gray-500">有効期限目安</span>
                  <span>発行から1年以内（在フィリピン日本大使館基準）</span>
                </div>
                <div className="rounded-lg bg-blue-50 border border-blue-200 p-2.5 text-xs text-blue-800 mt-2">
                  <strong>ポイント：</strong>PSAに記録がない場合はLCR（地方民事登録局）申請が必要になることがある。
                </div>
              </div>
            </div>

            {/* 3. CENOMAR */}
            <div className="rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-secondary px-4 py-2.5 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span className="text-sm font-bold text-white">③ CENOMAR（独身証明書）</span>
              </div>
              <div className="p-4 text-sm text-gray-700 space-y-2">
                <div className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-1 text-xs">
                  <span className="font-semibold text-gray-500">発行機関</span>
                  <span>PSA（フィリピン統計局）</span>
                  <span className="font-semibold text-gray-500">形式</span>
                  <span>DFAアポスティーユ付き紙の原本</span>
                  <span className="font-semibold text-gray-500">有効期限目安</span>
                  <span>発行から6ヶ月以内（提出先による）</span>
                  <span className="font-semibold text-gray-500">用途</span>
                  <span>初婚の確認。再婚の場合は代わりに別書類が必要な場合あり</span>
                </div>
              </div>
            </div>

            {/* 4. 結核非発病証明書（NEW） */}
            <div className="rounded-xl border-2 border-amber-400 overflow-hidden">
              <div className="bg-amber-500 px-4 py-2.5 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-white" />
                <span className="text-sm font-bold text-white">④ 結核非発病証明書（TB Non-Disease Certificate）</span>
                <span className="ml-auto text-[10px] font-bold bg-white text-amber-700 px-2 py-0.5 rounded-full">2025年6月〜必須</span>
              </div>
              <div className="p-4 text-sm text-gray-700 space-y-2 bg-amber-50/50">
                <div className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-1 text-xs">
                  <span className="font-semibold text-gray-500">発行機関</span>
                  <span>日本政府指定Panel Clinicのみ（IOM Manila / NHS / St. Luke's）</span>
                  <span className="font-semibold text-gray-500">有効期限</span>
                  <span>胸部エックス線日から<strong>180日以内</strong></span>
                  <span className="font-semibold text-gray-500">義務化日</span>
                  <span>2025年6月23日〜（フィリピン・ネパール国籍）</span>
                  <span className="font-semibold text-gray-500">費用目安</span>
                  <span>NHS: ₱7,445〜₱8,755（年齢・検査内容による）</span>
                </div>
                <div className="rounded-lg bg-amber-100 border border-amber-300 p-2.5 text-xs text-amber-900 mt-2">
                  <strong>重要：</strong>一般病院では発行不可。COE申請日の6ヶ月前を目安に指定Panel Clinicへ予約・受診が必要。
                </div>
                <div className="mt-1">
                  <Link to="/ja/kekkaku-shomeisho/" className="text-xs font-semibold text-secondary underline hover:text-secondary/70">
                    → 結核非発病証明書の詳細ガイドを見る
                  </Link>
                </div>
              </div>
            </div>

            {/* 5. 日本語訳 */}
            <div className="rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-gray-100 px-4 py-2.5 flex items-center gap-2">
                <FileText className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-bold text-gray-700">⑤ 各書類の日本語翻訳</span>
              </div>
              <div className="p-4 text-sm text-gray-700 space-y-1">
                <div className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-1 text-xs">
                  <span className="font-semibold text-gray-500">対象</span>
                  <span>PSA婚姻証明書・PSA出生証明書・CENOMAR など</span>
                  <span className="font-semibold text-gray-500">翻訳者</span>
                  <span>本人による翻訳も可（翻訳者名・住所・翻訳日の記載が必要）</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* スケジュールの考え方 */}
        <SectionDivider variant="beige">
          <h2 className="text-xl font-bold text-gray-900 mb-4">書類取得のスケジュールの考え方</h2>
          <div className="space-y-4 text-sm text-gray-700">
            <p className="leading-relaxed">
              書類には有効期限があるため、「早く取りすぎると期限切れ」「遅すぎると申請に間に合わない」という両方のリスクがあります。2026年3月時点では、以下の点に注意してください。
            </p>

            <div className="rounded-xl bg-white border border-gray-200 p-4">
              <p className="font-bold text-gray-800 mb-2">PSA書類・CENOMAR の有効期限</p>
              <ul className="space-y-1 text-xs text-gray-600">
                <li>・PSA婚姻証明書・PSA出生証明書：提出先によって1年以内など</li>
                <li>・CENOMAR：多くの提出先で発行から6ヶ月以内</li>
                <li>→ COE申請の予定日から逆算し、取得タイミングを調整する</li>
              </ul>
            </div>

            <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
              <p className="font-bold text-amber-900 mb-2">結核非発病証明書の有効期限（新）</p>
              <ul className="space-y-1 text-xs text-amber-800">
                <li>・検査日（胸部X線日）から<strong>180日以内</strong></li>
                <li>・COE申請の予定日の約5〜6ヶ月前を目安に受診</li>
                <li>・Panel Clinicは予約が必要。混雑時期は数週間待ちになる場合も</li>
                <li>→ 他のPSA書類より先にPanel Clinicの予約を取ることを推奨</li>
              </ul>
            </div>

            <div className="rounded-xl bg-blue-50 border border-blue-200 p-3 flex items-start gap-2">
              <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-blue-800">
                PSA書類の取得からDFAアポスティーユ・DHL郵送まで、全体で<strong>約1〜2ヶ月</strong>かかります。結核証明書の取得スケジュールと合わせて、余裕を持って準備を始めることをおすすめします。
              </p>
            </div>
          </div>
        </SectionDivider>

        {/* 申請種別 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">新規・更新・変更で書類は変わる？</h2>
          <div className="space-y-3">
            {[
              {
                type: '新規申請（在留資格認定証明書交付申請）',
                desc: 'フィリピンにいる配偶者を日本に呼び寄せる場合。PSA婚姻証明書・PSA出生証明書・CENOMAR・結核非発病証明書（2025年6月〜）が通常必要。',
                highlight: true,
              },
              {
                type: '在留資格変更許可申請（短期滞在→配偶者ビザ）',
                desc: '観光などで来日中の配偶者のビザを変更する場合。新規申請と同様の書類が必要なことが多い。',
                highlight: false,
              },
              {
                type: '在留期間更新許可申請',
                desc: '既に配偶者ビザを持っている配偶者の更新。初回更新では改めてPSA書類が求められる場合がある。担当入管により異なる。',
                highlight: false,
              },
            ].map((item, i) => (
              <div key={i} className={`rounded-xl border p-4 ${item.highlight ? 'border-amber-300 bg-amber-50' : 'border-gray-200 bg-white'}`}>
                <p className={`text-sm font-bold mb-1 ${item.highlight ? 'text-amber-900' : 'text-gray-800'}`}>{item.type}</p>
                <p className={`text-xs leading-relaxed ${item.highlight ? 'text-amber-800' : 'text-gray-600'}`}>{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3">※ 必要書類は担当入管局・担当官の判断によって異なります。必ず申請前に入管または専門家に確認してください。</p>
        </section>

        {/* まとめ */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">まとめ：2026年3月時点の配偶者ビザ書類</h2>
          <div className="rounded-xl bg-secondary text-white p-5">
            <div className="space-y-2">
              {[
                { icon: '📄', text: 'PSA婚姻証明書 + DFAアポスティーユ（紙の原本）' },
                { icon: '📄', text: 'PSA出生証明書 + DFAアポスティーユ（紙の原本）' },
                { icon: '📄', text: 'CENOMAR（独身証明書）+ DFAアポスティーユ' },
                { icon: '🆕', text: '結核非発病証明書（2025年6月〜必須）指定Panel Clinic発行・有効期間180日' },
                { icon: '📝', text: '各書類の日本語翻訳（翻訳者情報の記載必要）' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm">
                  <span className="flex-shrink-0">{item.icon}</span>
                  <span className={i === 3 ? 'font-semibold text-primary' : 'text-white/90'}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </article>

      <CtaBox
        title="フィリピン書類の取得、まとめてお任せください"
        description="PSA婚姻証明書・PSA出生証明書・CENOMAR・DFAアポスティーユを一括代行。結核証明書（Panel Clinic受診）との連携スケジュールもアドバイスします。"
        buttonText="無料で相談する"
        href="#contact"
        variant="primary"
        trustNote="着手金50%・書類取得・DHL配送準備完了後に残金50%お支払い・着手前キャンセル無料"
      />

      <article className="max-w-2xl mx-auto px-4 mt-8">
        {/* 関連ページ */}
        <nav className="pt-8 border-t border-gray-100">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">関連ページ</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/ja/kekkaku-shomeisho/" className="text-secondary hover:underline">→ 結核非発病証明書ガイド（Panel Clinic・費用・手順）</Link></li>
            <li><Link to="/ja/haigusha-visa/" className="text-secondary hover:underline">→ 配偶者ビザの書類代行（PSA・CENOMAR・アポスティーユ）</Link></li>
            <li><Link to="/ja/psa-kekkon-shomeisho/" className="text-secondary hover:underline">→ PSA婚姻証明書の取得代行</Link></li>
            <li><Link to="/ja/cenomar/" className="text-secondary hover:underline">→ CENOMAR（独身証明書）取得代行</Link></li>
            <li><Link to="/ja/apostille/" className="text-secondary hover:underline">→ DFAアポスティーユ代行</Link></li>
            <li><Link to="/ja/kokusai-kekkon-guide/" className="text-secondary hover:underline">→ 国際結婚の書類一括代行</Link></li>
          </ul>
        </nav>
      </article>
    </PageLayout>
  );
}
