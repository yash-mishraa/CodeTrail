import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'CodeTrail — Master DSA with Precision',
    short_name: 'CodeTrail',
    description: 'Master Data Structures & Algorithms through a structured roadmap of 580+ curated problems across 97 learning patterns.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0f0c',
    theme_color: '#0a0f0c',
    icons: [
      {
        src: '/icon.svg',
        sizes: '192x192',
        type: 'image/svg+xml',
      },
      {
        src: '/icon.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
  };
}
