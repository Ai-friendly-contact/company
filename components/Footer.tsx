
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link href="/" className="font-[\'Pacifico\'] text-2xl text-blue-400 mb-4 inline-block">
                logo
              </Link>
              <p className="text-gray-300 mb-6 leading-relaxed">
                専門性と実績を活かした人材紹介サービスで、求職者と企業の最適なマッチングを実現。あなたの成長と企業の成功をサポートします。
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <i className="ri-phone-line w-5 h-5 flex items-center justify-center mr-3 text-blue-400"></i>
                  <span>03-1234-5678</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-mail-line w-5 h-5 flex items-center justify-center mr-3 text-blue-400"></i>
                  <span>info@example.com</span>
                </div>
                <div className="flex items-start">
                  <i className="ri-map-pin-line w-5 h-5 flex items-center justify-center mr-3 text-blue-400 mt-1"></i>
                  <span className="leading-relaxed">東京都渋谷区○○○○ 1-2-3<br className="hidden sm:block" />○○ビル 8階</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">サービス</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/services" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">
                    人材紹介サービス
                  </Link>
                </li>
                <li>
                  <Link href="/jobseekers" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">
                    求職者サポート
                  </Link>
                </li>
                <li>
                  <Link href="/companies" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">
                    企業向けサービス
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">会社情報</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">
                    会社概要
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">
                    採用情報
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">
                    お問い合わせ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              2024 株式会社○○. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                プライバシーポリシー
              </Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                利用規約
              </Link>
              <Link href="/sitemap" className="text-sm text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                サイトマップ
              </Link>
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-500">
            有料職業紹介事業許可番号：13-ユ-123456
          </div>
        </div>
      </div>
    </footer>
  );
}
