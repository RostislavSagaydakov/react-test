/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,scss}"
  ],
  theme: {
    extend: {
      screens: {
        'lg': '1120px',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          paddingLeft: '1rem',
          paddingRight: '1rem',

          '@screen xl': {
            maxWidth: '1152px',
          },
        }
      })
    }
  ],
}

