export type Country = 'Austria' | 'Germany' | 'Hungary' | 'Italy' | 'Poland';

export type Restaurant = {
  id: string;
  name: string; // English name
  chineseName?: string; // 中文名
  city: string;
  country: Country;
  status?: 'Open' | 'Holiday' | 'Update' | 'Permanently Closed';
  note?: string; // English note
  note_cn?: string; // 中文说明
  price?: string;
  tags?: string[];
  imageQuery?: string;
};

export const restaurants: Restaurant[] = [
  {
    id: 'akakiko',
    name: 'Akakiko',
    chineseName: 'Akakiko',
    city: 'Vienna',
    country: 'Austria',
    status: 'Holiday',
    note: 'Temporary closure for approximately one month',
    note_cn: '临时停业，约一个月',
    tags: ['Japanese', 'Buffet'],
    price: 'EUR 18',
    imageQuery: 'Japanese restaurant interior'
  },
  {
    id: 'seoul-restaurant',
    name: 'Seoul Restaurant',
    chineseName: '首尔餐厅',
    city: 'Berlin',
    country: 'Germany',
    status: 'Holiday',
    note: 'Closed until 31 August 2026',
    note_cn: '关闭至 2026 年 8 月 31 日',
    tags: ['Korean'],
    price: 'EUR 14',
    imageQuery: 'Korean cuisine restaurant'
  },
  {
    id: 'lezaley-zurich',
    name: 'Restaurant le Dézaley Zurich',
    chineseName: '瑞士 Dézaley 餐厅 (苏黎世)',
    city: 'Zurich',
    country: 'Austria',
    status: 'Update',
    note: 'Lunch groups only — Closed every Sunday',
    note_cn: '仅接受午餐团体预订 — 每周日休息',
    tags: ['Swiss'],
    price: 'EUR 20',
    imageQuery: 'restaurant dining group'
  },
  {
    id: 'kellys-wok',
    name: "Kelly's Wok",
    chineseName: '凯利炒锅',
    city: 'Freiburg',
    country: 'Germany',
    status: 'Open',
    note: 'Buffet — Lunch & Dinner',
    note_cn: '自助餐 — 午餐与晚餐',
    price: 'EUR 18',
    tags: ['Chinese', 'Buffet'],
    imageQuery: 'Chinese buffet restaurant'
  },
  {
    id: 'babida',
    name: 'Babida Restaurant',
    chineseName: 'Babida 餐厅',
    city: 'Rome',
    country: 'Italy',
    status: 'Open',
    note: 'Korean Cuisine — Cash Payment Required',
    note_cn: '韩式料理 — 仅支持现金支付',
    price: 'EUR 14',
    tags: ['Korean'],
    imageQuery: 'Korean cuisine'
  },
  {
    id: 'isst-balance',
    name: 'Isst Balance Freiburg',
    chineseName: 'Isst Balance 弗赖堡',
    city: 'Freiburg',
    country: 'Germany',
    status: 'Open',
    note: 'Chinese Group Menu',
    note_cn: '中式团体菜单',
    price: 'EUR 20',
    tags: ['Chinese', 'Group menu'],
    imageQuery: 'restaurant group dining'
  },
  {
    id: 'rome-kimroof',
    name: 'Rome Kimroof',
    chineseName: '罗马 Kimroof',
    city: 'Rome',
    country: 'Italy',
    status: 'Holiday',
    note: 'Temporary Closure 20-31 August',
    note_cn: '临时停业：8 月 20 - 31 日',
    tags: ['Korean'],
    imageQuery: 'restaurant closed temporary'
  },
  {
    id: 'tuan-yuan',
    name: 'Tuan Yuan Restaurant Firenze',
    chineseName: '团圆餐厅（佛罗伦萨）',
    city: 'Florence',
    country: 'Italy',
    status: 'Open',
    note: 'Menu A EUR12 — Menu B EUR16',
    note_cn: 'A 套餐 EUR12 — B 套餐 EUR16',
    price: 'EUR 12 / EUR 16',
    tags: ['Chinese'],
    imageQuery: 'Italian restaurant interior'
  },
  {
    id: 'moki',
    name: 'Moki Japanese Restaurant Rome',
    chineseName: 'Moki 日式餐厅（罗马）',
    city: 'Rome',
    country: 'Italy',
    status: 'Open',
    note: 'EUR19.9 Buffet — Water Included',
    note_cn: 'EUR19.9 自助 — 包含矿泉水',
    price: 'EUR 19.9',
    tags: ['Japanese', 'Buffet'],
    imageQuery: 'Japanese buffet'
  },
  // Closure list entries
  {
    id: 'las-iguana-leeds',
    name: 'Las Iguanas Leeds',
    chineseName: 'Las Iguanas 利兹',
    city: 'Leeds',
    country: 'Poland',
    status: 'Permanently Closed',
    note: 'PERMANENTLY CLOSED',
    note_cn: '永久关闭',
    tags: ['Closure'],
    imageQuery: 'closed restaurant sign'
  },
  {
    id: 'las-iguana-royal',
    name: 'Las Iguanas Royal Festival Hall',
    chineseName: 'Las Iguanas 皇家节日大厅',
    city: 'London',
    country: 'Poland',
    status: 'Permanently Closed',
    note: 'PERMANENTLY CLOSED',
    note_cn: '永久关闭',
    tags: ['Closure'],
    imageQuery: 'closed restaurant sign'
  },
  {
    id: 'las-iguana-york',
    name: 'Las Iguanas York',
    chineseName: 'Las Iguanas 约克',
    city: 'York',
    country: 'Poland',
    status: 'Permanently Closed',
    note: 'PERMANENTLY CLOSED',
    note_cn: '永久关闭',
    tags: ['Closure'],
    imageQuery: 'closed restaurant sign'
  },
  {
    id: 'las-iguana-glasgow',
    name: 'Las Iguanas Glasgow',
    chineseName: 'Las Iguanas 格拉斯哥',
    city: 'Glasgow',
    country: 'Poland',
    status: 'Permanently Closed',
    note: 'PERMANENTLY CLOSED',
    note_cn: '永久关闭',
    tags: ['Closure'],
    imageQuery: 'closed restaurant sign'
  },
  {
    id: 'las-iguana-edinburgh',
    name: 'Las Iguanas Edinburgh',
    chineseName: 'Las Iguanas 爱丁堡',
    city: 'Edinburgh',
    country: 'Poland',
    status: 'Permanently Closed',
    note: 'PERMANENTLY CLOSED',
    note_cn: '永久关闭',
    tags: ['Closure'],
    imageQuery: 'closed restaurant sign'
  }
];
