import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import { useMeta } from '../lib/useMeta';

export default function TokushoJa() {
  useMeta(
    '特定商取引法に基づく表記｜フィリピン書類取得代行センター（IGRS Inc.）',
    'フィリピン書類取得代行センター（株式会社IGRS）の特定商取引法に基づく表記。販売業者・所在地・サービス内容・料金・支払い方法・キャンセルポリシーを掲載しています。',
  );
  return (
    <PageLayout breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: '特定商取引法に基づく表記' }]}>
      <HeroBanner
        title="特定商取引法に基づく表記"
        subtitle="特定商取引に関する法律第11条に基づき、以下の事項を表記します。"
        badges={['法的表記', 'IGRS Inc.']}
        ctaText="お問い合わせはこちら"
        ctaHref="/ja/contact"
        lastUpdated="2026年5月15日"
      />

      <div className="max-w-2xl">

        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-soft">
          {([
            { label: '販売業者', value: '株式会社IGRS（英語表記: IGRS Inc.）' },
            { label: '代表者', value: '請求があり次第、遅滞なく開示いたします' },
            { label: '所在地', value: '和歌山県和歌山市（詳細は請求があり次第、遅滞なく開示いたします）' },
            { label: '電話番号', value: '当社はメールのみで対応しています。電話番号の開示をご希望の場合は、メールにてご連絡ください。' },
            { label: 'メールアドレス', value: null },
            { label: 'ウェブサイト', value: 'https://ph-document.com/' },
            { label: 'サービス内容', value: 'フィリピン公的書類取得代行（PSA出生証明書・婚姻証明書・CENOMAR・NBI Clearance・DFAアポスティーユ等）' },
            { label: '販売価格', value: 'サービス内容により異なります。詳細はお問い合わせ・お見積もりをご依頼ください。目安は料金ページをご確認ください。' },
            { label: '追加費用', value: 'なし（ご案内した金額以外の費用は発生しません）' },
            { label: '支払い方法', value: '銀行振込（海外からのお支払いはWise・国際送金に対応）' },
            { label: '支払い時期', value: '着手時50%（入金確認後にサービス開始）、書類写し確認後に残金50%の2回払い' },
            { label: 'サービス提供時期', value: '入金確認後、順次対応開始。書類取得・認証・国際配送を含め全体で4〜6週間が目安（フィリピン政府機関の処理状況により変動）' },
            { label: 'キャンセル・返金', value: '着手前：全額返金。着手後・書類未取得：実費（PSA手数料等）を除いて返金。書類取得後・写し送付前：実費＋作業費を除いて返金。DHL発送後：返金不可。' },
          ] as { label: string; value: string | null }[]).map(({ label, value }, i, arr) => (
            <div
              key={label}
              className={`flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-0 px-6 py-4 ${
                i < arr.length - 1 ? 'border-b border-gray-50' : ''
              }`}
            >
              <span className="sm:w-44 flex-shrink-0 text-xs font-bold text-gray-400 uppercase tracking-wider pt-0.5">
                {label}
              </span>
              <span className="text-sm text-gray-700 leading-relaxed">
                {value ?? (
                  <a href="mailto:igrs20200601@gmail.com" className="text-primary hover:underline font-medium">
                    igrs20200601@gmail.com
                  </a>
                )}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl bg-secondary/[0.03] border border-secondary/10 p-6">
          <h2 className="text-sm font-bold text-secondary mb-3">開示請求・お問い合わせ</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            「代表者名」「所在地詳細」「電話番号」の開示をご希望の場合、または本表記に関するお問い合わせは、下記メールアドレスまでご連絡ください。遅滞なくご回答いたします。
          </p>
          <p className="mt-3 text-sm">
            <a href="mailto:igrs20200601@gmail.com" className="text-primary hover:underline font-medium">
              igrs20200601@gmail.com
            </a>
          </p>
        </div>

      </div>
    </PageLayout>
  );
}
