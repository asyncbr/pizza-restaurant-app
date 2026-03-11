import type { Dictionary } from '@/src/i18n/get-dictionary';

const enDictionary: Dictionary = {
  meta: {
    title: 'Ja Eh | Artisan pizza built to convert',
    description:
      'Ja Eh pizza restaurant landing page with classic and specialty pizzas, WhatsApp ordering, and a contact form for local lead generation.',
  },
  navbar: {
    brandTag: 'Urban artisan pizzeria',
    languageLabel: 'Language',
    links: {
      home: 'Home',
      menu: 'Menu',
      about: 'About',
      contact: 'Contact',
    },
    ctaLabel: 'Order Now',
    locales: {
      'pt-BR': 'PT-BR',
      en: 'EN',
      es: 'ES',
    },
  },
  hero: {
    eyebrow:
      'Hot oven, artisan dough, and neighborhood pizzeria flavors packaged in a portfolio-ready landing page',
    title: 'The pizza that turns dinner into an easy yes.',
    description:
      'Ja Eh combines blistered crust, rich sauce, creamy cheese, and recognizable Brazilian pizzeria flavors to make delivery and pickup feel strong and commercial.',
    chips: {
      delivery: 'Delivery',
      pickup: 'Pickup',
      familyCombo: 'Pizza Night',
    },
    stats: {
      dispatch: { value: '25 min', label: 'average dispatch' },
      flavors: { value: '26 flavors', label: 'on the menu' },
      dough: { value: '8 slices', label: 'large pizza' },
    },
    primaryCta: 'Order Now',
    secondaryCta: 'View Menu',
    visual: {
      eyebrow: 'Ja Eh signature',
      title: 'Golden crust, generous cheese, and the kind of pizzeria flavor that settles the night.',
      placeholderLabel: 'Our mission',
      description:
        'Serve honest, well-built, memorable pizzas with quick service and a neighborhood feel that turns any order into a house ritual.',
    },
  },
  about: {
    eyebrow: 'About the brand',
    title: 'Ja Eh was created to be the neighborhood pizza place with a clear identity.',
    description:
      'The tone blends local warmth, contemporary visuals, and a menu inspired by real Brazilian pizzerias.',
    storyTitle: 'A warm, direct, easy-to-remember brand',
    story:
      'From carefully handled dough to low-friction service, Ja Eh was designed to communicate appetite, confidence, and convenience. The result is a pizza landing page ready for portfolios and future local clients.',
    imageLabel: 'Kitchen in motion',
    imageDescription: 'A hot oven, an active counter, and an operation built to deliver flavor with rhythm and consistency.',
  },
  menuPreview: {
    eyebrow: 'Menu preview',
    title: 'A more realistic menu, organized like a local pizzeria.',
    description:
      'The sections below use a structured dataset to show featured flavors, menu categories, and base pricing.',
    featured: {
      eyebrow: 'Featured pizzas',
      title: 'Flavors designed to build appetite and pull the click.',
      description:
        'The featured selection comes from Ja Eh’s structured menu, mixing classics and specialties that fit a real Brazilian pizzeria.',
      ingredientsLabel: 'Ingredients',
      sizesLabel: 'Size',
      ctaLabel: 'Order this pizza',
      fromPriceLabel: 'starting at',
    },
    promo: {
      eyebrow: 'Weekly special',
      title: 'Family Pizza Night',
      subtitle:
        'Build the perfect night with classic and specialty pizzas made to share.',
      ctaLabel: 'Order now',
      highlightTag: '8 slices',
    },
    categoriesTitle: 'Flavors',
    sizesTitle: 'Available size',
    asideTitle: 'Need the full menu?',
    asideDescription:
      'Send a message and get the full version with every flavor, add-on, and available combination.',
    asideBadge: 'Fast WhatsApp service',
    requestFullMenu: 'Request Full Menu',
    whatsappOrder: 'Order on WhatsApp',
    sizes: {
      grande: {
        label: 'Large',
        slicesLabel: '8 slices',
      },
    },
    categories: {
      classics: {
        name: 'Classics',
        description: 'Traditional flavors that belong on any strong neighborhood pizzeria menu.',
      },
      'chicken-and-meat': {
        name: 'Chicken and Meat',
        description: 'Options with chicken, bacon, pork loin, and richer flavors.',
      },
      specials: {
        name: 'Specialties',
        description: 'More distinctive combinations that help the menu stand out.',
      },
      'fish-and-vegetarian': {
        name: 'Tuna and Vegetarian',
        description: 'Alternatives with tuna, hearts of palm, and lighter profiles.',
      },
    },
    pizzas: {
      mussarela: { name: 'Mozzarella', description: 'Classic, simple, and always reliable for everyday orders.', ingredients: ['tomato sauce', 'mozzarella', 'oregano'], whatsappMessage: 'Hello! I want to order the Mozzarella pizza from Ja Eh.', imageAlt: 'Placeholder for Ja Eh Mozzarella pizza.' },
      calabresa: { name: 'Calabresa', description: 'One of the most ordered flavors, with a direct and familiar profile.', ingredients: ['tomato sauce', 'mozzarella', 'sliced calabresa sausage', 'oregano'], whatsappMessage: 'Hello! I want to order the Calabresa pizza from Ja Eh.', imageAlt: 'Placeholder for Ja Eh Calabresa pizza.' },
      'calabresa-com-cebola': { name: 'Calabresa with Onion', description: 'Traditional version with onion for an even stronger flavor.', ingredients: ['tomato sauce', 'mozzarella', 'sliced calabresa sausage', 'onion', 'oregano'], whatsappMessage: 'Hello! I want to order the Calabresa with Onion pizza from Ja Eh.', imageAlt: 'Placeholder for Ja Eh Calabresa with Onion pizza.' },
      portuguesa: { name: 'Portuguesa', description: 'A well-known Brazilian combination that is easy to sell.', ingredients: ['tomato sauce', 'mozzarella', 'ham', 'egg', 'onion', 'peas', 'olives', 'oregano'], whatsappMessage: 'Hello! I want to order the Portuguesa pizza from Ja Eh.', imageAlt: 'Placeholder for Ja Eh Portuguesa pizza.' },
      marguerita: { name: 'Marguerita', description: 'Light, elegant, and great for visual menu appeal.', ingredients: ['tomato sauce', 'mozzarella', 'tomato', 'basil', 'oregano'], whatsappMessage: 'Hello! I want to order the Marguerita pizza from Ja Eh.', imageAlt: 'Placeholder for Ja Eh Marguerita pizza.' },
      napolitana: { name: 'Napolitana', description: 'Traditional flavor with a family-friendly and very Brazilian finish.', ingredients: ['tomato sauce', 'mozzarella', 'tomato', 'parmesan', 'oregano'], whatsappMessage: 'Hello! I want to order the Napolitana pizza from Ja Eh.', imageAlt: 'Placeholder for Ja Eh Napolitana pizza.' },
      presunto: { name: 'Ham', description: 'A direct and popular option for a lean local menu.', ingredients: ['tomato sauce', 'mozzarella', 'ham', 'oregano'], whatsappMessage: 'Hello! I want to order the Ham pizza from Ja Eh.', imageAlt: 'Placeholder for Ja Eh Ham pizza.' },
      bacon: { name: 'Bacon', description: 'A stronger flavor for people who want a richer pizza.', ingredients: ['tomato sauce', 'mozzarella', 'bacon', 'oregano'], whatsappMessage: 'Hello! I want to order the Bacon pizza from Ja Eh.', imageAlt: 'Placeholder for Ja Eh Bacon pizza.' },
      frango: { name: 'Chicken', description: 'A simple shredded chicken version for a broad audience.', ingredients: ['tomato sauce', 'mozzarella', 'shredded chicken', 'oregano'], whatsappMessage: 'Hello! I want to order the Chicken pizza from Ja Eh.', imageAlt: 'Placeholder for Ja Eh Chicken pizza.' },
      'frango-com-catupiry': { name: 'Chicken with Catupiry', description: 'One of the strongest conversion flavors in Brazilian pizzerias.', ingredients: ['tomato sauce', 'mozzarella', 'shredded chicken', 'catupiry', 'oregano'], whatsappMessage: 'Hello! I want to order the Chicken with Catupiry pizza from Ja Eh.', imageAlt: 'Placeholder for Ja Eh Chicken with Catupiry pizza.' },
      'frango-com-bacon': { name: 'Chicken with Bacon', description: 'A chicken and bacon blend for a more indulgent profile.', ingredients: ['tomato sauce', 'mozzarella', 'shredded chicken', 'bacon', 'oregano'], whatsappMessage: 'Hello! I want to order the Chicken with Bacon pizza from Ja Eh.', imageAlt: 'Placeholder for Ja Eh Chicken with Bacon pizza.' },
      peperoni: { name: 'Peperoni', description: 'A visually strong flavor and excellent landing-page highlight.', ingredients: ['tomato sauce', 'mozzarella', 'peperoni', 'oregano'], whatsappMessage: 'Hello! I want to order the Peperoni pizza from Ja Eh.', imageAlt: 'Placeholder for Ja Eh Peperoni pizza.' },
      lombo: { name: 'Pork Loin', description: 'A good option to broaden the menu with a familiar flavor.', ingredients: ['tomato sauce', 'mozzarella', 'pork loin', 'oregano'], whatsappMessage: 'Hello! I want to order the Pork Loin pizza from Ja Eh.', imageAlt: 'Placeholder for Ja Eh Pork Loin pizza.' },
      'lombo-com-catupiry': { name: 'Pork Loin with Catupiry', description: 'A stronger combination to round out the meat section.', ingredients: ['tomato sauce', 'mozzarella', 'pork loin', 'catupiry', 'oregano'], whatsappMessage: 'Hello! I want to order the Pork Loin with Catupiry pizza from Ja Eh.', imageAlt: 'Placeholder for Ja Eh Pork Loin with Catupiry pizza.' },
      'quatro-queijos': { name: 'Four Cheeses', description: 'A classic specialty flavor, great for a more premium-feeling menu.', ingredients: ['tomato sauce', 'mozzarella', 'catupiry', 'parmesan', 'provolone', 'oregano'], whatsappMessage: 'Hello! I want to order the Four Cheeses pizza from Ja Eh.', imageAlt: 'Placeholder for Ja Eh Four Cheeses pizza.' },
      'cinco-queijos': { name: 'Five Cheeses', description: 'A deeper variation that strengthens the specialty group.', ingredients: ['tomato sauce', 'mozzarella', 'catupiry', 'parmesan', 'provolone', 'gorgonzola', 'oregano'], whatsappMessage: 'Hello! I want to order the Five Cheeses pizza from Ja Eh.', imageAlt: 'Placeholder for Ja Eh Five Cheeses pizza.' },
      'moda-da-casa': { name: 'House Style', description: 'A signature flavor that gives the menu its own personality.', ingredients: ['tomato sauce', 'mozzarella', 'calabresa sausage', 'ham', 'onion', 'olives', 'oregano'], whatsappMessage: 'Hello! I want to order the House Style pizza from Ja Eh.', imageAlt: 'Placeholder for Ja Eh House Style pizza.' },
      paulista: { name: 'Paulista', description: 'A regional flavor that adds local identity to the menu.', ingredients: ['tomato sauce', 'mozzarella', 'calabresa sausage', 'onion', 'tomato', 'oregano'], whatsappMessage: 'Hello! I want to order the Paulista pizza from Ja Eh.', imageAlt: 'Placeholder for Ja Eh Paulista pizza.' },
      brasileira: { name: 'Brasileira', description: 'A popular combination for a deeply Brazilian menu.', ingredients: ['tomato sauce', 'mozzarella', 'ham', 'corn', 'egg', 'olives', 'oregano'], whatsappMessage: 'Hello! I want to order the Brasileira pizza from Ja Eh.', imageAlt: 'Placeholder for Ja Eh Brasileira pizza.' },
      baiana: { name: 'Baiana', description: 'A more intense option for those who like a spicy touch.', ingredients: ['tomato sauce', 'mozzarella', 'ground calabresa sausage', 'onion', 'pepper', 'oregano'], whatsappMessage: 'Hello! I want to order the Baiana pizza from Ja Eh.', imageAlt: 'Placeholder for Ja Eh Baiana pizza.' },
      toscana: { name: 'Toscana', description: 'A robust flavor that strengthens the specialty side of the menu.', ingredients: ['tomato sauce', 'mozzarella', 'ground calabresa sausage', 'oregano'], whatsappMessage: 'Hello! I want to order the Toscana pizza from Ja Eh.', imageAlt: 'Placeholder for Ja Eh Toscana pizza.' },
      atum: { name: 'Tuna', description: 'A pizzeria classic for those who want another flavor family.', ingredients: ['tomato sauce', 'mozzarella', 'tuna', 'oregano'], whatsappMessage: 'Hello! I want to order the Tuna pizza from Ja Eh.', imageAlt: 'Placeholder for Ja Eh Tuna pizza.' },
      'atum-com-cebola': { name: 'Tuna with Onion', description: 'The more traditional version inside the tuna family.', ingredients: ['tomato sauce', 'mozzarella', 'tuna', 'onion', 'oregano'], whatsappMessage: 'Hello! I want to order the Tuna with Onion pizza from Ja Eh.', imageAlt: 'Placeholder for Ja Eh Tuna with Onion pizza.' },
      'atum-com-bacon': { name: 'Tuna with Bacon', description: 'A different combination that draws attention on the menu.', ingredients: ['tomato sauce', 'mozzarella', 'tuna', 'bacon', 'oregano'], whatsappMessage: 'Hello! I want to order the Tuna with Bacon pizza from Ja Eh.', imageAlt: 'Placeholder for Ja Eh Tuna with Bacon pizza.' },
      palmito: { name: 'Hearts of Palm', description: 'A lighter option commonly found on Brazilian menus.', ingredients: ['tomato sauce', 'mozzarella', 'hearts of palm', 'oregano'], whatsappMessage: 'Hello! I want to order the Hearts of Palm pizza from Ja Eh.', imageAlt: 'Placeholder for Ja Eh Hearts of Palm pizza.' },
      'palmito-com-catupiry': { name: 'Hearts of Palm with Catupiry', description: 'A creamier version to complete the vegetarian side of the menu.', ingredients: ['tomato sauce', 'mozzarella', 'hearts of palm', 'catupiry', 'oregano'], whatsappMessage: 'Hello! I want to order the Hearts of Palm with Catupiry pizza from Ja Eh.', imageAlt: 'Placeholder for Ja Eh Hearts of Palm with Catupiry pizza.' },
    },
  },
  benefits: {
    eyebrow: 'Why choose Ja Eh',
    title: 'Four direct reasons to convert without friction.',
    description:
      'This section was built to present product and service differentiators in a fast, commercial way.',
    items: {
      freshIngredients: { title: 'Fresh ingredients', description: 'Tomato, cheese, and herbs support a brighter, more aromatic, more trustworthy delivery experience.' },
      handcraftedDough: { title: 'Handcrafted dough', description: 'Fermentation is tuned for a lighter crust, soft interior, and a texture that lets the oven show up.' },
      fastDelivery: { title: 'Fast delivery', description: 'The funnel keeps WhatsApp ordering and pickup front and center for quick conversion.' },
      boldFlavor: { title: 'Bold flavor', description: 'Recipes feel premium without losing familiarity or broad neighborhood appeal.' },
    },
  },
  socialProof: {
    eyebrow: 'Happy customers',
    title: 'Social proof with a local, light, commercial tone.',
    description: 'These testimonials are mock content for now, but the structure is ready for real reviews.',
    items: [
      { quote: 'The crust arrived blistered, the topping felt balanced, and the order got here on time. Easy Friday-night choice.', author: 'Camila R.', detail: 'Family order' },
      { quote: 'It looks like a well-resolved new brand. The pizza arrived hot, attractive, and with real oven character.', author: 'Diego M.', detail: 'Local delivery' },
      { quote: 'I liked the combo, the speed, and how direct the ordering flow is. Simple experience, very well presented.', author: 'Fernanda S.', detail: 'Store pickup' },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Talk to Ja Eh to order, ask questions, or request the full menu.',
    description: 'The form keeps the same lead-generation approach: capture intent simply and keep WhatsApp as the main conversion route.',
    infoTitle: 'Business info',
    addressLabel: 'Address',
    hoursLabel: 'Opening hours',
    deliveryLabel: 'Delivery area',
    address: '240 Palmeiras Street - Downtown, Sao Paulo - SP',
    openingHours: 'Every day • 6:00 PM to 11:30 PM',
    serviceAreaNote: 'Delivery available in nearby neighborhoods.',
    phone: '+55 11 99999-9999',
    whatsappCta: 'Order on WhatsApp',
    whatsappMessage: 'Hello! I want to talk to Ja Eh about an order.',
  },
  form: {
    title: 'Send your message',
    description: 'Fill in the fields below and the team will respond with commercial assistance.',
    fields: { name: 'Name', email: 'Email', phone: 'Phone / WhatsApp', subject: 'Subject', message: 'Message' },
    placeholders: { name: 'Your name', email: 'you@example.com', phone: '+55 11 99999-9999', subject: 'I want to order a large pizza', message: 'Tell us which flavor, size, or question you have.' },
    submit: 'Send contact',
    submitting: 'Sending...',
    validationMessage: 'Fill in all required fields.',
    successMessage: 'Message sent successfully. The Ja Eh team will reply soon.',
    errorMessage: 'The message could not be sent right now. Try again or use WhatsApp.',
  },
  footer: {
    description: 'Artisan pizza with bold identity, fast service, and strong local conversion focus.',
    navigationTitle: 'Navigation',
    socialTitle: 'Social',
    rights: 'Ja Eh. Portfolio-ready layout prepared to evolve with real assets.',
    whatsappLabel: 'WhatsApp',
    instagramLabel: 'Instagram',
    emailLabel: 'Email',
  },
  images: {
    heroPizzaAlt: 'Placeholder illustration for Ja Eh main pizza.',
    aboutAlt: 'Placeholder area for a Ja Eh kitchen and atmosphere photo.',
  },
};

export default enDictionary;
