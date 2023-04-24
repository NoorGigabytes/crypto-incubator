module.exports = {
  mode: "jit",
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        float: 'float 2s ease-in-out infinite',
        floatreverse: 'floatreverse 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(-0.5em)' },
          '50%': { transform: 'translateY(0.5em)' },
        },
       floatreverse: {
          '0%, 100%': { transform: 'translateY(0.5em)' },
          '50%': { transform: 'translateY(-0.5em)' },
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
