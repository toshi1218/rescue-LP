import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Clock, Building2, Globe, FileCheck } from 'lucide-react';
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
              <p className="text-xs text-gray-500 mt-1">日本側の書類対応・お客様サポート窓口</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-card border border-gray-100">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <h3 className="font-bold text-secondary text-sm">セブ営業所（フィリピン）</h3>
              </div>
              <p className="text-sm text-gray-700">フィリピン共和国 セブ市</p>
              <p className="text-xs text-gray-500 mt-1">現地書類取得・PSA/NBI/LTO各機関への対応</p>
            </div>
          </div>
        </section>

        <div className="text-center">
          <Link
            to="/contact"
            className="inline-block bg-primary text-white font-bold px-8 py-3 rounded-full hover:bg-primary-hover transition-colors shadow-md"
          >
            お問い合わせはこちら
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
