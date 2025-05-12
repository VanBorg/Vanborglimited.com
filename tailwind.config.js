/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        title: ['Audiowide', 'cursive'],
        body: ['Roboto Slab', 'serif'],
      },
      colors: {
        light: {
          'bg-primary': '#FFFFFF',        // bright white
          'bg-secondary': '#F8FAFC',      // off-white
          'text-primary': '#111827',
          'text-secondary': '#374151',
          'brand-primary': '#B91C1C',
          'brand-secondary': '#991B1B',
          'accent': '#F97316',
        },
        dark: {
          'bg-primary': '#0D0D0D',
          'bg-secondary': '#0F1A2F',
          'text-primary': '#ECEBF3',
          'text-secondary': '#CCCCCC',
          'brand-primary': '#00AFB9',
          'brand-secondary': '#167DA9',
          'accent': '#0C6D8C',
        },
        surface: {
          gray: '#FFFFFF',     // bright white (section 1, 3, 5...)
          light: '#FFFFFF',    // pure white (section 2, 4, 6...)
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'scale-in': 'scale-in 0.5s ease-out forwards',
        'wiggle': 'wiggle 2s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: 0.6 },
          '50%': { opacity: 1 },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.9)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        'wiggle': {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '25%': { transform: 'rotate(5deg)' },
          '75%': { transform: 'rotate(-5deg)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
