import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/utilities/settings';
import { pageColor } from '../../js/autoColor';
import { below, above } from '../../styles/utilities/mediaQueries';
import PageLink from '../atoms/PageLink';
import fonts from '../../styles/utilities/fonts';
import Wrapper from '../../styles/utilities/Wrapper';

const WidgetHeader = ({ content, color }) => (
  <SWidgetHeader color={color}>
    {content.heading.title && <h3>{content.heading.title}</h3>}
    {content.heading.copy && <p>{content.heading.copy}</p>}
    {content.heading.button.copy && (
      <PageLink content={content.heading.button} />
    )}
  </SWidgetHeader>
);

export default WidgetHeader;

const SWidgetHeader = styled.div`
  margin: 50px auto;
  text-align: center;
  ${below.ipadLand`
    padding: 0;
    max-width: 500px;
    margin: 0 auto 70px;
  `}

  > p {
    ${above.smallPage`
      max-width: 600px;
    `}

    margin: 0 auto 20px;
    font-size: 15px;
    line-height: 1.75;
    color: ${colors.darkerGray};
    max-width: 700px;
  }

  h3 {
    font-size: 45px;
    color: ${({ color }) => (color ? pageColor(color) : colors.navy)};
    font-weight: 400;
    line-height: 1.15;
    max-width: 700px;
    margin: 0 auto 20px;

    ${below.ipadPort`
      font-size: 30px;
    `}
  }

  a {
    color: ${colors.orange};
    ${fonts.HelveticaNeueBold};
    position: relative;
    display: inline-block;

    &:before {
      content: '';
      display: inline-block;
      margin: 2px 5px 0 0;
      width: 0;
      height: 0;
      border-top: 7px solid transparent;
      border-bottom: 7px solid transparent;

      border-left: 7px solid ${colors.orange};
    }
  }
`;
