'use client';

import clsx from 'clsx';
import { Metadata, Viewport } from 'next';
import { useEffect } from 'react';

import { SadJar } from '@assets/images';
import { Body1, Headline2, Headline3, Headline4, Headline5 } from '@components/Typography';
import { Footer, Navbar } from '@components/index';
import { CONTENT_HEIGHT, theme } from '@utils/globalConstants';

import { arcadeFill, arcadeOutline, pixelBody, pixelCaps, pixelHeader, pixelMono } from './fonts';

export const metadata: Metadata = {
  title: 'Dev Sugar | Oh no!',
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

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const heading = 'Something went wrong...';
  const message = error.message || 'Unknown';

  useEffect(() => {
    // TODO: Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <html lang="en" className={clsx(fonts, 'h-full')}>
      <body className="relative h-screen w-full bg-background font-body flex flex-col items-center overflow-hidden m-0">
        <header className="w-full">
          <Navbar isNavigational={false} />
        </header>

        <main
          className={`relative mb-8 max-w-7xl w-full flex-1 ${CONTENT_HEIGHT} overflow-hidden flex break-words py-6`}
        >
          <div className="flex flex-col">
            <header className="flex flex-1 items-end justify-center px-2 text-center">
              <div className="hidden laptop:block">
                <Headline2>{heading}</Headline2>
              </div>
              <div className="hidden tablet:block laptop:hidden">
                <Headline3>{heading}</Headline3>
              </div>
              <div className="tablet:hidden">
                <Headline5>{heading}</Headline5>
              </div>
            </header>

            <div className="flex flex-1 items-center justify-center px-8">
              <SadJar width={500} height={500} />
            </div>

            <div className="flex flex-1 items-start justify-center px-2 text-center">
              <Headline4 className="hidden laptop:block">{message}</Headline4>
              <Headline5 className="hidden tablet:block laptop:hidden">{message}</Headline5>
              <Body1 className="tablet:hidden">{message}</Body1>
            </div>

            <div className="flex flex-1 items-start justify-center px-2">
              <button onClick={() => reset()}>Try again</button>
            </div>
          </div>
        </main>

        <footer className="w-full">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
