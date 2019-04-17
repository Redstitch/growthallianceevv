import React from 'react';
import Imgix, { Picture, Source } from 'react-imgix';
import { breakpoints } from '../../../styles/utilities/settings';
import SPicture from '../../../styles/atoms/SPicture';
import CommonProps from './CommonProps';

const Banner = ({ src }) => (
  <SPicture>
    <Picture>
      <Source
        {...CommonProps}
        pad="30"
        src={src}
        width={breakpoints.pageWidth}
        htmlAttributes={{ media: `(min-width: ${breakpoints.ipadLand + 1}px)` }}
      />
      <Source
        {...CommonProps}
        src={src}
        width={breakpoints.ipadLand}
        htmlAttributes={{ media: `(min-width: ${breakpoints.ipadPort + 1}px)` }}
      />
      <Source
        {...CommonProps}
        src={src}
        width={breakpoints.ipadPort}
        htmlAttributes={{ media: `(min-width: ${breakpoints.mobile + 1}px)` }}
      />
      <Source
        {...CommonProps}
        src={src}
        width={breakpoints.mobile}
        htmlAttributes={{ media: `(max-width: ${breakpoints.mobile}px)` }}
      />
      <Imgix
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

export default Banner;
