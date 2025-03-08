import React from 'react';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import Navigation from './components/Navigation';
import SearchBar from './components/SearchBar';
// Remove ThemeProvider import since we're not using it anymore

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap'
});

export const metadata = {
  title: 'Monster Hunter Wilds Wiki',
  description: 'Comprehensive guide for Monster Hunter Wilds - weapons, armor, monsters, and materials',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="min-h-screen bg-background dark:bg-background-dark text-text-primary dark:text-white">
        {/* Remove ThemeProvider wrapper */}
        <header className="bg-white dark:bg-primary-900 shadow-md sticky top-0 z-50">
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="flex items-center">
                <a href="/" className="text-2xl font-bold text-primary-500 dark:text-white">
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
        
        <footer className="bg-white dark:bg-primary-900 border-t border-border-light dark:border-primary-800 py-8 mt-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold text-primary-500 dark:text-white mb-4">Monster Hunter Wilds Wiki</h3>
                <p className="text-text-secondary dark:text-gray-300">
                  A comprehensive fan-made wiki for Monster Hunter Wilds. Find information on weapons, armor, monsters, and more.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-primary-500 dark:text-white mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/builds" className="text-text-secondary dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                      Build Guides
                    </a>
                  </li>
                  <li>
                    <a href="/monsters" className="text-text-secondary dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                      Monster Database
                    </a>
                  </li>
                  <li>
                    <a href="/equipment/weapons" className="text-text-secondary dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                      Weapons
                    </a>
                  </li>
                  <li>
                    <a href="/equipment/armor" className="text-text-secondary dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                      Armor
                    </a>
                  </li>
                  <li>
                    <a href="/materials" className="text-text-secondary dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                      Materials
                    </a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-primary-500 dark:text-white mb-4">Disclaimer</h3>
                <p className="text-text-secondary dark:text-gray-300">
                  This is a fan-made wiki and is not affiliated with Capcom. Monster Hunter Wilds is a trademark of Capcom Co., Ltd.
                </p>
              </div>
            </div>
            
            <div className="mt-8 pt-4 border-t border-border-light dark:border-primary-800 text-center text-text-muted dark:text-gray-400">
              <p>© {new Date().getFullYear()} Monster Hunter Wilds Wiki. All game content and materials are trademarks and copyrights of their respective owners.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}