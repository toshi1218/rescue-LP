import React from 'react';
import PageLayout from '../components/PageLayout';
import HeroBanner from '../components/HeroBanner';
import SummaryBlock from '../components/SummaryBlock';
import CtaBox from '../components/CtaBox';
import FaqSection from '../components/FaqSection';
import SectionDivider from '../components/SectionDivider';
import RelatedLinks from '../components/RelatedLinks';
import { CheckCircle, AlertTriangle, ShieldCheck, FileText, Clock, Users } from 'lucide-react';
import { useMeta } from '../lib/useMeta';
import { SEO_YEAR, SEO_LAST_UPDATED_JA } from '../lib/seoDate';

export default function LtoKoyoKakuninJa() {
  useMeta(
    `フィリピン人採用のLTO書類3種｜License Certification・License History・No Apprehension【${SEO_YEAR}年版】`,
    'フィリピン人ドライバーを採用する会社向け。雇用時に押さえるLTO書類（License Certification・License History・No Apprehension Certificate）の違いと取得方法を解説。採用チェックリスト付き。',
  );

  return (
    <PageLayout
      breadcrumbs={[
        { label: 'ホーム', href: '/ja/' },
        { label: 'フィリピン人採用のLTO書類3種' },
      ]}
      jsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline:
            'フィリピン人採用のLTO書類3種｜License Certification・License History・No Apprehension',
          description:
            'フィリピン人ドライバーを採用する会社向けLTO書類ガイド。3種の書類の違いと採用チェックリスト。',
          url: 'https://ph-document.com/ja/lto-koyo-kakunin/',
          author: { '@type': 'Organization', name: 'IGRS Inc.' },
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
              name: 'License CertificationとLicense Historyの違いは何ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'License Certificationは免許の現在の内容（種別・有効期限等）を証明する書類で、海外提出や雇用目的に使われます。License Historyは更新・変更などの取引履歴を記録した書類で、初回取得日や経歴の確認に使います。どちらも手数料100ペソ、標準2時間ですが、License Historyは取引が多い場合7営業日以上かかることがあります。',
              },
            },
            {
              '@type': 'Question',
              name: 'No Apprehension Certificateとは何ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '発行時点でLTMSシステムに登録されているpending apprehension（未処理の違反・アラーム）がないことを証明する書類です。完全な運転歴証明書ではなく、発行時点の状況確認です。手数料110ペソ、処理時間約45分とされています。',
              },
            },
            {
              '@type': 'Question',
              name: '採用時に最低限揃えるべきLTO書類は何ですか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '採用で最も実務的な組み合わせは「License Certification＋License History＋No Apprehension Certificate＋本人同意書」です。これで「免許が本物か」「過去の免許取引履歴」「未処理の違反・アラームがないか」を分けて確認できます。海外提出（日本での在留資格手続き等）が伴う場合はDFAアポスティーユも追加してください。',
              },
            },
            {
              '@type': 'Question',
              name: 'LTO書類は会社が直接取得できますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'いいえ。個人情報のため本人または委任された代理人がLTOで取得する必要があります。FOIでは個人情報として非公開です。取得には本人の同意と委任状が必要です。',
              },
            },
            {
              '@type': 'Question',
              name: '取得代行を依頼した場合、どのくらいかかりますか？',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'License Certificationは通常2〜4週間、License Historyは取引が多いと7営業日以上かかります。DFAアポスティーユをつける場合はさらに1〜2週間追加されます。採用の締切を逆算して早めにご依頼ください。',
              },
            },
          ],
        },
      ]}
    >
      <HeroBanner
        title="フィリピン人採用に必要なLTO書類3種"
        subtitle="フィリピン人ドライバーを雇う会社が押さえるべき書類は3つ。License Certification・License History・No Apprehension Certificateの違いと、採用チェックリストを整理します。"
        badges={['雇用主・採用担当者向け', 'LTO書類3種を解説', 'チェックリスト付き']}
        ctaText="書類取得を相談する"
        ctaHref="#contact"
        lastUpdated={SEO_LAST_UPDATED_JA}
      />

      {/* 結論ファースト */}
      <SummaryBlock
        conclusion="採用で一番強い組み合わせは「License Certification＋License History＋No Apprehension＋本人同意書」です。"
        points={[
          'License Certification：免許が本物かどうかを証明（海外提出・雇用目的対応）',
          'License History：初回取得日・更新歴など過去の取引履歴を確認',
          'No Apprehension Certificate：発行時点で未処理の違反・アラームがないことを確認',
          '海外提出が伴う場合はDFAアポスティーユを追加',
        ]}
      />

      {/* 3書類の詳細 */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary tracking-tight">
            LTO書類3種の違いと概要
          </h2>
        </div>
        <div className="space-y-4">
          {/* License Certification */}
          <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-white to-secondary/5 overflow-hidden">
            <div className="h-1 w-full bg-gradient-to-r from-primary via-primary/70 to-transparent" />
            <div className="p-5">
              <div className="flex items-start gap-3 mb-3">
                <FileText className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-base font-bold text-secondary">
                    1. License Certification（ライセンス証明書）
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    手数料：100ペソ ／ 標準処理時間：約2時間
                  </p>
                </div>
              </div>
              <div className="text-sm text-gray-700 leading-relaxed space-y-2">
                <p>
                  免許の現在の内容（種別・有効期限・氏名等）を証明する書類です。海外提出や雇用目的にも対応しており、LTOのCitizen's Charterでも独立したサービスとして案内されています。
                </p>
                <p>
                  取得には<strong>本人同意が前提</strong>です。FOI（情報公開制度）では個人情報として非公開のため、本人または委任を受けた代理人がLTO窓口で申請します。
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {['免許の真正確認', '海外提出対応', '雇用目的に使用可'].map((tag) => (
                    <span
                      key={tag}
                      className="inline-block text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* License History */}
          <div className="rounded-2xl border border-secondary/20 bg-gradient-to-br from-secondary/5 via-white to-primary/5 overflow-hidden">
            <div className="h-1 w-full bg-gradient-to-r from-secondary via-secondary/70 to-transparent" />
            <div className="p-5">
              <div className="flex items-start gap-3 mb-3">
                <Clock className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-base font-bold text-secondary">
                    2. License History（ライセンス履歴）
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    手数料：100ペソ ／ 標準処理時間：約2時間（取引が多い場合は7営業日以上）
                  </p>
                </div>
              </div>
              <div className="text-sm text-gray-700 leading-relaxed space-y-2">
                <p>
                  免許の<strong>transaction history</strong>、つまり更新・変更・再発行などの取引履歴を記録した書類です。初回取得日の確認や、免許経歴の証明が必要な場面で使われます。
                </p>
                <p>
                  取引件数が多いと<strong>7営業日以上かかる</strong>ことがあります。採用の締切がある会社にとって、ここが最大のボトルネックです。余裕を持って手配することが重要です。
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {['初回取得日の確認', '更新・変更履歴', '外免切替の必要書類'].map((tag) => (
                    <span
                      key={tag}
                      className="inline-block text-xs font-medium bg-secondary/10 text-secondary px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* No Apprehension */}
          <div className="rounded-2xl border border-green-200 bg-green-50 overflow-hidden">
            <div className="h-1 w-full bg-gradient-to-r from-green-500 via-green-400 to-transparent" />
            <div className="p-5">
              <div className="flex items-start gap-3 mb-3">
                <ShieldCheck className="w-5 h-5 text-green-700 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-base font-bold text-green-900">
                    3. No Apprehension Certificate（無違反証明）
                  </h3>
                  <p className="text-xs text-green-700 mt-0.5">
                    手数料：110ペソ ／ 標準処理時間：約45分（LTMSポータル経由）
                  </p>
                </div>
              </div>
              <div className="text-sm text-green-800 leading-relaxed space-y-2">
                <p>
                  発行時点でLTMSシステムに登録されている<strong>pending apprehension（未処理の違反）やalarm（アラーム）がない</strong>ことを確認する書類です。
                </p>
                <p>
                  注意点として、これは<strong>完全な運転歴ではなく時点証明</strong>です。発行日以前の状態しか確認できません。雇用目的では、License Historyとセットで使うのが実務的です。
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {[
                    '未処理違反の確認',
                    '発行時点の状況確認',
                    '3書類で最短取得（約45分）',
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="inline-block text-xs font-medium bg-green-200 text-green-800 px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 海外提出・DFAアポスティーユ */}
      <SectionDivider variant="beige">
        <h2 className="text-base font-bold text-gray-900 mb-4">
          海外提出が絡む場合：DFAアポスティーユも確認を
        </h2>
        <div className="text-sm text-gray-700 leading-relaxed space-y-3">
          <p>
            日本での在留資格手続き・外免切替・雇用契約の提出先によっては、LTO書類に<strong>DFA（外務省）のアポスティーユ認証</strong>が必要になります。
          </p>
          <p>
            LTOの証明書は海外用途を前提に設計されており、DFA eRegistryで真偽確認が可能です。アポスティーユをつけることで、日本の行政機関・免許センターへの提出形式に対応できます。
          </p>
          <ul className="space-y-2 mt-2">
            {[
              '外免切替（日本の運転免許切替）で必要になるケースが多い',
              '在留資格申請の添付書類として求められる場合がある',
              'DFA eRegistryで発行後の真偽確認が可能',
              '取得後のDFAアポスティーユ処理に1〜2週間追加',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionDivider>

      {/* 採用チェックリスト */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-5 w-1 rounded-full bg-primary flex-shrink-0" />
          <h2 className="text-xl md:text-2xl font-bold text-secondary tracking-tight">
            会社側の最短採用チェックリスト
          </h2>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            フィリピン人ドライバーを採用する際、まず揃えるべき書類のセットです。書類の種類・入手先・注意点をまとめました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 text-secondary font-bold">書類</th>
                  <th className="text-left py-2 text-secondary font-bold">取得先</th>
                  <th className="text-left py-2 text-secondary font-bold">用途・注意点</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  {
                    doc: 'パスポート写し',
                    from: '本人',
                    note: '本人確認・在留資格確認',
                  },
                  {
                    doc: 'フィリピン運転免許証写し',
                    from: '本人',
                    note: '有効期限・種別の確認',
                  },
                  {
                    doc: '本人同意書',
                    from: '本人作成',
                    note: 'LTO書類取得に必須。委任状も兼ねる',
                  },
                  {
                    doc: 'License Certification',
                    from: 'LTO（代行可）',
                    note: '免許の真正確認・海外提出対応',
                  },
                  {
                    doc: 'License History',
                    from: 'LTO（代行可）',
                    note: '初回取得日・更新歴の確認。処理に時間がかかる場合あり',
                  },
                  {
                    doc: 'No Apprehension Certificate',
                    from: 'LTO（代行可）',
                    note: '発行時点での未処理違反確認。最短約45分',
                  },
                  {
                    doc: 'DFAアポスティーユ（必要な場合）',
                    from: 'DFA（代行可）',
                    note: '海外提出・外免切替・在留資格手続きで必要',
                  },
                  {
                    doc: 'NBI Clearance（犯罪歴確認）',
                    from: 'NBI（別途）',
                    note: 'LTO書類では犯罪歴は確認できない。必要に応じて追加',
                  },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-2.5 pr-3 text-gray-800 font-medium align-top">{row.doc}</td>
                    <td className="py-2.5 pr-3 text-gray-600 align-top whitespace-nowrap">{row.from}</td>
                    <td className="py-2.5 text-gray-500 text-xs leading-relaxed align-top">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            ※ 採用目的でのLTO書類取得には本人同意が必要です。犯罪歴の確認はNBIまたはPNP Police Clearanceを別途ご利用ください。
          </p>
        </div>
      </section>

      {/* 処理時間の注意 */}
      <section className="mb-10">
        <h2 className="text-base font-bold text-gray-900 mb-4">
          採用担当者が特に注意すべきポイント
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            {
              title: 'License Historyがボトルネックになりやすい',
              note: '取引件数が多い場合、標準の2時間から7営業日以上に延びることがあります。採用の締切がある場合は真っ先に手配を。',
            },
            {
              title: 'No Apprehensionは「時点証明」',
              note: '発行日以前の状態しか確認できません。完全な運転歴ではないため、License Historyとセットで使うのが実務的です。',
            },
            {
              title: '会社が直接取得はできない',
              note: 'LTO書類は個人情報のため本人または委任代理人のみ取得可能。採用前に本人同意書・委任状の準備が必要です。',
            },
            {
              title: '犯罪歴はLTOでは確認できない',
              note: 'LTO書類は運転免許の情報のみ。犯罪歴確認が必要な場合はNBI ClearanceやPNP Police Clearanceを別途取得してください。',
            },
          ].map((item, i) => (
            <div key={i} className="rounded-xl bg-amber-50 border border-amber-200 p-4">
              <div className="flex items-start gap-2 mb-1">
                <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm font-bold text-amber-900">{item.title}</p>
              </div>
              <p className="text-xs text-amber-800 leading-relaxed pl-6">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 各国の利用シーン */}
      <SectionDivider variant="blue">
        <h2 className="text-base font-bold text-blue-900 mb-4">
          日本でのLTO書類の主な利用シーン
        </h2>
        <div className="text-sm text-blue-800 leading-relaxed space-y-3">
          <p>
            日本では、フィリピン人材のLTO書類は主に以下の場面で使われます。
          </p>
          <ul className="space-y-2">
            {[
              {
                title: '外免切替（外国免許切替）',
                note: 'フィリピン運転免許から日本の運転免許に切り替える際、LTO書類（Certification with ApostilleまたはLicense History）が必要です。都道府県ごとに要件が異なります。',
              },
              {
                title: '運転職・物流・建設業での採用確認',
                note: '社用車・業務車両を運転させる前提で採用する場合、LTO書類で「免許の真正確認」と「違反・アラームの有無」を確認します。',
              },
              {
                title: '在留資格申請の補完書類',
                note: '特定技能・技能実習などの在留資格申請で、添付書類として求められるケースがあります。',
              },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 list-none">
                <Users className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-xs text-blue-700 mt-0.5 leading-relaxed">{item.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </SectionDivider>

      <CtaBox
        title="LTO書類の取得代行はこちら"
        description="License Certification・License History・No Apprehension CertificateとDFAアポスティーユを、日本語だけで代行取得できます。採用スケジュールを踏まえてまずご相談ください。"
        buttonText="無料相談はこちら"
        href="#contact"
        variant="primary"
        trustNote="複数名一括対応・請求書払い対応 ｜ 初回相談無料"
      />

      <FaqSection
        items={[
          {
            q: 'License CertificationとLicense Historyの違いは何ですか？',
            a: 'License Certificationは免許の現在の内容（種別・有効期限等）を証明する書類です。License Historyは更新・変更などの取引履歴を記録した書類で、初回取得日や経歴確認に使います。どちらも100ペソ・標準2時間ですが、License Historyは取引が多い場合7営業日以上かかります。',
          },
          {
            q: 'No Apprehension Certificateとは何ですか？',
            a: '発行時点でLTMSシステムに登録されているpending apprehension（未処理違反）やalarmがないことを証明する書類です。完全な運転歴ではなく時点証明です。手数料110ペソ・約45分で取得できます。',
          },
          {
            q: '採用時に最低限揃えるべきLTO書類は何ですか？',
            a: '採用で最も実務的な組み合わせは「License Certification＋License History＋No Apprehension＋本人同意書」です。海外提出が伴う場合はDFAアポスティーユも追加してください。',
          },
          {
            q: 'LTO書類は会社が直接取得できますか？',
            a: 'いいえ。個人情報のため本人または委任を受けた代理人がLTOで取得する必要があります。取得には本人の同意と委任状が必要です。',
          },
          {
            q: '取得代行を依頼した場合、どのくらいかかりますか？',
            a: 'License Certificationは通常2〜4週間、License Historyは取引が多いと7営業日以上かかります。DFAアポスティーユをつける場合はさらに1〜2週間追加されます。採用の締切を逆算して早めにご依頼ください。',
          },
          {
            q: '犯罪歴もLTO書類で確認できますか？',
            a: 'できません。LTO書類は運転免許に関する情報のみです。犯罪歴の確認が必要な場合はNBI ClearanceまたはPNP Police Clearanceを別途取得してください。',
          },
        ]}
        ctaTitle="まずは書類の確認から"
        ctaButton="無料相談フォームへ"
      />

      <RelatedLinks
        links={[
          {
            path: '/ja/driver-record/',
            label: 'LTO運転経歴証明書代行（外免切替・採用向け）',
          },
          {
            path: '/ja/gaimen-kirikae-guide/',
            label: '外免切替ガイド（フィリピン免許→日本免許）',
          },
          {
            path: '/ja/business/menkyo-kirikae/',
            label: '登録支援機関・監理団体向け 免許切替サポート',
          },
          {
            path: '/ja/nbi-clearance/',
            label: 'NBI Clearance代行（犯罪歴確認）',
          },
        ]}
      />
    </PageLayout>
  );
}
