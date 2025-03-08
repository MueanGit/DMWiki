import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from './components/Navigation';
import SearchBar from './components/SearchBar';

const inter = Inter({ subsets: ['latin'] });

// Rest of your code...

export const metadata = {
  title: 'Monster Hunter Wilds Wiki',
  description: 'Comprehensive guide for Monster Hunter Wilds - weapons, armor, monsters, and materials',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-gray-100`}>
        <header className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="flex items-center">
                <a href="/" className="text-2xl font-bold text-yellow-400">
                  MH Wilds Wiki
                </a>
                <nav className="hidden md:flex ml-8">
                  <Navigation />
                </nav>
              </div>
              
              <div className="mt-3 md:mt-0 w-full md:w-auto">
                <SearchBar />
              </div>
            </div>
            
            {/* Mobile Navigation */}
            <div className="md:hidden mt-3">
              <Navigation />
            </div>
          </div>
        </header>
        
        <main>
          {children}
        </main>
        
        <footer className="bg-gray-800 border-t border-gray-700 py-8 mt-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold text-yellow-400 mb-4">Monster Hunter Wilds Wiki</h3>
                <p className="text-gray-400">
                  A comprehensive fan-made wiki for Monster Hunter Wilds. Find information on weapons, armor, monsters, and more.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-yellow-400 mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/builds" className="text-gray-400 hover:text-yellow-400 transition-colors">
                      Build Guides
                    </a>
                  </li>
                  <li>
                    <a href="/monsters" className="text-gray-400 hover:text-yellow-400 transition-colors">
                      Monster Database
                    </a>
                  </li>
                  <li>
                    <a href="/equipment/weapons" className="text-gray-400 hover:text-yellow-400 transition-colors">
                      Weapons
                    </a>
                  </li>
                  <li>
                    <a href="/equipment/armor" className="text-gray-400 hover:text-yellow-400 transition-colors">
                      Armor
                    </a>
                  </li>
                  <li>
                    <a href="/materials" className="text-gray-400 hover:text-yellow-400 transition-colors">
                      Materials
                    </a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-yellow-400 mb-4">Disclaimer</h3>
                <p className="text-gray-400">
                  This is a fan-made wiki and is not affiliated with Capcom. Monster Hunter Wilds is a trademark of Capcom Co., Ltd.
                </p>
              </div>
            </div>
            
            <div className="mt-8 pt-4 border-t border-gray-700 text-center text-gray-500">
              <p>© {new Date().getFullYear()} Monster Hunter Wilds Wiki. All game content and materials are trademarks and copyrights of their respective owners.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}