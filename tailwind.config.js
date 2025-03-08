/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Main brand colors
        primary: {
          50: '#e6f1ff',
          100: '#cce3ff',
          200: '#99c7ff',
          300: '#66abff',
          400: '#338fff',
          500: '#0073ff', // Main primary color
          600: '#005cd9',
          700: '#0046b3',
          800: '#002f8c',
          900: '#001966',
        },
        // Secondary/accent colors
        accent: {
          50: '#e6f9ff',
          100: '#ccf3ff',
          200: '#99e7ff',
          300: '#66daff',
          400: '#33ceff',
          500: '#00c2ff',
          600: '#009bd9',
          700: '#0074b3',
          800: '#004e8c',
          900: '#002766',
        },
        // Background colors
        background: {
          light: '#ffffff',
          DEFAULT: '#f9fbff',
          dark: '#0c1629',
        },
        // Text colors
        text: {
          primary: '#1a2b4c',
          secondary: '#3a4a6c',
          muted: '#6b7280',
          light: '#ffffff',
        },
        // Border colors
        border: {
          light: '#e5e7eb',
          DEFAULT: '#d1d5db',
          dark: '#2d3748',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-montserrat)', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 6px rgba(0, 115, 255, 0.1)',
        'card-hover': '0 10px 15px rgba(0, 115, 255, 0.2)',
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
      },
    },
  },
  plugins: [],
}