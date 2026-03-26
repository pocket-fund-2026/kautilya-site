import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Kautilya | Buy-Side Advisory';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(145deg, #080c18 0%, #0a1020 40%, #0d1428 100%)',
          fontFamily: 'serif',
        }}
      >
        <div
          style={{
            fontSize: 72,
            letterSpacing: 18,
            color: '#c9b99a',
            fontWeight: 300,
            marginBottom: 32,
          }}
        >
          KAUTILYA
        </div>
        <div
          style={{
            fontSize: 24,
            color: 'rgba(249,248,246,0.6)',
            letterSpacing: 6,
            textTransform: 'uppercase',
          }}
        >
          Buy-Side Advisory
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 18,
            color: 'rgba(249,248,246,0.35)',
            maxWidth: 700,
            textAlign: 'center',
            lineHeight: 1.6,
          }}
        >
          Proprietary deal sourcing: in any sector, against any criteria, from first principles.
        </div>
      </div>
    ),
    { ...size },
  );
}
