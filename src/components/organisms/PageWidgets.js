import React from 'react';
import SuccessStory from './widgets/SuccessStory';

const PageWidgets = ({ content, color }) => content && content.map((widget, index) => (
  <section key={`${index}${widget.__typename}`}>
    {widget.__typename === 'WordPressAcf_success_story' && <SuccessStory widget={widget} color={color} /> }
  </section>
));

export default PageWidgets;
