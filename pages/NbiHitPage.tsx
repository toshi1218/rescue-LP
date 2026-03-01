import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Send, Mail, AlertTriangle, Clock, FileText, ArrowRight, ShieldCheck, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../lib/i18n';
import { useMeta } from '../lib/useMeta';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mojqlqnd';

export default function NbiHitPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { lang } = useLanguage();
  const t = (ja: string, en: string) => lang === 'ja' ? ja : en;

  useMeta(
    t('NBI HITとは？【2026年版】原因・対処法・どれくらい遅れるか徹底解説｜フィリピン書類センター', 'What Is an NBI HIT? Causes, Solutions & Delays [2026]'),
    t('NBI HITの意味・原因・解決手順・追加でかかる日数を詳しく解説。NBI Clearance申請でHIT（MATCH FOUND）が出た場合の対処法と代行サービスの活用方法。', 'Understand what an NBI HIT (MATCH FOUND) means, why it happens, how to resolve it, and how long the delay will be.')
  );

  const faqs = [
    {
      q: t('NBI HITとはどういう意味ですか？', 'What does NBI HIT mean?'),
      a: t(
        'NBI HITとは、NBI Clearance申請者の名前が、NBIの犯罪記録データベースに登録された同姓同名の別人物と一致した状態を指します。「MATCH FOUND」と表示されます。本人が犯罪を犯したわけではなく、ほとんどの場合は単なる同姓同名（フィリピンでは非常に多い）が原因です。',
        'NBI HIT means that the applicant\'s name matched a different person with the same name who is registered in NBI\'s criminal records database. The result shows "MATCH FOUND." This does NOT mean the applicant committed a crime — in most cases, it is simply because the Philippines has many people sharing the same name.'
      ),
    },
    {
      q: t('NBI HITが出るとどのくらい時間がかかりますか？', 'How much time is added when an NBI HIT occurs?'),
      a: t(
        'NBI HITが確認された場合、通常の処理に加えて追加で2〜4週間かかることが多いです。書類の混雑状況・担当官のスケジュール・HITの内容によって変動します。代行サービスを利用している場合、HIT解決後の再申請・DFAアポスティーユ取得まで含めた総期間は1.5〜2ヶ月になることもあります。',
        'When NBI HIT is confirmed, an additional 2–4 weeks is typically required on top of standard processing. This varies depending on document volume, officer availability, and the nature of the HIT. When using a proxy service, the total period including HIT resolution, re-application, and DFA Apostille can be 1.5–2 months.'
      ),
    },
    {
      q: t('NBI HITが出た場合の解決手順を教えてください。', 'What are the steps to resolve an NBI HIT?'),
      a: t(
        '①NBIのQueueing Systemで「Hit Clearance」手続きを行う、②指定された日時にNBI窓口に出頭（または代理人が出頭）、③指紋照合・本人確認書類の提示、④担当官が申請者と記録上の人物が別人であることを確認、⑤確認後、通常のNBI Clearanceが発行される、の手順です。代行サービスでは①〜⑤すべてサポートします。',
        'Steps: ① Process "Hit Clearance" through the NBI Queueing System, ② Appear at the NBI counter at a designated time (or send a representative), ③ Fingerprint matching and presentation of identity documents, ④ Officer confirms the applicant and the person on record are different individuals, ⑤ After confirmation, standard NBI Clearance is issued. A proxy service handles all steps ①–⑤.'
      ),
    },
    {
      q: t('NBI HITは犯罪歴があるという意味ですか？', 'Does NBI HIT mean I have a criminal record?'),
      a: t(
        'いいえ、ほとんどの場合はそうではありません。フィリピンは同じ名前（特にJose・Maria・dela Cruzなど）の人が非常に多く、単に同姓同名の別人物と名前が一致した「同名HIT」がほとんどです。担当官による確認手続きを経ることで、別人であることが証明され、通常のNBI Clearanceが発行されます。',
        'No, in most cases it does not. The Philippines has a very large number of people sharing common names (especially Jose, Maria, dela Cruz, etc.), and most HITs are "name-match HITs" where someone else with the same name has a record. After the verification process by an NBI officer, the applicant is confirmed as a different person and a standard NBI Clearance is issued.'
      ),
    },
    {
      q: t('NBI HITが出やすい名前はありますか？', 'Are there names more likely to get an NBI HIT?'),
      a: t(
        'フィリピンで一般的な名前（Jose、Maria、Juan、Ana、Santos、Reyes、Cruzなど）はHITが出やすい傾向があります。また、ミドルネームや出身地がデータベース上の人物と一致する場合もHITリスクが高まります。名前が一般的かどうかにかかわらず、代行サービスの利用時には事前にHITリスクを確認してから進めることをおすすめします。',
        'Common Filipino names (Jose, Maria, Juan, Ana, Santos, Reyes, Cruz, etc.) tend to be more prone to HITs. Additionally, HIT risk increases when the middle name or birthplace matches someone in the database. Regardless of how common your name is, we recommend pre-checking HIT risk before proceeding when using a proxy service.'
      ),
    },
    {
      q: t('代行サービスでNBI HITに対応してもらえますか？', 'Can a proxy service handle NBI HIT cases?'),
      a: t(
        'はい、当センターではNBI HIT案件にも対応しています。HIT確認後の手続き（Hit Clearance手続き・窓口出頭代理）をサポートします。ただしHIT案件は通常より時間と費用がかかるため、お問い合わせ時にその旨をお伝えください。',
        'Yes, our center handles NBI HIT cases. We support the procedures after HIT confirmation (Hit Clearance process, counter representation). However, HIT cases require more time and cost than standard cases, so please mention this when you contact us.'
      ),
    },
    {
      q: t('NBI HITが出た場合、DFAアポスティーユの取得はいつから始めますか？', 'When does DFA Apostille acquisition start if NBI HIT occurs?'),
      a: t(
        'NBI HITが解決してNBI Clearanceが正式に発行されてから、DFAアポスティーユの申請が可能です。つまり、HIT解決後にアポスティーユ手続きが始まるため、合計期間がさらに延びます。HIT案件の場合は必ず余裕をもったスケジュールで進めてください。',
        'DFA Apostille application can begin only after the NBI HIT is resolved and NBI Clearance is officially issued. This means Apostille processing starts after HIT resolution, extending the total period further. For HIT cases, always plan with generous lead time.'
      ),
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://ph-document.com/' },
          { '@type': 'ListItem', position: 2, name: 'NBI Clearanceガイド', item: 'https://ph-document.com/nbi-clearance' },
          { '@type': 'ListItem', position: 3, name: 'NBI HITとは', item: 'https://ph-document.com/nbi-hit' },
        ],
      },
      {
        '@type': 'Article',
        headline: 'NBI HITとは？原因・対処法・どれくらい遅れるか【2026年版】',
        description: 'NBI HITの意味・原因・解決手順・追加でかかる日数を詳しく解説。代行サービスでのHIT対応も紹介。',
        url: 'https://ph-document.com/nbi-hit',
        inLanguage: lang,
        dateModified: '2026-02-28',
        author: { '@type': 'Organization', name: '株式会社IGRS' },
        publisher: { '@type': 'Organization', name: 'フィリピン書類取得代行センター' },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background-light text-gray-800 font-body">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="max-w-2xl lg:max-w-3xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="text-xs text-gray-400 mb-6" aria-label="パンくずリスト">
          <Link to={t('/ja/', '/')} className="hover:text-secondary">{t('ホーム', 'Home')}</Link>
          <span className="mx-1">/</span>
          <Link to={t('/ja/nbi-clearance', '/nbi-clearance')} className="hover:text-secondary">{t('NBI Clearanceガイド', 'NBI Clearance Guide')}</Link>
          <span className="mx-1">/</span>
          <span className="text-gray-600">{t('NBI HITとは', 'What is NBI HIT')}</span>
        </nav>

        <h1 className="text-2xl md:text-3xl font-bold text-secondary leading-tight mb-4">
          {t(
            'NBI HITとは？原因・解決手順・どれくらい遅れるか【2026年完全解説】',
            'What is NBI HIT? Causes, Resolution Steps & Delay Time [2026 Complete Guide]'
          )}
        </h1>
        <p className="text-sm text-gray-500 mb-8">{t('最終更新：2026年2月28日 ｜ 株式会社IGRS', 'Last updated: February 28, 2026 | IGRS Inc.')}</p>

        {/* Alert box */}
        <div className="bg-amber-50 border border-amber-300 rounded-xl p-5 mb-10">
          <div className="flex gap-3 mb-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <h2 className="text-sm font-bold text-amber-800">{t('NBI HITが出た方へ：まず落ち着いてください', 'To Those Who Got an NBI HIT: First, Stay Calm')}</h2>
          </div>
          <p className="text-sm text-amber-800 mb-3">
            {t(
              'NBI HITは犯罪を犯したという意味ではありません。フィリピンで非常に多い「同姓同名」が原因のほとんどです。正しい手順を踏めば解決できます。',
              'NBI HIT does NOT mean you committed a crime. It is almost always caused by sharing a name with someone else — very common in the Philippines. It can be resolved by following the correct steps.'
            )}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { label: t('追加日数の目安', 'Additional Time'), value: t('2〜4週間', '2–4 weeks') },
              { label: t('解決率', 'Resolution Rate'), value: t('ほぼ100%（通常のHIT）', 'Nearly 100% (standard HIT)') },
              { label: t('代行対応', 'Proxy Support'), value: t('当センター対応可', 'Our center can handle it') },
            ].map((item, i) => (
              <div key={i} className="bg-white/60 rounded-lg p-3 text-center">
                <p className="text-xs text-amber-700">{item.label}</p>
                <p className="text-sm font-bold text-amber-900 mt-1">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 目次 */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-10 shadow-card">
          <p className="text-xs font-bold text-gray-400 mb-3">{t('目次', 'Table of Contents')}</p>
          <ol className="space-y-1 text-sm text-secondary">
            {[
              t('NBI HITとは何か', 'What is NBI HIT'),
              t('HITが出る原因', 'Why HITs Occur'),
              t('HITが出たときの影響（追加日数）', 'Impact of HIT (Additional Time)'),
              t('NBI HIT 解決手順（Step by Step）', 'NBI HIT Resolution Steps (Step by Step)'),
              t('代行サービスでのHIT対応', 'HIT Handling with Proxy Services'),
              t('HIT案件の費用目安', 'Estimated Cost for HIT Cases'),
              t('よくある質問（FAQ）', 'FAQ'),
            ].map((item, i) => (
              <li key={i}><a href={`#nh-${i + 1}`} className="hover:underline">{i + 1}. {item}</a></li>
            ))}
          </ol>
        </div>

        {/* Section 1: What is HIT */}
        <section id="nh-1" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('1. NBI HITとは何か', '1. What is NBI HIT')}
          </h2>
          <p className="text-sm leading-relaxed text-gray-700 mb-4">
            {t(
              'NBI Clearanceの申請結果には「NO DEROGATORY RECORD（無犯罪）」と「MATCH FOUND（HIT）」の2種類があります。「MATCH FOUND」が出た状態を俗に「NBI HIT」と呼びます。',
              'NBI Clearance application results come in two types: "NO DEROGATORY RECORD" (clear) and "MATCH FOUND" (HIT). The state of getting "MATCH FOUND" is commonly called "NBI HIT."'
            )}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <CheckCircle className="w-5 h-5 text-green-600 mb-2" />
              <p className="text-sm font-bold text-green-800 mb-1">{t('NO DEROGATORY RECORD', 'NO DEROGATORY RECORD')}</p>
              <p className="text-xs text-green-700">
                {t(
                  '申請者の名前がNBI犯罪データベースと一致しなかった状態。通常のNBI Clearanceが即座に発行される。',
                  'The applicant\'s name did not match the NBI criminal database. Standard NBI Clearance is issued immediately.'
                )}
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-300 rounded-xl p-5">
              <AlertTriangle className="w-5 h-5 text-amber-600 mb-2" />
              <p className="text-sm font-bold text-amber-800 mb-1">{t('MATCH FOUND（NBI HIT）', 'MATCH FOUND (NBI HIT)')}</p>
              <p className="text-xs text-amber-700">
                {t(
                  '申請者と同姓同名の人物がNBI犯罪データベースに登録されている状態。追加確認（Hit Clearance）が必要になる。',
                  'A person with the same name as the applicant is registered in the NBI criminal database. Additional verification (Hit Clearance) is required.'
                )}
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-700">
            {t(
              '重要なのは、MATCH FOUNDは「申請者自身が犯罪者だ」という意味ではないということです。追加の本人確認手続きを経ることで、申請者がデータベース上の人物と別人であることを証明し、通常のNBI Clearanceが発行されます。',
              'The key point is that MATCH FOUND does NOT mean "the applicant is a criminal." Through additional identity verification, the applicant proves they are a different person from the one in the database, and a standard NBI Clearance is issued.'
            )}
          </p>
        </section>

        {/* Section 2: Why HITs occur */}
        <section id="nh-2" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('2. HITが出る原因', '2. Why HITs Occur')}
          </h2>
          <div className="space-y-4">
            {[
              {
                num: '01',
                title: t('同姓同名（最多の原因）', 'Same Name as Someone Else (Most Common Cause)'),
                body: t(
                  'フィリピンはJose・Maria・Juan・Santos・Cruzなど、非常にポピュラーな名前が多く、同姓同名の人物が大量に存在します。NBI犯罪データベースに同じ名前の人物がいると、自動的にHITが出ます。この場合、指紋照合・本人確認書類の提示によって別人であることを証明できます。',
                  'The Philippines has an enormous number of people sharing very common names (Jose, Maria, Juan, Santos, Cruz, etc.). When someone with the same name appears in the NBI criminal database, a HIT is automatically generated. In this case, fingerprint matching and identity document presentation can prove the applicant is a different person.'
                ),
              },
              {
                num: '02',
                title: t('名前の綴りが似ている場合', 'Similar Name Spelling'),
                body: t(
                  '名前の綴りが酷似している（例：Maria vs. Mariya、Jose vs. Josef）場合も、NBIシステムのマッチングでHITが出ることがあります。',
                  'Name spellings that are very similar (e.g., Maria vs. Mariya, Jose vs. Josef) may also trigger a HIT in the NBI matching system.'
                ),
              },
              {
                num: '03',
                title: t('過去に係争中・未解決の記録がある場合', 'Pending or Unresolved Records'),
                body: t(
                  '過去に本人が当事者だった係争（民事・刑事）が解決せず記録に残っている場合も、HITが出ることがあります。この場合は状況に応じた対応が必要で、代行サービスでご相談ください。',
                  'If the applicant themselves has a pending or unresolved court case (civil or criminal) remaining on record, a HIT can occur. This situation requires case-specific handling — please consult with our proxy service.'
                ),
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-5 shadow-card">
                <span className="text-2xl font-bold text-primary/20 flex-shrink-0 w-8">{item.num}</span>
                <div>
                  <p className="text-sm font-bold text-secondary mb-2">{item.title}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Impact / Additional time */}
        <section id="nh-3" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('3. HITが出たときの影響（追加日数）', '3. Impact of HIT (Additional Time Required)')}
          </h2>
          <div className="overflow-x-auto mb-5">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">{t('ケース', 'Case')}</th>
                  <th className="px-4 py-3 text-center font-semibold rounded-tr-lg">{t('追加期間の目安', 'Additional Time Guideline')}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [t('通常のHIT（同姓同名）', 'Standard HIT (same name)'), t('2〜4週間', '2–4 weeks')],
                  [t('係争記録・未解決事案のHIT', 'HIT with pending/unresolved case'), t('4〜8週間以上（案件による）', '4–8 weeks+ (case-dependent)')],
                  [t('HIT解決後のDFAアポスティーユ（必要な場合）', 'DFA Apostille after HIT resolution (if needed)'), t('さらに2〜3週間', 'Another 2–3 weeks')],
                ].map(([scenario, time], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 text-secondary border-b border-gray-100">{scenario}</td>
                    <td className="px-4 py-3 text-center border-b border-gray-100">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-700">{time}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex gap-3">
              <Clock className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-blue-800">
                {t(
                  'HIT案件が発生する可能性がある場合（一般的な名前の方・以前にHITが出た方）は、余裕をもって申請を開始することが重要です。配偶者ビザ・国際結婚など期限のある手続きには特に注意が必要です。',
                  'If there is a possibility of a HIT (common names, or if you\'ve had a HIT before), it is especially important to start the application process with ample lead time. This is critical for time-sensitive procedures like spouse visas and international marriage.'
                )}
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Resolution steps */}
        <section id="nh-4" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('4. NBI HIT 解決手順（Step by Step）', '4. NBI HIT Resolution Steps (Step by Step)')}
          </h2>
          <div className="space-y-3">
            {[
              {
                step: 'STEP 1',
                title: t('HITの確認通知を受け取る', 'Receive HIT Notification'),
                desc: t(
                  'NBI申請後、申請結果がHITだった場合、NBIシステムから通知が来るか、窓口で「MATCH FOUND」の結果を受け取ります。',
                  'After the NBI application, if the result is HIT, you receive notification from the NBI system or are informed of the "MATCH FOUND" result at the counter.'
                ),
              },
              {
                step: 'STEP 2',
                title: t('Hit Clearance手続きの予約', 'Schedule Hit Clearance Appointment'),
                desc: t(
                  'NBIのQueueing System（オンライン）でHit Clearance用の予約を取ります。代行サービスでは代理で予約を取ります。',
                  'Schedule a Hit Clearance appointment through the NBI Queueing System (online). Proxy services handle appointment scheduling on your behalf.'
                ),
              },
              {
                step: 'STEP 3',
                title: t('NBI窓口への出頭', 'Appear at NBI Counter'),
                desc: t(
                  '申請者本人またはその代理人（代行サービスのスタッフ）が、指定の日時にNBI窓口に出頭します。有効なフィリピンIDを持参します。',
                  'The applicant or their representative (proxy service staff) appears at the NBI counter at the designated time, bringing valid Philippine ID.'
                ),
              },
              {
                step: 'STEP 4',
                title: t('指紋照合・本人確認', 'Fingerprint Matching & Identity Verification'),
                desc: t(
                  'NBI担当官が申請者の指紋を採取・照合し、データベース上の人物と別人であることを確認します。',
                  'NBI officers take and compare the applicant\'s fingerprints to confirm they are a different person from the one in the database.'
                ),
              },
              {
                step: 'STEP 5',
                title: t('NBI Clearanceの発行', 'NBI Clearance Issuance'),
                desc: t(
                  '確認が完了すると、通常のNBI Clearance（「NO DEROGATORY RECORD」）が発行されます。',
                  'Once verification is complete, a standard NBI Clearance ("NO DEROGATORY RECORD") is issued.'
                ),
              },
              {
                step: 'STEP 6',
                title: t('（必要に応じて）DFAアポスティーユ認証', '(If Required) DFA Apostille Authentication'),
                desc: t(
                  '配偶者ビザ・帰化等でアポスティーユが必要な場合は、NBI Clearance取得後にDFA認証を取得します。',
                  'If Apostille is required for a spouse visa, naturalization, etc., DFA authentication is obtained after receiving the NBI Clearance.'
                ),
              },
            ].map((s, i) => (
              <div key={i} className="flex gap-4 bg-white border border-gray-100 rounded-lg p-4 shadow-card">
                <div className="w-16 flex-shrink-0">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">{s.step}</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-secondary mb-1">{s.title}</p>
                  <p className="text-xs text-gray-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Proxy for HIT */}
        <section id="nh-5" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('5. 代行サービスでのHIT対応', '5. HIT Handling with Proxy Services')}
          </h2>
          <p className="text-sm text-gray-700 mb-5">
            {t(
              '当センターでは、NBI HIT案件にも対応しています。フィリピン現地でのHit Clearance手続き・NBI窓口への出頭代理まで、すべてお任せいただけます。',
              'Our center handles NBI HIT cases. From the Hit Clearance process in the Philippines to counter representation — everything can be entrusted to us.'
            )}
          </p>
          <div className="grid gap-4">
            {[
              {
                icon: <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />,
                title: t('HIT案件の経験が豊富', 'Extensive HIT Case Experience'),
                body: t(
                  'これまで多くのHIT案件を解決してきた実績があります。状況に応じた対処法をご案内します。',
                  'We have a track record of resolving many HIT cases. We will advise on the appropriate approach for your situation.'
                ),
              },
              {
                icon: <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />,
                title: t('窓口への出頭を完全代行', 'Full Proxy for Counter Appearance'),
                body: t(
                  '日本・海外在住の方に代わり、フィリピン現地スタッフがNBI窓口に出頭します。ご本人がフィリピンに行く必要はありません。',
                  'Our local Philippine staff appears at the NBI counter on behalf of applicants residing in Japan or overseas. You do not need to travel to the Philippines.'
                ),
              },
              {
                icon: <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />,
                title: t('スケジュール調整もサポート', 'Schedule Coordination Support'),
                body: t(
                  'HIT解決後のDFAアポスティーユ取得・国際配送まで、スケジュールを調整して一括対応します。',
                  'We coordinate the schedule from HIT resolution through DFA Apostille acquisition and international shipping — all handled together.'
                ),
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-5 shadow-card">
                {item.icon}
                <div>
                  <p className="text-sm font-bold text-secondary mb-1">{item.title}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Cost */}
        <section id="nh-6" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('6. HIT案件の費用目安', '6. Estimated Cost for HIT Cases')}
          </h2>
          <div className="grid gap-3">
            {[
              {
                item: t('NBI Clearance 取得代行（通常案件）', 'NBI Clearance Proxy (Standard Case)'),
                cost: 'US$299〜',
                note: t('NBI申請料・国際配送込み', 'Includes NBI fee & international shipping'),
              },
              {
                item: t('NBI Clearance 取得代行（HIT案件）', 'NBI Clearance Proxy (HIT Case)'),
                cost: t('別途お見積もり', 'Quote upon request'),
                note: t('HIT対応・追加手続き費用が加算されます', 'Additional HIT handling fees apply'),
              },
              {
                item: t('NBI（HIT）＋DFAアポスティーユ セット', 'NBI (HIT) + DFA Apostille Set'),
                cost: t('別途お見積もり', 'Quote upon request'),
                note: t('状況・期間・書類数により変動', 'Varies by situation, timeline, and document count'),
              },
            ].map((row, i) => (
              <div key={i} className="flex justify-between items-center bg-white border border-gray-100 rounded-lg px-4 py-3 shadow-card">
                <div>
                  <p className="text-sm font-medium text-secondary">{row.item}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{row.note}</p>
                </div>
                <span className="text-sm font-bold text-primary ml-4 flex-shrink-0">{row.cost}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3">
            {t(
              '※ HIT案件の費用・期間は状況により異なります。まずはお問い合わせください。',
              '* Cost and timeline for HIT cases vary depending on the situation. Please contact us first.'
            )}
          </p>
        </section>

        {/* CTA */}
        <div className="bg-secondary text-white rounded-2xl p-6 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">
            {t('NBI HIT案件、当センターにお任せください', 'Leave Your NBI HIT Case to Us')}
          </h2>
          <p className="text-sm text-gray-300 mb-5">
            {t('HIT解決からDFAアポスティーユ・国際配送まで一括サポート。', 'From HIT resolution to DFA Apostille and international shipping — comprehensive support.')}
          </p>
          <a href="#contact" className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-hover transition-colors">
            {t('無料相談する', 'Free Consultation')}
          </a>
        </div>

        {/* FAQ */}
        <section id="nh-7" className="mb-10">
          <h2 className="text-xl font-bold text-secondary mb-4 border-l-4 border-primary pl-3">
            {t('7. よくある質問（FAQ）', '7. Frequently Asked Questions (FAQ)')}
          </h2>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg shadow-card overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span className="text-sm font-bold text-secondary pr-4">Q. {faq.q}</span>
                  {openFaq === i ? <ChevronUp className="w-4 h-4 text-primary flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-sm text-gray-700 leading-relaxed border-t border-gray-100">
                    <p className="pt-3">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 関連ページ */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-secondary mb-4">{t('関連ガイド', 'Related Guides')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                to: t('/ja/nbi-clearance', '/nbi-clearance'),
                title: t('NBI Clearanceガイド（基本）', 'NBI Clearance Guide (Basics)'),
                desc: t('NBI Clearanceとは・取得方法・費用', 'What is NBI Clearance, how to obtain, fees'),
              },
              {
                to: t('/ja/apostille-shori-kikan', '/apostille-processing-time'),
                title: t('DFAアポスティーユ処理期間', 'DFA Apostille Processing Time'),
                desc: t('通常・エクスプレス・HIT込みの期間目安', 'Standard, express & HIT-included timeline'),
              },
              {
                to: t('/ja/apostille', '/apostille'),
                title: t('DFAアポスティーユガイド', 'DFA Apostille Guide'),
                desc: t('アポスティーユとは・対象書類・費用', 'What is Apostille, eligible documents, fees'),
              },
              {
                to: t('/ja/haigusha-visa', '/spouse-visa-documents'),
                title: t('配偶者ビザ書類チェックリスト', 'Spouse Visa Document Checklist'),
                desc: t('ビザ申請に必要な全書類', 'All documents required for visa application'),
              },
            ].map((link) => (
              <Link key={link.to} to={link.to} className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-4 shadow-card hover:border-primary transition-colors group">
                <FileText className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm font-bold text-secondary group-hover:text-primary transition-colors">{link.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{link.desc}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-300 ml-auto flex-shrink-0 group-hover:text-primary transition-colors" />
              </Link>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-10">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-soft">
            <h2 className="text-xl font-bold text-secondary mb-2">{t('お問い合わせ', 'Contact Us')}</h2>
            <p className="text-sm text-gray-500 mb-6">
              {t(
                'NBI HIT案件・DFAアポスティーユも対応。まずはご状況をお聞かせください。',
                'NBI HIT cases and DFA Apostille also handled. Please tell us about your situation first.'
              )}
            </p>
            <form action={FORMSPREE_ENDPOINT} method="POST" className="space-y-3">
              <input type="hidden" name="_subject" value="【NBI HITページからのお問い合わせ】" />
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
              <input type="hidden" name="landing_page" value="https://ph-document.com/nbi-hit" />
              <div>
                <label htmlFor="nh-name" className="block text-xs text-gray-600 mb-1">{t('お名前', 'Name')}</label>
                <input id="nh-name" name="name" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder={t('山田 太郎', 'John Smith')} />
              </div>
              <div>
                <label htmlFor="nh-email" className="block text-xs text-gray-600 mb-1">{t('メールアドレス', 'Email Address')}</label>
                <input id="nh-email" type="email" name="email" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder="example@email.com" />
              </div>
              <div>
                <label htmlFor="nh-message" className="block text-xs text-gray-600 mb-1">{t('ご相談内容', 'Message')}</label>
                <textarea id="nh-message" name="message" required rows={4} className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none" placeholder={t('NBI HITの状況・お名前の一般的な程度・用途（ビザ申請・結婚等）についてご記入ください。', 'Please describe your NBI HIT situation, how common your name is, and your use case (visa application, marriage, etc.).')} />
              </div>
              <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg hover:bg-primary-hover transition-all flex items-center justify-center gap-3">
                <Send className="w-5 h-5" />{t('送信する', 'Send')}
              </button>
            </form>
            <a href="mailto:igrs20200601@gmail.com" className="mt-3 inline-flex items-center gap-2 text-xs text-gray-500 hover:text-secondary transition-colors">
              <Mail className="w-4 h-4" />{t('メールで直接送る: igrs20200601@gmail.com', 'Send directly by email: igrs20200601@gmail.com')}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
