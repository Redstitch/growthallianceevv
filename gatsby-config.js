require('dotenv').config({
  path: '.env',
});

const { NODE_ENV } = process.env;
const { GATSBY_CMS } = process.env;
const { GATSBY_PREFIX } = process.env;

module.exports = {
  siteMetadata: {
    title: 'Growth Alliance',
    description: 'Greater Evansville Exonomic Development',
    author: 'Redstitch',
    environment: NODE_ENV,
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
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: GATSBY_CMS,
        protocol: GATSBY_PREFIX,
        hostingWPCOM: false,
        useACF: true,
        acfOptionPageIds: [],
        auth: {},
        verboseOutput: false,
        perPage: 100,
        concurrentRequests: 10,
        excludedRoutes: ['/*/*/users/me', '/*/*/settings', '/*/*/themes'],
        normalizer({ entities }) {
          return entities;
        },
      },
    },
  ],
};
