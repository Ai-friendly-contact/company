
'use client';

import { useState, useEffect } from 'react';
import { getSiteSettings, SiteSettings } from '../../lib/settings';
import AdminLogin from './AdminLogin';
import SettingsEditor from './SettingsEditor';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [settings, setSettings] = useState<SiteSettings[]>([]);
  const [isLoadingSettings, setIsLoadingSettings] = useState(false);

  const ADMIN_PASSWORD = 'admin123';

  const handleLogin = (password: string) => {
    setIsLoading(true);
    setLoginError('');

    setTimeout(() => {
      if (password === ADMIN_PASSWORD) {
        setIsAuthenticated(true);
        localStorage.setItem('admin_authenticated', 'true');
        loadSettings();
      } else {
        setLoginError('パスワードが正しくありません');
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('admin_authenticated');
    setSettings([]);
  };

  const loadSettings = async () => {
    setIsLoadingSettings(true);
    try {
      const data = await getSiteSettings();
      setSettings(data);
    } catch (error) {
      console.error('Failed to load settings:', error);
    } finally {
      setIsLoadingSettings(false);
    }
  };

  useEffect(() => {
    const savedAuth = localStorage.getItem('admin_authenticated');
    if (savedAuth === 'true') {
      setIsAuthenticated(true);
      loadSettings();
    }
  }, []);

  if (!isAuthenticated) {
    return (
      <AdminLogin 
        onLogin={handleLogin}
        isLoading={isLoading}
        error={loginError}
      />
    );
  }

  if (isLoadingSettings) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="ri-loader-4-line text-2xl text-blue-600 animate-spin"></i>
          </div>
          <p className="text-gray-600">設定を読み込んでいます...</p>
        </div>
      </div>
    );
  }

  return (
    <SettingsEditor 
      settings={settings}
      onRefresh={loadSettings}
      onLogout={handleLogout}
    />
  );
}
