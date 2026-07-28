import { ArrowUpRight, Icon } from '@/components/icons';
import { Reveal, Spotlight, Stagger, StaggerItem } from '@/components/motion';
import type { Dictionary } from '@/lib/dictionaries';

export function Services({ t }: { t: Dictionary['services'] }) {
  return (
    <section id="services" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">
            <span className="dot" />
            {t.badge}
          </span>
          <h2 className="h-section">{t.title}</h2>
          <p className="lede">{t.subtitle}</p>
        </Reveal>

        <Stagger className="bento" amount={0.08}>
          {t.items.map((service, i) => (
            <StaggerItem key={service.title} className={i < 2 || i >= t.items.length - 2 ? 'wide' : undefined}>
              <Spotlight className="surface s-card">
                <span className="icon-tile">
                  <Icon name={service.icon} />
                </span>
                <h3 className="h-card">{service.title}</h3>
                <p>{service.desc}</p>
                <a href="#contact" className="s-link">
                  {t.cta}
                  <ArrowUpRight size={15} />
                </a>
              </Spotlight>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
