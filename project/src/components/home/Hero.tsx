import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-blue-900 text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f"
          className="w-full h-full object-cover mix-blend-overlay"
          alt="University Campus"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Bienvenue à l'Université Excellence
          </h1>
          <p className="mt-6 text-xl leading-8">
            Découvrez une éducation d'excellence, une recherche innovante et un environnement 
            stimulant pour façonner votre avenir.
          </p>
          <div className="mt-10 flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2">
              Postuler maintenant
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-medium">
              Télécharger la brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}