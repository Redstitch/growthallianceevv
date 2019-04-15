import React from 'react';
import Imgix, { Picture, Source } from 'react-imgix';
import styled from 'styled-components';
import imageFixer from '../../js/imageFixer';
import { breakpoints } from '../../styles/utilities/settings';

const Image = ({ src }) => (
  <SPicture>
    <Picture>
      <Source
        src={imageFixer(src)}
        width={breakpoints.pageWidth}
        htmlAttributes={{ media: `(min-width: ${breakpoints.ipadLand + 1}px)` }}
      />
      <Source
        src={imageFixer(src)}
        width={breakpoints.ipadLand}
        htmlAttributes={{ media: `(min-width: ${breakpoints.ipadPort + 1}px)` }}
      />
      <Source
        src={imageFixer(src)}
        width={breakpoints.ipadPort}
        htmlAttributes={{ media: `(min-width: ${breakpoints.mobile + 1}px)` }}
      />
      <Source
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

export default Image;

const SPicture = styled.div`
  picture {
    width: 100%;
    display: block;

    img {
      width: 100%;
      height: auto;
    }
  }
`;
