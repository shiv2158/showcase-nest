import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl md:text-2xl mb-8">I'm a passionate developer creating amazing web experiences</p>
        <Button variant="secondary" size="lg">
          View My Work
        </Button>
      </div>
    </section>
  );
};

export default Hero;