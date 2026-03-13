import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import CtaBox from '../components/CtaBox';
import StepList from '../components/StepList';
import { AlertTriangle, Info, CheckCircle, XCircle } from 'lucide-react';
import { useMeta } from '../lib/useMeta';

export default function NbiValidityJa() {
  useMeta(
    'NBIクリアランスの有効期限はいつまで？提出先別の基準と再取得サポート｜IGRS',
    'NBIクリアランスの有効期限は提出先によって3か月〜6か月。手元の書類の発行日と提出先条件を確認し、更新または再取得を日本語でサポートします。',
  );
  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: 'NBIクリアランス有効期限ガイド' }]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'NBIクリアランス再取得・更新サポート',
          description: 'フィリピンNBIクリアランスの有効期限確認と再取得・更新手続きを日本語でサポート。提出先の条件確認から書類取得まで対応。',
          url: 'https://ph-document.com/ja/nbi-koyukigen',
          provider: {
            '@type': 'Organization',
            name: 'IGRS Inc.',
            url: 'https://ph-document.com/ja/',
          },
          areaServed: { '@type': 'Country', name: 'JP' },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'NBIクリアランスはどのくらいの期間有効ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '提出先によって異なります。在フィリピン日本国大使館の案内では申請日から3か月以内、在東京フィリピン大使館の非クオータ移民査証では6か月以内とされています。提出先の条件を先に確認することが重要です。',
              },
            },
            {
              '@type': 'Question',
              name: '手元のNBIクリアランスはまだ使えますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '発行日と提出先の条件次第です。まず手元のDate Issued（発行日）を確認し、提出先が求める期間条件に合っているかを確認してください。',
              },
            },
            {
              '@type': 'Question',
              name: '更新でいけるのか、新規扱いになるのか分かりません',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '2014年以降に発行されたNBI Clearanceがあり、氏名など個人情報に変更がない場合は更新ルートで進められることが多いです。2014年より前のものや個人情報変更がある場合は新規に近い手続きになります。',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="フィリピンNBIクリアランスの有効期限はいつまで？ 提出先で「古い」と言われないための確認ポイント"
        badges={['NBIクリアランス', '有効期限確認', '無料相談あり']}
        ctaText="無料相談はこちら"
        ctaHref="#contact"
      />

      {/* リード文 */}
      <section className="mb-10 text-sm text-gray-700 leading-relaxed space-y-3">
        <p>フィリピンのNBI Clearance（NBIクリアランス／無犯罪証明書）をすでに持っていて、「これ、まだ使えるのか？」と不安になる方は多いです。特に、日本のビザ申請や各種手続きでは、書類そのものが無効かどうかよりも、提出先が"発行から何か月以内の書類か"を見ていることが多く、ここでつまずくケースがよくあります。</p>
        <p>結論からいうと、NBIクリアランスは"手元にあるから使える"とは限りません。まず確認すべきなのは、手元のNBIクリアランスの発行日と、提出先が求める発行時期の条件の2つです。</p>
      </section>

      {/* Section 1 */}
      <section className="mb-10">
        <h2 className="text-base font-bold text-gray-900 mb-4">1. NBIクリアランスの有効期限チェック：「発行日」と「提出先の基準期間」を確認する</h2>
        <div className="text-sm text-gray-700 leading-relaxed space-y-3">
          <p>NBIクリアランスの有効性を考えるときは、まず手元の書類に書かれている<strong>Date Issued（発行日）</strong>を確認してください。そのうえで、提出先が「発行から3か月以内」「6か月以内」など、どの基準で見ているかを確認する必要があります。</p>
          <p>ここで大事なのは、提出先によって基準が同じではないということです。たとえば、在フィリピン日本国大使館の案内では、フィリピンで発行された書類は原則として申請日から3か月以内、ただしBirth Certificate（出生証明書）とMarriage Certificate（婚姻証明書）は1年以内とされています。</p>
          <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
            <div className="flex items-start gap-2 mb-2">
              <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm font-bold text-blue-900">提出先ごとに基準が異なる例</span>
            </div>
            <ul className="text-sm text-blue-800 leading-relaxed space-y-1">
              <li>・在フィリピン日本国大使館：申請日から<strong>3か月以内</strong>（Birth / Marriage Certificateは1年以内）</li>
              <li>・在東京フィリピン大使館（非クオータ移民査証）：査証申請日から<strong>6か月以内</strong></li>
            </ul>
          </div>
          <p>つまり、「いつまで有効か」の答えは1つではなく、提出先ごとに違うということです。</p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="mb-10">
        <h2 className="text-base font-bold text-gray-900 mb-4">2. よくある失敗：期限内と思っていたNBIクリアランスが「古い」と却下されるケース</h2>
        <div className="rounded-xl bg-amber-50 border border-amber-200 p-4 text-sm text-amber-800 leading-relaxed space-y-3">
          <div className="flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <p>このトラブルはかなり多いです。本人としては「前に取ったNBIがあるから大丈夫」と思っていても、提出先からは<strong>"もっと新しい日付のものを出してください"</strong>と言われることがあります。</p>
          </div>
          <p>特に、配偶者関連の手続き、長期滞在、移民関連の申請では、書類の新しさを厳しく見られることがあります。そのため、申請直前になって慌てないためには、早めに提出先基準を確認し、必要なら再取得を前提に動くのが安全です。</p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="mb-10">
        <h2 className="text-base font-bold text-gray-900 mb-4">3. NBIクリアランスを更新できる人・新規取得が必要な人の判定基準</h2>
        <div className="text-sm text-gray-700 leading-relaxed space-y-4">
          <p>海外在住者向けの案内では、2014年以降に発行されたNBI Clearanceがあり、かつ氏名などの個人情報に変更がない場合は、新しいFingerprint Card（指紋カード）を作らずに更新手続きへ進めることができると案内されています。</p>
          <div className="grid gap-3">
            <div className="rounded-xl bg-green-50 border border-green-200 p-4">
              <div className="flex items-start gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm font-bold text-green-900">更新で進めやすいケース</span>
              </div>
              <ul className="text-sm text-green-800 leading-relaxed space-y-1">
                <li>・2014年以降に発行されたNBI Clearanceがある</li>
                <li>・氏名など個人情報に変更がない</li>
              </ul>
            </div>
            <div className="rounded-xl bg-red-50 border border-red-200 p-4">
              <div className="flex items-start gap-2 mb-2">
                <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm font-bold text-red-900">新規に近い手続きになるケース</span>
              </div>
              <ul className="text-sm text-red-800 leading-relaxed space-y-1">
                <li>・2014年より前の証明書しかない</li>
                <li>・姓・氏名などの個人情報に変更がある</li>
                <li>→ Fingerprint Cardを使う流れになります</li>
              </ul>
            </div>
          </div>
          <p>また、更新書類を代理人が提出する場合は、在東京フィリピン大使館の案内では、最新のNBI Clearance、パスポートのデータページ写し、3か月以内に撮影した写真、必要に応じてLetter of Authorization（委任状）が必要とされています。</p>
        </div>
      </section>

      {/* Section 4 */}
      <section className="mb-10 rounded-2xl bg-amber-50 border border-amber-200 p-6">
        <h2 className="text-base font-bold text-amber-900 mb-3">4. NBIクリアランスの有効期限が不安なときの正しい確認手順</h2>
        <div className="text-sm text-amber-800 leading-relaxed space-y-3">
          <p>ここで一番危ないのは、「NBI自体はまだ使えそうだから大丈夫だろう」と自己判断してしまうことです。</p>
          <p>実務では、NBIそのものの見た目や保有期間より、提出先が何を求めているかが優先されます。提出先の案内が明確ならその条件に従い、はっきりしない場合は、提出先または関係機関に確認してから動くのが確実です。</p>
        </div>
      </section>

      {/* Section 5 */}
      <section className="mb-10 rounded-2xl bg-blue-50 border border-blue-200 p-6">
        <h2 className="text-base font-bold text-blue-900 mb-3">5. NBIクリアランス再取得・更新の代行サポート（日本から日本語で対応）</h2>
        <div className="text-sm text-blue-800 leading-relaxed space-y-3">
          <p>「急いでいるのに、どの条件で進めればいいか分からない」「更新でいけるのか、新規扱いなのか判断できない」「現地の家族や知人に頼みにくい」</p>
          <p>そうした場合は、状況整理から進めた方が早いです。当社では、まず現在お持ちのNBIクリアランスの発行時期、氏名変更の有無、提出先が求める期限を確認し、更新ルートで進められるかを整理したうえでご案内します。難しい案件は、必要に応じて関係先への確認も行いながら進めます。</p>
          <p className="font-semibold">なお、すべての案件を完全に丸投げで処理できるわけではありません。手続きには、ご本人の署名や本人確認書類の提出などが必要になる場合があります。これは適法に進めるために必要な対応です。</p>
        </div>
      </section>

      <StepList
        heading="6. お支払いの流れ"
        steps={[
          { title: '現在の状況を確認', description: '現在のNBIクリアランスの発行時期と提出先の条件を確認し、代行可能かを判断します。' },
          { title: '着手金のお支払い（半額）', description: '代行可能と判断した後、代金総額の50%をお支払いいただきます。' },
          { title: '現地での取得・確認', description: '現地での取得または更新が確認できた段階で、写しをお送りします。内容をご確認ください。' },
          { title: '残金のお支払い・原本発送', description: '写しをご確認いただいた後、残額をお支払いいただきます。残金の確認後に原本の発送手続きへ進みます。' },
        ]}
      />

      <CtaBox
        title="まずは無料相談"
        description="「このNBIはまだ使えそうか」「更新でいけるのか、それとも新規に近い手続きになるのか」「提出予定先が求める期限に間に合うか」こうした点が気になる方は、まずは無料相談をご利用ください。現在の書類の状態と提出予定先をもとに、進め方を整理してご案内します。"
        buttonText="無料相談・見積もりフォームへ"
        href="#contact"
        variant="primary"
        trustNote="着手金50%・書類写し確認後に残金50%・着手前キャンセル無料"
      />
    </PageLayout>
  );
}
