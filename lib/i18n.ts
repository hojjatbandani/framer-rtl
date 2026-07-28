export const locales = ['en', 'ar'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeMeta: Record<Locale, { label: string; short: string; dir: 'ltr' | 'rtl'; htmlLang: string }> = {
  en: { label: 'English', short: 'EN', dir: 'ltr', htmlLang: 'en' },
  ar: { label: 'العربية', short: 'AR', dir: 'rtl', htmlLang: 'ar' }
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function dirOf(locale: Locale): 'ltr' | 'rtl' {
  return localeMeta[locale].dir;
}
