import React from 'react';
import SuccessStory from './widgets/SuccessStory';
import ImageFeatureLarge from './widgets/ImageFeatureLarge';
import ImageFeature from './widgets/ImageFeature';
import NumberTicker from './widgets/NumberTicker';
import BlogFeed from './widgets/BlogFeed';
import UpcomingEvent from './widgets/UpcomingEvent';
import FullWidthImage from './widgets/FullWidthImage';
import RichText from './widgets/RichText';
import ContentColumns from './widgets/ContentColumns';
import CardLinks from './widgets/CardLinks';
import TabbedContent from './widgets/TabbedContent';
import CopyWImage from './widgets/CopyWImage';
import ImageDescription from './widgets/ImageDescription';
import ImageWText from './widgets/ImageWText';
import RawCode from './widgets/JavascriptLink';
import JavascriptLink from './widgets/JavascriptLink';

const PageWidgets = ({ preview, content, color }) => content && content.map((widget, index) => (
  <section key={`${index}pagewidget`}>
    {preview ? (
      <>
        {widget.acf_fc_layout === 'success_story' && <SuccessStory order={index} widget={widget} color={color} /> }
        {widget.acf_fc_layout === 'image_feature_large' && <ImageFeatureLarge order={index} widget={widget} color={color} /> }
        {widget.acf_fc_layout === 'image_feature' && <ImageFeature order={index} widget={widget} color={color} /> }
        {widget.acf_fc_layout === 'number_ticker' && <NumberTicker order={index} widget={widget} color={color} /> }
        {widget.acf_fc_layout === 'blog_feed' && <BlogFeed order={index} widget={widget} color={color} /> }
        {widget.acf_fc_layout === 'upcoming_event' && <UpcomingEvent order={index} widget={widget} color={color} /> }
        {widget.acf_fc_layout === 'full_width_image' && <FullWidthImage order={index} widget={widget} color={color} /> }
        {widget.acf_fc_layout === 'content_columns' && <ContentColumns order={index} widget={widget} color={color} /> }
        {widget.acf_fc_layout === 'rich_text' && <RichText order={index} widget={widget} color={color} /> }
        {widget.acf_fc_layout === 'card_links' && <CardLinks order={index} widget={widget} color={color} /> }
        {widget.acf_fc_layout === 'card_links_manual' && <CardLinks order={index} widget={widget} color={color} /> }
        {widget.acf_fc_layout === 'tabbed_content' && <TabbedContent order={index} widget={widget} color={color} /> }
        {widget.acf_fc_layout === 'copy_wimage' && <CopyWImage order={index} widget={widget} color={color} /> }
        {widget.acf_fc_layout === 'image_wdescription' && <ImageDescription order={index} widget={widget} color={color} /> }
        {widget.acf_fc_layout === 'image_wtext' && <ImageWText order={index} widget={widget} color={color} /> }
      </>
    ) : (
      <>
        {widget.__typename === 'WordPressAcf_success_story' && <SuccessStory order={index} widget={widget} color={color} /> }
        {widget.__typename === 'WordPressAcf_image_feature_large' && <ImageFeatureLarge order={index} widget={widget} color={color} /> }
        {widget.__typename === 'WordPressAcf_image_feature' && <ImageFeature order={index} widget={widget} color={color} /> }
        {widget.__typename === 'WordPressAcf_number_ticker' && <NumberTicker order={index} widget={widget} color={color} /> }
        {widget.__typename === 'WordPressAcf_blog_feed' && <BlogFeed order={index} widget={widget} color={color} /> }
        {widget.__typename === 'WordPressAcf_upcoming_event' && <UpcomingEvent order={index} widget={widget} color={color} /> }
        {widget.__typename === 'WordPressAcf_full_width_image' && <FullWidthImage order={index} widget={widget} color={color} /> }
        {widget.__typename === 'WordPressAcf_content_columns' && <ContentColumns order={index} widget={widget} color={color} /> }
        {widget.__typename === 'WordPressAcf_rich_text' && <RichText order={index} widget={widget} color={color} /> }
        {widget.__typename === 'WordPressAcf_card_links' && <CardLinks order={index} widget={widget} color={color} /> }
        {widget.__typename === 'WordPressAcf_card_links_manual' && <CardLinks order={index} widget={widget} color={color} /> }
        {widget.__typename === 'WordPressAcf_tabbed_content' && <TabbedContent order={index} widget={widget} color={color} /> }
        {widget.__typename === 'WordPressAcf_copy_wimage' && <CopyWImage order={index} widget={widget} color={color} /> }
        {widget.__typename === 'WordPressAcf_image_wdescription' && <ImageDescription order={index} widget={widget} color={color} /> }
        {widget.__typename === 'WordPressAcf_image_wtext' && <ImageWText order={index} widget={widget} color={color} /> }
        {widget.__typename === 'WordPressAcf_javascript_link' && <JavascriptLink order={index} widget={widget} color={color} /> }
      </>
    )}
  </section>
));

export default PageWidgets;
