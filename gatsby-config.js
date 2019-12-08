const path = require('path');

module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          components: path.resolve(__dirname, 'src/components'),
          static: path.resolve(__dirname, 'src/static'),
          styles: path.resolve(__dirname, 'src/styles'),
        },
        extensions: ['js'],
      },
    },
  ],
};
