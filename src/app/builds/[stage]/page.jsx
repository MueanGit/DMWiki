// src/app/builds/[stage]/page.jsx
import React from 'react';
import BuildTree from '../../components/BuildTree';
import { buildProgressionData } from '../../../lib/data/builds';

export default function BuildStagePage({ params }) {
  const { stage } = params;
  
  // You can filter or process the build progression data based on the stage parameter
  const stageTitle = stage
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">
          {stageTitle} Builds
        </h1>
        <p className="text-gray-300">
          Recommended equipment setups for the {stageTitle.toLowerCase()} stage of Monster Hunter Wilds.
        </p>
      </div>
      
      <BuildTree stageData={buildProgressionData} />
    </div>
  );
}