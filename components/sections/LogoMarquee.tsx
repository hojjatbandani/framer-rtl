'use client';

import { Marquee } from '@/components/motion';
import type { Dictionary } from '@/lib/dictionaries';
import type { Locale } from '@/lib/i18n';

export function LogoMarquee({ t, locale }: { t: Dictionary['marquee']; locale: Locale }) {
  return (
    <section className="marquee-section">
      <p className="marquee-label">{t.label}</p>
      <Marquee speed={38} reverse={locale === 'ar'}>
        {t.items.map((item) => (
          <span key={item} className="marquee-item">
            {item}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
