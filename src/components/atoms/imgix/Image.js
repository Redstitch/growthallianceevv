import React from 'react';
import Imgix, { Picture, Source } from 'react-imgix';
import imageFixer from '../../../js/imageFixer';
import { breakpoints } from '../../../styles/utilities/settings';
import CommonProps from './CommonProps';
import SPicture from '../../../styles/atoms/SPicture';

const Image = ({
  src, breakPoint, maxWidth, minWidth, className,
}) => (
  <SPicture className={className || null}>
    <Picture>
      <Source
        {...CommonProps}
        src={imageFixer(src)}
        width={maxWidth || breakpoints.ipadPort}
        htmlAttributes={{ media: `(min-width: ${breakPoint || breakpoints.mobile + 1}px)` }}
      />
      <Source
        {...CommonProps}
        src={imageFixer(src)}
        width={minWidth || breakpoints.mobile}
        htmlAttributes={{ media: `(max-width: ${breakPoint || breakpoints.mobile}px)` }}
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

export default Image;
