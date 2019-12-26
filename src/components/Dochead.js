import React from 'react';
import Helmet from 'react-helmet';

const Dochead = ({
  title,
  siteName,
  description,
  pageImage,
  metaName,
  metaContent,
}) => (
  <Helmet
    title={title ? `${title} | ${siteName}` : `${siteName}`}
    meta={[
      { name: 'description', content: description },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:title',
        content: title ? `${title} | ${siteName}` : `${siteName}`,
      },
      { property: 'og:site_name', content: siteName },
      { property: 'og:url', content: 'https://www.growthallianceevv.com/' },
      { property: 'og:image', content: pageImage },
      { property: 'og:image:secure_url', content: pageImage },
      { name: metaName, content: metaContent },
    ]}
    script={[
      {
        src:
          'https://cdn.rawgit.com/scottjehl/picturefill/3.0.2/dist/picturefill.min.js',
      },
    ]}
    link={[
      {
        rel: 'stylesheet',
        href:
          'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
      },
      {
        rel: 'stylesheet',
        href:
          'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0//css/all.css',
      },
      { rel: 'stylesheet', href: 'https://use.typekit.net/oze1zio.css' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Gothic+A1:200,400,700',
      },
      { rel: 'manifest', href: '/manifest.webmanifest' },
      { rel: 'shortcut icon', type: 'image/png', href: '/images/favicon.png' },
    ]}
  >
    <html lang="en" />
  </Helmet>
);

export default Dochead;
