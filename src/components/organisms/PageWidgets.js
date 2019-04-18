import React from 'react';
import SuccessStory from './widgets/SuccessStory';
import ImageFeatureLarge from './widgets/ImageFeatureLarge';
import ImageFeature from './widgets/ImageFeature';

const PageWidgets = ({ content, color }) => content && content.map((widget, index) => (
  <section key={`${index}${widget.__typename}`}>
    {widget.__typename === 'WordPressAcf_success_story' && <SuccessStory widget={widget} color={color} /> }
    {widget.__typename === 'WordPressAcf_image_feature_large' && <ImageFeatureLarge widget={widget} color={color} /> }
    {widget.__typename === 'WordPressAcf_image_feature' && <ImageFeature widget={widget} color={color} /> }
  </section>
));

export default PageWidgets;
