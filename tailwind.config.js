module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#1C1C1C",
      white: "#FFFFFF",
      body: "#7D6F63",
      label: "#927869",
      line: "#BFB3A4",
      input: "#F6F6EF",
      background: "#F6F3E8",
      offwhite: "#FCFCFC",
      primary: {
        DEFAULT: "#684B39",
        light5: "#C1A28E",
        light4: "#B58F78",
        light3: "#A97D61",
        light2: "#956C52",
        light1: "#7F5B45",
        dark1: "#5E4433",
        dark2: "#533C2E",
        dark3: "#493528",
        dark4: "#3E2D22",
        dark5: "#34261C",
      },
      secondary: {
        DEFAULT: "#545C55",
        light5: "#A8AFA9",
        light4: "#969F97",
        light3: "#858F86",
        light2: "#747F75",
        light1: "#646D65",
        dark1: "#4C534D",
        dark2: "#434A44",
        dark3: "#3B403C",
        dark4: "#323733",
        dark5: "#2A2E2B",
      },
      info: {
        DEFAULT: "#C8DAF5",
        dark: "#3175DA",
      },
      error: {
        DEFAULT: "#F16FA5",
        light5: "#F8B7D2",
        light4: "#F7A9C9",
        light3: "#F59AC0",
        light2: "#F48CB7",
        light1: "#F27DAE",
        dark1: "#EE4F91",
        dark2: "#EB2F7D",
        dark3: "#E1166A",
        dark4: "#C0135B",
        dark5: "#A0104C",
      },
    },
    fontFamily: {
      filled: ['"8-bit Arcade In"', "sans-serif"],
      outline: ['"8-bit Arcade Out"', "sans-serif"],
      sc: ['"Pixel Operator SC"', "sans-serif"],
      mono: ['"Pixel Operator Mono"', "sans-serif"],
      default: ['"Pixel Operator"', "sans-serif"],
    },
    fontSize: {
      title1: ["96px", "128px"],
      title2: ["60px", "80px"],
      title3: ["48px", "64px"],
      title4: ["34px", "48px"],
      title5: ["24px", "32px"],
      title6: ["20px", "28px"],
      subtitle1: ["16px", "24px"],
      subtitle2: ["14px", "20px"],
      body1: ["16px", "24px"],
      body2: ["14px", "20px"],
      button1: ["14px", "20px"],
      button2: ["12px", "16px"],
      caption: ["12px", "16px"],
      overline: ["10px", "16px"],
    },
    letterSpacing: { // TODO: integrate into the font sizes themselves
      tight005: "-0.005em",
      tight015: "-0.015em",
      normal: "0",
      wide001: "0.001em",
      wide005: "0.005em",
      wide0015: "0.0015em",
      wide0025: "0.0025em",
      wide004: "0.004em",
      wide015: "0.015em",
      wide025: "0.025em",
      wide05: "0.05em",
    },
    screens: {
      tablet: { min: "480px" },
      // => @media (min-width: 480px) { ... }

      laptop: { min: "768px" },
      // => @media (min-width: 768px) { ... }

      desktop: { min: "1024px" },
      // => @media (min-width: 1024px) { ... }

      widescreen: { min: "1280px" },
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
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
        }
      },
      animation: {
        'scrolling-bar': 'scroll 0.5s steps(3, jump-start) infinite',
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
