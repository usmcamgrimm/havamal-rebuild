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
    screens: {
      xxl: { max: '1920px' },
      xl: { max: '1439px' },
      lg: { max: '1024px' },
      md: { max: '768px' },
      sm: { max: '640' },
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
