import { ImageResponse } from 'next/og';

export const alt = 'Petung Jawa Tulungagung';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: 'center',
          background: 'linear-gradient(135deg, #0d1719 0%, #203b5f 54%, #472234 100%)',
          color: '#fffaf0',
          display: 'flex',
          height: '100%',
          justifyContent: 'center',
          padding: 72,
          position: 'relative',
          width: '100%',
        }}
      >
        <div
          style={{
            border: '1px solid rgba(234,216,178,0.38)',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'space-between',
            padding: 48,
            width: '100%',
          }}
        >
          <div style={{ color: '#e7d2a3', fontSize: 30, fontWeight: 800 }}>PETUNG JAWA</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div style={{ fontSize: 78, fontWeight: 900, lineHeight: 1.02 }}>
              Hari Baik Lamaran dan Pernikahan
            </div>
            <div style={{ color: '#efe0bb', fontSize: 34, lineHeight: 1.35 }}>
              Weton, Betaljemur, saat ijab, tarub, dan lelungan
            </div>
          </div>
          <div style={{ color: '#e7d2a3', fontSize: 28 }}>petung jawa tulungagung</div>
        </div>
      </div>
    ),
    size,
  );
}
