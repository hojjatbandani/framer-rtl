'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Spark } from '@/components/icons';
import { EASE, Magnetic, Tilt, TextRotator, WordReveal } from '@/components/motion';
import { CAL_LINK } from '@/lib/constants';
import type { Dictionary } from '@/lib/dictionaries';

const BARS = [38, 52, 44, 68, 58, 82, 74, 96];

export function Hero({ t }: { t: Dictionary['hero'] }) {
  const reduced = useReducedMotion();

  return (
    <section className="hero">
      <div className="container hero-inner">
        <div>
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <span className="dot" />
            {t.badge}
          </motion.span>

          <h1 className="h-display hero-title">
            <WordReveal text={t.titleLead} delay={0.1} />{' '}
            <TextRotator words={t.titleRotating} />
            <br />
            <WordReveal text={t.titleTrail} delay={0.35} />
          </h1>

          <motion.p
            className="lede"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
          >
            {t.subtitle}
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.62, ease: EASE }}
          >
            <Magnetic>
              <a href="#templates" className="btn btn-primary">
                {t.ctaPrimary}
                <ArrowRight size={17} className="arrow" />
              </a>
            </Magnetic>
            <Magnetic strength={0.18}>
              <a href={CAL_LINK} target="_blank" rel="noreferrer" className="btn btn-ghost">
                {t.ctaSecondary}
              </a>
            </Magnetic>
          </motion.div>

          <motion.p
            className="hero-collab"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: EASE }}
          >
            <span className="muted">{t.collab.label}</span>{' '}
            <a href={CAL_LINK} target="_blank" rel="noreferrer" className="hero-collab-link">
              {t.collab.cta}
            </a>
          </motion.p>

          <div className="hero-stats">
            {t.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.75 + i * 0.08, ease: EASE }}
              >
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.25, ease: EASE }}
        >
          <Tilt className="panel surface">
            <div className="panel-bar">
              <div className="panel-dots">
                <span />
                <span />
                <span />
              </div>
              <strong style={{ fontSize: '0.8rem', fontWeight: 560 }}>{t.panel.title}</strong>
              <span className="panel-status">
                <span className="pulse" />
                {t.panel.status}
              </span>
            </div>

            <div className="panel-body">
              <div className="panel-tabs">
                {t.panel.tabs.map((tab, i) => (
                  <span key={tab} className="panel-tab" data-active={i === 0}>
                    {tab}
                  </span>
                ))}
              </div>

              <div className="panel-metric">
                {/* dir="ltr" keeps "+48%" from being reordered by the bidi algorithm in RTL */}
                <strong dir="ltr">{t.panel.metricValue}</strong>
                <span className="muted" style={{ fontSize: '0.85rem' }}>
                  {t.panel.metricLabel}
                </span>
              </div>

              <div className="panel-chart">
                {BARS.map((height, i) => (
                  <motion.i
                    key={i}
                    style={{ height: `${height}%` }}
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ scaleY: 1, opacity: 1 }}
                    transition={{ duration: reduced ? 0.2 : 0.8, delay: 0.6 + i * 0.06, ease: EASE }}
                  />
                ))}
              </div>

              <div className="panel-grid">
                {t.panel.cards.map((card) => (
                  <div key={card.title} className="panel-card">
                    <span dir="ltr">{card.tag}</span>
                    <strong>{card.title}</strong>
                    <div className="bars">
                      <i />
                      <i />
                      <i />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Tilt>

          <motion.div
            className="float-chip float-chip-a"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1, y: reduced ? 0 : [0, -8, 0] }}
            transition={{
              opacity: { duration: 0.6, delay: 1 },
              scale: { duration: 0.6, delay: 1, ease: EASE },
              y: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
            }}
          >
            <Spark style={{ color: 'var(--blue-soft)' }} />
            {t.chipRating}
          </motion.div>

          <motion.div
            className="float-chip float-chip-b"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1, y: reduced ? 0 : [0, 9, 0] }}
            transition={{
              opacity: { duration: 0.6, delay: 1.15 },
              scale: { duration: 0.6, delay: 1.15, ease: EASE },
              y: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }
            }}
          >
            <span className="pulse" />
            {t.chipDelivery}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
