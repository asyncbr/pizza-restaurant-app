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

type PizzaCard = {
  title: string;
  description: string;
  price: string;
  imageLabel: string;
  cta: string;
  whatsappMessage: string;
};

type WhyChooseItem = {
  title: string;
  description: string;
};

type MenuCategory = {
  title: string;
  items: string[];
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
      items: PizzaCard[];
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
      categories: MenuCategory[];
      asideTitle: string;
      asideDescription: string;
      asideBadge: string;
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
          'A primeira selecao da Ja Eh equilibra classicos muito desejados e combinacoes com assinatura, mantendo um visual forte para portfolio e futuras adaptacoes comerciais.',
        items: [
          {
            title: 'Margherita do Forno',
            description: 'Molho de tomate intenso, mozzarella cremosa, manjericao fresco e azeite finalizado na saida do forno.',
            price: 'A partir de R$ 42',
            imageLabel: 'Placeholder Margherita',
            cta: 'Pedir esta pizza',
            whatsappMessage: 'Ola! Quero pedir a pizza Margherita do Forno da Ja Eh.',
          },
          {
            title: 'Pepperoni Arrabbiata',
            description: 'Pepperoni crocante, queijo generoso e toque levemente picante para um sabor mais marcante.',
            price: 'A partir de R$ 48',
            imageLabel: 'Placeholder Pepperoni',
            cta: 'Quero pepperoni',
            whatsappMessage: 'Ola! Quero pedir a pizza Pepperoni Arrabbiata da Ja Eh.',
          },
          {
            title: 'Quattro Formaggi',
            description: 'Mozzarella, gorgonzola, parmesao e catupiry em uma combinacao cremosa e intensa.',
            price: 'A partir de R$ 51',
            imageLabel: 'Placeholder Quatro Queijos',
            cta: 'Pedir quatro queijos',
            whatsappMessage: 'Ola! Quero pedir a pizza Quattro Formaggi da Ja Eh.',
          },
          {
            title: 'Calabresa da Casa',
            description: 'Calabresa fatiada, cebola roxa suave, molho da casa e finalizacao com oregano tostado.',
            price: 'A partir de R$ 45',
            imageLabel: 'Placeholder Calabresa',
            cta: 'Pedir calabresa',
            whatsappMessage: 'Ola! Quero pedir a pizza Calabresa da Casa da Ja Eh.',
          },
          {
            title: 'Pesto Burrata',
            description: 'Base verde de pesto, tomate assado, burrata cremosa e crocancia delicada de castanhas.',
            price: 'A partir de R$ 56',
            imageLabel: 'Placeholder Burrata',
            cta: 'Pedir burrata',
            whatsappMessage: 'Ola! Quero pedir a pizza Pesto Burrata da Ja Eh.',
          },
          {
            title: 'Chocolate & Morango',
            description: 'Pizza doce para fechar o pedido com ganache aveludada, morangos frescos e leve toque crocante.',
            price: 'A partir de R$ 39',
            imageLabel: 'Placeholder Doce',
            cta: 'Pedir pizza doce',
            whatsappMessage: 'Ola! Quero pedir a pizza doce Chocolate & Morango da Ja Eh.',
          },
        ],
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
          'O cardapio parcial antecipa a experiencia de compra e deixa espaco para encaminhar o cliente para WhatsApp ou menu completo.',
        categories: [
          {
            title: 'Classic Pizzas',
            items: ['Margherita do Forno', 'Calabresa da Casa', 'Portuguesa Moderna'],
          },
          {
            title: 'Special Pizzas',
            items: ['Pepperoni Arrabbiata', 'Pesto Burrata', 'Parma com Rucula'],
          },
          {
            title: 'Sweet Pizzas',
            items: ['Chocolate & Morango', 'Banana com Canela', 'Romeu e Julieta'],
          },
          {
            title: 'Drinks',
            items: ['Refrigerantes', 'Cha gelado artesanal', 'Suco natural'],
          },
        ],
        asideTitle: 'Quer o cardapio completo?',
        asideDescription:
          'Envie uma mensagem e receba a versao integral com tamanhos, adicionais e combos disponiveis.',
        asideBadge: 'Atendimento rapido por WhatsApp',
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
          'Ja Eh launches with a mix of high-demand classics and signature combinations, keeping the presentation strong for portfolio use and future commercial rollout.',
        items: [
          {
            title: 'Oven Margherita',
            description: 'Rich tomato sauce, creamy mozzarella, fresh basil, and olive oil finished right out of the oven.',
            price: 'Starting at $12',
            imageLabel: 'Margherita placeholder',
            cta: 'Order this pizza',
            whatsappMessage: 'Hello! I want to order the Oven Margherita pizza from Ja Eh.',
          },
          {
            title: 'Pepperoni Arrabbiata',
            description: 'Crispy pepperoni, generous cheese, and a lightly spicy edge for a sharper flavor profile.',
            price: 'Starting at $14',
            imageLabel: 'Pepperoni placeholder',
            cta: 'I want pepperoni',
            whatsappMessage: 'Hello! I want to order the Pepperoni Arrabbiata pizza from Ja Eh.',
          },
          {
            title: 'Quattro Formaggi',
            description: 'Mozzarella, gorgonzola, parmesan, and creamy catupiry in a deep, indulgent combination.',
            price: 'Starting at $15',
            imageLabel: 'Four cheese placeholder',
            cta: 'Order four cheese',
            whatsappMessage: 'Hello! I want to order the Quattro Formaggi pizza from Ja Eh.',
          },
          {
            title: 'House Calabresa',
            description: 'Sliced sausage, soft red onion, house tomato base, and toasted oregano on top.',
            price: 'Starting at $13',
            imageLabel: 'Calabresa placeholder',
            cta: 'Order calabresa',
            whatsappMessage: 'Hello! I want to order the House Calabresa pizza from Ja Eh.',
          },
          {
            title: 'Pesto Burrata',
            description: 'Herby pesto base, roasted tomato, creamy burrata, and a delicate nut crunch.',
            price: 'Starting at $16',
            imageLabel: 'Burrata placeholder',
            cta: 'Order burrata',
            whatsappMessage: 'Hello! I want to order the Pesto Burrata pizza from Ja Eh.',
          },
          {
            title: 'Chocolate & Strawberry',
            description: 'A dessert pizza finished with smooth ganache, fresh strawberries, and a light crisp topping.',
            price: 'Starting at $11',
            imageLabel: 'Dessert placeholder',
            cta: 'Order dessert pizza',
            whatsappMessage: 'Hello! I want to order the Chocolate & Strawberry dessert pizza from Ja Eh.',
          },
        ],
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
          'The partial menu previews the experience while keeping room to move the customer toward WhatsApp or the full menu.',
        categories: [
          {
            title: 'Classic Pizzas',
            items: ['Oven Margherita', 'House Calabresa', 'Modern Portuguesa'],
          },
          {
            title: 'Special Pizzas',
            items: ['Pepperoni Arrabbiata', 'Pesto Burrata', 'Parma with Arugula'],
          },
          {
            title: 'Sweet Pizzas',
            items: ['Chocolate & Strawberry', 'Banana Cinnamon', 'Romeo and Juliet'],
          },
          {
            title: 'Drinks',
            items: ['Soft drinks', 'Craft iced tea', 'Fresh juice'],
          },
        ],
        asideTitle: 'Need the full menu?',
        asideDescription:
          'Send a message and get the complete version with sizes, add-ons, and available combo deals.',
        asideBadge: 'Fast WhatsApp service',
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
          'Ja Eh arranca con una mezcla de clasicos deseados y recetas con firma propia, manteniendo una presentacion fuerte para portfolio y futuros clientes.',
        items: [
          {
            title: 'Margherita del Horno',
            description: 'Salsa de tomate intensa, mozzarella cremosa, albahaca fresca y aceite de oliva al salir del horno.',
            price: 'Desde R$ 42',
            imageLabel: 'Placeholder Margherita',
            cta: 'Pedir esta pizza',
            whatsappMessage: 'Hola! Quiero pedir la pizza Margherita del Horno de Ja Eh.',
          },
          {
            title: 'Pepperoni Arrabbiata',
            description: 'Pepperoni crujiente, queso generoso y un toque ligeramente picante para un sabor mas marcado.',
            price: 'Desde R$ 48',
            imageLabel: 'Placeholder Pepperoni',
            cta: 'Quiero pepperoni',
            whatsappMessage: 'Hola! Quiero pedir la pizza Pepperoni Arrabbiata de Ja Eh.',
          },
          {
            title: 'Quattro Formaggi',
            description: 'Mozzarella, gorgonzola, parmesano y catupiry en una combinacion cremosa e intensa.',
            price: 'Desde R$ 51',
            imageLabel: 'Placeholder Cuatro Quesos',
            cta: 'Pedir cuatro quesos',
            whatsappMessage: 'Hola! Quiero pedir la pizza Quattro Formaggi de Ja Eh.',
          },
          {
            title: 'Calabresa de la Casa',
            description: 'Calabresa en lonjas, cebolla morada suave, salsa de la casa y oregano tostado.',
            price: 'Desde R$ 45',
            imageLabel: 'Placeholder Calabresa',
            cta: 'Pedir calabresa',
            whatsappMessage: 'Hola! Quiero pedir la pizza Calabresa de la Casa de Ja Eh.',
          },
          {
            title: 'Pesto Burrata',
            description: 'Base verde de pesto, tomate asado, burrata cremosa y crocante delicado de frutos secos.',
            price: 'Desde R$ 56',
            imageLabel: 'Placeholder Burrata',
            cta: 'Pedir burrata',
            whatsappMessage: 'Hola! Quiero pedir la pizza Pesto Burrata de Ja Eh.',
          },
          {
            title: 'Chocolate y Fresa',
            description: 'Pizza dulce con ganache aterciopelada, fresas frescas y un toque crocante.',
            price: 'Desde R$ 39',
            imageLabel: 'Placeholder Dulce',
            cta: 'Pedir pizza dulce',
            whatsappMessage: 'Hola! Quiero pedir la pizza dulce Chocolate y Fresa de Ja Eh.',
          },
        ],
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
          'El menu parcial anticipa la experiencia y deja espacio para llevar al cliente a WhatsApp o al menu completo.',
        categories: [
          {
            title: 'Classic Pizzas',
            items: ['Margherita del Horno', 'Calabresa de la Casa', 'Portuguesa Moderna'],
          },
          {
            title: 'Special Pizzas',
            items: ['Pepperoni Arrabbiata', 'Pesto Burrata', 'Parma con Rugula'],
          },
          {
            title: 'Sweet Pizzas',
            items: ['Chocolate y Fresa', 'Banana con Canela', 'Romeo y Julieta'],
          },
          {
            title: 'Drinks',
            items: ['Gaseosas', 'Te helado artesanal', 'Jugo natural'],
          },
        ],
        asideTitle: 'Quieres el menu completo?',
        asideDescription:
          'Envia un mensaje y recibe la version completa con tamanos, extras y combos disponibles.',
        asideBadge: 'Atencion rapida por WhatsApp',
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
