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
