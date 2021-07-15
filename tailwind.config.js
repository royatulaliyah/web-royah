module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "royah-yellow": "#F5BA16",
        "royah-jellyfish": "#4DC8C6",
        "royah-red": "#DB2929",
      },
      boxShadow: {
        "offset-black-2": "2px 2px black",
        "offset-black-1": "1px 1px black",
      },
    },
  },
  variants: {
    extend: {
      animation: ["hover", "focus"],
    },
  },
  plugins: [],
}
