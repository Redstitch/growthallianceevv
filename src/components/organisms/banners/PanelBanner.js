import React from 'react';
import styled from 'styled-components';
import Globe, { SGlobe } from '../../atoms/Globe';
import { above, below } from '../../../styles/utilities/mediaQueries';
import Column from '../../molecules/Column';

const PanelBanner = ({ content }) => (
  <SPanelBanner>
    <Globe rotation="65deg" />
    <Globe rotation="75deg" />
    <div className="panels">
      {content.panels.map((panel, index) => (
        <Column key={`pannel${index}`} content={panel} num={index} />
      ))}
    </div>
  </SPanelBanner>
);

export default PanelBanner;

const SPanelBanner = styled.div`

  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  position: relative;
  overflow: hidden;
  z-index: 1;
  padding: 0 0 50px;

  .panels {
    ${above.ipadLand`
      display: flex;
      height: 90vh;
      margin: 0 -4%;
    `}
  }

  ${SGlobe} {
    z-index: 2;
    pointer-events: none;
    width: 100%;
    max-width: 1000px;
    animation: rotating 180s linear infinite;

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
`;
