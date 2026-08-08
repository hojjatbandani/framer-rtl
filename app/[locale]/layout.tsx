import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import '../globals.css';
import { getDictionary } from '@/lib/dictionaries';
import { BRAND, SITE_URL } from '@/lib/constants';
import { isLocale, locales, localeMeta, type Locale } from '@/lib/i18n';

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

  const languages = {
    ...Object.fromEntries(locales.map((l) => [localeMeta[l].htmlLang, `${SITE_URL}/${l}`])),
    'x-default': `${SITE_URL}/en`
  };

  return {
    metadataBase: new URL(SITE_URL),
    title: t.meta.title,
    description: t.meta.description,
    applicationName: BRAND,
    authors: [{ name: BRAND, url: SITE_URL }],
    creator: BRAND,
    publisher: BRAND,
    keywords: [
      'Next.js templates',
      'RTL templates',
      'Arabic website templates',
      'website templates',
      'SaaS template',
      'dashboard template',
      'framer-rtl'
    ],
    category: 'technology',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1
      }
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages
    },
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      url: `${SITE_URL}/${locale}`,
      siteName: BRAND,
      locale: locale === 'ar' ? 'ar_AE' : 'en_US',
      type: 'website',
      images: [{ url: '/og.png', width: 1200, height: 630, alt: t.meta.title }]
    },
    twitter: {
      card: 'summary_large_image',
      title: t.meta.title,
      description: t.meta.description,
      images: ['/og.png']
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
  const t = getDictionary(locale);
  const { dir, htmlLang } = localeMeta[locale];

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: BRAND,
      url: SITE_URL,
      logo: `${SITE_URL}/icon.svg`,
      email: t.footer.email,
      sameAs: t.footer.socialList.map((s) => s.href)
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: BRAND,
      url: SITE_URL,
      description: t.meta.description,
      inLanguage: locales.map((l) => localeMeta[l].htmlLang),
      publisher: { '@id': `${SITE_URL}/#organization` }
    }
  ];

  return (
    <html lang={htmlLang} dir={dir} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={FONT_HREF[locale]} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
