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
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#4c5be6',
        showSpinner: false,
      },
    },
  ],
};
