import React from 'react';
import Img from 'gatsby-image';

const ImageLoader = ({ fixed, content }) => (
  <>
    {fixed ? (
      <>
        {content.localFile ? (
          <Img fixed={content.localFile.childImageSharp.fixed} />
        ) : (
          <div className="gatsby-image-wrapper">
            <img src={content.url} alt="..." />
          </div>
        )}
      </>
    ) : (
      <>
        {content.localFile ? (
          <Img fluid={content.localFile.childImageSharp.fluid} />
        ) : (
          <div className="gatsby-image-wrapper">
            <img src={content.url} alt="..." />
          </div>
        )}
      </>
    ) }
  </>
);

export default ImageLoader;
