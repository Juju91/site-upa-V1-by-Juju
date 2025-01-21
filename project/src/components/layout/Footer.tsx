import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Université Excellence</h3>
            <p className="text-gray-400">
              Une institution d'excellence dédiée à former les leaders de demain.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span className="text-gray-400">contact@universite.fr</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span className="text-gray-400">+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span className="text-gray-400">123 Rue de l'Université, Paris</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-white">À propos</a></li>
              <li><a href="/programs" className="text-gray-400 hover:text-white">Formations</a></li>
              <li><a href="/admission" className="text-gray-400 hover:text-white">Admission</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Mentions Légales</h3>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-gray-400 hover:text-white">Politique de confidentialité</a></li>
              <li><a href="/terms" className="text-gray-400 hover:text-white">Conditions d'utilisation</a></li>
              <li><a href="/accessibility" className="text-gray-400 hover:text-white">Accessibilité</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Université Excellence. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}