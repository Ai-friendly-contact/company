
'use client';

export default function AboutHero() {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-16 text-center">
            代表挨拶
          </h1>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0 items-center">
              <div className="order-2 lg:order-1 p-8 lg:p-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  一人ひとりの可能性を<br />
                  最大限に引き出したい
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  私たちは創業以来、「人と企業の最適なマッチング」を追求してきました。転職は人生の重要な転機であり、企業にとっても組織の未来を左右する大切な決断です。
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  単なる人材紹介ではなく、求職者の方には真のキャリアアップを、企業様には長期的な成長パートナーとなる人材をご紹介することをお約束いたします。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  一人ひとりの可能性を信じ、丁寧なカウンセリングと豊富な経験で、皆様の成功をサポートし続けてまいります。
                </p>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="text-right">
                    <div className="text-lg font-semibold text-gray-900">代表取締役社長</div>
                    <div className="text-2xl font-bold text-blue-600 mt-1">田中 健一</div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20Japanese%20middle-aged%20business%20executive%20man%20in%20dark%20navy%20business%20suit%20sitting%20confidently%20in%20modern%20office%2C%20clean%20professional%20headshot%20style%2C%20warm%20lighting%2C%20executive%20portrait%20photography%2C%20Japanese%20businessman%20around%2050%20years%20old%20with%20kind%20smile%20and%20trustworthy%20appearance%2C%20office%20background%2C%20square%20composition%20portrait&width=600&height=600&seq=ceo-square-portrait&orientation=squarish"
                  alt="代表取締役社長 田中健一" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
