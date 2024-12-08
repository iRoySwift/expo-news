/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
      },
    },
  },
  plugins: [],
};
