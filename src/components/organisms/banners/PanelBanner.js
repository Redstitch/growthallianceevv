import React from 'react';
import styled from 'styled-components';
import Globe, { SGlobe } from '../../atoms/Globe';
import { above, below } from '../../../styles/utilities/mediaQueries';
import Column from '../../molecules/Column';

const PanelBanner = ({ content }) => (
  <SPanelBanner>
    <Globe rotation="65deg" />
    <Globe rotation="75deg" />
    {content.panels.map((panel, index) => (
      <Column key={`pannel${index}`} content={panel} num={index} />
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
    margin: 0 -4%;
  `}

  ${SGlobe} {
    z-index: 2;
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
`;
