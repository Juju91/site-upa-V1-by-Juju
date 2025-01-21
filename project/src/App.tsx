import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { NewsSection } from './components/home/NewsSection';
import { StatsSection } from './components/home/StatsSection';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <StatsSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;