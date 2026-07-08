import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, CreditCard, Trash2, Clock, Eye, HeartHandshake, ArrowRight } from 'lucide-react';
import { useLanguage } from '../lib/i18n';

/**
 * Home-page trust section: (1) how we protect sensitive documents and
 * (2) why this service exists — the founder story and the "peace of mind"
 * value proposition versus cheap individual sellers on social media.
 * JA / EN aware via useLanguage. Korean home page embeds its own version inline.
 */
export default function SecurityStory() {
  const { lang } = useLanguage();
  const isJa = lang === 'ja';
  const dataSecurityPath = isJa ? '/ja/data-security/' : '/en/data-security/';

  const securityPoints = isJa
    ? [
        { icon: <Lock className="w-5 h-5 text-primary" />, title: '機密書類はチャット・メール添付で扱いません', desc: 'パスポート・PSA出生証明書・CENOMARなどの画像は、WhatsApp・Messenger・LINE等のSNSやメール添付ではお預かりせず、お客様専用のセキュアな環境で受け渡しします。' },
        { icon: <CreditCard className="w-5 h-5 text-primary" />, title: 'カード情報は当社に届きません', desc: 'お支払いは決済基盤Stripeの暗号化ページで直接ご入力。カード番号をチャットやメールで送っていただくことはありません。' },
        { icon: <Trash2 className="w-5 h-5 text-primary" />, title: '業務完了後3ヶ月以内にデータを削除', desc: '電子データは業務完了後3ヶ月以内に削除し、紙の書類はシュレッダーで物理的に廃棄します。' },
      ]
    : [
        { icon: <Lock className="w-5 h-5 text-primary" />, title: 'No sensitive documents over chat or email', desc: 'Passport, PSA Birth Certificate, and CENOMAR images are never handled over WhatsApp, Messenger, or email attachments — only through a secure environment we set up for you.' },
        { icon: <CreditCard className="w-5 h-5 text-primary" />, title: 'Your card details never reach us', desc: 'Payments go through Stripe\'s encrypted checkout. You never send card numbers over chat or email.' },
        { icon: <Trash2 className="w-5 h-5 text-primary" />, title: 'Data deleted within 3 months', desc: 'Digital copies are deleted within 3 months of completion; paper documents are physically shredded.' },
      ];

  const trustPoints = isJa
    ? [
        { icon: <Eye className="w-5 h-5 text-primary" />, title: '進捗がいつでも見える', desc: 'お客様専用ページで、今あなたの書類が全体のどの段階にあるかを逐一ご確認いただけます。「お金を払ったのに音沙汰がない」不安をなくします。' },
        { icon: <Clock className="w-5 h-5 text-primary" />, title: '24時間以内に必ず返信', desc: 'ご連絡には24時間以内に必ずお返事します。追跡できる配送で、届くまで不安にさせません。' },
        { icon: <ShieldCheck className="w-5 h-5 text-primary" />, title: '日本の会社が責任をもって対応', desc: 'プライバシー・データポリシー・進捗共有まで整えた、日本法人（株式会社IGRS）による正規サービスです。' },
      ]
    : [
        { icon: <Eye className="w-5 h-5 text-primary" />, title: 'Progress you can always see', desc: 'A dedicated page shows exactly which stage your documents are at — no more "I paid and then heard nothing" anxiety.' },
        { icon: <Clock className="w-5 h-5 text-primary" />, title: 'A reply within 24 hours, always', desc: 'We answer every message within 24 hours and ship with trackable couriers, so you are never left wondering.' },
        { icon: <ShieldCheck className="w-5 h-5 text-primary" />, title: 'A registered Japanese company', desc: 'A legitimate service run by a Japanese corporation (IGRS Inc.), with real privacy, data, and progress-sharing policies.' },
      ];

  return (
    <section className="py-14 px-4 bg-white" aria-label={isJa ? 'セキュリティと安心への取り組み' : 'Security and trust'}>
      <div className="container mx-auto max-w-5xl">

        {/* Part 1: Security */}
        <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-secondary/[0.03] to-primary/[0.04] p-6 md:p-8 mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="shrink-0 w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-xs font-bold text-primary tracking-wide uppercase mb-0.5">
                {isJa ? 'セキュリティへの取り組み' : 'Our Security Commitment'}
              </p>
              <h2 className="text-xl md:text-2xl font-bold text-secondary leading-snug">
                {isJa ? '大切な書類を、SNSやメールでやり取りしません' : 'We never exchange your documents over social media or email'}
              </h2>
            </div>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            {isJa
              ? 'パスポートや証明書はあなたの人生で最も重要な個人情報です。だからこそ当社は、書類データの受け渡し・保管・廃棄の方法をサービス設計の中心に置いています。'
              : 'Your passport and certificates are some of the most sensitive information in your life. That is why how we receive, store, and dispose of your documents sits at the center of how this service is designed.'}
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {securityPoints.map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
                <div className="mb-2">{item.icon}</div>
                <h3 className="font-bold text-sm text-secondary mb-1.5">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <Link
            to={dataSecurityPath}
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary transition-colors"
          >
            {isJa ? 'セキュリティ体制を詳しく見る' : 'See how we protect your data'}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Part 2: Story + peace of mind */}
        <div className="rounded-2xl border border-gray-200 bg-secondary p-6 md:p-8 text-white">
          <div className="flex items-center gap-2 mb-4">
            <HeartHandshake className="w-5 h-5 text-primary" />
            <p className="text-xs font-bold text-primary tracking-wide uppercase">
              {isJa ? 'なぜ、このサービスを始めたのか' : 'Why we started this service'}
            </p>
          </div>
          <div className="space-y-3 text-sm text-white/80 leading-relaxed mb-6 max-w-3xl">
            {isJa ? (
              <>
                <p>
                  きっかけは、妻の友人がFacebook上の業者に騙された出来事でした。お金を払ったのに書類は届かず、連絡も途絶えてしまった——
                  国際結婚の書類集めで、そんな話は決して珍しくありません。
                </p>
                <p>
                  Facebookのコミュニティで見つかる個人の業者が悪いとは言い切れません。ただ、安い分どうしてもトレードオフがあります。
                  個人情報がメッセンジャー上でやり取りされ、進捗の報告もなく、安価な配送で追跡もできない。「本当に届くのか」という不安を抱えたまま待つことになります。
                </p>
                <p className="text-white font-semibold">
                  だから私たちは、自社のデータベースで個人情報を守り、進捗を見える化し、24時間以内に必ず返信する体制を整えました。
                </p>
              </>
            ) : (
              <>
                <p>
                  It started when a close friend of my wife was scammed by a seller on Facebook. She paid, the documents never came, and contact went silent —
                  a story that is far too common when gathering documents for an international marriage.
                </p>
                <p>
                  Individual sellers you find in Facebook groups are not all bad. But the low price comes with trade-offs:
                  personal data exchanged over Messenger, no progress updates, and cheap shipping you cannot track — leaving you to wait, wondering if anything will actually arrive.
                </p>
                <p className="text-white font-semibold">
                  So we built the opposite: personal data kept in our own database, progress you can see, and a guaranteed reply within 24 hours.
                </p>
              </>
            )}
          </div>
          <div className="grid md:grid-cols-3 gap-3 mb-6">
            {trustPoints.map((item) => (
              <div key={item.title} className="bg-white/[0.06] border border-white/10 rounded-xl p-4">
                <div className="mb-2">{item.icon}</div>
                <h3 className="font-bold text-sm text-white mb-1.5">{item.title}</h3>
                <p className="text-xs text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 pt-5">
            <p className="text-base md:text-lg font-bold text-white leading-snug">
              {isJa
                ? '正規の料金はFacebookの個人業者より少し高いかもしれません。でもそれは、"安心"の価格です。'
                : 'Our fair price may be a little higher than an individual seller on Facebook. That difference is the price of peace of mind.'}
            </p>
            <p className="text-sm text-white/70 mt-2">
              {isJa
                ? 'プライバシーもデータも進捗も、日本の会社がきちんと守ってお届けします。'
                : 'Your privacy, your data, and your progress — safeguarded and delivered by a registered Japanese company.'}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
