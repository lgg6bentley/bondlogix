/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        trust: "#0F172A",     // deep navy
        signal: "#22D3EE",    // cyan pulse
        grit: "#FACC15",      // golden grit
        myth: "#E879F9",      // violet mythic
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        broadcast: ["Orbitron", "sans-serif"],
      },
    },
  },
  plugins: [],
}
