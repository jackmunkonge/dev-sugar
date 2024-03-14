'use client';

import clsx from 'clsx';
import { Metadata, Viewport } from 'next';
import Image from 'next/image';

import sadJar from '@assets/images/SadJar.png';
import { Headline2, Headline3, Headline5 } from '@components/Typography';
import { Footer, Navbar } from '@components/index';
import { theme } from '@utils/globalConstants';

import { arcadeFill, arcadeOutline, pixelBody, pixelCaps, pixelHeader, pixelMono } from './fonts';

export const metadata: Metadata = {
  title: 'Dev Sugar | Not Found',
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

export default function NotFound() {
  const heading = "The resource you're looking for wasn't found";

  return (
    <html lang="en" className={clsx(fonts, 'h-full')}>
      <body className="relative min-h-screen bg-background font-body">
        <header className="sticky inset-x-0 top-0 z-50">
          <Navbar isNavigational={false} />
        </header>

        <main className="relative mx-auto mb-8 max-w-7xl flex-1 break-words py-6">
          <div className="flex flex-col">
            <header className="flex flex-1 items-end justify-center px-2 text-center">
              <h1>
                <div className="hidden laptop:block">
                  <Headline2>{heading}</Headline2>
                </div>
                <div className="hidden tablet:block laptop:hidden">
                  <Headline3>{heading}</Headline3>
                </div>
                <div className="tablet:hidden">
                  <Headline5>{heading}</Headline5>
                </div>
              </h1>
            </header>

            <div className="flex flex-1 items-center justify-center px-8">
              <Image src={sadJar} width={500} height={500} alt={heading} />
            </div>
          </div>
        </main>

        <footer className="fixed inset-x-0 bottom-0">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
