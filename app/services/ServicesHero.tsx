
'use client';

import Link from 'next/link';

export default function ServicesHero() {
  return (
    <section 
      className="relative py-32 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Professional%20Japanese%20recruitment%20services%20office%20environment%20with%20modern%20workspace%20design%2C%20collaborative%20Japanese%20team%20meeting%2C%20business%20consulting%20atmosphere%2C%20clean%20corporate%20background%20with%20natural%20lighting%20and%20professional%20Japanese%20staff%20working%20together&width=1200&height=600&seq=services-hero-jp&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            プロフェッショナル人材紹介サービス
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            15年の実績と専門性で、あなたのキャリアと企業の成長を支援します
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
            >
              無料相談を申し込む
            </Link>
            <Link 
              href="/about" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors whitespace-nowrap cursor-pointer"
            >
              会社について詳しく
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
