import { Icon } from '@/components/icons';
import { Reveal, Spotlight, Stagger, StaggerItem } from '@/components/motion';
import type { Dictionary } from '@/lib/dictionaries';

export function Included({ t }: { t: Dictionary['included'] }) {
  return (
    <section id="included" className="section section-tight">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">
            <span className="dot" />
            {t.badge}
          </span>
          <h2 className="h-section">{t.title}</h2>
          <p className="lede">{t.subtitle}</p>
        </Reveal>

        <Stagger className="feature-grid" amount={0.1}>
          {t.items.map((item) => (
            <StaggerItem key={item.title}>
              <Spotlight className="surface feature">
                <span className="icon-tile">
                  <Icon name={item.icon} />
                </span>
                <h3 className="h-card">{item.title}</h3>
                <p>{item.desc}</p>
              </Spotlight>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
