module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },
  /* eslint-disable global-require */
  localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./my-custom/path')
      : '/public/my-custom/path',

  reloadOnPrerender: true,
};
