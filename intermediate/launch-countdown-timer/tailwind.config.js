/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx", "./index.html"],
  theme: {
    extend: {
      colors: {
        "blue-900": "hsl(234, 17%, 12%)",
        "blue-800": "hsl(235, 16%, 14%)",
        "blue-300": "hsl(237, 18%, 59%)",
        "desat-blue": "hsl(236, 21%, 26%)",
        "soft-red": "hsl(345, 95%, 68%)",
      },
      backgroundImage: {
        pattern: "url(/images/pattern-hills.svg), url(/images/bg-stars.svg)",
      },
    },
  },
  plugins: [],
};
