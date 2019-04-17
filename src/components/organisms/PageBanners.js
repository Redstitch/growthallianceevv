import React from 'react';
import PanelBanner from './banners/PanelBanner';

const PageBanners = ({ content }) => content.map(banner => (
  <section key={banner.__typename}>
    {banner.__typename === 'WordPressAcf_pannel_banner' && <PanelBanner content={banner} /> }
  </section>
));

export default PageBanners;
