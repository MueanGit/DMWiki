import React from 'react';
import Link from 'next/link';
import { PageContainer, PageHeader, Grid, Card, CardContent, Badge, Button } from '../../components/ui';
import ImageWithFallback from '../../components/ImageWithFallback';
import { weapons } from '@/lib/data/weapons';

export const metadata = {
  title: 'Weapons Database - Monster Hunter Wilds Wiki',
  description: 'Complete list of weapons and their stats in Monster Hunter Wilds',
};

export default function WeaponsPage() {
  // Group weapons by type
  const weaponsByType = weapons.reduce((acc, weapon) => {
    if (!acc[weapon.weaponType]) {
      acc[weapon.weaponType] = [];
    }
    acc[weapon.weaponType].push(weapon);
    return acc;
  }, {});

  // Get unique weapon types
  const weaponTypes = Object.keys(weaponsByType);

  return (
    <div className="bg-background dark:bg-background-dark min-h-screen py-8">
      <PageContainer>
        <PageHeader 
          title="Weapons Database" 
          subtitle="Complete information on all weapons in Monster Hunter Wilds"
        />
        
        <div className="mb-8">
          <div className="p-4 bg-white dark:bg-primary-900/20 rounded-lg border border-border-light dark:border-primary-800/50">
            <h2 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-3">Weapon Types</h2>
            <div className="flex flex-wrap gap-2">
              {/* We're showing all available weapon types from the data, plus a few extras for completeness */}
              {[...new Set([...weaponTypes, 'Dual Blades', 'Hammer', 'Hunting Horn', 'Lance', 'Gunlance', 'Switch Axe', 'Charge Blade', 'Insect Glaive', 'Light Bowgun', 'Heavy Bowgun'])].map(type => (
                <Badge 
                  key={type} 
                  variant={weaponTypes.includes(type) ? "default" : "info"} 
                  className="px-3 py-1 cursor-pointer hover:bg-primary-200 dark:hover:bg-primary-700 transition-colors"
                >
                  {type}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        
        {/* Filter controls */}
        <div className="mb-6 flex flex-wrap gap-3">
          <Button size="small" variant="primary">All Weapons</Button>
          <Button size="small" variant="secondary">Rarity 5+</Button>
          <Button size="small" variant="secondary">Elemental</Button>
          <Button size="small" variant="secondary">Sort by Attack</Button>
        </div>
        
        {weaponTypes.map(weaponType => (
          <div key={weaponType} className="mb-10">
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-bold text-primary-600 dark:text-primary-400">{weaponType}</h2>
              <div className="ml-3 h-0.5 flex-grow bg-primary-100 dark:bg-primary-800/50 rounded-full"></div>
            </div>
            
            <Grid cols={1} md={2} lg={3} gap={6}>
              {weaponsByType[weaponType].map(weapon => (
                <Link key={weapon.id} href={`/equipment/weapons/${weapon.id}`}>
                  <Card className="h-full">
                    <CardContent>
                      <div className="flex items-center mb-4">
                        <div className="relative w-16 h-16 flex-shrink-0 bg-background dark:bg-primary-900/30 rounded-md overflow-hidden">
                          <ImageWithFallback
                            src={`/images/weapons/${weapon.id}.png`}
                            alt={weapon.name}
                            fill
                            className="object-contain p-2"
                            fallbackSrc={`https://placehold.co/200x200?text=⚔`}
                          />
                        </div>
                        <div className="ml-3">
                          <h3 className="font-bold text-primary-600 dark:text-primary-400">{weapon.name}</h3>
                          <div className="flex items-center mt-1">
                            <Badge variant={weapon.rarity > 4 ? 'accent' : 'default'} className="mr-2">
                              Rarity {weapon.rarity}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                        <div>
                          <span className="text-text-muted dark:text-text-light/50">Attack</span>
                          <p className="font-medium">{weapon.attack}</p>
                        </div>
                        <div>
                          <span className="text-text-muted dark:text-text-light/50">Affinity</span>
                          <p className="font-medium">{weapon.affinity}%</p>
                        </div>
                        <div className="col-span-2">
                          <span className="text-text-muted dark:text-text-light/50">Element</span>
                          <p className="font-medium">
                            {weapon.element ? (
                              <span className="text-primary-600 dark:text-primary-400">
                                {weapon.element} {weapon.elementValue}
                              </span>
                            ) : (
                              <span className="text-text-muted">None</span>
                            )}
                          </p>
                        </div>
                      </div>
                      
                      {/* Sharpness bar */}
                      {weapon.sharpness && (
                        <div>
                          <span className="text-sm text-text-muted dark:text-text-light/50">Sharpness</span>
                          <div className="mt-1 h-2 flex rounded overflow-hidden">
                            {Object.entries(weapon.sharpness).map(([color, value]) => {
                              // Map colors to Tailwind classes
                              const colorMap = {
                                red: 'bg-red-500',
                                orange: 'bg-orange-500',
                                yellow: 'bg-yellow-400',
                                green: 'bg-green-500',
                                blue: 'bg-blue-500',
                                white: 'bg-gray-100',
                                purple: 'bg-purple-600'
                              };
                              
                              return value > 0 ? (
                                <div 
                                  key={color} 
                                  className={`${colorMap[color] || 'bg-gray-500'} h-full`} 
                                  style={{ width: `${value * 3}px` }}
                                />
                              ) : null;
                            })}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </Grid>
          </div>
        ))}
      </PageContainer>
    </div>
  );
}