import React from 'react';

const news = [
  {
    id: 1,
    title: "Journée Portes Ouvertes 2024",
    date: "15 Mars 2024",
    description: "Venez découvrir notre campus et rencontrer nos enseignants lors de notre journée portes ouvertes annuelle.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
  },
  {
    id: 2,
    title: "Nouveau Programme d'Excellence",
    date: "10 Mars 2024",
    description: "Lancement d'un nouveau programme d'excellence en partenariat avec des entreprises leaders.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655"
  },
  {
    id: 3,
    title: "Conférence Internationale",
    date: "5 Mars 2024",
    description: "Symposium international sur l'innovation et le développement durable.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87"
  }
];

export function NewsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Actualités & Événements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-blue-600 text-sm font-medium">{item.date}</span>
                <h3 className="mt-2 text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
                <button className="mt-4 text-blue-600 font-medium hover:text-blue-700">
                  En savoir plus →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}