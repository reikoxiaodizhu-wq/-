import React from 'react';
import { motion } from 'framer-motion';

export default function Featured({ large }: { large?: boolean }) {
  const items = [
    {
      title: 'Tuan Yuan Restaurant Firenze',
      title_cn: '团圆餐厅（佛罗伦萨）',
      subtitle: 'Menu A EUR12 — Menu B EUR16',
      subtitle_cn: 'A 套餐 EUR12 — B 套餐 EUR16',
      image: 'https://source.unsplash.com/1200x800/?restaurant,italy,interior'
    },
    {
      title: 'Moki Japanese Restaurant Rome',
      title_cn: 'Moki 日式餐厅（罗马）',
      subtitle: 'EUR19.9 Buffet — Water Included',
      subtitle_cn: 'EUR19.9 自助 — 包含矿泉水',
      image: 'https://source.unsplash.com/1200x800/?japanese,restaurant'
    }
  ];

  return (
    <div className={large ? 'space-y-8' : 'grid grid-cols-2 gap-4'}>
      {items.map((it) => (
        <motion.div key={it.title} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} className={large ? 'flex gap-6 items-center' : ''}>
          <img src={it.image} alt={it.title} className={large ? 'w-1/2 rounded-lg object-cover h-56' : 'w-full h-36 object-cover rounded-md'} />
          <div className={large ? 'w-1/2' : ''}>
            <h3 className="text-lg font-semibold">{it.title}</h3>
            <div className="text-sm text-slate-500 dark:text-slate-400">{it.title_cn}</div>
            <p className="text-sm text-slate-500 dark:text-slate-400">{it.subtitle}</p>
            <div className="text-sm text-slate-500 dark:text-slate-400">{it.subtitle_cn}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
