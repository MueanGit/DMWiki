// src/app/page.jsx
import React from 'react';
import Link from 'next/link';
import ImageWithFallback from './components/ImageWithFallback';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 md:h-screen max-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div className="relative h-full w-full">
            <ImageWithFallback
              src="/images/home-banner.jpg"
              alt="Monster Hunter Wilds"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">
            Monster Hunter Wilds Wiki
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Your comprehensive guide to weapons, armor, monsters, and materials
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/builds" 
              className="px-8 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-bold rounded-lg transition-colors"
            >
              Build Guides
            </Link>
            <Link 
              href="/monsters" 
              className="px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-lg transition-colors"
            >
              Monster Database
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-12">
            Everything You Need to Hunt
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-xl p-6 hover:transform hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              
              <h3 className="text-xl font-bold text-center mb-2">Build Progression</h3>
              <p className="text-gray-300 text-center">
                Follow our build trees to optimize your equipment at every stage of the game.
              </p>
              
              <div className="mt-6 text-center">
                <Link 
                  href="/builds" 
                  className="text-yellow-400 hover:text-yellow-300 font-bold inline-flex items-center"
                >
                  View Builds
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 hover:transform hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              
              <h3 className="text-xl font-bold text-center mb-2">Monster Guides</h3>
              <p className="text-gray-300 text-center">
                Learn how to counter every monster's moves with our detailed guides and GIFs.
              </p>
              
              <div className="mt-6 text-center">
                <Link 
                  href="/monsters" 
                  className="text-yellow-400 hover:text-yellow-300 font-bold inline-flex items-center"
                >
                  View Monsters
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 hover:transform hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              
              <h3 className="text-xl font-bold text-center mb-2">Material Database</h3>
              <p className="text-gray-300 text-center">
                Find out how to obtain every material and what equipment you can craft with it.
              </p>
              
              <div className="mt-6 text-center">
                <Link 
                  href="/materials" 
                  className="text-yellow-400 hover:text-yellow-300 font-bold inline-flex items-center"
                >
                  View Materials
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Content Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-12">
            Featured Content
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Featured Monster */}
            <div className="bg-gray-900 rounded-xl overflow-hidden">
              <div className="relative h-64">
                <ImageWithFallback
                  src="/images/monsters/rathalos/banner.jpg"
                  alt="Rathalos"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-2xl font-bold text-yellow-400">Featured Monster</h3>
                  <p className="text-white text-xl">Rathalos</p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-300 mb-4">
                  Known as the "King of the Skies," this fearsome wyvern breathes deadly flames and attacks with poisonous talons.
                </p>
                <Link 
                  href="/monsters/rathalos" 
                  className="inline-block px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white font-bold rounded transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            
            {/* Featured Build */}
            <div className="bg-gray-900 rounded-xl overflow-hidden">
              <div className="relative h-64">
                <ImageWithFallback
                  src="/images/builds/featured-build.jpg"
                  alt="Featured Build"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-2xl font-bold text-yellow-400">Featured Build</h3>
                  <p className="text-white text-xl">Early Game Hunter</p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-300 mb-4">
                  Get started with this beginner-friendly build that will help you efficiently progress through the early stages of the game.
                </p>
                <Link 
                  href="/builds/early-game" 
                  className="inline-block px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white font-bold rounded transition-colors"
                >
                  View Build
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-16 bg-yellow-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Hunting?
          </h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Explore our comprehensive database and become a master hunter in Monster Hunter Wilds!
          </p>
          <Link 
            href="/builds" 
            className="inline-block px-8 py-3 bg-white hover:bg-gray-100 text-yellow-600 font-bold rounded-lg transition-colors text-lg"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}