
'use client';

export default function CompanyInfo() {
  const companyData = [
    { label: '会社名', value: '株式会社キャリアパートナーズ' },
    { label: '設立', value: '2018年4月1日' },
    { label: '代表取締役', value: '田中 健一' },
    { label: '資本金', value: '5,000万円' },
    { label: '従業員数', value: '45名（2024年3月現在）' },
    { label: '事業内容', value: '人材紹介事業、転職支援サービス、企業向け採用コンサルティング' },
    { label: '許可番号', value: '有料職業紹介事業許可番号 13-ユ-123456' },
  ];

  const officeData = [
    { label: '本社所在地', value: '〒100-0001 東京都千代田区千代田1-1-1 千代田ビル10F' },
    { label: 'TEL', value: '03-1234-5678' },
    { label: 'FAX', value: '03-1234-5679' },
    { label: 'Email', value: 'info@career-partners.co.jp' },
    { label: '営業時間', value: '平日 9:00〜18:00（土日祝除く）' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            会社情報
          </h2>
          
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">企業概要</h3>
              <div className="space-y-4">
                {companyData.map((item, index) => (
                  <div key={index} className="border-b border-gray-200 pb-3 last:border-b-0">
                    <div className="text-sm font-medium text-gray-500 mb-1">{item.label}</div>
                    <div className="text-gray-900">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">アクセス</h3>
              <div className="space-y-4 mb-6">
                {officeData.map((item, index) => (
                  <div key={index} className="border-b border-blue-100 pb-3 last:border-b-0">
                    <div className="text-sm font-medium text-blue-600 mb-1">{item.label}</div>
                    <div className="text-gray-900">{item.value}</div>
                  </div>
                ))}
              </div>
              
              <div className="bg-white rounded-lg p-1">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8280649654524!2d139.75706507652047!3d35.68123897258445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x277c49ba34ed38!2z5p2x5Lqs6aeF!5e0!3m2!1sja!2sjp!4v1698123456789!5m2!1sja!2sjp"
                  width="100%" 
                  height="400" 
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
