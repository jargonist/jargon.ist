// @flow

module.exports = {
  siteMetadata: {
    title: 'Jargon!',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/jargons`,
        name: 'jargons',
      },
    },
    'gatsby-transformer-remark',
  ],
};
