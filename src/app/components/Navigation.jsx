'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState(null);

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
    <ul className="flex flex-wrap md:flex-nowrap space-x-0 md:space-x-4">
      {navItems.map((item) => (
        <li key={item.label} className="relative group w-full md:w-auto">
          {item.dropdown ? (
            <>
              <button
                className={`px-3 py-2 w-full md:w-auto text-left flex justify-between items-center rounded hover:bg-gray-700 transition-colors ${
                  openDropdown === item.label ? 'bg-gray-700' : ''
                }`}
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
                <div className="absolute left-0 mt-1 w-full md:w-48 bg-gray-800 rounded-lg shadow-lg overflow-hidden z-50">
                  {item.dropdown.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.label}
                      href={dropdownItem.path}
                      className={`block px-4 py-2 hover:bg-gray-700 transition-colors ${
                        isActive(dropdownItem.path) ? 'bg-gray-700 text-yellow-400' : 'text-gray-200'
                      }`}
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
              className={`block px-3 py-2 rounded transition-colors hover:bg-gray-700 ${
                isActive(item.path) ? 'text-yellow-400' : 'text-gray-200'
              }`}
            >
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Navigation;