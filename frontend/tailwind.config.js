module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.js', './public/index.html'],
  darkMode: true, // or 'media' or 'class'
  theme: {
      fontFamily: {
          sans: ['Roboto', 'sans-serif'],
          serif: ['"Roboto Slab"', 'serif'],
          body: ['Roboto', 'sans-serif'],
      },
      extend: {},
  },
  variants: {
      extend: {},
  },
  plugins: [],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ]
};
