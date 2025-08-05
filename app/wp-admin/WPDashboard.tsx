
'use client';

import { useState } from 'react';
import { SiteSettings, updateSiteSettings } from '../../lib/settings';
import WPPostsManager from './WPPostsManager';
import WPContactManager from './WPContactManager';
import WPSettingsManager from './WPSettingsManager';

interface WPDashboardProps {
  settings: SiteSettings[];
  onRefresh: () => void;
  onLogout: () => void;
}

type ActiveTab = 'dashboard' | 'posts' | 'contacts' | 'settings';

export default function WPDashboard({ settings, onRefresh, onLogout }: WPDashboardProps) {
  const [activeTab, setActiveTab] = useState<ActiveTab>('dashboard');

  const menuItems = [
    { id: 'dashboard' as ActiveTab, label: 'ダッシュボード', icon: 'ri-dashboard-line' },
    { id: 'posts' as ActiveTab, label: '投稿', icon: 'ri-article-line' },
    { id: 'contacts' as ActiveTab, label: 'お問い合わせ', icon: 'ri-mail-line' },
    { id: 'settings' as ActiveTab, label: '設定', icon: 'ri-settings-line' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'posts':
        return <WPPostsManager />;
      case 'contacts':
        return <WPContactManager />;
      case 'settings':
        return <WPSettingsManager settings={settings} onRefresh={onRefresh} />;
      default:
        return (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">ダッシュボード</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <i className="ri-article-line text-xl text-blue-600"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900">12</h3>
                    <p className="text-blue-700">投稿数</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <i className="ri-mail-line text-xl text-green-600"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-green-900">45</h3>
                    <p className="text-green-700">お問い合わせ</p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                    <i className="ri-eye-line text-xl text-orange-600"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-orange-900">1.2k</h3>
                    <p className="text-orange-700">月間PV</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <div className="flex items-center">
                <i className="ri-lightbulb-line text-yellow-600 w-6 h-6 flex items-center justify-center mr-3"></i>
                <div>
                  <h3 className="font-semibold text-yellow-900">WordPressスタイル管理システム</h3>
                  <p className="text-yellow-800 text-sm mt-1">
                    左側のメニューから投稿の管理、お問い合わせの確認、サイト設定の変更が可能です。
                    メール送信機能も統合されており、WordPressのような直感的な操作でサイト運営ができます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* サイドバー */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
              <i className="ri-wordpress-line text-blue-600"></i>
            </div>
            <h1 className="text-xl font-bold text-gray-900">WP管理画面</h1>
          </div>
        </div>

        <nav className="mt-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center px-6 py-3 text-left hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === item.id ? 'bg-blue-50 border-r-4 border-blue-600 text-blue-700' : 'text-gray-700'
              }`}
            >
              <i className={`${item.icon} w-5 h-5 flex items-center justify-center mr-3`}></i>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-6 left-6">
          <button
            onClick={onLogout}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors whitespace-nowrap cursor-pointer"
          >
            <i className="ri-logout-circle-line w-5 h-5 flex items-center justify-center mr-2"></i>
            ログアウト
          </button>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="flex-1 p-8">
        {renderContent()}
      </div>
    </div>
  );
}
