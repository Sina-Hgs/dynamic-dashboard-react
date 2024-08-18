/** @type {import('tailwindcss').Config} */

const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        action: "#2571B7",
        error: "#8B0808",
        lightPrimary: "#FFFFFF",
        lightSecondary: "#C8C8C8",
        darkPrimary: "#1C1C1C",
        darkSecondary: "#1E1E1E",
        borderPrimary: "#474747",
        borderSecondary: "#666666",
        darkBlack: "#111111",
      },

      fontFamily: {
        RobotoCondensed: "RobotoCondensed",
        RobotoMono: "RobotoMono",
      },
    },
  },
  plugins: [],
};
export default config;
