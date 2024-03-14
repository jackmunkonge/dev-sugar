import clsx from 'clsx';
import type { Metadata, Viewport } from 'next';

import { Footer, Navbar } from '@components/index';
import { theme } from '@utils/globalConstants';

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
      <body className="relative min-h-screen bg-background font-body">
        <header className="sticky inset-x-0 top-0 z-50">
          <Navbar />
        </header>
        <main className="relative mx-auto mb-8 max-w-7xl flex-1 break-words py-6">{children}</main>
        <footer className="fixed inset-x-0 bottom-0 w-full">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
