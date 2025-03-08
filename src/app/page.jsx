import React from 'react';
import Link from 'next/link';
import { Button, Card, CardContent, Grid, Badge } from './components/ui';
import ImageWithFallback from './components/ImageWithFallback';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background dark:bg-background-dark">
      {/* Hero Section */}
      <section className="relative h-96 md:h-screen max-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary-900/60 dark:bg-primary-900/70 z-10"></div>
          <div className="relative h-full w-full">
            <ImageWithFallback
              src="/images/home-banner.jpg"
              alt="Monster Hunter Wilds"
              fill
              className="object-cover"
              priority="true"
              fallbackSrc="https://placehold.co/1920x1080?text=Monster+Hunter+Wilds"
            />
          </div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Monster Hunter Wilds Wiki
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
            Your comprehensive guide to weapons, armor, monsters, and materials
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              href="/builds" 
              variant="primary"
              size="large"
              className="font-bold"
            >
              Build Guides
            </Button>
            <Button 
              href="/monsters" 
              variant="outline"
              size="large"
              className="font-bold text-white border-white hover:bg-white/20 hover:text-white"
            >
              Monster Database
            </Button>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-primary-900/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-600 dark:text-primary-400 text-center mb-12">
            Everything You Need to Hunt
          </h2>
          
          <Grid cols={1} md={3} gap={8}>
            <Card className="text-center h-full">
              <CardContent>
                <div className="w-16 h-16 bg-primary-500 dark:bg-primary-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2">Build Progression</h3>
                <p className="text-text-secondary dark:text-text-light/70 mb-6">
                  Follow our build trees to optimize your equipment at every stage of the game.
                </p>
                
                <Button 
                  href="/builds" 
                  variant="text"
                  className="font-bold"
                >
                  View Builds
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center h-full">
              <CardContent>
                <div className="w-16 h-16 bg-primary-500 dark:bg-primary-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2">Monster Guides</h3>
                <p className="text-text-secondary dark:text-text-light/70 mb-6">
                  Learn how to counter every monster's moves with our detailed guides and GIFs.
                </p>
                
                <Button 
                  href="/monsters" 
                  variant="text"
                  className="font-bold"
                >
                  View Monsters
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center h-full">
              <CardContent>
                <div className="w-16 h-16 bg-primary-500 dark:bg-primary-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2">Material Database</h3>
                <p className="text-text-secondary dark:text-text-light/70 mb-6">
                  Find out how to obtain every material and what equipment you can craft with it.
                </p>
                
                <Button 
                  href="/materials" 
                  variant="text"
                  className="font-bold"
                >
                  View Materials
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </div>
      </section>
      
      {/* Featured Content Section */}
      <section className="py-16 bg-background dark:bg-background-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-600 dark:text-primary-400 text-center mb-12">
            Featured Content
          </h2>
          
          <Grid cols={1} md={2} gap={8}>
            {/* Featured Monster */}
            <Card className="overflow-hidden h-full">
              <div className="relative h-64">
                <ImageWithFallback
                  src="/images/monsters/rathalos/banner.jpg"
                  alt="Rathalos"
                  fill
                  className="object-cover"
                  fallbackSrc="https://placehold.co/800x400?text=Rathalos"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <Badge variant="accent" className="mb-2">Featured Monster</Badge>
                  <h3 className="text-2xl font-bold text-white">Rathalos</h3>
                </div>
              </div>
              
              <CardContent>
                <p className="text-text-secondary dark:text-text-light/70 mb-4">
                  Known as the "King of the Skies," this fearsome wyvern breathes deadly flames and attacks with poisonous talons.
                </p>
                <Button 
                  href="/monsters/rathalos" 
                  variant="primary"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
            
            {/* Featured Build */}
            <Card className="overflow-hidden h-full">
              <div className="relative h-64">
                <ImageWithFallback
                  src="/images/builds/featured-build.jpg"
                  alt="Featured Build"
                  fill
                  className="object-cover"
                  fallbackSrc="https://placehold.co/800x400?text=Early+Game+Build"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <Badge variant="accent" className="mb-2">Featured Build</Badge>
                  <h3 className="text-2xl font-bold text-white">Early Game Hunter</h3>
                </div>
              </div>
              
              <CardContent>
                <p className="text-text-secondary dark:text-text-light/70 mb-4">
                  Get started with this beginner-friendly build that will help you efficiently progress through the early stages of the game.
                </p>
                <Button 
                  href="/builds/early-game" 
                  variant="primary"
                >
                  View Build
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-16 bg-primary-500 dark:bg-primary-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Hunting?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Explore our comprehensive database and become a master hunter in Monster Hunter Wilds!
          </p>
          <Button 
            href="/builds" 
            variant="secondary"
            size="large"
            className="bg-white text-primary-600 hover:bg-white/90 font-bold"
          >
            Get Started
          </Button>
        </div>
      </section>
    </div>
  );
}