import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Building2, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-background-light text-gray-800 font-body">
      <Navbar />

      <main className="max-w-2xl lg:max-w-3xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="text-xs text-gray-400 mb-6" aria-label="パンくずリスト">
          <Link to="/" className="hover:text-secondary">ホーム</Link>
          <span className="mx-1">/</span>
          <span className="text-gray-600">会社概要</span>
        </nav>

        <h1 className="text-2xl font-bold text-secondary mb-8">会社概要</h1>

        <div className="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden mb-8">
          <table className="w-full text-sm">
            <tbody>
              {[
                { label: '会社名', value: '株式会社IGRS' },
                { label: '英語表記', value: 'IGRS Inc.' },
                { label: '設立', value: '2020年6月' },
                { label: '事業内容', value: 'フィリピン書類取得代行・国際結婚サポート・配偶者ビザ申請サポート・帰化申請サポート' },
                { label: 'メールアドレス', value: 'igrs20200601@gmail.com' },
                { label: '対応時間', value: '平日 10:00〜18:00（土日祝はメールのみ対応）' },
              ].map(({ label, value }) => (
                <tr key={label} className="border-b border-gray-100 last:border-0">
                  <th className="text-left text-xs font-bold text-gray-500 bg-gray-50 px-6 py-4 w-1/3 align-top whitespace-nowrap">
                    {label}
                  </th>
                  <td className="px-6 py-4 text-gray-700 leading-relaxed">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 特徴 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {[
            { icon: Building2, title: 'フィリピン書類のプロ', desc: 'CENOMAR・PSA・NBIなど、フィリピン書類取得の豊富な実績を持つ専門チームがサポートします。' },
            { icon: Mail, title: '日本語で安心対応', desc: '現地業者との交渉、書類確認、進捗報告まですべて日本語で対応。手続きの不安を解消します。' },
            { icon: Clock, title: '最短納期で対応', desc: '現地ネットワークを活用し、書類取得をスムーズに進めます。お急ぎの方もお気軽にご相談ください。' },
            { icon: MapPin, title: '日本全国・海外対応', desc: '日本国内はもちろん、フィリピン在住・第三国在住の方の書類取得もサポートします。' },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white rounded-xl p-5 shadow-card border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-secondary text-sm">{title}</h3>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

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
