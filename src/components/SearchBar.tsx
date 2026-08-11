import React from 'react';
import { Country } from '../data/restaurants';

type Props = {
  value: string;
  onChange: (v: string) => void;
  country: string | 'All';
  onCountryChange: (c: string | 'All') => void;
};

const COUNTRIES: (Country | 'All')[] = ['All', 'Austria', 'Germany', 'Hungary', 'Italy', 'Poland'];

export default function SearchBar({ value, onChange, country, onCountryChange }: Props) {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search restaurants, city or tags..."
        className="flex-1 px-4 py-3 border rounded-md focus:outline-none focus:ring"
      />
      <select
        value={country}
        onChange={(e) => onCountryChange(e.target.value)}
        className="w-44 px-3 py-2 border rounded-md bg-white dark:bg-slate-800"
      >
        {COUNTRIES.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  );
}
