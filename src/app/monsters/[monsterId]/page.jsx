// src/app/monsters/[monsterId]/page.jsx
import React, { useState } from 'react';
import Link from 'next/link';
import ImageWithFallback from '../../components/ImageWithFallback';

const MonsterDetail = ({ monster }) => {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [selectedMove, setSelectedMove] = useState(monster.moves[0]?.id);
  
  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Monster Header */}
        <div className="relative rounded-t-xl overflow-hidden h-80 bg-gradient-to-b from-gray-700 to-gray-900">
          <ImageWithFallback
            src={`/images/monsters/${monster.id}/banner.jpg`}
            alt={monster.name}
            fill
            className="object-cover opacity-60"
          />
          <div className="absolute bottom-0 left-0 p-8 flex items-end">
            <div className="bg-black bg-opacity-50 p-4 rounded-lg">
              <h1 className="text-4xl font-bold text-yellow-400">{monster.name}</h1>
              <div className="flex items-center mt-2">
                <span className="bg-red-700 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {monster.threatLevel} ★
                </span>
                <span className="ml-2 bg-gray-700 text-white px-3 py-1 rounded-full text-sm">
                  {monster.type}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation Tabs */}
        <div className="bg-gray-800 flex border-b border-gray-700">
          <button 
            className={`px-6 py-4 font-bold ${selectedTab === 'overview' ? 'text-yellow-400 border-b-2 border-yellow-400' : 'text-gray-400'}`}
            onClick={() => setSelectedTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`px-6 py-4 font-bold ${selectedTab === 'moves' ? 'text-yellow-400 border-b-2 border-yellow-400' : 'text-gray-400'}`}
            onClick={() => setSelectedTab('moves')}
          >
            Moves & Counters
          </button>
          <button 
            className={`px-6 py-4 font-bold ${selectedTab === 'weaknesses' ? 'text-yellow-400 border-b-2 border-yellow-400' : 'text-gray-400'}`}
            onClick={() => setSelectedTab('weaknesses')}
          >
            Weaknesses
          </button>
          <button 
            className={`px-6 py-4 font-bold ${selectedTab === 'materials' ? 'text-yellow-400 border-b-2 border-yellow-400' : 'text-gray-400'}`}
            onClick={() => setSelectedTab('materials')}
          >
            Materials
          </button>
        </div>
        
        {/* Content Sections */}
        <div className="bg-gray-800 p-6 rounded-b-xl">
          {/* Overview Tab */}
          {selectedTab === 'overview' && (
            <div>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold text-yellow-400 mb-4">Description</h2>
                  <p className="text-gray-300 leading-relaxed">{monster.description}</p>
                  
                  <h2 className="text-2xl font-bold text-yellow-400 mt-8 mb-4">Habitat</h2>
                  <p className="text-gray-300 leading-relaxed">{monster.habitat}</p>
                  
                  <h2 className="text-2xl font-bold text-yellow-400 mt-8 mb-4">Behavior</h2>
                  <p className="text-gray-300 leading-relaxed">{monster.behavior}</p>
                </div>
                
                <div className="md:w-1/3 bg-gray-900 rounded-xl p-4">
                  <h3 className="text-xl font-bold text-yellow-400 mb-4">Quick Facts</h3>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-gray-400">Size</h4>
                      <p className="font-bold">
                        Average: {monster.size.average} <br />
                        Gold Crown: {monster.size.goldCrown}
                      </p>
                      </div>
                    
                    <div>
                      <h4 className="text-gray-400">Elements</h4>
                      <div className="flex space-x-2 mt-1">
                        {monster.elements.map(element => (
                          <span 
                            key={element} 
                            className={`px-2 py-1 rounded text-xs font-bold bg-${element.toLowerCase()}-600`}
                          >
                            {element}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-gray-400">Ailments</h4>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {monster.ailments.map(ailment => (
                          <span 
                            key={ailment} 
                            className="px-2 py-1 bg-gray-700 rounded text-xs font-bold"
                          >
                            {ailment}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Moves & Counters Tab */}
          {selectedTab === 'moves' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Move List Sidebar */}
              <div className="bg-gray-900 rounded-xl p-4 h-fit lg:sticky lg:top-4">
                <h3 className="text-xl font-bold text-yellow-400 mb-4">Monster Moves</h3>
                <div className="space-y-2">
                  {monster.moves.map(move => (
                    <button
                      key={move.id}
                      className={`w-full text-left p-3 rounded-lg ${selectedMove === move.id ? 'bg-yellow-800 text-white' : 'bg-gray-800 hover:bg-gray-700'}`}
                      onClick={() => setSelectedMove(move.id)}
                    >
                      <div className="font-bold">{move.name}</div>
                      <div className="text-sm text-gray-400">
                        Threat Level: {'★'.repeat(move.threatLevel)}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Move Details */}
              <div className="lg:col-span-2">
                {monster.moves.map(move => (
                  <div 
                    key={move.id} 
                    className={selectedMove === move.id ? 'block' : 'hidden'}
                  >
                    <h2 className="text-2xl font-bold text-yellow-400 mb-4">{move.name}</h2>
                    
                    <div className="bg-gray-900 rounded-xl overflow-hidden mb-6">
                      <div className="relative h-80 w-full">
                        <ImageWithFallback
                          src={`/gifs/monster-moves/${monster.id}/${move.id}.gif`}
                          alt={move.name}
                          fill
                          className="object-contain"
                          fallbackSrc={`https://placehold.co/600x400?text=Monster+Move:+${move.name}`}
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-gray-900 p-4 rounded-xl">
                        <h3 className="text-xl font-bold text-yellow-400 mb-2">Tell Signs</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          {move.tellSigns.map((sign, index) => (
                            <li key={index} className="text-gray-300">{sign}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-gray-900 p-4 rounded-xl">
                        <h3 className="text-xl font-bold text-yellow-400 mb-2">Damage & Effects</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li className="text-gray-300">
                            <span className="font-bold">Damage:</span> {move.damage}
                          </li>
                          {move.effects.map((effect, index) => (
                            <li key={index} className="text-gray-300">{effect}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-gray-900 p-4 rounded-xl">
                      <h3 className="text-xl font-bold text-yellow-400 mb-4">How to Counter</h3>
                      <div className="space-y-4">
                        {move.counters.map((counter, index) => (
                          <div key={index} className="border-b border-gray-800 pb-4 last:border-0">
                            <h4 className="font-bold text-lg">{counter.title}</h4>
                            <p className="text-gray-300">{counter.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Weaknesses Tab */}
          {selectedTab === 'weaknesses' && (
            <div>
              <h2 className="text-2xl font-bold text-yellow-400 mb-6">Monster Weaknesses</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-900 p-4 rounded-xl">
                  <h3 className="text-xl font-bold text-yellow-400 mb-4">Elemental Weaknesses</h3>
                  
                  <div className="space-y-4">
                    {Object.entries(monster.weaknesses.elements).map(([element, stars]) => (
                      <div key={element} className="flex items-center">
                        <div className="w-24 font-bold capitalize">{element}</div>
                        <div className="ml-4 text-yellow-400">
                          {'★'.repeat(stars)}
                          <span className="text-gray-600">{'★'.repeat(5 - stars)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-900 p-4 rounded-xl">
                  <h3 className="text-xl font-bold text-yellow-400 mb-4">Part Weaknesses</h3>
                  
                  <div className="space-y-4">
                    {monster.weaknesses.parts.map(part => (
                      <div key={part.name} className="border-b border-gray-800 pb-4 last:border-0">
                        <h4 className="font-bold">{part.name}</h4>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          <div>
                            <span className="text-gray-400 text-sm">Slash</span>
                            <div className="text-yellow-400">{'★'.repeat(part.slash)}</div>
                          </div>
                          <div>
                            <span className="text-gray-400 text-sm">Blunt</span>
                            <div className="text-yellow-400">{'★'.repeat(part.blunt)}</div>
                          </div>
                          <div>
                            <span className="text-gray-400 text-sm">Ammo</span>
                            <div className="text-yellow-400">{'★'.repeat(part.ammo)}</div>
                          </div>
                          <div>
                            <span className="text-gray-400 text-sm">Element</span>
                            <div className="text-yellow-400">{'★'.repeat(part.element)}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-gray-900 p-4 rounded-xl">
                <h3 className="text-xl font-bold text-yellow-400 mb-4">Status Effectiveness</h3>
                
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {Object.entries(monster.weaknesses.status).map(([status, stars]) => (
                    <div key={status} className="bg-gray-800 p-3 rounded-lg text-center">
                      <div className="font-bold capitalize">{status}</div>
                      <div className="text-yellow-400 mt-1">
                        {'★'.repeat(stars)}
                        <span className="text-gray-600">{'★'.repeat(5 - stars)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {/* Materials Tab */}
          {selectedTab === 'materials' && (
            <div>
              <h2 className="text-2xl font-bold text-yellow-400 mb-6">Monster Materials</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {monster.materials.map(material => (
                  <Link 
                    key={material.id}
                    href={`/materials/${material.id}`}
                    className="bg-gray-900 p-4 rounded-xl flex hover:bg-gray-800 transition-colors"
                  >
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <ImageWithFallback
                        src={`/images/materials/${material.id}.png`}
                        alt={material.name}
                        fill
                        className="object-contain"
                        fallbackSrc={`https://placehold.co/200x200?text=${material.name}`}
                      />
                    </div>
                    
                    <div className="ml-4">
                      <h3 className="font-bold text-lg">{material.name}</h3>
                      <p className="text-sm text-gray-400">{material.description}</p>
                      
                      <div className="mt-2">
                        <span className="text-xs bg-gray-700 px-2 py-1 rounded">
                          Rarity: {material.rarity}★
                        </span>
                        <span className="text-xs bg-gray-700 px-2 py-1 rounded ml-2">
                          Drop Rate: {material.dropRate}%
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MonsterDetail;