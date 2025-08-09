/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      colors: {
        'female': {
          50: '#fef7f0',
          100: '#fecaca',
          200: '#fed7d7',
          300: '#fb7185',
          400: '#f43f5e',
          500: '#e11d48',
        },
        'male': {
          50: '#eff6ff',
          100: '#bfdbfe',
          200: '#dbeafe',
          300: '#60a5fa',
          400: '#3b82f6',
          500: '#2563eb',
        }
      }
    },
  },
  plugins: [],
}
