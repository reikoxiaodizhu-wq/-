import React from 'react';
import { motion } from 'framer-motion';

export default function Timeline() {
  const updates = [
    { date: '2026-08-01', title: 'Warsaw Resource Update', details: 'New set of menus for group bookings' },
    { date: '2026-08-03', title: 'Restauracja Cesarski Smok', details: 'Prices updated: EUR13 / EUR15 / EUR18' },
    { date: '2026-08-15', title: 'Rome Kimroof', details: 'Temporary closure 20-31 August' }
  ];

  return (
    <div className="space-y-6">
      {updates.map((u) => (
        <motion.div key={u.date} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="p-4 border rounded-md bg-white dark:bg-slate-800">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold">{u.title}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">{u.details}</p>
            </div>
            <div className="text-xs text-slate-400">{u.date}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
