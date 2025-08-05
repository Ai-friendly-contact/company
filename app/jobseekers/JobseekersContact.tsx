
'use client';

import Link from 'next/link';

export default function JobseekersContact() {
  return (
    <section 
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.9), rgba(59, 130, 246, 0.9)), url('https://readdy.ai/api/search-image?query=Professional%20Japanese%20business%20meeting%20in%20modern%20conference%20room%20with%20consultants%20and%20clients%20discussing%20career%20opportunities%2C%20clean%20corporate%20environment%20with%20blue%20color%20scheme&width=1920&height=600&seq=jobseeker-cta&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            転職相談は完全無料です
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            専門コンサルタントがあなたのキャリアについて丁寧にお話を伺い、<br />
            最適な転職プランをご提案いたします
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-white">95%</div>
                <div className="text-sm text-white/80">満足度</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">完全無料</div>
                <div className="text-sm text-white/80">サービス</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">24日</div>
                <div className="text-sm text-white/80">平均内定</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-white/80">取引企業</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-10 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-center justify-center">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20Japanese%20career%20consultant%20in%20business%20attire%20with%20friendly%20smile%2C%20modern%20office%20background%2C%20trustworthy%20and%20approachable%20business%20professional%20headshot&width=200&height=200&seq=consultant-profile&orientation=squarish"
                  alt="コンサルタント"
                  className="w-32 h-32 rounded-full object-cover object-top mr-6"
                />
                <div className="text-left">
                  <h4 className="text-lg font-semibold mb-2">専任コンサルタントが対応</h4>
                  <p className="opacity-90">
                    業界経験豊富なプロが<br />
                    あなたをサポートします
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-time-line text-2xl"></i>
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold mb-2">お忙しい方も安心</h4>
                  <p className="opacity-90">
                    平日夜間・土日も対応<br />
                    オンライン面談も可能
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Link 
              href="/contact" 
              className="inline-block bg-white text-blue-600 px-12 py-4 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
            >
              無料相談を申し込む
            </Link>
            <div className="flex items-center justify-center text-lg">
              <i className="ri-phone-line w-6 h-6 flex items-center justify-center mr-3"></i>
              <span>03-1234-5678（平日 9:00～18:00）</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}