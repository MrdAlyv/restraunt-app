import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      orange: "rgba(255, 138, 0, 1)",
      white: "#FFF",
      dark_brown: "rgba(49, 31, 9, 1)",
      color1: "#ffe8cc",
      lightGreen: "#ecfaf1 ",
      gray: "#f1f1f2",
      dark_blue: "rgba(81, 41, 130, 1)",
      green: "#3fa72f",
      red: "#FF0000",
      black: "rgb(0,0,0)"


    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
