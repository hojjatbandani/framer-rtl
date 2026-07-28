import { Spark } from '@/components/icons';
import { Reveal } from '@/components/motion';
import type { Dictionary } from '@/lib/dictionaries';

export function Footer({ t, nav }: { t: Dictionary['footer']; nav: Dictionary['nav'] }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <span className="brand" style={{ marginBottom: 14 }}>
              <span className="brand-mark">
                <Spark style={{ color: '#fff' }} />
              </span>
              Northstar
            </span>
            <p className="muted" style={{ maxWidth: '34ch', fontSize: '0.9rem' }}>
              {t.tagline}
            </p>
          </div>

          <div>
            <h4>{t.nav}</h4>
            <ul>
              {nav.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>{t.servicesTitle}</h4>
            <ul>
              {t.servicesList.map((service) => (
                <li key={service}>{service}</li>
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
        </div>

        <Reveal>
          <div className="footer-wordmark" aria-hidden="true">
            NORTHSTAR
          </div>
        </Reveal>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Northstar Studio. {t.rights}
          </span>
          <span>{t.built}</span>
        </div>
      </div>
    </footer>
  );
}
