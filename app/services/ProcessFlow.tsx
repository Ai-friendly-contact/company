
'use client';

import Link from 'next/link';

export default function ProcessFlow() {
  const steps = [
    {
      step: '01',
      title: '初回面談・ヒアリング',
      description: 'キャリアの希望や経験を詳しくお伺いし、最適な転職戦略を立案します',
      icon: 'ri-chat-3-line'
    },
    {
      step: '02',
      title: '求人のご紹介',
      description: '厳選した求人情報をご紹介。企業の内情や詳細もお伝えします',
      icon: 'ri-file-search-line'
    },
    {
      step: '03',
      title: '応募書類作成支援',
      description: '履歴書・職務経歴書の作成から面接対策まで徹底サポート',
      icon: 'ri-file-edit-line'
    },
    {
      step: '04',
      title: '面接調整・サポート',
      description: '企業との面接日程調整から当日のフォローまで一貫してサポート',
      icon: 'ri-calendar-line'
    },
    {
      step: '05',
      title: '条件交渉・内定',
      description: '給与や待遇などの条件交渉を代行し、最適な条件で内定獲得',
      icon: 'ri-handshake-line'
    },
    {
      step: '06',
      title: '入社後フォロー',
      description: '入社後3ヶ月間は定期的にフォローし、定着をサポート',
      icon: 'ri-customer-service-line'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            サービスの流れ
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            専任コンサルタントが転職成功まで一貫してサポートいたします
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-blue-200"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center md:text-inherit`}>
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                <div className="relative z-10 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center my-6 md:my-0">
                  <i className={`${step.icon} text-white text-2xl`}></i>
                </div>
                
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="/contact" 
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer inline-block"
          >
            まずは無料相談から始める
          </Link>
        </div>
      </div>
    </section>
  );
}
