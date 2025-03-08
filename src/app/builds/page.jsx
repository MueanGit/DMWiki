import React from 'react';
import BuildTree from '../components/BuildTree';
import { buildProgressionData } from '@/lib/data/builds';

export const metadata = {
  title: 'Build Progression Guide - Monster Hunter Wilds Wiki',
  description: 'Find the best armor and weapon builds for each stage of Monster Hunter Wilds',
};

export default function BuildsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">
          Monster Hunter Wilds Build Progression
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Follow this progression tree to find optimal equipment setups for each stage of the game.
          Click on any equipment piece to see detailed information, or expand nodes to view the progression path.
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Great Sword Progression</h2>
          <BuildTree stageData={buildProgressionData} />
        </div>
        
        {/* You can add more weapon type progression trees here */}
        {/* 
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Long Sword Progression</h2>
          <BuildTree stageData={longSwordProgressionData} />
        </div>
        */}
      </div>
      
      <div className="mt-12 bg-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">Build Progression Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900 p-4 rounded-lg">
            <h3 className="font-bold text-xl mb-2">Early Game (HR 1-3)</h3>
            <p className="text-gray-300">
              Focus on crafting any complete armor set with basic defensive skills.
              Upgrade your weapons as soon as possible, prioritizing raw damage over elemental damage.
            </p>
          </div>
          
          <div className="bg-gray-900 p-4 rounded-lg">
            <h3 className="font-bold text-xl mb-2">Mid Game (HR 4-7)</h3>
            <p className="text-gray-300">
              Start focusing on mixed sets that provide specific skills for your weapon type.
              Consider crafting multiple elemental weapons to exploit monster weaknesses.
            </p>
          </div>
          
          <div className="bg-gray-900 p-4 rounded-lg">
            <h3 className="font-bold text-xl mb-2">Late Game (HR 8+)</h3>
            <p className="text-gray-300">
              Optimize your builds with high-rarity armor pieces, decorations, and charms.
              Focus on maximizing damage output with critical skills and element/status attack boosts.
            </p>
          </div>
          
          <div className="bg-gray-900 p-4 rounded-lg">
            <h3 className="font-bold text-xl mb-2">Endgame (MR)</h3>
            <p className="text-gray-300">
              Master Rank equipment becomes available, requiring a complete gear refresh.
              Focus on Master Rank armor sets first, then gradually upgrade your weapons.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}