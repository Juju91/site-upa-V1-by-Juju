import React from 'react';
import { Menu, Search, ChevronDown } from 'lucide-react';
import { NavLink } from './NavLink';

export function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img src="/logo.svg" alt="Université Logo" className="h-12 w-auto" />
            <div className="ml-4">
              <h1 className="text-2xl font-bold text-gray-900">Université Excellence</h1>
              <p className="text-sm text-gray-600">Façonnons l'avenir ensemble</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/">Accueil</NavLink>
            <NavLink href="/about">À propos</NavLink>
            <NavLink href="/programs">Formations</NavLink>
            <NavLink href="/admission">Admission</NavLink>
            <NavLink href="/research">Recherche</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <button className="md:hidden">
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}