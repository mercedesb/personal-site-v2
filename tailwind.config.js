module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    fontFamily: {
      display: ["Libre Baskerville", "serif"],
      body: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        black: "#252627",
        brown: {
          100: "#e6ddd1",
          500: "#aa916d",
          900: "#5e3c0a",
        },
      },
      opacity: {
        "05": ".05",
        "10": ".1",
      },
      zIndex: {
        "-10": "-10",
      },
    },
  },
  variants: {},
  plugins: [],
}
