/** @type {import('tailwindcss').Config} */
export default {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        gray: "#494949",
        gray200: "#696F79",
        gray100: "#F3F4F6",
        primaryBlue: "#00008B",
        secondaryBlue: "#465FF1",
        blueBlack: "#1F2937",
        borderStroke: "#8692A6",
        borderActive: "#1565D8",
        borderLight: "#E5E7EB",
      },
    },
  },
  plugins: [],
};
