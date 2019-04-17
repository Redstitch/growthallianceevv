import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Image from '../atoms/imgix/Image';
import urlFixer from '../../js/urlFixer';
import autoColor from '../../js/autoColor';
import { breakpoints, colors } from '../../styles/utilities/settings';
import { imageBG } from '../../styles/utilities/elements';
import { above, below } from '../../styles/utilities/mediaQueries';
import SPicture from '../../styles/atoms/SPicture';

const Column = ({ content, num }) => (
  <SColumn key={content.heading}>
    <Image
      imgixProps={{
        imgixParams: {
          q: '100',
          blend: autoColor(num),
          balph: 70,
          bm: 'normal',
        },
      }}
      maxWidth={breakpoints.pageWidth}
      minWidth={breakpoints.ipadPort}
      src={content.image.url}
    />
    <div className="content">
      <h2>{content.heading}</h2>
      <p>{content.copy}</p>
      <Link to={urlFixer(content.link)}>Learn More</Link>
    </div>
  </SColumn>
);

export default Column;

const SColumn = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-left: -1px;
  ${imageBG};

  ${above.ipadLand`
    transform: skew(4deg);
  `}

  ${below.ipadLand`
    transform: skewY(2deg);
  `}


  &:nth-of-type(3) {

    ${below.ipadLand`
      margin-top: -15px;
    `}
  }

  &:nth-of-type(4) {

    a {
      &:hover {

        &:before {
          background-color: ${colors.orange};
        }
      }

      &:before {
        border-left-color: ${colors.orange};
      }
    }
  }

  &:nth-of-type(5) {

    a {
      &:hover {

        &:before {
          background-color: ${colors.darkerBlue};
        }
      }

      &:before {
        border-left-color: ${colors.darkerBlue};
      }
    }
  }

  &:last-of-type {
    ${below.ipadLand`
      margin-bottom: -15px;
    `}
  }

  ${SPicture} {
    img {
      display: block;
      width: auto;
      height: 85vh;
      object-fit: cover;
      position: absolute;
      left: 50%;
      top: 50%;

      ${above.ipadLand`
        transform: skew(-4deg) translateX(-50%) translateY(-50%);
      `}

      ${below.ipadLand`
        transform: skewY(-2deg) translateX(-50%) translateY(-50%);
      `}
    }
  }
`;
