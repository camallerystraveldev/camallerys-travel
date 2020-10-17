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

const twconfigAspectRatio = {
  theme: {
    aspectRatio: {
      // defaults to {}
      none: 0,
      square: [1, 1],
      "16/9": [16, 9],
      "4/3": [4, 3],
    },
  },
  variants: {
    aspectRatio: ["responsive"], // defaults to ['responsive']
  },
};

const twconfigBackgroundImg = {
  theme: {
    backgroundImage: (theme) => ({
      hero: "url('/assets/hero/hero.jpg')",
    }),
  },
};

const twconfigFirstEnabled = {
  variants: {
    margin: ["responsive", "first"],
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
      ...twconfigAspectRatio.theme,
      ...twconfigBackgroundImg.theme,
    },
  },
  variants: {
    ...twconfigFilters.variants,
    ...twconfigAspectRatio.variants,
    ...twconfigFirstEnabled.variants,
  },
  plugins: [
    require("tailwindcss-filters"),
    require("tailwindcss-aspect-ratio"),
  ],
};
