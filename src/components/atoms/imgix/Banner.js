import React from 'react';
import Imgix, { Picture, Source } from 'react-imgix';
import { breakpoints } from '../../../styles/utilities/settings';
import SPicture from '../../../styles/atoms/SPicture';

const Banner = ({ src, imgixProps }) => (
  <SPicture>
    <Picture>
      <Source
        {...imgixProps}
        pad="30"
        src={src}
        width={breakpoints.pageWidth}
        htmlAttributes={{ media: `(min-width: ${breakpoints.ipadLand + 1}px)` }}
      />
      <Source
        {...imgixProps}
        src={src}
        width={breakpoints.ipadLand}
        htmlAttributes={{ media: `(min-width: ${breakpoints.ipadPort + 1}px)` }}
      />
      <Source
        {...imgixProps}
        src={src}
        width={breakpoints.ipadPort}
        htmlAttributes={{ media: `(min-width: ${breakpoints.mobile + 1}px)` }}
      />
      <Source
        {...imgixProps}
        src={src}
        width={breakpoints.mobile}
        htmlAttributes={{ media: `(max-width: ${breakpoints.mobile}px)` }}
      />
      <Imgix
        className="lazyload"
        {...imgixProps}
        src={src}
        attributeConfig={{
          src: 'data-src',
          srcSet: 'data-srcset',
          sizes: 'data-sizes',
        }}
        htmlAttributes={{
          src: `${src}?w=50`, // low quality image here
        }}
      />
    </Picture>
  </SPicture>
);

export default Banner;
