/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'work': "url('/src/assets/images/icon-work.svg')",
      },
    },
  },
  plugins: [],
};
