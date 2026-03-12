import jaePizzaMenuData from '@/lib/jae-pizza-menu.json';

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

export const jaePizzaMenu = jaePizzaMenuData as RestaurantMenu;

export function getPizzaBySlug(slug: string) {
  return jaePizzaMenu.pizzas.find((pizza) => pizza.slug === slug) ?? null;
}

export function getFeaturedPizzas() {
  return jaePizzaMenu.featuredPizzaSlugs
    .map((slug) => getPizzaBySlug(slug))
    .filter((pizza): pizza is PizzaMenuItem => pizza !== null);
}

export function getOrderedMenuCategories() {
  return [...jaePizzaMenu.categories].sort((left, right) => left.order - right.order);
}

export function getPizzasByCategory(categoryId: PizzaCategoryId) {
  return jaePizzaMenu.pizzas.filter((pizza) => pizza.category === categoryId);
}
