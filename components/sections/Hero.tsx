'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from '@/components/icons';
import { EASE, Magnetic, TextRotator, VerticalMarquee, WordReveal } from '@/components/motion';
import { TemplatePreview } from '@/components/TemplatePreview';
import { TEMPLATE_FILTER_EVENT, servicesHref } from '@/lib/constants';
import { showcaseColumns, templateById, templateKinds, type TemplateKind } from '@/lib/templates';
import type { Dictionary } from '@/lib/dictionaries';
import type { Locale } from '@/lib/i18n';

const CHIP_KINDS = templateKinds.slice(0, 6);

function ShowcaseCard({ id, name, price }: { id: string; name: string; price: number }) {
  const meta = templateById(id);
  if (!meta) return null;

  return (
    <div className="sc-card">
      <TemplatePreview kind={meta.kind} accent={meta.accent} />
      <div className="sc-foot">
        <span className="sc-name">{name}</span>
        <span className="sc-price" dir="ltr">
          ${price}
        </span>
      </div>
    </div>
  );
}

export function Hero({
  locale,
  t,
  tc
}: {
  locale: Locale;
  t: Dictionary['hero'];
  tc: Dictionary['templates'];
}) {
  const reduced = useReducedMotion();

  const jumpToCatalog = (kind: TemplateKind) => {
    window.dispatchEvent(new CustomEvent(TEMPLATE_FILTER_EVENT, { detail: kind }));
    document.getElementById('templates')?.scrollIntoView({
      behavior: reduced ? 'auto' : 'smooth',
      block: 'start'
    });
  };

  const column = (ids: string[]) =>
    ids.map((id) => (
      <ShowcaseCard key={id} id={id} name={tc.items[id as keyof typeof tc.items].name} price={templateById(id)!.price} />
    ));

  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <span className="dot" />
            {t.badge}
          </motion.span>

          <h1 className="h-display hero-title">
            <WordReveal text={t.titleLead} delay={0.08} />{' '}
            <TextRotator words={t.titleRotating} />
            <br />
            <WordReveal text={t.titleTrail} delay={0.3} />
          </h1>

          <motion.p
            className="lede"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: EASE }}
          >
            {t.subtitle}
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.56, ease: EASE }}
          >
            <Magnetic>
              <a href="#templates" className="btn btn-primary btn-lg">
                {t.ctaPrimary}
                <ArrowRight size={17} className="arrow" />
              </a>
            </Magnetic>
            <Magnetic strength={0.16}>
              <Link href={servicesHref(locale)} className="btn btn-ghost btn-lg">
                {t.ctaSecondary}
              </Link>
            </Magnetic>
          </motion.div>

          <motion.div
            className="hero-jump"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7, ease: EASE }}
          >
            <span className="hero-jump-label">{t.filterHint}</span>
            <div className="hero-jump-chips">
              {CHIP_KINDS.map((kind) => (
                <button key={kind} type="button" className="mini-chip" onClick={() => jumpToCatalog(kind)}>
                  {tc.categories[kind]}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.ul
            className="hero-trust"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: EASE }}
          >
            {t.trust.map((item) => (
              <li key={item.label}>
                <strong dir="ltr">{item.value}</strong>
                <span>{item.label}</span>
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          className="hero-showcase"
          aria-hidden="true"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: EASE }}
        >
          <div className="showcase-stage">
            <VerticalMarquee speed={reduced ? 0 : 52}>{column(showcaseColumns[0])}</VerticalMarquee>
            <VerticalMarquee speed={reduced ? 0 : 62} reverse className="showcase-lag">
              {column(showcaseColumns[1])}
            </VerticalMarquee>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
