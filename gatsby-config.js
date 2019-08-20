const axios = require('axios');
const rimraf = require('rimraf');
const download = require('image-downloader');
require('dotenv').config({
  path: '.env',
});

const { NODE_ENV } = process.env;
const { GATSBY_CMS } = process.env;
const { GATSBY_PREFIX } = process.env;

rimraf('./src/images/*', () => { console.log('done'); });


// Make a request for a user with a given ID
axios.get(`${GATSBY_CMS}/wp-json/wp/v2/media?per_page=100`)
  .then(({ data }) => {
    data.forEach(({
      slug, mime_type, media_type, media_details,
    }) => {
      const suffix = mime_type.split('/')[1];

      if (media_type === 'image') {
        download.image({
          url: media_details.sizes.lqph_size.source_url,
          dest: `./src/images/${slug}.${suffix}`,
        })
          .catch(err => console.error(err));
      }
    });
  })
  .catch((error) => {
    console.log(error);
  });


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
        excludedRoutes: ['/*/*/users/me', '/*/*/settings', '/*/*/themes', '/*/*/media'],
        normalizer({ entities }) {
          return entities;
        },
      },
    },
  ],
};
