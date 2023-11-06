/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Open Sans'", "sans-serif"],
        serif: ["'Open Sans'", "serif"],
        mono: ["'Open Sans'", "monospace"],
        math: ["MathJax_SansSerif"],
      },
    },
  },
  plugins: [],
}

