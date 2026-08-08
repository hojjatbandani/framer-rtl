'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowRight, Close, LogoGlyph, Menu } from '@/components/icons';
import { EASE, Magnetic } from '@/components/motion';
import { BRAND, CAL_LINK, homeHref, servicesHref } from '@/lib/constants';
import { locales, localeMeta, type Locale } from '@/lib/i18n';
import type { Dictionary } from '@/lib/dictionaries';

type Page = 'home' | 'services';

export function Navbar({ locale, t, page = 'home' }: { locale: Locale; t: Dictionary['nav']; page?: Page }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 26, restDelta: 0.001 });

  useMotionValueEvent(scrollY, 'change', (value) => setScrolled(value > 20));

  // A resized window can reveal the desktop nav while the sheet is still open.
  useEffect(() => {
    if (!open) return;
    const query = window.matchMedia('(min-width: 900px)');
    const close = () => setOpen(false);
    query.addEventListener('change', close);
    return () => query.removeEventListener('change', close);
  }, [open]);

  // Keep the reader on the same page when they switch language.
  const swapLocale = (next: Locale) => {
    const rest = pathname.replace(new RegExp(`^/(${locales.join('|')})`), '');
    return `/${next}${rest}`;
  };

  // On the services page the header CTA has nowhere left to send you but the
  // calendar; on the home page it is the road to the services page.
  const cta =
    page === 'services'
      ? { href: CAL_LINK, label: t.ctaCall, external: true }
      : { href: servicesHref(locale), label: t.cta, external: false };

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />

      <header className="nav-wrap" data-scrolled={scrolled}>
        <div className="container">
          <nav className="nav">
            <Link href={homeHref(locale)} className="brand" aria-label={BRAND}>
              <span className="brand-mark">
                <LogoGlyph style={{ color: '#fff' }} />
              </span>
              {BRAND}
            </Link>

            <div className="nav-links">
              {t.links.map((link) => (
                <Link key={link.id} href={homeHref(locale, link.id)} className="nav-link">
                  {link.label}
                </Link>
              ))}
              <Link
                href={servicesHref(locale)}
                className="nav-link"
                aria-current={page === 'services' ? 'page' : undefined}
              >
                {t.services}
              </Link>
            </div>

            <div className="nav-actions">
              <div className="lang-switch" role="group" aria-label={t.language}>
                {locales.map((code) => {
                  const active = code === locale;
                  return (
                    <Link
                      key={code}
                      href={swapLocale(code)}
                      className="lang-opt"
                      data-active={active}
                      lang={localeMeta[code].htmlLang}
                      aria-current={active ? 'true' : undefined}
                      aria-label={localeMeta[code].label}
                      onClick={() => {
                        document.cookie = `NEXT_LOCALE=${code}; path=/; max-age=31536000; samesite=lax`;
                      }}
                    >
                      {active && (
                        <motion.span
                          layoutId="lang-pill"
                          className="lang-pill"
                          transition={{ duration: 0.35, ease: EASE }}
                        />
                      )}
                      {localeMeta[code].short}
                    </Link>
                  );
                })}
              </div>

              <Magnetic strength={0.18}>
                {cta.external ? (
                  <a href={cta.href} target="_blank" rel="noreferrer" className="btn btn-accent btn-sm nav-cta">
                    <span className="nav-cta-full">{cta.label}</span>
                    <span className="nav-cta-short">{t.ctaShort}</span>
                    <ArrowRight size={15} className="arrow" />
                  </a>
                ) : (
                  <Link href={cta.href} className="btn btn-accent btn-sm nav-cta">
                    <span className="nav-cta-full">{cta.label}</span>
                    <span className="nav-cta-short">{t.ctaShort}</span>
                    <ArrowRight size={15} className="arrow" />
                  </Link>
                )}
              </Magnetic>

              <button
                type="button"
                className="nav-toggle"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-label={open ? t.close : t.menu}
              >
                {open ? <Close /> : <Menu />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            {t.links.map((link) => (
              <Link key={link.id} href={homeHref(locale, link.id)} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link href={servicesHref(locale)} onClick={() => setOpen(false)}>
              {t.services}
            </Link>

            <div className="mobile-menu-foot">
              {/* The nav bar drops the language switch on narrow screens, so it
                  has to live here instead. No layoutId — a second element with
                  the same one would fight the nav's pill. */}
              <div className="lang-switch lang-switch-static" role="group" aria-label={t.language}>
                {locales.map((code) => (
                  <Link
                    key={code}
                    href={swapLocale(code)}
                    className="lang-opt"
                    data-active={code === locale}
                    lang={localeMeta[code].htmlLang}
                    aria-label={localeMeta[code].label}
                    onClick={() => {
                      document.cookie = `NEXT_LOCALE=${code}; path=/; max-age=31536000; samesite=lax`;
                      setOpen(false);
                    }}
                  >
                    {localeMeta[code].short}
                  </Link>
                ))}
              </div>

              {page === 'services' ? (
                <a
                  href={CAL_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-accent"
                  onClick={() => setOpen(false)}
                >
                  {t.ctaCall}
                  <ArrowRight size={16} className="arrow" />
                </a>
              ) : (
                <Link href={servicesHref(locale)} className="btn btn-accent" onClick={() => setOpen(false)}>
                  {t.cta}
                  <ArrowRight size={16} className="arrow" />
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
