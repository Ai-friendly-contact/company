
'use client';

import Link from 'next/link';

export default function ServiceCTA() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            あなたのキャリアを次のステージへ
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            15年間で15,000名以上の転職成功実績。専門性と実績で、あなたの理想のキャリアを実現します。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
            >
              無料相談を予約する
            </Link>
            <Link 
              href="/jobseekers" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer"
            >
              求職者向け詳細
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15,000+</div>
              <div className="text-blue-100">転職成功実績</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">顧客満足度</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24日</div>
              <div className="text-blue-100">平均内定獲得期間</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}