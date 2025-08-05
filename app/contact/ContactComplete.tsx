
'use client';

import { useState, useEffect } from 'react';
import { getSiteSettingValue } from '../../lib/settings';

interface ContactCompleteProps {
  onNewContact: () => void;
}

export default function ContactComplete({ onNewContact }: ContactCompleteProps) {
  const [responseTime, setResponseTime] = useState('3営業日以内に');
  const [phone, setPhone] = useState('03-1234-5678');
  const [email, setEmail] = useState('info@example.com');

  useEffect(() => {
    const loadSettings = async () => {
      const [responseTimeValue, phoneValue, emailValue] = await Promise.all([
        getSiteSettingValue('contact_response_time', '3営業日以内に'),
        getSiteSettingValue('contact_phone', '03-1234-5678'),
        getSiteSettingValue('contact_email', 'info@example.com')
      ]);
      
      setResponseTime(responseTimeValue);
      setPhone(phoneValue);
      setEmail(emailValue);
    };

    loadSettings();
  }, []);

  return (
    <div className="bg-white rounded-lg p-8 text-center">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <i className="ri-check-line text-3xl text-green-600"></i>
      </div>
      
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        送信完了
      </h3>
      
      <p className="text-lg text-gray-600 mb-6">
        お問い合わせありがとうございます。<br />
        担当者より{responseTime}ご連絡いたします。
      </p>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
        <p className="text-sm text-yellow-800">
          <i className="ri-information-line w-4 h-4 flex items-center justify-center mr-2 inline-flex"></i>
          3営業日経過しても連絡がない場合は、大変お手数ですが、ご連絡ください。
        </p>
      </div>

      <div className="space-y-4">
        <button
          onClick={onNewContact}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-add-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
          新しいお問い合わせ
        </button>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <i className="ri-phone-line text-2xl text-blue-600 mb-2"></i>
            <p className="font-semibold text-gray-900">お急ぎの場合</p>
            <p className="text-blue-600 font-medium">{phone}</p>
            <p className="text-xs text-gray-600">平日 9:00〜18:00</p>
          </div>
          
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <i className="ri-mail-line text-2xl text-green-600 mb-2"></i>
            <p className="font-semibold text-gray-900">メール</p>
            <p className="text-green-600">{email}</p>
            <p className="text-xs text-gray-600">24時間受付</p>
          </div>
        </div>
      </div>
    </div>
  );
}
