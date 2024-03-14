import localFont from 'next/font/local';

export const arcadeFill = localFont({
  src: '../../public/fonts/8-bit Arcade In.ttf',
  weight: '400',
  style: 'normal',
  variable: '--font-fill',
  display: 'swap',
});

export const arcadeOutline = localFont({
  src: '../../public/fonts/8-bit Arcade Out.ttf',
  weight: '400',
  style: 'normal',
  variable: '--font-outline',
  display: 'swap',
});

export const pixelHeader = localFont({
  src: '../../public/fonts/PixelOperatorHB.ttf',
  weight: '400',
  style: 'normal',
  variable: '--font-header',
  display: 'swap',
});

export const pixelBody = localFont({
  src: '../../public/fonts/PixelOperator.ttf',
  weight: '400',
  style: 'normal',
  variable: '--font-body',
  display: 'swap',
});

export const pixelCaps = localFont({
  src: '../../public/fonts/PixelOperatorSC.ttf',
  weight: '400',
  style: 'normal',
  variable: '--font-caps',
  display: 'swap',
});

export const pixelMono = localFont({
  src: '../../public/fonts/PixelOperatorMono.ttf',
  weight: '400',
  style: 'normal',
  variable: '--font-mono',
  display: 'swap',
});
