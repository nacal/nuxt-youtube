module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      xs: '420px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#ffdf00',
      secondary: '#c30e23',
      base: '#F9F9F9',
      baseDark: '#181818',
      bannerDark: '#202020',
    }),
    borderColor: (theme) => ({
      ...theme('colors'),
      primary: '#ffdf00',
      secondary: '#c30e23',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
