import Link from 'next/link';
import { ArrowRight, Icon } from '@/components/icons';
import { Reveal, Stagger, StaggerItem } from '@/components/motion';
import { servicesHref } from '@/lib/constants';
import type { Dictionary } from '@/lib/dictionaries';
import type { Locale } from '@/lib/i18n';

/**
 * The home page's bridge to /services — deliberately short. It sells the idea,
 * the services page sells the detail.
 */
export function ServicesTeaser({ locale, t }: { locale: Locale; t: Dictionary['servicesTeaser'] }) {
  return (
    <section className="section section-tight">
      <div className="container">
        <div className="teaser">
          <Reveal className="teaser-head">
            <span className="eyebrow">
              <span className="dot" />
              {t.badge}
            </span>
            <h2 className="h-section">{t.title}</h2>
            <p className="lede">{t.desc}</p>
            <Link href={servicesHref(locale)} className="btn btn-accent teaser-cta">
              {t.cta}
              <ArrowRight size={16} className="arrow" />
            </Link>
          </Reveal>

          <Stagger className="teaser-cards" amount={0.15}>
            {t.cards.map((card) => (
              <StaggerItem key={card.id}>
                <Link href={servicesHref(locale, card.id)} className="surface teaser-card">
                  <span className="icon-tile">
                    <Icon name={card.icon} />
                  </span>
                  <div className="teaser-card-body">
                    <h3 className="h-card">{card.name}</h3>
                    <p>{card.line}</p>
                  </div>
                  <span className="teaser-price">
                    <span className="muted">{t.from}</span>
                    <strong dir="ltr">{card.price}</strong>
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
