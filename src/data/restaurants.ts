export type Country = 'Austria' | 'Germany' | 'Hungary' | 'Italy' | 'Poland';

export type Restaurant = {
  id: string;
  name: string;
  city: string;
  country: Country;
  status?: 'Open' | 'Holiday' | 'Update' | 'Permanently Closed';
  note?: string;
  price?: string;
  tags?: string[];
  imageQuery?: string;
};

export const restaurants: Restaurant[] = [
  {
    id: 'akakiko',
    name: 'Akakiko',
    city: 'Vienna',
    country: 'Austria',
    status: 'Holiday',
    note: 'Temporary closure for approximately one month',
    tags: ['Japanese', 'Buffet'],
    price: 'EUR 18',
    imageQuery: 'Japanese restaurant interior'
  },
  {
    id: 'seoul-restaurant',
    name: 'Seoul Restaurant',
    city: 'Berlin',
    country: 'Germany',
    status: 'Holiday',
    note: 'Closed until 31 August 2026',
    tags: ['Korean'],
    price: 'EUR 14',
    imageQuery: 'Korean cuisine restaurant'
  },
  {
    id: 'lezaley-zurich',
    name: 'Restaurant le Dézaley Zurich',
    city: 'Zurich',
    country: 'Poland', // sample mismatch to show filtering (you can change)
    status: 'Update',
    note: 'Lunch groups only — Closed every Sunday',
    tags: ['Swiss'],
    price: 'EUR 20',
    imageQuery: 'restaurant dining group'
  },
  {
    id: 'kellys-wok',
    name: "Kelly's Wok",
    city: 'Freiburg',
    country: 'Germany',
    status: 'Open',
    note: 'Buffet — Lunch & Dinner',
    price: 'EUR 18',
    tags: ['Chinese', 'Group menu'],
    imageQuery: 'Chinese cuisine buffet'
  },
  {
    id: 'babida',
    name: 'Babida Restaurant',
    city: 'Rome',
    country: 'Italy',
    status: 'Open',
    note: 'Korean Cuisine — Cash Payment Required',
    price: 'EUR 14',
    tags: ['Korean'],
    imageQuery: 'Korean cuisine'
  },
  {
    id: 'isst-balance',
    name: 'Isst Balance Freiburg',
    city: 'Freiburg',
    country: 'Germany',
    status: 'Open',
    note: 'Chinese Group Menu',
    price: 'EUR 20',
    tags: ['Chinese', 'Group menu'],
    imageQuery: 'restaurant group dining'
  },
  {
    id: 'tuan-yuan',
    name: 'Tuan Yuan Restaurant Firenze',
    city: 'Florence',
    country: 'Italy',
    status: 'Open',
    note: 'Menu A EUR12 — Menu B EUR16',
    price: 'EUR 12',
    tags: ['Chinese'],
    imageQuery: 'Italian restaurant interior'
  },
  {
    id: 'moki',
    name: 'Moki Japanese Restaurant Rome',
    city: 'Rome',
    country: 'Italy',
    status: 'Open',
    note: 'EUR19.9 Buffet — Water Included',
    price: 'EUR 19.9',
    tags: ['Japanese', 'Buffet'],
    imageQuery: 'Japanese buffet'
  },
  {
    id: 'las-iguana-leeds',
    name: 'Las Iguanas Leeds',
    city: 'Leeds',
    country: 'Poland',
    status: 'Permanently Closed',
    note: 'PERMANENTLY CLOSED',
    tags: ['Closure'],
    price: '',
    imageQuery: 'closed restaurant sign'
  }
];
