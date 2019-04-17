import React from 'react';
import Imgix, { Picture, Source } from 'react-imgix';
import { breakpoints } from '../../../styles/utilities/settings';
import SPicture from '../../../styles/atoms/SPicture';

const Image = ({
  src, breakPoint, maxWidth, minWidth, className, imgixProps,
}) => (
  <SPicture className={className || null}>
    <Picture>
      <Source
        {...imgixProps}
        src={src}
        width={maxWidth || breakpoints.ipadPort}
        htmlAttributes={{ media: `(min-width: ${breakPoint || breakpoints.mobile + 1}px)` }}
      />
      <Source
        {...imgixProps}
        src={src}
        width={minWidth || breakpoints.mobile}
        htmlAttributes={{ media: `(max-width: ${breakPoint || breakpoints.mobile}px)` }}
      />
      <Imgix
        {...imgixProps}
        src={src}
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

export default Image;
