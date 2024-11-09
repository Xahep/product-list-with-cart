/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'redhat': ['"Red Hat Text"', 'sans-serif'],
      },
      colors: {
        rose: {
          50: 'hsl(20, 50%, 98%)',
          100: 'hsl(13, 31%, 94%)',
          300: 'hsl(14, 25%, 72%)',
          400: 'hsl(7, 20%, 60%)',
          500: 'hsl(12, 20%, 44%)',
          900: 'hsl(14, 65%, 9%)'
        },
        red: 'hsl(14, 86%, 42%)',
        green: 'hsl(159, 69%, 38%)'
      },
      padding: {
        '0': '0.1rem'
      },
      height: {
        '2': '0.68rem',
        '58': '14.3rem'
      },
      width: {
        '2': '0.68rem'
      },
      maxHeight: {
        '96': '26rem',
        '98': '28rem'
      },
      maxWidth: {
        '52': '12rem'
      }
    },
  },
  plugins: [],
}

