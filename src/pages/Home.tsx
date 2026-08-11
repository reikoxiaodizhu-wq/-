import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import CardGrid from '../components/CardGrid';
import Timeline from '../components/Timeline';
import Featured from '../components/Featured';
import BackToTop from '../components/BackToTop';
import { restaurants } from '../data/restaurants';
import { motion } from 'framer-motion';

export default function Home() {
  const [query, setQuery] = useState('');
  const [country, setCountry] = useState<string | 'All'>('All');
  const [filtered, setFiltered] = useState(restaurants);

  useEffect(() => {
    const q = query.trim().toLowerCase();
    setFiltered(
      restaurants.filter((r) => {
        const matchesCountry = country === 'All' || r.country === country;
        const matchesQuery =
          !q ||
          r.name.toLowerCase().includes(q) ||
          r.city.toLowerCase().includes(q) ||
          (r.tags || []).some((t) => t.toLowerCase().includes(q));
        return matchesCountry && matchesQuery;
      })
    );
  }, [query, country]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-[1100px] mx-auto px-4 sm:px-6">
        <Hero />
        <section id="restaurant-news" className="py-10">
          <motion.h2 initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-semibold mb-4">
            Restaurant News
          </motion.h2>
          <div className="mb-6">
            <SearchBar
              value={query}
              onChange={setQuery}
              country={country}
              onCountryChange={(c) => setCountry(c)}
            />
          </div>
          <CardGrid items={filtered} />
        </section>

        <section id="new-resources" className="py-10">
          <h2 className="text-2xl font-semibold mb-4">New Resources</h2>
          <Featured />
        </section>

        <section id="resource-updates" className="py-10">
          <h2 className="text-2xl font-semibold mb-4">Resource Updates</h2>
          <Timeline />
        </section>

        <section id="featured-restaurants" className="py-10">
          <h2 className="text-2xl font-semibold mb-4">Featured Restaurants</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Magazine-style alternating layout below.</p>
          <Featured large />
        </section>

        <section id="closure-notice" className="py-10">
          <div className="bg-red-600 text-white px-6 py-8 rounded-lg">
            <h3 className="text-xl font-bold">PERMANENTLY CLOSED</h3>
            <p className="mt-2">Las Iguanas Leeds / Royal Festival Hall / York / Glasgow / Edinburgh</p>
          </div>
        </section>

      </main>

      <BackToTop />
    </div>
  );
}
