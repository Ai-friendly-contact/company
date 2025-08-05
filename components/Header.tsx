
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="font-['Pacifico'] text-2xl text-blue-600">
              logo
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
              ホーム
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
              サービス
            </Link>
            <Link href="/jobseekers" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
              求職者の方
            </Link>
            <Link href="/companies" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
              企業の方
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
              会社概要
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
              お問い合わせ
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
            >
              無料相談
            </Link>
          </div>

          <button 
            className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer">
                ホーム
              </Link>
              <Link href="/services" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer">
                サービス
              </Link>
              <Link href="/jobseekers" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer">
                求職者の方
              </Link>
              <Link href="/companies" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer">
                企業の方
              </Link>
              <Link href="/about" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer">
                会社概要
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer">
                お問い合わせ
              </Link>
              <Link 
                href="/contact" 
                className="block mx-3 mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg text-center cursor-pointer"
              >
                無料相談
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
