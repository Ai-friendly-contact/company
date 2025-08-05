
'use client';

import { useState } from 'react';
import { submitContact } from '../../lib/supabase';
import ContactConfirm from './ContactConfirm';
import ContactComplete from './ContactComplete';

export default function ContactForm() {
  const [currentStep, setCurrentStep] = useState<'form' | 'confirm' | 'complete'>('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    category: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.message.length > 500) {
      setSubmitStatus('メッセージは500文字以内で入力してください。');
      return;
    }

    setCurrentStep('confirm');
  };

  const handleConfirmSubmit = async () => {
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      await submitContact({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        company: formData.company || undefined,
        category: formData.category,
        message: formData.message
      });
      
      setCurrentStep('complete');
    } catch (error) {
      console.error('Contact submission error:', error);
      setSubmitStatus('送信に失敗しました。もう一度お試しください。');
      setCurrentStep('form');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = () => {
    setCurrentStep('form');
  };

  const handleNewContact = () => {
    setCurrentStep('form');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      category: '',
      message: ''
    });
    setSubmitStatus('');
  };

  if (currentStep === 'confirm') {
    return (
      <ContactConfirm
        formData={formData}
        onEdit={handleEdit}
        onSubmit={handleConfirmSubmit}
        isSubmitting={isSubmitting}
      />
    );
  }

  if (currentStep === 'complete') {
    return <ContactComplete onNewContact={handleNewContact} />;
  }

  return (
    <div className="bg-white rounded-lg p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        お問い合わせフォーム
      </h3>
      
      <form id="contact-form" onSubmit={handleFormSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            お名前 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            placeholder="山田 太郎"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            メールアドレス <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            placeholder="example@email.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            電話番号
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            placeholder="090-1234-5678"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            会社名・組織名
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            placeholder="株式会社サンプル"
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
            お問い合わせ種別 <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm appearance-none cursor-pointer"
            >
              <option value="">選択してください</option>
              <option value="転職相談">転職相談</option>
              <option value="採用相談">採用相談</option>
              <option value="サービスについて">サービスについて</option>
              <option value="料金について">料金について</option>
              <option value="その他">その他</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <i className="ri-arrow-down-s-line text-gray-400"></i>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            お問い合わせ内容 <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            maxLength={500}
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm resize-none"
            placeholder="お問い合わせ内容を詳しくお書きください（500文字以内）"
          />
          <div className="text-right text-xs text-gray-500 mt-1">
            {formData.message.length}/500文字
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
        >
          <i className="ri-eye-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
          内容を確認する
        </button>

        {submitStatus && (
          <div className="p-4 rounded-lg text-sm bg-red-50 text-red-800 border border-red-200">
            {submitStatus}
          </div>
        )}
      </form>
    </div>
  );
}
