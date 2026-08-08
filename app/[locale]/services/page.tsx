import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Ambient } from '@/components/sections/Ambient';
import { Navbar } from '@/components/sections/Navbar';
import { ServicesHero } from '@/components/services/ServicesHero';
import { Tiers } from '@/components/services/Tiers';
import { Compare } from '@/components/services/Compare';
import { Steps } from '@/components/sections/Steps';
import { Addons } from '@/components/services/Addons';
import { Faq } from '@/components/sections/Faq';
import { CtaBand } from '@/components/sections/CtaBand';
import { Footer } from '@/components/sections/Footer';
import { getDictionary } from '@/lib/dictionaries';
import { BRAND, CAL_LINK, SITE_URL, homeHref } from '@/lib/constants';
import { isLocale, locales, localeMeta } from '@/lib/i18n';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = isLocale(params.locale) ? params.locale : 'en';
  const t = getDictionary(locale);

  return {
    title: t.servicesMeta.title,
    description: t.servicesMeta.description,
    alternates: {
      canonical: `${SITE_URL}/${locale}/services`,
      languages: {
        ...Object.fromEntries(
          locales.map((l) => [localeMeta[l].htmlLang, `${SITE_URL}/${l}/services`])
        ),
        'x-default': `${SITE_URL}/en/services`
      }
    },
    openGraph: {
      title: t.servicesMeta.title,
      description: t.servicesMeta.description,
      url: `${SITE_URL}/${locale}/services`,
      siteName: BRAND,
      type: 'website',
      images: [{ url: '/og.png', width: 1200, height: 630, alt: t.servicesMeta.title }]
    },
    twitter: {
      card: 'summary_large_image',
      title: t.servicesMeta.title,
      description: t.servicesMeta.description,
      images: ['/og.png']
    }
  };
}

export default function ServicesPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const t = getDictionary(locale);
  const s = t.services;

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: t.nav.home, item: `${SITE_URL}/${locale}` },
        { '@type': 'ListItem', position: 2, name: t.nav.services, item: `${SITE_URL}/${locale}/services` }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: s.faq.items.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a }
      }))
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Ambient />
      <Navbar locale={locale} t={t.nav} page="services" />

      <main className="page">
        <ServicesHero locale={locale} t={s.hero} tiers={s.tiers} />
        <Tiers t={s.tiers} />
        <Compare t={s.compare} tiers={s.tiers} />
        <Steps
          badge={s.process.badge}
          title={s.process.title}
          subtitle={s.process.subtitle}
          steps={s.process.steps}
        />
        <Addons t={s.addons} />
        <Faq t={s.faq} id="services-faq" />
        <CtaBand
          title={s.cta.title}
          desc={s.cta.desc}
          primary={{ label: s.cta.primary, href: CAL_LINK, external: true }}
          secondary={{ label: s.cta.secondary, href: homeHref(locale, 'templates') }}
          meta={s.cta.meta}
        />
      </main>

      <Footer locale={locale} t={t.footer} nav={t.nav} />
    </>
  );
}
