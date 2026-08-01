'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight, Check, Close, Search } from '@/components/icons';
import { EASE, Reveal } from '@/components/motion';
import { TemplatePreview } from '@/components/TemplatePreview';
import { CAL_LINK, TEMPLATE_FILTER_EVENT, servicesHref } from '@/lib/constants';
import { templates, templateKinds, type TemplateMeta } from '@/lib/templates';
import type { Dictionary } from '@/lib/dictionaries';
import type { Locale } from '@/lib/i18n';

const ALL = '__all__';

export function Templates({ locale, t }: { locale: Locale; t: Dictionary['templates'] }) {
  const [kind, setKind] = useState<string>(ALL);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState<TemplateMeta | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // The hero's category chips drive this filter (see TEMPLATE_FILTER_EVENT).
  useEffect(() => {
    const onFilter = (event: Event) => {
      const detail = (event as CustomEvent<string>).detail;
      setKind(detail);
      setQuery('');
    };
    window.addEventListener(TEMPLATE_FILTER_EVENT, onFilter);
    return () => window.removeEventListener(TEMPLATE_FILTER_EVENT, onFilter);
  }, []);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (!active) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [active, close]);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return templates.filter((template) => {
      if (kind !== ALL && template.kind !== kind) return false;
      if (!q) return true;
      const copy = t.items[template.id as keyof typeof t.items];
      return (
        copy.name.toLowerCase().includes(q) ||
        copy.tagline.toLowerCase().includes(q) ||
        template.stack.toLowerCase().includes(q) ||
        t.categories[template.kind].toLowerCase().includes(q)
      );
    });
  }, [kind, query, t]);

  const copyFor = (template: TemplateMeta) => t.items[template.id as keyof typeof t.items];

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

        <Reveal className="toolbar" y={14}>
          <div className="filters">
            {[ALL, ...templateKinds].map((value) => {
              const isActive = value === kind;
              return (
                <button
                  key={value}
                  type="button"
                  className="chip"
                  data-active={isActive}
                  onClick={() => setKind(value)}
                  aria-pressed={isActive}
                >
                  {isActive && (
                    <motion.span
                      layoutId="chip-bg"
                      className="chip-bg"
                      transition={{ duration: 0.35, ease: EASE }}
                    />
                  )}
                  <span>{value === ALL ? t.all : t.categories[value as TemplateMeta['kind']]}</span>
                </button>
              );
            })}
          </div>

          <div className="toolbar-end">
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
            <p className="toolbar-count" aria-live="polite">
              {t.showing.replace('{n}', String(visible.length)).replace('{total}', String(templates.length))}
            </p>
          </div>
        </Reveal>

        <motion.div layout className="t-grid">
          <AnimatePresence mode="popLayout">
            {visible.map((template) => {
              const copy = copyFor(template);
              return (
                <motion.article
                  key={template.id}
                  layout
                  initial={{ opacity: 0, y: 18, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.42, ease: EASE }}
                  className="tcard"
                >
                  <button
                    type="button"
                    className="tcard-shot"
                    onClick={() => setActive(template)}
                    aria-label={`${t.preview} — ${copy.name}`}
                  >
                    <TemplatePreview kind={template.kind} accent={template.accent} />
                    <span className="tcard-veil">
                      <span className="btn btn-primary btn-sm">{t.preview}</span>
                    </span>
                  </button>

                  {template.badge && (
                    <span className="tcard-badge" data-tone={template.badge}>
                      {t.badges[template.badge]}
                    </span>
                  )}

                  <div className="tcard-body">
                    <div className="tcard-head">
                      <h3 className="h-card">{copy.name}</h3>
                      <span className="tcard-price" dir="ltr">
                        ${template.price}
                      </span>
                    </div>
                    <p className="tcard-line">{copy.tagline}</p>
                    <div className="tcard-meta">
                      <span className="mono" dir="ltr">
                        {template.stack}
                      </span>
                      <span>{t.pages.replace('{n}', String(template.pages))}</span>
                    </div>
                  </div>

                  <div className="tcard-actions">
                    <button type="button" className="btn btn-ghost btn-sm" onClick={() => setActive(template)}>
                      {t.preview}
                    </button>
                    <a href={CAL_LINK} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
                      {t.purchase}
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {visible.length === 0 && (
          <div className="empty-state">
            <p>{t.empty}</p>
            <button
              type="button"
              className="btn btn-ghost btn-sm"
              onClick={() => {
                setKind(ALL);
                setQuery('');
              }}
            >
              {t.emptyAction}
            </button>
          </div>
        )}

        <Reveal>
          <div className="callout">
            <div>
              <h3 className="h-card">{t.callout.title}</h3>
              <p className="muted">{t.callout.desc}</p>
            </div>
            <Link href={servicesHref(locale)} className="btn btn-accent">
              {t.callout.cta}
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="modal-scrim"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="template-modal-title"
              className="modal"
              initial={{ opacity: 0, y: 28, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.4, ease: EASE }}
              onClick={(event) => event.stopPropagation()}
            >
              <button ref={closeRef} type="button" className="modal-close" onClick={close} aria-label={t.modal.close}>
                <Close size={18} />
              </button>

              <div className="modal-shot">
                <TemplatePreview kind={active.kind} accent={active.accent} />
              </div>

              <div className="modal-body">
                <span className="eyebrow">
                  <span className="dot" />
                  {t.categories[active.kind]}
                </span>
                <h3 id="template-modal-title" className="modal-title">
                  {copyFor(active).name}
                </h3>
                <p className="muted modal-line">{copyFor(active).tagline}</p>

                <dl className="modal-specs">
                  <div>
                    <dt>{t.modal.stack}</dt>
                    <dd dir="ltr">{active.stack}</dd>
                  </div>
                  <div>
                    <dt>{t.modal.pagesLabel}</dt>
                    <dd dir="ltr">{active.pages}</dd>
                  </div>
                  <div>
                    <dt>{t.priceNote}</dt>
                    <dd dir="ltr">${active.price}</dd>
                  </div>
                </dl>

                <p className="modal-overview">{t.modal.overview}</p>
                <ul className="check-list">
                  {t.modal.includes.map((item) => (
                    <li key={item}>
                      <Check size={15} />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="modal-actions">
                  <a href={CAL_LINK} target="_blank" rel="noreferrer" className="btn btn-accent">
                    {t.modal.buy}
                    <ArrowRight size={16} className="arrow" />
                  </a>
                  <Link href={servicesHref(locale)} className="btn btn-ghost" onClick={close}>
                    {t.modal.install}
                  </Link>
                </div>
                <p className="modal-licence muted">{t.modal.licence}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
