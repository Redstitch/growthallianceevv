import React from 'react';
import PanelBanner from './banners/PanelBanner';
import DefaultBanner from './banners/DefaultBanner';

const PageBanners = ({ content, page }) => content && content.map((banner, index) => (
  <section key={`${index}${banner.__typename}`}>
    {banner.__typename === 'WordPressAcf_pannel_banner' && <PanelBanner content={banner} /> }
    {banner.__typename === 'WordPressAcf_banner' && <DefaultBanner page={page} /> }
  </section>
));

export default PageBanners;
