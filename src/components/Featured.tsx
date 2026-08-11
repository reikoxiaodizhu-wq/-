import React from 'react';
import { motion } from 'framer-motion';

export default function Featured({ large }: { large?: boolean }) {
  const items = [
    {
      title: 'Tuan Yuan Restaurant Firenze',
      subtitle: 'Menu A EUR12 — Menu B EUR16',
      image: 'https://source.unsplash.com/1200x800/?restaurant,italy,interior'
    },
    {
      title: 'Moki Japanese Restaurant Rome',
      subtitle: 'EUR19.9 Buffet — Water Included',
      image: 'https://source.unsplash.com/1200x800/?japanese,restaurant'
    }
  ];

  return (
    <div className={large ? 'space-y-8' : 'grid grid-cols-2 gap-4'}>
      {items.map((it, idx) => (
        <motion.div key={it.title} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} className={large ? 'flex gap-6 items-center' : ''}>
          <img src={it.image} alt={it.title} className={large ? 'w-1/2 rounded-lg object-cover h-56' : 'w-full h-36 object-cover rounded-md'} />
          <div className={large ? 'w-1/2' : ''}>
            <h3 className="text-lg font-semibold">{it.title}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">{it.subtitle}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
