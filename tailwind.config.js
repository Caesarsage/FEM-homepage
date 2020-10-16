module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      backgroundImage:{
        'hero-1': "url('images/desktop-image-hero-1.jpg')",
        'hero-2': "url('images/desktop-image-hero-2.jpg')",
        'hero-3': "url('images/desktop-image-hero-3.jpg')",
        'hero-4': "url('images/mobile-image-hero-1.jpg')",
        'hero-5': "url('images/mobile-image-hero-2.jpg')",
        'hero-6': "url('images/mobile-image-hero-3.jpg')"
      },
      height: theme => ({
        auto: 'auto',
        ...theme('spacing'),
        full: '100%',
        screen: '100vh',
        '33': '34rem',
        '19': '19rem'
      }),
    },
  },
  variants: {},
  plugins: [],
}
