/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx,jsx,js,ts}"],
  theme: {
    extend: {
      colors: {
        ct: {
          blue: "#377dff",
          green: "#38cb89",
          yellow: "#ffab00",
          red: "#ff5630",
          gray: "#4e5d78",
          dark: {
            1: "#212833",
            2: "#191C21",
          },
        },
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
