'use client';

export default function JobseekersServices() {
  const services = [
    {
      icon: 'ri-user-search-line',
      title: '専門コンサルタントによる\nキャリアカウンセリング',
      description: 'あなたの経験やスキル、将来の目標をしっかりとヒアリング。最適なキャリアプランを一緒に設計します。',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Japanese%20career%20consultant%20having%20consultation%20meeting%20with%20client%20in%20modern%20office%2C%20friendly%20and%20professional%20atmosphere%2C%20business%20counseling%20session%20with%20documents%20and%20laptop%20on%20desk&width=400&height=300&seq=jobseeker-service-1&orientation=landscape'
    },
    {
      icon: 'ri-building-2-line',
      title: '厳選した優良企業への\n求人紹介',
      description: '長年の実績で築いた企業ネットワークから、あなたに最適な求人を厳選してご紹介いたします。',
      image: 'https://readdy.ai/api/search-image?query=Modern%20Japanese%20office%20building%20and%20business%20district%20skyline%2C%20professional%20corporate%20environment%20representing%20career%20opportunities%2C%20clean%20and%20sophisticated%20business%20architecture&width=400&height=300&seq=jobseeker-service-2&orientation=landscape'
    },
    {
      icon: 'ri-shield-check-line',
      title: '入社までの\n手厚いサポート',
      description: '書類作成から面接対策、条件交渉まで。転職活動のすべてを専任コンサルタントがサポートします。',
      image: 'https://readdy.ai/api/search-image?query=Japanese%20professional%20preparing%20for%20job%20interview%20with%20consultant%20support%2C%20business%20coaching%20session%20with%20resume%20and%20interview%20materials%20in%20modern%20office%20setting&width=400&height=300&seq=jobseeker-service-3&orientation=landscape'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            転職サポートサービス
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            完全無料で、あなたの転職成功をトータルサポート
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4 whitespace-pre-line">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-xl shadow-sm p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            信頼性の高いサービス
          </h3>
          <p className="text-gray-600">
            厳格な審査を通過した企業のみをご紹介。安心してご利用いただけます。
          </p>
        </div>
      </div>
    </section>
  );
}
