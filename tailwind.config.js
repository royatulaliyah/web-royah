module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "royah-yellow": "#F5BA16",
        "royah-jellyfish": "#4DC8C6",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
