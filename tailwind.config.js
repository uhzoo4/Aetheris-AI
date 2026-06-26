import { colors } from "./src/tokens/colors";
import { typography } from "./src/tokens/typography";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors,
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      spacing: {
        "container-padding": "40px",
        "margin-desktop": "40px",
        "unit": "8px",
        "margin-mobile": "16px",
        "gutter": "24px"
      },
      fontFamily: typography.fontFamily,
      fontSize: typography.fontSize
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
