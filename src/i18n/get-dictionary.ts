import type { Locale } from '@/src/i18n/config';
import { jaePizzaMenu } from '@/lib/products';
import enDictionary from '@/src/i18n/dictionaries/en';
import esDictionary from '@/src/i18n/dictionaries/es';
import ptBRDictionary from '@/src/i18n/dictionaries/pt-BR';

type DeepWiden<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends boolean
      ? boolean
      : T extends readonly (infer Item)[]
        ? readonly DeepWiden<Item>[]
        : T extends object
          ? { [Key in keyof T]: DeepWiden<T[Key]> }
          : T;

export type Dictionary = DeepWiden<typeof ptBRDictionary>;

function assertDictionary(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(`[i18n] ${message}`);
  }
}

function validateDictionary(locale: Locale, dictionary: Dictionary) {
  for (const size of jaePizzaMenu.sizes) {
    const entry = dictionary.menuPreview.sizes[size.id];
    assertDictionary(entry, `Missing size translation "${size.id}" for locale "${locale}".`);
    assertDictionary(typeof entry.label === 'string' && entry.label.length > 0, `Missing size label for "${size.id}" in locale "${locale}".`);
    assertDictionary(typeof entry.slicesLabel === 'string' && entry.slicesLabel.length > 0, `Missing slicesLabel for "${size.id}" in locale "${locale}".`);
  }

  for (const category of jaePizzaMenu.categories) {
    const entry = dictionary.menuPreview.categories[category.id];
    assertDictionary(entry, `Missing category translation "${category.id}" for locale "${locale}".`);
    assertDictionary(typeof entry.name === 'string' && entry.name.length > 0, `Missing category name for "${category.id}" in locale "${locale}".`);
    assertDictionary(typeof entry.description === 'string' && entry.description.length > 0, `Missing category description for "${category.id}" in locale "${locale}".`);
  }

  for (const pizza of jaePizzaMenu.pizzas) {
    const entry = dictionary.menuPreview.pizzas[pizza.slug as keyof Dictionary['menuPreview']['pizzas']];
    assertDictionary(entry, `Missing pizza translation "${pizza.slug}" for locale "${locale}".`);
    assertDictionary(typeof entry.name === 'string' && entry.name.length > 0, `Missing pizza name for "${pizza.slug}" in locale "${locale}".`);
    assertDictionary(typeof entry.description === 'string' && entry.description.length > 0, `Missing pizza description for "${pizza.slug}" in locale "${locale}".`);
    assertDictionary(Array.isArray(entry.ingredients) && entry.ingredients.length > 0, `Missing ingredients for "${pizza.slug}" in locale "${locale}".`);
    assertDictionary(typeof entry.whatsappMessage === 'string' && entry.whatsappMessage.length > 0, `Missing WhatsApp message for "${pizza.slug}" in locale "${locale}".`);
    assertDictionary(typeof entry.imageAlt === 'string' && entry.imageAlt.length > 0, `Missing image alt for "${pizza.slug}" in locale "${locale}".`);
  }
}

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  'pt-BR': async () => ptBRDictionary,
  en: async () => enDictionary,
  es: async () => esDictionary,
};

validateDictionary('pt-BR', ptBRDictionary);
validateDictionary('en', enDictionary);
validateDictionary('es', esDictionary);

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}
