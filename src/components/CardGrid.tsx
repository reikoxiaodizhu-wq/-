import React from 'react';
import { Restaurant } from '../data/restaurants';
import { motion } from 'framer-motion';

function unsplashFor(q?: string, id?: string) {
  return `https://source.unsplash.com/600x400/?${encodeURIComponent(q || 'restaurant')}&sig=${id}`;
}

export default function CardGrid({ items }: { items: Restaurant[] }) {
  if (items.length === 0) {
    return <div className="text-slate-500">No restaurants found.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {items.map((r) => (
        <motion.article key={r.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden card-mag">
          <div className="flex flex-col sm:flex-row">
            <img
              src={unsplashFor(r.imageQuery, r.id)}
              alt={r.name}
              className="w-full sm:w-48 h-40 object-cover"
            />
            <div className="p-4 flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className={`text-lg font-semibold ${r.status === 'Permanently Closed' ? 'line-through' : ''}`}>{r.name}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{r.city} • {r.country}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">{r.price}</div>
                  <div className="text-xs mt-1 text-slate-500 dark:text-slate-400">{r.status}</div>
                </div>
              </div>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{r.note}</p>
              <div className="mt-3 flex gap-2 flex-wrap">
                {(r.tags || []).map((t) => (
                  <span key={t} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded-md">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
