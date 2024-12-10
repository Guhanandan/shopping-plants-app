import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1470058869958-2a77ade41c02?auto=format&fit=crop&w=2000&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)'
        }}
      />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Welcome to PlantHaven
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mb-8">
          Discover our carefully curated collection of beautiful plants to bring life and nature into your space.
        </p>
        <Link
          to="/products"
          className="inline-flex items-center px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg text-lg transition-colors duration-200"
        >
          Get Started
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}