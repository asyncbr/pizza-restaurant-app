import Link from 'next/link';
import { i18n, type Locale } from '@/src/i18n/config';
import type { Dictionary } from '@/src/i18n/get-dictionary';

type LocaleSwitcherProps = {
  currentLocale: Locale;
  labels: Dictionary['navbar'];
};

export function LocaleSwitcher({ currentLocale, labels }: LocaleSwitcherProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-400">
        {labels.languageLabel}
      </span>
      <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
        {i18n.locales.map((locale) => (
          <Link
            key={locale}
            href={`/${locale}`}
            aria-pressed={currentLocale === locale}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
              currentLocale === locale
                ? 'bg-red-600 text-white'
                : 'text-stone-300 hover:text-white'
            }`}
          >
            {labels.locales[locale]}
          </Link>
        ))}
      </div>
    </div>
  );
}
