
'use client';

import Link from 'next/link';

export default function ServicePricing() {
  const plans = [
    {
      name: 'ベーシックプラン',
      price: '完全無料',
      target: '求職者向け',
      description: 'すべてのサービスを無料でご利用いただけます',
      features: [
        'キャリア相談',
        '求人紹介',
        '応募書類作成支援',
        '面接対策',
        '条件交渉代行',
        '入社後フォロー'
      ],
      popular: false
    },
    {
      name: 'プレミアムサーチ',
      price: '成功報酬制',
      target: '企業向け（エグゼクティブ）',
      description: '年収1000万円以上の幹部人材採用',
      features: [
        'ヘッドハンティング',
        '候補者調査・評価',
        '面接設定・調整',
        '条件交渉代行',
        '6ヶ月間保証',
        '定着支援'
      ],
      popular: true
    },
    {
      name: 'スタンダード採用',
      price: '成功報酬制',
      target: '企業向け（一般職）',
      description: '中堅・若手人材の採用支援',
      features: [
        '求人企画・作成',
        '候補者スクリーニング',
        '面接調整',
        '選考結果フィードバック',
        '3ヶ月間保証',
        '採用コンサルティング'
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            料金プラン
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            求職者は完全無料、企業様は成功報酬制で安心してご利用いただけます
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl p-8 shadow-lg relative ${plan.popular ? 'ring-2 ring-blue-600 transform scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
                    人気プラン
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {plan.price}
                </div>
                <div className="text-sm text-gray-600 mb-4">
                  {plan.target}
                </div>
                <p className="text-gray-600">
                  {plan.description}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-600 mr-3"></i>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Link 
                href="/contact" 
                className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                  plan.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                }`}
              >
                お問い合わせ
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            企業様の成功報酬は理論年収の30-35%（業界標準）
          </p>
          <p className="text-sm text-gray-500">
            詳細な料金についてはお気軽にお問い合わせください
          </p>
        </div>
      </div>
    </section>
  );
}
