import Link from 'next/link';
import { ArrowRight } from '@/components/icons';
import { Reveal } from '@/components/motion';

type Action = { label: string; href: string; external?: boolean };

export function CtaBand({
  title,
  desc,
  primary,
  secondary,
  meta
}: {
  title: string;
  desc: string;
  primary: Action;
  secondary: Action;
  meta?: string;
}) {
  return (
    <section className="section section-tight">
      <div className="container">
        <Reveal>
          <div className="cta-band">
            <div className="cta-band-glow" aria-hidden="true" />
            <h2 className="grad-text">{title}</h2>
            <p className="lede">{desc}</p>

            <div className="cta-actions">
              {primary.external ? (
                <a href={primary.href} target="_blank" rel="noreferrer" className="btn btn-accent btn-lg">
                  {primary.label}
                  <ArrowRight size={17} className="arrow" />
                </a>
              ) : (
                <Link href={primary.href} className="btn btn-accent btn-lg">
                  {primary.label}
                  <ArrowRight size={17} className="arrow" />
                </Link>
              )}

              {secondary.external ? (
                <a href={secondary.href} target="_blank" rel="noreferrer" className="btn btn-ghost btn-lg">
                  {secondary.label}
                </a>
              ) : (
                <Link href={secondary.href} className="btn btn-ghost btn-lg">
                  {secondary.label}
                </Link>
              )}
            </div>

            {meta && <p className="cta-meta muted">{meta}</p>}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
