
'use client';

import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { getSiteSettingValue } from '../../lib/settings';

export default function ContactPage() {
  const [phone, setPhone] = useState('03-1234-5678');
  const [email, setEmail] = useState('info@example.com');
  const [address, setAddress] = useState('〒100-0001\n東京都千代田区千代田1-1-1\n東京オフィスビル 10F');
  const [businessHours, setBusinessHours] = useState('平日 9:00〜18:00（土日祝休み）');

  useEffect(() => {
    const loadSettings = async () => {
      const [phoneValue, emailValue, addressValue, businessHoursValue] = await Promise.all([
        getSiteSettingValue('contact_phone', '03-1234-5678'),
        getSiteSettingValue('contact_email', 'info@example.com'),
        getSiteSettingValue('contact_address', '〒100-0001\n東京都千代田区千代田1-1-1\n東京オフィスビル 10F'),
        getSiteSettingValue('contact_business_hours', '平日 9:00〜18:00（土日祝休み）')
      ]);
      
      setPhone(phoneValue);
      setEmail(emailValue);
      setAddress(addressValue);
      setBusinessHours(businessHoursValue);
    };

    loadSettings();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="py-16 bg-gray-50 min-h-screen">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                お問い合わせ
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                お気軽にご相談ください
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  お問い合わせ方法
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="ri-phone-line text-3xl text-blue-600"></i>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">お電話でのご相談</h4>
                    <p className="text-2xl font-medium text-blue-600 mb-2">{phone}</p>
                    <p className="text-sm text-gray-600">{businessHours}</p>
                    <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800">
                        お急ぎの場合は<br />お電話が最も確実です
                      </p>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="ri-mail-line text-3xl text-green-600"></i>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">メールでのご相談</h4>
                    <p className="text-lg text-green-600 mb-2 break-all">{email}</p>
                    <p className="text-sm text-gray-600">24時間受付</p>
                    <div className="mt-4 p-4 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-800">
                        返信は営業時間内に<br />お送りいたします
                      </p>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="ri-map-pin-line text-3xl text-orange-600"></i>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">来社でのご相談</h4>
                    <p className="text-gray-600 mb-2 whitespace-pre-line text-sm leading-relaxed">
                      {address}
                    </p>
                    <div className="mt-4 p-4 bg-orange-50 rounded-lg">
                      <p className="text-sm text-orange-800">
                        事前にお電話で<br />ご予約をお取りください
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    よくあるお問い合わせ
                  </h3>
                  <p className="text-gray-600">
                    お問い合わせの前に、こちらもご確認ください
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <i className="ri-question-line w-5 h-5 flex items-center justify-center text-blue-600 mr-2"></i>
                      転職相談の費用は？
                    </h4>
                    <p className="text-gray-600 text-sm">
                      転職相談は完全無料です。費用は一切かかりません。
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <i className="ri-time-line w-5 h-5 flex items-center justify-center text-blue-600 mr-2"></i>
                      相談時間はどのくらい？
                    </h4>
                    <p className="text-gray-600 text-sm">
                      初回相談は約60分程度を予定しております。
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <i className="ri-calendar-line w-5 h-5 flex items-center justify-center text-blue-600 mr-2"></i>
                      土日の相談は可能？
                    </h4>
                    <p className="text-gray-600 text-sm">
                      土日祝日も対応可能です。事前にご相談ください。
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <i className="ri-computer-line w-5 h-5 flex items-center justify-center text-blue-600 mr-2"></i>
                      オンライン相談は？
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Zoom等を使ったオンライン面談も対応しております。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}