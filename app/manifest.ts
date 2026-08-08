import type { MetadataRoute } from 'next';
import { BRAND } from '@/lib/constants';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: BRAND,
    short_name: BRAND,
    description: 'Production-ready, RTL-first Next.js templates and done-for-you builds.',
    start_url: '/',
    display: 'standalone',
    background_color: '#06070a',
    theme_color: '#06070a',
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' },
      { src: '/apple-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  };
}
