module.exports = {
  siteMetadata: {
    title: 'Redstitch Boilerplate',
    description: 'Redstitch Boilerplate',
    author: 'Redstitch',
    cmsURL: 'https://www.redstitchdigital.com',
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
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'redstitch-gatsby-boiler',
        short_name: 'rsboiler',
        start_url: '/',
        background_color: '#1A77B9',
        theme_color: '#1A77B9',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
      },
    },
  ],
};
