import type { Locale } from '@/src/i18n/config';
import enDictionary from '@/src/i18n/dictionaries/en';
import esDictionary from '@/src/i18n/dictionaries/es';
import ptBRDictionary from '@/src/i18n/dictionaries/pt-BR';

export type Dictionary = typeof ptBRDictionary;

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  'pt-BR': async () => ptBRDictionary,
  en: async () => enDictionary,
  es: async () => esDictionary,
};

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}
