import React from 'react';
import Link from 'next/link';
import { PageContainer, PageHeader, Grid, Card, CardContent, Badge } from '../components/ui';
import ImageWithFallback from '../components/ImageWithFallback';
import { monsters } from '@/lib/data/monsters';

export const metadata = {
  title: 'Monster Database - Monster Hunter Wilds Wiki',
  description: 'Comprehensive information about all monsters in Monster Hunter Wilds',
};

export default function MonstersPage() {
  return (
    <div className="bg-background dark:bg-background-dark min-h-screen py-8">
      <PageContainer>
        <PageHeader 
          title="Monster Database" 
          subtitle="Comprehensive information about all monsters in Monster Hunter Wilds"
        />
        
        <div className="mb-8 p-4 bg-white dark:bg-primary-900/20 rounded-lg border border-border-light dark:border-primary-800/50">
          <h2 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-3">Monster Categories</h2>
          <div className="flex flex-wrap gap-2">
            <Badge variant="default" className="px-3 py-1">Flying Wyverns</Badge>
            <Badge variant="default" className="px-3 py-1">Fanged Wyverns</Badge>
            <Badge variant="default" className="px-3 py-1">Elder Dragons</Badge>
            <Badge variant="default" className="px-3 py-1">Brute Wyverns</Badge>
            <Badge variant="default" className="px-3 py-1">Piscine Wyverns</Badge>
            <Badge variant="default" className="px-3 py-1">Fanged Beasts</Badge>
            <Badge variant="default" className="px-3 py-1">Bird Wyverns</Badge>
          </div>
        </div>
        
        <Grid cols={1} md={2} lg={3} gap={6}>
          {monsters.map(monster => (
            <Link key={monster.id} href={`/monsters/${monster.id}`}>
              <Card className="h-full">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <ImageWithFallback
                    src={`/images/monsters/${monster.id}/banner.jpg`}
                    alt={monster.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    fallbackSrc={`https://placehold.co/600x400?text=${monster.name}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <div className="flex items-center mb-1">
                      <Badge variant={monster.threatLevel > 3 ? "danger" : "warning"} className="mr-2">
                        {monster.threatLevel} ★
                      </Badge>
                      <span className="text-sm text-white">{monster.type}</span>
                    </div>
                  </div>
                </div>
                
                <CardContent>
                  <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2">{monster.name}</h3>
                  <p className="text-text-secondary dark:text-text-light/70 text-sm line-clamp-3">
                    {monster.description.substring(0, 120)}...
                  </p>
                  
                  <div className="mt-3 flex flex-wrap gap-1">
                    {monster.elements.map(element => (
                      <Badge key={element} variant="info" className="text-xs">
                        {element}
                      </Badge>
                    ))}
                    {monster.ailments.map(ailment => (
                      <Badge key={ailment} variant="warning" className="text-xs">
                        {ailment}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </Grid>
      </PageContainer>
    </div>
  );
}