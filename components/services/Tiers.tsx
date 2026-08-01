import { ArrowRight, Check, Icon } from '@/components/icons';
import { Reveal } from '@/components/motion';
import { CAL_LINK } from '@/lib/constants';
import type { Dictionary } from '@/lib/dictionaries';

export function Tiers({ t }: { t: Dictionary['services']['tiers'] }) {
  return (
    <section id="tiers" className="section section-tight">
      <div className="container">
        <div className="tiers">
          {t.items.map((tier, i) => (
            <Reveal key={tier.id} delay={i * 0.08}>
              <article id={tier.id} className="tier" data-popular={tier.popular}>
                {tier.popular && <span className="tier-flag">{t.popular}</span>}

                <span className="icon-tile">
                  <Icon name={tier.icon} />
                </span>

                <h3 className="tier-name">{tier.name}</h3>
                <p className="tier-line">{tier.tagline}</p>

                <div className="tier-price">
                  <span className="muted">{t.from}</span>
                  <strong dir="ltr">{tier.price}</strong>
                </div>
                <div className="tier-timeline">
                  <span className="muted">{t.delivery}</span>
                  <strong>{tier.timeline}</strong>
                </div>

                <ul className="check-list tier-features">
                  {tier.features.map((feature) => (
                    <li key={feature}>
                      <Check size={15} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={CAL_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className={`btn ${tier.popular ? 'btn-accent' : 'btn-primary'} tier-cta`}
                >
                  {tier.cta}
                  <ArrowRight size={16} className="arrow" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
