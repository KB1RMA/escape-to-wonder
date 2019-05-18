const debug = process.env.NODE_ENV !== 'production';

module.exports = {
  exportPathMap: () => ({
    '/': { page: '/' },
  }),
  assetPrefix: !debug ? '/escape-to-wonder' : '',
};
