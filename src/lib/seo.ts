import { SeoFaq } from './seo-pages';

export const SITE_NAME = 'Petung Jawa Tulungagung';
export const OG_IMAGE_PATH = '/opengraph-image';
export const HOME_TITLE = 'Petung Jawa Tulungagung | Hitung Weton, Lamaran, dan Nikah';
export const HOME_DESCRIPTION =
  'Kalkulator petung Jawa untuk hitung weton jodoh, hari baik lamaran, akad nikah, tarub, dan jam berangkat berdasarkan acuan Primbon Betaljemur.';

function normalizeSiteUrl(value: string | undefined): string {
  const fallback = 'http://localhost:3000';
  const raw = value?.trim() || fallback;

  try {
    const url = new URL(raw);
    return url.origin;
  } catch {
    return fallback;
  }
}

export const SITE_URL = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

export function absoluteUrl(path = '/'): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath}`;
}

export function jsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export function buildWebsiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: 'id-ID',
  };
}

export function buildWebApplicationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: SITE_NAME,
    applicationCategory: 'LifestyleApplication',
    operatingSystem: 'Web',
    url: SITE_URL,
    inLanguage: 'id-ID',
    description: HOME_DESCRIPTION,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'IDR',
    },
  };
}

export function buildBreadcrumbJsonLd(page?: { title: string; path: string }) {
  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Beranda',
      item: SITE_URL,
    },
  ];

  if (page) {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: page.title,
      item: absoluteUrl(page.path),
    });
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  };
}

export function buildFaqJsonLd(faqs: readonly SeoFaq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
