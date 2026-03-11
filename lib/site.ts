export const siteConfig = {
  brandName: 'Jae Pizzas',
  instagramUrl: 'https://instagram.com/jaepizzas',
  whatsappNumber: '5511999999999',
  contactEmail: 'contato@jaepizzas.com',
  address: 'Rua das Palmeiras, 240 - Centro, Sao Paulo - SP',
} as const;

export function buildWhatsAppLink(message: string) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodedMessage}`;
}

export type PizzaSizeId = 'grande';

export type PizzaSize = {
  id: PizzaSizeId;
  slices: number;
};

export type PizzaCategoryId =
  | 'classics'
  | 'chicken-and-meat'
  | 'specials'
  | 'fish-and-vegetarian';

export type PizzaCategory = {
  id: PizzaCategoryId;
  order: number;
};

export type PizzaMenuItem = {
  slug: string;
  category: PizzaCategoryId;
  sizesAvailable: PizzaSizeId[];
  price: number;
  featured: boolean;
  image: string;
};

export type RestaurantPromo = {
  highlightTag: string;
};

export type RestaurantServiceInfo = {
  delivery: boolean;
  pickup: boolean;
};

export type RestaurantMenu = {
  brand: string;
  currency: 'BRL';
  defaultLanguage: 'pt-BR';
  sizes: PizzaSize[];
  categories: PizzaCategory[];
  pizzas: PizzaMenuItem[];
  featuredPizzaSlugs: string[];
  promo: RestaurantPromo;
  serviceInfo: RestaurantServiceInfo;
};

export const jaEhPizzaMenu: RestaurantMenu = {
  brand: 'Jae Pizzas',
  currency: 'BRL',
  defaultLanguage: 'pt-BR',
  sizes: [
    {
      id: 'grande',
      slices: 8,
    },
  ],
  categories: [
    { id: 'classics', order: 1 },
    { id: 'chicken-and-meat', order: 2 },
    { id: 'specials', order: 3 },
    { id: 'fish-and-vegetarian', order: 4 },
  ],
  featuredPizzaSlugs: [
    'calabresa',
    'frango-com-catupiry',
    'portuguesa',
    'quatro-queijos',
    'peperoni',
    'marguerita',
  ],
  promo: {
    highlightTag: '8 fatias',
  },
  serviceInfo: {
    delivery: true,
    pickup: true,
  },
  pizzas: [
    { slug: 'mussarela', category: 'classics', sizesAvailable: ['grande'], price: 43.9, featured: false, image: '/images/pizza/mussarela.jpg' },
    { slug: 'calabresa', category: 'classics', sizesAvailable: ['grande'], price: 46.9, featured: true, image: '/calabresa.png' },
    { slug: 'calabresa-com-cebola', category: 'classics', sizesAvailable: ['grande'], price: 48.9, featured: false, image: '/images/pizza/calabresa-com-cebola.jpg' },
    { slug: 'portuguesa', category: 'classics', sizesAvailable: ['grande'], price: 52.9, featured: true, image: '/images/pizza/portuguesa.jpg' },
    { slug: 'marguerita', category: 'classics', sizesAvailable: ['grande'], price: 47.9, featured: true, image: '/images/pizza/marguerita.jpg' },
    { slug: 'napolitana', category: 'classics', sizesAvailable: ['grande'], price: 46.9, featured: false, image: '/images/pizza/napolitana.jpg' },
    { slug: 'presunto', category: 'classics', sizesAvailable: ['grande'], price: 44.9, featured: false, image: '/images/pizza/presunto.jpg' },
    { slug: 'bacon', category: 'classics', sizesAvailable: ['grande'], price: 49.9, featured: false, image: '/images/pizza/bacon.jpg' },
    { slug: 'frango', category: 'chicken-and-meat', sizesAvailable: ['grande'], price: 47.9, featured: false, image: '/images/pizza/frango.jpg' },
    { slug: 'frango-com-catupiry', category: 'chicken-and-meat', sizesAvailable: ['grande'], price: 53.9, featured: true, image: '/images/pizza/frango-com-catupiry.jpg' },
    { slug: 'frango-com-bacon', category: 'chicken-and-meat', sizesAvailable: ['grande'], price: 54.9, featured: false, image: '/images/pizza/frango-com-bacon.jpg' },
    { slug: 'peperoni', category: 'chicken-and-meat', sizesAvailable: ['grande'], price: 55.9, featured: true, image: '/images/pizza/peperoni.jpg' },
    { slug: 'lombo', category: 'chicken-and-meat', sizesAvailable: ['grande'], price: 50.9, featured: false, image: '/images/pizza/lombo.jpg' },
    { slug: 'lombo-com-catupiry', category: 'chicken-and-meat', sizesAvailable: ['grande'], price: 54.9, featured: false, image: '/images/pizza/lombo-com-catupiry.jpg' },
    { slug: 'quatro-queijos', category: 'specials', sizesAvailable: ['grande'], price: 57.9, featured: true, image: '/images/pizza/quatro-queijos.jpg' },
    { slug: 'cinco-queijos', category: 'specials', sizesAvailable: ['grande'], price: 61.9, featured: false, image: '/images/pizza/cinco-queijos.jpg' },
    { slug: 'moda-da-casa', category: 'specials', sizesAvailable: ['grande'], price: 58.9, featured: false, image: '/images/pizza/moda-da-casa.jpg' },
    { slug: 'paulista', category: 'specials', sizesAvailable: ['grande'], price: 55.9, featured: false, image: '/images/pizza/paulista.jpg' },
    { slug: 'brasileira', category: 'specials', sizesAvailable: ['grande'], price: 56.9, featured: false, image: '/images/pizza/brasileira.jpg' },
    { slug: 'baiana', category: 'specials', sizesAvailable: ['grande'], price: 54.9, featured: false, image: '/images/pizza/baiana.jpg' },
    { slug: 'toscana', category: 'specials', sizesAvailable: ['grande'], price: 52.9, featured: false, image: '/images/pizza/toscana.jpg' },
    { slug: 'atum', category: 'fish-and-vegetarian', sizesAvailable: ['grande'], price: 51.9, featured: false, image: '/images/pizza/atum.jpg' },
    { slug: 'atum-com-cebola', category: 'fish-and-vegetarian', sizesAvailable: ['grande'], price: 52.9, featured: false, image: '/images/pizza/atum-com-cebola.jpg' },
    { slug: 'atum-com-bacon', category: 'fish-and-vegetarian', sizesAvailable: ['grande'], price: 55.9, featured: false, image: '/images/pizza/atum-com-bacon.jpg' },
    { slug: 'palmito', category: 'fish-and-vegetarian', sizesAvailable: ['grande'], price: 49.9, featured: false, image: '/images/pizza/palmito.jpg' },
    { slug: 'palmito-com-catupiry', category: 'fish-and-vegetarian', sizesAvailable: ['grande'], price: 53.9, featured: false, image: '/images/pizza/palmito-com-catupiry.jpg' },
  ],
};

export function getPizzaBySlug(slug: string) {
  return jaEhPizzaMenu.pizzas.find((pizza) => pizza.slug === slug) ?? null;
}

export function getFeaturedPizzas() {
  return jaEhPizzaMenu.featuredPizzaSlugs
    .map((slug) => getPizzaBySlug(slug))
    .filter((pizza): pizza is PizzaMenuItem => pizza !== null);
}

export function getOrderedMenuCategories() {
  return [...jaEhPizzaMenu.categories].sort((left, right) => left.order - right.order);
}

export function getPizzasByCategory(categoryId: PizzaCategoryId) {
  return jaEhPizzaMenu.pizzas.filter((pizza) => pizza.category === categoryId);
}
