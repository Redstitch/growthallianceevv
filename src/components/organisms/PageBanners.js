import React from 'react';
import PanelBanner from './banners/PanelBanner';
import DefaultBanner from './banners/DefaultBanner';
import { PageContext } from '../templates/Page';

const PageBanners = ({ content }) => content && content.map((banner, index) => (
  <PageContext.Consumer>
    {value => (
      <section key={`${index}${banner.__typename}`}>
        {banner.__typename === 'WordPressAcf_pannel_banner' && <PanelBanner mainImage={value.mainmainImage} mainColor={value.pageColor} content={banner} /> }
        {banner.__typename === 'WordPressAcf_banner' && <DefaultBanner mainImage={value.mainImage} mainColor={value.pageColor} content={banner} /> }
      </section>
    )}
  </PageContext.Consumer>
));

export default PageBanners;
