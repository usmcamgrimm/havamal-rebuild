module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
      yellow: `#ffcd00`,
      blue: {
        lighter: `#66add9`,
        default: `#004b87`,
      },
      red: {
        default: `#ce1126`,
        darker: `#d50000`,
      }
    },
    },
    fontFamily: {
      'Roboto': ['Roboto', 'sans-serif'],
      'Grenze': ['Grenze', 'serif'],
      'PirataOne': ['"Pirata One"', 'serif']
    },
  },
  variants: {},
  plugins: [],
}
