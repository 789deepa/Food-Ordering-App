/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./app.js", "./components/**/*.js"],
  theme: {
    extend: {
      colors: {
        "brand": {
          "dark": "#0a0a0a",
          "darker": "#151515",
          "card": "#1a1a1a",
          "border": "#2a2a2a",
          "text": "#f5f5f5",
          "text-secondary": "#a8a8a8",
          "accent": "#00d4ff",
          "accent-dark": "#00a8cc",
          "accent-light": "#33e0ff",
        }
      },
      fontFamily: {
        "display": ["'Playfair Display'", "serif"],
        "sans": ["'DM Sans'", "sans-serif"],
      },
      boxShadow: {
        "elevated": "0 8px 32px rgba(0, 212, 255, 0.1)",
        "hover": "0 16px 48px rgba(0, 212, 255, 0.15)",
        "card": "0 4px 12px rgba(0, 0, 0, 0.4)",
      },
      animation: {
        "fadeIn": "fadeIn 0.3s ease-in",
        "slideUp": "slideUp 0.4s ease-out",
        "pulse-subtle": "pulse-subtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        "fadeIn": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slideUp": {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
      transitionTimingFunction: {
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
}
