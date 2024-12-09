module.exports = {
  content: [
    "index.html", "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        roboto: [ "Roboto", "sans-serif"],
        figtree: ["Figtree", "sans-serif"],
        },
        borderRadius: {
          "custom-br555": "555px",
          },
          screens: {
            sm: "440px",
            md: "768px",
            lg: "1024px",
          },
    },
  },
  plugins: [],
};