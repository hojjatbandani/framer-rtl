'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from '@/components/icons';
import { EASE, Magnetic, WordReveal } from '@/components/motion';
import { CAL_LINK, homeHref } from '@/lib/constants';
import type { Dictionary } from '@/lib/dictionaries';
import type { Locale } from '@/lib/i18n';

export function ServicesHero({
  locale,
  t,
  tiers
}: {
  locale: Locale;
  t: Dictionary['services']['hero'];
  tiers: Dictionary['services']['tiers'];
}) {
  return (
    <section className="hero hero-page">
      <div className="container">
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <span className="dot" />
          {t.badge}
        </motion.span>

        <h1 className="h-display hero-page-title">
          <WordReveal text={t.title} delay={0.08} />
        </h1>

        <motion.p
          className="lede hero-page-lede"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
        >
          {t.subtitle}
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
        >
          <Magnetic>
            <a href={CAL_LINK} target="_blank" rel="noreferrer" className="btn btn-accent btn-lg">
              <Calendar size={17} />
              {t.primary}
              <ArrowRight size={17} className="arrow" />
            </a>
          </Magnetic>
          <Magnetic strength={0.16}>
            <a href={homeHref(locale, 'templates')} className="btn btn-ghost btn-lg">
              {t.secondary}
            </a>
          </Magnetic>
        </motion.div>

        <motion.p
          className="hero-note muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65, ease: EASE }}
        >
          {t.note}
        </motion.p>

        <motion.ol
          className="hero-tier-rail"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75, ease: EASE }}
        >
          {tiers.items.map((tier, i) => (
            <li key={tier.id}>
              <a href={`#${tier.id}`}>
                <span className="rail-num" dir="ltr">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="rail-name">{tier.name}</span>
                <span className="rail-price" dir="ltr">
                  {tier.price}
                </span>
              </a>
            </li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
