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

const twconfigBackgroundImg = {
  theme: {
    backgroundImage: (theme) => ({
      hero: "url('/assets/hero/hero.jpg')",
    }),
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
      ...twconfigBackgroundImg.theme,
    },
  },
  variants: {
    ...twconfigFilters.variants,
  },
  plugins: [require("tailwindcss-filters")],
};
