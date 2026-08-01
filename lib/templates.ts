/**
 * The catalog itself. Everything here is locale-independent — prices, stack,
 * preview colours, ordering. Names and one-liners live in the dictionaries and
 * are joined by `id`, so a new template only needs translating twice, not five
 * fields twice.
 */

export type TemplateKind =
  | 'saas'
  | 'agency'
  | 'restaurant'
  | 'business'
  | 'portfolio'
  | 'dashboard'
  | 'store'
  | 'blog';

export type TemplateBadge = 'bestseller' | 'new';

export type TemplateMeta = {
  id: string;
  kind: TemplateKind;
  /** USD, one-time. Rendered as `$${price}` with an explicit LTR direction. */
  price: number;
  stack: string;
  pages: number;
  /** [from, to] — drives the preview mock and the card's ambient wash. */
  accent: [string, string];
  badge?: TemplateBadge;
};

export const templates: TemplateMeta[] = [
  {
    id: 'northstar-saas',
    kind: 'saas',
    price: 89,
    stack: 'Next.js · Tailwind',
    pages: 9,
    accent: ['#4d7cff', '#8b5cf6'],
    badge: 'bestseller'
  },
  {
    id: 'pulse-dashboard',
    kind: 'dashboard',
    price: 109,
    stack: 'React · Recharts',
    pages: 14,
    accent: ['#22d3ee', '#4d7cff']
  },
  {
    id: 'aurelia-studio',
    kind: 'agency',
    price: 79,
    stack: 'Next.js · Motion',
    pages: 8,
    accent: ['#f472b6', '#8b5cf6'],
    badge: 'new'
  },
  {
    id: 'lumen-table',
    kind: 'restaurant',
    price: 69,
    stack: 'Next.js · GSAP',
    pages: 6,
    accent: ['#f59e0b', '#ef4444']
  },
  {
    id: 'vertex-capital',
    kind: 'business',
    price: 99,
    stack: 'Next.js · CMS',
    pages: 11,
    accent: ['#38bdf8', '#2563eb']
  },
  {
    id: 'halcyon-store',
    kind: 'store',
    price: 119,
    stack: 'Next.js · Stripe',
    pages: 12,
    accent: ['#34d399', '#0ea5e9'],
    badge: 'new'
  },
  {
    id: 'monarch-folio',
    kind: 'portfolio',
    price: 59,
    stack: 'Astro · CSS',
    pages: 5,
    accent: ['#a78bfa', '#6366f1']
  },
  {
    id: 'orbit-launch',
    kind: 'saas',
    price: 79,
    stack: 'Next.js · Tailwind',
    pages: 7,
    accent: ['#818cf8', '#38bdf8']
  },
  {
    id: 'summit-agency',
    kind: 'agency',
    price: 89,
    stack: 'Next.js · Motion',
    pages: 9,
    accent: ['#2dd4bf', '#3b82f6']
  },
  {
    id: 'nova-analytics',
    kind: 'dashboard',
    price: 129,
    stack: 'React · D3',
    pages: 16,
    accent: ['#c084fc', '#22d3ee'],
    badge: 'bestseller'
  },
  {
    id: 'harbor-clinic',
    kind: 'business',
    price: 79,
    stack: 'Next.js · CMS',
    pages: 10,
    accent: ['#60a5fa', '#34d399']
  },
  {
    id: 'atelier-journal',
    kind: 'blog',
    price: 49,
    stack: 'Astro · MDX',
    pages: 6,
    accent: ['#fbbf24', '#f472b6']
  }
];

/** Filter order in the catalog — stable regardless of the template order. */
export const templateKinds: TemplateKind[] = [
  'saas',
  'agency',
  'dashboard',
  'business',
  'store',
  'restaurant',
  'portfolio',
  'blog'
];

/** The eight that ride the hero showcase, split into two counter-scrolling columns. */
export const showcaseColumns: [string[], string[]] = [
  ['northstar-saas', 'lumen-table', 'summit-agency', 'monarch-folio'],
  ['pulse-dashboard', 'aurelia-studio', 'halcyon-store', 'vertex-capital']
];

export const startingPrice = Math.min(...templates.map((template) => template.price));

export function templateById(id: string): TemplateMeta | undefined {
  return templates.find((template) => template.id === id);
}
