import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Image from '../atoms/imgix/Image';
import urlFixer from '../../js/urlFixer';
import autoColor from '../../js/autoColor';
import { breakpoints, colors, misc } from '../../styles/utilities/settings';
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

    .content {
      ${above.ipadLand`
        padding-left: 40px;
      `}
    }

    ${below.ipadLand`
      margin-top: -15px;
    `}
  }

  &:nth-of-type(4) {

    .content {
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
  }

  &:nth-of-type(5) {

    .content {
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
  }

  &:last-of-type {

    .content {
      ${above.ipadLand`
        padding-right: 40px;
      `}
    }

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
      margin: -20px 0;

      ${above.ipadLand`
        transform: skew(-4deg) translateX(-50%) translateY(-50%);
      `}

      ${below.ipadLand`
        width: 100%;
        transform: skewY(-2deg) translateX(-50%) translateY(-50%);
      `}
    }
  }

  .content {
    color: ${colors.white};
    position: relative;

    ${above.ipadLand`
      transform: skew(-4deg) translateX(-50%) translateY(-50%);
      position: absolute;
      top: 50%;
      left: 50%;
      width: 80%;
    `}

    ${below.ipadLand`
      transform: skewY(-2deg);
      padding: 60px 50px 70px;
    `}

    h2 {
      font-weight: 500;
    }

    a {
      color: ${colors.white};
      display: inline-block;
      padding-left: 20px;
      position: relative;
      transition-duration: 0s;
      opacity: 1;

      &:hover {
        &:before {
          border: none;
          width: 100%;
          height: 100%;
          left: 10px;
          padding: 15px 0;
        }
      }

      &:before {
        content: '';
        transition-duration: ${misc.animSpeed};
        display: inline-block;
        width: 0;
        height: 0;
        position: absolute;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left: 10px solid ${colors.green};
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        z-index: -1;
      }
    }
  }
`;
