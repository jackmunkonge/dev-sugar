module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
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
    extend: {},
  },
  plugins: [],
};
