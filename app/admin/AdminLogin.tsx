
'use client';

import { useState } from 'react';

interface AdminLoginProps {
  onLogin: (password: string) => void;
  isLoading: boolean;
  error: string;
}

export default function AdminLogin({ onLogin, isLoading, error }: AdminLoginProps) {
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(password);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="ri-shield-keyhole-line text-2xl text-blue-600"></i>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">管理者ログイン</h2>
          <p className="text-gray-600 mt-2">パスワードを入力してください</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              パスワード
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="パスワードを入力"
            />
          </div>

          {error && (
            <div className="p-4 rounded-lg bg-red-50 border border-red-200">
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading || !password}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors whitespace-nowrap cursor-pointer"
          >
            {isLoading ? (
              <>
                <i className="ri-loader-4-line w-5 h-5 flex items-center justify-center mr-2 inline-flex animate-spin"></i>
                ログイン中...
              </>
            ) : (
              <>
                <i className="ri-login-circle-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
                ログイン
              </>
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            このページは管理者専用です
          </p>
        </div>
      </div>
    </div>
  );
}
