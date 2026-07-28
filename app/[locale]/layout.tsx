import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import '../globals.css';
import { getDictionary } from '@/lib/dictionaries';
import { isLocale, locales, localeMeta, type Locale } from '@/lib/i18n';

const SITE_URL = 'https://studio.example.com';

const FONT_HREF: Record<Locale, string> = {
  en: 'https://fonts.googleapis.com/css2?family=Inter:wght@400..700&family=Inter+Tight:wght@500..700&family=JetBrains+Mono:wght@400&display=swap',
  ar: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=Inter:wght@400..700&family=Inter+Tight:wght@500..700&family=JetBrains+Mono:wght@400&display=swap'
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = isLocale(params.locale) ? params.locale : 'en';
  const t = getDictionary(locale);

  return {
    metadataBase: new URL(SITE_URL),
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: Object.fromEntries(locales.map((l) => [localeMeta[l].htmlLang, `${SITE_URL}/${l}`]))
    },
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      url: `${SITE_URL}/${locale}`,
      siteName: 'Northstar Studio',
      locale: locale === 'ar' ? 'ar_AE' : 'en_US',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: t.meta.title,
      description: t.meta.description
    }
  };
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#050506'
};

export default function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const { dir, htmlLang } = localeMeta[locale];

  return (
    <html lang={htmlLang} dir={dir} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={FONT_HREF[locale]} />
      </head>
      <body>{children}</body>
    </html>
  );
}
