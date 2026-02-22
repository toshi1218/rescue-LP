import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Clock, Building2, Globe, FileCheck, Users, Target, Heart, Award, CheckCircle, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://ph-document.com/' },
        { '@type': 'ListItem', position: 2, name: '会社概要', item: 'https://ph-document.com/company/' },
      ],
    },
    {
      '@type': 'Organization',
      name: '株式会社IGRS',
      url: 'https://ph-document.com/',
      email: 'igrs20200601@gmail.com',
      foundingDate: '2020-06-01',
      address: {
        '@type': 'PostalAddress',
        addressLocality: '和歌山市',
        addressRegion: '和歌山県',
        addressCountry: 'JP',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: 'igrs20200601@gmail.com',
        availableLanguage: 'Japanese',
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
      },
    },
  ],
};

export default function CompanyPage() {
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
          <Link to="/" className="hover:text-secondary">ホーム</Link>
          <span className="mx-1">/</span>
          <span className="text-gray-600">会社概要</span>
        </nav>

        <h1 className="text-2xl font-bold text-secondary mb-2">会社概要</h1>
        <p className="text-sm text-gray-500 mb-8">株式会社IGRSについて</p>

        {/* ミッション */}
        <section className="mb-10 bg-secondary text-white rounded-2xl p-7">
          <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Our Mission</p>
          <h2 className="text-xl font-bold mb-3 leading-snug">
            書類の壁をなくして、<br />国境を越えた人生を支える。
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            フィリピンの公的書類取得は、言語・距離・手続きの複雑さという三重の壁があります。
            私たちは日本とフィリピン両国に拠点を持つことで、その壁を取り除き、
            お客様が本来やるべきことに集中できる環境を提供します。
          </p>
        </section>

        {/* 会社情報テーブル */}
        <div className="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden mb-8">
          <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
            <h2 className="text-sm font-bold text-secondary">会社情報</h2>
          </div>
          <table className="w-full text-sm">
            <tbody>
              {[
                { label: '商号', value: '株式会社IGRS' },
                { label: '設立', value: '2020年6月1日' },
                { label: '本店所在地', value: '和歌山県和歌山市' },
                { label: 'セブ営業所在地', value: 'フィリピン共和国 セブ市' },
                {
                  label: '事業内容',
                  value: null,
                  custom: (
                    <ul className="space-y-1 text-gray-700">
                      <li>・フィリピンへの企業進出支援</li>
                      <li>・フィリピン公的書類取得に関する業務プロセスアウトソーシング（BPO）</li>
                    </ul>
                  ),
                },
                { label: 'メール', value: 'igrs20200601@gmail.com' },
                { label: '対応言語', value: '日本語・英語・タガログ語' },
              ].map(({ label, value, custom }) => (
                <tr key={label} className="border-b border-gray-100 last:border-0">
                  <th className="text-left text-xs font-bold text-gray-500 bg-gray-50 px-6 py-4 w-2/5 align-top whitespace-nowrap">
                    {label}
                  </th>
                  <td className="px-6 py-4 text-gray-700 leading-relaxed">
                    {custom ?? value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 創業の背景 */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-secondary mb-4">創業の背景</h2>
          <div className="bg-white rounded-2xl shadow-card border border-gray-100 p-6 space-y-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              弊社代表は、フィリピン人パートナーとの国際結婚手続きを経験するなかで、
              PSA書類・NBI Clearanceなどの取得がいかに困難かを身をもって知りました。
              英語での窓口対応、長い待ち時間、書類不備による再申請——多くの人が同じ壁にぶつかっています。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              「日本語だけで、日本にいながら取得できる仕組みを作りたい」——その思いから、
              2020年に和歌山（日本）とセブ（フィリピン）の二拠点体制で株式会社IGRSを設立しました。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              以来、国際結婚・配偶者ビザ・外免切替・帰化申請など多岐にわたる案件を支援しており、
              「日本語で気軽に相談できる」というスタンスは創業当初から変わりません。
            </p>
          </div>
        </section>

        {/* 実績 */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-secondary mb-4">実績・強み</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { value: '2020年', label: '創業', sub: '6月1日設立' },
              { value: '100件+', label: '取扱い実績', sub: '累計対応案件数' },
              { value: '2拠点', label: '日本×フィリピン', sub: '和歌山・セブ' },
              { value: '3言語', label: '対応言語', sub: '日本語・英語・タガログ語' },
            ].map(({ value, label, sub }) => (
              <div key={label} className="bg-white rounded-xl p-4 shadow-card border border-gray-100 text-center">
                <p className="text-xl font-bold text-primary font-display">{value}</p>
                <p className="text-xs font-bold text-secondary mt-1">{label}</p>
                <p className="text-[10px] text-gray-400 mt-0.5">{sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 連絡先・対応時間 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {/* 連絡先 */}
          <div className="bg-white rounded-xl p-5 shadow-card border border-gray-100">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                <Mail className="w-4 h-4 text-secondary" />
              </div>
              <h3 className="font-bold text-secondary text-sm">連絡先</h3>
            </div>
            <a
              href="mailto:igrs20200601@gmail.com"
              className="text-sm text-primary hover:underline block mb-3"
            >
              igrs20200601@gmail.com
            </a>
            <Link
              to="/contact"
              className="inline-block text-xs bg-primary text-white font-bold px-4 py-2 rounded-lg hover:bg-primary-hover transition-colors"
            >
              お問い合わせフォームはこちら
            </Link>
          </div>

          {/* 対応時間 */}
          <div className="bg-white rounded-xl p-5 shadow-card border border-gray-100">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                <Clock className="w-4 h-4 text-secondary" />
              </div>
              <h3 className="font-bold text-secondary text-sm">対応時間</h3>
            </div>
            <p className="text-sm text-gray-700 mb-1">平日 9:00〜18:00（日本時間）</p>
            <p className="text-xs text-gray-500">※お問い合わせへの返信は原則翌営業日以内</p>
          </div>
        </div>

        {/* サービスの特徴 */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-secondary mb-4">サービスの特徴</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: Globe,
                title: '日本とフィリピンの架け橋',
                desc: '和歌山（日本）とセブ（フィリピン）の両拠点を持ち、現地の情報と日本側の手続き要件を両方把握したうえでサポートします。',
              },
              {
                icon: FileCheck,
                title: '書類取得のBPO専門',
                desc: 'フィリピン公的書類の取得に特化したBPOサービス。PSA・NBI・LTOなど各機関とのやり取りを一括代行します。',
              },
              {
                icon: Building2,
                title: '企業進出支援も対応',
                desc: '個人の書類取得だけでなく、フィリピンへの法人設立・進出支援も承っています。まずはご相談ください。',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-5 shadow-card border border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-secondary" />
                  </div>
                  <h3 className="font-bold text-secondary text-sm">{title}</h3>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 私たちが大切にしていること */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-secondary mb-4">私たちが大切にしていること</h2>
          <div className="space-y-3">
            {[
              {
                icon: Heart,
                title: '寄り添うサポート',
                desc: '「どの書類が必要かわからない」という方が大半です。状況をヒアリングし、最適な方法をわかりやすくご説明することを最優先にしています。',
              },
              {
                icon: Users,
                title: '現地との強固なネットワーク',
                desc: 'セブ拠点のスタッフがPSA・NBI・DFA・LTOなど各機関と直接やり取りします。最新の手続き情報や窓口事情をリアルタイムで把握しています。',
              },
              {
                icon: Target,
                title: '明朗な料金・丁寧な説明',
                desc: 'お見積もり前に費用の内訳と範囲を詳しくご説明します。追加費用が発生する可能性がある場合も、事前に必ずお伝えします。',
              },
              {
                icon: Award,
                title: '品質へのこだわり',
                desc: '書類の不備や記載ミスは再申請につながります。提出前の確認・チェックを徹底し、一度で確実に取得できるよう努めています。',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-5 shadow-card border border-gray-100 flex gap-4">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-secondary text-sm mb-1">{title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 所在地情報 */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-secondary mb-4">拠点情報</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-5 shadow-card border border-gray-100">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <h3 className="font-bold text-secondary text-sm">本店（日本）</h3>
              </div>
              <p className="text-sm text-gray-700">和歌山県和歌山市</p>
              <p className="text-xs text-gray-500 mt-1 mb-3">日本側の書類対応・お客様サポート窓口</p>
              <ul className="space-y-1">
                {['日本語でのご相談受付', '書類の国内転送対応', '翻訳・認証書類の確認'].map(item => (
                  <li key={item} className="flex items-center gap-1.5 text-xs text-gray-600">
                    <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-card border border-gray-100">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <h3 className="font-bold text-secondary text-sm">セブ営業所（フィリピン）</h3>
              </div>
              <p className="text-sm text-gray-700">フィリピン共和国 セブ市</p>
              <p className="text-xs text-gray-500 mt-1 mb-3">現地書類取得・PSA/NBI/LTO各機関への対応</p>
              <ul className="space-y-1">
                {['PSA・NBI・DFAへの直接申請', 'LTO書類取得代行', 'アポスティーユ認証手続き'].map(item => (
                  <li key={item} className="flex items-center gap-1.5 text-xs text-gray-600">
                    <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 対応書類一覧 */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-secondary mb-4">取り扱い書類・サービス一覧</h2>
          <div className="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {[
                { category: 'PSA書類', items: ['出生証明書（Birth Certificate）', '婚姻証明書（Marriage Certificate）', 'CENOMAR（独身証明書）'] },
                { category: 'NBI・警察関係', items: ['NBI Clearance（無犯罪証明書）', 'DFAアポスティーユ認証', '在フィリピン大使館関連書類'] },
                { category: 'LTO関係', items: ['フィリピン運転免許証（外免切替用）', 'LTOトランザクション履歴', '免許翻訳・認証書類'] },
                { category: 'ビザ・在留資格', items: ['配偶者ビザ申請サポート', '在留資格「日本人の配偶者等」', '帰化申請サポート'] },
              ].map(({ category, items }) => (
                <div key={category} className="p-5 border-b border-r border-gray-100 last:border-b-0">
                  <h3 className="text-xs font-bold text-primary mb-2 uppercase tracking-wide">{category}</h3>
                  <ul className="space-y-1">
                    {items.map(item => (
                      <li key={item} className="text-xs text-gray-700 flex items-start gap-1.5">
                        <span className="text-primary flex-shrink-0 mt-0.5">›</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 text-center">
          <p className="text-sm font-bold text-secondary mb-2">まずは無料でご相談ください</p>
          <p className="text-xs text-gray-600 mb-4">どの書類が必要かわからない方も、状況をお聞きして最適な方法をご案内します。</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-3 rounded-full hover:bg-primary-hover transition-colors shadow-md"
          >
            お問い合わせはこちら <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
