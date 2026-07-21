/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "system-ui", "sans-serif"],
        display: ["Cormorant Garamond", "Georgia", "serif"],
      },
      colors: {
        mota: {
          ink: "#1a2840",
          deep: "#f0ece6",
          slate: "#ffffff",
          cream: "#faf8f5",
          sand: "#e8e3db",
          gold: "#b8892a",
          "gold-light": "#dbb04a",
          blue: "#1e3a5f",
          "blue-light": "#3d6ea8",
          navy: "#152a47",
          mist: "#5a6578",
          line: "rgba(26, 40, 64, 0.1)",
          "line-dark": "rgba(26, 40, 64, 0.15)",
        },
      },
      boxShadow: {
        glow: "0 8px 40px rgba(30, 58, 95, 0.22)",
        card: "0 12px 40px rgba(26, 40, 64, 0.08)",
        float: "0 16px 48px rgba(30, 58, 95, 0.14)",
        soft: "0 4px 24px rgba(26, 40, 64, 0.06)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        shimmer: "shimmer 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-soft": "pulseSoft 4s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseSoft: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.6" },
          "50%": { transform: "scale(1.05)", opacity: "1" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(30,58,95,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(30,58,95,0.06) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(30,58,95,0.08), transparent 70%)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
