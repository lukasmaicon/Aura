/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        surface: {
          DEFAULT: "#0c0f14",
          raised: "#12161e",
          overlay: "#181e28",
        },
        accent: {
          DEFAULT: "#2dd4bf",
          muted: "#14b8a6",
          glow: "rgba(45, 212, 191, 0.35)",
        },
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent 0%, #0c0f14 100%), linear-gradient(90deg, rgba(45,212,191,0.04) 1px, transparent 1px), linear-gradient(rgba(45,212,191,0.04) 1px, transparent 1px)",
        "grid-fade-light":
          "linear-gradient(to bottom, transparent 0%, #fafafa 100%), linear-gradient(90deg, rgba(20,184,166,0.08) 1px, transparent 1px), linear-gradient(rgba(20,184,166,0.08) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "64px 64px",
      },
    },
  },
  plugins: [],
};
