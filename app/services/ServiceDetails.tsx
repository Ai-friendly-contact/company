
'use client';

export default function ServiceDetails() {
  const services = [
    {
      icon: 'ri-user-search-line',
      title: 'エグゼクティブサーチ',
      description: '経営幹部・管理職レベルの重要ポジションに最適な人材をヘッドハンティング',
      features: ['年収1000万円以上', '管理職・役員クラス', '業界トップクラスの実績', '機密性の高い案件対応'],
      image: 'https://readdy.ai/api/search-image?query=Professional%20Japanese%20business%20executives%20in%20luxury%20boardroom%20meeting%20discussing%20executive%20recruitment%20strategy%2C%20sophisticated%20Japanese%20corporate%20environment%20with%20senior%20management%20team%2C%20high-end%20office%20design%20with%20natural%20lighting%2C%20Japanese%20business%20professionals%20in%20formal%20suits&width=500&height=400&seq=service-exec-jp&orientation=landscape'
    },
    {
      icon: 'ri-team-line',
      title: 'ミドルキャリア転職支援',
      description: '専門性を活かしたキャリアアップを目指す中堅層の転職をサポート',
      features: ['年収400-1000万円', '専門職・マネージャークラス', '業界特化コンサルタント', 'キャリア戦略提案'],
      image: 'https://readdy.ai/api/search-image?query=Japanese%20career%20counseling%20session%20with%20professional%20Japanese%20consultant%20and%20client%20discussing%20career%20development%20in%20modern%20Tokyo%20office%2C%20Japanese%20business%20professionals%20planning%20career%20growth%2C%20contemporary%20meeting%20room%20atmosphere&width=500&height=400&seq=service-middle-jp&orientation=landscape'
    },
    {
      icon: 'ri-graduation-cap-line',
      title: '新卒・第二新卒支援',
      description: '若手人材のポテンシャルを見極め、成長企業とのマッチングを実現',
      features: ['新卒・第二新卒専門', '未経験歓迎求人', '研修制度充実企業', 'キャリア形成支援'],
      image: 'https://readdy.ai/api/search-image?query=Young%20Japanese%20professionals%20in%20training%20and%20mentorship%20program%2C%20fresh%20Japanese%20graduates%20in%20modern%20workplace%20learning%20environment%2C%20Japanese%20mentors%20guiding%20young%20talent%2C%20bright%20contemporary%20office%20setting%20with%20career%20development%20theme&width=500&height=400&seq=service-young-jp&orientation=landscape'
    },
    {
      icon: 'ri-building-line',
      title: '企業向け採用支援',
      description: '企業の採用戦略立案から人材確保まで、包括的な採用支援サービス',
      features: ['採用戦略立案', '求人企画・制作', '面接官トレーニング', '定着率向上支援'],
      image: 'https://readdy.ai/api/search-image?query=Japanese%20HR%20team%20and%20recruitment%20consultants%20in%20strategy%20meeting%2C%20modern%20Japanese%20corporate%20conference%20room%20with%20presentation%20screens%2C%20Japanese%20business%20professionals%20discussing%20talent%20acquisition%2C%20professional%20Japanese%20office%20environment&width=500&height=400&seq=service-corp-jp&orientation=landscape'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            サービス詳細
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            あらゆるキャリアステージに対応した専門的な人材紹介サービスをご提供
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
              <div className="lg:w-1/2">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-80 object-cover object-top rounded-2xl shadow-lg"
                />
              </div>
              <div className="lg:w-1/2">
                <div 
                  className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6"
                >
                  <i className={`${service.icon} text-2xl text-blue-600`}></i>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-600 mr-3"></i>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
