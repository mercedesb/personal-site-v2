module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: "class",
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
          300: "#c2ac8f",
          500: "#aa916d",
          900: "#523c13",
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
        green: {
          500: "#797d2e",
        },
        white: "#FFF",
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
