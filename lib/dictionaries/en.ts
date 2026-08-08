import type { IconName } from '@/components/icons';
import type { TemplateKind } from '@/lib/templates';

export const en = {
  meta: {
    title: 'framer-rtl — Production-ready RTL-first Next.js templates',
    description:
      'A curated catalog of premium, production-ready Next.js templates for SaaS, agencies, dashboards, stores and more. Buy once, launch today — or have it installed, customized, or built from scratch for you.'
  },
  servicesMeta: {
    title: 'Services — Installation, customization & custom builds | framer-rtl',
    description:
      'Three ways to get your site live: template installation and setup, deep customization, or a completely custom build from scratch. Fixed quotes, clear timelines, free scoping call.'
  },

  nav: {
    links: [
      { id: 'templates', label: 'Templates' },
      { id: 'included', label: "What's included" },
      { id: 'how', label: 'How it works' },
      { id: 'faq', label: 'FAQ' }
    ],
    services: 'Services',
    cta: 'Get it built for you',
    ctaShort: 'Services',
    ctaCall: 'Book a call',
    menu: 'Menu',
    close: 'Close',
    language: 'Language',
    home: 'Home'
  },

  hero: {
    badge: '12 templates live · new drop every month',
    titleLead: 'Launch-ready templates for',
    titleRotating: ['SaaS', 'agencies', 'dashboards', 'restaurants', 'stores'],
    titleTrail: 'Buy once, ship today.',
    subtitle:
      'Production-grade Next.js templates with clean, typed source code, real content and full RTL support. Preview any of them live, download in one click, and be online this afternoon.',
    ctaPrimary: 'Browse the catalog',
    ctaSecondary: 'Have it built for you',
    filterHint: 'Jump straight to',
    trust: [
      { value: '4.9/5', label: 'from 240 reviews' },
      { value: '1,200+', label: 'sites launched' },
      { value: 'Instant', label: 'download after purchase' }
    ]
  },

  marquee: {
    label: 'Powering launches at',
    items: ['Fluxwave', 'Orbital', 'Northwind', 'Lumen', 'Vertex', 'Monarch', 'Halcyon', 'Aperture']
  },

  templates: {
    badge: 'The catalog',
    title: 'Twelve templates. One standard of quality.',
    subtitle:
      'Every one is a complete, deployable site — not a landing page mockup. Filter by what you are building and open the live preview before you decide.',
    searchPlaceholder: 'Search by name, category or stack',
    all: 'All templates',
    showing: '{n} of {total} templates',
    empty: 'Nothing matches that search yet.',
    emptyAction: 'Clear filters',
    priceNote: 'one-time',
    pages: '{n} pages',
    preview: 'Live preview',
    purchase: 'Get template',
    categories: {
      saas: 'SaaS',
      agency: 'Agency',
      restaurant: 'Restaurant',
      business: 'Business',
      portfolio: 'Portfolio',
      dashboard: 'Dashboard',
      store: 'Store',
      blog: 'Blog'
    } as Record<TemplateKind, string>,
    badges: {
      bestseller: 'Bestseller',
      new: 'New'
    },
    items: {
      'nova-saas': {
        name: 'Nova SaaS',
        tagline: 'Pricing, changelog and docs for an AI analytics product.'
      },
      'pulse-dashboard': {
        name: 'Pulse Dashboard',
        tagline: 'An operational command center with 14 wired-up screens.'
      },
      'aurelia-studio': {
        name: 'Aurelia Studio',
        tagline: 'A bold, motion-led site for a design or brand studio.'
      },
      'lumen-table': {
        name: 'Lumen Table',
        tagline: 'Menu, reservations and story for a restaurant that cares.'
      },
      'vertex-capital': {
        name: 'Vertex Capital',
        tagline: 'A high-trust site for finance, consulting and B2B.'
      },
      'halcyon-store': {
        name: 'Halcyon Store',
        tagline: 'A Stripe-ready storefront with cart, checkout and accounts.'
      },
      'monarch-folio': {
        name: 'Monarch Folio',
        tagline: 'A quiet, typographic portfolio that puts the work first.'
      },
      'orbit-launch': {
        name: 'Orbit Launch',
        tagline: 'A one-page launch site with waitlist and email capture.'
      },
      'summit-agency': {
        name: 'Summit Agency',
        tagline: 'Case studies, services and team for a growing agency.'
      },
      'nova-analytics': {
        name: 'Nova Analytics',
        tagline: 'Charts, tables and filters for a data-heavy product.'
      },
      'harbor-clinic': {
        name: 'Harbor Clinic',
        tagline: 'Booking, services and trust signals for clinics and practices.'
      },
      'atelier-journal': {
        name: 'Atelier Journal',
        tagline: 'An editorial blog with MDX, tags and reading time.'
      }
    },
    modal: {
      close: 'Close preview',
      overview: 'What you get',
      includes: [
        'The full Next.js source, typed and commented',
        'Every page in the preview, responsive down to 360px',
        'Design tokens, icon set and all demo content',
        'Working RTL locale, SEO metadata and a setup guide'
      ],
      stack: 'Stack',
      pagesLabel: 'Pages',
      category: 'Category',
      licence: 'One-time licence · free lifetime updates',
      buy: 'Get this template',
      install: 'Have it installed for me'
    },
    callout: {
      title: 'Close, but not quite it?',
      desc: 'Any template can be reshaped around your brand and your sections — or I can start from a blank canvas instead.',
      cta: 'See how that works'
    }
  },

  included: {
    badge: "What's inside",
    title: 'Every template ships production-ready.',
    subtitle: 'The same standards I hold client work to, packaged so you can run with it yourself.',
    items: [
      {
        title: 'Clean, typed source',
        desc: 'Next.js App Router, TypeScript and modern CSS. Readable components, no page-builder soup.',
        icon: 'code' as IconName
      },
      {
        title: 'Fast by default',
        desc: 'Lighthouse 95+ out of the box, with real performance budgets rather than a marketing screenshot.',
        icon: 'gauge' as IconName
      },
      {
        title: 'RTL and multilingual',
        desc: 'Built on CSS logical properties, so Arabic, Hebrew and Persian layouts mirror perfectly.',
        icon: 'globe' as IconName
      },
      {
        title: 'Free lifetime updates',
        desc: 'Fixes and new sections land in your download forever. One payment, no subscription.',
        icon: 'refresh' as IconName
      }
    ]
  },

  servicesTeaser: {
    badge: 'Done for you',
    title: 'Would rather not touch the code?',
    desc: 'Three ways to hand it over — from a template installed on your domain this week, to a site designed around your product from scratch.',
    cta: 'Explore services',
    from: 'from',
    cards: [
      {
        id: 'setup',
        name: 'Install & setup',
        line: 'Your template, live on your domain, content in place.',
        price: '$149',
        icon: 'rocket' as IconName
      },
      {
        id: 'custom',
        name: 'Customization',
        line: 'New sections, your brand, a CMS your team can use.',
        price: '$590',
        icon: 'wand' as IconName
      },
      {
        id: 'scratch',
        name: 'Built from scratch',
        line: 'No template. Designed and built around your product.',
        price: '$2,900',
        icon: 'compass' as IconName
      }
    ]
  },

  steps: {
    badge: 'How it works',
    title: 'Catalog to live site, in three steps.',
    subtitle: 'No sales call, no licence keys, no subscription to cancel later.',
    items: [
      {
        title: 'Preview it properly',
        desc: 'Open the live demo, click through every page, resize it, try it on your phone. What you see is exactly what you download.'
      },
      {
        title: 'Buy once',
        desc: 'One payment, instant access to the full Git repository — source, design tokens, assets and a setup guide.'
      },
      {
        title: 'Launch this week',
        desc: 'Follow the guide and deploy in an afternoon, or hand the keys to me and have it done for you.'
      }
    ]
  },

  testimonials: {
    badge: 'From buyers',
    title: 'What people did with them.',
    items: [
      {
        name: 'Mia Chen',
        role: 'Founder, Fluxwave',
        project: 'Nova SaaS',
        feedback:
          'I had the pricing page rewritten and deployed the same evening. The code was so tidy I stopped looking for the catch.'
      },
      {
        name: 'Julian Ross',
        role: 'Creative Director, Orbital',
        project: 'Aurelia Studio',
        feedback:
          'We bought it as a starting point and kept 90% of it. It already looked better than the concepts we were paying for.'
      },
      {
        name: 'Nadia Alvarez',
        role: 'Head of Growth, Lumen',
        project: 'Customization',
        feedback:
          'Took the restaurant template, added an Arabic locale and a booking flow. Two weeks, fixed price, no drama.'
      },
      {
        name: 'Tomas Berg',
        role: 'CTO, Vertex',
        project: 'Built from scratch',
        feedback:
          'Clean engineering and honest communication. Our dashboard finally looks like the product we tell investors about.'
      }
    ]
  },

  faq: {
    badge: 'FAQ',
    title: 'The things people ask before buying.',
    items: [
      {
        q: 'What exactly do I get when I buy?',
        a: 'The complete source as a Git repository — every page from the demo, the design tokens, the assets, and a setup guide that assumes nothing. No hidden dependencies and no phone-home licence check.'
      },
      {
        q: 'Do I need to know how to code?',
        a: 'To swap text, images and colours, no — the guide walks you through it. To restructure pages, some React helps. If you would rather skip that entirely, installation and customization are services I offer.'
      },
      {
        q: 'Can I use one template for several projects?',
        a: 'A standard licence covers one live site. Multi-site and agency licences are available at checkout if you plan to reuse it for clients.'
      },
      {
        q: 'Do the templates support Arabic and RTL?',
        a: 'Yes, and properly — every layout uses CSS logical properties and ships with a working right-to-left locale, localized typography and translated routes. This very site is the proof.'
      },
      {
        q: 'What if I get stuck?',
        a: 'Email support is included with every purchase and I answer within a day. If it turns into more than a couple of questions, the setup service takes the whole thing off your hands.'
      },
      {
        q: 'Are refunds available?',
        a: 'Not after download, since the full source is delivered instantly — which is exactly why every template has a complete live preview. Click through it thoroughly before you buy.'
      }
    ]
  },

  cta: {
    title: 'Your next site is already built.',
    desc: 'Take a template and launch it yourself this week, or hand it over and have it done for you.',
    primary: 'Browse the catalog',
    secondary: 'See services'
  },

  footer: {
    tagline: 'Production-ready templates and done-for-you builds for people who care how it looks — and how it is made.',
    nav: 'Explore',
    servicesTitle: 'Services',
    servicesList: [
      { id: 'setup', label: 'Install & setup' },
      { id: 'custom', label: 'Customization' },
      { id: 'scratch', label: 'Built from scratch' }
    ],
    contactTitle: 'Contact',
    email: 'hello@framer-rtl.store',
    responseLabel: 'Replies within 24h',
    bookCta: 'Book a 30-min call',
    social: 'Elsewhere',
    socialList: [
      { label: 'X / Twitter', href: 'https://x.com' },
      { label: 'GitHub', href: 'https://github.com' },
      { label: 'Dribbble', href: 'https://dribbble.com' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com' }
    ],
    rights: 'All rights reserved.',
    built: 'Designed and built in-house.'
  },

  services: {
    hero: {
      badge: 'Services',
      title: 'Pick a template. Or have the whole thing built.',
      subtitle:
        'Three ways to work together — from a template installed on your domain by Friday, to a site designed around your product from a blank canvas. Fixed quotes, clear dates, no retainers.',
      primary: 'Book a free 30-min call',
      secondary: 'Browse templates',
      note: 'Free scoping call · Written quote in 24h · No obligation'
    },

    tiers: {
      popular: 'Most popular',
      from: 'from',
      delivery: 'Typical delivery',
      items: [
        {
          id: 'setup',
          name: 'Install & setup',
          tagline: 'You bought a template. I get it live, properly.',
          price: '$149',
          timeline: '2–3 days',
          icon: 'rocket' as IconName,
          cta: 'Book installation',
          popular: false,
          features: [
            'Template deployed to your domain and hosting',
            'Your logo, colours, fonts and copy in place',
            'Forms, analytics and email delivery wired up',
            'Technical SEO basics: metadata, sitemap, OG images',
            'A short walkthrough video so you can edit it yourself',
            '7 days of support after go-live'
          ]
        },
        {
          id: 'custom',
          name: 'Customization',
          tagline: 'Start from a template, end up somewhere unmistakably yours.',
          price: '$590',
          timeline: '1–2 weeks',
          icon: 'wand' as IconName,
          cta: 'Book customization',
          popular: true,
          features: [
            'Everything in Install & setup',
            'New sections, layouts and page types built to your brief',
            'Full brand pass: colour system, type scale, iconography',
            'A CMS your team can edit without breaking anything',
            'Multilingual and full RTL support if you need it',
            '30 days of post-launch tweaks included'
          ]
        },
        {
          id: 'scratch',
          name: 'Built from scratch',
          tagline: 'No template. A site designed around your product from a blank canvas.',
          price: '$2,900',
          timeline: '4–8 weeks',
          icon: 'compass' as IconName,
          cta: 'Start a project',
          popular: false,
          features: [
            'Discovery session: goals, audience, positioning, scope',
            'Custom design system and high-fidelity screens in Figma',
            'Hand-built Next.js front-end, accessible and genuinely fast',
            'Integrations: CMS, payments, auth, analytics, whatever it needs',
            'Performance budget with Lighthouse 95+ at launch',
            '60 days of support plus a full handover'
          ]
        }
      ]
    },

    compare: {
      badge: 'Side by side',
      title: 'Which one is actually right for you?',
      subtitle: 'If you are between two of them, book the call — I will tell you the cheaper answer if it is the correct one.',
      feature: 'What you get',
      rows: [
        { label: 'Typical turnaround', values: ['2–3 days', '1–2 weeks', '4–8 weeks'] },
        { label: 'Starting price', values: ['$149', '$590', '$2,900'] },
        { label: 'Brand pass', values: ['Basic', 'Full', 'Custom system'] },
        { label: 'New sections and page types', values: ['no', 'yes', 'yes'] },
        { label: 'Original design in Figma', values: ['no', 'no', 'yes'] },
        { label: 'CMS your team can edit', values: ['no', 'yes', 'yes'] },
        { label: 'Multilingual and RTL', values: ['no', 'yes', 'yes'] },
        { label: 'Performance and SEO pass', values: ['Basics', 'yes', 'yes'] },
        { label: 'Support after launch', values: ['7 days', '30 days', '60 days'] }
      ]
    },

    process: {
      badge: 'How we work',
      title: 'Four steps, no black box.',
      subtitle: 'You see the site on a staging URL from day one — there is never a big reveal at the end.',
      steps: [
        {
          title: 'Book a call',
          desc: 'A free 30 minutes. Show me what you have and where you want to be. If a template on its own solves it, I will say so.'
        },
        {
          title: 'Get a fixed quote',
          desc: 'Within 24 hours you have a written scope, a fixed price and a delivery date. Nothing starts until you approve it.'
        },
        {
          title: 'Build in the open',
          desc: 'A staging link from the first day, updates as sections land, and one round of consolidated feedback per milestone.'
        },
        {
          title: 'Launch and hand over',
          desc: 'We deploy, run the final performance, SEO and accessibility checks, and you get the repository, the accounts and a walkthrough.'
        }
      ]
    },

    addons: {
      badge: 'Add-ons',
      title: 'Bolt on whatever else you need.',
      desc: 'Priced per project and quoted with the rest, so there are no surprises halfway through.',
      items: [
        'Copywriting',
        'Logo and brand kit',
        'Blog and CMS setup',
        'E-commerce and Stripe',
        'Multilingual and RTL',
        'Analytics and tracking',
        'Email and CRM integration',
        'Performance audit',
        'Accessibility audit',
        'Monthly maintenance'
      ]
    },

    faq: {
      badge: 'FAQ',
      title: 'Before you book.',
      items: [
        {
          q: 'Which option is right for me?',
          a: 'If a template already works as-is, take Install & setup. If it is 80% right but needs your sections and your brand, take Customization. If nothing in the catalog fits what you are building, we start from scratch.'
        },
        {
          q: 'Is the template licence included in the price?',
          a: 'No — the template is a separate one-time purchase from the catalog and service pricing sits on top of it. If you already bought one elsewhere, that works too.'
        },
        {
          q: 'How do payments work?',
          a: '50% to reserve the slot, 50% on launch. Install & setup is paid up front since it is measured in days. Invoices in USD or EUR, card or bank transfer.'
        },
        {
          q: 'Can you work with my existing site or codebase?',
          a: 'Yes. I can take over an existing Next.js or React project, rebuild a legacy site, or migrate you off Wordpress, Webflow or Framer without losing your rankings.'
        },
        {
          q: 'What happens after launch?',
          a: 'Every tier includes a support window. After that you can book hours as you need them, or move onto a monthly maintenance plan for updates and monitoring.'
        },
        {
          q: 'Do you sign NDAs or work white-label for agencies?',
          a: 'Both, regularly. Agency work under your own brand is welcome — you keep the client relationship and I stay invisible.'
        }
      ]
    },

    cta: {
      title: 'Not sure which one you need?',
      desc: 'Book a free 30-minute call. We will look at your project together and I will tell you honestly what it needs — even if the answer is to buy a template and do it yourself.',
      primary: 'Book a free call',
      secondary: 'Browse templates',
      meta: 'Usually booked within 48 hours · Remote, worldwide'
    }
  }
};

export type Dictionary = typeof en;
