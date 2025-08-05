
'use client';

import { useState, useEffect } from 'react';
import { getSiteSettings, SiteSettings } from '../../lib/settings';
import WPLogin from './WPLogin';
import WPDashboard from './WPDashboard';

export default function WPAdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [settings, setSettings] = useState<SiteSettings[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = () => {
      const adminToken = localStorage.getItem('wp_admin_token');
      setIsLoggedIn(!!adminToken);
      setIsLoading(false);
    };

    checkLoginStatus();
  }, []);

  const loadSettings = async () => {
    const settingsData = await getSiteSettings();
    setSettings(settingsData);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    loadSettings();
  };

  const handleLogout = () => {
    localStorage.removeItem('wp_admin_token');
    setIsLoggedIn(false);
    setSettings([]);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!isLoggedIn) {
    return <WPLogin onLogin={handleLogin} />;
  }

  return (
    <WPDashboard 
      settings={settings} 
      onRefresh={loadSettings} 
      onLogout={handleLogout} 
    />
  );
}
