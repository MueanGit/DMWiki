"use client";
import React, { useState } from 'react';

const BuildTree = ({ stageData }) => {
  const [expandedNodes, setExpandedNodes] = useState({});
  
  const toggleNode = (nodeId) => {
    setExpandedNodes(prev => ({
      ...prev,
      [nodeId]: !prev[nodeId]
    }));
  };
  
  const renderBuildNode = (node, level = 0) => {
    const isExpanded = expandedNodes[node.id];
    const hasChildren = node.nextBuilds && node.nextBuilds.length > 0;
    
    return (
      <div key={node.id} className="mb-4">
        <div 
          className="flex items-center p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-yellow-600 transition-all cursor-pointer"
          onClick={() => hasChildren && toggleNode(node.id)}
        >
          {/* HR/MR Rank Badge */}
          <div className="flex-shrink-0 w-12 h-12 bg-yellow-700 rounded-full flex items-center justify-center text-white font-bold">
            {node.rank}
          </div>
          
          {/* Build Info */}
          <div className="ml-4 flex-grow">
            <h3 className="text-xl font-bold text-yellow-500">{node.name}</h3>
            <p className="text-gray-300">{node.description}</p>
          </div>
          
          {/* Equipment Preview */}
          <div className="flex space-x-2">
            {node.equipment.map(item => (
              <a 
                key={item.id} 
                href={`/equipment/${item.type}s/${item.id}`}
                className="bg-gray-700 p-1 rounded-md hover:bg-gray-600 transition-all"
              >
                <div className="relative w-10 h-10">
                  <img 
                    src={`/images/${item.type}s/${item.id}.png`} 
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </a>
            ))}
          </div>
          
          {/* Expand/Collapse indicator */}
          {hasChildren && (
            <div className="ml-4">
              <svg 
                className={`w-6 h-6 transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          )}
        </div>
        
        {/* Child nodes */}
        {isExpanded && hasChildren && (
          <div className="ml-12 mt-2 border-l-2 border-yellow-600 pl-4">
            {node.nextBuilds.map(childNode => renderBuildNode(childNode, level + 1))}
          </div>
        )}
      </div>
    );
  };
  
  return (
    <div className="build-tree p-4 bg-gray-900 rounded-xl">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-yellow-400">Build Progression Guide</h2>
        <p className="text-gray-300">Click on equipment icons to see details or expand nodes to view progression</p>
      </div>
      
      {stageData.initialBuilds.map(build => renderBuildNode(build))}
    </div>
  );
};

export default BuildTree;