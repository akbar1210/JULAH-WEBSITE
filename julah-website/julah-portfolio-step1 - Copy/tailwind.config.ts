// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hijau: {
          tua: "#1A3C2A",
          sedang: "#2D5A3D",
          muda: "#E8F0E8",
        },
        sawah: {
          DEFAULT: "#3F4D3B",
          deep: "#2A3527",
        },
        vulkanik: {
          DEFAULT: "#2C2C2C",
          muda: "#3D3D3D",
          terang: "#4A4A4A",
        },
        tanah: {
          DEFAULT: "#5C4033",
          muda: "#D4C4A8",
          terang: "#EDE0D0",
        },
        langit: {
          DEFAULT: "#D4E8F0",
          tua: "#7BA3B3",
          gelap: "#4A7A8A",
        },
        emas: {
          DEFAULT: "#C9A96E",
          tua: "#A8894E",
          muda: "#D4B896",
          pucat: "#E8DCC8",
        },
        putih: "#F5F5F5",
        abu: {
          terang: "#E8EDE8",
          sedang: "#A8B8A8",
          gelap: "#5A6A5A",
        },
        // Legacy
        lontar: "#E8F0E8",
        stone: "#1A3C2A",
        brass: "#C9A96E",
        "brass-dark": "#A8894E",
        "brass-light": "#D4B896",
        "sawah-deep": "#2A3527",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-worksans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};