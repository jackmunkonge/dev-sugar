import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      // Miscellaneous
      transparent: 'transparent',
      current: 'currentColor',
      black: '#1C1C1C',
      white: '#FFFFFF',
      // Greyscale
      line: '#BFB3A4',
      active: '#1E1912',
      background: '#F6F3E8',
      body: '#7D6F63',
      label: '#927869',
      placeholder: '#9D8672',
      input: '#F6F6EF',
      offwhite: '#FCFCFC',
      // Primary
      primary: {
        DEFAULT: '#684B39',
        light1: '#775D4D',
        light2: '#866F61',
        light3: '#958174',
        light4: '#A49388',
        light5: '#B3A59C',
        dark1: '#5E4433',
        dark2: '#533C2E',
        dark3: '#493528',
        dark4: '#3E2D22',
        dark5: '#34261D',
      },
      // Secondary
      secondary: {
        DEFAULT: '#545C55',
        light1: '#656C66',
        light2: '#767D77',
        light3: '#878D88',
        light4: '#989D99',
        light5: '#AAAEAA',
        dark1: '#4C534D',
        dark2: '#434A44',
        dark3: '#3B403C',
        dark4: '#323733',
        dark5: '#2A2E2B',
      },
      // Tertiary
      tertiary: {
        DEFAULT: '#C8705C',
        light1: '#CE7E6C',
        light2: '#D38D7D',
        light3: '#D99B8D',
        light4: '#DEA99D',
        light5: '#E3B8AE',
        dark1: '#B46553',
        dark2: '#A05A4A',
        dark3: '#8C4E40',
        dark4: '#784337',
        dark5: '#64382E',
      },
      // Warning
      warning: {
        DEFAULT: '#EEC982',
        light1: '#F0CE8F',
        light2: '#F1D49B',
        light3: '#F3D9A8',
        light4: '#F5DFB4',
        light5: '#F7E4C1',
        dark1: '#D6B575',
        dark2: '#BEA168',
        dark3: '#A78D5B',
        dark4: '#8F794E',
        dark5: '#776541',
      },
      // Info
      info: {
        DEFAULT: '#C7D8F5',
        light1: '#CDDCF6',
        light2: '#D2E0F7',
        light3: '#D8E4F8',
        light4: '#DDE8F9',
        light5: '#E3ECFA',
        dark1: '#B3C2DD',
        dark2: '#9FADC4',
        dark3: '#8B97AC',
        dark4: '#778293',
        dark5: '#646C7B',
      },
      // Error
      error: {
        DEFAULT: '#F16FA5',
        light1: '#F27DAE',
        light2: '#F48CB7',
        light3: '#F59AC0',
        light4: '#F7A9C9',
        light5: '#F8B7D2',
        dark1: '#D96495',
        dark2: '#C15984',
        dark3: '#A94E74',
        dark4: '#914363',
        dark5: '#793853',
      },
      // Success
      success: {
        DEFAULT: '#31BA95',
        light1: '#46C1A0',
        light2: '#5AC8AA',
        light3: '#6FCFB5',
        light4: '#83D6BF',
        light5: '#98DDCA',
        dark1: '#2CA786',
        dark2: '#279577',
        dark3: '#228268',
        dark4: '#1D7059',
        dark5: '#195D4B',
      },
    },
    fontFamily: {
      fill: ['var(--font-fill)'],
      outline: ['var(--font-outline)'],
      header: ['var(--font-header)'],
      body: ['var(--font-body)'],
      caps: ['var(--font-caps)'],
      mono: ['var(--font-mono)'],
    },
    fontSize: {
      headline1: [
        '96px',
        {
          lineHeight: '128px',
          letterSpacing: '-0.015em',
          fontWeight: '400',
        },
      ],
      headlineout1: [
        '96px',
        {
          lineHeight: '128px',
          letterSpacing: '-0.015em',
          fontWeight: '500',
        },
      ],
      headline2: [
        '60px',
        {
          lineHeight: '80px',
          letterSpacing: '-0.005em',
          fontWeight: '400',
        },
      ],
      headline3: [
        '48px',
        {
          lineHeight: '64px',
          letterSpacing: '0em',
          fontWeight: '400',
        },
      ],
      headline4: [
        '34px',
        {
          lineHeight: '48px',
          letterSpacing: '0.0025em',
          fontWeight: '400',
        },
      ],
      headline5: [
        '24px',
        {
          lineHeight: '32px',
          letterSpacing: '0em',
          fontWeight: '400',
        },
      ],
      headline6: [
        '20px',
        {
          lineHeight: '28px',
          letterSpacing: '0.0015em',
          fontWeight: '400',
        },
      ],
      subtitle1: [
        '16px',
        {
          lineHeight: '24px',
          letterSpacing: '0.0015em',
          fontWeight: '400',
        },
      ],
      subtitle2: [
        '14px',
        {
          lineHeight: '20px',
          letterSpacing: '0.001em',
          fontWeight: '400',
        },
      ],
      body1: [
        '16px',
        {
          lineHeight: '24px',
          letterSpacing: '0.005em',
          fontWeight: '400',
        },
      ],
      body2: [
        '14px',
        {
          lineHeight: '20px',
          letterSpacing: '0.0025em',
          fontWeight: '400',
        },
      ],
      button1: [
        '14px',
        {
          lineHeight: '20px',
          letterSpacing: '0.05em',
          fontWeight: '700',
        },
      ],
      button2: [
        '12px',
        {
          lineHeight: '16px',
          letterSpacing: '0.025em',
          fontWeight: '700',
        },
      ],
      caption: [
        '12px',
        {
          lineHeight: '16px',
          letterSpacing: '0.004em',
          fontWeight: '400',
        },
      ],
      overline: [
        '10px',
        {
          lineHeight: '16px',
          letterSpacing: '0.015em',
          fontWeight: '400',
        },
      ],
    },
    screens: {
      tablet: { min: '480px' },
      // => @media (min-width: 480px) { ... }

      laptop: { min: '768px' },
      // => @media (min-width: 768px) { ... }

      desktop: { min: '1024px' },
      // => @media (min-width: 1024px) { ... }

      widescreen: { min: '1280px' },
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      zIndex: {
        'spinner-container': '200',
        'spinner-bar': '210',
        'spinner-mask': '220',
      },
      keyframes: {
        scroll: {
          '0%': {
            transform: 'translateX(0px)',
          },
          '100%': {
            transform: 'translateX(12px)',
          },
        },
      },
      animation: {
        'scrolling-bar': 'scroll 0.5s steps(3, jump-start) infinite',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
export default config;
