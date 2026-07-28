import { Reveal, Spotlight, Stagger, StaggerItem } from '@/components/motion';
import type { Dictionary } from '@/lib/dictionaries';

export function About({ t }: { t: Dictionary['about'] }) {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <Reveal>
          <span className="eyebrow">
            <span className="dot" />
            {t.badge}
          </span>
          <h2 className="h-section">{t.title}</h2>
          <p className="lede">{t.desc}</p>
        </Reveal>

        <Stagger className="points">
          {t.points.map((point) => (
            <StaggerItem key={point.title}>
              <Spotlight className="surface point" style={{ height: '100%' }}>
                <strong>{point.title}</strong>
                <p>{point.desc}</p>
              </Spotlight>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
