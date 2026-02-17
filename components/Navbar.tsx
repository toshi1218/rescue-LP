import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="font-bold text-secondary text-xs md:text-lg tracking-tight">
            フィリピン書類取得代行センター
          </span>
        </div>
        <a 
          href="#contact" 
          className="text-xs font-bold text-white bg-primary px-4 py-2 rounded-full hover:bg-primary-hover transition-colors shadow-md ml-2 whitespace-nowrap"
        >
          お問い合わせ
        </a>
      </div>
    </nav>
  );
};

export default Navbar;