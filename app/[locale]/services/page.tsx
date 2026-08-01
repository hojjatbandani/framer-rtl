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
import { CAL_LINK, homeHref } from '@/lib/constants';
import { isLocale, locales, localeMeta } from '@/lib/i18n';

const SITE_URL = 'https://studio.example.com';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = isLocale(params.locale) ? params.locale : 'en';
  const t = getDictionary(locale);

  return {
    title: t.servicesMeta.title,
    description: t.servicesMeta.description,
    alternates: {
      canonical: `${SITE_URL}/${locale}/services`,
      languages: Object.fromEntries(
        locales.map((l) => [localeMeta[l].htmlLang, `${SITE_URL}/${l}/services`])
      )
    },
    openGraph: {
      title: t.servicesMeta.title,
      description: t.servicesMeta.description,
      url: `${SITE_URL}/${locale}/services`,
      type: 'website'
    }
  };
}

export default function ServicesPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const t = getDictionary(locale);
  const s = t.services;

  return (
    <>
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
