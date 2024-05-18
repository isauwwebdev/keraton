import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#FEFDEA",
        red: "#861501",
        gold: "#B58301",
        goldBright: "#E5B128",

        // You can add more custom colors here
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      aspectRatio: {
        "7/3": "7 / 3",
        "18/1": "18 / 1",
        "4/3": "4 / 3",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
export default config;
