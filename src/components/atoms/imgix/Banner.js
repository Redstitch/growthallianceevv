import React from 'react';
import Imgix, { Picture, Source } from 'react-imgix';
import imageFixer from '../../../js/imageFixer';
import { breakpoints } from '../../../styles/utilities/settings';
import SPicture from '../../../styles/atoms/SPicture';

const commonProps = {
  imgixParams: {
    q: '100',
  },
};

const Banner = ({ src }) => (
  <SPicture>
    <Picture>
      <Source
        {...commonProps}
        src={imageFixer(src)}
        width={breakpoints.pageWidth}
        htmlAttributes={{ media: `(min-width: ${breakpoints.ipadLand + 1}px)` }}
      />
      <Source
        {...commonProps}
        src={imageFixer(src)}
        width={breakpoints.ipadLand}
        htmlAttributes={{ media: `(min-width: ${breakpoints.ipadPort + 1}px)` }}
      />
      <Source
        {...commonProps}
        src={imageFixer(src)}
        width={breakpoints.ipadPort}
        htmlAttributes={{ media: `(min-width: ${breakpoints.mobile + 1}px)` }}
      />
      <Source
        {...commonProps}
        src={imageFixer(src)}
        width={breakpoints.mobile}
        htmlAttributes={{ media: `(max-width: ${breakpoints.mobile}px)` }}
      />
      <Imgix
        src={imageFixer(src)}
        width={50}
        attributeConfig={{
          src: 'data-src',
          srcSet: 'data-srcset',
          sizes: 'data-sizes',
        }}
      />
    </Picture>
  </SPicture>
);

export default Banner;
