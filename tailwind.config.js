/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Playfair Display", "ui-serif", "serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        // Brand = the same blue you used before (Tailwind blue-600)
        brand: {
          DEFAULT: "#2563EB",
          50:  "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
        },
      },
      boxShadow: {
        'elev-1': "0 4px 14px rgba(0,0,0,0.06)",
        'elev-2': "0 10px 30px rgba(0,0,0,0.08)",
        'elev-3': "0 20px 40px rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [],
};
