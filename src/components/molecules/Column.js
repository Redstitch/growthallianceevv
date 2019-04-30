import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import urlFixer from '../../js/urlFixer';
import { colors, misc } from '../../styles/utilities/settings';
import { imageBG, absoluteCenter } from '../../styles/utilities/elements';
import { above, below } from '../../styles/utilities/mediaQueries';
import SPicture from '../../styles/atoms/SPicture';

const Column = ({ content }) => (
  <SColumn key={content.heading}>
    <div className="image-background">
      <Img fixed={content.image.localFile.childImageSharp.fixed} />
    </div>
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
  margin-left: -1px;
  ${imageBG};

  ${above.ipadLand`
    transform: skew(4deg);
  `}

    &:after {
      content: '';
      display: block;
      width: 101%;
      height: 101%;
      background-color: ${colors.orange};
      z-index: 0;
      opacity: .6;
      ${absoluteCenter};
    }

    &:nth-child(4n - 2) {
      &:after {
        background-color: ${colors.blue};
      }
      .content {
        a {
          &:hover {
            &:before {
              ${above.ipadLand`
                background-color: ${colors.orange};
              `}
            }
          }

          &:before {
            border-left: 10px solid ${colors.orange};
          }
        }
      }
    }

    &:nth-child(4n - 1) {
      &:after {
        background-color: ${colors.green};
      }
      .content {
        a {
          &:hover {
            &:before {
              ${above.ipadLand`
                background-color: ${colors.navy};
              `}
            }
          }

          &:before {
            border-left: 10px solid ${colors.navy};
          }
        }
      }
    }

    &:nth-child(4n) {
      &:after {
        background-color: ${colors.navy};
      }
    }


  ${SPicture} {

    img {
      display: block;
      width: 200%;
      object-fit: cover;
      position: absolute;
      left: 50%;
      top: 50%;
      margin: -20px 0;

      ${above.ipadLand`
        height: 100vh;
        transform: skew(-4deg) translateX(-50%) translateY(-50%);
      `}

      ${below.ipadLand`
        height: 100vh;
        transform: translateX(-50%) translateY(-50%);
      `}
    }
  }

  .content {
    color: ${colors.white};
    position: relative;
    z-index: 1;

    ${above.ipadLand`
      transform: skew(-4deg) translateX(-50%) translateY(-50%);
      position: absolute;
      top: 50%;
      left: 50%;
      width: 80%;
      padding: 0 20px;
    `}

    ${below.ipadLand`
      padding: 50px;
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

      /* // TODO: fix hover state */
      &:hover {
        &:before {

          ${above.ipadLand`
            border: none;
            width: 100%;
            height: 100%;
            left: 10px;
            padding: 15px 0;
            background-color: ${colors.green};
          `}
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

        ${below.ipadLand`
          z-index: 1;
        `}
      }
    }
  }
`;
