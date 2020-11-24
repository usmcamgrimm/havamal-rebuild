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
