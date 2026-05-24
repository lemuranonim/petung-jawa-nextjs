import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/seo';
import { SEO_PAGES } from '@/lib/seo-pages';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: absoluteUrl('/'),
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...SEO_PAGES.map((page) => ({
      url: absoluteUrl(`/${page.slug}`),
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.82,
    })),
  ];
}
