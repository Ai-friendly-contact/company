
'use client';

import Link from 'next/link';

export default function CompaniesHero() {
  return (
    <section 
      className="relative py-20 lg:py-32 min-h-screen flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Professional%20Japanese%20business%20meeting%20in%20modern%20office%20conference%20room%20with%20diverse%20team%20of%20business%20people%20including%20Japanese%20executives%20discussing%20recruitment%20strategy%2C%20clean%20modern%20office%20interior%20with%20glass%20windows%20and%20city%20view%2C%20professional%20lighting%2C%20business%20atmosphere%2C%20people%20wearing%20suits%20and%20business%20attire%2C%20collaborative%20discussion%20scene&width=1920&height=1080&seq=companies-hero-bg&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            優秀な人材を<br />
            確実に採用したい<br />
            企業様へ
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
            成功報酬制で安心。専門コンサルタントが<br />
            あなたの会社に最適な人材をご紹介します
          </p>
          
          <div className="flex flex-wrap gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
              <div className="text-3xl font-bold text-white">98%</div>
              <div className="text-white/80">定着率</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
              <div className="text-3xl font-bold text-white">45日</div>
              <div className="text-white/80">平均採用期間</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
              <div className="text-3xl font-bold text-white">1,200社+</div>
              <div className="text-white/80">支援実績</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/contact" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer text-center"
            >
              無料で採用相談する
            </Link>
            <Link 
              href="/services" 
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-lg text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer text-center"
            >
              サービス詳細
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
