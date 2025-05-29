import type { Config } from "tailwindcss";
import "tailwindcss-animate";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
//  plugins: [tailwindcssAnimate],
  // plugins: [require("tailwindcssAnimate")],
};

export default config;
