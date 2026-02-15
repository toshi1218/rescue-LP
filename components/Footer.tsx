import React from 'react';
import { Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-100" id="contact">
      <div className="max-w-md md:max-w-xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-secondary mb-2">まずは無料で相談</h2>
        <p className="text-sm text-gray-500 mb-8">
          どの書類が必要かわからない方も、<br />お気軽にお問い合わせください。
        </p>

        <div className="space-y-3">
          {/* Email Button - Primary CTA */}
          <a href="mailto:igrs20200601@gmail.com" className="block w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg hover:bg-primary-hover transition-all flex items-center justify-center gap-3">
             <Mail className="w-5 h-5" />
             メールでのお問い合わせ
          </a>
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-4 text-xs text-gray-400">
          <span className="font-medium text-gray-500">運営会社: 株式会社IGRS</span>
          <span className="hidden md:inline">|</span>
          <a href="#" className="hover:underline">プライバシーポリシー</a>
        </div>
        <p className="text-[10px] text-gray-300 mt-4">© 2026 IGRS Inc.</p>
      </div>
    </section>
  );
};

export default Footer;