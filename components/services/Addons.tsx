import { Plus } from '@/components/icons';
import { Reveal, Stagger, StaggerItem } from '@/components/motion';
import type { Dictionary } from '@/lib/dictionaries';

export function Addons({ t }: { t: Dictionary['services']['addons'] }) {
  return (
    <section className="section section-tight">
      <div className="container">
        <div className="addons">
          <Reveal className="addons-head">
            <span className="eyebrow">
              <span className="dot" />
              {t.badge}
            </span>
            <h2 className="h-section">{t.title}</h2>
            <p className="lede">{t.desc}</p>
          </Reveal>

          <Stagger className="addon-list" amount={0.08}>
            {t.items.map((item) => (
              <StaggerItem key={item}>
                <span className="addon">
                  <Plus />
                  {item}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
