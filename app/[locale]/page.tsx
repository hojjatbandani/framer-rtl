import { notFound } from 'next/navigation';
import { Ambient } from '@/components/sections/Ambient';
import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { LogoMarquee } from '@/components/sections/LogoMarquee';
import { Templates } from '@/components/sections/Templates';
import { Included } from '@/components/sections/Included';
import { ServicesTeaser } from '@/components/sections/ServicesTeaser';
import { Steps } from '@/components/sections/Steps';
import { Testimonials } from '@/components/sections/Testimonials';
import { Faq } from '@/components/sections/Faq';
import { CtaBand } from '@/components/sections/CtaBand';
import { Footer } from '@/components/sections/Footer';
import { getDictionary } from '@/lib/dictionaries';
import { homeHref, servicesHref } from '@/lib/constants';
import { isLocale } from '@/lib/i18n';

export default function HomePage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const t = getDictionary(locale);

  return (
    <>
      <Ambient />
      <Navbar locale={locale} t={t.nav} page="home" />

      <main className="page">
        <Hero locale={locale} t={t.hero} tc={t.templates} />
        <LogoMarquee t={t.marquee} locale={locale} />
        <Templates locale={locale} t={t.templates} />
        <Included t={t.included} />
        <ServicesTeaser locale={locale} t={t.servicesTeaser} />
        <Steps
          id="how"
          badge={t.steps.badge}
          title={t.steps.title}
          subtitle={t.steps.subtitle}
          steps={t.steps.items}
        />
        <Testimonials t={t.testimonials} />
        <Faq t={t.faq} />
        <CtaBand
          title={t.cta.title}
          desc={t.cta.desc}
          primary={{ label: t.cta.primary, href: homeHref(locale, 'templates') }}
          secondary={{ label: t.cta.secondary, href: servicesHref(locale) }}
        />
      </main>

      <Footer locale={locale} t={t.footer} nav={t.nav} />
    </>
  );
}
