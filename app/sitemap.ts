import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';
import { locales, localeMeta } from '@/lib/i18n';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['', '/services'];

  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: path === '' ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [localeMeta[l].htmlLang, `${SITE_URL}/${l}${path}`])
        )
      }
    }))
  );
}
