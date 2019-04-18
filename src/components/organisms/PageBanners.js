import React from 'react';
import PanelBanner from './banners/PanelBanner';
import Banner from './banners/Banner';

const PageBanners = ({ content }) => content && content.map(banner => (
  <section key={banner.__typename}>
    {banner.__typename === 'WordPressAcf_pannel_banner' && <PanelBanner content={banner} /> }
    {banner.__typename === 'WordPressAcf_banner' && <Banner content={banner} /> }
  </section>
));

export default PageBanners;
