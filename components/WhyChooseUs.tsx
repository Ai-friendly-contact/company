
'use client';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: '業界トップクラスの専門性',
      description: 'IT、営業、管理部門など各分野に精通した専門コンサルタントが、深い業界知識を活かして最適なマッチングを実現します。',
      icon: 'ri-award-line'
    },
    {
      title: '10年以上の確かな実績',
      description: '創業以来15,000件以上の成功事例を通じて蓄積したノウハウで、求職者・企業双方に最高の結果をお届けします。',
      icon: 'ri-trophy-line'
    },
    {
      title: '手厚いアフターサポート',
      description: '転職・採用決定後も継続的にフォロー。定着率向上と長期的な成功をサポートし、安心して新しいステップを踏み出せます。',
      icon: 'ri-customer-service-2-line'
    }
  ];

  const testimonials = [
    {
      name: '田中 健太郎',
      position: 'ITエンジニア',
      company: '株式会社テックソリューション',
      comment: '専門的なアドバイスで理想の転職を実現できました。年収も30%アップし、新しい環境でスキルアップを図れています。',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Japanese%20businessman%20in%20his%2030s%2C%20confident%20smile%20in%20modern%20office%20setting%2C%20business%20attire%2C%20clean%20corporate%20background%2C%20high%20quality%20professional%20headshot&width=80&height=80&seq=testimonial-1&orientation=squarish'
    },
    {
      name: '佐藤 美香',
      position: '営業マネージャー',
      company: 'グローバル商事株式会社',
      comment: '親身なサポートと的確な企業分析で、自分に最適な職場を見つけることができました。転職活動の不安も解消されました。',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Japanese%20businesswoman%20in%20her%2030s%2C%20confident%20and%20approachable%20expression%2C%20modern%20corporate%20office%20background%2C%20business%20attire%2C%20professional%20headshot%20photography&width=80&height=80&seq=testimonial-2&orientation=squarish'
    },
    {
      name: '山田 雄一',
      position: '人事部長',
      company: '株式会社イノベーション',
      comment: '急募案件にも迅速に対応いただき、優秀な人材を採用できました。採用コストも削減でき、非常に満足しています。',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Japanese%20executive%20in%20his%2040s%2C%20leadership%20presence%20in%20corporate%20boardroom%20setting%2C%20business%20suit%2C%20confident%20and%20trustworthy%20appearance%2C%20executive%20portrait&width=80&height=80&seq=testimonial-3&orientation=squarish'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            選ばれる理由
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            多くの求職者様・企業様に選ばれ続ける3つの強み
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className={`${reason.icon} text-3xl text-blue-600`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            お客様の声
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover object-top mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "{testimonial.comment}"
                </p>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-sm"></i>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
