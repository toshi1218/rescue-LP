import React from 'react';

const QuickFacts: React.FC = () => {
  return (
    <section className="py-8 px-4 max-w-md md:max-w-2xl lg:max-w-4xl mx-auto" aria-labelledby="quick-facts-title">
      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-card">
        <h2 id="quick-facts-title" className="text-lg font-bold text-secondary mb-3">
          サービス要点
        </h2>
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
          <div>
            <dt className="text-gray-500">対象書類</dt>
            <dd className="font-medium text-gray-800">セノマー（CENOMAR）・PSA・NBI・DFAアポスティーユ・LTO関連</dd>
          </div>
          <div>
            <dt className="text-gray-500">納期目安</dt>
            <dd className="font-medium text-gray-800">約1ヶ月（案件により変動）</dd>
          </div>
          <div>
            <dt className="text-gray-500">対応言語</dt>
            <dd className="font-medium text-gray-800">日本語・英語</dd>
          </div>
          <div>
            <dt className="text-gray-500">運営</dt>
            <dd className="font-medium text-gray-800">株式会社IGRS（日本法人）</dd>
          </div>
        </dl>
        <p className="text-xs text-gray-500 mt-4">最終更新日: 2026-02-17</p>
      </div>
    </section>
  );
};

export default QuickFacts;
