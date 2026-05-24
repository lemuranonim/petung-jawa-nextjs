import type { Metadata } from 'next';
import './globals.css';
import {
  buildWebApplicationJsonLd,
  buildWebsiteJsonLd,
  HOME_DESCRIPTION,
  HOME_TITLE,
  jsonLd,
  OG_IMAGE_PATH,
  SITE_NAME,
  SITE_URL,
} from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: HOME_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  alternates: {
    canonical: '/',
  },
  category: 'lifestyle',
  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    locale: 'id_ID',
    images: [
      {
        url: OG_IMAGE_PATH,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
    siteName: SITE_NAME,
    type: 'website',
    url: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [OG_IMAGE_PATH],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(buildWebsiteJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(buildWebApplicationJsonLd()) }}
        />
        {children}
      </body>
    </html>
  );
}
