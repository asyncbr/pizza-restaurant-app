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

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(`[products] ${message}`);
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function validateMenu(data: unknown): RestaurantMenu {
  assert(isRecord(data), 'Catalog root must be an object.');
  assert(data.brand === 'Jae Pizzas', 'Catalog brand must be "Jae Pizzas".');
  assert(data.currency === 'BRL', 'Catalog currency must be "BRL".');
  assert(data.defaultLanguage === 'pt-BR', 'Catalog defaultLanguage must be "pt-BR".');
  assert(Array.isArray(data.sizes) && data.sizes.length > 0, 'Catalog sizes must be a non-empty array.');
  assert(Array.isArray(data.categories) && data.categories.length > 0, 'Catalog categories must be a non-empty array.');
  assert(Array.isArray(data.pizzas) && data.pizzas.length > 0, 'Catalog pizzas must be a non-empty array.');
  assert(Array.isArray(data.featuredPizzaSlugs), 'Catalog featuredPizzaSlugs must be an array.');
  assert(isRecord(data.promo), 'Catalog promo must be an object.');
  assert(isRecord(data.serviceInfo), 'Catalog serviceInfo must be an object.');
  assert(typeof data.promo.highlightTag === 'string' && data.promo.highlightTag.length > 0, 'Catalog promo.highlightTag is required.');
  assert(typeof data.serviceInfo.delivery === 'boolean', 'Catalog serviceInfo.delivery must be boolean.');
  assert(typeof data.serviceInfo.pickup === 'boolean', 'Catalog serviceInfo.pickup must be boolean.');

  const validSizeIds = new Set<PizzaSizeId>();
  for (const size of data.sizes) {
    assert(isRecord(size), 'Each size must be an object.');
    assert(size.id === 'grande', 'Each size id must be a supported PizzaSizeId.');
    assert(typeof size.slices === 'number' && size.slices > 0, `Size "${String(size.id)}" must have a positive slices number.`);
    validSizeIds.add(size.id);
  }

  const validCategoryIds = new Set<PizzaCategoryId>();
  for (const category of data.categories) {
    assert(isRecord(category), 'Each category must be an object.');
    assert(
      category.id === 'classics' ||
        category.id === 'chicken-and-meat' ||
        category.id === 'specials' ||
        category.id === 'fish-and-vegetarian',
      'Each category id must be a supported PizzaCategoryId.'
    );
    assert(typeof category.order === 'number', `Category "${String(category.id)}" must have a numeric order.`);
    validCategoryIds.add(category.id);
  }

  const seenSlugs = new Set<string>();
  for (const pizza of data.pizzas) {
    assert(isRecord(pizza), 'Each pizza must be an object.');
    assert(typeof pizza.slug === 'string' && pizza.slug.length > 0, 'Each pizza must have a slug.');
    assert(!seenSlugs.has(pizza.slug), `Duplicate pizza slug "${pizza.slug}".`);
    seenSlugs.add(pizza.slug);
    assert(validCategoryIds.has(pizza.category as PizzaCategoryId), `Pizza "${pizza.slug}" has invalid category "${String(pizza.category)}".`);
    assert(Array.isArray(pizza.sizesAvailable) && pizza.sizesAvailable.length > 0, `Pizza "${pizza.slug}" must define sizesAvailable.`);
    for (const sizeId of pizza.sizesAvailable) {
      assert(validSizeIds.has(sizeId as PizzaSizeId), `Pizza "${pizza.slug}" references unknown size "${String(sizeId)}".`);
    }
    assert(typeof pizza.price === 'number' && Number.isFinite(pizza.price) && pizza.price > 0, `Pizza "${pizza.slug}" must have a positive numeric price.`);
    assert(typeof pizza.featured === 'boolean', `Pizza "${pizza.slug}" featured must be boolean.`);
    assert(typeof pizza.image === 'string' && pizza.image.startsWith('/'), `Pizza "${pizza.slug}" must have an image path starting with "/".`);
  }

  for (const slug of data.featuredPizzaSlugs) {
    assert(typeof slug === 'string' && slug.length > 0, 'Every featured pizza slug must be a string.');
    assert(seenSlugs.has(slug), `featuredPizzaSlugs references missing pizza "${slug}".`);
  }

  return data as RestaurantMenu;
}

export const jaePizzaMenu = validateMenu(jaePizzaMenuData);

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
