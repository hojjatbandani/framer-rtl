import Link from 'next/link';
import { ArrowUpRight, LogoGlyph } from '@/components/icons';
import { Reveal } from '@/components/motion';
import { BRAND, CAL_LINK, homeHref, servicesHref } from '@/lib/constants';
import type { Dictionary } from '@/lib/dictionaries';
import type { Locale } from '@/lib/i18n';

export function Footer({
  locale,
  t,
  nav
}: {
  locale: Locale;
  t: Dictionary['footer'];
  nav: Dictionary['nav'];
}) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="brand">
              <span className="brand-mark">
                <LogoGlyph style={{ color: '#fff' }} />
              </span>
              {BRAND}
            </span>
            <p className="muted">{t.tagline}</p>
          </div>

          <div>
            <h4>{t.nav}</h4>
            <ul>
              {nav.links.map((link) => (
                <li key={link.id}>
                  <Link href={homeHref(locale, link.id)}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>{t.servicesTitle}</h4>
            <ul>
              {t.servicesList.map((service) => (
                <li key={service.id}>
                  <Link href={servicesHref(locale, service.id)}>{service.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>{t.social}</h4>
            <ul>
              {t.socialList.map((social) => (
                <li key={social.label}>
                  <a href={social.href} target="_blank" rel="noreferrer">
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact">
            <h4>{t.contactTitle}</h4>
            <a className="footer-email" href={`mailto:${t.email}`} dir="ltr">
              {t.email}
            </a>
            <p className="muted">{t.responseLabel}</p>
            <a href={CAL_LINK} target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm">
              {t.bookCta}
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        <Reveal>
          <div className="footer-wordmark" aria-hidden="true">
            {BRAND.toUpperCase()}
          </div>
        </Reveal>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {BRAND}. {t.rights}
          </span>
          <span>{t.built}</span>
        </div>
      </div>
    </footer>
  );
}
