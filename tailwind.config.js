const twconfigFilters = {
  theme: {
    filter: {
      // defaults to {}
    },
    backdropFilter: {
      // defaults to {}
      none: "none",
      blur: "blur(2px)",
    },
  },
  variants: {
    filter: ["responsive"], // defaults to ['responsive']
    backdropFilter: ["responsive"], // defaults to ['responsive']
  },
};

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
  theme: {
    extend: {
      ...twconfigFilters.theme,
      backgroundImage: (theme) => ({
        hero: "url('/assets/hero/hero.jpg')",
      }),
    },
  },
  variants: {
    ...twconfigFilters.variants,
  },
  plugins: [require("tailwindcss-filters")],
};
