import clsx from 'clsx';
import type { Metadata, Viewport } from 'next';
import 'overlayscrollbars/overlayscrollbars.css';

import { Footer, Navbar } from '@components/index';
import { CONTENT_HEIGHT, theme } from '@utils/globalConstants';

import '../styles/globals.css';
import { arcadeFill, arcadeOutline, pixelBody, pixelCaps, pixelHeader, pixelMono } from './fonts';

export const metadata: Metadata = {
  title: 'Dev Sugar | Home',
  description: 'The ultimate hub for dev resources',
};

export const viewport: Viewport = {
  themeColor: theme.colors.background,
  initialScale: 1,
  width: 'device-width',
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
    <html lang="en" className={clsx(fonts, 'h-full')}>
      <body className="relative h-screen w-full bg-background font-body flex flex-col items-center overflow-hidden m-0">
        <header className="w-full">
          <Navbar />
        </header>
        <main
          className={`relative mb-8 max-w-7xl w-full flex-1 ${CONTENT_HEIGHT} overflow-hidden flex break-words py-6`}
        >
          {children}
        </main>
        <footer className="w-full">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
