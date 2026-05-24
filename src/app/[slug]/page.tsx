import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  absoluteUrl,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  jsonLd,
  OG_IMAGE_PATH,
  SITE_NAME,
} from '@/lib/seo';
import { getSeoPage, SEO_PAGE_LINKS, SEO_PAGES } from '@/lib/seo-pages';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteLogo } from '@/components/SiteLogo';

type SeoRouteProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return SEO_PAGES.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: SeoRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPage(slug);

  if (!page) {
    return {
      title: 'Halaman tidak ditemukan',
    };
  }

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: `/${page.slug}`,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      images: [
        {
          url: OG_IMAGE_PATH,
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
      locale: 'id_ID',
      siteName: SITE_NAME,
      type: 'article',
      url: `/${page.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: [OG_IMAGE_PATH],
    },
  };
}

export default async function SeoLandingPage({ params }: SeoRouteProps) {
  const { slug } = await params;
  const page = getSeoPage(slug);

  if (!page) notFound();

  const relatedPages = SEO_PAGE_LINKS.filter((item) => item.href !== `/${page.slug}`).slice(0, 4);
  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.title,
    description: page.description,
    url: absoluteUrl(`/${page.slug}`),
    inLanguage: 'id-ID',
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: absoluteUrl('/'),
    },
    about: page.keywords,
  };

  return (
    <main className="seoPage">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(webPageJsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(buildBreadcrumbJsonLd({ title: page.h1, path: `/${page.slug}` })) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(buildFaqJsonLd(page.faqs)) }} />

      <div className="seoShell">
        <nav className="seoBreadcrumb" aria-label="Breadcrumb">
          <Link href="/">Beranda</Link>
          <span>/</span>
          <span>{page.h1}</span>
        </nav>

        <header className="seoHero">
          <div className="heroBrandLine">
            <SiteLogo className="heroLogo" compact />
            <p className="eyebrow">{page.eyebrow}</p>
          </div>
          <h1>{page.h1}</h1>
          <p>{page.intro}</p>
          <div className="seoKeywordRow" aria-label="Topik halaman">
            {page.keywords.map((keyword) => (
              <span key={keyword}>{keyword}</span>
            ))}
          </div>
        </header>

        <div className="seoContentGrid">
          <article className="seoArticle">
            {page.sections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
                {section.bullets ? (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <section className="seoFaq">
              <h2>Pertanyaan umum</h2>
              {page.faqs.map((faq) => (
                <details key={faq.question} open>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </section>
          </article>

          <aside className="seoAside">
            <section>
              <p className="eyebrow">Mulai hitung</p>
              <h2>Kalkulator Petung Jawa</h2>
              <p>
                Pakai halaman utama untuk memasukkan weton, tanggal acara, jam ijab, dan melihat rekomendasi
                tanggal sesuai jenis acara.
              </p>
              <Link className="seoPrimaryLink" href="/">
                Buka kalkulator
              </Link>
            </section>

            <section>
              <p className="eyebrow">Topik terkait</p>
              <div className="seoRelatedList">
                {relatedPages.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <strong>{item.title}</strong>
                    <span>{item.description}</span>
                  </Link>
                ))}
              </div>
            </section>
          </aside>
        </div>

        <SiteFooter />
      </div>
    </main>
  );
}
