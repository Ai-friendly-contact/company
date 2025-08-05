
'use client';

export default function ServicesSection() {
  const services = [
    {
      icon: 'ri-user-search-line',
      title: '専門的な人材マッチング',
      description: '業界専門知識を持つコンサルタントが、最適な人材と企業をマッチング。個別のニーズに合わせたオーダーメイドサービスを提供します。',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Japanese%20recruitment%20consultant%20interviewing%20Japanese%20candidate%20in%20modern%20office%2C%20business%20matching%20service%2C%20clean%20background%20with%20professional%20atmosphere%2C%20Japanese%20business%20people%2C%20high%20quality%20corporate%20photography&width=400&height=300&seq=service-1-jp&orientation=landscape'
    },
    {
      icon: 'ri-bar-chart-line',
      title: '豊富な実績とネットワーク',
      description: '10年以上の実績で培った幅広い業界ネットワーク。年間1,000件以上の成功事例で、確実な結果をお約束します。',
      image: 'https://readdy.ai/api/search-image?query=Japanese%20business%20success%20metrics%20dashboard%20with%20growth%20charts%20and%20networking%20connections%2C%20professional%20corporate%20environment%20with%20Japanese%20businesspeople%2C%20clean%20modern%20design%20with%20data%20visualization%20elements&width=400&height=300&seq=service-2-jp&orientation=landscape'
    },
    {
      icon: 'ri-shield-check-line',
      title: '充実したサポート体制',
      description: '転職活動から入社後まで、専任コンサルタントが継続的にサポート。企業様には採用戦略から定着支援まで包括的にフォローします。',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Japanese%20support%20team%20providing%20consultation%20and%20guidance%2C%20collaborative%20workspace%20with%20modern%20office%20design%2C%20Japanese%20business%20professionals%2C%20trust%20and%20reliability%20theme%2C%20business%20service%20excellence&width=400&height=300&seq=service-3-jp&orientation=landscape'
    }
  ];

  const stats = [
    { number: '15,000+', label: '紹介実績' },
    { number: '95%', label: '満足度' },
    { number: '500+', label: '取引企業数' },
    { number: '24', label: '平均内定日数' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            私たちのサービス
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            長年の経験と専門性を活かして、求職者と企業の最適なマッチングを実現します
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div 
                className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6"
              >
                <i className={`${service.icon} text-2xl text-blue-600`}></i>
              </div>
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-48 object-cover object-top rounded-lg mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            数字で見る実績
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
