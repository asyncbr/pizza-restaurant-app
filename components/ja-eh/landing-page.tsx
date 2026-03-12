import { useState, type FormEvent, type ReactNode } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {
  buildPizzaOrderMessage,
  buildWhatsAppLink,
  siteConfig,
  type SocialLinkId,
} from '@/lib/site';
import { getFeaturedPizzas, getOrderedMenuCategories, getPizzasByCategory, type PizzaMenuItem, type PizzaSizeId } from '@/lib/products';
import type { Locale } from '@/src/i18n/config';
import type { Dictionary } from '@/src/i18n/get-dictionary';
import { LocaleSwitcher } from '@/components/ja-eh/locale-switcher';

type ContactFormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type LandingPageProps = {
  locale: Locale;
  dictionary: Dictionary;
};

function SectionHeading({
  eyebrow,
  title,
  description,
  invert = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  invert?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p className={`text-sm font-semibold uppercase tracking-[0.32em] ${invert ? 'text-brand-gold/80' : 'text-brand-red/80'}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-4 text-3xl font-semibold tracking-tight sm:text-4xl ${invert ? 'text-brand-creamLight' : 'text-brand-text'}`}>
        {title}
      </h2>
      <p className={`mt-4 text-base leading-7 sm:text-lg ${invert ? 'text-brand-cream/80' : 'text-brand-brownSoft'}`}>
        {description}
      </p>
    </div>
  );
}

function IconBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-red text-brand-cream shadow-[0_12px_24px_rgba(191,50,17,0.28)]">
      {children}
    </span>
  );
}

function PizzaIcon() {
  return <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true"><path d="M12.3 2.1C8 2.2 4.1 3.3 1 5.3l8.8 16.4c.1.2.3.3.5.3s.4-.1.5-.3L19.7 5c-2.1-1.9-4.8-2.9-7.4-2.9Zm0 2c1.8 0 3.8.5 5.5 1.6l-6.9 13-6.9-12.9c2.1-1.1 4.5-1.7 7.3-1.7Zm-2.8 4.4a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8Zm4.8 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm-2.1 4.1a1.2 1.2 0 1 0 0 2.5 1.2 1.2 0 0 0 0-2.5Z" /></svg>;
}

function LeafIcon() {
  return <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true"><path d="M18.9 3.4c-4.7.1-8 1.5-10 4-2 2.6-2.5 6.2-1.6 10.8l.2 1 .9-.4c4.7-1.9 7.9-4.4 9.7-7.4 1.8-3 2.2-6.2 1.4-9.8l-.1-.6-.5-.1ZM8.9 16.2c-.2-2.8.4-5 1.8-6.8 1.4-1.8 3.7-3 7-3.6.3 2.7-.1 5-1.4 7.1-1.3 2.1-3.4 3.8-6.3 5.1-.1-1.4.1-2.8.7-4.2.6-1.4 1.6-2.6 2.9-3.8l-1.2-1.1c-1.4 1.3-2.5 2.7-3.2 4.2-.2.5-.4 1-.5 1.5Z" /></svg>;
}

function DeliveryIcon() {
  return <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true"><path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h10A1.5 1.5 0 0 1 16 6.5V8h1.7c.5 0 1 .3 1.2.7l2 3.4c.1.2.1.4.1.6v3.8a1 1 0 0 1-1 1h-.8a2.7 2.7 0 0 1-5.3 0H10a2.7 2.7 0 0 1-5.3 0H4a1 1 0 0 1-1-1V6.5Zm2 0V15h.3a2.7 2.7 0 0 1 5.4 0h3.6V6.5H5Zm13 3.5V15h1v-2l-1-3Zm-1.5 5.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Zm-9.2 0a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z" /></svg>;
}

function FlameIcon() {
  return <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true"><path d="M13.3 2.8c.2 2-.5 3.6-2 4.8-1.5 1.2-2.4 2.5-2.8 3.8-.4 1.4-.1 2.9 1 4.5.1-1.3.5-2.3 1.3-3.2.8-.9 1.6-1.7 2.4-2.4 1 1.2 1.7 2.3 2.1 3.5.4 1.2.3 2.5-.2 3.9 1.1-.8 1.8-1.8 2.2-3.2.4-1.4.2-3-.5-4.8-.7-1.8-1.8-3.4-3.5-4.9Zm-1.5 7.8c-2.8 2.2-4.2 4.5-4.2 6.8 0 1.4.5 2.6 1.4 3.5.9.9 2 1.4 3.4 1.4s2.5-.5 3.4-1.4c.9-.9 1.4-2.1 1.4-3.5 0-2.2-1.5-4.5-4.3-6.8-.2 1.1-.6 2-1.1 2.6-.5.6-1.2 1.1-2 1.5.7-1.1 1-2.4 1-4.1Z" /></svg>;
}

function formatPrice(locale: Locale, price: number) {
  return new Intl.NumberFormat(locale, { style: 'currency', currency: 'BRL' }).format(price);
}

function getSizeLabel(menuPreview: Dictionary['menuPreview'], sizeId: PizzaSizeId) {
  const size = menuPreview.sizes[sizeId];
  return `${size.label} • ${size.slicesLabel}`;
}

function getPizzaCopy(
  menuPreview: Dictionary['menuPreview'],
  slug: PizzaMenuItem['slug']
) {
  return menuPreview.pizzas[slug as keyof Dictionary['menuPreview']['pizzas']];
}

function hasCustomPizzaImage(imagePath: string) {
  return !imagePath.startsWith('/images/pizza/');
}

function getSocialLabel(footer: Dictionary['footer'], id: SocialLinkId) {
  switch (id) {
    case 'instagram':
      return footer.instagramLabel;
    case 'x':
      return footer.xLabel;
    case 'facebook':
      return footer.facebookLabel;
    case 'tiktok':
      return footer.tiktokLabel;
  }
}

function NavbarSection({ locale, dictionary }: { locale: Locale; dictionary: Dictionary['navbar'] }) {
  return (
    <header className="relative z-30 rounded-[2rem] border border-brand-border/40 bg-brand-brown/90 px-4 py-4 shadow-[0_30px_80px_rgba(29,13,3,0.28)] backdrop-blur-xl sm:px-6 lg:sticky lg:top-4">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <a href="#home" className="flex min-w-0 flex-1 items-center gap-4">
          <div className="overflow-hidden rounded-2xl border border-brand-border/50 bg-brand-cream p-1 shadow-[0_12px_30px_rgba(29,13,3,0.18)]">
            <Image src="/jae-logo.png" alt={`${siteConfig.brandName} logo`} width={60} height={60} className="h-14 w-14 rounded-xl object-cover" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-gold/80">{dictionary.brandTag}</p>
            <p className="mt-2 text-2xl font-semibold tracking-[0.08em] text-brand-creamLight">{siteConfig.brandName}</p>
          </div>
        </a>
        <nav aria-label="Primary" className="grid grid-cols-2 gap-2 text-sm text-brand-cream sm:flex sm:flex-wrap sm:items-center sm:gap-5">
          <a href="#home" className="rounded-full border border-brand-border/25 bg-brand-cream/5 px-3 py-2 text-center transition hover:border-brand-gold/50 hover:text-brand-creamLight sm:border-0 sm:bg-transparent sm:px-0 sm:py-0">{dictionary.links.home}</a>
          <a href="#menu" className="rounded-full border border-brand-border/25 bg-brand-cream/5 px-3 py-2 text-center transition hover:border-brand-gold/50 hover:text-brand-creamLight sm:border-0 sm:bg-transparent sm:px-0 sm:py-0">{dictionary.links.menu}</a>
          <a href="#about" className="rounded-full border border-brand-border/25 bg-brand-cream/5 px-3 py-2 text-center transition hover:border-brand-gold/50 hover:text-brand-creamLight sm:border-0 sm:bg-transparent sm:px-0 sm:py-0">{dictionary.links.about}</a>
          <a href="#contact" className="rounded-full border border-brand-border/25 bg-brand-cream/5 px-3 py-2 text-center transition hover:border-brand-gold/50 hover:text-brand-creamLight sm:border-0 sm:bg-transparent sm:px-0 sm:py-0">{dictionary.links.contact}</a>
        </nav>
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <LocaleSwitcher currentLocale={locale} labels={dictionary} />
          <a href="#contact" className="rounded-full bg-brand-orange px-5 py-3 text-center text-sm font-semibold text-brand-creamLight transition hover:bg-brand-orangeSoft">
            {dictionary.ctaLabel}
          </a>
        </div>
      </div>
    </header>
  );
}

function HeroSection({ dictionary }: { dictionary: Dictionary['hero'] }) {
  return (
    <section id="home" className="grid gap-10 pb-20 pt-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:pt-20">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-brand-gold/80">{dictionary.eyebrow}</p>
        <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight text-brand-creamLight sm:text-6xl lg:text-7xl">{dictionary.title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-brand-cream/85 sm:text-lg">{dictionary.description}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          {[dictionary.chips.delivery, dictionary.chips.pickup, dictionary.chips.familyCombo].map((chip) => (
            <span key={chip} className="rounded-full border border-brand-border/35 bg-brand-orange/12 px-4 py-2 text-sm font-medium text-brand-creamLight">{chip}</span>
          ))}
        </div>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a href="#contact" className="rounded-full bg-brand-red px-6 py-3 text-center text-sm font-semibold text-brand-creamLight transition hover:bg-brand-orange">{dictionary.primaryCta}</a>
          <a href="#menu" className="rounded-full border border-brand-border/45 bg-brand-cream/5 px-6 py-3 text-center text-sm font-semibold text-brand-creamLight transition hover:border-brand-gold hover:bg-brand-cream/10">{dictionary.secondaryCta}</a>
        </div>
        <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
          {Object.values(dictionary.stats).map((item) => (
            <div key={item.label} className="rounded-[1.75rem] border border-brand-border/30 bg-brand-brownSoft/50 px-5 py-5 shadow-[0_20px_50px_rgba(29,13,3,0.18)]">
              <p className="text-2xl font-semibold text-brand-gold">{item.value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-brand-cream/75">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative overflow-hidden rounded-[2.5rem] border border-brand-border/25 bg-[radial-gradient(circle_at_top,#DE9943_0%,#BF3211_34%,#512D10_100%)] p-5 shadow-[0_30px_90px_rgba(29,13,3,0.35)] sm:p-7">
        <div className="absolute -right-14 top-6 h-40 w-40 rounded-full bg-brand-gold/20 blur-3xl" />
        <div className="absolute -left-10 bottom-2 h-48 w-48 rounded-full bg-brand-green/18 blur-3xl" />
        <div className="relative rounded-[2rem] border border-brand-cream/20 bg-brand-brown/35 p-5 backdrop-blur">
          <div className="rounded-[1.8rem] border border-brand-cream/20 bg-[radial-gradient(circle_at_50%_44%,#FEF2D8_0%,#FACD74_18%,#DE9943_42%,#BF3211_68%,#633816_100%)] p-4 sm:p-5">
            <div className="overflow-hidden rounded-[1.6rem] border border-brand-cream/20 shadow-[0_24px_60px_rgba(29,13,3,0.28)]">
              <Image
                src="/pizza-destak.png"
                alt={dictionary.visual.title}
                width={1152}
                height={768}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[1.5rem] border border-brand-cream/18 bg-brand-brownSoft/65 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold/80">{dictionary.visual.eyebrow}</p>
              <p className="mt-3 text-xl font-semibold text-brand-creamLight">{dictionary.visual.title}</p>
            </div>
            <div className="rounded-[1.5rem] bg-brand-cream p-4 text-brand-text">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-red/80">{dictionary.visual.placeholderLabel}</p>
              <p className="mt-3 text-sm leading-6 text-brand-brownSoft">{dictionary.visual.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedSection({ locale, dictionary }: { locale: Locale; dictionary: Dictionary['menuPreview'] }) {
  const featuredPizzas = getFeaturedPizzas();
  return (
    <section id="featured" className="rounded-[2.5rem] bg-brand-cream px-5 py-16 text-brand-text sm:px-8 lg:px-10">
      <SectionHeading eyebrow={dictionary.featured.eyebrow} title={dictionary.featured.title} description={dictionary.featured.description} />
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {featuredPizzas.map((item, index) => {
          const copy = getPizzaCopy(dictionary, item.slug);
          const priceLabel = formatPrice(locale, item.price);
          const sizeLabels = item.sizesAvailable.map((sizeId) =>
            getSizeLabel(dictionary, sizeId)
          );
          const orderMessage = buildPizzaOrderMessage({
            locale,
            baseMessage: copy.whatsappMessage,
            pizzaName: copy.name,
            priceLabel,
            sizeLabel: sizeLabels.join(', '),
          });
          return (
            <article key={item.slug} className="overflow-hidden rounded-[2rem] border border-brand-border/18 bg-brand-creamLight shadow-[0_24px_60px_rgba(81,45,16,0.14)]">
              <div className={`p-5 ${index % 3 === 0 ? 'bg-[radial-gradient(circle_at_top,#fde68a_0%,#fb7185_45%,#881337_100%)]' : index % 3 === 1 ? 'bg-[radial-gradient(circle_at_top,#fcd34d_0%,#dc2626_45%,#292524_100%)]' : 'bg-[radial-gradient(circle_at_top,#86efac_0%,#ea580c_45%,#431407_100%)]'}`}>
                {hasCustomPizzaImage(item.image) ? (
                  <div className="overflow-hidden rounded-[1.5rem] border border-brand-cream/18 shadow-[0_20px_50px_rgba(81,45,16,0.22)]">
                    <Image
                      src={item.image}
                      alt={copy.imageAlt}
                      width={1024}
                      height={1024}
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                ) : (
                  <div role="img" aria-label={copy.imageAlt} className="flex aspect-[4/3] items-end rounded-[1.5rem] border border-brand-cream/18 bg-brand-brown/18 p-4">
                    <span className="rounded-full bg-brand-cream/88 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-text">{copy.name}</span>
                  </div>
                )}
              </div>
              <div className="flex h-full flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-semibold text-brand-text">{copy.name}</h3>
                  <span className="rounded-full bg-brand-surface px-3 py-1 text-sm font-semibold text-brand-red">{priceLabel}</span>
                </div>
                <p className="mt-4 text-sm leading-7 text-brand-brownSoft">{copy.description}</p>
                <div className="mt-5 grid gap-3 text-sm text-brand-brownSoft">
                  <div>
                    <p className="font-semibold text-brand-text">{dictionary.featured.ingredientsLabel}</p>
                    <p className="mt-1 leading-6">{copy.ingredients.join(', ')}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-brand-text">{dictionary.featured.sizesLabel}</p>
                    <p className="mt-1 leading-6">{sizeLabels.join(', ')}</p>
                  </div>
                </div>
                <a href={buildWhatsAppLink(orderMessage)} target="_blank" rel="noreferrer" className="mt-auto inline-flex rounded-full bg-brand-red px-5 py-3 text-sm font-semibold text-brand-creamLight transition hover:bg-brand-orange">
                  {dictionary.featured.ctaLabel}
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function PromoSection({ dictionary, contact }: { dictionary: Dictionary['menuPreview']['promo']; contact: Dictionary['contact'] }) {
  return (
    <section className="py-8">
      <div className="rounded-[2.25rem] border border-brand-border/30 bg-[linear-gradient(135deg,#512D10_0%,#BF3211_48%,#FACD74_100%)] p-[1px] shadow-[0_24px_70px_rgba(81,45,16,0.22)]">
        <div className="grid gap-6 rounded-[2.2rem] bg-brand-brown/92 px-6 py-8 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-gold/80">{dictionary.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-creamLight sm:text-4xl">{dictionary.title}</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-brand-cream/82">{dictionary.subtitle}</p>
          </div>
          <div className="rounded-[1.75rem] bg-brand-cream/8 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-gold/80">{dictionary.highlightTag}</p>
            <a href={buildWhatsAppLink(contact.whatsappMessage)} target="_blank" rel="noreferrer" className="mt-5 inline-flex rounded-full bg-brand-orange px-5 py-3 text-sm font-semibold text-brand-creamLight transition hover:bg-brand-orangeSoft">
              {dictionary.ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitsSection({ dictionary }: { dictionary: Dictionary['benefits'] }) {
  const items = [dictionary.items.freshIngredients, dictionary.items.handcraftedDough, dictionary.items.fastDelivery, dictionary.items.boldFlavor];
  const icons = [<LeafIcon key="leaf" />, <PizzaIcon key="pizza" />, <DeliveryIcon key="delivery" />, <FlameIcon key="flame" />];
  return (
    <section className="rounded-[2.5rem] bg-brand-brown px-5 py-16 sm:px-8 lg:px-10">
      <SectionHeading eyebrow={dictionary.eyebrow} title={dictionary.title} description={dictionary.description} invert />
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item, index) => (
          <article key={item.title} className="rounded-[1.75rem] border border-brand-border/25 bg-brand-brownSoft/65 p-6 shadow-[0_18px_50px_rgba(29,13,3,0.18)]">
            <IconBadge>{icons[index]}</IconBadge>
            <h3 className="mt-5 text-xl font-semibold text-brand-creamLight">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-brand-cream/80">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function AboutSection({ dictionary, images }: { dictionary: Dictionary['about']; images: Dictionary['images'] }) {
  return (
    <section id="about" className="grid gap-8 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
      <div className="rounded-[2.5rem] border border-brand-border/20 bg-brand-cream p-6 text-brand-text shadow-[0_22px_60px_rgba(81,45,16,0.16)] sm:p-8">
        <SectionHeading eyebrow={dictionary.eyebrow} title={dictionary.title} description={dictionary.description} />
        <div className="mt-8 rounded-[2rem] bg-brand-brown p-6 text-brand-creamLight">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-gold/80">{dictionary.storyTitle}</p>
          <p className="mt-4 text-base leading-8 text-brand-cream/80">{dictionary.story}</p>
        </div>
      </div>
      <div className="rounded-[2.5rem] border border-brand-border/20 bg-[linear-gradient(180deg,#633816_0%,#512D10_100%)] p-6 shadow-[0_26px_80px_rgba(81,45,16,0.28)]">
        <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-brand-cream/12">
          <Image
            src="/pizza-brocolis.png"
            alt={images.aboutAlt}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(29,13,3,0.04)_0%,rgba(29,13,3,0.82)_72%,rgba(29,13,3,0.96)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <span className="inline-flex w-fit rounded-full bg-brand-cream px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-brand-red">{dictionary.imageLabel}</span>
            <p className="mt-4 max-w-md text-lg font-semibold text-brand-creamLight">{dictionary.imageDescription}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function MenuPreviewSection({ locale, dictionary, contact }: { locale: Locale; dictionary: Dictionary['menuPreview']; contact: Dictionary['contact'] }) {
  const orderedCategories = getOrderedMenuCategories();
  return (
    <section id="menu" className="grid gap-6 rounded-[2.5rem] bg-brand-cream px-5 py-16 text-brand-text sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
      <div>
        <SectionHeading eyebrow={dictionary.eyebrow} title={dictionary.title} description={dictionary.description} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {orderedCategories.map((category) => {
            const categoryCopy = dictionary.categories[category.id];
            const pizzas = getPizzasByCategory(category.id).slice(0, 3);
            return (
              <article key={category.id} className="rounded-[1.75rem] border border-brand-border/20 bg-brand-creamLight px-5 py-6 shadow-[0_18px_40px_rgba(81,45,16,0.08)]">
                <h3 className="text-lg font-semibold text-brand-text">{categoryCopy.name}</h3>
                <p className="mt-2 text-sm leading-6 text-brand-brownSoft">{categoryCopy.description}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-brand-red/80">{dictionary.categoriesTitle}</p>
                <ul className="mt-3 space-y-3">
                  {pizzas.map((pizza) => {
                    const copy = getPizzaCopy(dictionary, pizza.slug);
                    return (
                      <li key={pizza.slug} className="rounded-2xl bg-brand-cream px-4 py-3 text-sm text-brand-brownSoft">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="font-semibold text-brand-text">{copy.name}</p>
                            <p className="mt-1 text-xs leading-5 text-brand-brownSoft">{formatPrice(locale, pizza.price)}</p>
                          </div>
                          <span className="rounded-full bg-brand-surface px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-brown">
                            {getSizeLabel(dictionary, pizza.sizesAvailable[0])}
                          </span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
      <aside className="rounded-[2rem] bg-brand-brown p-6 text-brand-creamLight shadow-[0_22px_50px_rgba(29,13,3,0.22)] sm:p-8">
        <span className="inline-flex rounded-full bg-brand-red/20 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-brand-creamLight">{dictionary.asideBadge}</span>
        <h3 className="mt-5 text-3xl font-semibold tracking-tight text-brand-creamLight">{dictionary.asideTitle}</h3>
        <p className="mt-4 text-base leading-8 text-brand-cream/82">{dictionary.asideDescription}</p>
        <div className="mt-8 flex flex-col gap-3">
          <a href={buildWhatsAppLink(contact.whatsappMessage)} target="_blank" rel="noreferrer" className="rounded-full bg-brand-orange px-5 py-3 text-center text-sm font-semibold text-brand-creamLight transition hover:bg-brand-orangeSoft">
            {dictionary.requestFullMenu}
          </a>
          <a href={buildWhatsAppLink(contact.whatsappMessage)} target="_blank" rel="noreferrer" className="rounded-full border border-brand-border/35 px-5 py-3 text-center text-sm font-semibold text-brand-creamLight transition hover:bg-brand-cream/8">
            {dictionary.whatsappOrder}
          </a>
          <Link href={`/${locale}/products`} className="rounded-full border border-brand-border/35 px-5 py-3 text-center text-sm font-semibold text-brand-creamLight transition hover:bg-brand-cream/8">
            {dictionary.seeAllProducts}
          </Link>
        </div>
      </aside>
    </section>
  );
}

function SocialProofSection({ dictionary }: { dictionary: Dictionary['socialProof'] }) {
  return (
    <section className="py-16">
      <SectionHeading eyebrow={dictionary.eyebrow} title={dictionary.title} description={dictionary.description} invert />
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {dictionary.items.map((item) => (
          <article key={item.author} className="rounded-[2rem] border border-brand-border/25 bg-brand-brownSoft/60 p-6 shadow-[0_18px_50px_rgba(29,13,3,0.2)]">
            <p className="text-lg leading-8 text-brand-cream">&ldquo;{item.quote}&rdquo;</p>
            <p className="mt-6 text-base font-semibold text-brand-gold">{item.author}</p>
            <p className="mt-1 text-sm uppercase tracking-[0.2em] text-brand-cream/70">{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactSection({ locale, contact, form }: { locale: Locale; contact: Dictionary['contact']; form: Dictionary['form'] }) {
  const [formState, setFormState] = useState<ContactFormState>({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitState, setSubmitState] = useState<'idle' | 'submitting' | 'success' | 'error' | 'validation'>('idle');

  const handleFieldChange = (field: keyof ContactFormState, value: string) => {
    setFormState((current) => ({ ...current, [field]: value }));
    if (submitState !== 'idle') setSubmitState('idle');
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.phone.trim() || !formState.subject.trim() || !formState.message.trim()) {
      setSubmitState('validation');
      return;
    }
    setSubmitState('submitting');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formState, locale }),
      });
      if (!response.ok) throw new Error('Request failed');
      setSubmitState('success');
      setFormState({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      console.error(error);
      setSubmitState('error');
    }
  };

  return (
    <section id="contact" className="grid gap-6 rounded-[2.5rem] bg-brand-cream px-5 py-16 text-brand-text sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:px-10">
      <div>
        <SectionHeading eyebrow={contact.eyebrow} title={contact.title} description={contact.description} />
        <form onSubmit={handleSubmit} className="mt-10 rounded-[2rem] border border-brand-border/18 bg-brand-creamLight p-6 shadow-[0_18px_50px_rgba(81,45,16,0.12)] sm:p-8">
          <h3 className="text-2xl font-semibold text-brand-text">{form.title}</h3>
          <p className="mt-3 text-sm leading-7 text-brand-brownSoft">{form.description}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-brand-brown">{form.fields.name}<input type="text" value={formState.name} onChange={(event) => handleFieldChange('name', event.target.value)} placeholder={form.placeholders.name} className="rounded-2xl border border-brand-border/25 bg-brand-cream px-4 py-3 outline-none transition focus:border-brand-orange focus:bg-white" /></label>
            <label className="grid gap-2 text-sm font-medium text-brand-brown">{form.fields.email}<input type="email" value={formState.email} onChange={(event) => handleFieldChange('email', event.target.value)} placeholder={form.placeholders.email} className="rounded-2xl border border-brand-border/25 bg-brand-cream px-4 py-3 outline-none transition focus:border-brand-orange focus:bg-white" /></label>
            <label className="grid gap-2 text-sm font-medium text-brand-brown">{form.fields.phone}<input type="text" value={formState.phone} onChange={(event) => handleFieldChange('phone', event.target.value)} placeholder={form.placeholders.phone} className="rounded-2xl border border-brand-border/25 bg-brand-cream px-4 py-3 outline-none transition focus:border-brand-orange focus:bg-white" /></label>
            <label className="grid gap-2 text-sm font-medium text-brand-brown">{form.fields.subject}<input type="text" value={formState.subject} onChange={(event) => handleFieldChange('subject', event.target.value)} placeholder={form.placeholders.subject} className="rounded-2xl border border-brand-border/25 bg-brand-cream px-4 py-3 outline-none transition focus:border-brand-orange focus:bg-white" /></label>
          </div>
          <label className="mt-4 grid gap-2 text-sm font-medium text-brand-brown">{form.fields.message}<textarea rows={5} value={formState.message} onChange={(event) => handleFieldChange('message', event.target.value)} placeholder={form.placeholders.message} className="rounded-[1.5rem] border border-brand-border/25 bg-brand-cream px-4 py-3 outline-none transition focus:border-brand-orange focus:bg-white" /></label>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button type="submit" disabled={submitState === 'submitting'} className="rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-brand-creamLight transition hover:bg-brand-orange disabled:cursor-not-allowed disabled:bg-brand-orangeSoft">
              {submitState === 'submitting' ? form.submitting : form.submit}
            </button>
            <a href={buildWhatsAppLink(contact.whatsappMessage)} target="_blank" rel="noreferrer" className="text-sm font-semibold text-brand-red transition hover:text-brand-orange">{contact.whatsappCta}</a>
          </div>
          {submitState === 'validation' ? <p className="mt-4 text-sm font-medium text-brand-red">{form.validationMessage}</p> : null}
          {submitState === 'success' ? <p className="mt-4 text-sm font-medium text-green-700">{form.successMessage}</p> : null}
          {submitState === 'error' ? <p className="mt-4 text-sm font-medium text-brand-red">{form.errorMessage}</p> : null}
        </form>
      </div>
      <aside className="rounded-[2rem] bg-brand-brown p-6 text-brand-creamLight shadow-[0_20px_60px_rgba(29,13,3,0.24)] sm:p-8">
        <h3 className="text-2xl font-semibold text-brand-creamLight">{contact.infoTitle}</h3>
        <div className="mt-8 space-y-6">
          <div><p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold/80">{contact.addressLabel}</p><p className="mt-2 text-base leading-7 text-brand-cream/82">{contact.address}</p></div>
          <div><p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold/80">{contact.hoursLabel}</p><p className="mt-2 text-base leading-7 text-brand-cream/82">{contact.openingHours}</p></div>
          <div><p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold/80">{contact.deliveryLabel}</p><p className="mt-2 text-base leading-7 text-brand-cream/82">{contact.serviceAreaNote}</p></div>
        </div>
        <div className="mt-8 rounded-[1.75rem] border border-brand-border/25 bg-brand-cream/8 p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-gold/80">WhatsApp</p>
          <p className="mt-2 text-lg font-semibold text-brand-creamLight">{contact.phone}</p>
          <a href={buildWhatsAppLink(contact.whatsappMessage)} target="_blank" rel="noreferrer" className="mt-5 inline-flex rounded-full bg-brand-orange px-5 py-3 text-sm font-semibold text-brand-creamLight transition hover:bg-brand-orangeSoft">{contact.whatsappCta}</a>
        </div>
      </aside>
    </section>
  );
}

function FooterSection({ locale, navbar, footer, contact }: { locale: Locale; navbar: Dictionary['navbar']; footer: Dictionary['footer']; contact: Dictionary['contact'] }) {
  const socialLinks = Array.isArray(siteConfig.socialLinks) ? siteConfig.socialLinks : [];

  return (
    <footer className="pb-6 pt-10">
      <div className="rounded-[2rem] border border-brand-border/25 bg-brand-brownSoft/65 px-5 py-8 shadow-[0_18px_50px_rgba(29,13,3,0.18)] sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-4">
              <div className="overflow-hidden rounded-2xl border border-brand-border/50 bg-brand-cream p-1">
                <Image src="/jae-logo.png" alt={`${siteConfig.brandName} logo`} width={56} height={56} className="h-14 w-14 rounded-xl object-cover" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-brand-gold/80">{navbar.brandTag}</p>
                <p className="mt-3 text-3xl font-semibold text-brand-creamLight">{siteConfig.brandName}</p>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-7 text-brand-cream/80">{footer.description}</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-gold/70">{footer.navigationTitle}</p>
            <div className="mt-4 grid gap-3 text-sm text-brand-cream/82">
              <a href="#home" className="transition hover:text-brand-creamLight">{navbar.links.home}</a>
              <a href="#menu" className="transition hover:text-brand-creamLight">{navbar.links.menu}</a>
              <a href="#about" className="transition hover:text-brand-creamLight">{navbar.links.about}</a>
              <a href="#contact" className="transition hover:text-brand-creamLight">{navbar.links.contact}</a>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-gold/70">{footer.socialTitle}</p>
            <div className="mt-4 grid gap-3 text-sm text-brand-cream/82">
              <a href={buildWhatsAppLink(contact.whatsappMessage)} target="_blank" rel="noreferrer">{footer.whatsappLabel}</a>
              {socialLinks.map((socialLink) => (
                <a key={socialLink.id} href={socialLink.href} target="_blank" rel="noreferrer">
                  {getSocialLabel(footer, socialLink.id)}
                </a>
              ))}
              <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-4 border-t border-brand-border/25 pt-5 text-sm text-brand-cream/70 lg:flex-row lg:items-center lg:justify-between">
          <p>{footer.rights}</p>
          <LocaleSwitcher currentLocale={locale} labels={navbar} />
        </div>
      </div>
    </footer>
  );
}

export function JaEhLandingPage({ locale, dictionary }: LandingPageProps) {
  return (
    <>
      <Head>
        <title>{dictionary.meta.title}</title>
        <meta name="description" content={dictionary.meta.description} />
      </Head>
      <main className="min-h-screen bg-[radial-gradient(circle_at_top,#633816_0%,#512D10_32%,#1D0D03_100%)] text-brand-creamLight">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
          <NavbarSection locale={locale} dictionary={dictionary.navbar} />
          <HeroSection dictionary={dictionary.hero} />
          <FeaturedSection locale={locale} dictionary={dictionary.menuPreview} />
          <PromoSection dictionary={dictionary.menuPreview.promo} contact={dictionary.contact} />
          <BenefitsSection dictionary={dictionary.benefits} />
          <AboutSection dictionary={dictionary.about} images={dictionary.images} />
          <MenuPreviewSection locale={locale} dictionary={dictionary.menuPreview} contact={dictionary.contact} />
          <SocialProofSection dictionary={dictionary.socialProof} />
          <ContactSection locale={locale} contact={dictionary.contact} form={dictionary.form} />
          <FooterSection locale={locale} navbar={dictionary.navbar} footer={dictionary.footer} contact={dictionary.contact} />
        </div>
      </main>
    </>
  );
}
