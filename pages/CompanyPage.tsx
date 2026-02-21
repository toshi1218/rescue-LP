import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Clock, ExternalLink } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const rows = [
  { label: '商号', value: '株式会社IGRS' },
  { label: '設立', value: '2020年6月1日' },
  { label: '本店所在地', value: '和歌山県和歌山市' },
  { label: 'セブ営業所在地', value: 'フィリピン共和国 セブ市' },
  {
    label: '事業内容',
    value: null,
    list: [
      'フィリピンへの企業進出支援',
      'フィリピン公的書類取得に関する業務プロセスアウトソーシング（BPO）',
    ],
  },
];

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

        <h1 className="text-2xl font-bold text-secondary mb-2">会社概要</h1>
        <p className="text-sm text-gray-500 mb-8">株式会社IGRSについて</p>

        {/* 会社情報テーブル */}
        <section className="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden mb-8" aria-label="会社情報">
          <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
            <h2 className="text-sm font-bold text-secondary">会社情報</h2>
          </div>
          <table className="w-full text-sm">
            <tbody>
              {rows.map(({ label, value, list }) => (
                <tr key={label} className="border-b border-gray-100 last:border-0">
                  <th className="text-left text-xs font-bold text-gray-500 bg-gray-50 px-6 py-4 w-1/3 align-top whitespace-nowrap">
                    {label}
                  </th>
                  <td className="px-6 py-4 text-gray-700 leading-relaxed">
                    {value ?? (
                      <ul className="space-y-1">
                        {list?.map((item) => (
                          <li key={item} className="flex items-start gap-1.5">
                            <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* 連絡先・対応時間 */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10" aria-label="連絡先・対応時間">
          <div className="bg-white rounded-xl border border-gray-100 shadow-card p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-secondary">連絡先</h3>
            </div>
            <a
              href="mailto:igrs20200601@gmail.com"
              className="block text-xs text-gray-600 hover:text-primary transition-colors mb-2 break-all"
            >
              igrs20200601@gmail.com
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1 text-xs text-primary font-medium hover:underline"
            >
              お問い合わせフォーム
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-card p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-secondary">対応時間</h3>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              平日 9:00〜18:00（日本時間）
            </p>
            <p className="text-xs text-gray-400 mt-1">
              ※ お問い合わせへの返信は原則翌営業日以内
            </p>
          </div>
        </section>

        {/* CTA */}
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
