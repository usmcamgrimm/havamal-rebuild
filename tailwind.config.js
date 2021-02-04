module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    fontFamily: {
      'roboto': ['roboto', 'sans-serif'],
      'grenze': ['grenze', 'sans-serif'],
      'pirata': ['"pirata one"', 'serif'],
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        yellow: `#ffcd00`,
        blue: {
          lighter: `#66add9`,
          default: `#004b87`,
          darker: `#002f54`,
        },
        red: {
          default: `#ce1126`,
          darker: `#d50000`,
        }
      },
    },
    borderRadius: {
      'none': '0',
      'sm': '2px',
      DEFAULT: '5px',
      'lg': '8px',
    },
  },
  variants: {},
  plugins: [],
}
