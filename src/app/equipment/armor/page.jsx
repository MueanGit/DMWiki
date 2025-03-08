import React from 'react';
import Link from 'next/link';
import { PageContainer, PageHeader, Grid, Card, CardContent, Badge, Button } from '../../components/ui';
import ImageWithFallback from '../../components/ImageWithFallback';

export const metadata = {
  title: 'Armor Database - Monster Hunter Wilds Wiki',
  description: 'Complete list of armor sets and pieces in Monster Hunter Wilds',
};

// Mock armor data since we don't have an armor.js data file
const armorSets = [
  {
    id: 'hunter',
    name: 'Hunter Set',
    rarity: 1,
    pieces: [
      { id: 'hunter-helm', name: 'Hunter\'s Helm', type: 'Head', defense: 8 },
      { id: 'hunter-mail', name: 'Hunter\'s Mail', type: 'Chest', defense: 8 },
      { id: 'hunter-vambraces', name: 'Hunter\'s Vambraces', type: 'Arms', defense: 8 },
      { id: 'hunter-coil', name: 'Hunter\'s Coil', type: 'Waist', defense: 8 },
      { id: 'hunter-greaves', name: 'Hunter\'s Greaves', type: 'Legs', defense: 8 }
    ],
    setBonuses: [
      'Health +10 (2 pieces)',
      'Stamina +20 (4 pieces)'
    ]
  },
  {
    id: 'alloy',
    name: 'Alloy Set',
    rarity: 2,
    pieces: [
      { id: 'alloy-helm', name: 'Alloy Helm', type: 'Head', defense: 10 },
      { id: 'alloy-mail', name: 'Alloy Mail', type: 'Chest', defense: 10 },
      { id: 'alloy-vambraces', name: 'Alloy Vambraces', type: 'Arms', defense: 10 },
      { id: 'alloy-coil', name: 'Alloy Coil', type: 'Waist', defense: 10 },
      { id: 'alloy-greaves', name: 'Alloy Greaves', type: 'Legs', defense: 10 }
    ],
    setBonuses: [
      'Defense +10 (3 pieces)',
      'Divine Protection Lv1 (5 pieces)'
    ]
  },
  {
    id: 'jagras',
    name: 'Jagras Set',
    rarity: 3,
    pieces: [
      { id: 'jagras-helm', name: 'Jagras Helm', type: 'Head', defense: 18 },
      { id: 'jagras-mail', name: 'Jagras Mail', type: 'Chest', defense: 18 },
      { id: 'jagras-vambraces', name: 'Jagras Vambraces', type: 'Arms', defense: 18 },
      { id: 'jagras-coil', name: 'Jagras Coil', type: 'Waist', defense: 18 },
      { id: 'jagras-greaves', name: 'Jagras Greaves', type: 'Legs', defense: 18 }
    ],
    setBonuses: [
      'Speed Eating Lv1 (2 pieces)',
      'Speed Eating Lv2 (4 pieces)'
    ]
  },
  {
    id: 'rathalos',
    name: 'Rathalos Set',
    rarity: 5,
    pieces: [
      { id: 'rathalos-helm', name: 'Rathalos Helm', type: 'Head', defense: 32 },
      { id: 'rathalos-mail', name: 'Rathalos Mail', type: 'Chest', defense: 32 },
      { id: 'rathalos-vambraces', name: 'Rathalos Vambraces', type: 'Arms', defense: 32 },
      { id: 'rathalos-coil', name: 'Rathalos Coil', type: 'Waist', defense: 32 },
      { id: 'rathalos-greaves', name: 'Rathalos Greaves', type: 'Legs', defense: 32 }
    ],
    setBonuses: [
      'Attack Boost Lv2 (2 pieces)',
      'Weakness Exploit Lv1 (3 pieces)',
      'Critical Element (5 pieces)'
    ]
  },
  {
    id: 'odogaron',
    name: 'Odogaron Set',
    rarity: 5,
    pieces: [
      { id: 'odogaron-helm', name: 'Odogaron Helm', type: 'Head', defense: 30 },
      { id: 'odogaron-mail', name: 'Odogaron Mail', type: 'Chest', defense: 30 },
      { id: 'odogaron-vambraces', name: 'Odogaron Vambraces', type: 'Arms', defense: 30 },
      { id: 'odogaron-coil', name: 'Odogaron Coil', type: 'Waist', defense: 30 },
      { id: 'odogaron-greaves', name: 'Odogaron Greaves', type: 'Legs', defense: 30 }
    ],
    setBonuses: [
      'Critical Eye Lv2 (2 pieces)',
      'Speed Sharpening Lv1 (4 pieces)',
      'Protective Polish (5 pieces)'
    ]
  }
];

export default function ArmorPage() {
  return (
    <div className="bg-background dark:bg-background-dark min-h-screen py-8">
      <PageContainer>
        <PageHeader 
          title="Armor Database" 
          subtitle="Complete information on all armor sets in Monster Hunter Wilds"
        />
        
        <div className="mb-8">
          <div className="p-4 bg-white dark:bg-primary-900/20 rounded-lg border border-border-light dark:border-primary-800/50">
            <h2 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-3">Armor Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Link href="#low-rank" className="block p-3 bg-background dark:bg-primary-800/30 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-800/50 transition-colors">
                <h3 className="font-medium text-primary-600 dark:text-primary-400">Low Rank</h3>
                <p className="text-sm text-text-muted dark:text-text-light/50">Early game armor sets</p>
              </Link>
              <Link href="#high-rank" className="block p-3 bg-background dark:bg-primary-800/30 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-800/50 transition-colors">
                <h3 className="font-medium text-primary-600 dark:text-primary-400">High Rank</h3>
                <p className="text-sm text-text-muted dark:text-text-light/50">Mid-to-late game armor</p>
              </Link>
              <Link href="#master-rank" className="block p-3 bg-background dark:bg-primary-800/30 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-800/50 transition-colors">
                <h3 className="font-medium text-primary-600 dark:text-primary-400">Master Rank</h3>
                <p className="text-sm text-text-muted dark:text-text-light/50">Endgame armor sets</p>
              </Link>
              <Link href="#special" className="block p-3 bg-background dark:bg-primary-800/30 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-800/50 transition-colors">
                <h3 className="font-medium text-primary-600 dark:text-primary-400">Special Sets</h3>
                <p className="text-sm text-text-muted dark:text-text-light/50">Event & collaboration armor</p>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Filter controls */}
        <div className="mb-6 flex flex-wrap gap-3">
          <Button size="small" variant="primary">All Armor</Button>
          <Button size="small" variant="secondary">Rarity 5+</Button>
          <Button size="small" variant="secondary">By Defense</Button>
          <Button size="small" variant="secondary">By Skills</Button>
        </div>
        
        {/* Low Rank Sets */}
        <div id="low-rank" className="mb-10">
          <div className="flex items-center mb-6">
            <h2 className="text-2xl font-bold text-primary-600 dark:text-primary-400">Low Rank Armor Sets</h2>
            <div className="ml-3 h-0.5 flex-grow bg-primary-100 dark:bg-primary-800/50 rounded-full"></div>
          </div>
          
          <Grid cols={1} lg={2} gap={6}>
            {armorSets.filter(set => set.rarity <= 3).map(set => (
              <Card key={set.id} className="overflow-hidden">
                <div className="p-4 border-b border-border-light dark:border-primary-800/50 bg-background-light dark:bg-primary-900/30">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400">{set.name}</h3>
                    <Badge variant={set.rarity > 3 ? 'accent' : 'default'}>
                      Rarity {set.rarity}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-0">
                  <div className="p-4">
                    <h4 className="font-medium text-primary-600 dark:text-primary-400 mb-2">Set Bonuses</h4>
                    <ul className="space-y-1 text-sm">
                      {set.setBonuses.map((bonus, index) => (
                        <li key={index} className="text-text-secondary dark:text-text-light/70 flex items-center">
                          <span className="w-1 h-1 bg-primary-500 dark:bg-primary-400 rounded-full mr-2"></span>
                          {bonus}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t border-border-light dark:border-primary-800/50">
                    <h4 className="font-medium text-primary-600 dark:text-primary-400 p-4 pb-2">Armor Pieces</h4>
                    <div className="divide-y divide-border-light dark:divide-primary-800/30">
                      {set.pieces.map(piece => (
                        <Link 
                          key={piece.id} 
                          href={`/equipment/armor/${piece.id}`}
                          className="flex items-center p-3 hover:bg-background dark:hover:bg-primary-800/20 transition-colors"
                        >
                          <div className="relative w-10 h-10 bg-background-light dark:bg-primary-900/40 rounded-md overflow-hidden">
                            <ImageWithFallback
                              src={`/images/armor/${piece.id}.png`}
                              alt={piece.name}
                              fill
                              className="object-contain p-1"
                              fallbackSrc={`https://placehold.co/100x100?text=${piece.type.charAt(0)}`}
                            />
                          </div>
                          <div className="ml-3 flex-grow">
                            <div className="font-medium text-primary-600 dark:text-primary-400">{piece.name}</div>
                            <div className="text-xs text-text-muted dark:text-text-light/50">{piece.type}</div>
                          </div>
                          <div className="text-sm font-medium text-text-secondary dark:text-text-light/70">
                            Def: {piece.defense}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </div>
        
        {/* High Rank Sets */}
        <div id="high-rank" className="mb-10">
          <div className="flex items-center mb-6">
            <h2 className="text-2xl font-bold text-primary-600 dark:text-primary-400">High Rank Armor Sets</h2>
            <div className="ml-3 h-0.5 flex-grow bg-primary-100 dark:bg-primary-800/50 rounded-full"></div>
          </div>
          
          <Grid cols={1} lg={2} gap={6}>
            {armorSets.filter(set => set.rarity > 3).map(set => (
              <Card key={set.id} className="overflow-hidden">
                <div className="p-4 border-b border-border-light dark:border-primary-800/50 bg-background-light dark:bg-primary-900/30">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400">{set.name}</h3>
                    <Badge variant={set.rarity > 3 ? 'accent' : 'default'}>
                      Rarity {set.rarity}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-0">
                  <div className="p-4">
                    <h4 className="font-medium text-primary-600 dark:text-primary-400 mb-2">Set Bonuses</h4>
                    <ul className="space-y-1 text-sm">
                      {set.setBonuses.map((bonus, index) => (
                        <li key={index} className="text-text-secondary dark:text-text-light/70 flex items-center">
                          <span className="w-1 h-1 bg-primary-500 dark:bg-primary-400 rounded-full mr-2"></span>
                          {bonus}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t border-border-light dark:border-primary-800/50">
                    <h4 className="font-medium text-primary-600 dark:text-primary-400 p-4 pb-2">Armor Pieces</h4>
                    <div className="divide-y divide-border-light dark:divide-primary-800/30">
                      {set.pieces.map(piece => (
                        <Link 
                          key={piece.id} 
                          href={`/equipment/armor/${piece.id}`}
                          className="flex items-center p-3 hover:bg-background dark:hover:bg-primary-800/20 transition-colors"
                        >
                          <div className="relative w-10 h-10 bg-background-light dark:bg-primary-900/40 rounded-md overflow-hidden">
                            <ImageWithFallback
                              src={`/images/armor/${piece.id}.png`}
                              alt={piece.name}
                              fill
                              className="object-contain p-1"
                              fallbackSrc={`https://placehold.co/100x100?text=${piece.type.charAt(0)}`}
                            />
                          </div>
                          <div className="ml-3 flex-grow">
                            <div className="font-medium text-primary-600 dark:text-primary-400">{piece.name}</div>
                            <div className="text-xs text-text-muted dark:text-text-light/50">{piece.type}</div>
                          </div>
                          <div className="text-sm font-medium text-text-secondary dark:text-text-light/70">
                            Def: {piece.defense}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </div>
      </PageContainer>
    </div>
  );
}