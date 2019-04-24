import React from 'react';
import SuccessStory from './widgets/SuccessStory';
import ImageFeatureLarge from './widgets/ImageFeatureLarge';
import ImageFeature from './widgets/ImageFeature';
import NumberTicker from './widgets/NumberTicker';
import LatestNews from './widgets/LatestNews';
import UpcomingEvent from './widgets/UpcomingEvent';
import FullWidthImage from './widgets/FullWidthImage';
import RichText from './widgets/RichText';
import ContentColumns from './widgets/ContentColumns';

const PageWidgets = ({ content, color }) => content && content.map((widget, index) => (
  <section key={`${index}${widget.__typename}`}>
    {widget.__typename === 'WordPressAcf_success_story' && <SuccessStory order={index} widget={widget} color={color} /> }
    {widget.__typename === 'WordPressAcf_image_feature_large' && <ImageFeatureLarge order={index} widget={widget} color={color} /> }
    {widget.__typename === 'WordPressAcf_image_feature' && <ImageFeature order={index} widget={widget} color={color} /> }
    {widget.__typename === 'WordPressAcf_number_ticker' && <NumberTicker order={index} widget={widget} color={color} /> }
    {widget.__typename === 'WordPressAcf_latest_news' && <LatestNews order={index} widget={widget} color={color} /> }
    {widget.__typename === 'WordPressAcf_upcoming_event' && <UpcomingEvent order={index} widget={widget} color={color} /> }
    {widget.__typename === 'WordPressAcf_full_width_image' && <FullWidthImage order={index} widget={widget} color={color} /> }
    {widget.__typename === 'WordPressAcf_content_columns' && <ContentColumns order={index} widget={widget} color={color} /> }
    {widget.__typename === 'WordPressAcf_rich_text' && <RichText order={index} widget={widget} color={color} /> }
  </section>
));

export default PageWidgets;
