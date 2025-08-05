
'use client';

import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';

interface Contact {
  id: number;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  category: string;
  message: string;
  created_at: string;
}

export default function WPContactManager() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    try {
      const { data, error } = await supabase
        .from('contacts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setContacts(data || []);
    } catch (error) {
      console.error('Error loading contacts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteContact = async (id: number) => {
    if (confirm('このお問い合わせを削除してもよろしいですか？')) {
      try {
        const { error } = await supabase
          .from('contacts')
          .delete()
          .eq('id', id);

        if (error) throw error;
        setContacts(prev => prev.filter(c => c.id !== id));
        if (selectedContact?.id === id) {
          setSelectedContact(null);
        }
      } catch (error) {
        console.error('Error deleting contact:', error);
        alert('削除に失敗しました');
      }
    }
  };

  const handleSendReply = async (contact: Contact) => {
    const subject = `【回答】${contact.category}のお問い合わせについて`;
    const body = `${contact.name}様\n\nお問い合わせありがとうございます。\n\n[ここに回答を記入してください]\n\n今後ともよろしくお願いいたします。`;
    
    const mailtoLink = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-8 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">お問い合わせを読み込み中...</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* お問い合わせリスト */}
      <div className="lg:col-span-1 bg-white rounded-lg shadow-sm">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">お問い合わせ一覧</h2>
          <p className="text-sm text-gray-600 mt-1">{contacts.length}件</p>
        </div>

        <div className="max-h-96 overflow-y-auto">
          {contacts.length === 0 ? (
            <div className="p-6 text-center">
              <i className="ri-mail-line text-4xl text-gray-400 mb-2"></i>
              <p className="text-gray-500">お問い合わせがありません</p>
            </div>
          ) : (
            contacts.map((contact) => (
              <div
                key={contact.id}
                onClick={() => setSelectedContact(contact)}
                className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
                  selectedContact?.id === contact.id ? 'bg-blue-50 border-l-4 border-blue-600' : ''
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-gray-900 truncate">{contact.name}</h3>
                  <span className="text-xs text-gray-500">
                    {new Date(contact.created_at).toLocaleDateString('ja-JP')}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-1">{contact.category}</p>
                <p className="text-xs text-gray-500 truncate">{contact.message}</p>
              </div>
            ))
          )}
        </div>
      </div>

      {/* お問い合わせ詳細 */}
      <div className="lg:col-span-2 bg-white rounded-lg shadow-sm">
        {selectedContact ? (
          <>
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">お問い合わせ詳細</h2>
              <div className="flex gap-2">
                <button
                  onClick={() => handleSendReply(selectedContact)}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-reply-line w-4 h-4 flex items-center justify-center mr-2 inline-flex"></i>
                  返信
                </button>
                <button
                  onClick={() => handleDeleteContact(selectedContact.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-delete-bin-line w-4 h-4 flex items-center justify-center mr-2 inline-flex"></i>
                  削除
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">お名前</h3>
                  <p className="text-gray-900">{selectedContact.name}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">メールアドレス</h3>
                  <p className="text-gray-900">{selectedContact.email}</p>
                </div>

                {selectedContact.phone && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-2">電話番号</h3>
                    <p className="text-gray-900">{selectedContact.phone}</p>
                  </div>
                )}

                {selectedContact.company && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-2">会社名</h3>
                    <p className="text-gray-900">{selectedContact.company}</p>
                  </div>
                )}

                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">お問い合わせ種別</h3>
                  <p className="text-gray-900">{selectedContact.category}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">受信日時</h3>
                  <p className="text-gray-900">
                    {new Date(selectedContact.created_at).toLocaleString('ja-JP')}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">お問い合わせ内容</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-900 whitespace-pre-wrap">{selectedContact.message}</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="p-8 text-center">
            <i className="ri-mail-open-line text-4xl text-gray-400 mb-4"></i>
            <h3 className="text-lg font-medium text-gray-900 mb-2">お問い合わせを選択</h3>
            <p className="text-gray-600">左側のリストからお問い合わせを選択すると詳細が表示されます</p>
          </div>
        )}
      </div>
    </div>
  );
}
