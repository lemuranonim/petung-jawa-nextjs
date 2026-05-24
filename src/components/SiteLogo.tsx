import { SITE_NAME } from '@/lib/seo';

type SiteLogoProps = {
  className?: string;
  compact?: boolean;
};

export function SiteLogo({ className = '', compact = false }: SiteLogoProps) {
  return (
    <a className={`siteLogo ${className}`} href="/" aria-label={`${SITE_NAME} - Beranda`}>
      <img src="/logo.svg" alt="" width="56" height="56" aria-hidden="true" />
      {!compact ? (
        <span>
          <strong>Petung Jawa</strong>
          <small>Betaljemur</small>
        </span>
      ) : null}
    </a>
  );
}
