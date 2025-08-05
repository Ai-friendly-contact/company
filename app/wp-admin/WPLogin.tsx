
'use client';

import { useState } from 'react';

interface WPLoginProps {
  onLogin: () => void;
}

export default function WPLogin({ onLogin }: WPLoginProps) {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [isLogging, setIsLogging] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLogging(true);
    setError('');

    // WordPress風の認証
    if (credentials.username === 'admin' && credentials.password === 'wp-admin123') {
      localStorage.setItem('wp_admin_token', 'wp-admin-authenticated');
      onLogin();
    } else {
      setError('ユーザー名またはパスワードが正しくありません。');
    }

    setIsLogging(false);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="mx-auto h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <i className="ri-wordpress-line text-2xl text-blue-600"></i>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">管理画面ログイン</h2>
          <p className="mt-2 text-sm text-gray-600">
            WordPressスタイルの管理システム
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                ユーザー名またはメールアドレス
              </label>
              <input
                id="username"
                type="text"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="admin"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                パスワード
              </label>
              <input
                id="password"
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="パスワード"
              />
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-md p-4">
              <div className="flex">
                <i className="ri-error-warning-line text-red-400 w-5 h-5 flex items-center justify-center"></i>
                <div className="ml-3">
                  <p className="text-sm text-red-800">{error}</p>
                </div>
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={isLogging}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 whitespace-nowrap cursor-pointer"
          >
            {isLogging ? (
              <>
                <i className="ri-loader-4-line w-5 h-5 flex items-center justify-center mr-2 animate-spin"></i>
                ログイン中...
              </>
            ) : (
              <>
                <i className="ri-login-circle-line w-5 h-5 flex items-center justify-center mr-2"></i>
                ログイン
              </>
            )}
          </button>

          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-md p-4">
            <div className="flex">
              <i className="ri-information-line text-blue-400 w-5 h-5 flex items-center justify-center"></i>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">デモ用ログイン情報</h3>
                <div className="mt-2 text-sm text-blue-700">
                  <p>ユーザー名: <code className="bg-white px-2 py-1 rounded">admin</code></p>
                  <p>パスワード: <code className="bg-white px-2 py-1 rounded">wp-admin123</code></p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
