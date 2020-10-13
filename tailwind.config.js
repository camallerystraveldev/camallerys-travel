module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        hero: "url('/assets/hero/hero.jpg')",
      }),
    },
  },
  variants: {},
  plugins: [],
};
