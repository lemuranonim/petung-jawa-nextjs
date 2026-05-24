'use client';

import { SEO_PAGE_LINKS } from '@/lib/seo-pages';
import { SITE_NAME } from '@/lib/seo';
import { SiteLogo } from './SiteLogo';

export function SiteFooter() {
  const pasanganLinks = SEO_PAGE_LINKS.slice(0, 3);
  const acaraLinks = SEO_PAGE_LINKS.slice(3);

  return (
    <footer className="siteFooter">
      <div className="footerBrand">
        <SiteLogo className="footerLogo" />
        <strong className="footerSiteName">{SITE_NAME}</strong>
        <p>
          Kalkulator weton, hari baik lamaran, akad nikah, tarub, dan lelungan berbasis acuan Primbon
          Betaljemur serta pakem Jawa Mataraman.
        </p>
        <small>© 2026 Luksuri Reka Digital Solutions. All rights reserved.</small>
      </div>

      <nav className="footerNav" aria-label="Navigasi footer">
        <div>
          <strong>Halaman utama</strong>
          <a href="/">Kalkulator petung</a>
        </div>
        <div>
          <strong>Panduan populer</strong>
          {pasanganLinks.map((item) => (
            <a key={item.href} href={item.href}>
              {item.title}
            </a>
          ))}
        </div>
        <div>
          <strong>Acuan dan acara</strong>
          {acaraLinks.map((item) => (
            <a key={item.href} href={item.href}>
              {item.title}
            </a>
          ))}
        </div>
      </nav>
    </footer>
  );
}
