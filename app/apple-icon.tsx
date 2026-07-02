import { ImageResponse } from 'next/og';
 
export const size = { width: 512, height: 512 };
export const contentType = 'image/png';
 
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0a0f0c',
          color: '#9BFF2E',
          fontSize: 300,
          fontWeight: 900,
          lineHeight: 1,
        }}
      >
        {'>_'}
      </div>
    ),
    { ...size }
  );
}
