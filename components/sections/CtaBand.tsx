import { ArrowRight } from '@/components/icons';
import { Reveal } from '@/components/motion';
import { CAL_LINK } from '@/lib/constants';
import type { Dictionary } from '@/lib/dictionaries';

export function CtaBand({ t }: { t: Dictionary['cta'] }) {
  return (
    <section className="section" style={{ paddingBlockEnd: 0 }}>
      <div className="container">
        <Reveal>
          <div className="cta-band">
            <h2 className="grad-text">{t.title}</h2>
            <p className="lede">{t.desc}</p>
            <div className="cta-actions">
              <a href="#templates" className="btn btn-primary">
                {t.primary}
                <ArrowRight size={17} className="arrow" />
              </a>
              <a href={CAL_LINK} target="_blank" rel="noreferrer" className="btn btn-ghost">
                {t.secondary}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
