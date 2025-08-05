
'use client';

import Link from 'next/link';

export default function CTASection() {
  return (
    <section 
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.9), rgba(59, 130, 246, 0.9)), url('https://readdy.ai/api/search-image?query=Modern%20corporate%20office%20space%20with%20professional%20team%20collaboration%2C%20business%20success%20and%20partnership%20theme%2C%20clean%20and%20sophisticated%20environment%2C%20soft%20lighting%20with%20blue%20and%20white%20tones&width=1920&height=600&seq=cta-bg&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            まずは無料相談から始めませんか？
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
            専門コンサルタントがあなたのキャリアプランや採用課題について<br />
            丁寧にヒアリングし、最適な解決策をご提案いたします
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-user-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">転職をお考えの方</h3>
              <p className="mb-6 opacity-90">
                キャリア相談から求人紹介、面接対策まで<br />
                完全無料でサポートいたします
              </p>
              <Link 
                href="/jobseekers" 
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
              >
                転職相談を始める
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-building-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">採用をお考えの企業様</h3>
              <p className="mb-6 opacity-90">
                採用戦略の立案から候補者紹介まで<br />
                成果にコミットしたサービスを提供
              </p>
              <Link 
                href="/companies" 
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
              >
                採用相談を始める
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center text-lg mb-4">
              <i className="ri-phone-line w-6 h-6 flex items-center justify-center mr-3"></i>
              <span>03-1234-5678</span>
            </div>
            <p className="text-sm opacity-75">
              受付時間：平日 9:00～18:00（土日祝休み）
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
