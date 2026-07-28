import { Star } from '@/components/icons';
import { Reveal, Spotlight, Stagger, StaggerItem } from '@/components/motion';
import type { Dictionary } from '@/lib/dictionaries';

export function Testimonials({ t }: { t: Dictionary['testimonials'] }) {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">
            <span className="dot" />
            {t.badge}
          </span>
          <h2 className="h-section">{t.title}</h2>
        </Reveal>

        <Stagger className="t-quotes" amount={0.1}>
          {t.items.map((item) => (
            <StaggerItem key={item.name}>
              <Spotlight className="surface quote" style={{ height: '100%' }}>
                <div className="stars" aria-label="5 / 5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} />
                  ))}
                </div>
                <blockquote>“{item.feedback}”</blockquote>
                <div className="quote-foot">
                  <span className="avatar" aria-hidden="true">
                    {item.name.charAt(0)}
                  </span>
                  <div>
                    <strong>{item.name}</strong>
                    <span>
                      {item.role} · {item.project}
                    </span>
                  </div>
                </div>
              </Spotlight>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
