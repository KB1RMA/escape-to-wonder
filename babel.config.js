module.exports = {
  presets: [
    [
      'next/babel',
      {
        'styled-jsx': {
          plugins: ['styled-jsx-plugin-postcss', 'styled-jsx-plugin-sass'],
        },
      },
    ],
  ],
};
