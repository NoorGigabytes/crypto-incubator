module.exports = {
  mode: "jit",
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        float: 'float 2s ease-in-out infinite',
        floatreverse: 'floatreverse 2s ease-in-out infinite',
        rotate: 'rotate 30s infinite linear',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(-0.5em)' },
          '50%': { transform: 'translateY(0.5em)' },
        },
       floatreverse: {
          '0%, 100%': { transform: 'translateY(0.5em)' },
          '50%': { transform: 'translateY(-0.5em)' },
        },
       rotate: {
          'from' : { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(359deg)' },
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
