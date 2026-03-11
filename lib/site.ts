export const supportedLocales = ['pt-BR', 'en', 'es'] as const;

export type SiteLocale = (typeof supportedLocales)[number];

export function isSiteLocale(value: string | null): value is SiteLocale {
  return supportedLocales.includes(value as SiteLocale);
}

export const siteConfig = {
  brandName: 'Ja Eh',
  instagramUrl: 'https://instagram.com/jaehpizza',
  whatsappNumber: '5511999999999',
  contactEmail: 'contato@jaehpizza.com',
  address: 'Rua das Palmeiras, 240 - Centro',
} as const;

export const localeLabels: Record<SiteLocale, string> = {
  'pt-BR': 'PT-BR',
  en: 'EN',
  es: 'ES',
};

export function buildWhatsAppLink(message: string) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodedMessage}`;
}

export type PizzaSize = {
  id: string;
  label: string;
  slices: number;
};

export type PizzaCategoryId =
  | 'classics'
  | 'chicken-and-meat'
  | 'specials'
  | 'fish-and-vegetarian';

export type PizzaCategory = {
  id: PizzaCategoryId;
  name: string;
  description: string;
  order: number;
};

export type PizzaMenuItem = {
  slug: string;
  category: PizzaCategoryId;
  name: string;
  description: string;
  ingredients: string[];
  sizesAvailable: string[];
  priceLabel: string;
  featured: boolean;
  image: string;
  tags: string[];
};

export type RestaurantPromo = {
  title: string;
  subtitle: string;
  ctaLabel: string;
  highlightTag: string;
};

export type RestaurantServiceInfo = {
  delivery: boolean;
  pickup: boolean;
  openingHours: string;
  serviceAreaNote: string;
  whatsappLabel: string;
};

export type RestaurantMenu = {
  brand: string;
  currency: 'BRL';
  defaultLanguage: SiteLocale;
  sizes: PizzaSize[];
  categories: PizzaCategory[];
  pizzas: PizzaMenuItem[];
  featuredPizzaSlugs: string[];
  promo: RestaurantPromo;
  serviceInfo: RestaurantServiceInfo;
};

export const jaEhPizzaMenu: RestaurantMenu = {
  brand: 'Ja Eh',
  currency: 'BRL',
  defaultLanguage: 'pt-BR',
  sizes: [
    {
      id: 'grande',
      label: 'Grande',
      slices: 8,
    },
  ],
  categories: [
    {
      id: 'classics',
      name: 'Classicas',
      description: 'Sabores tradicionais que fazem parte de qualquer pizzaria de bairro forte.',
      order: 1,
    },
    {
      id: 'chicken-and-meat',
      name: 'Frango e Carnes',
      description: 'Opcoes com frango, bacon, lombo e sabores mais intensos.',
      order: 2,
    },
    {
      id: 'specials',
      name: 'Especiais',
      description: 'Combinacoes com mais personalidade para destacar o cardapio.',
      order: 3,
    },
    {
      id: 'fish-and-vegetarian',
      name: 'Atum e Vegetarianas',
      description: 'Alternativas com atum, palmito e sabores mais leves.',
      order: 4,
    },
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
    title: 'Noite da Pizza em Familia',
    subtitle:
      'Monte sua noite perfeita com pizzas classicas e especiais feitas para compartilhar.',
    ctaLabel: 'Peca agora',
    highlightTag: 'Grande com 8 fatias',
  },
  serviceInfo: {
    delivery: true,
    pickup: true,
    openingHours: 'Todos os dias • 18:00 as 23:30',
    serviceAreaNote: 'Entregas em bairros proximos.',
    whatsappLabel: 'Pedir no WhatsApp',
  },
  pizzas: [
    {
      slug: 'mussarela',
      category: 'classics',
      name: 'Mussarela',
      description: 'Classica, simples e sempre confiavel para pedidos do dia a dia.',
      ingredients: ['molho de tomate', 'mussarela', 'oregano'],
      sizesAvailable: ['grande'],
      priceLabel: 'a partir de R$ 43,90',
      featured: false,
      image: '/images/pizza/mussarela.jpg',
      tags: ['classica', 'tradicional'],
    },
    {
      slug: 'calabresa',
      category: 'classics',
      name: 'Calabresa',
      description: 'Um dos sabores mais pedidos, com perfil direto e muito familiar.',
      ingredients: ['molho de tomate', 'mussarela', 'calabresa fatiada', 'oregano'],
      sizesAvailable: ['grande'],
      priceLabel: 'a partir de R$ 46,90',
      featured: true,
      image: '/images/pizza/calabresa.jpg',
      tags: ['classica', 'mais pedida'],
    },
    {
      slug: 'calabresa-com-cebola',
      category: 'classics',
      name: 'Calabresa com Cebola',
      description: 'Versao tradicional com cebola para um sabor ainda mais marcante.',
      ingredients: ['molho de tomate', 'mussarela', 'calabresa fatiada', 'cebola', 'oregano'],
      sizesAvailable: ['grande'],
      priceLabel: 'a partir de R$ 48,90',
      featured: false,
      image: '/images/pizza/calabresa-com-cebola.jpg',
      tags: ['classica'],
    },
    {
      slug: 'portuguesa',
      category: 'classics',
      name: 'Portuguesa',
      description: 'Combinacao brasileira muito conhecida e facil de vender.',
      ingredients: ['molho de tomate', 'mussarela', 'presunto', 'ovo', 'cebola', 'ervilha', 'azeitona', 'oregano'],
      sizesAvailable: ['grande'],
      priceLabel: 'a partir de R$ 52,90',
      featured: true,
      image: '/images/pizza/portuguesa.jpg',
      tags: ['classica', 'tradicional'],
    },
    {
      slug: 'marguerita',
      category: 'classics',
      name: 'Marguerita',
      description: 'Leve, elegante e otima para destacar o visual do cardapio.',
      ingredients: ['molho de tomate', 'mussarela', 'tomate', 'manjericao', 'oregano'],
      sizesAvailable: ['grande'],
      priceLabel: 'a partir de R$ 47,90',
      featured: true,
      image: '/images/pizza/marguerita.jpg',
      tags: ['classica', 'leve'],
    },
    {
      slug: 'napolitana',
      category: 'classics',
      name: 'Napolitana',
      description: 'Sabor tradicional com perfil familiar e acabamento bem brasileiro.',
      ingredients: ['molho de tomate', 'mussarela', 'tomate', 'parmesao', 'oregano'],
      sizesAvailable: ['grande'],
      priceLabel: 'a partir de R$ 46,90',
      featured: false,
      image: '/images/pizza/napolitana.jpg',
      tags: ['classica'],
    },
    {
      slug: 'presunto',
      category: 'classics',
      name: 'Presunto',
      description: 'Opcao direta e popular para um cardapio enxuto e local.',
      ingredients: ['molho de tomate', 'mussarela', 'presunto', 'oregano'],
      sizesAvailable: ['grande'],
      priceLabel: 'a partir de R$ 44,90',
      featured: false,
      image: '/images/pizza/presunto.jpg',
      tags: ['classica'],
    },
    {
      slug: 'bacon',
      category: 'classics',
      name: 'Bacon',
      description: 'Sabor forte para quem gosta de pizza mais marcante.',
      ingredients: ['molho de tomate', 'mussarela', 'bacon', 'oregano'],
      sizesAvailable: ['grande'],
      priceLabel: 'a partir de R$ 49,90',
      featured: false,
      image: '/images/pizza/bacon.jpg',
      tags: ['classica', 'intensa'],
    },
    {
      slug: 'frango',
      category: 'chicken-and-meat',
      name: 'Frango',
      description: 'Versao simples de frango desfiado para um publico amplo.',
      ingredients: ['molho de tomate', 'mussarela', 'frango desfiado', 'oregano'],
      sizesAvailable: ['grande'],
      priceLabel: 'a partir de R$ 47,90',
      featured: false,
      image: '/images/pizza/frango.jpg',
      tags: ['frango'],
    },
    {
      slug: 'frango-com-catupiry',
      category: 'chicken-and-meat',
      name: 'Frango com Catupiry',
      description: 'Um dos sabores mais fortes para conversao em pizzarias brasileiras.',
      ingredients: ['molho de tomate', 'mussarela', 'frango desfiado', 'catupiry', 'oregano'],
      sizesAvailable: ['grande'],
      priceLabel: 'a partir de R$ 53,90',
      featured: true,
      image: '/images/pizza/frango-com-catupiry.jpg',
      tags: ['frango', 'mais pedida'],
    },
    {
      slug: 'frango-com-bacon',
      category: 'chicken-and-meat',
      name: 'Frango com Bacon',
      description: 'Mistura de frango e bacon para um perfil mais indulgente.',
      ingredients: ['molho de tomate', 'mussarela', 'frango desfiado', 'bacon', 'oregano'],
      sizesAvailable: ['grande'],
      priceLabel: 'a partir de R$ 54,90',
      featured: false,
      image: '/images/pizza/frango-com-bacon.jpg',
      tags: ['frango', 'bacon'],
    },
    {
      slug: 'peperoni',
      category: 'chicken-and-meat',
      name: 'Peperoni',
      description: 'Sabor visualmente forte e excelente para destaque da landing page.',
      ingredients: ['molho de tomate', 'mussarela', 'peperoni', 'oregano'],
      sizesAvailable: ['grande'],
      priceLabel: 'a partir de R$ 55,90',
      featured: true,
      image: '/images/pizza/peperoni.jpg',
      tags: ['carne', 'destaque visual'],
    },
    {
      slug: 'lombo',
      category: 'chicken-and-meat',
      name: 'Lombo',
      description: 'Boa opcao para ampliar o cardapio com um sabor conhecido.',
      ingredients: ['molho de tomate', 'mussarela', 'lombo', 'oregano'],
      sizesAvailable: ['grande'],
      priceLabel: 'a partir de R$ 50,90',
      featured: false,
      image: '/images/pizza/lombo.jpg',
      tags: ['carne'],
    },
    {
      slug: 'lombo-com-catupiry',
      category: 'chicken-and-meat',
      name: 'Lombo com Catupiry',
      description: 'Combinacao forte para completar a secao de carnes.',
      ingredients: ['molho de tomate', 'mussarela', 'lombo', 'catupiry', 'oregano'],
      sizesAvailable: ['grande'],
      priceLabel: 'a partir de R$ 54,90',
      featured: false,
      image: '/images/pizza/lombo-com-catupiry.jpg',
      tags: ['carne', 'catupiry'],
    },
    {
      slug: 'quatro-queijos',
      category: 'specials',
      name: 'Quatro Queijos',
      description: 'Sabor classico especial, otimo para um menu com cara mais premium.',
      ingredients: ['molho de tomate', 'mussarela', 'catupiry', 'parmesao', 'provolone', 'oregano'],
      sizesAvailable: ['grande'],
      priceLabel: 'a partir de R$ 57,90',
      featured: true,
      image: '/images/pizza/quatro-queijos.jpg',
      tags: ['especial', 'queijos'],
    },
    {
      slug: 'cinco-queijos',
      category: 'specials',
      name: 'Cinco Queijos',
      description: 'Variacao mais intensa para reforcar o grupo dos sabores especiais.',
      ingredients: ['molho de tomate', 'mussarela', 'catupiry', 'parmesao', 'provolone', 'gorgonzola', 'oregano'],
      sizesAvailable: ['grande'],
      priceLabel: 'a partir de R$ 61,90',
      featured: false,
      image: '/images/pizza/cinco-queijos.jpg',
      tags: ['especial', 'queijos'],
    },
    {
      slug: 'moda-da-casa',
      category: 'specials',
      name: 'Moda da Casa',
      description: 'Sabor assinatura para dar personalidade propria ao cardapio.',
      ingredients: ['molho de tomate', 'mussarela', 'calabresa', 'presunto', 'cebola', 'azeitona', 'oregano'],
      sizesAvailable: ['grande'],
      priceLabel: 'a partir de R$ 58,90',
      featured: false,
      image: '/images/pizza/moda-da-casa.jpg',
      tags: ['especial', 'assinatura'],
    },
    {
      slug: 'paulista',
      category: 'specials',
      name: 'Paulista',
      description: 'Sabor regional que ajuda a dar identidade local ao cardapio.',
      ingredients: ['molho de tomate', 'mussarela', 'calabresa', 'cebola', 'tomate', 'oregano'],
      sizesAvailable: ['grande'],
      priceLabel: 'a partir de R$ 55,90',
      featured: false,
      image: '/images/pizza/paulista.jpg',
      tags: ['especial', 'regional'],
    },
    {
      slug: 'brasileira',
      category: 'specials',
      name: 'Brasileira',
      description: 'Combinacao com apelo popular para um cardapio bem brasileiro.',
      ingredients: ['molho de tomate', 'mussarela', 'presunto', 'milho', 'ovo', 'azeitona', 'oregano'],
      sizesAvailable: ['grande'],
      priceLabel: 'a partir de R$ 56,90',
      featured: false,
      image: '/images/pizza/brasileira.jpg',
      tags: ['especial', 'regional'],
    },
    {
      slug: 'baiana',
      category: 'specials',
      name: 'Baiana',
      description: 'Opcao mais intensa e marcante para quem gosta de um toque picante.',
      ingredients: ['molho de tomate', 'mussarela', 'calabresa moida', 'cebola', 'pimenta', 'oregano'],
      sizesAvailable: ['grande'],
      priceLabel: 'a partir de R$ 54,90',
      featured: false,
      image: '/images/pizza/baiana.jpg',
      tags: ['especial', 'picante'],
    },
    {
      slug: 'toscana',
      category: 'specials',
      name: 'Toscana',
      description: 'Sabor robusto para reforcar a parte especial do cardapio.',
      ingredients: ['molho de tomate', 'mussarela', 'calabresa moida', 'oregano'],
      sizesAvailable: ['grande'],
      priceLabel: 'a partir de R$ 52,90',
      featured: false,
      image: '/images/pizza/toscana.jpg',
      tags: ['especial'],
    },
    {
      slug: 'atum',
      category: 'fish-and-vegetarian',
      name: 'Atum',
      description: 'Classico de pizzaria para quem busca outra linha de sabor.',
      ingredients: ['molho de tomate', 'mussarela', 'atum', 'oregano'],
      sizesAvailable: ['grande'],
      priceLabel: 'a partir de R$ 51,90',
      featured: false,
      image: '/images/pizza/atum.jpg',
      tags: ['atum'],
    },
    {
      slug: 'atum-com-cebola',
      category: 'fish-and-vegetarian',
      name: 'Atum com Cebola',
      description: 'Versao mais tradicional dentro da familia de atum.',
      ingredients: ['molho de tomate', 'mussarela', 'atum', 'cebola', 'oregano'],
      sizesAvailable: ['grande'],
      priceLabel: 'a partir de R$ 52,90',
      featured: false,
      image: '/images/pizza/atum-com-cebola.jpg',
      tags: ['atum'],
    },
    {
      slug: 'atum-com-bacon',
      category: 'fish-and-vegetarian',
      name: 'Atum com Bacon',
      description: 'Combinacao diferente que chama atencao no menu.',
      ingredients: ['molho de tomate', 'mussarela', 'atum', 'bacon', 'oregano'],
      sizesAvailable: ['grande'],
      priceLabel: 'a partir de R$ 55,90',
      featured: false,
      image: '/images/pizza/atum-com-bacon.jpg',
      tags: ['atum', 'bacon'],
    },
    {
      slug: 'palmito',
      category: 'fish-and-vegetarian',
      name: 'Palmito',
      description: 'Opcao mais leve e muito comum em cardapios brasileiros.',
      ingredients: ['molho de tomate', 'mussarela', 'palmito', 'oregano'],
      sizesAvailable: ['grande'],
      priceLabel: 'a partir de R$ 49,90',
      featured: false,
      image: '/images/pizza/palmito.jpg',
      tags: ['vegetariana'],
    },
    {
      slug: 'palmito-com-catupiry',
      category: 'fish-and-vegetarian',
      name: 'Palmito com Catupiry',
      description: 'Versao mais cremosa para complementar o menu vegetariano.',
      ingredients: ['molho de tomate', 'mussarela', 'palmito', 'catupiry', 'oregano'],
      sizesAvailable: ['grande'],
      priceLabel: 'a partir de R$ 53,90',
      featured: false,
      image: '/images/pizza/palmito-com-catupiry.jpg',
      tags: ['vegetariana', 'catupiry'],
    },
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

type NavItem = {
  label: string;
  href: string;
};

type CtaSet = {
  orderNow: string;
  viewMenu: string;
  requestFullMenu: string;
  whatsappOrder: string;
  promo: string;
  submit: string;
  submitting: string;
};

type WhyChooseItem = {
  title: string;
  description: string;
};

type Testimonial = {
  quote: string;
  author: string;
  detail: string;
};

type ContactFieldSet = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type ContactPlaceholders = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type LocaleContent = {
  meta: {
    title: string;
    description: string;
  };
  common: {
    languageLabel: string;
    contactEmailLabel: string;
    whatsappLabel: string;
    instagramLabel: string;
  };
  pizzaLanding: {
    header: {
      brandTag: string;
      navigation: NavItem[];
      ctaLabel: string;
    };
    hero: {
      eyebrow: string;
      title: string;
      description: string;
      chips: string[];
      stats: Array<{ value: string; label: string }>;
      imageEyebrow: string;
      imageTitle: string;
      imageDescription: string;
      imagePlaceholderLabel: string;
    };
    featured: {
      eyebrow: string;
      title: string;
      description: string;
      ctaLabel: string;
      ingredientsLabel: string;
      sizesLabel: string;
    };
    promo: {
      eyebrow: string;
      title: string;
      description: string;
      highlight: string;
      ctaLabel: string;
    };
    whyChooseUs: {
      eyebrow: string;
      title: string;
      description: string;
      items: WhyChooseItem[];
    };
    about: {
      eyebrow: string;
      title: string;
      description: string;
      storyTitle: string;
      story: string;
      imageLabel: string;
      imageDescription: string;
    };
    menu: {
      eyebrow: string;
      title: string;
      description: string;
      asideTitle: string;
      asideDescription: string;
      asideBadge: string;
      itemsLabel: string;
      sizesLabel: string;
    };
    testimonials: {
      eyebrow: string;
      title: string;
      description: string;
      items: Testimonial[];
    };
    contact: {
      eyebrow: string;
      title: string;
      description: string;
      formTitle: string;
      formDescription: string;
      successMessage: string;
      errorMessage: string;
      requiredError: string;
      fields: ContactFieldSet;
      placeholders: ContactPlaceholders;
      infoTitle: string;
      addressLabel: string;
      hoursLabel: string;
      deliveryLabel: string;
      address: string;
      hours: string;
      deliveryNote: string;
      whatsappCta: string;
      whatsappMessage: string;
    };
    footer: {
      description: string;
      navigation: NavItem[];
      navigationTitle: string;
      socialTitle: string;
      rights: string;
    };
  };
  cta: CtaSet;
};

export const siteContent: Record<SiteLocale, LocaleContent> = {
  'pt-BR': {
    meta: {
      title: 'Ja Eh | Pizza artesanal para pedir agora',
      description:
        'Landing page da pizzaria Ja Eh com cardapio em destaque, combos, atendimento por WhatsApp e formulario de contato para conversao local.',
    },
    common: {
      languageLabel: 'Idioma',
      contactEmailLabel: 'E-mail',
      whatsappLabel: 'WhatsApp',
      instagramLabel: 'Instagram',
    },
    pizzaLanding: {
      header: {
        brandTag: 'Pizzaria urbana artesanal',
        navigation: [
          { label: 'Home', href: '#home' },
          { label: 'Menu', href: '#menu' },
          { label: 'About', href: '#about' },
          { label: 'Contact', href: '#contact' },
        ],
        ctaLabel: 'Pedir Agora',
      },
      hero: {
        eyebrow: 'Forno quente, massa de longa fermentacao e sabor que chega antes da primeira mordida',
        title: 'A pizza que acende a noite e faz o pedido parecer obvio.',
        description:
          'A Ja Eh combina borda dourada, molho intenso, queijo cremoso e acabamento premium para transformar delivery e retirada em uma experiencia de marca forte, atual e memoravel.',
        chips: ['Delivery', 'Retirada', 'Combo Familia'],
        stats: [
          { value: '25 min', label: 'media de saida' },
          { value: '4 sabores', label: 'em combos especiais' },
          { value: '100%', label: 'massa artesanal' },
        ],
        imageEyebrow: 'Destaque da casa',
        imageTitle: 'Pepperoni picante com mozzarella cremosa e basilico fresco',
        imageDescription:
          'Area visual preparada para substituir por foto real sem mexer na estrutura da pagina.',
        imagePlaceholderLabel: 'Placeholder visual',
      },
      featured: {
        eyebrow: 'Pizzas em destaque',
        title: 'Sabores pensados para abrir apetite e puxar o clique.',
        description:
          'A selecao passa a vir do cardapio estruturado da Ja Eh, com sabores reais de pizzaria local e espaco para crescer sem retrabalho.',
        ctaLabel: 'Pedir esta pizza',
        ingredientsLabel: 'Ingredientes',
        sizesLabel: 'Tamanho',
      },
      promo: {
        eyebrow: 'Oferta da semana',
        title: 'Combo familia com duas pizzas grandes, bebida e sobremesa com condicao especial.',
        description:
          'Uma oferta pensada para grupos, noites em casa e campanhas promocionais que pedem CTA forte no meio da pagina.',
        highlight: 'Disponivel para delivery e retirada ate domingo.',
        ctaLabel: 'Quero o combo',
      },
      whyChooseUs: {
        eyebrow: 'Por que escolher a Ja Eh',
        title: 'Quatro argumentos simples para converter sem enrolacao.',
        description:
          'A estrutura desta secao foi desenhada para apresentar diferenciais claros de produto e operacao, mantendo linguagem comercial e leitura rapida.',
        items: [
          {
            title: 'Ingredientes frescos',
            description: 'Tomate, queijo e folhas entram para sustentar uma entrega mais viva, aromatica e confiavel.',
          },
          {
            title: 'Massa artesanal',
            description: 'Fermentacao pensada para borda leve, interior macio e textura que valoriza o forno.',
          },
          {
            title: 'Entrega agil',
            description: 'Fluxo orientado a conversao com destaque para pedido rapido por WhatsApp e retirada eficiente.',
          },
          {
            title: 'Sabor marcante',
            description: 'Receitas montadas para parecer premium sem perder apelo popular nem familiaridade.',
          },
        ],
      },
      about: {
        eyebrow: 'Sobre a marca',
        title: 'Ja Eh nasceu para ser a pizzaria local que resolve a fome com identidade.',
        description:
          'O tom combina proximidade de bairro, visual contemporaneo e um posicionamento que funciona tanto para portfolio quanto para negocios reais de alimentacao.',
        storyTitle: 'Uma marca calorosa, direta e facil de lembrar',
        story:
          'Da massa aberta a mao ao atendimento sem atrito, a Ja Eh foi pensada para passar seguranca, desejo e ritmo urbano. O resultado e uma pizzaria com cara atual, copy objetiva e espaco para crescer com novas campanhas e futuras paginas.',
        imageLabel: 'Placeholder ambiente e preparo',
        imageDescription: 'Area reservada para foto do forno, bancada ou equipe em acao.',
      },
      menu: {
        eyebrow: 'Preview do cardapio',
        title: 'Categorias organizadas para apresentar variedade sem poluir a decisao.',
        description:
          'O preview agrupa o menu por categorias reais da casa e mostra alguns sabores de cada secao para orientar a escolha.',
        asideTitle: 'Quer o cardapio completo?',
        asideDescription:
          'Envie uma mensagem e receba a versao integral com tamanhos, adicionais e combos disponiveis.',
        asideBadge: 'Atendimento rapido por WhatsApp',
        itemsLabel: 'Sabores',
        sizesLabel: 'Tamanho disponivel',
      },
      testimonials: {
        eyebrow: 'Clientes satisfeitos',
        title: 'Prova social com tom leve, local e comercial.',
        description:
          'Os depoimentos abaixo usam texto ficticio, mas ja estao prontos para receber avaliacoes reais sem ajustes estruturais.',
        items: [
          {
            quote: 'A borda veio dourada, o recheio equilibrado e o pedido chegou no tempo certo. Vira escolha facil para sexta a noite.',
            author: 'Camila R.',
            detail: 'Pedido em familia',
          },
          {
            quote: 'Tem cara de marca nova bem resolvida. A pizza chegou bonita, quente e com sabor que realmente lembra forno de verdade.',
            author: 'Diego M.',
            detail: 'Delivery local',
          },
          {
            quote: 'Gostei do combo, do atendimento rapido e do jeito direto de pedir. Experiencia simples e muito bem apresentada.',
            author: 'Fernanda S.',
            detail: 'Retirada na loja',
          },
        ],
      },
      contact: {
        eyebrow: 'Contato',
        title: 'Fale com a Ja Eh para pedir, tirar duvidas ou solicitar o cardapio completo.',
        description:
          'O formulario segue a mesma ideia de lead generation do projeto: captar interesse de forma simples e manter o WhatsApp como rota principal de conversao.',
        formTitle: 'Envie sua mensagem',
        formDescription: 'Preencha os campos abaixo e a equipe retorna com atendimento comercial.',
        successMessage: 'Mensagem enviada com sucesso. A equipe da Ja Eh respondera em breve.',
        errorMessage: 'Nao foi possivel enviar agora. Tente novamente ou chame no WhatsApp.',
        requiredError: 'Preencha todos os campos obrigatorios.',
        fields: {
          name: 'Nome',
          email: 'E-mail',
          phone: 'Telefone / WhatsApp',
          subject: 'Assunto',
          message: 'Mensagem',
        },
        placeholders: {
          name: 'Seu nome',
          email: 'voce@exemplo.com',
          phone: '(11) 99999-9999',
          subject: 'Quero pedir um combo familia',
          message: 'Conte qual sabor, tamanho ou duvida voce tem.',
        },
        infoTitle: 'Informacoes da unidade',
        addressLabel: 'Endereco',
        hoursLabel: 'Horario',
        deliveryLabel: 'Area de entrega',
        address: 'Rua das Palmeiras, 240 - Centro, Sao Paulo - SP',
        hours: 'Terca a domingo, das 18h as 23h',
        deliveryNote: 'Entregamos em bairros proximos e confirmamos taxa antes de fechar o pedido.',
        whatsappCta: 'Pedir por WhatsApp',
        whatsappMessage: 'Ola! Quero falar com a Ja Eh sobre um pedido.',
      },
      footer: {
        description: 'Pizza artesanal com identidade forte, atendimento agil e foco em conversao local.',
        navigation: [
          { label: 'Home', href: '#home' },
          { label: 'Menu', href: '#menu' },
          { label: 'About', href: '#about' },
          { label: 'Contact', href: '#contact' },
        ],
        navigationTitle: 'Navegacao',
        socialTitle: 'Redes sociais',
        rights: 'Ja Eh. Layout portfolio pronto para evoluir com ativos reais.',
      },
    },
    cta: {
      orderNow: 'Pedir Agora',
      viewMenu: 'Ver Menu',
      requestFullMenu: 'Solicitar Cardapio Completo',
      whatsappOrder: 'Pedir por WhatsApp',
      promo: 'Quero o combo',
      submit: 'Enviar contato',
      submitting: 'Enviando...',
    },
  },
  en: {
    meta: {
      title: 'Ja Eh | Artisan pizza built to convert',
      description:
        'Ja Eh pizza restaurant landing page with featured menu items, combo promotion, WhatsApp ordering, and a contact form for local lead generation.',
    },
    common: {
      languageLabel: 'Language',
      contactEmailLabel: 'Email',
      whatsappLabel: 'WhatsApp',
      instagramLabel: 'Instagram',
    },
    pizzaLanding: {
      header: {
        brandTag: 'Urban artisan pizzeria',
        navigation: [
          { label: 'Home', href: '#home' },
          { label: 'Menu', href: '#menu' },
          { label: 'About', href: '#about' },
          { label: 'Contact', href: '#contact' },
        ],
        ctaLabel: 'Order Now',
      },
      hero: {
        eyebrow: 'Hot oven, slow-fermented dough, and flavor that arrives before the first bite',
        title: 'The pizza that turns dinner into an easy yes.',
        description:
          'Ja Eh brings together blistered crust, rich tomato sauce, creamy cheese, and premium finishing touches to make delivery and pickup feel bold, current, and memorable.',
        chips: ['Delivery', 'Pickup', 'Family Combo'],
        stats: [
          { value: '25 min', label: 'average dispatch' },
          { value: '4 flavors', label: 'inside combo deals' },
          { value: '100%', label: 'artisan dough' },
        ],
        imageEyebrow: 'House favorite',
        imageTitle: 'Spicy pepperoni with creamy mozzarella and fresh basil',
        imageDescription:
          'Visual area ready to be replaced later with real photography without changing layout structure.',
        imagePlaceholderLabel: 'Visual placeholder',
      },
      featured: {
        eyebrow: 'Featured pizzas',
        title: 'Flavors designed to build appetite and pull the click.',
        description:
          'The section now pulls from a structured neighborhood-style menu dataset instead of ad hoc showcase items.',
        ctaLabel: 'Order this pizza',
        ingredientsLabel: 'Ingredients',
        sizesLabel: 'Size',
      },
      promo: {
        eyebrow: 'Weekly special',
        title: 'Family combo with two large pizzas, drinks, and dessert on a stronger offer.',
        description:
          'Built for groups, nights in, and promotional campaigns that need a clear conversion-focused strip between sections.',
        highlight: 'Available for delivery and pickup through Sunday.',
        ctaLabel: 'I want the combo',
      },
      whyChooseUs: {
        eyebrow: 'Why choose Ja Eh',
        title: 'Four direct reasons to convert without friction.',
        description:
          'This section was built to present product and operational differentiators in a fast, commercial way.',
        items: [
          {
            title: 'Fresh ingredients',
            description: 'Tomato, cheese, and herbs work together for a brighter, more aromatic, more trustworthy delivery experience.',
          },
          {
            title: 'Handcrafted dough',
            description: 'Fermentation is tuned for a lighter crust, softer center, and texture that lets the oven show up.',
          },
          {
            title: 'Fast delivery',
            description: 'The funnel highlights quick WhatsApp ordering and efficient pickup without extra friction.',
          },
          {
            title: 'Bold flavor',
            description: 'Recipes are built to feel premium while staying familiar and highly craveable.',
          },
        ],
      },
      about: {
        eyebrow: 'About the brand',
        title: 'Ja Eh was created to be the neighborhood pizza place with a clear point of view.',
        description:
          'The tone blends local warmth, contemporary visuals, and a positioning that works for both a portfolio project and real food businesses.',
        storyTitle: 'A warm, direct, easy-to-remember brand',
        story:
          'From hand-shaped dough to low-friction service, Ja Eh is designed to communicate confidence, desire, and urban energy. The result is a pizza brand ready to expand into new campaigns and future landing pages.',
        imageLabel: 'Kitchen and atmosphere placeholder',
        imageDescription: 'Reserved area for future oven, counter, or team photography.',
      },
      menu: {
        eyebrow: 'Menu preview',
        title: 'Categories organized to show variety without making the decision feel heavy.',
        description:
          'The preview groups the house menu into real categories and shows selected flavors from each section.',
        asideTitle: 'Need the full menu?',
        asideDescription:
          'Send a message and get the complete version with sizes, add-ons, and available combo deals.',
        asideBadge: 'Fast WhatsApp service',
        itemsLabel: 'Flavors',
        sizesLabel: 'Available size',
      },
      testimonials: {
        eyebrow: 'Happy customers',
        title: 'Social proof with a local, light, commercial tone.',
        description:
          'These reviews are mock content for now, but the structure is ready for real customer feedback later.',
        items: [
          {
            quote: 'The crust arrived blistered, the topping felt balanced, and the order got here right on time. Easy Friday-night choice.',
            author: 'Camila R.',
            detail: 'Family order',
          },
          {
            quote: 'It looks like a new brand with a clear idea. The pizza came hot, beautiful, and with real oven character.',
            author: 'Diego M.',
            detail: 'Local delivery',
          },
          {
            quote: 'I liked the combo, the quick service, and how direct the ordering flow is. Simple experience, very well presented.',
            author: 'Fernanda S.',
            detail: 'Pickup order',
          },
        ],
      },
      contact: {
        eyebrow: 'Contact',
        title: 'Talk to Ja Eh to order, ask questions, or request the full menu.',
        description:
          'The form keeps the same lead-generation approach as the project: capture intent simply and keep WhatsApp as the main conversion route.',
        formTitle: 'Send your message',
        formDescription: 'Fill in the fields below and the team will reply with commercial assistance.',
        successMessage: 'Message sent successfully. The Ja Eh team will reply soon.',
        errorMessage: 'The message could not be sent right now. Try again or use WhatsApp.',
        requiredError: 'Fill in all required fields.',
        fields: {
          name: 'Name',
          email: 'Email',
          phone: 'Phone / WhatsApp',
          subject: 'Subject',
          message: 'Message',
        },
        placeholders: {
          name: 'Your name',
          email: 'you@example.com',
          phone: '+1 (555) 123-4567',
          subject: 'I want to order a family combo',
          message: 'Tell us which flavor, size, or question you have.',
        },
        infoTitle: 'Business info',
        addressLabel: 'Address',
        hoursLabel: 'Opening hours',
        deliveryLabel: 'Delivery area',
        address: '240 Palmeiras Street - Downtown, Sao Paulo - SP',
        hours: 'Tuesday to Sunday, 6 PM to 11 PM',
        deliveryNote: 'We deliver to nearby neighborhoods and confirm the fee before finalizing the order.',
        whatsappCta: 'Order on WhatsApp',
        whatsappMessage: 'Hello! I want to talk to Ja Eh about an order.',
      },
      footer: {
        description: 'Artisan pizza with bold identity, fast service, and a strong local conversion focus.',
        navigation: [
          { label: 'Home', href: '#home' },
          { label: 'Menu', href: '#menu' },
          { label: 'About', href: '#about' },
          { label: 'Contact', href: '#contact' },
        ],
        navigationTitle: 'Navigation',
        socialTitle: 'Social',
        rights: 'Ja Eh. Portfolio-ready layout prepared to evolve with real assets.',
      },
    },
    cta: {
      orderNow: 'Order Now',
      viewMenu: 'View Menu',
      requestFullMenu: 'Request Full Menu',
      whatsappOrder: 'Order on WhatsApp',
      promo: 'I want the combo',
      submit: 'Send message',
      submitting: 'Sending...',
    },
  },
  es: {
    meta: {
      title: 'Ja Eh | Pizza artesanal lista para convertir',
      description:
        'Landing page de la pizzeria Ja Eh con pizzas destacadas, promocion familiar, pedido por WhatsApp y formulario de contacto para captacion local.',
    },
    common: {
      languageLabel: 'Idioma',
      contactEmailLabel: 'Correo',
      whatsappLabel: 'WhatsApp',
      instagramLabel: 'Instagram',
    },
    pizzaLanding: {
      header: {
        brandTag: 'Pizzeria urbana artesanal',
        navigation: [
          { label: 'Home', href: '#home' },
          { label: 'Menu', href: '#menu' },
          { label: 'About', href: '#about' },
          { label: 'Contact', href: '#contact' },
        ],
        ctaLabel: 'Pedir Ahora',
      },
      hero: {
        eyebrow: 'Horno caliente, masa fermentada con calma y sabor que llega antes del primer bocado',
        title: 'La pizza que convierte la cena en un si inmediato.',
        description:
          'Ja Eh combina borde dorado, salsa intensa, queso cremoso y acabados premium para que delivery y retiro se sientan modernos, fuertes y memorables.',
        chips: ['Delivery', 'Retiro', 'Combo Familiar'],
        stats: [
          { value: '25 min', label: 'promedio de salida' },
          { value: '4 sabores', label: 'en combos especiales' },
          { value: '100%', label: 'masa artesanal' },
        ],
        imageEyebrow: 'Favorita de la casa',
        imageTitle: 'Pepperoni picante con mozzarella cremosa y albahaca fresca',
        imageDescription:
          'Zona visual preparada para reemplazar por fotografia real sin cambiar la estructura.',
        imagePlaceholderLabel: 'Placeholder visual',
      },
      featured: {
        eyebrow: 'Pizzas destacadas',
        title: 'Sabores pensados para abrir el apetito y empujar el clic.',
        description:
          'La seccion ahora toma los sabores desde un menu estructurado de pizzeria local en lugar de tarjetas sueltas.',
        ctaLabel: 'Pedir esta pizza',
        ingredientsLabel: 'Ingredientes',
        sizesLabel: 'Tamano',
      },
      promo: {
        eyebrow: 'Promocion de la semana',
        title: 'Combo familiar con dos pizzas grandes, bebida y postre en una oferta especial.',
        description:
          'Pensado para grupos, noches en casa y campanas promocionales que necesitan una llamada a la accion clara entre secciones.',
        highlight: 'Disponible para delivery y retiro hasta el domingo.',
        ctaLabel: 'Quiero el combo',
      },
      whyChooseUs: {
        eyebrow: 'Por que elegir Ja Eh',
        title: 'Cuatro razones directas para convertir sin friccion.',
        description:
          'Esta seccion fue hecha para presentar diferenciales de producto y operacion con lectura rapida y tono comercial.',
        items: [
          {
            title: 'Ingredientes frescos',
            description: 'Tomate, queso y hojas aromaticas sostienen una entrega mas viva, fragante y confiable.',
          },
          {
            title: 'Masa artesanal',
            description: 'La fermentacion busca un borde ligero, centro suave y una textura que deja hablar al horno.',
          },
          {
            title: 'Entrega rapida',
            description: 'El flujo destaca el pedido agil por WhatsApp y el retiro eficiente sin pasos innecesarios.',
          },
          {
            title: 'Sabor intenso',
            description: 'Las recetas se sienten premium sin perder cercania ni deseo popular.',
          },
        ],
      },
      about: {
        eyebrow: 'Sobre la marca',
        title: 'Ja Eh nacio para ser la pizzeria del barrio con una identidad clara.',
        description:
          'El tono mezcla cercania local, visual contemporaneo y un posicionamiento que sirve tanto para portfolio como para negocios reales de comida.',
        storyTitle: 'Una marca calida, directa y facil de recordar',
        story:
          'Desde la masa abierta a mano hasta la atencion sin friccion, Ja Eh fue pensada para transmitir confianza, deseo y energia urbana. El resultado es una marca lista para crecer con nuevas campanas y futuras landing pages.',
        imageLabel: 'Placeholder de cocina y ambiente',
        imageDescription: 'Espacio reservado para foto futura del horno, mostrador o equipo.',
      },
      menu: {
        eyebrow: 'Vista previa del menu',
        title: 'Categorias organizadas para mostrar variedad sin complicar la decision.',
        description:
          'La vista previa agrupa el menu en categorias reales de la casa y muestra algunos sabores de cada una.',
        asideTitle: 'Quieres el menu completo?',
        asideDescription:
          'Envia un mensaje y recibe la version completa con tamanos, extras y combos disponibles.',
        asideBadge: 'Atencion rapida por WhatsApp',
        itemsLabel: 'Sabores',
        sizesLabel: 'Tamano disponible',
      },
      testimonials: {
        eyebrow: 'Clientes felices',
        title: 'Prueba social con tono local, ligero y comercial.',
        description:
          'Los testimonios son ficticios por ahora, pero la estructura ya esta lista para comentarios reales.',
        items: [
          {
            quote: 'El borde llego dorado, el relleno equilibrado y el pedido a tiempo. Una opcion facil para la noche del viernes.',
            author: 'Camila R.',
            detail: 'Pedido familiar',
          },
          {
            quote: 'Se siente como una marca nueva bien resuelta. La pizza llego caliente, linda y con sabor real de horno.',
            author: 'Diego M.',
            detail: 'Delivery local',
          },
          {
            quote: 'Me gusto el combo, la rapidez y lo directo del pedido. Una experiencia simple y muy bien presentada.',
            author: 'Fernanda S.',
            detail: 'Retiro en tienda',
          },
        ],
      },
      contact: {
        eyebrow: 'Contacto',
        title: 'Habla con Ja Eh para pedir, resolver dudas o solicitar el menu completo.',
        description:
          'El formulario mantiene la misma idea de captacion del proyecto: recoger interes de forma simple y dejar WhatsApp como ruta principal.',
        formTitle: 'Envia tu mensaje',
        formDescription: 'Completa los campos y el equipo respondera con atencion comercial.',
        successMessage: 'Mensaje enviado con exito. El equipo de Ja Eh respondera pronto.',
        errorMessage: 'No fue posible enviar ahora. Intenta de nuevo o escribe por WhatsApp.',
        requiredError: 'Completa todos los campos obligatorios.',
        fields: {
          name: 'Nombre',
          email: 'Correo',
          phone: 'Telefono / WhatsApp',
          subject: 'Asunto',
          message: 'Mensaje',
        },
        placeholders: {
          name: 'Tu nombre',
          email: 'tu@ejemplo.com',
          phone: '+55 11 99999-9999',
          subject: 'Quiero pedir un combo familiar',
          message: 'Cuenta que sabor, tamano o duda tienes.',
        },
        infoTitle: 'Informacion del negocio',
        addressLabel: 'Direccion',
        hoursLabel: 'Horario',
        deliveryLabel: 'Zona de entrega',
        address: 'Rua das Palmeiras, 240 - Centro, Sao Paulo - SP',
        hours: 'Martes a domingo, de 18:00 a 23:00',
        deliveryNote: 'Entregamos en barrios cercanos y confirmamos la tarifa antes de cerrar el pedido.',
        whatsappCta: 'Pedir por WhatsApp',
        whatsappMessage: 'Hola! Quiero hablar con Ja Eh sobre un pedido.',
      },
      footer: {
        description: 'Pizza artesanal con identidad fuerte, atencion agil y foco en conversion local.',
        navigation: [
          { label: 'Home', href: '#home' },
          { label: 'Menu', href: '#menu' },
          { label: 'About', href: '#about' },
          { label: 'Contact', href: '#contact' },
        ],
        navigationTitle: 'Navegacion',
        socialTitle: 'Redes sociales',
        rights: 'Ja Eh. Layout listo para portfolio y evolucion futura con activos reales.',
      },
    },
    cta: {
      orderNow: 'Pedir Ahora',
      viewMenu: 'Ver Menu',
      requestFullMenu: 'Solicitar Menu Completo',
      whatsappOrder: 'Pedir por WhatsApp',
      promo: 'Quiero el combo',
      submit: 'Enviar mensaje',
      submitting: 'Enviando...',
    },
  },
};
