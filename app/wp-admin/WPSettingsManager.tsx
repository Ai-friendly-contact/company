
'use client';

import { useState } from 'react';
import { SiteSettings, updateSiteSettings } from '../../lib/settings';

interface WPSettingsManagerProps {
  settings: SiteSettings[];
  onRefresh: () => void;
}

export default function WPSettingsManager({ settings, onRefresh }: WPSettingsManagerProps) {
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

  const getCategoryTitle = (category: string) => {
    const titles: { [key: string]: string } = {
      'contact': 'お問い合わせ設定',
      'general': '一般設定', 
      'homepage': 'ホームページ設定',
      'email': 'メール設定'
    };
    return titles[category] || category;
  };

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
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">サイト設定</h2>
          <p className="text-sm text-gray-600 mt-1">
            WordPressスタイルの設定管理画面です
          </p>
        </div>

        {updateStatus && (
          <div className={`mx-6 mt-6 p-4 rounded-lg ${
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
      </div>

      {Object.entries(groupedSettings).map(([category, categorySettings]) => (
        <div key={category} className="bg-white rounded-lg shadow-sm">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">
              {getCategoryTitle(category)}
            </h3>
          </div>
          
          <div className="divide-y divide-gray-200">
            {categorySettings.map((setting) => (
              <div key={setting.key} className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">{setting.description}</h4>
                    <p className="text-sm text-gray-500">設定キー: {setting.key}</p>
                  </div>
                  {editingItem !== setting.key && (
                    <button
                      onClick={() => handleEdit(setting)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
                    >
                      <i className="ri-edit-line w-4 h-4 flex items-center justify-center mr-1 inline-flex"></i>
                      編集
                    </button>
                  )}
                </div>

                {editingItem === setting.key ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        設定値
                      </label>
                      <textarea
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                        rows={4}
                        placeholder="設定値を入力"
                      />
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleSave(setting.key)}
                        disabled={isUpdating}
                        className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors whitespace-nowrap cursor-pointer"
                      >
                        {isUpdating ? (
                          <>
                            <i className="ri-loader-4-line w-4 h-4 flex items-center justify-center mr-2 inline-flex animate-spin"></i>
                            保存中...
                          </>
                        ) : (
                          <>
                            <i className="ri-save-line w-4 h-4 flex items-center justify-center mr-2 inline-flex"></i>
                            保存
                          </>
                        )}
                      </button>
                      <button
                        onClick={handleCancel}
                        disabled={isUpdating}
                        className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 disabled:cursor-not-allowed transition-colors whitespace-nowrap cursor-pointer"
                      >
                        キャンセル
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="mt-3">
                    <div className="bg-gray-50 p-4 rounded-lg border">
                      <p className="text-gray-900 whitespace-pre-wrap">{setting.value}</p>
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

      {/* メール設定の説明 */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-start">
          <i className="ri-information-line text-blue-600 w-6 h-6 flex items-center justify-center mr-3 mt-0.5"></i>
          <div>
            <h3 className="font-semibold text-blue-900 mb-2">メール機能について</h3>
            <div className="text-blue-800 text-sm space-y-2">
              <p>• WordPressスタイルの管理画面でメール設定を簡単に変更できます</p>
              <p>• お問い合わせは自動的にデータベースに保存され、管理画面で確認可能</p>
              <p>• 返信ボタンから直接メールソフトが起動し、スムーズに対応できます</p>
              <p>• Supabaseのエッジ機能により、安定したメール送信が可能</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
