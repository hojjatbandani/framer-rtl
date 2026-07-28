'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { ArrowUpRight, Search } from '@/components/icons';
import { EASE, Reveal } from '@/components/motion';
import type { Dictionary } from '@/lib/dictionaries';

export function Templates({ t }: { t: Dictionary['templates'] }) {
  const [category, setCategory] = useState('__all__');
  const [query, setQuery] = useState('');

  const categories = useMemo(
    () => ['__all__', ...Array.from(new Set(t.items.map((item) => item.category)))],
    [t.items]
  );

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return t.items.filter((item) => {
      const matchesCategory = category === '__all__' || item.category === category;
      const matchesQuery =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.preview.toLowerCase().includes(q) ||
        item.tech.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [category, query, t.items]);

  return (
    <section id="templates" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">
            <span className="dot" />
            {t.badge}
          </span>
          <h2 className="h-section">{t.title}</h2>
          <p className="lede">{t.subtitle}</p>
        </Reveal>

        <Reveal className="filters" y={16}>
          {categories.map((cat) => {
            const active = cat === category;
            return (
              <button
                key={cat}
                type="button"
                className="chip"
                data-active={active}
                onClick={() => setCategory(cat)}
                aria-pressed={active}
              >
                {active && (
                  <motion.span layoutId="chip-bg" className="chip-bg" transition={{ duration: 0.35, ease: EASE }} />
                )}
                <span>{cat === '__all__' ? t.all : cat}</span>
              </button>
            );
          })}

          <div className="search">
            <Search />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t.searchPlaceholder}
              aria-label={t.searchPlaceholder}
            />
          </div>
        </Reveal>

        <motion.div layout className="t-grid">
          <AnimatePresence mode="popLayout">
            {visible.map((item) => (
              <motion.article
                key={item.name}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="surface t-card"
              >
                <div className="t-thumb">
                  <span className="t-tag">{item.category}</span>
                  <span className="t-thumb-shine" aria-hidden="true" />
                  <h3 className="h-card" style={{ position: 'relative' }}>
                    {item.name}
                  </h3>
                  <p className="muted" style={{ margin: 0, fontSize: '0.86rem', position: 'relative' }}>
                    {item.preview}
                  </p>
                </div>

                <div className="t-body">
                  <p className="mono" style={{ margin: 0 }} dir="ltr">
                    {item.tech}
                  </p>
                  <div className="t-meta">
                    <span className="t-price">{item.price}</span>
                    <span>{t.priceNote}</span>
                  </div>
                  <div className="t-actions">
                    <a href="#" className="btn btn-ghost btn-sm">
                      {t.preview}
                    </a>
                    <a href="#contact" className="btn btn-primary btn-sm">
                      {t.purchase}
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {visible.length === 0 && <p className="empty-state">{t.empty}</p>}

        <Reveal>
          <div className="surface callout">
            <div>
              <h3 className="h-card" style={{ marginBottom: 6 }}>
                {t.customization.title}
              </h3>
              <p className="muted" style={{ margin: 0, maxWidth: '58ch', fontSize: '0.92rem' }}>
                {t.customization.desc}
              </p>
            </div>
            <a href="#contact" className="btn btn-accent">
              {t.customization.cta}
              <ArrowUpRight size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
