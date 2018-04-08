// @flow

module.exports = {
  siteMetadata: {
    title: 'Jargon',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-purify-css',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/jargons`,
        name: 'jargons',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-remark-prismjs'],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ['Roboto:400,700', 'Playfair Display:400,400i,700,700i'],
      },
    },
  ],
};
