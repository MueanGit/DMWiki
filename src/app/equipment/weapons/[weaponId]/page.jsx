// src/app/equipment/[type]/[equipmentId]/page.jsx
import React from 'react';
import Link from 'next/link';
import ImageWithFallback from '../../../components/ImageWithFallback';

const EquipmentDetail = ({ equipment, type }) => {
  const isWeapon = type === 'weapon';
  
  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Equipment Header */}
        <div className="flex items-center bg-gray-800 p-6 rounded-t-xl border-b border-yellow-600">
          <div className="relative w-32 h-32 flex-shrink-0">
            <ImageWithFallback
              src={`/images/${type}s/${equipment.id}.png`}
              alt={equipment.name}
              fill
              className="object-contain"
            />
          </div>
          
          <div className="ml-6">
            <h1 className="text-3xl font-bold text-yellow-400">{equipment.name}</h1>
            <div className="flex items-center mt-2">
              <span className="bg-yellow-700 text-white px-3 py-1 rounded-full text-sm font-bold">
                Rarity {equipment.rarity}
              </span>
              {isWeapon && (
                <span className="ml-2 bg-gray-700 text-white px-3 py-1 rounded-full text-sm">
                  {equipment.weaponType}
                </span>
              )}
              {!isWeapon && (
                <span className="ml-2 bg-gray-700 text-white px-3 py-1 rounded-full text-sm">
                  {equipment.armorType}
                </span>
              )}
            </div>
          </div>
        </div>
        
        {/* Equipment Stats */}
        <div className="bg-gray-800 p-6 border-b border-gray-700">
          <h2 className="text-xl font-bold text-yellow-400 mb-4">Stats</h2>
          
          <div className="grid grid-cols-2 gap-6">
            {isWeapon ? (
              <>
                <div>
                  <h3 className="text-gray-400 text-sm">Attack</h3>
                  <p className="text-xl font-bold">{equipment.attack}</p>
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm">Affinity</h3>
                  <p className="text-xl font-bold">{equipment.affinity}%</p>
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm">Element</h3>
                  <p className="text-xl font-bold">
                    {equipment.element ? (
                      <span className={`text-${equipment.elementColor}`}>
                        {equipment.element} {equipment.elementValue}
                      </span>
                    ) : "None"}
                  </p>
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm">Sharpness</h3>
                  <div className="mt-1 h-4 flex rounded overflow-hidden">
                    {equipment.sharpness && Object.entries(equipment.sharpness).map(([color, value]) => (
                      <div 
                        key={color} 
                        className={`bg-${color} h-full`} 
                        style={{ width: `${value * 2}px` }}
                      />
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div>
                  <h3 className="text-gray-400 text-sm">Defense</h3>
                  <p className="text-xl font-bold">{equipment.defense}</p>
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm">Resistances</h3>
                  <div className="flex space-x-3 mt-1">
                    <div className="text-center">
                      <span className="text-red-500 text-xs">Fire</span>
                      <p className="font-bold">{equipment.resistances.fire}</p>
                    </div>
                    <div className="text-center">
                      <span className="text-blue-500 text-xs">Water</span>
                      <p className="font-bold">{equipment.resistances.water}</p>
                    </div>
                    <div className="text-center">
                      <span className="text-yellow-500 text-xs">Thunder</span>
                      <p className="font-bold">{equipment.resistances.thunder}</p>
                    </div>
                    <div className="text-center">
                      <span className="text-blue-300 text-xs">Ice</span>
                      <p className="font-bold">{equipment.resistances.ice}</p>
                    </div>
                    <div className="text-center">
                      <span className="text-purple-500 text-xs">Dragon</span>
                      <p className="font-bold">{equipment.resistances.dragon}</p>
                    </div>
                  </div>
                </div>
                <div className="col-span-2">
                  <h3 className="text-gray-400 text-sm">Skills</h3>
                  <div className="mt-1 grid grid-cols-2 gap-2">
                    {equipment.skills.map(skill => (
                      <div key={skill.id} className="bg-gray-700 p-2 rounded">
                        <p className="font-bold">{skill.name} Lv.{skill.level}</p>
                        <p className="text-sm text-gray-300">{skill.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        
        {/* Crafting Materials */}
        <div className="bg-gray-800 p-6 rounded-b-xl">
          <h2 className="text-xl font-bold text-yellow-400 mb-4">Crafting Materials</h2>
          
          <div className="bg-gray-900 rounded-lg p-4">
            {equipment.craftingMaterials.map(material => (
              <Link 
                key={material.id} 
                href={`/materials/${material.id}`}
                className="flex items-center p-3 hover:bg-gray-800 rounded-lg transition-colors"
              >
                <div className="relative w-12 h-12 flex-shrink-0">
                  <ImageWithFallback
                    src={`/images/materials/${material.id}.png`}
                    alt={material.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="ml-4 flex-grow">
                  <p className="font-bold">{material.name}</p>
                  <p className="text-sm text-gray-400">{material.description}</p>
                </div>
                <div className="text-yellow-400 font-bold">
                  x{material.quantity}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentDetail;