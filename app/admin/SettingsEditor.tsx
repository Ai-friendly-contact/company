
'use client';

import { useState } from 'react';
import { SiteSettings, updateSiteSettings } from '../../lib/settings';

interface SettingsEditorProps {
  settings: SiteSettings[];
  onRefresh: () => void;
  onLogout: () => void;
}

export default function SettingsEditor({ settings, onRefresh, onLogout }: SettingsEditorProps) {
  const [editingItem, setEditingItem] = useState<string | null>(null);
  const [editValue, setEditValue] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateStatus, setUpdateStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const groupedSettings = settings.reduce((groups, setting) => {
    const category = setting.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(setting);
    return groups;
  }, {} as Record<string, SiteSettings[]>);

  const handleEdit = (setting: SiteSettings) => {
    setEditingItem(setting.key);
    setEditValue(setting.value);
    setUpdateStatus(null);
  };

  const handleCancel = () => {
    setEditingItem(null);
    setEditValue('');
    setUpdateStatus(null);
  };

  const handleSave = async (key: string) => {
    setIsUpdating(true);
    try {
      const success = await updateSiteSettings(key, editValue);
      if (success) {
        setUpdateStatus({ type: 'success', message: '設定を更新しました' });
        setEditingItem(null);
        setEditValue('');
        onRefresh();
      } else {
        setUpdateStatus({ type: 'error', message: '更新に失敗しました' });
      }
    } catch (error) {
      setUpdateStatus({ type: 'error', message: '更新中にエラーが発生しました' });
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                <i className="ri-settings-3-line text-blue-600"></i>
              </div>
              <h1 className="text-xl font-bold text-gray-900">サイト設定管理</h1>
            </div>
            <button
              onClick={onLogout}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors whitespace-nowrap cursor-pointer"
            >
              <i className="ri-logout-circle-line w-4 h-4 flex items-center justify-center mr-2 inline-flex"></i>
              ログアウト
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {updateStatus && (
          <div className={`mb-6 p-4 rounded-lg ${
            updateStatus.type === 'success' 
              ? 'bg-green-50 border border-green-200 text-green-800' 
              : 'bg-red-50 border border-red-200 text-red-800'
          }`}>
            <div className="flex items-center">
              <i className={`${
                updateStatus.type === 'success' ? 'ri-check-line' : 'ri-error-warning-line'
              } w-5 h-5 flex items-center justify-center mr-2`}></i>
              {updateStatus.message}
            </div>
          </div>
        )}

        <div className="space-y-8">
          {Object.entries(groupedSettings).map(([category, categorySettings]) => (
            <div key={category} className="bg-white rounded-lg shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900 capitalize">
                  {category === 'contact' ? 'お問い合わせページ' : 
                   category === 'general' ? '全般設定' : 
                   category === 'homepage' ? 'ホームページ' : category}
                </h2>
              </div>
              
              <div className="divide-y divide-gray-200">
                {categorySettings.map((setting) => (
                  <div key={setting.key} className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium text-gray-900">{setting.description}</h3>
                        <p className="text-sm text-gray-500">キー: {setting.key}</p>
                      </div>
                      {editingItem !== setting.key && (
                        <button
                          onClick={() => handleEdit(setting)}
                          className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
                        >
                          <i className="ri-edit-line w-4 h-4 flex items-center justify-center mr-1 inline-flex"></i>
                          編集
                        </button>
                      )}
                    </div>

                    {editingItem === setting.key ? (
                      <div className="space-y-4">
                        <textarea
                          value={editValue}
                          onChange={(e) => setEditValue(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                          rows={3}
                          placeholder="設定値を入力"
                        />
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleSave(setting.key)}
                            disabled={isUpdating}
                            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors whitespace-nowrap cursor-pointer"
                          >
                            {isUpdating ? (
                              <>
                                <i className="ri-loader-4-line w-4 h-4 flex items-center justify-center mr-1 inline-flex animate-spin"></i>
                                保存中...
                              </>
                            ) : (
                              <>
                                <i className="ri-save-line w-4 h-4 flex items-center justify-center mr-1 inline-flex"></i>
                                保存
                              </>
                            )}
                          </button>
                          <button
                            onClick={handleCancel}
                            disabled={isUpdating}
                            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 disabled:cursor-not-allowed transition-colors whitespace-nowrap cursor-pointer"
                          >
                            キャンセル
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="mt-2">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-gray-700 whitespace-pre-wrap">{setting.value}</p>
                        </div>
                        {setting.updated_at && (
                          <p className="text-xs text-gray-500 mt-2">
                            最終更新: {new Date(setting.updated_at).toLocaleString('ja-JP')}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {Object.keys(groupedSettings).length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-settings-line text-2xl text-gray-400"></i>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">設定データがありません</h3>
            <p className="text-gray-600">まず初期データを作成してください。</p>
          </div>
        )}
      </main>
    </div>
  );
}
