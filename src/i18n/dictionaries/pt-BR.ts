const ptBRDictionary = {
  meta: {
    title: 'Ja Eh | Pizza artesanal para pedir agora',
    description:
      'Landing page da pizzaria Ja Eh com pizzas classicas, especiais, pedido por WhatsApp e formulario de contato para conversao local.',
  },
  navbar: {
    brandTag: 'Pizzaria urbana artesanal',
    languageLabel: 'Idioma',
    links: {
      home: 'Home',
      menu: 'Menu',
      about: 'About',
      contact: 'Contact',
    },
    ctaLabel: 'Pedir Agora',
    locales: {
      'pt-BR': 'PT-BR',
      en: 'EN',
      es: 'ES',
    },
  },
  hero: {
    eyebrow:
      'Forno quente, massa artesanal e sabores de pizzaria de bairro com visual pronto para portfolio',
    title: 'A pizza que acende a noite e faz o pedido parecer obvio.',
    description:
      'A Ja Eh combina borda dourada, molho intenso, queijo cremoso e sabores brasileiros muito reconheciveis para transformar delivery e retirada em uma experiencia comercial forte.',
    chips: {
      delivery: 'Delivery',
      pickup: 'Retirada',
      familyCombo: 'Noite da Pizza',
    },
    stats: {
      dispatch: { value: '25 min', label: 'media de saida' },
      flavors: { value: '26 sabores', label: 'no cardapio' },
      dough: { value: '8 fatias', label: 'pizza grande' },
    },
    primaryCta: 'Pedir Agora',
    secondaryCta: 'Ver Menu',
    visual: {
      eyebrow: 'Destaque da casa',
      title: 'Visual preparado para receber foto real da pizza principal da marca',
      placeholderLabel: 'Placeholder visual',
      description:
        'Estrutura pronta para trocar por imagem gerada ou foto profissional sem refazer o layout.',
    },
  },
  about: {
    eyebrow: 'Sobre a marca',
    title: 'Ja Eh nasceu para ser a pizzaria local que resolve a fome com identidade.',
    description:
      'O tom mistura proximidade de bairro, visual contemporaneo e um cardapio inspirado em pizzarias brasileiras reais.',
    storyTitle: 'Uma marca calorosa, direta e facil de lembrar',
    story:
      'Da massa aberta com cuidado ao atendimento sem atrito, a Ja Eh foi desenhada para passar desejo, seguranca e praticidade. O resultado e uma landing page de pizzaria pronta para portfolio e para futuros clientes locais.',
    imageLabel: 'Placeholder ambiente e preparo',
    imageDescription: 'Area reservada para foto do forno, bancada ou equipe em acao.',
  },
  menuPreview: {
    eyebrow: 'Preview do cardapio',
    title: 'Um menu mais realista, organizado por categorias de pizzaria local.',
    description:
      'As secoes abaixo usam um dataset estruturado para exibir sabores em destaque, categorias e precos base da casa.',
    featured: {
      eyebrow: 'Pizzas em destaque',
      title: 'Sabores pensados para abrir apetite e puxar o clique.',
      description:
        'A selecao principal vem do cardapio estruturado da Ja Eh, com sabores classicos e especiais que fazem sentido para uma pizzaria brasileira.',
      ingredientsLabel: 'Ingredientes',
      sizesLabel: 'Tamanho',
      ctaLabel: 'Pedir esta pizza',
      fromPriceLabel: 'a partir de',
    },
    promo: {
      eyebrow: 'Oferta da semana',
      title: 'Noite da Pizza em Familia',
      subtitle:
        'Monte sua noite perfeita com pizzas de sabores classicos e especiais feitas para compartilhar.',
      ctaLabel: 'Peca agora',
      highlightTag: '8 fatias',
    },
    categoriesTitle: 'Sabores',
    sizesTitle: 'Tamanho disponivel',
    asideTitle: 'Quer o cardapio completo?',
    asideDescription:
      'Envie uma mensagem e receba a versao integral com todos os sabores, adicionais e combinacoes disponiveis.',
    asideBadge: 'Atendimento rapido por WhatsApp',
    requestFullMenu: 'Solicitar Cardapio Completo',
    whatsappOrder: 'Pedir por WhatsApp',
    sizes: {
      grande: {
        label: 'Grande',
        slicesLabel: '8 fatias',
      },
    },
    categories: {
      classics: {
        name: 'Classicas',
        description: 'Sabores tradicionais que fazem parte de qualquer pizzaria de bairro forte.',
      },
      'chicken-and-meat': {
        name: 'Frango e Carnes',
        description: 'Opcoes com frango, bacon, lombo e sabores mais intensos.',
      },
      specials: {
        name: 'Especiais',
        description: 'Combinacoes com mais personalidade para destacar o cardapio.',
      },
      'fish-and-vegetarian': {
        name: 'Atum e Vegetarianas',
        description: 'Alternativas com atum, palmito e sabores mais leves.',
      },
    },
    pizzas: {
      mussarela: {
        name: 'Mussarela',
        description: 'Classica, simples e sempre confiavel para pedidos do dia a dia.',
        ingredients: ['molho de tomate', 'mussarela', 'oregano'],
        whatsappMessage: 'Ola! Quero pedir a pizza Mussarela da Ja Eh.',
        imageAlt: 'Placeholder da pizza Mussarela da Ja Eh.',
      },
      calabresa: {
        name: 'Calabresa',
        description: 'Um dos sabores mais pedidos, com perfil direto e muito familiar.',
        ingredients: ['molho de tomate', 'mussarela', 'calabresa fatiada', 'oregano'],
        whatsappMessage: 'Ola! Quero pedir a pizza Calabresa da Ja Eh.',
        imageAlt: 'Placeholder da pizza Calabresa da Ja Eh.',
      },
      'calabresa-com-cebola': {
        name: 'Calabresa com Cebola',
        description: 'Versao tradicional com cebola para um sabor ainda mais marcante.',
        ingredients: ['molho de tomate', 'mussarela', 'calabresa fatiada', 'cebola', 'oregano'],
        whatsappMessage: 'Ola! Quero pedir a pizza Calabresa com Cebola da Ja Eh.',
        imageAlt: 'Placeholder da pizza Calabresa com Cebola da Ja Eh.',
      },
      portuguesa: {
        name: 'Portuguesa',
        description: 'Combinacao brasileira muito conhecida e facil de vender.',
        ingredients: ['molho de tomate', 'mussarela', 'presunto', 'ovo', 'cebola', 'ervilha', 'azeitona', 'oregano'],
        whatsappMessage: 'Ola! Quero pedir a pizza Portuguesa da Ja Eh.',
        imageAlt: 'Placeholder da pizza Portuguesa da Ja Eh.',
      },
      marguerita: {
        name: 'Marguerita',
        description: 'Leve, elegante e otima para destacar o visual do cardapio.',
        ingredients: ['molho de tomate', 'mussarela', 'tomate', 'manjericao', 'oregano'],
        whatsappMessage: 'Ola! Quero pedir a pizza Marguerita da Ja Eh.',
        imageAlt: 'Placeholder da pizza Marguerita da Ja Eh.',
      },
      napolitana: {
        name: 'Napolitana',
        description: 'Sabor tradicional com perfil familiar e acabamento bem brasileiro.',
        ingredients: ['molho de tomate', 'mussarela', 'tomate', 'parmesao', 'oregano'],
        whatsappMessage: 'Ola! Quero pedir a pizza Napolitana da Ja Eh.',
        imageAlt: 'Placeholder da pizza Napolitana da Ja Eh.',
      },
      presunto: {
        name: 'Presunto',
        description: 'Opcao direta e popular para um cardapio enxuto e local.',
        ingredients: ['molho de tomate', 'mussarela', 'presunto', 'oregano'],
        whatsappMessage: 'Ola! Quero pedir a pizza Presunto da Ja Eh.',
        imageAlt: 'Placeholder da pizza Presunto da Ja Eh.',
      },
      bacon: {
        name: 'Bacon',
        description: 'Sabor forte para quem gosta de pizza mais marcante.',
        ingredients: ['molho de tomate', 'mussarela', 'bacon', 'oregano'],
        whatsappMessage: 'Ola! Quero pedir a pizza Bacon da Ja Eh.',
        imageAlt: 'Placeholder da pizza Bacon da Ja Eh.',
      },
      frango: {
        name: 'Frango',
        description: 'Versao simples de frango desfiado para um publico amplo.',
        ingredients: ['molho de tomate', 'mussarela', 'frango desfiado', 'oregano'],
        whatsappMessage: 'Ola! Quero pedir a pizza Frango da Ja Eh.',
        imageAlt: 'Placeholder da pizza Frango da Ja Eh.',
      },
      'frango-com-catupiry': {
        name: 'Frango com Catupiry',
        description: 'Um dos sabores mais fortes para conversao em pizzarias brasileiras.',
        ingredients: ['molho de tomate', 'mussarela', 'frango desfiado', 'catupiry', 'oregano'],
        whatsappMessage: 'Ola! Quero pedir a pizza Frango com Catupiry da Ja Eh.',
        imageAlt: 'Placeholder da pizza Frango com Catupiry da Ja Eh.',
      },
      'frango-com-bacon': {
        name: 'Frango com Bacon',
        description: 'Mistura de frango e bacon para um perfil mais indulgente.',
        ingredients: ['molho de tomate', 'mussarela', 'frango desfiado', 'bacon', 'oregano'],
        whatsappMessage: 'Ola! Quero pedir a pizza Frango com Bacon da Ja Eh.',
        imageAlt: 'Placeholder da pizza Frango com Bacon da Ja Eh.',
      },
      peperoni: {
        name: 'Peperoni',
        description: 'Sabor visualmente forte e excelente para destaque da landing page.',
        ingredients: ['molho de tomate', 'mussarela', 'peperoni', 'oregano'],
        whatsappMessage: 'Ola! Quero pedir a pizza Peperoni da Ja Eh.',
        imageAlt: 'Placeholder da pizza Peperoni da Ja Eh.',
      },
      lombo: {
        name: 'Lombo',
        description: 'Boa opcao para ampliar o cardapio com um sabor conhecido.',
        ingredients: ['molho de tomate', 'mussarela', 'lombo', 'oregano'],
        whatsappMessage: 'Ola! Quero pedir a pizza Lombo da Ja Eh.',
        imageAlt: 'Placeholder da pizza Lombo da Ja Eh.',
      },
      'lombo-com-catupiry': {
        name: 'Lombo com Catupiry',
        description: 'Combinacao forte para completar a secao de carnes.',
        ingredients: ['molho de tomate', 'mussarela', 'lombo', 'catupiry', 'oregano'],
        whatsappMessage: 'Ola! Quero pedir a pizza Lombo com Catupiry da Ja Eh.',
        imageAlt: 'Placeholder da pizza Lombo com Catupiry da Ja Eh.',
      },
      'quatro-queijos': {
        name: 'Quatro Queijos',
        description: 'Sabor classico especial, otimo para um menu com cara mais premium.',
        ingredients: ['molho de tomate', 'mussarela', 'catupiry', 'parmesao', 'provolone', 'oregano'],
        whatsappMessage: 'Ola! Quero pedir a pizza Quatro Queijos da Ja Eh.',
        imageAlt: 'Placeholder da pizza Quatro Queijos da Ja Eh.',
      },
      'cinco-queijos': {
        name: 'Cinco Queijos',
        description: 'Variacao mais intensa para reforcar o grupo dos sabores especiais.',
        ingredients: ['molho de tomate', 'mussarela', 'catupiry', 'parmesao', 'provolone', 'gorgonzola', 'oregano'],
        whatsappMessage: 'Ola! Quero pedir a pizza Cinco Queijos da Ja Eh.',
        imageAlt: 'Placeholder da pizza Cinco Queijos da Ja Eh.',
      },
      'moda-da-casa': {
        name: 'Moda da Casa',
        description: 'Sabor assinatura para dar personalidade propria ao cardapio.',
        ingredients: ['molho de tomate', 'mussarela', 'calabresa', 'presunto', 'cebola', 'azeitona', 'oregano'],
        whatsappMessage: 'Ola! Quero pedir a pizza Moda da Casa da Ja Eh.',
        imageAlt: 'Placeholder da pizza Moda da Casa da Ja Eh.',
      },
      paulista: {
        name: 'Paulista',
        description: 'Sabor regional que ajuda a dar identidade local ao cardapio.',
        ingredients: ['molho de tomate', 'mussarela', 'calabresa', 'cebola', 'tomate', 'oregano'],
        whatsappMessage: 'Ola! Quero pedir a pizza Paulista da Ja Eh.',
        imageAlt: 'Placeholder da pizza Paulista da Ja Eh.',
      },
      brasileira: {
        name: 'Brasileira',
        description: 'Combinacao com apelo popular para um cardapio bem brasileiro.',
        ingredients: ['molho de tomate', 'mussarela', 'presunto', 'milho', 'ovo', 'azeitona', 'oregano'],
        whatsappMessage: 'Ola! Quero pedir a pizza Brasileira da Ja Eh.',
        imageAlt: 'Placeholder da pizza Brasileira da Ja Eh.',
      },
      baiana: {
        name: 'Baiana',
        description: 'Opcao mais intensa e marcante para quem gosta de um toque picante.',
        ingredients: ['molho de tomate', 'mussarela', 'calabresa moida', 'cebola', 'pimenta', 'oregano'],
        whatsappMessage: 'Ola! Quero pedir a pizza Baiana da Ja Eh.',
        imageAlt: 'Placeholder da pizza Baiana da Ja Eh.',
      },
      toscana: {
        name: 'Toscana',
        description: 'Sabor robusto para reforcar a parte especial do cardapio.',
        ingredients: ['molho de tomate', 'mussarela', 'calabresa moida', 'oregano'],
        whatsappMessage: 'Ola! Quero pedir a pizza Toscana da Ja Eh.',
        imageAlt: 'Placeholder da pizza Toscana da Ja Eh.',
      },
      atum: {
        name: 'Atum',
        description: 'Classico de pizzaria para quem busca outra linha de sabor.',
        ingredients: ['molho de tomate', 'mussarela', 'atum', 'oregano'],
        whatsappMessage: 'Ola! Quero pedir a pizza Atum da Ja Eh.',
        imageAlt: 'Placeholder da pizza Atum da Ja Eh.',
      },
      'atum-com-cebola': {
        name: 'Atum com Cebola',
        description: 'Versao mais tradicional dentro da familia de atum.',
        ingredients: ['molho de tomate', 'mussarela', 'atum', 'cebola', 'oregano'],
        whatsappMessage: 'Ola! Quero pedir a pizza Atum com Cebola da Ja Eh.',
        imageAlt: 'Placeholder da pizza Atum com Cebola da Ja Eh.',
      },
      'atum-com-bacon': {
        name: 'Atum com Bacon',
        description: 'Combinacao diferente que chama atencao no menu.',
        ingredients: ['molho de tomate', 'mussarela', 'atum', 'bacon', 'oregano'],
        whatsappMessage: 'Ola! Quero pedir a pizza Atum com Bacon da Ja Eh.',
        imageAlt: 'Placeholder da pizza Atum com Bacon da Ja Eh.',
      },
      palmito: {
        name: 'Palmito',
        description: 'Opcao mais leve e muito comum em cardapios brasileiros.',
        ingredients: ['molho de tomate', 'mussarela', 'palmito', 'oregano'],
        whatsappMessage: 'Ola! Quero pedir a pizza Palmito da Ja Eh.',
        imageAlt: 'Placeholder da pizza Palmito da Ja Eh.',
      },
      'palmito-com-catupiry': {
        name: 'Palmito com Catupiry',
        description: 'Versao mais cremosa para complementar o menu vegetariano.',
        ingredients: ['molho de tomate', 'mussarela', 'palmito', 'catupiry', 'oregano'],
        whatsappMessage: 'Ola! Quero pedir a pizza Palmito com Catupiry da Ja Eh.',
        imageAlt: 'Placeholder da pizza Palmito com Catupiry da Ja Eh.',
      },
    },
  },
  benefits: {
    eyebrow: 'Por que escolher a Ja Eh',
    title: 'Quatro argumentos simples para converter sem enrolacao.',
    description:
      'A estrutura desta secao foi desenhada para apresentar diferenciais claros de produto e operacao, mantendo linguagem comercial e leitura rapida.',
    items: {
      freshIngredients: {
        title: 'Ingredientes frescos',
        description: 'Tomate, queijo e folhas entram para sustentar uma entrega mais viva, aromatica e confiavel.',
      },
      handcraftedDough: {
        title: 'Massa artesanal',
        description: 'Fermentacao pensada para borda leve, interior macio e textura que valoriza o forno.',
      },
      fastDelivery: {
        title: 'Entrega agil',
        description: 'Fluxo orientado a conversao com destaque para pedido rapido por WhatsApp e retirada eficiente.',
      },
      boldFlavor: {
        title: 'Sabor marcante',
        description: 'Receitas montadas para parecer premium sem perder apelo popular nem familiaridade.',
      },
    },
  },
  socialProof: {
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
    infoTitle: 'Informacoes da unidade',
    addressLabel: 'Endereco',
    hoursLabel: 'Horario',
    deliveryLabel: 'Area de entrega',
    address: 'Rua das Palmeiras, 240 - Centro, Sao Paulo - SP',
    openingHours: 'Todos os dias • 18:00 as 23:30',
    serviceAreaNote: 'Entregas em bairros proximos.',
    phone: '+55 11 99999-9999',
    whatsappCta: 'Pedir por WhatsApp',
    whatsappMessage: 'Ola! Quero falar com a Ja Eh sobre um pedido.',
  },
  form: {
    title: 'Envie sua mensagem',
    description: 'Preencha os campos abaixo e a equipe retorna com atendimento comercial.',
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
      subject: 'Quero pedir uma pizza grande',
      message: 'Conte qual sabor, tamanho ou duvida voce tem.',
    },
    submit: 'Enviar contato',
    submitting: 'Enviando...',
    validationMessage: 'Preencha todos os campos obrigatorios.',
    successMessage: 'Mensagem enviada com sucesso. A equipe da Ja Eh respondera em breve.',
    errorMessage: 'Nao foi possivel enviar agora. Tente novamente ou chame no WhatsApp.',
  },
  footer: {
    description: 'Pizza artesanal com identidade forte, atendimento agil e foco em conversao local.',
    navigationTitle: 'Navegacao',
    socialTitle: 'Redes sociais',
    rights: 'Ja Eh. Layout portfolio pronto para evoluir com ativos reais.',
    whatsappLabel: 'WhatsApp',
    instagramLabel: 'Instagram',
    emailLabel: 'E-mail',
  },
  images: {
    heroPizzaAlt: 'Ilustracao placeholder da pizza principal da Ja Eh.',
    aboutAlt: 'Area placeholder para foto do ambiente e preparo da Ja Eh.',
  },
} as const;

export default ptBRDictionary;
