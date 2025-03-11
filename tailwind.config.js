/** @type {import('tailwindcss').Config} */

import { heroui } from "@heroui/theme";

module.exports = {
  content: ["./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui()],
};
