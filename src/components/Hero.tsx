import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  // Unsplash source for European city nightscape
  const src = 'https://source.unsplash.com/1600x900/?europe,city,night,restaurant';

  return (
    <section id="hero" className="mt-16 relative">
      <div
        className="hero-bg h-[60vh] md:h-[72vh] rounded-lg overflow-hidden flex items-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.35)), url(${src})`
        }}
      >
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 w-full">
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-white py-12">
            <h1 className="text-3xl sm:text-5xl font-bold">Far East Europe Restaurant Monthly Report</h1>
            <p className="mt-3 text-lg sm:text-xl opacity-90">远海欧洲餐厅资源月刊 — August 2026</p>
            <div className="mt-6">
              <a href="#restaurant-news" className="inline-block bg-white text-slate-900 px-5 py-3 rounded-md font-medium">View Monthly Report</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
