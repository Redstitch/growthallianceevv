import React from 'react';
import FullWidthImage from './widgets/FullWidthImage';
import RichText from './widgets/RichText';
import Wrapper from '../../styles/utilities/Wrapper';
import Gallery from './widgets/Gallery';

const PostWidgets = ({ content, color }) => content && content.map((widget, index) => (
  <section key={`${index}${widget.__typename}`}>
    {widget.__typename === 'WordPressAcf_image_block' && <Wrapper narrow><FullWidthImage order={index} widget={widget} color={color} /></Wrapper> }
    {widget.__typename === 'WordPressAcf_rich_text' && <RichText order={index} widget={widget} color={color} /> }
    {widget.__typename === 'WordPressAcf_gallery' && <Gallery order={index} widget={widget} color={color} /> }
  </section>
));

export default PostWidgets;
