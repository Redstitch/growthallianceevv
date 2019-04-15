module.exports = {
  siteMetadata: {
    title: 'Growth Alliance',
    description: 'Greater Evansville Exonomic Development',
    author: 'Redstitch',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
};
