import { notFound } from 'next/navigation';
import { Ambient } from '@/components/sections/Ambient';
import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { LogoMarquee } from '@/components/sections/LogoMarquee';
import { Services } from '@/components/sections/Services';
import { Templates } from '@/components/sections/Templates';
import { About } from '@/components/sections/About';
import { Process } from '@/components/sections/Process';
import { Testimonials } from '@/components/sections/Testimonials';
import { Faq } from '@/components/sections/Faq';
import { CtaBand } from '@/components/sections/CtaBand';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { getDictionary } from '@/lib/dictionaries';
import { isLocale } from '@/lib/i18n';

export default function HomePage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const t = getDictionary(locale);

  return (
    <>
      <Ambient />
      <Navbar locale={locale} t={t.nav} />

      <main className="page">
        <Hero t={t.hero} />
        <LogoMarquee t={t.marquee} locale={locale} />
        <Services t={t.services} />
        <Templates t={t.templates} />
        <About t={t.about} />
        <Process t={t.process} />
        <Testimonials t={t.testimonials} />
        <Faq t={t.faq} />
        <CtaBand t={t.cta} />
        <Contact t={t.contact} />
        <Footer t={t.footer} nav={t.nav} />
      </main>
    </>
  );
}
