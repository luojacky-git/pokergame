module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {},
    extend: {
      backgroundImage: {
        "bkg-pattern": `radial-gradient(rgba(63, 1, 92, 0.98), rgba(32, 19, 38, 0.98)), url(./assets/bkg_pattern.png)`,
      },
    },
  },
  plugins: [],
};
