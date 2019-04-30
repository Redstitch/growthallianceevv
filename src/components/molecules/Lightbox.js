import React from 'react';
import Img from 'gatsby-image';

const Lightbox = ({ content }) => (
  <div>
    <Img fixed={content} />
  </div>
);

export default Lightbox;
