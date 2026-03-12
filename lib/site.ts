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
  brandName: 'Jae Pizzas',
  whatsappNumber: '5511999999999',
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
