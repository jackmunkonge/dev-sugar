import type { Metadata } from 'next';
import { arcadeFill, arcadeOutline, pixelBody, pixelCaps, pixelHeader, pixelMono } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dev Sugar',
  description: 'The ultimate hub for dev resources',
};

const fonts = `
    ${arcadeFill.variable}
    ${arcadeOutline.variable}
    ${pixelHeader.variable}
    ${pixelBody.variable}
    ${pixelCaps.variable}
    ${pixelMono.variable}
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fonts}>
      <body className="font-body">{children}</body>
    </html>
  );
}
