'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const searchRef = useRef(null);
  const router = useRouter();

  // Mock search function - in a real app, you would connect to your database or API
  const performSearch = (query) => {
    // For demo purposes, we'll return mock data
    // In a real app, you would fetch from an API endpoint
    if (!query) return [];

    const mockDatabase = [
      { id: 'rathalos', name: 'Rathalos', type: 'monster', path: '/monsters/rathalos' },
      { id: 'flame-sword', name: 'Flame Blade', type: 'weapon', path: '/equipment/weapons/flame-sword' },
      { id: 'rathalos-helm', name: 'Rathalos Helm', type: 'armor', path: '/equipment/armor/rathalos-helm' },
      { id: 'rathalos-scale', name: 'Rathalos Scale', type: 'material', path: '/materials/rathalos-scale' },
      { id: 'early-game-1', name: 'Early Game Hunter Build', type: 'build', path: '/builds/early-game' },
    ];

    const lowercaseQuery = query.toLowerCase();
    return mockDatabase.filter(item => 
      item.name.toLowerCase().includes(lowercaseQuery)
    ).slice(0, 5); // Limit to 5 results
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.length > 2) {
      setIsSearching(true);
      setSearchResults(performSearch(query));
    } else {
      setIsSearching(false);
      setSearchResults([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.length > 2) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setSearchResults([]);
      setIsSearching(false);
    }
  };

  // Close search results when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearching(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getTypeIcon = (type) => {
    switch (type) {
      case 'monster':
        return '🐉';
      case 'weapon':
        return '⚔️';
      case 'armor':
        return '🛡️';
      case 'material':
        return '🔮';
      case 'build':
        return '👤';
      default:
        return '📄';
    }
  };

  return (
    <div className="relative w-full" ref={searchRef}>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          onFocus={() => searchQuery.length > 2 && setIsSearching(true)}
          placeholder="Search weapons, monsters, materials..."
          className="w-full px-4 py-2 rounded-l bg-background-light dark:bg-primary-800/50 border border-border dark:border-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 text-text-primary dark:text-white"
        />
        <button
          type="submit"
          className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-r focus:outline-none transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </form>

      {/* Search Results Dropdown */}
      {isSearching && searchResults.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-primary-800 rounded-lg shadow-lg overflow-hidden z-50 border border-border-light dark:border-primary-700">
          {searchResults.map((result) => (
            <Link
              key={result.id}
              href={result.path}
              className="flex items-center px-4 py-3 hover:bg-background dark:hover:bg-primary-700 transition-colors border-b border-border-light dark:border-primary-700 last:border-0"
              onClick={() => {
                setIsSearching(false);
                setSearchQuery('');
              }}
            >
              <span className="mr-2 text-xl" aria-hidden="true">
                {getTypeIcon(result.type)}
              </span>
              <div>
                <div className="font-medium text-text-primary dark:text-white">{result.name}</div>
                <div className="text-xs text-text-muted dark:text-text-light/50 capitalize">{result.type}</div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* No Results Message */}
      {isSearching && searchQuery.length > 2 && searchResults.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-primary-800 rounded-lg shadow-lg overflow-hidden z-50 border border-border-light dark:border-primary-700">
          <div className="px-4 py-3 text-text-muted dark:text-text-light/50">
            No results found for "{searchQuery}"
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;