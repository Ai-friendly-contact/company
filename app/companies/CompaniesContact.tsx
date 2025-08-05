
'use client';

import Link from 'next/link';

export default function CompaniesContact() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            採用課題を解決しませんか？
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            「良い人材が見つからない」「採用コストを抑えたい」<br />
            「採用業務の負担を減らしたい」
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-white mb-2">初期費用</div>
                <div className="text-3xl font-bold text-yellow-300">0円</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-2">月額費用</div>
                <div className="text-3xl font-bold text-yellow-300">0円</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-2">成功報酬</div>
                <div className="text-3xl font-bold text-yellow-300">採用時のみ</div>
              </div>
            </div>
          </div>

          <p className="text-lg text-blue-100 mb-8">
            まずはお気軽にご相談ください。採用課題をお聞かせいただき、<br />
            最適なソリューションをご提案いたします。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer text-center"
            >
              今すぐ無料相談する
            </Link>
            <Link 
              href="tel:03-1234-5678" 
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-lg text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer text-center"
            >
              <i className="ri-phone-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
              電話で相談する
            </Link>
          </div>

          <div className="mt-8 text-blue-100 text-sm">
            受付時間：平日 9:00〜18:00（土日祝除く）
          </div>
        </div>
      </div>
    </section>
  );
}
