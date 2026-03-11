import { useState, type FormEvent, type ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  buildWhatsAppLink,
  isSiteLocale,
  localeLabels,
  siteConfig,
  siteContent,
  supportedLocales,
  type SiteLocale,
} from '@/lib/site';

type ContactFormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
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
      <p
        className={`text-sm font-semibold uppercase tracking-[0.32em] ${
          invert ? 'text-red-200/80' : 'text-red-700/80'
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-3xl font-semibold tracking-tight sm:text-4xl ${
          invert ? 'text-stone-50' : 'text-stone-950'
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-4 text-base leading-7 sm:text-lg ${
          invert ? 'text-stone-200/80' : 'text-stone-700'
        }`}
      >
        {description}
      </p>
    </div>
  );
}

function IconBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-red-600 text-amber-50 shadow-[0_12px_24px_rgba(220,38,38,0.28)]">
      {children}
    </span>
  );
}

function PizzaIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M12.3 2.1C8 2.2 4.1 3.3 1 5.3l8.8 16.4c.1.2.3.3.5.3s.4-.1.5-.3L19.7 5c-2.1-1.9-4.8-2.9-7.4-2.9Zm0 2c1.8 0 3.8.5 5.5 1.6l-6.9 13-6.9-12.9c2.1-1.1 4.5-1.7 7.3-1.7Zm-2.8 4.4a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8Zm4.8 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm-2.1 4.1a1.2 1.2 0 1 0 0 2.5 1.2 1.2 0 0 0 0-2.5Z" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M18.9 3.4c-4.7.1-8 1.5-10 4-2 2.6-2.5 6.2-1.6 10.8l.2 1 .9-.4c4.7-1.9 7.9-4.4 9.7-7.4 1.8-3 2.2-6.2 1.4-9.8l-.1-.6-.5-.1ZM8.9 16.2c-.2-2.8.4-5 1.8-6.8 1.4-1.8 3.7-3 7-3.6.3 2.7-.1 5-1.4 7.1-1.3 2.1-3.4 3.8-6.3 5.1-.1-1.4.1-2.8.7-4.2.6-1.4 1.6-2.6 2.9-3.8l-1.2-1.1c-1.4 1.3-2.5 2.7-3.2 4.2-.2.5-.4 1-.5 1.5Z" />
    </svg>
  );
}

function DeliveryIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h10A1.5 1.5 0 0 1 16 6.5V8h1.7c.5 0 1 .3 1.2.7l2 3.4c.1.2.1.4.1.6v3.8a1 1 0 0 1-1 1h-.8a2.7 2.7 0 0 1-5.3 0H10a2.7 2.7 0 0 1-5.3 0H4a1 1 0 0 1-1-1V6.5Zm2 0V15h.3a2.7 2.7 0 0 1 5.4 0h3.6V6.5H5Zm13 3.5V15h1v-2l-1-3Zm-1.5 5.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Zm-9.2 0a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z" />
    </svg>
  );
}

function FlameIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M13.3 2.8c.2 2-.5 3.6-2 4.8-1.5 1.2-2.4 2.5-2.8 3.8-.4 1.4-.1 2.9 1 4.5.1-1.3.5-2.3 1.3-3.2.8-.9 1.6-1.7 2.4-2.4 1 1.2 1.7 2.3 2.1 3.5.4 1.2.3 2.5-.2 3.9 1.1-.8 1.8-1.8 2.2-3.2.4-1.4.2-3-.5-4.8-.7-1.8-1.8-3.4-3.5-4.9Zm-1.5 7.8c-2.8 2.2-4.2 4.5-4.2 6.8 0 1.4.5 2.6 1.4 3.5.9.9 2 1.4 3.4 1.4s2.5-.5 3.4-1.4c.9-.9 1.4-2.1 1.4-3.5 0-2.2-1.5-4.5-4.3-6.8-.2 1.1-.6 2-1.1 2.6-.5.6-1.2 1.1-2 1.5.7-1.1 1-2.4 1-4.1Z" />
    </svg>
  );
}

export default function Home() {
  const router = useRouter();
  const routerLocale = router.locale ?? null;
  const locale: SiteLocale = isSiteLocale(routerLocale) ? routerLocale : 'pt-BR';
  const content = siteContent[locale];
  const landing = content.pizzaLanding;
  const primaryWhatsAppLink = buildWhatsAppLink(landing.contact.whatsappMessage);
  const [formState, setFormState] = useState<ContactFormState>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitState, setSubmitState] = useState<
    'idle' | 'submitting' | 'success' | 'error' | 'validation'
  >('idle');

  const handleFieldChange = (field: keyof ContactFormState, value: string) => {
    setFormState((current) => ({ ...current, [field]: value }));
    if (submitState !== 'idle') {
      setSubmitState('idle');
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !formState.name.trim() ||
      !formState.email.trim() ||
      !formState.phone.trim() ||
      !formState.subject.trim() ||
      !formState.message.trim()
    ) {
      setSubmitState('validation');
      return;
    }

    setSubmitState('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formState,
          locale,
        }),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setSubmitState('success');
      setFormState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error(error);
      setSubmitState('error');
    }
  };

  return (
    <>
      <Head>
        <title>{content.meta.title}</title>
        <meta name="description" content={content.meta.description} />
      </Head>

      <main className="min-h-screen bg-[radial-gradient(circle_at_top,#5f1517_0%,#221917_34%,#130f0e_100%)] text-stone-100">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
          <header className="sticky top-4 z-30 rounded-[2rem] border border-white/10 bg-stone-950/70 px-4 py-4 shadow-[0_30px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:px-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <a href="#home" className="min-w-0 flex-1">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-red-200/70">
                  {landing.header.brandTag}
                </p>
                <p className="mt-2 text-2xl font-semibold tracking-[0.08em] text-stone-50">
                  {siteConfig.brandName}
                </p>
              </a>

              <nav
                aria-label="Primary"
                className="grid grid-cols-2 gap-2 text-sm text-stone-300 sm:flex sm:flex-wrap sm:items-center sm:gap-5"
              >
                {landing.header.navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-full border border-white/8 bg-white/4 px-3 py-2 text-center transition hover:border-red-400/40 hover:text-white sm:border-0 sm:bg-transparent sm:px-0 sm:py-0"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-400">
                    {content.common.languageLabel}
                  </span>
                  <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
                    {supportedLocales.map((option) => (
                      <Link
                        key={option}
                        href={router.asPath}
                        locale={option}
                        aria-pressed={locale === option}
                        className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                          locale === option
                            ? 'bg-red-600 text-white'
                            : 'text-stone-300 hover:text-white'
                        }`}
                      >
                        {localeLabels[option]}
                      </Link>
                    ))}
                  </div>
                </div>

                <a
                  href={primaryWhatsAppLink}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-red-600 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-red-500"
                >
                  {landing.header.ctaLabel}
                </a>
              </div>
            </div>
          </header>

          <section
            id="home"
            className="grid gap-10 pb-20 pt-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:pt-20"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-red-200/78">
                {landing.hero.eyebrow}
              </p>
              <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight text-stone-50 sm:text-6xl lg:text-7xl">
                {landing.hero.title}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-stone-300 sm:text-lg">
                {landing.hero.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {landing.hero.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-red-300/20 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-100"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={primaryWhatsAppLink}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-red-600 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-red-500"
                >
                  {content.cta.orderNow}
                </a>
                <a
                  href="#menu"
                  className="rounded-full border border-stone-500/50 bg-white/4 px-6 py-3 text-center text-sm font-semibold text-stone-100 transition hover:border-stone-300 hover:bg-white/8"
                >
                  {content.cta.viewMenu}
                </a>
              </div>

              <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
                {landing.hero.stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.75rem] border border-white/10 bg-white/6 px-5 py-5 shadow-[0_20px_50px_rgba(0,0,0,0.18)]"
                  >
                    <p className="text-2xl font-semibold text-amber-50">{item.value}</p>
                    <p className="mt-2 text-sm uppercase tracking-[0.18em] text-stone-400">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2.5rem] border border-red-300/10 bg-[radial-gradient(circle_at_top,#f97316_0%,#b91c1c_35%,#1f1a17_100%)] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.35)] sm:p-7">
              <div className="absolute -right-14 top-6 h-40 w-40 rounded-full bg-amber-200/20 blur-3xl" />
              <div className="absolute -left-10 bottom-2 h-48 w-48 rounded-full bg-green-500/15 blur-3xl" />
              <div className="relative rounded-[2rem] border border-white/14 bg-stone-950/35 p-5 backdrop-blur">
                <div className="rounded-[1.8rem] border border-white/10 bg-[radial-gradient(circle_at_50%_44%,#fef3c7_0%,#f59e0b_20%,#dc2626_48%,#5b130f_100%)] p-5">
                  <div className="relative mx-auto aspect-square max-w-[460px] rounded-full border-[18px] border-[#f6d7a8] bg-[radial-gradient(circle_at_50%_48%,#d62828_0%,#b91c1c_48%,#7f1d1d_100%)] shadow-[inset_0_0_0_12px_rgba(255,248,231,0.28)]">
                    <span className="absolute left-[18%] top-[22%] h-16 w-16 rounded-full bg-[#fff7df] shadow-[0_0_0_8px_rgba(255,255,255,0.08)]" />
                    <span className="absolute right-[20%] top-[28%] h-14 w-14 rounded-full bg-[#fff7df]" />
                    <span className="absolute left-[28%] bottom-[20%] h-[3.75rem] w-[3.75rem] rounded-full bg-[#fff7df]" />
                    <span className="absolute right-[28%] bottom-[22%] h-16 w-16 rounded-full bg-[#fff7df]" />
                    <span className="absolute left-[45%] top-[18%] h-10 w-10 rounded-full bg-[#2f6b3a]" />
                    <span className="absolute left-[22%] top-[54%] h-9 w-9 rounded-full bg-[#2f6b3a]" />
                    <span className="absolute right-[24%] top-[52%] h-9 w-9 rounded-full bg-[#2f6b3a]" />
                    <span className="absolute left-[50%] bottom-[16%] h-10 w-10 rounded-full bg-[#2f6b3a]" />
                  </div>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/8 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-200/70">
                      {landing.hero.imageEyebrow}
                    </p>
                    <p className="mt-3 text-xl font-semibold text-stone-50">
                      {landing.hero.imageTitle}
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] bg-cream-50 p-4 text-stone-900">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-700/75">
                      {landing.hero.imagePlaceholderLabel}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-stone-700">
                      {landing.hero.imageDescription}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="featured" className="rounded-[2.5rem] bg-[#f6ead8] px-5 py-16 text-stone-900 sm:px-8 lg:px-10">
            <SectionHeading
              eyebrow={landing.featured.eyebrow}
              title={landing.featured.title}
              description={landing.featured.description}
            />

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {landing.featured.items.map((item, index) => (
                <article
                  key={item.title}
                  className="overflow-hidden rounded-[2rem] border border-stone-900/8 bg-white shadow-[0_24px_60px_rgba(77,46,24,0.14)]"
                >
                  <div
                    className={`p-5 ${
                      index % 3 === 0
                        ? 'bg-[radial-gradient(circle_at_top,#fde68a_0%,#fb7185_45%,#881337_100%)]'
                        : index % 3 === 1
                          ? 'bg-[radial-gradient(circle_at_top,#fcd34d_0%,#dc2626_45%,#292524_100%)]'
                          : 'bg-[radial-gradient(circle_at_top,#86efac_0%,#ea580c_45%,#431407_100%)]'
                    }`}
                  >
                    <div className="flex aspect-[4/3] items-end rounded-[1.5rem] border border-white/15 bg-black/18 p-4">
                      <span className="rounded-full bg-white/88 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-stone-900">
                        {item.imageLabel}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-semibold text-stone-950">{item.title}</h3>
                      <span className="rounded-full bg-red-50 px-3 py-1 text-sm font-semibold text-red-700">
                        {item.price}
                      </span>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-stone-700">{item.description}</p>
                    <a
                      href={buildWhatsAppLink(item.whatsappMessage)}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex rounded-full bg-stone-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-stone-800"
                    >
                      {item.cta}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="py-8">
            <div className="rounded-[2.25rem] border border-red-300/15 bg-[linear-gradient(135deg,#8a1c1d_0%,#db3b23_48%,#f59e0b_100%)] p-[1px] shadow-[0_24px_70px_rgba(0,0,0,0.22)]">
              <div className="grid gap-6 rounded-[2.2rem] bg-stone-950/86 px-6 py-8 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-red-200/80">
                    {landing.promo.eyebrow}
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    {landing.promo.title}
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-stone-300">
                    {landing.promo.description}
                  </p>
                </div>

                <div className="rounded-[1.75rem] bg-white/8 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-200/75">
                    {landing.promo.highlight}
                  </p>
                  <a
                    href={primaryWhatsAppLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
                  >
                    {landing.promo.ctaLabel}
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-[2.5rem] bg-[#15110f] px-5 py-16 sm:px-8 lg:px-10">
            <SectionHeading
              eyebrow={landing.whyChooseUs.eyebrow}
              title={landing.whyChooseUs.title}
              description={landing.whyChooseUs.description}
              invert
            />

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {landing.whyChooseUs.items.map((item, index) => {
                const icon =
                  index === 0 ? (
                    <LeafIcon />
                  ) : index === 1 ? (
                    <PizzaIcon />
                  ) : index === 2 ? (
                    <DeliveryIcon />
                  ) : (
                    <FlameIcon />
                  );

                return (
                  <article
                    key={item.title}
                    className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.18)]"
                  >
                    <IconBadge>{icon}</IconBadge>
                    <h3 className="mt-5 text-xl font-semibold text-stone-50">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-stone-300">{item.description}</p>
                  </article>
                );
              })}
            </div>
          </section>

          <section
            id="about"
            className="grid gap-8 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center"
          >
            <div className="rounded-[2.5rem] border border-white/10 bg-[#f6ead8] p-6 text-stone-900 shadow-[0_22px_60px_rgba(0,0,0,0.16)] sm:p-8">
              <SectionHeading
                eyebrow={landing.about.eyebrow}
                title={landing.about.title}
                description={landing.about.description}
              />
              <div className="mt-8 rounded-[2rem] bg-stone-950 p-6 text-stone-100">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-red-200/75">
                  {landing.about.storyTitle}
                </p>
                <p className="mt-4 text-base leading-8 text-stone-300">{landing.about.story}</p>
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-red-200/10 bg-[linear-gradient(180deg,#4a1715_0%,#181211_100%)] p-6 shadow-[0_26px_80px_rgba(0,0,0,0.28)]">
              <div className="flex min-h-[420px] flex-col justify-end rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,#f59e0b_0%,#dc2626_35%,#1c1917_100%)] p-6">
                <span className="inline-flex w-fit rounded-full bg-cream-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-red-700">
                  {landing.about.imageLabel}
                </span>
                <p className="mt-4 max-w-md text-lg font-semibold text-stone-50">
                  {landing.about.imageDescription}
                </p>
              </div>
            </div>
          </section>

          <section
            id="menu"
            className="grid gap-6 rounded-[2.5rem] bg-[#f6ead8] px-5 py-16 text-stone-900 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10"
          >
            <div>
              <SectionHeading
                eyebrow={landing.menu.eyebrow}
                title={landing.menu.title}
                description={landing.menu.description}
              />
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {landing.menu.categories.map((category) => (
                  <article
                    key={category.title}
                    className="rounded-[1.75rem] border border-stone-900/8 bg-white px-5 py-6 shadow-[0_18px_40px_rgba(77,46,24,0.08)]"
                  >
                    <h3 className="text-lg font-semibold text-stone-950">{category.title}</h3>
                    <ul className="mt-4 space-y-3">
                      {category.items.map((entry) => (
                        <li
                          key={entry}
                          className="flex items-center gap-3 text-sm text-stone-700"
                        >
                          <span className="h-2.5 w-2.5 rounded-full bg-green-700" />
                          {entry}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>

            <aside className="rounded-[2rem] bg-stone-950 p-6 text-stone-100 shadow-[0_22px_50px_rgba(0,0,0,0.22)] sm:p-8">
              <span className="inline-flex rounded-full bg-red-600/20 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-red-100">
                {landing.menu.asideBadge}
              </span>
              <h3 className="mt-5 text-3xl font-semibold tracking-tight text-white">
                {landing.menu.asideTitle}
              </h3>
              <p className="mt-4 text-base leading-8 text-stone-300">
                {landing.menu.asideDescription}
              </p>
              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={primaryWhatsAppLink}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-red-600 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-red-500"
                >
                  {content.cta.requestFullMenu}
                </a>
                <a
                  href={primaryWhatsAppLink}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 px-5 py-3 text-center text-sm font-semibold text-stone-100 transition hover:bg-white/8"
                >
                  {content.cta.whatsappOrder}
                </a>
              </div>
            </aside>
          </section>

          <section className="py-16">
            <SectionHeading
              eyebrow={landing.testimonials.eyebrow}
              title={landing.testimonials.title}
              description={landing.testimonials.description}
              invert
            />

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {landing.testimonials.items.map((item) => (
                <article
                  key={item.author}
                  className="rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.2)]"
                >
                  <p className="text-lg leading-8 text-stone-100">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <p className="mt-6 text-base font-semibold text-amber-50">{item.author}</p>
                  <p className="mt-1 text-sm uppercase tracking-[0.2em] text-stone-400">
                    {item.detail}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section
            id="contact"
            className="grid gap-6 rounded-[2.5rem] bg-[#f6ead8] px-5 py-16 text-stone-900 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:px-10"
          >
            <div>
              <SectionHeading
                eyebrow={landing.contact.eyebrow}
                title={landing.contact.title}
                description={landing.contact.description}
              />

              <form
                onSubmit={handleSubmit}
                className="mt-10 rounded-[2rem] border border-stone-900/8 bg-white p-6 shadow-[0_18px_50px_rgba(77,46,24,0.12)] sm:p-8"
              >
                <h3 className="text-2xl font-semibold text-stone-950">
                  {landing.contact.formTitle}
                </h3>
                <p className="mt-3 text-sm leading-7 text-stone-700">
                  {landing.contact.formDescription}
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-medium text-stone-800">
                    {landing.contact.fields.name}
                    <input
                      type="text"
                      value={formState.name}
                      onChange={(event) => handleFieldChange('name', event.target.value)}
                      placeholder={landing.contact.placeholders.name}
                      className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none transition focus:border-red-500 focus:bg-white"
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-medium text-stone-800">
                    {landing.contact.fields.email}
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(event) => handleFieldChange('email', event.target.value)}
                      placeholder={landing.contact.placeholders.email}
                      className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none transition focus:border-red-500 focus:bg-white"
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-medium text-stone-800">
                    {landing.contact.fields.phone}
                    <input
                      type="text"
                      value={formState.phone}
                      onChange={(event) => handleFieldChange('phone', event.target.value)}
                      placeholder={landing.contact.placeholders.phone}
                      className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none transition focus:border-red-500 focus:bg-white"
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-medium text-stone-800">
                    {landing.contact.fields.subject}
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(event) => handleFieldChange('subject', event.target.value)}
                      placeholder={landing.contact.placeholders.subject}
                      className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none transition focus:border-red-500 focus:bg-white"
                    />
                  </label>
                </div>

                <label className="mt-4 grid gap-2 text-sm font-medium text-stone-800">
                  {landing.contact.fields.message}
                  <textarea
                    rows={5}
                    value={formState.message}
                    onChange={(event) => handleFieldChange('message', event.target.value)}
                    placeholder={landing.contact.placeholders.message}
                    className="rounded-[1.5rem] border border-stone-200 bg-stone-50 px-4 py-3 outline-none transition focus:border-red-500 focus:bg-white"
                  />
                </label>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    disabled={submitState === 'submitting'}
                    className="rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-500 disabled:cursor-not-allowed disabled:bg-red-300"
                  >
                    {submitState === 'submitting' ? content.cta.submitting : content.cta.submit}
                  </button>

                  <a
                    href={primaryWhatsAppLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-red-700 transition hover:text-red-900"
                  >
                    {landing.contact.whatsappCta}
                  </a>
                </div>

                {submitState === 'validation' ? (
                  <p className="mt-4 text-sm font-medium text-red-700">
                    {landing.contact.requiredError}
                  </p>
                ) : null}
                {submitState === 'success' ? (
                  <p className="mt-4 text-sm font-medium text-green-700">
                    {landing.contact.successMessage}
                  </p>
                ) : null}
                {submitState === 'error' ? (
                  <p className="mt-4 text-sm font-medium text-red-700">
                    {landing.contact.errorMessage}
                  </p>
                ) : null}
              </form>
            </div>

            <aside className="rounded-[2rem] bg-stone-950 p-6 text-stone-100 shadow-[0_20px_60px_rgba(0,0,0,0.24)] sm:p-8">
              <h3 className="text-2xl font-semibold text-white">{landing.contact.infoTitle}</h3>
              <div className="mt-8 space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-200/75">
                    {landing.contact.addressLabel}
                  </p>
                  <p className="mt-2 text-base leading-7 text-stone-300">
                    {landing.contact.address}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-200/75">
                    {landing.contact.hoursLabel}
                  </p>
                  <p className="mt-2 text-base leading-7 text-stone-300">
                    {landing.contact.hours}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-200/75">
                    {landing.contact.deliveryLabel}
                  </p>
                  <p className="mt-2 text-base leading-7 text-stone-300">
                    {landing.contact.deliveryNote}
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-white/6 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-200/75">
                  {content.common.whatsappLabel}
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  +55 11 99999-9999
                </p>
                <a
                  href={primaryWhatsAppLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
                >
                  {landing.contact.whatsappCta}
                </a>
              </div>
            </aside>
          </section>

          <footer className="pb-6 pt-10">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 px-5 py-8 shadow-[0_18px_50px_rgba(0,0,0,0.18)] sm:px-8">
              <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.34em] text-red-200/75">
                    {landing.header.brandTag}
                  </p>
                  <p className="mt-3 text-3xl font-semibold text-white">{siteConfig.brandName}</p>
                  <p className="mt-4 max-w-md text-sm leading-7 text-stone-300">
                    {landing.footer.description}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-400">
                    {landing.footer.navigationTitle}
                  </p>
                  <div className="mt-4 grid gap-3 text-sm text-stone-300">
                    {landing.footer.navigation.map((item) => (
                      <a key={item.href} href={item.href} className="transition hover:text-white">
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-400">
                    {landing.footer.socialTitle}
                  </p>
                  <div className="mt-4 grid gap-3 text-sm text-stone-300">
                    <a href={primaryWhatsAppLink} target="_blank" rel="noreferrer">
                      {content.common.whatsappLabel}
                    </a>
                    <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">
                      {content.common.instagramLabel}
                    </a>
                    <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-5 text-sm text-stone-400 lg:flex-row lg:items-center lg:justify-between">
                <p>{landing.footer.rights}</p>
                <div className="flex flex-wrap items-center gap-2">
                  {supportedLocales.map((option) => (
                    <Link
                      key={option}
                      href={router.asPath}
                      locale={option}
                      aria-pressed={locale === option}
                      className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                        locale === option
                          ? 'bg-red-600 text-white'
                          : 'border border-white/10 text-stone-300 hover:text-white'
                      }`}
                    >
                      {localeLabels[option]}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
