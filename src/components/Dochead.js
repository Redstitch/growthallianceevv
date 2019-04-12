import React from 'react';
import Helmet from 'react-helmet';

const Dochead = ({
  title, siteName, description, pageImage, metaName, metaContent,
}) => (
  <Helmet
    title={title ? `${title} | ${siteName}` : `${siteName}`}
    meta={[
      { name: 'description', content: description },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: title ? `${title} | ${siteName}` : `${siteName}` },
      { property: 'og:site_name', content: siteName },
      { property: 'og:url', content: 'https://www.sitename.com' },
      { property: 'og:image', content: pageImage },
      { property: 'og:image:secure_url', content: pageImage },
      { name: metaName, content: metaContent },
    ]}
    link={[
      {
        rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
      }, {
        rel: 'stylesheet', href: 'https://use.typekit.net/oze1zio.css',
      },
    ]}
  >
    <html lang="en" />
  </Helmet>
);

export default Dochead;
