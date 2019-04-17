import React from 'react';
import styled from 'styled-components';
import { colors, misc } from '../../../styles/utilities/settings';
import Globe, { SGlobe } from '../../atoms/Globe';
import { above, below } from '../../../styles/utilities/mediaQueries';
import Column from '../../molecules/Column';

const PanelBanner = ({ content }) => (
  <SPanelBanner>
    <Globe rotation="65deg" />
    <Globe rotation="75deg" />
    {content.panels.map((panel, index) => (
      <Column content={panel} num={index} />
    ))}
  </SPanelBanner>
);

export default PanelBanner;

const SPanelBanner = styled.div`
  position: relative;
  overflow: hidden;
  z-index: 1;

  ${above.ipadLand`
    display: flex;
    height: 85vh;
    margin: 0 -41px;
  `}

  ${SGlobe} {
    z-index: 1;
    pointer-events: none;
    width: 100%;
    max-width: 1000px;

    ${below.ipadLand`
      max-width: 400px;
    `}

    &:nth-child(1) {
      top: -680px;
      left: -120px;

      ${below.ipadLand`
        top: -210px;
        left: -120px;
      `}
    }

    &:nth-child(2) {
      bottom: -680px;
      right: -120px;

      ${below.ipadLand`
        bottom: -210px;
        right: -120px;
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
      width: 75%;
    `}

    ${below.ipadLand`
      padding: 50px;
      transform: skewY(-2deg);
    `}
  }

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
        background-color: ${colors.green};
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
`;
