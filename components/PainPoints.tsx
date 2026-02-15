import React from 'react';
import { Globe, Clock, FileQuestion, Frown } from 'lucide-react';

const PainPoints: React.FC = () => {
  return (
    <section className="py-12 px-4 max-w-md md:max-w-2xl lg:max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-lg md:text-xl font-bold text-secondary mb-2">こんなお悩みありませんか？</h2>
        <div className="h-1 w-12 bg-primary mx-auto rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="bg-white p-4 rounded-xl shadow-card border border-gray-100 flex flex-col items-start h-full">
          <div className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center mb-3 shrink-0">
            <Globe className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-sm mb-1 text-gray-800">英語が苦手...</h3>
          <p className="text-xs text-gray-500 leading-relaxed">現地の役所との複雑なやり取りが不安</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-4 rounded-xl shadow-card border border-gray-100 flex flex-col items-start h-full">
          <div className="w-10 h-10 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center mb-3 shrink-0">
            <Clock className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-sm mb-1 text-gray-800">時間がない</h3>
          <p className="text-xs text-gray-500 leading-relaxed">仕事が忙しく、現地に行く時間がない</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-4 rounded-xl shadow-card border border-gray-100 flex flex-col items-start h-full">
          <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center mb-3 shrink-0">
            <FileQuestion className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-sm mb-1 text-gray-800">手続きが複雑</h3>
          <p className="text-xs text-gray-500 leading-relaxed">必要な書類や手順が分かりにくい</p>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-4 rounded-xl shadow-card border border-gray-100 flex flex-col items-start h-full">
          <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center mb-3 shrink-0">
            <Frown className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-sm mb-1 text-gray-800">サポートがない</h3>
          <p className="text-xs text-gray-500 leading-relaxed">困った時に相談できる人がいない</p>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;