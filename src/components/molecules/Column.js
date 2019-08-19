import React from 'react';
import styled from 'styled-components';
import { colors, misc } from '../../styles/utilities/settings';
import { imageBG, absoluteCenter } from '../../styles/utilities/elements';
import { above, below } from '../../styles/utilities/mediaQueries';
import PageLink from '../atoms/PageLink';
import fonts from '../../styles/utilities/fonts';
import BackgroundImage, { SBackgroundImage } from '../atoms/BackgroundImage';


const Column = ({ content }) => (
  <SColumn key={content.heading}>
    <BackgroundImage src={content.image} />
    <div className="content">
      <h1>{content.heading}</h1>
      <p>{content.copy}</p>
      {content.button.copy && <PageLink content={content.button} /> }
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

      ${below.ipadLand`
        opacity: .7;
      `}
    }

    &:first-child {
      .content {
        ${above.ipadLand`
          margin-left: 40px;
        `}
      }
    }

    &:last-child {
      .content {
        ${above.ipadLand`
          margin-left: -40px;
        `}
      }
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

  ${SBackgroundImage} {
    height: 100%;

    ${above.ipadLand`
      width: 120%;
      margin-left: -10%;
      transform: skew(-4deg);
    `}

    ${below.ipadLand`
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
    `}
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
      padding: 53px 50px 40px;
    `}

    h1 {
      font-weight: 500;
      line-height: 1;
      ${below.pageWidth`
        max-width: 200px;
      `}
      ${below.ipadLand`
        max-width: none;
      `}
    }

    a {
      color: ${colors.white};
      display: inline-block;
      padding: 10px 20px 10px 21px;
      ${below.ipadLand`
        padding: 5px 20px 10px 21px;
      `}
      position: relative;
      transition-duration: 0s;
      opacity: 1;
      ${fonts.HelveticaNeueBold};

      /* // TODO: fix hover state */
      &:hover {
        &:before {

          ${above.ipadLand`
            border: none;
            width: 100%;
            height: 100%;
            left: 0px;
            padding: 20px 0;
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
