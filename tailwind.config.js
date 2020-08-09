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
        red: {
          500: "#98464f",
        },
        yellow: {
          500: "#bf8b24",
        },
        purple: {
          500: "#59485e",
        },
        gray: {
          500: "#574543",
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
