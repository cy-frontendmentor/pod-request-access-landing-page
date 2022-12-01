/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '485px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-chivo)'],
      },
      colors: {
        'medium-aquamarine': '#54E6AF',
        tuna: '#2C344B',
        mirage: '#121725',
        'marble-blue': '#5A668A',
        'periwinkle-grey': '#C2CBE5',
      },
    },
  },
  plugins: [],
};
