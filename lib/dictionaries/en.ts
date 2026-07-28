import type { IconName } from '@/components/icons';

export const en = {
  meta: {
    title: 'Northstar Studio — Premium UI/UX Design & Front-End Development',
    description:
      'Northstar Studio designs and builds premium websites, SaaS products, and high-converting digital experiences for ambitious brands.'
  },
  nav: {
    links: [
      { href: '#templates', label: 'Templates' },
      { href: '#services', label: 'Services' },
      { href: '#process', label: 'Process' },
      { href: '#faq', label: 'FAQ' }
    ],
    cta: 'Book a call',
    menu: 'Menu',
    close: 'Close',
    language: 'Language'
  },
  hero: {
    badge: '40+ premium templates, ready today',
    titleLead: 'Templates built for',
    titleRotating: ['SaaS', 'agencies', 'restaurants', 'dashboards'],
    titleTrail: '— ready to launch.',
    subtitle:
      'Browse a growing catalog of premium, ready-made templates and launch in minutes — SaaS, agencies, restaurants, portfolios, and dashboards, all production-ready.',
    ctaPrimary: 'Browse templates',
    ctaSecondary: 'Book a custom call',
    collab: {
      label: 'Need something one-of-a-kind?',
      cta: 'Work with me directly on a custom build →'
    },
    chipRating: '4.9 / 5 rating',
    chipDelivery: 'Instant delivery',
    stats: [
      { value: '40+', label: 'Premium templates' },
      { value: '6', label: 'Industries covered' },
      { value: '$59', label: 'Starting price' },
      { value: 'Instant', label: 'Delivery after purchase' }
    ],
    panel: {
      title: 'Template Marketplace',
      status: 'Live catalog',
      tabs: ['SaaS', 'Agency', 'Dashboard'],
      metricLabel: 'Templates sold',
      metricValue: '1,200+',
      cards: [
        { title: 'Northstar SaaS', tag: 'SaaS · $89' },
        { title: 'Vertex Capital', tag: 'Business · $99' }
      ]
    }
  },
  marquee: {
    label: 'Trusted by teams building the next thing',
    items: ['Fluxwave', 'Orbital', 'Northwind', 'Lumen', 'Vertex', 'Monarch', 'Halcyon', 'Aperture']
  },
  services: {
    badge: 'Services',
    title: 'Everything your product needs to look and perform world-class.',
    subtitle:
      'From bespoke websites to polished templates and ongoing technical care — every engagement is built to move your brand faster, with clarity and impact.',
    cta: 'Request service',
    items: [
      {
        title: 'Custom Website Development',
        desc: 'High-performance websites tailored to your growth goals and brand narrative.',
        icon: 'code' as IconName
      },
      {
        title: 'Landing Page Design',
        desc: 'Conversion-first campaigns, product launches, and premium lead capture.',
        icon: 'target' as IconName
      },
      {
        title: 'UI/UX Design',
        desc: 'Design systems and product flows crafted to feel elevated and intuitive.',
        icon: 'layers' as IconName
      },
      {
        title: 'Front-End Development',
        desc: 'Modern React and Next.js interfaces with exceptional performance and clarity.',
        icon: 'terminal' as IconName
      },
      {
        title: 'Dashboard & SaaS Development',
        desc: 'Scalable admin products, analytics surfaces, and product-led experiences.',
        icon: 'chart' as IconName
      },
      {
        title: 'Template Customization',
        desc: 'Tailored visual polish and strategic changes for a faster market launch.',
        icon: 'wand' as IconName
      },
      {
        title: 'Template Installation',
        desc: 'Quick implementation and deployment for a seamless start.',
        icon: 'grid' as IconName
      },
      {
        title: 'Website Optimization',
        desc: 'Performance tuning, SEO structure, accessibility, and higher conversion focus.',
        icon: 'gauge' as IconName
      },
      {
        title: 'Bug Fixing',
        desc: 'Reliable support for friction points and technical issues that slow momentum.',
        icon: 'bug' as IconName
      },
      {
        title: 'Website Maintenance',
        desc: 'Ongoing improvements, updates, and proactive care for reliable growth.',
        icon: 'shield' as IconName
      }
    ]
  },
  templates: {
    badge: 'Premium templates',
    title: 'Marketplace-ready templates for modern brands.',
    subtitle:
      'Launch faster with premium themes crafted for SaaS, business, restaurants, agencies, portfolios, and dashboards.',
    searchPlaceholder: 'Search templates by name or category',
    all: 'All',
    empty: 'No templates match your search yet.',
    priceNote: 'One-time purchase',
    preview: 'Live preview',
    purchase: 'Purchase',
    customization: {
      title: 'Need something tailored?',
      desc: 'Any template can be adapted to your business, messaging, and growth objectives with full design and development support.',
      cta: 'Request customization'
    },
    items: [
      {
        name: 'Northstar SaaS',
        category: 'SaaS',
        tech: 'Next.js · Tailwind',
        price: '$89',
        preview: 'Premium AI analytics product'
      },
      {
        name: 'Aurelia Studio',
        category: 'Agency',
        tech: 'React · Motion',
        price: '$79',
        preview: 'Bold modern studio website'
      },
      {
        name: 'Lumen Restaurant',
        category: 'Restaurant',
        tech: 'Next.js · GSAP',
        price: '$69',
        preview: 'Elegant food experience landing page'
      },
      {
        name: 'Vertex Capital',
        category: 'Business',
        tech: 'Next.js · CMS',
        price: '$99',
        preview: 'High-trust startup growth site'
      },
      {
        name: 'Monarch Portfolio',
        category: 'Portfolio',
        tech: 'Astro · CSS',
        price: '$59',
        preview: 'Creative personal showcase'
      },
      {
        name: 'Pulse Dashboard',
        category: 'Dashboard',
        tech: 'React · Charts',
        price: '$109',
        preview: 'Operational command center'
      }
    ]
  },
  about: {
    badge: 'About the studio',
    title: 'A small studio with a high-end standard of execution.',
    desc: 'Built on a foundation of UI/UX, front-end engineering, and performance-driven design, every project is shaped to feel premium, intuitive, and commercially effective. No handoff gaps, no template thinking — just senior craft from strategy to launch.',
    points: [
      { title: '8+ years', desc: 'Crafting digital experiences for founders and product teams.' },
      { title: 'Design systems', desc: 'Scalable UI foundations for SaaS, startups, and marketing.' },
      { title: 'React & Next.js', desc: 'Deep front-end expertise with modern, accessible interfaces.' },
      { title: 'Performance first', desc: 'SEO, Core Web Vitals, and accessibility baked in from day one.' }
    ]
  },
  process: {
    badge: 'Process',
    title: 'A refined workflow, from strategy to launch.',
    subtitle: 'Clear stages, visible progress, and no surprises along the way.',
    steps: [
      { title: 'Discovery', desc: 'We align on goals, audience, scope, and the story your product needs to tell.' },
      { title: 'Design', desc: 'Direction, systems, and high-fidelity screens that make the vision tangible.' },
      { title: 'Development', desc: 'Pixel-accurate, accessible front-end built on modern React foundations.' },
      { title: 'Testing', desc: 'Cross-device QA, performance budgets, SEO checks, and accessibility passes.' },
      { title: 'Launch', desc: 'Deployment, analytics, handover, and continuous care after go-live.' }
    ]
  },
  testimonials: {
    badge: 'Testimonials',
    title: 'Trusted by founders and modern teams.',
    items: [
      {
        name: 'Mia Chen',
        role: 'Founder, Fluxwave',
        project: 'SaaS launch',
        feedback: 'The experience felt precise, strategic, and remarkably fast from kickoff to launch.'
      },
      {
        name: 'Julian Ross',
        role: 'Creative Director, Orbital',
        project: 'Agency brand site',
        feedback: 'They translated our vision into a premium site that immediately elevated our signal.'
      },
      {
        name: 'Nadia Alvarez',
        role: 'Head of Growth, Lumen',
        project: 'E-commerce rebuild',
        feedback: 'Every interaction felt thoughtfully designed, and the performance jump was immediate.'
      },
      {
        name: 'Tomas Berg',
        role: 'CTO, Vertex',
        project: 'Dashboard product',
        feedback: 'Clean engineering, clear communication, and a UI our customers actually enjoy using.'
      }
    ]
  },
  faq: {
    badge: 'FAQ',
    title: 'Answers before you ask.',
    items: [
      {
        q: 'How long does a typical project take?',
        a: 'A focused landing page takes 1–2 weeks. A full marketing site runs 3–5 weeks, and product or dashboard work usually lands between 6 and 10 weeks depending on scope.'
      },
      {
        q: 'Do you work with existing designs or brand guidelines?',
        a: 'Yes. We can build from your Figma files and brand system, extend an existing design language, or create a new direction from scratch.'
      },
      {
        q: 'What technologies do you build with?',
        a: 'Primarily React, Next.js, and TypeScript, with modern CSS and Motion for interaction. We also handle CMS integrations, analytics, and deployment.'
      },
      {
        q: 'Do you offer support after launch?',
        a: 'Every project includes a post-launch care window, and ongoing monthly maintenance plans are available for updates, improvements, and monitoring.'
      },
      {
        q: 'Can you make the site multilingual?',
        a: 'Absolutely — including full right-to-left support for Arabic, localized typography, and SEO-ready localized routes, exactly like this site.'
      }
    ]
  },
  cta: {
    title: 'Ready to launch your next site?',
    desc: 'Grab a premium template and go live today, or book a call to talk through a fully custom build.',
    primary: 'Browse templates',
    secondary: 'Book a call'
  },
  contact: {
    badge: 'Contact',
    title: 'Let’s create something exceptional.',
    desc: 'Have a project in mind? Book a free 30-minute call and we’ll map out the right template — or a fully custom build.',
    bookCta: 'Book a 30-min call',
    emailLabel: 'Email',
    email: 'hello@northstarstudio.com',
    responseLabel: 'Response time',
    response: 'Within 24 hours',
    locationLabel: 'Working with teams',
    location: 'Worldwide, remote-first'
  },
  footer: {
    tagline: 'Premium UI/UX design and front-end development for modern businesses.',
    nav: 'Navigation',
    servicesTitle: 'Services',
    servicesList: ['Website development', 'Template customization', 'Maintenance', 'Optimization'],
    social: 'Social',
    socialList: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com' },
      { label: 'Behance', href: 'https://www.behance.net' },
      { label: 'GitHub', href: 'https://github.com' },
      { label: 'Dribbble', href: 'https://dribbble.com' }
    ],
    rights: 'All rights reserved.',
    built: 'Designed & built in-house.'
  }
};

export type Dictionary = typeof en;
