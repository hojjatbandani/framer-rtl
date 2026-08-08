export const CAL_LINK = 'https://cal.com/hojjat-bandani-nnritj/30min';

export const BRAND = 'framer-rtl';

/** Canonical origin used by metadata, sitemap, robots and JSON-LD. */
export const SITE_URL = 'https://framer-rtl.store';

/**
 * Hash targets live on the home page, so links must be absolute (`/en#faq`)
 * rather than bare (`#faq`) — the nav and footer are shared with /services.
 */
export function homeHref(locale: string, hash?: string) {
  return hash ? `/${locale}#${hash}` : `/${locale}`;
}

export function servicesHref(locale: string, hash?: string) {
  return hash ? `/${locale}/services#${hash}` : `/${locale}/services`;
}

/**
 * The hero's category chips drive the catalog filter further down the page.
 * A window event keeps the two sections decoupled — no context provider for a
 * single string of state.
 */
export const TEMPLATE_FILTER_EVENT = 'framer-rtl:filter-templates';
