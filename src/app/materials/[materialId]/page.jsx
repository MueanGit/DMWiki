// src/app/materials/[materialId]/page.jsx
import React from 'react';
import Link from 'next/link';
import ImageWithFallback from '../../components/ImageWithFallback';

const MaterialDetail = ({ material }) => {
  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Material Header */}
        <div className="bg-gray-800 p-6 rounded-t-xl border-b border-yellow-600 flex items-center">
          <div className="relative w-24 h-24 flex-shrink-0">
            <ImageWithFallback
              src={`/images/materials/${material.id}.png`}
              alt={material.name}
              fill
              className="object-contain"
            />
          </div>
          
          <div className="ml-6">
            <h1 className="text-3xl font-bold text-yellow-400">{material.name}</h1>
            <div className="flex items-center mt-2">
              <span className="bg-yellow-700 text-white px-3 py-1 rounded-full text-sm font-bold">
                Rarity {material.rarity}★
              </span>
            </div>
          </div>
        </div>
        
        {/* Material Description */}
        <div className="bg-gray-800 p-6 border-b border-gray-700">
          <h2 className="text-xl font-bold text-yellow-400 mb-4">Description</h2>
          <p className="text-gray-300">{material.description}</p>
        </div>
        
        {/* How to Obtain */}
        <div className="bg-gray-800 p-6 border-b border-gray-700">
          <h2 className="text-xl font-bold text-yellow-400 mb-4">How to Obtain</h2>
          
          {material.sources.map((source, index) => (
            <div key={index} className="mb-4 last:mb-0">
              <div className="flex items-center mb-2">
                <Link 
                  href={`/monsters/${source.monster.toLowerCase()}`}
                  className="font-bold text-lg hover:text-yellow-400 transition-colors"
                >
                  {source.monster}
                </Link>
                <span className="mx-2 text-gray-500">→</span>
                <span className="bg-gray-700 px-3 py-1 rounded-lg text-sm">
                  {source.action}
                </span>
              </div>
              
              <div className="bg-gray-900 p-3 rounded-lg flex justify-between items-center">
                <div>
                  <div className="text-sm text-gray-400">Drop Chance</div>
                  <div className="font-bold text-yellow-400">{source.chance}%</div>
                </div>
                
                <div>
                  <div className="text-sm text-gray-400">Location</div>
                  <div className="font-bold">{source.location}</div>
                </div>
                
                <div className="flex space-x-1">
                  {Array.from({ length: Math.floor(source.chance / 20) }).map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-yellow-500 rounded-sm"></div>
                  ))}
                  {Array.from({ length: 5 - Math.floor(source.chance / 20) }).map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-gray-700 rounded-sm"></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Used In Equipment */}
        <div className="bg-gray-800 p-6 rounded-b-xl">
          <h2 className="text-xl font-bold text-yellow-400 mb-4">Used in Crafting</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {material.usedIn.map(item => (
              <Link 
                key={item.id}
                href={`/equipment/${item.type.toLowerCase()}s/${item.id}`}
                className="bg-gray-900 p-3 rounded-lg flex items-center hover:bg-gray-800 transition-colors"
              >
                <div className="relative w-12 h-12">
                  <ImageWithFallback
                    src={`/images/${item.type.toLowerCase()}s/${item.id}.png`}
                    alt={item.name}
                    fill
                    className="object-contain"
                  />
                </div>
                
                <div className="ml-3">
                  <div className="font-bold">{item.name}</div>
                  <div className="text-xs text-gray-400">{item.type}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaterialDetail;