import React from 'react';
import PanelBanner from './banners/PanelBanner';
import DefaultBanner from './banners/DefaultBanner';

const PageBanners = ({ preview, content, page }) =>
  content &&
  content.map((banner, index) => (
    <section key={`${index}banner`}>
      {preview ? (
        <>
          {banner.acf_fc_layout === 'pannel_banner' && (
            <PanelBanner preview content={banner} />
          )}
          {banner.acf_fc_layout === 'banner' && (
            <DefaultBanner preview content={banner} page={page} />
          )}
        </>
      ) : (
        <>
          {banner.__typename === 'WordPressAcf_pannel_banner' && (
            <PanelBanner content={banner} />
          )}
          {banner.__typename === 'WordPressAcf_banner' && (
            <DefaultBanner content={banner} page={page} />
          )}
        </>
      )}
    </section>
  ));

export default PageBanners;
