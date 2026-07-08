import React from 'react';
import { ShieldCheck, Lock, CreditCard, Trash2, CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import { useMeta } from '../lib/useMeta';

export default function DataSecurityJa() {
  useMeta(
    '個人情報・機密書類のセキュリティ体制｜SNS・メール添付を使わない理由',
    'パスポート・PSA出生証明書・CENOMARなどの機密書類の画像を、WhatsApp・Messenger等のSNSチャットやメール添付でやり取りしない理由と、専用環境での受け渡し・業務完了後3ヶ月以内のデータ削除など、当社のセキュリティへの取り組みをご説明します。',
    'https://ph-document.com/ja/data-security/',
  );

  const promises = [
    {
      icon: <Lock className="w-6 h-6 text-primary" />,
      title: '機密書類はチャット・メール添付で扱いません',
      desc: 'パスポートや証明書の画像は、WhatsApp・Facebook Messenger・LINE等のSNSやメール添付ではお預かりせず、お客様専用のセキュアな環境で受け渡しします。',
    },
    {
      icon: <CreditCard className="w-6 h-6 text-primary" />,
      title: 'カード情報は当社に届きません',
      desc: 'お支払いは国際的な決済基盤Stripeの暗号化された決済ページで直接ご入力いただきます。カード番号をチャットやメールで送っていただくことは一切ありません。',
    },
    {
      icon: <Trash2 className="w-6 h-6 text-primary" />,
      title: '業務完了後3ヶ月以内にデータを削除します',
      desc: 'お預かりした書類の電子データは業務完了後3ヶ月以内に削除し、紙の書類・コピーはシュレッダーで物理的に廃棄します。',
    },
  ];

  const sensitiveDocs = [
    'パスポート',
    'PSA出生証明書（Birth Certificate）',
    'CENOMAR（独身証明書）',
    'PSA結婚証明書',
    'NBIクリアランス',
    '運転免許証・LTO関係書類',
    '委任状（SPA）・宣誓供述書',
    'その他、氏名・生年月日・住所・ご家族の情報を含む書類',
  ];

  const snsRisks = [
    {
      title: 'チャット履歴に画像が残り続ける',
      desc: '一度送った画像はお互いのチャット履歴に残り続けます。スマートフォンの紛失やアカウントの乗っ取りが起きると、そのまま第三者の手に渡ります。',
    },
    {
      title: '誤送信・転送が簡単にできてしまう',
      desc: 'SNSのチャットは手軽な分、宛先の間違いや第三者への転送がワンタップで起こり得ます。機密書類の受け渡しには向いていません。',
    },
    {
      title: 'メール添付も安全とは言えない',
      desc: 'メールは複数のサーバーを経由して届く仕組みであり、誤送信した場合に取り消すこともできません。添付された書類画像がどこに残るかをコントロールできません。',
    },
  ];

  return (
    <PageLayout
      breadcrumbs={[{ label: 'ホーム', href: '/ja/' }, { label: '個人情報・機密書類のお取り扱い' }]}
      description="パスポートや証明書の画像をSNSチャット・メール添付でやり取りしない理由と、専用環境での受け渡し・データ削除ポリシーなど、当社のセキュリティへの取り組み。"
    >
      <HeroBanner
        title="個人情報・機密書類のお取り扱いについて"
        subtitle="パスポートや証明書の画像を、SNSチャットやメール添付でやり取りしない。それが当社のセキュリティの基本方針です。"
        badges={['セキュリティへの取り組み', 'IGRS Inc.']}
        ctaText="無料で相談する"
        ctaHref="#contact"
      />

      <div className="space-y-12">

        {/* 3つの約束 */}
        <section>
          <h2 className="text-xl font-bold text-secondary mb-2">当社の3つの約束</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            書類取得の代行では、パスポートや出生証明書など、人生で最も重要な個人情報をお預かりします。
            だからこそ当社は、「どうやって書類データを受け渡し、保管し、廃棄するか」を
            サービス設計の中心に置いています。
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {promises.map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
                <div className="mb-3">{item.icon}</div>
                <h3 className="font-bold text-sm text-secondary mb-2">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 対象書類 */}
        <section>
          <h2 className="text-xl font-bold text-secondary mb-3">「機密書類」として扱うもの</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            以下のような、個人を特定できる情報を含む書類・画像はすべて機密書類として扱い、
            SNSチャット・メール添付での受け渡しは行いません。
          </p>
          <ul className="grid sm:grid-cols-2 gap-2">
            {sensitiveDocs.map((doc) => (
              <li key={doc} className="flex items-start gap-2 text-sm text-gray-700 bg-gray-50 rounded-lg px-3 py-2">
                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                {doc}
              </li>
            ))}
          </ul>
        </section>

        {/* なぜSNS・メール添付を使わないのか */}
        <section>
          <h2 className="text-xl font-bold text-secondary mb-3">なぜWhatsApp・Messenger・メール添付を使わないのか</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            SNSのチャットは「連絡」には便利なツールです。当社もご相談・ご連絡にはLINEやメールをご利用いただけます。
            しかし、機密書類の「受け渡しと保管」には次のようなリスクがあると考えています。
          </p>
          <div className="space-y-3">
            {snsRisks.map((risk) => (
              <div key={risk.title} className="flex gap-3 p-4 rounded-xl border border-gray-100 bg-white shadow-sm">
                <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-sm text-gray-800 mb-1">{risk.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{risk.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* どうやって受け渡すのか */}
        <section>
          <h2 className="text-xl font-bold text-secondary mb-3">では、どうやって受け渡すのか</h2>
          <div className="bg-secondary/[0.04] border border-secondary/10 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-bold text-secondary text-sm mb-2">お客様専用のセキュアな環境をご案内します</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    ご依頼の確定後、当社から書類画像の専用アップロード先をご案内します
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    通信は暗号化（TLS）され、アクセス権限を限定した当社管理のデータベースに保管されます
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    SNSのチャット履歴やメールボックスに機密書類の画像が残ることはありません
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    進捗状況も同じ環境でご確認いただけるため、「今どの段階か」が常に分かります
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* お支払い */}
        <section>
          <h2 className="text-xl font-bold text-secondary mb-3">お支払い情報の取り扱い</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            デジタル環境では、決済情報も個人情報と同じくらい慎重に扱うべきだと考えています。
            当社のクレジットカード決済は、国際的な決済基盤である<strong>Stripe</strong>の暗号化された決済ページで行います。
          </p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              カード番号はStripeの決済ページに直接ご入力いただくため、当社のスタッフがカード番号を見ることはありません
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              カード番号や口座情報をチャット・メールでお送りいただく必要は一切ありません（お送りいただかないようお願いしています）
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              Visa・Mastercard・Amex・Apple Pay・Google Payに対応しています
            </li>
          </ul>
        </section>

        {/* データの保管と削除 */}
        <section>
          <h2 className="text-xl font-bold text-secondary mb-3">データの保管期間と削除</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="text-left px-4 py-3 font-semibold rounded-tl-xl">対象</th>
                  <th className="text-left px-4 py-3 font-semibold rounded-tr-xl">取り扱い</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { target: '書類の電子データ（画像・スキャン）', action: '業務完了（書類のお届け確認）後、3ヶ月以内に削除' },
                  { target: '紙の書類・コピー', action: 'シュレッダーによる物理的な廃棄' },
                  { target: '法令上保存義務のある取引記録（会計帳簿等）', action: '法定期間のみ保存（書類画像そのものは含まれません）' },
                  { target: 'お客様からの削除のご希望', action: '業務に支障のない範囲で、随時対応いたします' },
                ].map((row, i) => (
                  <tr key={row.target} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-4 py-3 font-medium text-secondary">{row.target}</td>
                    <td className="px-4 py-3 text-gray-600">{row.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* お客様へのお願い */}
        <section>
          <h2 className="text-xl font-bold text-secondary mb-3">お客様へのお願い</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
            <ul className="space-y-2 text-sm text-amber-900">
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                チャットやメールに、パスポート等の書類画像を添付しないでください。ご依頼確定後に専用のアップロード先をご案内します。
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                万一チャット・メールで書類画像をお送りいただいた場合は、内容確認後に当社側のデータを削除し、改めて専用環境をご案内します。
              </li>
            </ul>
          </div>
        </section>

        {/* 関連ページ */}
        <section>
          <h2 className="text-xl font-bold text-secondary mb-3">関連ページ</h2>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/ja/kojin-joho-hogo/"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary transition-colors"
            >
              個人情報保護方針
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/ja/privacy/"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary transition-colors"
            >
              プライバシーポリシー
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

      </div>
    </PageLayout>
  );
}
