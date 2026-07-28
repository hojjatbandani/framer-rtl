import { ArrowRight } from '@/components/icons';
import { Magnetic, Reveal } from '@/components/motion';
import { CAL_LINK } from '@/lib/constants';
import type { Dictionary } from '@/lib/dictionaries';

export function Contact({ t }: { t: Dictionary['contact'] }) {
  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal className="section-head" style={{ textAlign: 'center', marginInline: 'auto' }}>
          <span className="eyebrow">
            <span className="dot" />
            {t.badge}
          </span>
          <h2 className="h-section">{t.title}</h2>
          <p className="lede" style={{ marginInline: 'auto' }}>
            {t.desc}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="surface contact-card">
            <Magnetic strength={0.15}>
              <a href={CAL_LINK} target="_blank" rel="noreferrer" className="btn btn-accent btn-lg">
                {t.bookCta}
                <ArrowRight size={18} className="arrow" />
              </a>
            </Magnetic>

            <div className="contact-meta">
              <div className="info-row">
                <span>{t.emailLabel}</span>
                <strong>
                  <a href={`mailto:${t.email}`}>{t.email}</a>
                </strong>
              </div>
              <div className="info-row">
                <span>{t.responseLabel}</span>
                <strong>{t.response}</strong>
              </div>
              <div className="info-row">
                <span>{t.locationLabel}</span>
                <strong>{t.location}</strong>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
