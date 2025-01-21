import React from 'react';
import { Users, GraduationCap, Trophy, Globe } from 'lucide-react';

const stats = [
  {
    id: 1,
    label: "Étudiants",
    value: "15,000+",
    icon: Users
  },
  {
    id: 2,
    label: "Diplômés par an",
    value: "3,500+",
    icon: GraduationCap
  },
  {
    id: 3,
    label: "Prix d'excellence",
    value: "250+",
    icon: Trophy
  },
  {
    id: 4,
    label: "Partenaires internationaux",
    value: "100+",
    icon: Globe
  }
];

export function StatsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <stat.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
              <div className="mt-1 text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}