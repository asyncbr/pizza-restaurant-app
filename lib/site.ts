import type { Locale } from '@/src/i18n/config';

export type SocialLinkId =
  | 'instagram'
  | 'facebook'
  | 'tiktok'
  | 'x';

export type SocialLink = {
  id: SocialLinkId;
  href: string;
};

export const siteConfig = {
  brandName: 'JAE Pizzas',
  whatsappNumber: '5511958316072',
  contactEmail: 'contato@jaepizzas.com',
  address: 'Rua das Palmeiras, 240 - Centro, Sao Paulo - SP',
  socialLinks: [
    { id: 'instagram', href: 'https://instagram.com/jaepizzas' },
    { id: 'facebook', href: 'https://facebook.com/jaepizzas' },
    { id: 'tiktok', href: 'https://tiktok.com/@jaepizzas' },
    { id: 'x', href: 'https://x.com/jaepizzas' },
  ] as SocialLink[],
} as const;

export function buildWhatsAppLink(message: string) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodedMessage}`;
}

type PizzaOrderMessageInput = {
  locale: Locale;
  baseMessage: string;
  pizzaName: string;
  priceLabel: string;
  sizeLabel: string;
};

export function buildPizzaOrderMessage({
  locale,
  baseMessage,
  pizzaName,
  priceLabel,
  sizeLabel,
}: PizzaOrderMessageInput) {
  switch (locale) {
    case 'en':
      return `${baseMessage}\nPizza: ${pizzaName}\nSize: ${sizeLabel}\nPrice: ${priceLabel}`;
    case 'es':
      return `${baseMessage}\nPizza: ${pizzaName}\nTamano: ${sizeLabel}\nPrecio: ${priceLabel}`;
    case 'pt-BR':
    default:
      return `${baseMessage}\nPizza: ${pizzaName}\nTamanho: ${sizeLabel}\nPreco: ${priceLabel}`;
  }
}
