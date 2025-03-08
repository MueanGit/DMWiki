'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState(null);
  // Remove the useTheme hook reference
  const [theme, setTheme] = useState(() => {
    // Default to light theme
    return 'light';
  });

  // Simple toggle function that doesn't depend on the ThemeProvider
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    // Apply the theme class to the document
    document.documentElement.classList.toggle('dark');
    // Store the preference
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
    }
  };

  // Initialize theme from localStorage on mount
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        setTheme(storedTheme);
        document.documentElement.classList.toggle('dark', storedTheme === 'dark');
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    {
      label: 'Builds',
      path: '/builds',
      dropdown: [
        { label: 'Early Game', path: '/builds/early-game' },
        { label: 'Mid Game', path: '/builds/mid-game' },
        { label: 'Late Game', path: '/builds/late-game' },
        { label: 'Endgame', path: '/builds/endgame' },
      ]
    },
    {
      label: 'Equipment',
      path: '#',
      dropdown: [
        { label: 'Weapons', path: '/equipment/weapons' },
        { label: 'Armor', path: '/equipment/armor' },
      ]
    },
    { label: 'Monsters', path: '/monsters' },
    { label: 'Materials', path: '/materials' },
  ];

  const isActive = (path) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path) && path !== '#';
  };

  return (
    <div className="flex flex-wrap md:flex-nowrap items-center space-x-0 md:space-x-4">
      <ul className="flex flex-wrap md:flex-nowrap space-x-0 md:space-x-4">
        {navItems.map((item) => (
          <li key={item.label} className="relative group w-full md:w-auto">
            {item.dropdown ? (
              <>
                <button
                  className={`px-3 py-2 w-full md:w-auto text-left flex justify-between items-center rounded hover:text-primary-500 dark:hover:text-primary-400 transition-colors ${
                    openDropdown === item.label ? 'bg-primary-50 dark:bg-primary-900/40' : ''
                  } ${isActive(item.path) ? 'text-primary-500 dark:text-primary-400 font-medium' : 'text-text-secondary dark:text-gray-300'}`}
                  onClick={() => toggleDropdown(item.label)}
                >
                  <span>{item.label}</span>
                  <svg 
                    className={`w-4 h-4 ml-1 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {openDropdown === item.label && (
                  <div className="absolute left-0 mt-1 w-full md:w-48 bg-white dark:bg-primary-800 rounded-lg shadow-lg overflow-hidden z-50 border border-border-light dark:border-primary-700">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.label}
                        href={dropdownItem.path}
                        className={`block px-4 py-2 hover:bg-primary-50 dark:hover:bg-primary-700 transition-colors ${
                          isActive(dropdownItem.path) ? 'text-primary-500 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/40 font-medium' : 'text-text-secondary dark:text-gray-300'
                        }`}
                        onClick={() => setOpenDropdown(null)}
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                href={item.path}
                className={`block px-3 py-2 rounded transition-colors hover:text-primary-500 dark:hover:text-primary-400 ${
                  isActive(item.path) ? 'text-primary-500 dark:text-primary-400 font-medium' : 'text-text-secondary dark:text-gray-300'
                }`}
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
      
      {/* Theme toggle button */}
      <button 
        onClick={toggleTheme}
        className="p-2 rounded-full hover:bg-primary-50 dark:hover:bg-primary-900/40 text-text-secondary dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {theme === 'dark' ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default Navigation;