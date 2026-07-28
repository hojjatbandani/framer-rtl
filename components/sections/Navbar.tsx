'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from 'framer-motion';
import { useState } from 'react';
import { Close, Menu, Spark } from '@/components/icons';
import { EASE, Magnetic } from '@/components/motion';
import { CAL_LINK } from '@/lib/constants';
import { locales, localeMeta, type Locale } from '@/lib/i18n';
import type { Dictionary } from '@/lib/dictionaries';

export function Navbar({ locale, t }: { locale: Locale; t: Dictionary['nav'] }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 26, restDelta: 0.001 });

  useMotionValueEvent(scrollY, 'change', (value) => setScrolled(value > 24));

  // Keep the reader on the same page when they switch language.
  const swapLocale = (next: Locale) => {
    const rest = pathname.replace(new RegExp(`^/(${locales.join('|')})`), '');
    return `/${next}${rest}`;
  };

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />

      <header className="nav-wrap" data-scrolled={scrolled}>
        <div className="container">
          <nav className="nav">
            <Link href={`/${locale}`} className="brand" aria-label="Northstar Studio">
              <span className="brand-mark">
                <Spark style={{ color: '#fff' }} />
              </span>
              Northstar
            </Link>

            <div className="nav-links">
              {t.links.map((link) => (
                <a key={link.href} href={link.href} className="nav-link">
                  {link.label}
                </a>
              ))}
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

              <Magnetic strength={0.2}>
                <a href={CAL_LINK} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
                  {t.cta}
                </a>
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
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <a
              href={CAL_LINK}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
              onClick={() => setOpen(false)}
              style={{ marginTop: 8 }}
            >
              {t.cta}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
