import React from 'react';
import PanelBanner from './banners/PanelBanner';
import DefaultBanner from './banners/DefaultBanner';

const PageBanners = ({ content }) => content && content.map((banner, index) => (
  <section key={`${index}${banner.__typename}`}>
    {banner.__typename === 'WordPressAcf_pannel_banner' && <PanelBanner content={banner} /> }
    {banner.__typename === 'WordPressAcf_banner' && <DefaultBanner content={banner} /> }
  </section>
));

export default PageBanners;
