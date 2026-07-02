import { ImageResponse } from 'next/og';
 
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
 
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0f0c',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: 80,
          border: '4px solid #1a241a',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 40 }}>
          <div style={{
            background: 'rgba(155, 255, 46, 0.1)',
            padding: '16px 24px',
            borderRadius: 16,
            color: '#9BFF2E',
            fontSize: 48,
            fontWeight: 900,
            marginRight: 24,
            border: '2px solid rgba(155, 255, 46, 0.2)'
          }}>
            {'>_'}
          </div>
          <h1 style={{ color: '#9BFF2E', fontSize: 64, fontWeight: 900, margin: 0, letterSpacing: '8px' }}>
            CODETRAIL
          </h1>
        </div>
        <p style={{ color: 'white', fontSize: 80, fontWeight: 900, margin: 0, lineHeight: 1.1 }}>
          Master DSA with
        </p>
        <p style={{ color: '#9BFF2E', fontSize: 80, fontWeight: 900, margin: 0, lineHeight: 1.1, marginTop: 10 }}>
          Precision
        </p>
        <div style={{ display: 'flex', marginTop: 60, color: '#a1a1aa', fontSize: 32 }}>
          <span style={{ marginRight: 40 }}>500+ Problems</span>
          <span style={{ marginRight: 40 }}>|</span>
          <span style={{ marginRight: 40 }}>80+ Structural Patterns</span>
          <span style={{ marginRight: 40 }}>|</span>
          <span>Cloud Sync</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
