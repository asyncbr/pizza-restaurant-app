import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {
  getOrderedMenuCategories,
  getPizzasByCategory,
  jaePizzaMenu,
} from '@/lib/products';
import { buildWhatsAppLink, siteConfig } from '@/lib/site';
import { i18n, isLocale, type Locale } from '@/src/i18n/config';
import { getDictionary, type Dictionary } from '@/src/i18n/get-dictionary';

type Props = {
  locale: Locale;
  dictionary: Dictionary;
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: i18n.locales.map((locale) => ({ params: { locale } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const localeParam =
    typeof params?.locale === 'string' ? params.locale : i18n.defaultLocale;

  if (!isLocale(localeParam)) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      locale: localeParam,
      dictionary: await getDictionary(localeParam),
    },
  };
};

function formatPrice(locale: Locale, price: number) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: jaePizzaMenu.currency,
  }).format(price);
}

function hasCustomPizzaImage(imagePath: string) {
  return !imagePath.startsWith('/images/pizza/');
}

function getSizeLabel(
  dictionary: Dictionary['menuPreview'],
  sizeId: keyof Dictionary['menuPreview']['sizes']
) {
  const size = dictionary.sizes[sizeId];
  return `${size.label} • ${size.slicesLabel}`;
}

export default function ProductsPage({
  locale,
  dictionary,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const labels = dictionary.productCatalog;
  const orderedCategories = getOrderedMenuCategories();
  const totalProducts = jaePizzaMenu.pizzas.length;
  const featuredProducts = jaePizzaMenu.featuredPizzaSlugs.length;

  return (
    <>
      <Head>
        <title>{labels.metaTitle}</title>
        <meta name="description" content={labels.metaDescription} />
      </Head>
      <main className="min-h-screen bg-[radial-gradient(circle_at_top,#633816_0%,#512D10_32%,#1D0D03_100%)] text-brand-creamLight">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <header className="overflow-hidden rounded-[2rem] border border-brand-border/40 bg-brand-brown/90 shadow-[0_30px_80px_rgba(29,13,3,0.28)] backdrop-blur-xl">
            <div className="grid gap-8 px-5 py-6 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <div className="flex items-center gap-4">
                  <div className="overflow-hidden rounded-2xl border border-brand-border/50 bg-brand-cream p-1 shadow-[0_12px_30px_rgba(29,13,3,0.18)]">
                    <Image
                      src="/jae-logo.png"
                      alt={`${siteConfig.brandName} logo`}
                      width={60}
                      height={60}
                      className="h-14 w-14 rounded-xl object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-brand-gold/80">
                      {labels.eyebrow}
                    </p>
                    <h1 className="mt-2 text-3xl font-semibold tracking-tight text-brand-creamLight sm:text-4xl">
                      {labels.title}
                    </h1>
                  </div>
                </div>
                <p className="mt-5 max-w-3xl text-base leading-7 text-brand-cream/82">
                  {labels.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={buildWhatsAppLink(dictionary.contact.whatsappMessage)}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-brand-red px-5 py-3 text-sm font-semibold text-brand-creamLight transition hover:bg-brand-orange"
                  >
                    {labels.primaryCta}
                  </a>
                  <Link
                    href={`/${locale}`}
                    className="rounded-full border border-brand-border/35 px-5 py-3 text-sm font-semibold text-brand-creamLight transition hover:bg-brand-cream/10"
                  >
                    {labels.secondaryCta}
                  </Link>
                </div>
                <div className="mt-6 inline-flex max-w-2xl items-center gap-3 rounded-full border border-brand-border/30 bg-brand-cream/8 px-4 py-2 text-sm text-brand-cream/82">
                  <span className="font-semibold uppercase tracking-[0.22em] text-brand-gold/90">
                    {labels.serviceBadge}
                  </span>
                  <span>{labels.serviceNote}</span>
                </div>
              </div>
              <div className="rounded-[1.8rem] border border-brand-border/25 bg-brand-brownSoft/55 p-5">
                <div className="flex flex-wrap gap-2">
                  {i18n.locales.map((language) => (
                    <Link
                      key={language}
                      href={`/${language}/products`}
                      className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                        language === locale
                          ? 'bg-brand-red text-brand-creamLight'
                          : 'border border-brand-border/35 text-brand-cream hover:bg-brand-cream/10'
                      }`}
                    >
                      {dictionary.navbar.locales[language]}
                    </Link>
                  ))}
                </div>
                <div className="mt-5 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  <div className="rounded-[1.5rem] border border-brand-border/25 bg-brand-brown/45 px-5 py-4">
                    <p className="text-3xl font-semibold text-brand-gold">
                      {totalProducts}
                    </p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-cream/72">
                      {labels.stats.totalProducts}
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-brand-border/25 bg-brand-brown/45 px-5 py-4">
                    <p className="text-3xl font-semibold text-brand-gold">
                      {featuredProducts}
                    </p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-cream/72">
                      {labels.stats.featuredProducts}
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-brand-border/25 bg-brand-brown/45 px-5 py-4">
                    <p className="text-3xl font-semibold text-brand-gold">
                      {orderedCategories.length}
                    </p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-cream/72">
                      {labels.stats.categories}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <section className="mt-8 grid gap-6">
            {orderedCategories.map((category) => {
              const categoryCopy = dictionary.menuPreview.categories[category.id];
              const products = getPizzasByCategory(category.id);

              return (
                <article
                  key={category.id}
                  className="rounded-[2rem] border border-brand-border/25 bg-brand-cream px-5 py-6 text-brand-text shadow-[0_22px_60px_rgba(81,45,16,0.16)] sm:px-6"
                >
                  <div className="flex flex-col gap-3 border-b border-brand-border/20 pb-5 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-red/80">
                        {categoryCopy.name}
                      </p>
                      <h2 className="mt-2 text-2xl font-semibold text-brand-text">
                        {categoryCopy.description}
                      </h2>
                    </div>
                    <p className="text-sm font-medium text-brand-brownSoft">
                      {products.length} {labels.categoryCountLabel}
                    </p>
                  </div>

                  {products.length === 0 ? (
                    <p className="mt-5 text-sm text-brand-brownSoft">
                      {labels.emptyLabel}
                    </p>
                  ) : (
                    <div className="mt-5 grid gap-4 lg:grid-cols-2">
                      {products.map((product) => {
                        const copy =
                          dictionary.menuPreview.pizzas[
                            product.slug as keyof Dictionary['menuPreview']['pizzas']
                          ];
                        const sizeLabels = product.sizesAvailable.map((sizeId) =>
                          getSizeLabel(
                            dictionary.menuPreview,
                            sizeId as keyof Dictionary['menuPreview']['sizes']
                          )
                        );

                        return (
                          <div
                            key={product.slug}
                            className="grid gap-4 rounded-[1.5rem] border border-brand-border/18 bg-brand-creamLight p-4 sm:grid-cols-[168px_1fr]"
                          >
                            <div className="overflow-hidden rounded-[1.25rem] border border-brand-border/18 bg-brand-surface/40">
                              {hasCustomPizzaImage(product.image) ? (
                                <Image
                                  src={product.image}
                                  alt={copy.imageAlt}
                                  width={640}
                                  height={480}
                                  className="aspect-[4/3] h-full w-full object-cover"
                                />
                              ) : (
                                <div className="flex aspect-[4/3] items-end bg-[radial-gradient(circle_at_top,#FACD74_0%,#DE9943_30%,#BF3211_62%,#633816_100%)] p-3">
                                  <span className="rounded-full bg-brand-cream/88 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-text">
                                    {copy.name}
                                  </span>
                                </div>
                              )}
                            </div>
                            <div className="flex h-full flex-col">
                              <div className="flex flex-wrap items-start justify-between gap-3">
                                <div>
                                  <h3 className="text-xl font-semibold text-brand-text">
                                    {copy.name}
                                  </h3>
                                  <p className="mt-2 text-sm leading-6 text-brand-brownSoft">
                                    {copy.description}
                                  </p>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  {product.featured ? (
                                    <span className="rounded-full bg-brand-red px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-creamLight">
                                      {labels.featuredLabel}
                                    </span>
                                  ) : null}
                                  <span className="rounded-full bg-brand-surface px-3 py-1 text-sm font-semibold text-brand-red">
                                    {formatPrice(locale, product.price)}
                                  </span>
                                </div>
                              </div>
                              <div className="mt-4 grid gap-3 text-sm text-brand-brownSoft">
                                <div>
                                  <p className="font-semibold text-brand-text">
                                    {labels.ingredientsLabel}
                                  </p>
                                  <p className="mt-1 leading-6">
                                    {copy.ingredients.join(', ')}
                                  </p>
                                </div>
                                <div>
                                  <p className="font-semibold text-brand-text">
                                    {labels.sizeLabel}
                                  </p>
                                  <p className="mt-1 leading-6">
                                    {sizeLabels.join(', ')}
                                  </p>
                                </div>
                              </div>
                              <a
                                href={buildWhatsAppLink(copy.whatsappMessage)}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-auto inline-flex rounded-full bg-brand-red px-5 py-3 text-sm font-semibold text-brand-creamLight transition hover:bg-brand-orange"
                              >
                                {labels.orderLabel}
                              </a>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </article>
              );
            })}
          </section>
        </div>
      </main>
    </>
  );
}
