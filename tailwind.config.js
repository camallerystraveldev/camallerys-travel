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

const twconfigAnimations = {
  theme: {
    animation: {
      "bounce-x": "bounce-x 1s infinite",
    },
    keyframes: {
      "bounce-x": {
        "0%, 100%": {
          transform: "translateX(-25%)",
          animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
        },
        "50%": {
          transform: "translateX(0)",
          animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
        },
      },
    },
  },
};

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    extend: {
      ...twconfigFilters.theme,
      ...twconfigAspectRatio.theme,
      ...twconfigBackgroundImg.theme,
      ...twconfigAnimations.theme,
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
