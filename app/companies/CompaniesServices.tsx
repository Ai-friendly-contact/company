
'use client';

export default function CompaniesServices() {
  const services = [
    {
      icon: 'ri-search-eye-line',
      title: '厳選された候補者',
      description: '独自のスクリーニング手法で、スキルと人柄の両面から最適な候補者を厳選してご紹介',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Japanese%20HR%20manager%20reviewing%20candidate%20profiles%20on%20laptop%20computer%20in%20modern%20office%2C%20business%20woman%20in%20suit%20analyzing%20recruitment%20data%2C%20clean%20office%20desk%20with%20documents%20and%20coffee%2C%20natural%20lighting%2C%20professional%20atmosphere%2C%20focused%20work%20scene&width=400&height=300&seq=companies-service-1&orientation=landscape'
    },
    {
      icon: 'ri-team-line',
      title: '専門コンサルタント',
      description: '業界経験豊富な専門コンサルタントが、採用戦略から入社まで一貫してサポート',
      image: 'https://readdy.ai/api/search-image?query=Experienced%20Japanese%20recruitment%20consultant%20in%20business%20suit%20presenting%20to%20corporate%20clients%20in%20meeting%20room%2C%20professional%20presentation%20scene%20with%20charts%20and%20documents%2C%20confident%20business%20advisor%20explaining%20hiring%20strategy%2C%20modern%20office%20conference%20room&width=400&height=300&seq=companies-service-2&orientation=landscape'
    },
    {
      icon: 'ri-shield-check-line',
      title: '成功報酬制',
      description: '採用決定まで費用は発生しません。リスクなく優秀な人材の採用が可能',
      image: 'https://readdy.ai/api/search-image?query=Japanese%20business%20handshake%20between%20company%20executives%20and%20new%20employee%20in%20modern%20office%2C%20successful%20recruitment%20completion%20ceremony%2C%20professional%20business%20people%20in%20suits%20celebrating%20successful%20hiring%2C%20bright%20office%20environment&width=400&height=300&seq=companies-service-3&orientation=landscape'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            企業様が選ぶ理由
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            多くの企業様に選ばれ続ける理由があります
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8">
              <div className="mb-6">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover object-top rounded-lg mb-4"
                />
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg">
                  <i className={`${service.icon} text-2xl text-blue-600`}></i>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
