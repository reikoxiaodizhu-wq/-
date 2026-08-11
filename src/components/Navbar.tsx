import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const MENU = [
  { id: 'restaurant-news', label: 'Restaurant News' },
  { id: 'new-resources', label: 'New Resources' },
  { id: 'resource-updates', label: 'Resource Updates' },
  { id: 'featured-restaurants', label: 'Featured Restaurants' },
  { id: 'closure-notice', label: 'Closure Notice' }
];

export default function Navbar() {
  const [active, setActive] = useState('restaurant-news');

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );
    MENU.forEach((m) => {
      const el = document.getElementById(m.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-sm dark:bg-slate-900/80 border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <a href="#hero" className="font-semibold text-lg">Far East Europe Restaurant Monthly Report</a>

        <nav className="hidden md:flex gap-6 items-center">
          {MENU.map((m) => (
            <a
              key={m.id}
              href={`#${m.id}`}
              className={`text-sm hover:text-slate-900 dark:hover:text-white ${active === m.id ? 'font-semibold underline' : 'text-slate-600 dark:text-slate-400'}`}
            >
              {m.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button className="p-2 text-slate-700 dark:text-slate-200">Menu</button>
        </div>
      </div>
    </header>
  );
}
