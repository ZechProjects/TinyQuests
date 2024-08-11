/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        colors: {
          primary: "#c36d19",
          primaryComp: "#00c77f",
          disableCard: "#C8D0CB",
          primaryLight: "#CFF2E5",
          secondary: "#64b837",
        },
      },
    },
  },
  plugins: [],
};
