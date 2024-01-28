/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,scss}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      screens: {
        'lg': '1120px',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
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

